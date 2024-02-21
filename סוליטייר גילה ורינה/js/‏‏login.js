function Submit(event){
    event.preventDefault();
    let button=document.getElementById("btn");
    if(button.innerText=="Sign up"){
       sign_up();
    }
    else{
       log_in();
    }
 }
 
 function sign_up() {
    let user = create_user();
    let arr_users = read_from_local_storage('users');
    if (arr_users == null) {
       arr_users=[user];
       alert("You have successfully registered!!");
       localStorage.setItem('users', JSON.stringify(arr_users));
       localStorage.setItem('currentUser', JSON.stringify(user));
       window.location.href = "./menu.html";
       return;
    }
    let is_password_exsist = false;
    let is_plaier_exists = false;
    arr_users.forEach(element => {
       if (element.password == user.password) {
          is_password_exsist = true;
          if (element.name == user.name) {
             is_plaier_exists = true;
             return;
          }
       }
    });
 
    if (!is_password_exsist) {
       arr_users.push(user);
       const current_user = user;
       alert("You have successfully registered!!");
       localStorage.setItem('users', JSON.stringify(arr_users));
       localStorage.setItem('currentUser', JSON.stringify(current_user));
       window.location.href = "./menu.html";
       return;
    }
    if (is_password_exsist && !is_plaier_exists) {
       alert("This password is stored in the system, please choose a new password");
       return;
    }
    if (is_plaier_exists) {
       alert("This player already exists in the system, please login");
    }
 }
 
 function log_in() {
    let user = create_user();
    const arr_users = read_from_local_storage('users');
    if (arr_users == null) {
       alert("This player does not exist in the system, please sign up");
       return;
    }
 
    let is_plaier_exists = false;
    let is_password_correct = false;
    arr_users.forEach(element => {
       if (element.name == user.name) {
          is_plaier_exists = true;
          if (element.password == user.password) {
             is_password_correct = true;
             user.max_score = element.max_score;
             return;
          }
       }
    });
 
    if (is_plaier_exists && is_password_correct) {
       const current_user = user;
       localStorage.setItem('currentUser', JSON.stringify(current_user));
       window.location.href = "./menu.html";
       return;
    }
    if (!is_plaier_exists) {
       alert("This player does not exist in the system, please sign up");
       return;
    }
    if (!is_password_correct) {
       alert("The password is wrong");
    }
 }
 
 function create_user() {
    const name = document.getElementById("userNameInput").value;
    const password = document.getElementById("passwordInput").value;
    const user = {
       name: name,
       password: password,
       max_score: 0
    };
    return user;
 }
 
 function read_from_local_storage(key) {
    const obj = localStorage.getItem(key);
    const obj_json = JSON.parse(obj);
    return obj_json;
 }
 
 function replace_btns(){
    let button=document.getElementById("btn");
    let link_a=document.getElementById("link_a");
    let link_p=document.getElementById("link_p");
    if(button.innerText=="Sign up"){
       button.innerText="Login";
       button.style.background="#c51e1e"
       link_a.innerText="Sign up";
       link_p.innerText="Don't have an acount? let's ";
    }
    else{
       button.innerText="Sign up";
       button.style.background="#c51e1e"
       link_a.innerText="Login";
       link_p.innerText="Have an acount? ";
    }
 }
 
 