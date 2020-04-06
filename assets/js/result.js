//Author: Tanuj Jain
//Creation Date: Apr-4-2020

// The main objective of this file is to manage results.

"use strict"

let result = function(){
    return {
            questionId: "",
            answer: "",
            questionStatus: "",
    };
    setQuestionID = function (queId) {
        this.questionId = queId;
    },
    setAnswer = function (answ) {
        this.answer = answ;
    },
    setQuestionStatus = function (status){
        this.questionStatus = status;
    }
;}

var results = function(){
    return {
        resultId: "",
        userId: "",
        result : [],
        setResultId : function(id){
            this.resultId = id;
        },
        setUserId : function (uid){
            this.userId = uid;
        },
        setResult : function (quesId, ans, status){
            var arrayLength = this.result.length;
            this.result.push(result);
            this.result[arrayLength].setQuestionID(quesId);
            this.result[arrayLength].setAnswer(ans);
            this.result[arrayLength].setQuestionStatus(status);
        },
    };
};

let executionResults = [];

function resultUpload (userId,result) {
    let resultArrayIndex = executionResults.length;
    executionResults.push(results());

    executionResults.setResultId(uuidGenerator());
    executionResults.setUserId(userId);
    executionResults.setResult(result);

}