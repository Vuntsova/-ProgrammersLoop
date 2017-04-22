/**
 * Created by webohweb on 4/21/17.
 */
var inquirer = require('inquirer');

function Programmer(name, position, age,language) {

    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;

    this.printInfo = function () {
        console.log("\n--------------------\nName: "+this.name+"\n--------------------\nPosituin: "+this.position+
            "\n--------------------\nAge: "+this.age+"\n--------------------\nLanguage: "+this.language+"\n--------------------\n")
    };

    }
var count = 0;
var askQuestion = function(){
    if (count < 2)
{
    inquirer.prompt([

        {
            name: "name",
            message: "What is your name?"
        }, {
            name: "position",
            message: "What is your position?"
        }, {
            name: "age",
            message: "What is your age?"
        }, {
            name: "language",
            message: "What is your language?"
        }

    ]).then(function (answers) {
        var newGuy = new Programmer
        (
            answers.name,
            answers.position,
            answers.age,
            answers.language
        );
        newGuy.printInfo();
        count++;
        askQuestion();

    })
}else  {
        console.log("Done!")
    }
}
askQuestion();
