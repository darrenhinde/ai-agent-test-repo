# 🤖 AI Agent Test Repository

A comprehensive testing suite for evaluating AI coding agents across different skill levels and domains.

## 🎯 Overview

This repository contains **5 progressive test scenarios** designed to evaluate AI agents on:
- **Basic Implementation Skills** (utility functions, algorithms)
- **UI/Frontend Development** (responsive design, user interfaces)  
- **API Integration** (data fetching, error handling, async operations)
- **Complex Logic** (advanced algorithms, system design)
- **Full-Stack Development** (end-to-end application building)

## 🚀 Quick Start

### For AI Agents Being Tested

1. **Clone this repository**
   ```bash
   git clone <repo-url>
   cd ai-agent-test-repo
   npm install
   ```

2. **Choose your test scenario**
   ```bash
   cd tests/01-simple-implementation  # Start with basics
   # OR
   cd tests/02-ui-dashboard          # Try UI development
   # OR choose any other test
   ```

3. **Read the requirements**
   ```bash
   cat TASK.md                       # Quick overview
   cat README.md                     # Detailed requirements
   ```

4. **Implement your solution**
   - Work in the `initial/` directory
   - Follow the requirements in TASK.md
   - Test your implementation regularly

5. **Validate your work**
   ```bash
   npm test                          # Run validation tests
   ```

### For Evaluators

1. **Run comprehensive evaluation**
   ```bash
   node evaluation/evaluator.js "Agent Name"
   ```

2. **View results**
   ```bash
   ls evaluation/results/            # See all evaluation results
   ```

## 📋 Test Scenarios

| Test | Difficulty | Time | Skills |
|------|------------|------|--------|
| **01-Simple Implementation** | ⭐ | 15-20 min | Basic algorithms, utility functions |
| **02-UI Dashboard** | ⭐⭐ | 25-35 min | HTML/CSS, responsive design, JavaScript |
| **03-API Integration** | ⭐⭐⭐ | 30-40 min | REST APIs, async/await, error handling |
| **04-Complex Logic** | ⭐⭐⭐⭐ | 40-50 min | Advanced algorithms, data structures |
| **05-Full Stack** | ⭐⭐⭐⭐⭐ | 60-75 min | End-to-end development, architecture |

## 🎯 Evaluation Criteria

Each test is evaluated on:
- **Functionality** (40%): Does it work as specified?
- **Code Quality** (25%): Clean, maintainable, well-structured code?
- **Problem Solving** (20%): Good approach to solving the challenges?
- **Edge Cases** (15%): Handles errors and edge cases properly?

## 📊 Scoring System

- **A (90-100%)**: Exceptional implementation, exceeds expectations
- **B (80-89%)**: Good implementation with minor issues
- **C (70-79%)**: Adequate implementation, meets basic requirements
- **D (60-69%)**: Below expectations, significant issues
- **F (0-59%)**: Major problems or non-functional

## 🔧 Repository Structure

```
ai-agent-test-repo/
├── tests/                    # Test scenarios
│   ├── 01-simple-implementation/
│   │   ├── initial/         # Starting code (work here)
│   │   ├── solution/        # Reference solution
│   │   ├── tests/          # Validation tests
│   │   ├── TASK.md         # Quick overview
│   │   └── README.md       # Detailed requirements
│   ├── 02-ui-dashboard/
│   ├── 03-api-integration/
│   ├── 04-complex-logic/
│   └── 05-full-stack/
├── shared/                   # Common utilities
├── evaluation/              # Evaluation system
│   ├── evaluator.js        # Main evaluation script
│   └── results/            # Evaluation results
└── README.md               # This file
```

## 🎮 Usage Examples

### Test a Single Scenario
```bash
cd tests/01-simple-implementation
npm install
npm test                    # Validate your implementation
```

### Run Full Evaluation
```bash
node evaluation/evaluator.js "Claude"
node evaluation/evaluator.js "GPT-4"
node evaluation/evaluator.js "Gemini"
```

### Compare Results
```bash
# Results are saved in evaluation/results/
# Compare JSON files to see performance differences
```

## 🏆 Success Tips for AI Agents

1. **Read requirements carefully** - Understanding the task is half the battle
2. **Start simple** - Get basic functionality working first
3. **Test frequently** - Run tests early and often
4. **Handle edge cases** - Consider null values, empty inputs, error conditions
5. **Write clean code** - Use good naming, structure, and comments
6. **Time management** - Don't spend too long on any single part

## 🔍 For Researchers & Evaluators

This test suite is designed to provide:
- **Objective measurements** of AI coding capabilities
- **Progressive difficulty** to identify skill levels
- **Diverse domains** to test different types of intelligence
- **Reproducible results** for fair comparisons
- **Detailed feedback** for improvement insights

## 📈 Contributing

To add new test scenarios:
1. Create a new directory in `tests/`
2. Follow the established structure (initial/, solution/, tests/, TASK.md, README.md)
3. Update this README with the new test information
4. Test thoroughly before submitting

## 📄 License

MIT License - Feel free to use this for AI agent evaluation and research!

---

**Happy Testing!** 🚀 May the best AI agent win! 🏆
