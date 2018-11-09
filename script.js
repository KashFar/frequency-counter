document.getElementById("countButton").onclick = function () {
    // your code will go here

    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    //This changes all the letters to lower case 

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // This gets rid of all the characters except letters, spaces, and apostrophes.
    // We'll learn more about the replace function later
    
    const letterCounts = {};
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        //do something for each letter.

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }
    for (let letter in letterCounts) {
        const span = document .createElement("span");
        const textcontent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textcontent);
        document.getElementById("lettersDiv").appendChild(span);
    }
    console.log(letterCounts);

    //  BEGIN WORD FREQUENCY COUNT
    // const wordCounts = {};
    // const word = typedText.split(" ");
    // for (let i = 0; i < typedText.length; i++) {
    //     currentWord = typedText[i];
    //     //do something for each letter.

    //     if (Counts[currentLetter] === undefined) {
    //         letterCounts[currentLetter] = 1;
    //     } else {
    //         letterCounts[currentLetter]++;
    //     }
    // }
    // for (let letter in letterCounts) {
    //     const span = document .createElement("span");
    //     const textcontent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
    //     span.appendChild(textcontent);
    //     document.getElementById("lettersDiv").appendChild(span);
    // }
    // console.log(letterCounts);

    // const word = typedText.split(" ");

}