//Author: Tanuj Jain
//Creation Date: Apr-4-2020

// The main objective of this file is to manage program flow. 


//Populate Question Bank in system. 
populateQuestionBank();
//Read Question Bank in Local Storage. 
let ques = readLocalStorageKeyConvertToObject("Question Bank");


//Create Div Container for Header Section
var headerEl = window.document.querySelector("header");
headerEl.style.display = "flex";
headerEl.style.flexWrap = "wrap"
headerEl.style.justifyContent = "space-between"


var header_div_left_El = window.document.createElement("div");
header_div_left_El.className = "header-div-left";
header_div_left_El.setAttribute("id", "header-div-left");

headerEl.appendChild(header_div_left_El);

var header_div_left_a_El = window.document.createElement("a");
header_div_left_a_El.className = "header-div-left-a";
header_div_left_a_El.setAttribute("id","header-div-left-a");
header_div_left_a_El.textContent = "View Scores";
header_div_left_a_El.setAttribute("href","#NEED TO ADD");

header_div_left_El.appendChild(header_div_left_a_El);


var header_div_right_El = window.document.createElement("div");
header_div_right_El.className = "header-div-right";
header_div_right_El.setAttribute("id", "header-div-right");
headerEl.appendChild(header_div_right_El);

var header_div_right_a_El = window.document.createElement("a");
header_div_right_a_El.className = "header-div-right-a"
header_div_right_a_El.setAttribute("id","header-div-right-a");
header_div_right_a_El.innerHTML= "Timer"; 
header_div_right_El.appendChild(header_div_right_a_El);



//Create a Handle of Body Main Element. 
var main_El = window.document.querySelector("main");
console.dir(main_El);

//Create a Handle of Body Main Element.
var main_Section_El = window.document.createElement("section");
main_Section_El.className = "main-section";
main_Section_El.setAttribute("id","main-section");
console.log(main_Section_El);

//Create section element within Main element 
var main_Section_Header_El = window.document.createElement("h2");
main_Section_Header_El.className = "main-section-header";
main_Section_Header_El.setAttribute("id","main-section-header");
main_Section_Header_El.textContent = "Coding Quiz Challenge";
main_Section_Header_El.align = "center";

console.log(main_Section_Header_El);

main_Section_El.appendChild(main_Section_Header_El);
main_El.appendChild(main_Section_El);

var main_Start_Button_div = window.document.createElement("div");
main_Start_Button_div.className = "start-div";
main_Start_Button_div.setAttribute("id", "start-div");
main_Start_Button_div.align = "center";
main_El.appendChild(main_Start_Button_div);


var submitButton = window.document.createElement("button");
submitButton.className = "main-section-button";
submitButton.setAttribute("id", "main-section-button");
submitButton.textContent = "Start";
submitButton.style.borderWidth = "2px";
submitButton.style.backgroundColor = "blue";
submitButton.style.color = "white";
submitButton.style.align = "center";
submitButton.style.width = "200px";
submitButton.style.height = "50px";
main_Start_Button_div.appendChild(submitButton);


var main_Div_El = window.document.createElement ("div");
main_Div_El.className = "main-div";
main_Div_El.setAttribute ("id", "main-div");
main_El.appendChild(main_Div_El);
 
//Add unordered list for quiz questions
var main_Div_Ul_El = window.document.createElement ("ul");
main_Div_Ul_El.className = "main-div-ul" ;
main_Div_Ul_El.setAttribute ("id", "main-div-ul");

main_Div_El.appendChild (main_Div_Ul_El);

var main_Div_Ul_Li_El = window.document.createElement ("li");
main_Div_Ul_Li_El.className = "main-div-ul-li";
main_Div_Ul_Li_El.setAttribute("id", "main-div-ul-li");
main_Div_Ul_Li_El.style.listStyle = "none";
main_Div_Ul_El.appendChild (main_Div_Ul_Li_El);


