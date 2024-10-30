const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '255070',
    database: 'express_login_demo',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Secure Login route (SQL injection protected using prepared statements)
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

        const [result] = await pool.query(query, [username, password]);

        if (result.length > 0) {
            if (username === 'admin') {
                const [allUsers] = await pool.query(`SELECT * FROM users`);
                let userList = allUsers.map(user => `${user.username} (${user.password})`);
                res.send(`Admin view:<br>${userList.join('<br>')}`);
            } else {
                let userList = result.map(user => `${user.username} (${user.password})`);
                res.send(userList.join('<br>'));
            }
        } else {
            res.send('Login failed');
        }
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Server error');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
