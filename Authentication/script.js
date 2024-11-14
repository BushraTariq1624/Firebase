var questions = [
    {
        question: "What is the correct syntax to declare a variable in JavaScript?",
        opt1: "var variableName;",
        opt2: "let varialeName",
        otp3: "const variableName;",
        opt4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which of the following is used to create an object in JavaScript?",
        opt1: "{}",
        opt2: "[]",
        otp3: "()",
        opt4: "<>",
        ans: "{}"
    },
    {
        question: " Which method is used to parse a string to an integer in JavaScript?",
        opt1: "parseInt()",
        opt2: "parseInteger()",
        otp3: "parseNumber()",
        opt4: "parseFloat()",
        ans: "parseInt()"
    },
    {
        question: " How can you add a comment in JavaScript?",
        opt1:"/* This is a comment */",
        opt2:"# This is a comment",
        opt3: "//This is a comment",
        opt4: "!--This is a comment--",
        ans: "//This is a comment"
    },
    {
        question: " What is the output of console.log(typeof null); in JavaScript?",
        opt1: "null",
        opt2: "object",
        opt3: "undefined",
        opt4: "string",
        ans: "object"
    }
]
var index = 0
var result = 0
function renderQues() {
    var hide=document.getElementById("hide")
    hide.className= "hidden"
    var container = document.getElementById("container")
    var option = document.getElementsByName("option")
    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {
            if (questions[index - 1].ans === option[i].value) {
                result++
            }
            console.log(option[i].value, questions[index - 1].ans)
        }
    }
    if (!questions[index]) {
        container.innerHTML=`<p>Percentage: ${(result/5)*100} %</p>
        <p>Total Questions: 5</p>
        <p>Correct Questions: ${result}</p>`
        return
    }
    container.innerHTML = `
    <p>${questions[index].question}</p>
            <label for="opt1"><input type="radio" name="option" value="${questions[index].opt1}" id="opt1">${questions[index].opt1}</label> <br>
           <label for="opt2"> <input type="radio" name="option" value="${questions[index].opt2}" id="opt2">${questions[index].opt2}</label><br>
            <label for="opt3"><input type="radio" name="option" value="${questions[index].opt3}" id="opt3">${questions[index].opt3}</label><br>
            <label for="opt4"><input type="radio" name="option" value="${questions[index].opt4}" id="opt4">${questions[index].opt4}</label><br>
            <button class="btn" id="mybtn" onclick="renderQues()">Next</button>
    `
    index++
}
// renderQues()