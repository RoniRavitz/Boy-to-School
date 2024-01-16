for (let i = 1; i <= 50; i++) {
  let square = document.createElement("span");
  square.classList.add("Square");
  document.querySelector(".maze").appendChild(square);
}

let square = document.querySelectorAll(".Square");

square.forEach(function (rotateDeg) {
  rotateDeg.addEventListener("click", function () {
    var currentRotation = this.getAttribute("data-rotation");
    var newRotation = parseInt(currentRotation) + 90;
    this.style.transform = "rotate(" + newRotation + "deg)";
    this.setAttribute("data-rotation", newRotation);

    if (this.classList.contains("lh") || this.classList.contains("lv")) {
      if (this.getAttribute("data-rotation") === "180") {
        this.setAttribute("data-rotation", "0");
        this.style.transform = "rotate(0deg)";
      }
    }

    if (this.getAttribute("data-rotation") === "360") {
      this.setAttribute("data-rotation", "0");
      this.style.transform = "rotate(0deg)";
    }
  });
});

/*
sample

"tr","br","lh","tl","bl","plus","br","tr","lv","bl", 
"tl","plus","tr","br","lh","tl","bl","plus","br","tr",
"lv","bl","tl","plus","tr","br","lh","tl","bl","plus",
"br","tr","lv","bl","tl","plus","tr","br","lh","tl",
"bl","plus","br","tr","lv","bl","tl","plus","tr","br",

*/
// prettier-ignore
const levelOne = {
  classes: [
    "tr","tl","br","bl","br","boy","br","tl","tr","lh",
    "bl","br","tl","school","lh","tr","tl","br","bl","plus",
    "tr","tl","br","bl","plus","bl","br","tl","tr","lh",
    "bl","br","tl","tr","lh","tr","tl","br","bl","plus",
    "tr","tl","br","bl","plus","bl","br","tl","tr","lh",
  ],
  squareNumber: [16],
  squareRotation: [270],
  levelInfo: "Level two",
  info: "Turn 2 squares <br> that the child can go to school",
};

const levelTwo = {
  // prettier-ignore
  classes: [
    "tr","tl","br","bl","plus","tl","br","tl","tr","boy",
    "bl","br","tl","bl","lh","tr","tl","br","bl","plus",
    "tr","tl","br","school","plus","bl","br","tl","tr","lh",
    "bl","br","tl","tr","lh","tr","tl","br","bl","plus",
    "tr","tl","br","bl","plus","bl","br","tl","tr","lh",
  ],
  squareNumber: [19, 9],
  squareRotation: [90, 90],
  levelInfo: "Level three",
  info: "Turn 3 squares <br> that the child can go to school",
};

const levelThree = {
  // prettier-ignore
  classes: [
    "tr","br","lh","boy","bl","plus","br","tr","lv","bl", 
    "tl","plus","tr","br","lh","tl","bl","plus","br","tr",
    "lv","bl","tl","plus","tr","br","lh","tl","bl","plus",
    "br","tr","lv","bl","tl","plus","tr","school","lh","tl",
    "bl","plus","br","tr","lv","bl","lh","plus","tr","br",
  ],
  squareNumber: [15, 26, 46],
  squareRotation: [90, 90, 180],
  levelInfo: "Level four",
  info: "Turn 4 squares <br> that the child can go to school",
};

const levelFour = {
  // prettier-ignore
  classes: [
    "tr","br","lh","tl","bl","plus","lh","bl","lv","bl",
    "tl","plus","tr","br","lh","tl","bl","plus","br","tr",
    "lv","bl","tl","plus","tr","br","lh","lv","bl","plus",
    "br","tr","lv","bl","tl","plus","tr","br","lh","tl",
    "school","plus","br","tr","lv","bl","tl","plus","tr","boy",
  ],
  squareNumber: [23, 43, 38, 40],
  squareRotation: [180, 180, 270, 270],
  levelInfo: "Level five",
  info: "Turn 5 squares <br> that the child will get his sandwich <br> then go to school",
};

const levelFive = {
  // prettier-ignore
  classes: [
    "tr","br","lh","tl","bl","plus","br","tr","lv","bl",
    "tl","plus","tr","br","lh","lh","bl","plus","br","tr",
    "boy","bl","tl","plus","tr","sandwich","lh","tl","bl","school",
    "br","tr","lv","bl","tl","plus","tr","br","tr","tl",
    "bl","plus","br","tr","lv","br","tl","plus","tr","br",
  ],
  squareNumber: [33, 45, 46, 19, 29],
  squareRotation: [90, 90, 180, 90, 180],
  levelInfo: "Level six",
  info: "Turn 6 squares <br> that the child will get his sandwich <br> then go to school",
};
const levelSix = {
  // prettier-ignore
  classes: [
    "tr","br","lh","tl","bl","plus","br","tr","lv","bl","br","tr",
    "tl","plus","lh","br","boy","lv","bl","plus","br","school","br","tr",
    "lv","lv","lh","plus","tr","br","lh","tl","bl","plus","br","tr",
    "br","tr","lv","bl","tr","plus","tr","br","lh","lv","br","tr",
    "sandwich","plus","br","tr","lv","bl","tl","plus","tr","br","br","tr",
    "lv","bl","tl","plus","tr","br","lh","tl","bl","plus","br","tr",
  ],
  squareNumber: [8, 9, 29, 38, 39, 40],
  squareRotation: [90, 90, 180, 90, 90, 90],
  levelInfo: "Level six",
  info: "Turn 7 squares <br> that the child will get his sandwich <br> then go to school",
};
const levelSeven = {
  // prettier-ignore
  classes: [
    "boy","br","lh","tr","br","lh","tl","bl","tr","br","bl","sandwich",
    "tr","tl","lh","tl","bl","plus","plus","tr","br","lh","bl","bl",
    "tr","bl","lh","lh","tr","lh","tl","bl","tr","br","lv","tl",
    "tr","br","lh","tl","tr","plus","plus","lv","lh","plus","bl","bl",
    "tr","br","lh","tl","bl","plus","plus","tr","br","lh","tr","bl",
    "tr","br","lh","tr","br","lh","tl","bl","tr","br","lh","school",
    ],
  squareNumber: [11, 14, 23, 26, 29, 35, 44],
  squareRotation: [270, 270, 180, 180, 180, 90, 90],
  levelInfo: "THE END",
  info: "well done",
};