var main_Div_Ul_Answer_El = window.document.createElement("li");
main_Div_Ul_Answer_El.className = "answer";
main_Div_Ul_Answer_El.setAttribute("id", "answer");
main_Div_Ul_Answer_El.style.listStyle = "none";
main_Div_Ul_El.appendChild (main_Div_Ul_Answer_El);

var main_Div_Ul_Answer_P_El = window.document.createElement("p");
main_Div_Ul_Answer_P_El .className = "answer-p";
main_Div_Ul_Answer_P_El .setAttribute("id", "answer-p");
main_Div_Ul_Answer_P_El .textContent="";
main_Div_Ul_Answer_P_El.style.fontSize = "25px";
main_Div_Ul_Answer_P_El.style.textAlign = "center";
main_Div_Ul_Answer_El.appendChild (main_Div_Ul_Answer_P_El );


// Fucntion to populate New questions
let quizQuestion  = function (newQuestion){
    
        if (document.getElementById("display_Div")){
            removeElement("display_Div");
        }
        var main_Div_Ul_Li_Para_El = window.document.createElement ("p");
        main_Div_Ul_Li_Para_El.className = "main-div-ul-li-p";
        main_Div_Ul_Li_Para_El.setAttribute ("id", "main-div-ul-li-p");
        main_Div_Ul_Li_Para_El.textContent = newQuestion.question ;
        main_Div_Ul_Li_Para_El.style.fontSize = "25px";
        main_Div_Ul_Li_Para_El.style.textAlign = "center";
        main_Div_Ul_Li_El.appendChild(main_Div_Ul_Li_Para_El);

        var main_Div_Ul_Li_Div_El = window.document.createElement ("div");
        main_Div_Ul_Li_Div_El.className = "main-div-ul-li-div";
        main_Div_Ul_Li_Div_El.setAttribute("id", "main-div-ul-li-div");
        main_Div_Ul_Li_El.appendChild(main_Div_Ul_Li_Div_El);

        var main_Div_Ul_Li_Div_Ul_El = window.document.createElement ("ul");
        main_Div_Ul_Li_Div_Ul_El.className = "main-div-ul-li-ul";
        main_Div_Ul_Li_Div_Ul_El.setAttribute ("id", "main-div-ul-li-ul");
        //main_Div_Ul_Li_Div_Ul_El.style.display = "block";
        //main_Div_Ul_Li_Div_Ul_El.style.paddingLeft = "28%";
        main_Div_Ul_Li_Div_Ul_El.style.borderBottomColor = "black";
        main_Div_Ul_Li_Div_Ul_El.style.borderBottomWidth = "1px";
        main_Div_Ul_Li_Div_Ul_El.style.borderBottomStyle = "solid";
        main_Div_Ul_Li_Div_Ul_El.style.listStyle = "none";
        main_Div_Ul_Li_Div_El.appendChild(main_Div_Ul_Li_Div_Ul_El);


        for (var i =0; i < 4; i++){

            var main_Div_Ul_Li_Div_Ul_Div_El = window.document.createElement("div");
            main_Div_Ul_Li_Div_Ul_Div_El.className = "main-div-ul-li-div-ul-div"
            main_Div_Ul_Li_Div_Ul_Div_El.setAttribute("id", "main-div-ul-li-div-ul-div");
            main_Div_Ul_Li_Div_Ul_Div_El.style.align = "center";
            main_Div_Ul_Li_Div_Ul_Div_El.style.display = "flex";
            main_Div_Ul_Li_Div_Ul_Div_El.style.paddingLeft = "28%";
            if (i === 3){
                main_Div_Ul_Li_Div_Ul_Div_El.style.paddingBottom = "10%";
            };
            //main_Div_Ul_Li_Div_Ul_Div_El.style.width = "200px";
            main_Div_Ul_Li_Div_Ul_El.appendChild(main_Div_Ul_Li_Div_Ul_Div_El);

            var main_Div_Ul_Li_Div_Ul_Div_Li_El = window.document.createElement ("li");
            main_Div_Ul_Li_Div_Ul_Div_Li_El.className = "main-div-ul-li-div-ul-div-li";
            main_Div_Ul_Li_Div_Ul_Div_Li_El.setAttribute ("id", "main-div-ul-li-div-ul-div-li");
            //main_Div_Ul_Li_Div_Ul_Li_El.style.width = "200px";
            main_Div_Ul_Li_Div_Ul_Div_Li_El.style.paddingBottom = "5px";
            main_Div_Ul_Li_Div_Ul_Div_El.appendChild(main_Div_Ul_Li_Div_Ul_Div_Li_El);

            
            var main_Div_Ul_Li_Div_Ul_Div_Li_Button_El = window.document.createElement ("button");
            main_Div_Ul_Li_Div_Ul_Div_Li_Button_El. className = "main-div-ul-li-div-ul-div-button" + " " + "button-" + (i+1);
            main_Div_Ul_Li_Div_Ul_Div_Li_Button_El.setAttribute("id", "main_Div_Ul_Li_Div_Ul_Div_Li_Button_El");
            main_Div_Ul_Li_Div_Ul_Div_Li_Button_El.name = "Option-" + (i+1);
            let option = "";
            if (i === 0){
                option = newQuestion.option1;
            } else if (i === 1){
                option = newQuestion.option2;
            }else if (i === 2) {
                option = newQuestion.option3;
            }else {
                option = newQuestion.option4
            }
            main_Div_Ul_Li_Div_Ul_Div_Li_Button_El.textContent = option;
            //main_Div_Ul_Li_Div_Ul_Div_Li_Button_El.value = option;
            main_Div_Ul_Li_Div_Ul_Div_Li_Button_El.style.fontSize = "20px";
            main_Div_Ul_Li_Div_Ul_Div_Li_Button_El.style.borderWidth = "1px";
            main_Div_Ul_Li_Div_Ul_Div_Li_Button_El.style.backgroundColor = "blue";
            main_Div_Ul_Li_Div_Ul_Div_Li_Button_El.style.color = "white";
            main_Div_Ul_Li_Div_Ul_Div_Li_Button_El.style.align = "center";
            main_Div_Ul_Li_Div_Ul_Div_Li_Button_El.style.width = "200px";
            main_Div_Ul_Li_Div_Ul_Div_Li_Button_El.style.height = "50px";
            main_Div_Ul_Li_Div_Ul_Div_Li_El.appendChild(main_Div_Ul_Li_Div_Ul_Div_Li_Button_El);
        }
    /*} else {
        console.log("I am inside remove child true");
        main_Div_Ul_Li_El.removeChild(main_Div_Ul_Li_Para_El);
        main_Div_Ul_Li_El.removeChild(main_Div_Ul_Li_Div_El);
    }*/
};

