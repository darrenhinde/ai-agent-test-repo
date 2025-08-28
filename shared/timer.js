/**
 * Shared Timer Utility for AI Agent Evaluation
 */

class EvaluationTimer {
    constructor() {
        this.sessions = new Map();
    }

    start(testId, agentName) {
        const sessionId = `${testId}-${agentName}-${Date.now()}`;
        const session = {
            testId,
            agentName,
            startTime: Date.now(),
            endTime: null,
            duration: null
        };
        
        this.sessions.set(sessionId, session);
        console.log(`⏱️  Started timer for ${agentName} on ${testId}`);
        return sessionId;
    }

    stop(sessionId) {
        const session = this.sessions.get(sessionId);
        if (!session) {
            throw new Error('Session not found');
        }
        
        session.endTime = Date.now();
        session.duration = session.endTime - session.startTime;
        
        console.log(`⏹️  Stopped timer. Duration: ${Math.round(session.duration / 1000)}s`);
        return session;
    }

    getResults(sessionId) {
        return this.sessions.get(sessionId);
    }

    getAllResults() {
        return Array.from(this.sessions.values());
    }
}

module.exports = { EvaluationTimer };
