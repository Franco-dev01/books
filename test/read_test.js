const assert=require('assert');
const Book=require('../src/books');
const mongoose=require('mongoose');

    describe('test de read',()=> {
        let book1;
        beforeEach( (done) =>{
            book1=new Book({title:'harry poter'});
            book1.save().then( () =>{
                done();
        })

        })

        it('recherche de livre par son titre',(done)=>{
            Book.find({title:'harry poter'}).then( (books) =>{
            assert(books[0]._id.equals(book1._id));
            done();
            })
            });
 

        it('recherche de livre par son id',(done)=>{
            Book.findOne({_id:book1._id}).then( (book) =>{
                assert(book.title!==book1.title)
                done();
            })
            });
        })