// Fucntion to populate Save and Populate resut. 
var saveUILayout = function(){

    var result_div = window.document.createElement("div");
    result_div.className = "result_div";
    result_div.setAttribute("id", "result_div");
    result_div.align= "center";
    result_div.style.paddingBottom = "10px";
    main_Section_El.appendChild (result_div);

    var result_para_div = window.document.createElement("p");
    result_para_div.className = "result_para";
    result_para_div.setAttribute("id", "result_para");
    result_para_div.textContent = "Your Result is : " + currentScore;
    result_para_div.style.align= "center";
    result_para_div.style.fontSize = "26px";
    result_para_div.style.paddingBottom = "2px";
    result_div.appendChild (result_para_div);




    var main_Section_Header_Div_El = window.document.createElement("div");
    main_Section_Header_Div_El.className = "score-div";
    main_Section_Header_Div_El.setAttribute("id", "score-div");
    main_Section_Header_Div_El.align= "center";
    main_Section_Header_Div_El.style.paddingBottom = "10px";
    main_Section_El.appendChild (main_Section_Header_Div_El);

    var main_Section_Header_Div_label_El = window.document.createElement("label");
    main_Section_Header_Div_label_El.setAttribute("for", "scorer-name");
    main_Section_Header_Div_label_El.textContent = "Enter your name:";
    main_Section_Header_Div_label_El.style.fontSize = "20px";
    main_Section_Header_Div_label_El.style.paddingRight = "10px"
    main_Section_Header_Div_El.appendChild(main_Section_Header_Div_label_El);

    var main_Section_Header_Div_Input_El = window.document.createElement("input");
    main_Section_Header_Div_Input_El.className = "scorer-name" ;
    main_Section_Header_Div_Input_El.setAttribute("id", "scorer-name");
    main_Section_Header_Div_Input_El.setAttribute("type", "text");
    main_Section_Header_Div_Input_El.setAttribute("name","scorer-name");
    main_Section_Header_Div_Input_El.textContent = "";
    main_Section_Header_Div_Input_El.setAttribute("placeholder", "Enter your name");

    main_Section_Header_Div_Input_El.style.width = "300px";
    main_Section_Header_Div_Input_El.style.height = "25px";
    main_Section_Header_Div_El.appendChild(main_Section_Header_Div_Input_El);

    var main_Section_Header_SaveDiv_El = window.document.createElement("div")
    main_Section_Header_SaveDiv_El.className = "save-div";
    main_Section_Header_SaveDiv_El.setAttribute("id", "save-div");
    main_Section_Header_SaveDiv_El.align = "center";
    main_Section_El.appendChild(main_Section_Header_SaveDiv_El);

    var saveResultButton = window.document.createElement("button");
    saveResultButton.className = "main-section-save-button";
    saveResultButton.setAttribute("id", "main-section-save-button");
    saveResultButton.textContent = "Save";
    saveResultButton.style.borderWidth = "2px";
    saveResultButton.style.backgroundColor = "blue";
    saveResultButton.style.color = "white";
    saveResultButton.style.align = "center";
    saveResultButton.style.width = "200px";
    saveResultButton.style.height = "50px";
    main_Section_Header_SaveDiv_El.appendChild(saveResultButton);
};

