var db = require('../config/connection')
var collection = require('../config/collection')


module.exports = {

    userData:(data) => {
        console.log( data );
        return new Promise(( resolve,reject ) => {
            let user = {
                Fname: data.fname,
                Lname: data.lname,
                Mobile: `+91${data.mobile}`,
                Email: data.email,
                CompanyName: data.companyName,
                Address: data.address,
                City: data.city,
                State: data.State,
                Country: data.country,
                Status: true
            }
            db.get().collection(collection.USER_REGISTER_COLLECTION).insertOne(user).then((response)=> {
                resolve(response)
            })

        })

    }
}