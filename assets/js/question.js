//Author: Tanuj Jain
//Creation Date: Apr-4-2020

// The main objective of this file is to declare a fucntion to create question
// data bank and store it in Local Storage. Also to provide fucntion to store/
// read data from local storage. 

"use strict"

var quizQuestionBankDataStructure = function () {
    return {
        questionModule: "",
        questionId: "",
        question : "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        rightAnswer: "",
        setQuestionModule: function(module){
            this.questionModule = module;
        },
        setQuestionId: function(id){
            this.questionId = id;
        },
        setQuestion: function(question){
            this.question = question;
        },
        setOption1: function(option){
            this.option1 = option;
        },
        setOption2: function(option){
            this.option2 = option;
        },
        setOption3: function(option){
            this.option3 = option;
        },
        setOption4: function(option){
            this.option4 = option;
        },
        setRightAnswer: function(optionanswer){
            this.rightAnswer = optionanswer;
        }
    };
};

//var questionBank = new quizQuestionBankDataStructure();
//removeItemFromLocalStorage("Question Bank");

var questionBank = [];


function populateQuestionBank() {
    let questionBankArrayIndex = questionBank.length;
    //console.log("array index Length of questionBankArrayIndex =", questionBankArrayIndex );
    questionBank.push(quizQuestionBankDataStructure());

    questionBank[questionBankArrayIndex].setQuestionId(uuidGenerator());  //Generate Unique ID for all Question. 
    questionBank[questionBankArrayIndex].setQuestionModule("JavaScript");
    questionBank[questionBankArrayIndex].setQuestion("What is the HTML tag under which one can write the JavaScript code?");
    questionBank[questionBankArrayIndex].setOption1("1. <javascript>")
    questionBank[questionBankArrayIndex].setOption2("2. <scripted>")
    questionBank[questionBankArrayIndex].setOption3("3. <script>")
    questionBank[questionBankArrayIndex].setOption4("4. <js>")
    questionBank[questionBankArrayIndex].setRightAnswer("3. <script>");
    //console.log(questionBank);
    //console.log("array index Length of questionBank Array is =", questionBank.length );

    questionBankArrayIndex = questionBank.length;
    console.log("array index Length of questionBankArrayIndex =", questionBankArrayIndex );
    questionBank.push(quizQuestionBankDataStructure());
    questionBank[questionBankArrayIndex].setQuestionId(uuidGenerator());
    questionBank[questionBankArrayIndex].setQuestionModule("Java Script");
    questionBank[questionBankArrayIndex].setQuestion("This is question 2 on Java script");
    questionBank[questionBankArrayIndex].setOption1("1. This is Answer 10")
    questionBank[questionBankArrayIndex].setOption2("2. Right Answer 20")
    questionBank[questionBankArrayIndex].setOption3("3. This is Answer 30")
    questionBank[questionBankArrayIndex].setOption4("4. This is Answer 40")
    questionBank[questionBankArrayIndex].setRightAnswer("2. Right Answer 20");
    //console.log(questionBank);
    //console.log("array index Length of questionBank Array is =", questionBank.length );

    questionBankArrayIndex = questionBank.length;
    console.log("array index Length of questionBankArrayIndex =", questionBankArrayIndex );
    questionBank.push(quizQuestionBankDataStructure());
    questionBank[questionBankArrayIndex].setQuestionId(uuidGenerator());
    questionBank[questionBankArrayIndex].setQuestionModule("Java script");
    questionBank[questionBankArrayIndex].setQuestion("This is question 3 on Java script");
    questionBank[questionBankArrayIndex].setOption1("1. This is Answer 10")
    questionBank[questionBankArrayIndex].setOption2("2. Right Answer 20")
    questionBank[questionBankArrayIndex].setOption3("3. This is Answer 30")
    questionBank[questionBankArrayIndex].setOption4("4. This is Answer 40")
    questionBank[questionBankArrayIndex].setRightAnswer("2. Right Answer 20");

    questionBankArrayIndex = questionBank.length;
    console.log("array index Length of questionBankArrayIndex =", questionBankArrayIndex );
    questionBank.push(quizQuestionBankDataStructure());
    questionBank[questionBankArrayIndex].setQuestionId(uuidGenerator());
    questionBank[questionBankArrayIndex].setQuestionModule("Java script");
    questionBank[questionBankArrayIndex].setQuestion("This is question 4 on Java script");
    questionBank[questionBankArrayIndex].setOption1("1. This is Answer 10")
    questionBank[questionBankArrayIndex].setOption2("2. Right Answer 20")
    questionBank[questionBankArrayIndex].setOption3("3. This is Answer 30")
    questionBank[questionBankArrayIndex].setOption4("4. This is Answer 40")
    questionBank[questionBankArrayIndex].setRightAnswer("2. Right Answer 20");

    questionBankArrayIndex = questionBank.length;
    console.log("array index Length of questionBankArrayIndex =", questionBankArrayIndex );
    questionBank.push(quizQuestionBankDataStructure());
    questionBank[questionBankArrayIndex].setQuestionId(uuidGenerator());
    questionBank[questionBankArrayIndex].setQuestionModule("Java script");
    questionBank[questionBankArrayIndex].setQuestion("This is question 5 on Java script");
    questionBank[questionBankArrayIndex].setOption1("1. This is Answer 10")
    questionBank[questionBankArrayIndex].setOption2("2. Right Answer 20")
    questionBank[questionBankArrayIndex].setOption3("3. This is Answer 30")
    questionBank[questionBankArrayIndex].setOption4("4. This is Answer 40")
    questionBank[questionBankArrayIndex].setRightAnswer("2. Right Answer 20");

    questionBankArrayIndex = questionBank.length;
    console.log("array index Length of questionBankArrayIndex =", questionBankArrayIndex );
    questionBank.push(quizQuestionBankDataStructure());
    questionBank[questionBankArrayIndex].setQuestionId(uuidGenerator());
    questionBank[questionBankArrayIndex].setQuestionModule("Java script");
    questionBank[questionBankArrayIndex].setQuestion("This is question 6 on Java script");
    questionBank[questionBankArrayIndex].setOption1("1. This is Answer 10")
    questionBank[questionBankArrayIndex].setOption2("2. Right Answer 20")
    questionBank[questionBankArrayIndex].setOption3("3. This is Answer 30")
    questionBank[questionBankArrayIndex].setOption4("4. This is Answer 40")
    questionBank[questionBankArrayIndex].setRightAnswer("2. Right Answer 20");

    questionBankArrayIndex = questionBank.length;
    console.log("array index Length of questionBankArrayIndex =", questionBankArrayIndex );
    questionBank.push(quizQuestionBankDataStructure());
    questionBank[questionBankArrayIndex].setQuestionId(uuidGenerator());
    questionBank[questionBankArrayIndex].setQuestionModule("Java script");
    questionBank[questionBankArrayIndex].setQuestion("This is question 7 on Java script");
    questionBank[questionBankArrayIndex].setOption1("1. This is Answer 10")
    questionBank[questionBankArrayIndex].setOption2("2. Right Answer 20")
    questionBank[questionBankArrayIndex].setOption3("3. This is Answer 30")
    questionBank[questionBankArrayIndex].setOption4("4. This is Answer 40")
    questionBank[questionBankArrayIndex].setRightAnswer("2. Right Answer 20");

    questionBankArrayIndex = questionBank.length;
    console.log("array index Length of questionBankArrayIndex =", questionBankArrayIndex );
    questionBank.push(quizQuestionBankDataStructure());
    questionBank[questionBankArrayIndex].setQuestionId(uuidGenerator());
    questionBank[questionBankArrayIndex].setQuestionModule("Java script");
    questionBank[questionBankArrayIndex].setQuestion("This is question 8 on Java script");
    questionBank[questionBankArrayIndex].setOption1("1. This is Answer 10")
    questionBank[questionBankArrayIndex].setOption2("2. Right Answer 20")
    questionBank[questionBankArrayIndex].setOption3("3. This is Answer 30")
    questionBank[questionBankArrayIndex].setOption4("4. This is Answer 40")
    questionBank[questionBankArrayIndex].setRightAnswer("2. Right Answer 20");


    questionBankArrayIndex = questionBank.length;
    console.log("array index Length of questionBankArrayIndex =", questionBankArrayIndex );
    questionBank.push(quizQuestionBankDataStructure());
    questionBank[questionBankArrayIndex].setQuestionId(uuidGenerator());
    questionBank[questionBankArrayIndex].setQuestionModule("Java script");
    questionBank[questionBankArrayIndex].setQuestion("This is question 9 on Java script");
    questionBank[questionBankArrayIndex].setOption1("1. This is Answer 10")
    questionBank[questionBankArrayIndex].setOption2("2. Right Answer 20")
    questionBank[questionBankArrayIndex].setOption3("3. This is Answer 30")
    questionBank[questionBankArrayIndex].setOption4("4. This is Answer 40")
    questionBank[questionBankArrayIndex].setRightAnswer("2. Right Answer 20");

    questionBankArrayIndex = questionBank.length;
    console.log("array index Length of questionBankArrayIndex =", questionBankArrayIndex );
    questionBank.push(quizQuestionBankDataStructure());
    questionBank[questionBankArrayIndex].setQuestionId(uuidGenerator());
    questionBank[questionBankArrayIndex].setQuestionModule("Java script");
    questionBank[questionBankArrayIndex].setQuestion("This is question 10 on Java script");
    questionBank[questionBankArrayIndex].setOption1("1. This is Answer 10")
    questionBank[questionBankArrayIndex].setOption2("2. Right Answer 20")
    questionBank[questionBankArrayIndex].setOption3("3. This is Answer 30")
    questionBank[questionBankArrayIndex].setOption4("4. This is Answer 40")
    questionBank[questionBankArrayIndex].setRightAnswer("2. Right Answer 20");

    questionBankArrayIndex = questionBank.length;
    console.log("array index Length of questionBankArrayIndex =", questionBankArrayIndex );
    questionBank.push(quizQuestionBankDataStructure());
    questionBank[questionBankArrayIndex].setQuestionId(uuidGenerator());
    questionBank[questionBankArrayIndex].setQuestionModule("Java script");
    questionBank[questionBankArrayIndex].setQuestion("This is question 11 on Java script");
    questionBank[questionBankArrayIndex].setOption1("1. This is Answer 10")
    questionBank[questionBankArrayIndex].setOption2("2. Right Answer 20")
    questionBank[questionBankArrayIndex].setOption3("3. This is Answer 30")
    questionBank[questionBankArrayIndex].setOption4("4. This is Answer 40")
    questionBank[questionBankArrayIndex].setRightAnswer("2. Right Answer 20");
    
    storeObjectToLocalStorage("Question Bank", questionBank);
};