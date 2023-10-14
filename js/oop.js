export class GlobalObj{
    #usersArray = [];
    constructor(){
    }
    get usersArray(){
        return this.#usersArray;
    }
    addUserToList(user){
        this.usersArray.push(user);
    }
}

export class User {
    #userName;
    #createTime;
    constructor(userName, createTime){
        this.userName = userName;
        this.createTime = createTime;
    }
    get userName(){
        return this.#userName;
    }
    get createTime(){
        return this.#createTime;
    }
    set userName(userName){
        this.#userName = userName;
    }
    set createTime(date){
        this.#createTime = date;
    }
}