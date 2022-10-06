const router = require('express').Router()

const crubServices = require('./crub.services')

router.route('/users')
        .get(crubServices.getCrub)
        .post(crubServices.resgisterUser)

router.route('/users/:id')
        .get(crubServices.getOneUser)

exports.router = router