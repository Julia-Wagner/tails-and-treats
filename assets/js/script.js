// global constants
const RULES_MODAL = document.getElementById("modal-rules");
const RULES_MODAL_BTN = document.getElementById("btn-rules");
const RULES_MODAL_CLOSE = document.getElementById("close-rules");
const START_GAME_MODAL = document.getElementById("modal-start-game");
const START_GAME_MODAL_BTN = document.getElementById("btn-start-game");
const START_GAME_MODAL_CLOSE = document.getElementById("close-start-game");
const START_GAME_FORM = document.getElementById("start-game-form");
const MAIN = document.getElementsByTagName("main")[0];
const MENU_CONTAINER = document.getElementById("menu-container");
const MENU_NAV = document.getElementById("game-menu");
const MENU_NAV_BTN = document.getElementById("btn-menu");
const BACK_NAV_BTN = document.getElementById("btn-back");
const MAZE_CONTAINER = document.getElementById("maze-container");

document.addEventListener("DOMContentLoaded", function () {
    // open the modal given as a parameter
    function openModal(e) {
        // set aria-hidden for the main content hidden behind the modal for accessibility
        MAIN.setAttribute('aria-hidden', 'true');
        // open the model according to the clicked button
        switch (e.target) {
            // open rules modal
            case RULES_MODAL_BTN:
                RULES_MODAL.style.display = "block";
                RULES_MODAL.setAttribute('aria-hidden', 'false');
                break;
            // open start game modal
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
            // close rules modal
            case RULES_MODAL_CLOSE:
                RULES_MODAL.style.display = "none";
                RULES_MODAL.setAttribute('aria-hidden', 'true');
                break;
            // close start game modal
            case START_GAME_MODAL_CLOSE:
                START_GAME_MODAL.style.display = "none";
                START_GAME_MODAL.setAttribute('aria-hidden', 'true');
                break;
            // game started - close modal
            case START_GAME_FORM:
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
        closeModal(e);
        MENU_NAV.style.display = "flex";
        MENU_NAV.setAttribute('aria-hidden', 'false');
        closeMenu();
        let Maze;
        switch (START_GAME_FORM.difficulty.value) {
            case "easy":
                Maze = new FancyMazeBuilder(7, 5);
                break;
            case "medium":
                Maze = new FancyMazeBuilder(10, 7);
                break;
            case "hard":
                Maze = new FancyMazeBuilder(15, 10);
                break;
        }
        Maze.display("maze-container");
    }

    // open main menu, show back to game button and hide menu button
    function openMenu() {
        MENU_CONTAINER.style.display = "block";
        MENU_CONTAINER.setAttribute('aria-hidden', 'false');
        MENU_NAV_BTN.style.display = "none";
        MENU_NAV_BTN.setAttribute('aria-hidden', 'true');
        BACK_NAV_BTN.style.display = "flex";
        BACK_NAV_BTN.setAttribute('aria-hidden', 'false');
        MAZE_CONTAINER.style.display = "none";
        MAZE_CONTAINER.setAttribute('aria-hidden', 'true');
    }

    // close main menu, hide back to game button and show menu button
    function closeMenu() {
        MENU_CONTAINER.style.display = "none";
        MENU_CONTAINER.setAttribute('aria-hidden', 'true');
        BACK_NAV_BTN.style.display = "none";
        BACK_NAV_BTN.setAttribute('aria-hidden', 'true');
        MENU_NAV_BTN.style.display = "flex";
        MENU_NAV_BTN.setAttribute('aria-hidden', 'false');
        MAZE_CONTAINER.style.display = "relative";
        MAZE_CONTAINER.setAttribute('aria-hidden', 'false');
    }

    // event listeners
    RULES_MODAL_BTN.addEventListener("click", openModal);
    RULES_MODAL_CLOSE.addEventListener("click", closeModal);
    START_GAME_MODAL_BTN.addEventListener("click", openModal);
    START_GAME_MODAL_CLOSE.addEventListener("click", closeModal);
    START_GAME_FORM.addEventListener("submit", startGame);
    MENU_NAV_BTN.addEventListener("click", openMenu);
    BACK_NAV_BTN.addEventListener("click", closeMenu);
});

// show the default browser message when the page is reloaded to prevent unwanted exit of the game
window.onbeforeunload = function () { return ""; };