//Variable for timmer.
var t = 60;

// Timmer function for 60 Seconds
var timer = function (){
    header_div_right_a_El.textContent= "Timer :" + t ;
    console.log(t);
    t--;
    if (t < 0 ) {
        console.log('Time Completed');
        }else{
            setTimeout(timer, 1000);
        }
}

function removeElement(id) {
    var elem = document.getElementById(id);
    console.dir(elem);
    return elem.parentNode.removeChild(elem);
}

var counter = 0;
let UserId = "";
var startQuiz = function (){
    if (document.body.contains(main_Start_Button_div)){
        main_El.removeChild(main_Start_Button_div);
    }
    if (counter < ques.length){
        if (document.getElementById("display_Div")){
            removeElement("display_Div");
        }
        quizQuestion(ques[counter]);
        timer();
        counter++;
    }
}

submitButton.addEventListener("click", startQuiz);

var updateQuizQuestion = function (){
    if (document.getElementById("display_Div")){
        removeElement("display_Div");
    }
    if (counter < ques.length){
        quizQuestion(ques[counter]);
        counter++;
    }
}

let currentScore = 0;
let currentResult = 0;



function getInputValue(){
    // Selecting the input element and get its value 
    //var inputVal = document.querySelector("#scorer-name").placeholder;
    var inputVal = document.querySelector("input[name='scorer-name']").value;
    return inputVal;
}


var resultcount = 0;


var nextQuestion = function (event){
    var answerValue = event.target.innerText;
    console.log("Answer Value is =", answerValue);
    currentResult.questionId = ques[counter-1].questionId;
    currentResult.answer = answerValue;
    if (ques[counter-1].rightAnswer == answerValue){
        let currentResult = new result();
        main_Div_Ul_Answer_P_El .textContent= "Right";
        currentResult.questionId = "Right";
        currentScore++;

    } else {
        main_Div_Ul_Answer_P_El .textContent="Wrong";
        currentResult.questionId = "Wrong";
        t = t -10;
    }
    console.log("Value of counter is=" + counter)
    removeElement("main-div-ul-li-p");
    removeElement("main-div-ul-li-div");
    if (counter < ques.length &&  t > 0){
        updateQuizQuestion ();
    } else {
        removeElement ("answer");
        t = 0;
        saveUILayout();
        //saveResult();
    }
};

