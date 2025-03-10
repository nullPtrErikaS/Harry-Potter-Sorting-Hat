document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const startBtn = document.querySelector('.start-btn');
    const introScreen = document.querySelector('.intro-screen');
    const questionsScreen = document.querySelector('.questions');
    const resultScreen = document.querySelector('.result');
    const questionElement = document.querySelector('.question');
    const optionsElement = document.querySelector('.options');
    const progressBar = document.querySelector('.progress-bar');
    const restartBtn = document.querySelector('.restart-btn');
    const houseCrest = document.querySelector('.house-crest');
    const houseTitle = document.querySelector('.house-title');
    const houseDescription = document.querySelector('.house-description');
    const body = document.querySelector('body');
    const fireworksContainer = document.querySelector('.fireworks');

    // State variables
    let currentQuestion = 0;
    let questions = []; // Will be populated with random questions
    let scores = {
        gryffindor: 0,
        hufflepuff: 0,
        ravenclaw: 0,
        slytherin: 0
    };

    // Event listeners
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', restartQuiz);

    // Start quiz
    function startQuiz() {
        // Generate a new random quiz
        questions = generateQuiz();
        currentQuestion = 0;
        
        // Reset scores
        for (const house in scores) {
            scores[house] = 0;
        }
        
        introScreen.style.display = 'none';
        questionsScreen.style.display = 'block';
        questionsScreen.style.opacity = '0';
        
        // Trigger animation after a small delay
        setTimeout(() => {
            questionsScreen.style.opacity = '1';
        }, 50);
        
        showQuestion();
    }

    // Display current question
    function showQuestion() {
        const question = questions[currentQuestion];
        questionElement.textContent = question.question;
        
        // Clear previous options
        optionsElement.innerHTML = '';
        
        // Add new options
        question.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option.text;
            
            optionElement.addEventListener('click', () => {
                // Update scores
                for (const house in option.scores) {
                    scores[house] += option.scores[house];
                }
                
                // Move to next question or show result
                nextQuestion();
            });
            
            optionsElement.appendChild(optionElement);
        });
        
        // Update progress bar
        const progress = (currentQuestion / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Move to next question or show result
    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            
            // Fade out current question
            questionsScreen.style.opacity = '0';
            
            // Show next question after transition
            setTimeout(() => {
                showQuestion();
                questionsScreen.style.opacity = '1';
            }, 300);
        } else {
            showResult();
        }
    }

    // Show quiz result
    function showResult() {
        // Determine the house with the highest score
        let maxScore = 0;
        let assignedHouse = 'gryffindor'; // Default
        
        for (const house in scores) {
            if (scores[house] > maxScore) {
                maxScore = scores[house];
                assignedHouse = house;
            }
        }
        
        // Update result screen with house information
        houseCrest.className = 'house-crest'; // Clear previous classes
        houseCrest.classList.add(houseInfo[assignedHouse].crestClass);
        
        houseTitle.textContent = houseInfo[assignedHouse].title;
        houseDescription.textContent = houseInfo[assignedHouse].description;
        
        // Apply house-specific theme
        body.className = '';
        body.classList.add(houseInfo[assignedHouse].themeClass);
        
        // Hide questions, show result
        questionsScreen.style.display = 'none';
        resultScreen.style.display = 'block';
        
        // Create fireworks animation
        createFireworks(assignedHouse);
    }

    // Restart the quiz
    function restartQuiz() {
        // Reset scores
        for (const house in scores) {
            scores[house] = 0;
        }
        
        // Reset to first question
        currentQuestion = 0;
        
        // Reset progress bar
        progressBar.style.width = '0%';
        
        // Clear fireworks
        fireworksContainer.innerHTML = '';
        
        // Hide result, show intro
        resultScreen.style.display = 'none';
        body.className = ''; // Remove house theme
        introScreen.style.display = 'block';
    }

    // Create fireworks animation based on house colors
    function createFireworks(house) {
        // Clear previous fireworks
        fireworksContainer.innerHTML = '';
        
        // Get house color
        const color = houseInfo[house].color;
        
        // Create 15 fireworks
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.classList.add('firework');
                
                // Random position
                const x = Math.random() * window.innerWidth;
                const initialY = window.innerHeight + 10;
                const finalY = 100 + Math.random() * (window.innerHeight - 200);
                
                // Random size
                const initialSize = 2 + Math.random() * 3;
                const finalSize = 150 + Math.random() * 100;
                
                // Set CSS variables for animation
                firework.style.setProperty('--x', `${x}px`);
                firework.style.setProperty('--initialY', `${initialY}px`);
                firework.style.setProperty('--finalY', `${finalY}px`);
                firework.style.setProperty('--initialSize', `${initialSize}px`);
                firework.style.setProperty('--finalSize', `${finalSize}px`);
                
                // Set position and color
                firework.style.left = `${x}px`;
                firework.style.top = `${finalY}px`;
                firework.style.width = `${initialSize}px`;
                firework.style.height = `${initialSize}px`;
                firework.style.backgroundColor = color;
                firework.style.borderRadius = '50%';
                firework.style.boxShadow = `0 0 ${initialSize * 2}px ${color}`;
                
                // Set animation
                firework.style.animation = `firework-animation 1s forwards`;
                
                // Add to container
                fireworksContainer.appendChild(firework);
                
                // Remove after animation
                setTimeout(() => {
                    firework.remove();
                }, 1000);
            }, i * 300); // Stagger fireworks
        }
    }
});