function setLevel(theLevel) {
  if (theLevel === levelSix) {
    document.querySelector(".maze").innerHTML = "";
    document.querySelector(".maze").classList.add("stage-2");
    for (let i = 1; i <= 72; i++) {
      let square = document.createElement("span");
      square.classList.add("Square");
      document.querySelector(".maze").appendChild(square);
    }

    let square = document.querySelectorAll(".Square");

    square.forEach(function (rotateDeg) {
      rotateDeg.addEventListener("click", function () {
        var currentRotation = this.getAttribute("data-rotation");
        var newRotation = parseInt(currentRotation) + 90;
        this.style.transform = "rotate(" + newRotation + "deg)";
        this.setAttribute("data-rotation", newRotation);

        if (this.classList.contains("lh") || this.classList.contains("lv")) {
          if (this.getAttribute("data-rotation") === "180") {
            this.setAttribute("data-rotation", "0");
            this.style.transform = "rotate(0deg)";
          }
        }

        if (this.getAttribute("data-rotation") === "360") {
          this.setAttribute("data-rotation", "0");
          this.style.transform = "rotate(0deg)";
        }
      });
    });
  }
  let square = document.querySelectorAll(".Square");

  square.forEach(function (clearClass) {
    clearClass.className = "Square";
  });

  square.forEach(function (setAtt) {
    setAtt.setAttribute("data-rotation", "0");
    setAtt.style.transform = "rotate(0)";
  });

  let classes = theLevel.classes;

  //set the class for all squares
  function setClasses(theClasses) {
    for (let i = 0; i < theClasses.length; i++) {
      square[i].classList.add(theClasses[i]);
    }
  }
  setClasses(classes);

  square.forEach(function (rotate) {
    rotate.addEventListener("click", function (e) {
      if (this.getAttribute("data-rotation") !== "0") {
        this.classList.add("rotated");
      } else {
        this.classList.remove("rotated");
      }

      // Count the number of elements with class "rotated"
      let rotatedCount = 0;
      for (let i = 0; i < square.length; i++) {
        if (square[i].classList.contains("rotated")) {
          rotatedCount++;
        }
      }

      // Check if the count is x or more

      const numberOfSquares = theLevel.squareNumber.length;

      if (rotatedCount >= numberOfSquares) {
        // Add class "not-rotated" to all elements that don't have class "rotated"
        for (let i = 0; i < square.length; i++) {
          if (!square[i].classList.contains("rotated")) {
            square[i].classList.add("not-rotated");
          }
        }
      } else {
        for (let i = 0; i < square.length; i++) {
          if (!square[i].classList.contains("rotated")) {
            square[i].classList.remove("not-rotated");
          }
        }
      }

      const squareNumber = theLevel.squareNumber;
      const squareRotation = theLevel.squareRotation;

      let allCorrect = true; // Flag variable to track if all conditions are met

      // Loop through the square numbers array
      for (let i = 0; i < squareNumber.length; i++) {
        const squareIndex = squareNumber[i] - 1; // Adjust index to match array index

        // Get the square element with the specified index
        const squareElement = square[squareIndex];

        // Get the data-rotation value of the square element
        const rotationValue = parseInt(squareElement.getAttribute("data-rotation"));

        // Check if the data-rotation value matches the expected rotation value
        if (rotationValue !== squareRotation[i]) {
          allCorrect = false; // Set the flag to false if any condition is not met
          break; // Exit the loop early if a condition is not met
        }
      }

      // Check the flag value to determine whether all conditions are met
      if (allCorrect) {
        document.querySelector(".model").classList.add("win");
        document.querySelector(".level-info").innerHTML = theLevel.levelInfo;
        document.querySelector(".info").innerHTML = theLevel.info;
        if (theLevel === levelSeven) {
          const jsConfetti = new JSConfetti();
          jsConfetti.addConfetti({
            confettiNumber: 500,
          });
        }
      } else {
        document.querySelector(".model").classList.remove("win");
      }
    });
  });
}
const changeLevel = [levelOne, levelTwo, levelThree, levelFour, levelFive, levelSix, levelSeven];
const levelString = ["levelOne", "levelTwo", "levelThree", "levelFour", "levelFive", "levelSix", "levelSeven"];
let currentLevelIndex = 0;

const nextLevelBtn = document.querySelector(".next-level");

nextLevelBtn.addEventListener("click", function () {
  document.querySelector(".maze").setAttribute("data-level", levelString[currentLevelIndex]);

  document.querySelector(".model").classList.remove("win");

  setLevel(changeLevel[currentLevelIndex]);

  currentLevelIndex++;

  if (currentLevelIndex === changeLevel.length) {
    nextLevelBtn.style.display = "none";
  }
});
