// ВСТАВЛЯЕМ ВОПРОСЫ ПРЯМО В КОД (так как Google блокирует ссылку)
const questions = [
    {
        question: "Что такое база данных?",
        options: [
            "Программа для редактирования текста", 
            "Организованная структура для хранения и обработки информации", 
            "Набор веб-страниц", 
            "Файл с расширением .exe"
        ],
        correctAnswer: "Организованная структура для хранения и обработки информации"
    },
    {
        question: "Какой тип данных предназначен для хранения целых чисел?",
        options: ["VARCHAR", "TEXT", "INT", "DATE"],
        correctAnswer: "INT"
    },
    {
        question: "Что из перечисленного является СУБД?",
        options: ["MySQL", "HTML", "Python", "Windows"],
        correctAnswer: "MySQL"
    },
    {
        question: "Что такое 'первичный ключ' (Primary Key)?",
        options: [
            "Ключ для шифрования данных", 
            "Поле, которое однозначно идентифицирует каждую запись в таблице", 
            "Пароль для входа в базу данных", 
            "Главный сервер базы данных"
        ],
        correctAnswer: "Поле, которое однозначно идентифицирует каждую запись в таблице"
    },
    {
        question: "Какая команда SQL используется для извлечения данных из таблицы?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        correctAnswer: "SELECT"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

// Запускаем тест сразу, без загрузки из интернета
function startQuiz() {
    showQuestion();
}

function showQuestion() {
    document.getElementById('question-text').innerText = questions[currentQuestionIndex].question;
    document.getElementById('progress').innerText = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}`;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    questions[currentQuestionIndex].options.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = option;
        btn.onclick = () => selectOption(btn, option);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('next-btn').onclick = nextQuestion;
    selectedOption = null;
}

function selectOption(button, option) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedOption = option;
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    if (selectedOption === null) return;
    
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').innerText = `Твой результат: ${score} из ${questions.length} правильных ответов.`;
}

// Поехали
startQuiz();