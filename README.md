# SQL Injection Demo (School assignment)

This project demonstrates how a basic web application can be vulnerable to **SQL Injection** attacks. The application includes a login form connected to a MySQL database, with intentionally insecure SQL query handling.

## Content

The purpose of this project is to highlight the risks of improper SQL query construction and encourage the use of **prepared statements** to prevent such vulnerabilities. The project contains two key files:
- **Unsecure File** (`Backend/unsecure.js`): This version of the server is vulnerable to SQL injection.
- **Secure File** (`Backend/solution/secure.js`): This version of the server uses prepared statements to securely handle SQL queries.

and the database:
- **Database** (`Database/SQLInjections.sql`): Copy this database into MySql and run it.
