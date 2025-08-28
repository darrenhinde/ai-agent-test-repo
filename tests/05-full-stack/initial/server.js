/**
 * Full Stack Application - Backend
 * TODO: Implement complete backend with API, database, authentication
 */

const express = require('express');
const app = express();

// TODO: Implement full backend
// Requirements:
// - User authentication (JWT)
// - CRUD operations for tasks
// - Database integration (SQLite/PostgreSQL)
// - API documentation
// - Error handling middleware
// - Input validation
// - Rate limiting
// - Logging

app.get('/', (req, res) => {
    res.json({ message: 'Full stack backend - implement according to requirements' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
