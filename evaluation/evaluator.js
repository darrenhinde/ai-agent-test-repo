#!/usr/bin/env node

/**
 * Simple AI Agent Evaluator
 * Runs all tests and generates a comprehensive report
 */

const fs = require('fs');
const path = require('path');
const { EvaluationTimer } = require('../shared/timer');
const { TestValidator } = require('../shared/validator');

class SimpleEvaluator {
    constructor() {
        this.timer = new EvaluationTimer();
        this.results = [];
    }

    async evaluateAgent(agentName) {
        console.log(`🤖 Evaluating agent: ${agentName}`);
        console.log('=' .repeat(50));

        const testDirs = this.getTestDirectories();
        const overallResults = {
            agent: agentName,
            timestamp: new Date().toISOString(),
            tests: [],
            summary: {
                totalTests: testDirs.length,
                passed: 0,
                averageScore: 0,
                totalTime: 0
            }
        };

        for (const testDir of testDirs) {
            console.log(`\n📋 Running test: ${testDir}`);
            
            const sessionId = this.timer.start(testDir, agentName);
            
            // TODO: Actually run the test and get real results
            const testResult = await this.runSingleTest(testDir);
            
            const session = this.timer.stop(sessionId);
            testResult.duration = session.duration;
            
            overallResults.tests.push(testResult);
            overallResults.summary.totalTime += session.duration;
            
            if (testResult.passed) {
                overallResults.summary.passed++;
            }
            
            console.log(`  ✅ Score: ${testResult.score}/100`);
        }

        // Calculate averages
        overallResults.summary.averageScore = 
            overallResults.tests.reduce((sum, test) => sum + test.score, 0) / testDirs.length;
        
        overallResults.summary.passRate = 
            (overallResults.summary.passed / overallResults.summary.totalTests) * 100;

        // Save results
        this.saveResults(overallResults);
        this.printSummary(overallResults);

        return overallResults;
    }

    getTestDirectories() {
        const testsDir = path.join(__dirname, '..', 'tests');
        return fs.readdirSync(testsDir)
            .filter(dir => fs.statSync(path.join(testsDir, dir)).isDirectory())
            .sort();
    }

    async runSingleTest(testDir) {
        // TODO: Implement actual test execution
        // For now, return mock results
        const testPath = path.join(__dirname, '..', 'tests', testDir);
        
        return {
            testId: testDir,
            testName: testDir.replace(/^\d+-/, '').replace(/-/g, ' '),
            passed: Math.random() > 0.3, // Mock: 70% pass rate
            score: Math.floor(Math.random() * 40) + 60, // Mock: 60-100 score
            feedback: 'Mock evaluation - implement actual testing logic',
            details: {
                functionalTests: { passed: 7, total: 10 },
                codeQuality: { score: 85 },
                performance: { score: 78 }
            }
        };
    }

    saveResults(results) {
        const filename = `evaluation-${results.agent}-${Date.now()}.json`;
        const filepath = path.join(__dirname, 'results', filename);
        
        fs.writeFileSync(filepath, JSON.stringify(results, null, 2));
        console.log(`\n💾 Results saved to: ${filename}`);
    }

    printSummary(results) {
        console.log(`\n📊 EVALUATION SUMMARY`);
        console.log('=' .repeat(50));
        console.log(`Agent: ${results.agent}`);
        console.log(`Tests Completed: ${results.summary.totalTests}`);
        console.log(`Tests Passed: ${results.summary.passed} (${results.summary.passRate.toFixed(1)}%)`);
        console.log(`Average Score: ${results.summary.averageScore.toFixed(1)}/100`);
        console.log(`Total Time: ${Math.round(results.summary.totalTime / 1000)}s`);
        
        console.log(`\n📋 Test Breakdown:`);
        results.tests.forEach(test => {
            const status = test.passed ? '✅' : '❌';
            console.log(`  ${status} ${test.testName}: ${test.score}/100`);
        });
    }
}

// CLI interface
if (require.main === module) {
    const agentName = process.argv[2] || 'Unknown Agent';
    const evaluator = new SimpleEvaluator();
    
    evaluator.evaluateAgent(agentName)
        .then(() => console.log('\n🎉 Evaluation complete!'))
        .catch(err => console.error('❌ Evaluation failed:', err));
}

module.exports = { SimpleEvaluator };
