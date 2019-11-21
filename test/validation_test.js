const assert=require('assert');
const Book=require('../src/books');
const mongoose=require('mongoose');

    describe('test de validation',()=> {
        it('un titre doit etre requis',(done)=>{
            const book1=new Book({title:undefined});
            const validationResultat=book1.validateSync();
            const {message}=validationResultat.errors.title;
            assert(message==='un titre doit etre requis');
            done();           
        })

        it('un livre doit avoir moins de 3000 pages',(done)=>{
            const book1=new Book({title:'les fleurs du mal',totalPages:3001});
            book1.validate((validationResultat)=>{
            const {message}=validationResultat.errors.totalPages;
            assert(message==='un livre doit avoir moins de 3000 pages');
            done();  
            })
            
                     
        })
    });