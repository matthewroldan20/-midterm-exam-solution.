const { Sequelize, DataTypes } = require('sequelize');

// Set up the Sequelize connection
const sequelize = new Sequelize('mysql://user:password@localhost:3306/database_name');

// Define the Users model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

// Sync the model with the database
sequelize.sync();

// Express setup
const express = require('express');
const app = express();

// Route to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});