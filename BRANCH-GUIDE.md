# 🌿 Git Branch Testing Guide

## **Branch Structure for AI Agent Evaluation**

This repository uses a **git-based testing methodology** to ensure fair, blind evaluation of AI coding agents.

### **🎯 Branch Overview**

```
ai-agent-test-repo/
├── main                    # 📖 Documentation and setup
├── agent-workspace         # 🧑‍💻 Clean workspace (AI agents start here)
├── evaluation-reference    # 🧪 Tests & solutions (hidden from agents)
└── claude-implementation   # 🤖 Example AI agent work
```

## **🧑‍💻 For AI Agents Being Tested**

### **What You Can See (agent-workspace branch):**
```bash
git checkout agent-workspace
```

✅ **Task descriptions** (`TASK.md` files)  
✅ **Initial stub code** (functions with TODO comments)  
✅ **Package.json** (dependencies)  
❌ **No test files** (you can't see how you'll be evaluated)  
❌ **No reference solutions** (no cheating!)  
❌ **No evaluation criteria** (blind testing)  

### **Your Workflow:**
1. **Start from clean workspace**: `git checkout agent-workspace`
2. **Create your branch**: `git checkout -b your-agent-name-implementation`
3. **Read task requirements**: `cat tests/01-simple-implementation/TASK.md`
4. **Implement solution**: Edit files in `tests/*/initial/` directories
5. **Commit your work**: `git add . && git commit -m "Implement solution"`
6. **Submit for evaluation**: Your branch gets compared against `agent-workspace`

## **🧪 For Evaluators**

### **Evaluation Process:**
```bash
# Compare agent's work against clean workspace
bun scripts/evaluate-enhanced.ts \
  --mode git \
  --repoPath . \
  --baseBranch agent-workspace \
  --targetBranch your-agent-name-implementation \
  --agent "YourAgentName" \
  --session "test-001"
```

### **What Gets Evaluated:**
- **Git diff analysis**: Exactly what code was added/changed
- **Code quality**: Structure, best practices, error handling
- **Functional tests**: Does the implementation work correctly?
- **Implementation completeness**: Are all requirements met?

## **🔍 Branch Details**

### **`agent-workspace` - The Testing Environment**
- **Purpose**: Clean starting point for all AI agents
- **Contents**: Only task descriptions and stub code
- **Isolation**: No tests, solutions, or evaluation hints
- **Fairness**: Identical starting conditions for all agents

**Example of what agents see:**
```javascript
// tests/01-simple-implementation/initial/utils.js
function deepClone(obj) {
  // TODO: Implement deep cloning
  // Handle: objects, arrays, primitives, null, undefined
  throw new Error('Not implemented');
}
```

### **`evaluation-reference` - The Hidden Truth**
- **Purpose**: Contains tests and reference implementations
- **Contents**: Comprehensive test suites, reference solutions
- **Access**: Only evaluators can see this branch
- **Usage**: Used to validate agent implementations

**Example of hidden tests:**
```javascript
// tests/01-simple-implementation/tests/utils.test.js
describe('deepClone', () => {
  test('should clone nested objects', () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned.b).not.toBe(obj.b);
  });
});
```

### **`claude-implementation` - Example Agent Work**
- **Purpose**: Demonstrates how an AI agent's work looks
- **Contents**: Partial implementation of utility functions
- **Score**: 82/100 (B grade) for implementing 1 out of 5 functions
- **Learning**: Shows progression from stub code to working implementation

## **🎯 Why This Approach Works**

### **✅ Fair Testing**
- All agents start from identical conditions
- No agent can see evaluation criteria beforehand
- Git diff provides objective measurement of changes

### **✅ Realistic Scenarios**
- Agents work with real code repositories
- Tasks mirror actual development work
- Version control workflow matches industry practices

### **✅ Transparent Evaluation**
- All scoring methodology is documented
- Git history provides complete audit trail
- Results are reproducible and verifiable

### **✅ Scalable Framework**
- Easy to add new test scenarios
- Simple to onboard new AI agents
- Automated evaluation pipeline

## **🚀 Getting Started**

### **Clone and Explore:**
```bash
git clone https://github.com/darrenhinde/ai-agent-test-repo.git
cd ai-agent-test-repo

# See all branches
git branch -a

# Explore what AI agents see
git checkout agent-workspace
ls tests/01-simple-implementation/

# See evaluation reference (evaluators only)
git checkout evaluation-reference
ls tests/01-simple-implementation/

# See example implementation
git checkout claude-implementation
git diff agent-workspace claude-implementation
```

### **Run Evaluation:**
```bash
# Install evaluation framework
git clone https://github.com/your-org/ai-evaluation-framework.git
cd ai-evaluation-framework

# Run evaluation
bun scripts/evaluate-enhanced.ts \
  --mode git \
  --repoPath ../ai-agent-test-repo \
  --baseBranch agent-workspace \
  --targetBranch claude-implementation \
  --agent "Claude" \
  --session "demo"
```

## **📊 Example Results**

The `claude-implementation` branch shows a **partial implementation** that scored **82/100 (B grade)**:

- ✅ **Implemented**: `deepClone` function (1/5 functions)
- ✅ **Code Quality**: Clean, well-structured implementation
- ⚠️ **Incomplete**: 4 functions still have TODO comments
- 📈 **Potential**: Shows clear understanding of requirements

This demonstrates how the evaluation system can:
- Distinguish between complete and partial implementations
- Provide objective scoring based on actual code changes
- Give detailed feedback for improvement

---

**Ready to test your AI agent?** Start with `git checkout agent-workspace` and see how well your agent performs! 🚀