import mongoose from 'mongoose';

export default async function connectionDB(timeout = 5000) {
    try {
        await mongoose.connect('mongodb://localhost:27017/test', {
            serverSelectionTimeoutMS: timeout,
        });
        console.log('Connected to DB');
    } catch (error) {
        console.log('failed connected to DB');
        console.error(error);
    }
}
