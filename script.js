// Счет игры
let score = 0;

// Элементы
const circle = document.getElementById('circle');
const scoreDisplay = document.getElementById('score');
const gameModal = document.getElementById('gameModal');
const modalScore = document.getElementById('modalScore');

// Функция для обновления счета
function updateScore() {
    score++;
    scoreDisplay.textContent = `Очки: ${score}`;
    if (score % 10 === 0) {  // Показываем модальное окно каждое 10-е очко
        showModal();
    }
}

// Функция для перемещения круга в случайное место
function moveCircle() {
    const container = document.getElementById('game-container');
    const maxX = container.offsetWidth - circle.offsetWidth;
    const maxY = container.offsetHeight - circle.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}

// Обработчик клика по кругу
circle.addEventListener('click', () => {
    updateScore();
    moveCircle(); // Перемещаем круг
});

// Функция для показа модального окна
function showModal() {
    modalScore.textContent = score;
    gameModal.style.display = 'flex';
}

// Закрытие модального окна
function closeModal() {
    gameModal.style.display = 'none';
    score = 0;  // Сброс счета после закрытия окна
    scoreDisplay.textContent = `Очки: ${score}`;
}

// Перемещение круга в случайное место при загрузке
moveCircle();
