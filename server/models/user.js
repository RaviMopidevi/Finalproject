const users = [
  {
    userId: 12345,
    userName: "cathy123",
    password: "icecream"
  },
  {
    userId: 55555,
    userName: "fredburger54",
    password: "password"
  },
  ,
  {
    userId: 34212,
    userName: "coolcathy34",
    password: "badpassword"
  }
]

let getUsers = () => users;

function login(username, password) {
  const user = users.filter((u) => u.userName === username);
  if(!user[0]) throw Error('User not found');
  if(user[0].password !== password) throw Error('Password is incorrect.');

  console.log(user[0]);
  return user[0];
}

module.exports = { getUsers, login };
