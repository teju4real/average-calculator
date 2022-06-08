// Function for calculating grades
const calculate = () => {

    // Getting input from user into height variable.
    let mathematics = document.querySelector("#maths").value;
    let english = document.querySelector("#eng").value;
    let physics = document.querySelector("#phy").value;
    let chemistry = document.querySelector("#chem").value;
    let biology = document.querySelector("#bio").value;
    let grades = "";
    
    // Input is string so typecasting is necessary. */
    let totalgrades =
        parseFloat(mathematics) +
        parseFloat(english) +
        parseFloat(physics) +
        parseFloat(biology) +
        parseFloat(chemistry);
    
    // Checking the condition for the providing the
    // grade to student based on percentage
    let percentage = (totalgrades / 500) * 100;
    if (percentage <= 100 && percentage >= 70) {
        grades = "A";
    } else if (percentage <= 69 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 50) {
        grades = "C";
    } else {
        grades = "F";
    }
    // Checking the values are empty if empty than
    // show please fill them
    if (mathematics == "" || english == ""
                || physics == "" || chemistry == "" 
                || biology == "") {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else {
    
        // Checking the condition for the fail and pass
        if (percentage >= 39.5) {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Out of 500 your total is ${totalgrades}
            and percentage is ${percentage}%. <br>
            Your grade is ${grades}. Congrats, you passed. `;
        } else {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Out of 500, your total is ${totalgrades}
            and percentage is ${percentage}%. <br>
            Your grade is ${grades}. Sorry, you failed. `;
        }
    }
    };
