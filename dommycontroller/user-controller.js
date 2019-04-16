import db from '../seed/seed';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from 'config';

class User {
  /**
   * @param {*} req 
   * @param {*} res
   * @returns {*} json 
   */
  static createUser(req, res) {
    const user = {
      id: db.length + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      type: req.body.type,
      isAdmin: req.body.isAdmin,
      password: req.body.password
    }

    if (!user.firstName || !user.lastName || !user.email || !user.type || !user.isAdmin || !user.password) {
      return res.status(400).json({
        msg: 'Please enter all fields'
      })
    }

    //  Check for existing user
    // db.map((data) => {
    //   if (data.email === user.email) {
    //     return res.status(400).json({
    //       msg: 'User already exits'
    //     })
    //   }
    // })

    // Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) throw err;
        user.password = hash;
        db.push(user);

        // Sign Token
        jwt.sign({
            isAdmin: user.isAdmin,
            type: user.type
          },
          config.get('jwtSecret'), {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) throw err;
            return res.status(201).json({
              status: 201,
              token,
              user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
              }
            })
          })
      })
    })
  }

  /**
   * @param {*} req 
   * @param {*} res
   * @returns {*} json 
   */
  static loginUser(req, res) {
    const {
      email,
      password
    } = req.body

    if (!email || !password) {
      return res.status(400).json({
        msg: 'Please enter all fields'
      })
    }
    //  Check for user
    db.map((data) => {
      if (!data.email === email) {
        return res.status(400).json({
          msg: 'User does not exit'
        })
      }
      console.log(password, data.password)
      bcrypt.compare(data.password, password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});

          // Sign Token
          jwt.sign({
              isAdmin: data.isAdmin,
              type: data.type
            },
            config.get('jwtSecret'), {
              expiresIn: 3600
            },
            (err, token) => {
              if (err) throw err;
              return res.status(201).json({
                status: 201,
                token,
                data: {
                  id: data.id,
                  firstName: data.firstName,
                  lastName: data.lastName,
                  email: data.email
                }
              })
            })
        })
        .catch(err => console.log(err));
    })
  }

}

export default User;