var newResult = function(){
    return {
        newname: "",
        totalscore: 0,
        setName : function(name){
            this.newname = name;
        },
        setTotalScore: function(score){
            this.totalscore = score;
        }
    };   
};
var execResult = [];
var resultclickcounter = 0;

var saveResult = function(event){
    console.dir(event.target);
    if (event.target.id === "main-section-save-button" && resultclickcounter < 1)
    {
        if (getInputValue() == "" || getInputValue() == null || getInputValue() == undefined){
            window.alert ("Please Enter Proper Name");
        } else {
            resultclickcounter++;
            console.dir (document.getElementById("main-section-save-button"));
            resultcount = execResult.length;
            console.log("value of resultcount =" + resultcount);
            execResult.push(newResult());
            console.log("Value of scorer name is: " + getInputValue());
            execResult[resultcount].newname = getInputValue();
            execResult[resultcount].totalscore = currentScore;
            for (var k=0 ;k <execResult.length;k++) {
                console.log(execResult[k].newname);
                console.log(execResult[k].totalscore);
            };
            write_storage ("QuizResult", execResult);
        }   
    }
};

function write_storage (key, Value){
    console.log("Inside Local Storage");
    let value_deserialize = JSON.parse(window.localStorage.getItem(key));
    console.log(value_deserialize);
    if (value_deserialize == null){
        let value_serialize =  JSON.stringify(Value);
        console.log(value_serialize);
        window.localStorage.setItem (key, value_serialize);
    } else {
        //value_deserialize.concat(Value);
        for (var i=0; i < Value.length; i++){
            value_deserialize.push(Value[i]);
        }
        console.log(value_deserialize);
        let value_serialize =  JSON.stringify(value_deserialize);
        window.localStorage.setItem (key, value_serialize);
    }
}


function read_storage (key){
    let value_deserialize = JSON.parse(window.localStorage.getItem(key));
    if (value_deserialize){
        return value_deserialize;
    }
}

function displayOverAllResults (event) {
    if (event.target.id === "header-div-left-a"){
        console.log(document.getElementById("display_Div"));
        if (document.getElementById("display_Div")){
            removeElement("display_Div");
        }
        let overallResult = read_storage("QuizResult");
        if (overallResult != null){
            var display_Div = window.document.createElement("div");
            display_Div.className = "display_Div";
            display_Div.setAttribute("id", "display_Div");
            display_Div.align= "center";
            display_Div.style.paddingBottom = "10px";
            if (document.getElementById("start-div")){
                document.getElementById("start-div").appendChild (display_Div);
            } else if (document.getElementById("answer")) {
                document.getElementById("answer").appendChild (display_Div);
            } else {
                main_Section_El.appendChild (display_Div);
            }
            var display_Header = window.document.createElement("h2");
            display_Header.className = "display_Header";
            display_Header.setAttribute("id", "display_Header");
            display_Header.align= "center";
            display_Header.textContent = "Overall Results"
            display_Header.style.paddingBottom = "10px";
            display_Div.appendChild (display_Header);
            console.log ("Overall Length is : " + overallResult.length);
            console.log (overallResult);
            for (var j=0; j < overallResult.length ; j++){
                var display_para_div = window.document.createElement("p");
                display_para_div.className = "display_para";
                display_para_div.setAttribute("id", "display_para");
                display_para_div.textContent = overallResult[j].newname + " : " + overallResult[j].totalscore;
                display_para_div.style.align= "center";
                display_para_div.style.fontSize = "26px";
                display_para_div.style.paddingBottom = "2px";
                display_Div.appendChild (display_para_div);
            }
        }
    }
}

header_div_left_a_El.addEventListener("click", displayOverAllResults);

main_Div_Ul_Li_El.addEventListener("click", nextQuestion);


main_Section_El.addEventListener("click", saveResult);










