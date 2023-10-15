const globalObj = new GlobalObj();
//user navigation variables>1
const userAddForm = document.querySelector(".user-add-section");
const usersList = document.querySelector(".users-list");
const nameWarning = document.querySelector(".name-warning");
import {User, GlobalObj} from './oop.js'
//1<user navigation variables
//user navigation action>1
// render handler from index>
//user delete handler
function deleteHandler(event, index){
    if(event.target.classList.contains("delete-button") || event.target.classList.contains("delete-button-line")){
        let userToBeDeleted = event.target.closest(".user");
        userToBeDeleted.remove();
        globalObj.usersArray.splice(index, 1);
        Array.from(usersList.children).reverse().forEach((element, indexOfElement) => {
            if(indexOfElement >= index){
                element.remove();
            }
        })
        globalObj.usersArray.forEach((obj, indexOfObject)=>{
            if(indexOfObject >= index ){
                createUserOnDisplay(obj);
                //console.log(obj);
            }
        })
        console.log(globalObj.usersArray);
    }
}


//gives delete feature to already created users
// Array.from(usersList.children).reverse().forEach((user, index) => {
//     console.log(index);
//     user.addEventListener('click', (event) => {
//         deleteHandler(event, index);
//     })
    
// })


//add user to user list
userAddForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(event.target.userName.value.trim().length > 2){
        createUserInList(event);
        nameWarning.classList.add("display-none");
    }
    else{
        nameWarning.classList.remove("display-none");
    }
    userAddForm.userName.value = "";
})

function addZeroHandler(number){
    return (number >= 10)? number: '0' + number
}
// create user on display>
function createUserOnDisplay(userObj){
    let index =  usersList.children.length;//globalObj.usersArray.length -1;
    const user = document.createElement("li");
    user.classList.add("user", "display-flex", "justify-content-space-between");
    usersList.insertAdjacentElement('afterbegin', user);
    const briefInfo = document.createElement("div");
    briefInfo.classList.add("user-brief-info");
    user.insertAdjacentElement('beforeend', briefInfo);
    const userName = document.createElement("h2");
    userName.classList.add("smaller-text-size");
    userName.textContent = userObj.userName;//sign
    briefInfo.insertAdjacentElement('beforeend', userName);
    const userCreateTime = document.createElement("time");
    userCreateTime.textContent = userObj.createTime;//sign
    userCreateTime.classList.add("smaller-text-size");
    briefInfo.insertAdjacentElement('beforeend', userCreateTime);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    user.insertAdjacentElement('beforeend', deleteButton);
    for(let i = 0; i < 2; i++){
        const deleteButtonLine = document.createElement("div");
        deleteButtonLine.classList.add("delete-button-line");
        deleteButton.insertAdjacentElement('beforeend', deleteButtonLine);
    }
    user.addEventListener('click', (event) => {
        let currentIndex = index;
        deleteHandler(event, currentIndex);
    })
}

//creates user on the display and in the array too
function createUserInList(event){
    let userNameValue = event.target.userName.value.trim();
    const date = new Date();
    const userObj = new User(userNameValue, `${addZeroHandler(date.getFullYear())}.${addZeroHandler(date.getMonth()+1)}.${addZeroHandler(date.getDate())}`);
    globalObj.addUserToList(userObj);

    createUserOnDisplay(userObj);
    console.log(globalObj.usersArray);
}




//1<user navigation action

