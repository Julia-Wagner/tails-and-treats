// global constants
const RULES_MODAL = document.getElementById("modal-rules");
const RULES_MODAL_BTN = document.getElementById("btn-rules");
const RULES_MODAL_CLOSE = document.getElementById("close-rules");
const START_GAME_MODAL = document.getElementById("modal-start-game");
const START_GAME_MODAL_BTN = document.getElementById("btn-start-game");
const START_GAME_MODAL_CLOSE = document.getElementById("close-start-game");
const START_GAME_FORM = document.getElementById("start-game-form");
const MAIN = document.getElementsByTagName("main")[0];

document.addEventListener("DOMContentLoaded", function () {
    // open the modal given as a parameter
    function openModal(e) {
        // set aria-hidden for the main content hidden behind the modal for accessibility
        MAIN.setAttribute('aria-hidden', 'true');
        // open the model according to the clicked button
        switch (e.target) {
            case RULES_MODAL_BTN:
                RULES_MODAL.style.display = "block";
                RULES_MODAL.setAttribute('aria-hidden', 'false');
                break;
            case START_GAME_MODAL_BTN:
                START_GAME_MODAL.style.display = "block";
                START_GAME_MODAL.setAttribute('aria-hidden', 'false');
                break;
            default:
                break;
        }
    }

    // close the modal given as a parameter
    function closeModal(e) {
        MAIN.setAttribute('aria-hidden', 'false');
        // close the model according to the clicked button
        switch (e.target) {
            case RULES_MODAL_CLOSE:
                RULES_MODAL.style.display = "none";
                RULES_MODAL.setAttribute('aria-hidden', 'true');
                break;
            case START_GAME_MODAL_CLOSE:
                START_GAME_MODAL.style.display = "none";
                START_GAME_MODAL.setAttribute('aria-hidden', 'true');
                break;
            default:
                break;
        }
    }

    // start the game with the selected options from the form
    function startGame(e) {
        e.preventDefault();
        console.log(START_GAME_FORM.dog.value);
        console.log(START_GAME_FORM.difficulty.value);
    }

    // event listeners
    RULES_MODAL_BTN.addEventListener("click", openModal);
    RULES_MODAL_CLOSE.addEventListener("click", closeModal);
    START_GAME_MODAL_BTN.addEventListener("click", openModal);
    START_GAME_MODAL_CLOSE.addEventListener("click", closeModal);
    START_GAME_FORM.addEventListener("submit", startGame);
});