const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,       
    },
    email:{
        type: String,
        required: [true, 'Email is requred'],
        trim: true,
        unique: [true, 'Email is must be unique!']
    },
    password:{
        type: String,
        required: [true, 'Password is requred'],
        select: false,
        trim: true
    },
    role: {
        type: String,
        default:'jobseeker'
    }
});

modules.exports = mongoose.model('User', userSchema);