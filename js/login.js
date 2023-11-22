const login = document.getElementById('loginBtn');

login.addEventListener('click', (event) => {
  event.preventDefault();

  const username = document.getElementById('logUsername').value;
  const password = document.getElementById('logPassword').value;

  if (username == 'admin' && password == 'admin') {
    window.location.href = './adminPanel.html';
    return;
  }

  if (username in localStorage) {
    let user = localStorage.getItem(username);
    user = JSON.parse(user);
    const userPass = user.password;
    if (password == '') {
      document.getElementById('result').innerHTML = 'Type your password';
    } else if (password == userPass) {
      // alert("Logged in")
      const loggedIn = {
        loggedIn: true,
        username,
      };
      localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
      window.location.href = '../html/index.html';
    } else {
      document.getElementById('result').innerHTML = 'Incorrect password';
    }
  } else {
    document.getElementById('result').innerHTML = 'Please, register';
  }
});

const eyeicon = document.getElementById('eyeicon');
const passw = document.getElementById('logPassword');
eyeicon.onclick = function () {
  if (passw.type == 'password') {
    passw.type = 'text';
    eyeicon.name = 'eye-outline';
  } else {
    passw.type = 'password';
    eyeicon.name = 'eye-off-outline';
  }
};
