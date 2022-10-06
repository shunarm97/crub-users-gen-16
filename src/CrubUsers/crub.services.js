const usersControllers = require('./users.controllers')


const getCrub = (req,res) => {
    const data = usersControllers.getAllUsers()
    res.status(200).json(data)
}

const getOneUser = (req, res) => {
    const id = req.params.id
    const data = usersControllers.getById(id)
    if(data) {
       return res.status(200).json(data)
    } else {
        return res.status(404).json({message: "invalid id"})
    }
}

const resgisterUser = (req, res) => {
    const data = req.body
    if(!data) {
        return res.status(400).json({message: "missing data"})
    } else if (
        !data.first_name ||
        !data.last_name ||
        !data.email ||
        !data.password ||
        !data.birthday 
    ) {
        res.status(400).json({message: "all fields must be completed"})
    } else {
        const response = usersControllers.createUsers(data)
        return res.status(201).json({message: `user created susccerfully with id: ${response.uuid}`, user: response})
    }
}

module.exports = {
    getCrub,
    getOneUser,
    resgisterUser
}

