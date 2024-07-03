const typingText = document.querySelector(".typing-text p"),
    inpField = document.querySelector(".wrapper .input-field"),
    startBtn = document.getElementById("start-btn"),
    tryAgainBtn = document.getElementById("try-again-btn"),
    endBtn = document.getElementById("end-btn"),
    timeTag = document.querySelector(".time span b"),
    mistakeTag = document.querySelector(".mistake span"),
    wpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span"),
    timerSelect = document.querySelector(".timer-select"),
    popup = document.getElementById("popup"),
    popupCloseBtn = document.getElementById("popup-close"),
    popupWPM = document.getElementById("popup-wpm"),
    popupCPM = document.getElementById("popup-cpm"),
    popupMistakes = document.getElementById("popup-mistakes");

let timer, maxTime, timeLeft, charIndex, mistakes, isTyping;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`;
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        if (charIndex < characters.length) {
            characters[charIndex].classList.add("active");
        } else {
            loadParagraph(); // Load new paragraph if current one is finished
            inpField.value = ""; // Clear input field for new paragraph
            charIndex = 0; // Reset charIndex for new paragraph
        }

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
        showPopup();
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
        showPopup();
    }
}

function resetGame() {
    maxTime = parseInt(timerSelect.value);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
    loadParagraph();
    startBtn.style.display = "none";
    tryAgainBtn.style.display = "block";
    endBtn.style.display = "block";
}

function startGame() {
    maxTime = parseInt(timerSelect.value); // Ensure maxTime is set when game starts
    timeLeft = maxTime;
    startBtn.style.display = "none";
    tryAgainBtn.style.display = "block";
    endBtn.style.display = "block";
    resetGame();
    inpField.focus();
    if (!isTyping) { // Start timer if not already started
        timer = setInterval(initTimer, 1000);
        isTyping = true;
    }
}

function showPopup() {
    popupWPM.innerText = `WPM: ${wpmTag.innerText}`;
    popupCPM.innerText = `CPM: ${cpmTag.innerText}`;
    popupMistakes.innerText = `Mistakes: ${mistakeTag.innerText}`;
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
    startBtn.style.display = "block";
    tryAgainBtn.style.display = "none";
    endBtn.style.display = "none";
    loadParagraph();
}

timerSelect.addEventListener("change", () => {
    if (isTyping) {
        clearInterval(timer);
        resetGame();
    } else {
        maxTime = parseInt(timerSelect.value);
        timeLeft = maxTime;
        timeTag.innerText = timeLeft;
    }
});

startBtn.addEventListener("click", startGame);
tryAgainBtn.addEventListener("click", resetGame);
endBtn.addEventListener("click", () => {
    clearInterval(timer);
    showPopup();
});
popupCloseBtn.addEventListener("click", closePopup);

loadParagraph();
inpField.addEventListener("input", initTyping);
