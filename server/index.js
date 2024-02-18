import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect';

dotenv.config(); //pool environment variable from dotenv

const app = express(); //initialize our express application
app.use(cors()); //adding middleware
app.use(express.json( { limit: '50mb' } )); //another middleware

//first route
app.get('/', async(req, res) => {
    res.send('Hello from AI Image Generator');
})


//to run our app
const startServer = async() => {

    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
    }
    catch{error}
    {
        console.log(error);
    }
}

startServer();