const assert=require('assert');
const User=require('../src/users');

    describe('test de relation',()=> {
        it('Test la taille de la liste d un user ',(done)=>{
            const user1=new User({
                name:'Robin',
                books:({title:'le seigneur des anneaux'},{title:'les raisins de la colere'})
            });
            user1.save().then( () =>User.findOne({name:'Robin'})
            .then((user)=>{
                assert(user.books.length===2);
                done();
            })
            )
               
        });
    });