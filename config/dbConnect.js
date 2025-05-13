const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        // Change process.env.config to process.env.MONGO_URL
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected successfully");
    } catch (error) {
        // Improve error logging by showing the actual error
        console.log("Error in DB connection:", error.message);
    }
}

module.exports = dbConnect;