import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    phone: 8888888888,
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    phone: 2222222222,
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    phone: 5555555555,
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
