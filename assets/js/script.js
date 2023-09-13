// global constants
const RULES_MODAL = document.getElementById("modal-rules");
const RULES_MODAL_BTN = document.getElementById("btn-rules");
const RULES_MODAL_CLOSE = document.getElementById("close-rules");
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
            default:
                break;
        }
    }

    // event listeners
    RULES_MODAL_BTN.addEventListener("click", openModal);
    RULES_MODAL_CLOSE.addEventListener("click", closeModal);
});