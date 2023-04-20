import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URL);
        const conn = await mongoose.connect(process.env.MONGO_COMPASS_URL);
        console.log(`Connected to MongoDB database ${conn.connection.host} `.bgYellow.blue);
    }
    catch (err) {
        console.log(`Error while mongoDB connection : ${err}`.bgRed.white);
    }
}

export default connectDB;