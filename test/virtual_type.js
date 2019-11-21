const assert=require('assert');
const User=require('../src/users');
const mongoose=require('mongoose');

    describe('test de virtual type',()=> {
        it('test du virtual type countBooks',(done)=>{
            const user1=new User(
                {
                name:'Robin',
                books:[
                    {title:'le seigneur des anneaux'},
                    {title:'les raisins de la colere'}
                ]
            });


            user1.save()
            .then( () =>{
                User.findOne({name:'Robin'})
                .then( (user) => {
                    assert(user.countBooks===2);
                    done();

                })
               
            });
        })
    });