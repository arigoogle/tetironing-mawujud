import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    photo: {type: String, required: true},
    fisrtName: {type: String},
    LastName: {type: String},
    planId: {type: Number, default: 1},
    creditBalance: {type: Number, default: 10},
    createdAt: {type: Date},
    updatedAt: {type: Date},

});

const User = models?.User  || model('User', UserSchema);

export default User;
