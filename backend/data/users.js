import bcrypt from 'bcryptjs'

const users = [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true,
    },
    {
      name: 'EShop',
      email: 'es@example.com',
      password: bcrypt.hashSync('123456', 10),
    },
    {
      name: 'MD',
      email: 'md@example.com',
      password: bcrypt.hashSync('123456', 10),
    },
  ]
  
  export default users