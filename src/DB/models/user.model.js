import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:20

    },
    lname:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:20

    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,

    },
    password:{
        type:String,
        required:function(){
            return this.provider === "system" ? true : false;
        },
        trim:true,
        minlength:6,
        

    },
    age:{
        type:Number,
        required:function(){
            return this.provider === "system" ? true : false;
        },
        trim:true,
        min:18,
        max:100
    },
    gender:{
        type:String,
        enum:["male","female"],
        default:"male"
    },
    profileImage:{
        type:String,
        default:""
    },
    phone:{
        type:String,
        required:function(){
            return this.provider === "system" ? true : false;
        },
        
        trim:true
    },
    provider:{
        type:String,
        enum:["google","system"],
        default:"system"
    },
    isConfirmed:{
        type:Boolean,
        default:false
    }

    
    },{
        timestamps:true,
        strict:true,
        strictQuery:true,
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
    }
);
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;