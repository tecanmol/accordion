const questionBtns = document.querySelectorAll(".Q");

questionBtns.forEach(button => {
    button.addEventListener("click", () => {
    const arrowSpan = button.querySelector('.arrow');
    const arrowChar = arrowSpan.textContent.trim();

    arrowSpan.textContent = (arrowChar === '▼') ? '▲' : '▼';
    const answer = button.parentElement.nextElementSibling;
        answer.classList.toggle('show');
    });
});
