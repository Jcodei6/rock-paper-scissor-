// Get DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Function to update scores
const updateScores = () => {
  document.querySelector(".user-score").textContent = `Harvy: ${userScore}`;
  document.querySelector(".computer-score").textContent = `bot: ${computerScore}`;
};

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "/bato bato pik/dist/bato.png";
    result.textContent = "Wait...";

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = [
        "/bato bato pik/dist/bato.png",
        "/bato bato pik/dist/papel.png",
        "/bato bato pik/dist/gunting.png"
      ];
      cpuResult.src = cpuImages[randomNumber];

      let comValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Tabla ra",
        RP: "Pildi",
        RS: "Daog ka:>>",
        PP: "Tabla ra",
        PR: "Daog ka:>>",
        PS: "Pildi ka",
        SS: "Tabla ra",
        SR: "Pildi ka",
        SP: "Daog ka:>>"
      };

      let outComeValue = outcomes[userValue + comValue];

      if (userValue === comValue) {
        result.textContent = "Tabla ra";
      } else {
        result.textContent = `${outComeValue} `;
        if (outcomes[userValue + comValue].includes("Daog")) {
          userScore++;
        } else {
          computerScore++;
        }
        updateScores();
      }
    }, 2500);
  });
});
