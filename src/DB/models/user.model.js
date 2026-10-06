import mongoose from 'mongoose';
import { GenderEnum, RoleEnum, ProviderEnum } from '../../common/enum/user.enum.js';

const userSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 20
        },
        lname: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 20
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: function () {
                return this.provider === ProviderEnum.system;
            },
            trim: true
        },
        age: {
            type: Number,
            required: function () {
                return this.provider === ProviderEnum.system;
            },
            trim: true,
            min: 18,
            max: 100
        },
        gender: {
            type: String,
            enum: Object.values(GenderEnum),
            default: GenderEnum.male
        },
        profileImage: {
            type: String
        },
        role: {
            type: String,
            enum: Object.values(RoleEnum),
            default: RoleEnum.user
        },
        phone: {
            type: String,
            required: function () {
                return this.provider === ProviderEnum.system;
            },
            trim: true
        },
        provider: {
            type: String,
            enum: Object.values(ProviderEnum),
            default: ProviderEnum.system
        },
        isConfirmed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        strict: true,
        strictQuery: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;