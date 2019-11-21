const assert=require('assert');
const Book=require('../src/books');
const mongoose=require('mongoose');

    describe('creation d un livre',()=> {
        it('sauvegarde d un livre',()=>{
            const book1=new Book({title:'harry poter'});
            book1.save().then( () =>{
                assert(!book1.isNew);
                done();
            });
        })
    });