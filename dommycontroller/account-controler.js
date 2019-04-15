import dbAccount from '../dommyDb/account';


class Account {
  /**
   * @param {*} req 
   * @param {*} res
   * @returns {*} json 
   */
  static createAccount(req, res) {
    const data = {
      accountNumber: +1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      type: req.body.type,
      openingBalance: req.body.openingBalance
    }

    if (!data.firstName || !data.lastName || !data.email || !data.type || !data.openingBalance) {
      return res.status(400).json({
        msg: 'Please enter all fields'
      })
    }

    //  Check for existing data
    dbAccount.map((account) => {
      if (account.email === data.email) {
        return res.status(400).json({
          msg: 'User already exits'
        })
      }
      dbAccount.push(data);
      return res.status(201).json({ 
        msg: 'Account created succesfully',
        data
      })
    })
  }

}

export default Account;