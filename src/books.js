const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const BookShema=new Schema({
    title:{type:String,required:[true,'un titre doit etre requis']},
    totalPages:{
        type:Number , default:0,
        validate:{
            validator:(totalPages)=> totalPages<3000,
            message:'un livre doit avoir moins de 3000 pages'
        }
    }
})
const Book= mongoose.model('book',BookShema);
module.exports=Book;