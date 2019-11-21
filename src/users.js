const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const BookShema=require('./books').schema

const UserShema=new Schema({
name:String,
books:[BookShema]
    
});

UserShema.virtual('countBooks').get(function(){
    return this.books.length;
})
const User= mongoose.model('user',UserShema);
module.exports=User;