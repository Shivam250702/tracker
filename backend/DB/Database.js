import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    try {
        const db = process.env.MONGO_URL

        const { connection } = await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected to ${connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
       
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
