const uuid = require('uuid')

const DBusers = [
    {
        "uuid": "4658609b-1127-4b59-aa17-a163affc1b62",
        "first_name": "alexander",
        "last_name": "toscano",
        "email": "alex123.example.com",
        "password": "root123",
        "birthday": "1997/02/19"
    },
    {
        "uuid": "be4e0936-5c5c-436d-aa3a-8d25659ee2be",
        "first_name": "david",
        "last_name": "portillo",
        "email": "david123.example.com",
        "password": "root321",
        "birthday": "1997/03/09"
    }
] 

const getAllUsers = () => {
    return DBusers
}

const getById = (id) => {
    const data = DBusers.filter(items => items.uuid === id)
    return data.length ? data[0] : false
}


const createUsers = (data) => {
    const newUser = {
        uuid : uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }
    DBusers.push(newUser)
    return newUser

}

// console.log(getById('3'))


module.exports = {
    getAllUsers,
    getById,
    createUsers
}