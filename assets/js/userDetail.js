//Author: Tanuj Jain
//Creation Date: Apr-4-2020

// The main objective of this file is to manage user profile. 

"use strict"

var userDetail = function() {
    return {
        userName: "",
        userId: "",
        attempt: "",
        result: "",
        setUserName: function(name) {
            this.userName = name;
        },
        setUserId: function(Id){
            this.userId = id;
        },
        setAttempt: function(attemptNumner){
            this.attempt = attemptNumner;
        },
        setResult: function(resultId){
            this.result = resultid;
        }
    };
;}

var users = [];

function userProfile (resultId){
    let usersArrayIndex = users.length;
    users.push(userDetail);

    users.setUserId(uuidGenerator());
    users.setUserName("Tanuj");
    users.setResult(resultid);

}