const mongoose=require('mongoose');
mongoose.Promise=global.Promise;

before( (done) =>{
    mongoose.connect('mongodb://localhost/books_test',{
        useNewUrlParser:true
    });
    
    mongoose.connection
        .once('open',()=>{
            console.log('la connexion est établie avec succes'); done()})
        .on('error',(error)=>{
            console.warn('erreur de connexion',error)})
})


beforeEach("suprimer les enciens livres", (done) =>{
    const {books}=mongoose.connection.collections;
    books.drop(() => {
        done();
    })
})