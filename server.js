const express = require('express')
const mongoose = require('mongoose')
require('dotenv')

const app = express();

app.use(express.json());

mongoose.connect(MONGO_URI).then(() => {
    console.log('Database is connected successfully');
    
}).catch((error) =>{
    console.error('Database connection error:', err);
    
}) 


PORT = process.env.MONGO_URI || 5000

app.listen(PORT, () => {
    console.log(`Server is running on localhost ${PORT}`);
    
})