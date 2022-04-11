// POST method implementation:
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}

//setting local storage
function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

function removeCurrentUser() {
  localStorage.removeItem('user')
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener('click', logout)

function logout() {
  removeCurrentUser();
  window.location.href = "login.html";
}

const loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const pswd = document.getElementById("pswd").value;
  postData('http://localhost:3000/users/login', {username: name, password: pswd})
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "bmi.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#login-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });
}

const regForm = document.getElementById("reg-form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const pswd = document.getElementById("pswd").value;

  postData('http://localhost:3000/users/register', {username: name, password: pswd})
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "bmi.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#reg-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });

}
