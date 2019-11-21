const assert=require('assert');
const Book=require('../src/books');
const mongoose=require('mongoose');

describe('test de update',()=> {
    let book1;
    let newTitle='game of trone';
    beforeEach( (done) =>{
        book1=new Book({title:'Moby dick'});
        book1.save().then( () =>{
            done();
         })
         })

         

function assertTitle(promise,done){
    promise.then(()=>{
        Book.find({}).then( (books)=>{
            assert(books[0].title===newTitle);
            done()
        })
    })
}


            it('update depuis un instance',(done)=>{
                book1.set('title',newTitle)
                assertTitle(book1.save(),done)
                })

            it('update depuis le model',(done)=>{
                assertTitle(Book.update({title:'Moby Dick'},{title:newTitle}),done)
                    
                    })
 

            it('recherche un livre par son titre et update (findOneAndUpdate)',(done)=>{
                assertTitle(Book.findOneAndUpdate({title:newTitle}),done)
                            
                    })

            it('recherche un livre par son id et update (findByIdAndUpdate)',(done)=>{
                assertTitle(Book.findByIdAndUpdate(book1._id,{title:newTitle}),done)
                                    
                    }) 

           it('recherche un livre par son id et incremente son nombre de pages',(done)=>{
                assertTitle(Book.findByIdAndUpdate(book1._id,{title:newTitle}),done)
                                            
                    })
                    
            it('recherche un livre et increment le nombre de pages',(done)=>{
                Book.update({title:'Moby Dick'},{$inc:{totalPages:3}})
                .then( ()=> Book.findOne({title:'Moby Dick'}))
                .then( (book)=>{
                    assert(book.totalPages===3);
                    done()
                })                                            
            })     
 })