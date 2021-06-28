
import User from './model/User'

var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:postgres@localhost:5432/mydb')


const updateUser= (userid, email, firstname, lastname)=>{
      // delete current row
      db.one('delete from public.User where userid=${userid}'
      , {  
            userid: userid,
        }
        
        ).catch(function (error) {
    console.log('ERROR:', error)
  })
    // insert new row
  db.one('INSERT INTO public.User(userid, email, firstname, lastname, grant_date) VALUES(${userid}, ${email}, ${firstname}, ${lastname}, ${grantdate}) RETURNING *'
      , {
            userid: userid,
            email: email,
            firstname: firstname,
            lastname: lastname,
            grantdate : new Date(),
        }
        
        )
        
        .catch(function (error) {
    console.log('ERROR:', error)
  })

}

 const addUser=(userid, email, firstname, lastname) => {
  
      db.one('INSERT INTO public.User(userid, email, firstname, lastname, grant_date) VALUES(${userid}, ${email}, ${firstname}, ${lastname}, ${grantdate}) RETURNING *'
      , {
            userid: userid,
            email: email,
            firstname: firstname,
            lastname: lastname,
            grantdate : new Date(),
        }
        
        )
        
        .catch(function (error) {
    console.log('ERROR:', error)
  })

};


const listUsers = () => {
 
  
  const allusers = []
   var datalist=[]
  db.many('select * from public.User')
  .then(function (data) {

    console.log('DATA:', data);
    console.log('length:',data.length)
    console.log(data[0].firstname)

    console.log(data[data.length-2].firstname)
    for (var i=0; i<data.length; i++){
        datalist.push(data[i])
    }
    console.log('--------data list---------')
    console.log(datalist)

    
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
 return datalist
  
};

export default {
  
  listUsers,
  addUser,
  updateUser,

}



db.any('select * from users where active = $1', [true])
    .then(data => {
        console.log('DATA:', data); // print data;
    })
    .catch(error => {
        console.log('ERROR:', error); // print the error;
    })
    .finally(db.$pool.end);
  /*
