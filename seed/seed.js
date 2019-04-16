export default {
  users: [
    {
      id:1,
      "email": "user1@gmail.com",
      "firstName": "Pearl",
      "lastName": "Pearson",
      "password": "123456",
      "type": "client",
      "isAdmin": Boolean
    },
    {
      id:2,
      "email": "user2@gmail.com",
      "firstName": "Poppy",
      "lastName": "Push",
      "password": "123456",
      "type": "client",
      "isAdmin": Boolean
    }
  ],
  accounts: [
    {
      id: 1,
      accountNumber: 1000050001,
      createdOn: '03/03/2019',
      owner: 1,
      type: 'savings',
      status: 'active',
      balance: 50000,
    },
    {
      id: 2,
      accountNumber: 1000050002,
      createdOn: '03/03/2019',
      owner: 2,
      type: 'savings',
      status: 'active',
      balance: 60000,
    },
  ],
  transactions: [
    {
      id: 1,
      createdOn: '03/03/2019',
      type: 'debit',
      accountNumber: 1000050001,
      cashier: 1,
      ammount: 8000,
      oldBalance: 50000,
      newBalance: 58000,
    },
    {
      id: 2,
      createdOn: '03/03/2019',
      type: 'credit',
      accountNumber: 1000050002,
      cashier: 2,
      amount: 3500,
      oldBalance: 50000,
      newBalance: 53500,
    },
  ],
};


export default userDetails;