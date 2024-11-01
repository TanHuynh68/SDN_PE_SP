// db.js
const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/test_pe";
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
