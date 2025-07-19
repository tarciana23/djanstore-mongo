import mongoose from 'mongoose';
import 'dotenv/config';

async function pool(){
    mongoose.connect(process.env.MONGODB)
    return mongoose.connection;
}

export default pool;
