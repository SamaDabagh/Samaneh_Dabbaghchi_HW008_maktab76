function login(event) {
  console.log(event);
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  const loginInfo = { username: username, password: password };
  localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
  //ex2:
  let infos = JSON.parse(localStorage.getItem("loginInfo"));
  let passCode = infos.password.split("").reduce((acc, e) => (acc += "*"), "");
  setTimeout(() => {
    const element = document.getElementById("removing");
    element.remove();

    // Create element:
    const para = document.createElement("h5");

    para.innerHTML = `"Welcom ${infos.username}" and your Password is "${passCode}".`;

    // Append to another element:
    document.getElementById("second-page").appendChild(para);
  }, 5000);
}
