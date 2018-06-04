import express from 'express'
import jwt from 'jsonwebtoken'

const Router = express.Router

class Auth extends Router {
    constructor (token) {
        this.token = jwt.sign()
    }

    register () {

    }
    
    signup () {

    } 

    
}




Router.route('/api/v1/auth')
    .get((req, res, next) => {
        
    })
    .post()
    .put()
    .delete()
module.exports = Router