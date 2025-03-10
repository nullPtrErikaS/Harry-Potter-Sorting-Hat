// Questions and scoring logic
const allQuestions = [
    {
        question: "Which quality do you value most in yourself?",
        options: [
            { text: "Courage and bravery", scores: { gryffindor: 10, hufflepuff: 3, ravenclaw: 2, slytherin: 2 } },
            { text: "Loyalty and hard work", scores: { gryffindor: 3, hufflepuff: 10, ravenclaw: 2, slytherin: 2 } },
            { text: "Intelligence and creativity", scores: { gryffindor: 2, hufflepuff: 2, ravenclaw: 10, slytherin: 3 } },
            { text: "Ambition and cunning", scores: { gryffindor: 2, hufflepuff: 2, ravenclaw: 3, slytherin: 10 } }
        ]
    },
    {
        question: "Given the choice, would you rather be:",
        options: [
            { text: "Admired", scores: { gryffindor: 8, hufflepuff: 2, ravenclaw: 5, slytherin: 6 } },
            { text: "Trusted", scores: { gryffindor: 5, hufflepuff: 9, ravenclaw: 3, slytherin: 4 } },
            { text: "Praised", scores: { gryffindor: 6, hufflepuff: 3, ravenclaw: 8, slytherin: 5 } },
            { text: "Feared", scores: { gryffindor: 2, hufflepuff: 1, ravenclaw: 4, slytherin: 9 } }
        ]
    },
    {
        question: "Which path would you take?",
        options: [
            { text: "The dangerous but direct path through a dark forest", scores: { gryffindor: 9, hufflepuff: 3, ravenclaw: 4, slytherin: 5 } },
            { text: "The safe path that takes longer", scores: { gryffindor: 3, hufflepuff: 8, ravenclaw: 5, slytherin: 2 } },
            { text: "The path with the most interesting landmarks", scores: { gryffindor: 5, hufflepuff: 5, ravenclaw: 9, slytherin: 3 } },
            { text: "The path that gets you there first, regardless of what it takes", scores: { gryffindor: 4, hufflepuff: 1, ravenclaw: 3, slytherin: 9 } }
        ]
    },
    {
        question: "You discover a magical creature injured in the Forbidden Forest. What do you do?",
        options: [
            { text: "Rush to help it immediately, despite the risks", scores: { gryffindor: 10, hufflepuff: 6, ravenclaw: 3, slytherin: 1 } },
            { text: "Carefully approach and try to gain its trust", scores: { gryffindor: 5, hufflepuff: 9, ravenclaw: 5, slytherin: 3 } },
            { text: "Observe first to understand what kind of creature it is", scores: { gryffindor: 3, hufflepuff: 4, ravenclaw: 10, slytherin: 5 } },
            { text: "Consider if helping this creature could benefit you", scores: { gryffindor: 1, hufflepuff: 2, ravenclaw: 4, slytherin: 10 } }
        ]
    },
    {
        question: "In a difficult situation, what would you rely on most?",
        options: [
            { text: "Your courage", scores: { gryffindor: 10, hufflepuff: 3, ravenclaw: 2, slytherin: 4 } },
            { text: "Your friends", scores: { gryffindor: 6, hufflepuff: 10, ravenclaw: 3, slytherin: 2 } },
            { text: "Your intelligence", scores: { gryffindor: 3, hufflepuff: 2, ravenclaw: 10, slytherin: 5 } },
            { text: "Your resourcefulness", scores: { gryffindor: 4, hufflepuff: 4, ravenclaw: 5, slytherin: 10 } }
        ]
    },
    {
        question: "If you could brew one potion, which would it be?",
        options: [
            { text: "A potion of courage", scores: { gryffindor: 10, hufflepuff: 4, ravenclaw: 3, slytherin: 3 } },
            { text: "A healing potion", scores: { gryffindor: 4, hufflepuff: 10, ravenclaw: 3, slytherin: 2 } },
            { text: "A potion of wisdom", scores: { gryffindor: 3, hufflepuff: 3, ravenclaw: 10, slytherin: 4 } },
            { text: "A potion of influence", scores: { gryffindor: 2, hufflepuff: 2, ravenclaw: 4, slytherin: 10 } }
        ]
    },
    {
        question: "What would you most like to be known for?",
        options: [
            { text: "Your daring deeds", scores: { gryffindor: 10, hufflepuff: 2, ravenclaw: 3, slytherin: 5 } },
            { text: "Your kindness", scores: { gryffindor: 5, hufflepuff: 10, ravenclaw: 3, slytherin: 1 } },
            { text: "Your intelligence", scores: { gryffindor: 3, hufflepuff: 3, ravenclaw: 10, slytherin: 4 } },
            { text: "Your achievements", scores: { gryffindor: 4, hufflepuff: 2, ravenclaw: 5, slytherin: 10 } }
        ]
    },
    {
        question: "You find a mysterious book with forbidden knowledge. What do you do?",
        options: [
            { text: "Open it immediately to see what secrets it holds", scores: { gryffindor: 8, hufflepuff: 2, ravenclaw: 7, slytherin: 9 } },
            { text: "Turn it in to the professors, it could be dangerous", scores: { gryffindor: 5, hufflepuff: 10, ravenclaw: 4, slytherin: 1 } },
            { text: "Study it carefully before deciding what to do", scores: { gryffindor: 4, hufflepuff: 5, ravenclaw: 10, slytherin: 6 } },
            { text: "Keep it secret and use the knowledge to your advantage", scores: { gryffindor: 2, hufflepuff: 1, ravenclaw: 5, slytherin: 10 } }
        ]
    },
    {
        question: "During a Quidditch match, you notice an opponent cheating. What's your response?",
        options: [
            { text: "Confront them directly during the game", scores: { gryffindor: 10, hufflepuff: 5, ravenclaw: 2, slytherin: 3 } },
            { text: "Report it to the referee immediately", scores: { gryffindor: 7, hufflepuff: 10, ravenclaw: 6, slytherin: 1 } },
            { text: "Observe to collect evidence first", scores: { gryffindor: 3, hufflepuff: 4, ravenclaw: 10, slytherin: 5 } },
            { text: "Use it as leverage later or counter with your own strategy", scores: { gryffindor: 1, hufflepuff: 1, ravenclaw: 4, slytherin: 10 } }
        ]
    },
    {
        question: "How do you approach studying for exams?",
        options: [
            { text: "Cram the night before with determination", scores: { gryffindor: 8, hufflepuff: 2, ravenclaw: 1, slytherin: 6 } },
            { text: "Study consistently with a regular schedule", scores: { gryffindor: 4, hufflepuff: 10, ravenclaw: 7, slytherin: 5 } },
            { text: "Create detailed study guides and systems", scores: { gryffindor: 3, hufflepuff: 5, ravenclaw: 10, slytherin: 4 } },
            { text: "Focus on what's likely to be on the test", scores: { gryffindor: 5, hufflepuff: 3, ravenclaw: 6, slytherin: 10 } }
        ]
    },
    {
        question: "What type of pet would you bring to Hogwarts?",
        options: [
            { text: "A brave and loyal owl", scores: { gryffindor: 10, hufflepuff: 5, ravenclaw: 7, slytherin: 6 } },
            { text: "A friendly and affectionate cat", scores: { gryffindor: 5, hufflepuff: 10, ravenclaw: 4, slytherin: 3 } },
            { text: "An unusual or rare magical creature", scores: { gryffindor: 7, hufflepuff: 3, ravenclaw: 10, slytherin: 5 } },
            { text: "A cunning and impressive magical snake", scores: { gryffindor: 2, hufflepuff: 1, ravenclaw: 5, slytherin: 10 } }
        ]
    },
    {
        question: "You find a fellow student crying in the bathroom. What do you do?",
        options: [
            { text: "Immediately offer help and comfort", scores: { gryffindor: 8, hufflepuff: 10, ravenclaw: 4, slytherin: 2 } },
            { text: "Give them space but let them know you're available", scores: { gryffindor: 5, hufflepuff: 8, ravenclaw: 10, slytherin: 4 } },
            { text: "Awkwardly leave, emotional situations aren't your strong suit", scores: { gryffindor: 3, hufflepuff: 1, ravenclaw: 6, slytherin: 7 } },
            { text: "Assess if helping them could be advantageous to you", scores: { gryffindor: 1, hufflepuff: 0, ravenclaw: 2, slytherin: 10 } }
        ]
    },
    {
        question: "You have the opportunity to compete in a dangerous tournament with glory and prize money. What do you do?",
        options: [
            { text: "Sign up immediately - the danger makes it exciting!", scores: { gryffindor: 10, hufflepuff: 2, ravenclaw: 3, slytherin: 6 } },
            { text: "Decline - it's not worth the risk", scores: { gryffindor: 1, hufflepuff: 10, ravenclaw: 4, slytherin: 2 } },
            { text: "Research past tournaments to make an informed decision", scores: { gryffindor: 4, hufflepuff: 5, ravenclaw: 10, slytherin: 3 } },
            { text: "Enter if the rewards seem worth the risk", scores: { gryffindor: 5, hufflepuff: 3, ravenclaw: 6, slytherin: 10 } }
        ]
    },
    {
        question: "How would you react if a friend betrayed your trust?",
        options: [
            { text: "Confront them immediately and passionately", scores: { gryffindor: 10, hufflepuff: 4, ravenclaw: 3, slytherin: 6 } },
            { text: "Try to understand their perspective and forgive", scores: { gryffindor: 5, hufflepuff: 10, ravenclaw: 6, slytherin: 1 } },
            { text: "Analyze what happened and discuss it rationally", scores: { gryffindor: 4, hufflepuff: 6, ravenclaw: 10, slytherin: 3 } },
            { text: "Cut them off and potentially plan revenge", scores: { gryffindor: 3, hufflepuff: 1, ravenclaw: 2, slytherin: 10 } }
        ]
    },
    {
        question: "Which class at Hogwarts would you excel in?",
        options: [
            { text: "Defense Against the Dark Arts", scores: { gryffindor: 10, hufflepuff: 3, ravenclaw: 6, slytherin: 7 } },
            { text: "Herbology or Care of Magical Creatures", scores: { gryffindor: 4, hufflepuff: 10, ravenclaw: 5, slytherin: 2 } },
            { text: "Charms or Ancient Runes", scores: { gryffindor: 5, hufflepuff: 4, ravenclaw: 10, slytherin: 3 } },
            { text: "Potions or Divination", scores: { gryffindor: 3, hufflepuff: 2, ravenclaw: 4, slytherin: 10 } }
        ]
    },
    {
        question: "What would you see in the Mirror of Erised?",
        options: [
            { text: "Yourself accomplishing a heroic deed", scores: { gryffindor: 10, hufflepuff: 2, ravenclaw: 3, slytherin: 5 } },
            { text: "Yourself surrounded by loved ones", scores: { gryffindor: 5, hufflepuff: 10, ravenclaw: 2, slytherin: 1 } },
            { text: "Yourself discovering new knowledge", scores: { gryffindor: 3, hufflepuff: 4, ravenclaw: 10, slytherin: 3 } },
            { text: "Yourself in a position of power", scores: { gryffindor: 4, hufflepuff: 1, ravenclaw: 3, slytherin: 10 } }
        ]
    },
    {
        question: "How do you handle conflict?",
        options: [
            { text: "Face it head-on", scores: { gryffindor: 10, hufflepuff: 4, ravenclaw: 3, slytherin: 6 } },
            { text: "Seek compromise and harmony", scores: { gryffindor: 5, hufflepuff: 10, ravenclaw: 4, slytherin: 2 } },
            { text: "Analyze the situation logically", scores: { gryffindor: 4, hufflepuff: 5, ravenclaw: 10, slytherin: 3 } },
            { text: "Strategize to ensure you come out ahead", scores: { gryffindor: 3, hufflepuff: 1, ravenclaw: 4, slytherin: 10 } }
        ]
    },
    {
        question: "You find a bag of gold galleons in the hallway. What do you do?",
        options: [
            { text: "Turn it in to a professor immediately", scores: { gryffindor: 8, hufflepuff: 10, ravenclaw: 6, slytherin: 1 } },
            { text: "Ask around to find who lost it", scores: { gryffindor: 10, hufflepuff: 9, ravenclaw: 5, slytherin: 2 } },
            { text: "Leave it where it is - it could be a trap", scores: { gryffindor: 4, hufflepuff: 5, ravenclaw: 10, slytherin: 3 } },
            { text: "Keep it - finder's keepers", scores: { gryffindor: 1, hufflepuff: 0, ravenclaw: 2, slytherin: 10 } }
        ]
    },
    {
        question: "Your Boggart would most likely take the form of:",
        options: [
            { text: "Personal failure or helplessness", scores: { gryffindor: 10, hufflepuff: 4, ravenclaw: 3, slytherin: 5 } },
            { text: "Losing loved ones or being alone", scores: { gryffindor: 5, hufflepuff: 10, ravenclaw: 2, slytherin: 1 } },
            { text: "Ignorance or mediocrity", scores: { gryffindor: 2, hufflepuff: 3, ravenclaw: 10, slytherin: 4 } },
            { text: "Loss of power or control", scores: { gryffindor: 3, hufflepuff: 2, ravenclaw: 4, slytherin: 10 } }
        ]
    },
    {
        question: "How would you describe your friendship style?",
        options: [
            { text: "Protective and bold - I'd do anything for my friends", scores: { gryffindor: 10, hufflepuff: 6, ravenclaw: 2, slytherin: 3 } },
            { text: "Loyal and supportive - I'm always there when needed", scores: { gryffindor: 6, hufflepuff: 10, ravenclaw: 3, slytherin: 2 } },
            { text: "Stimulating and thoughtful - I value deep conversations", scores: { gryffindor: 3, hufflepuff: 4, ravenclaw: 10, slytherin: 3 } },
            { text: "Selective and strategic - I choose my friends carefully", scores: { gryffindor: 2, hufflepuff: 3, ravenclaw: 4, slytherin: 10 } }
        ]
    },
    {
        question: "If you could master one branch of magic, what would it be?",
        options: [
            { text: "Dueling and defensive spells", scores: { gryffindor: 10, hufflepuff: 2, ravenclaw: 4, slytherin: 6 } },
            { text: "Healing and protective enchantments", scores: { gryffindor: 4, hufflepuff: 10, ravenclaw: 5, slytherin: 2 } },
            { text: "Transfiguration and complex charm work", scores: { gryffindor: 3, hufflepuff: 4, ravenclaw: 10, slytherin: 5 } },
            { text: "Legilimency or manipulation magic", scores: { gryffindor: 2, hufflepuff: 1, ravenclaw: 5, slytherin: 10 } }
        ]
    },
    {
        question: "When faced with an important decision, you usually:",
        options: [
            { text: "Go with your gut instinct", scores: { gryffindor: 10, hufflepuff: 4, ravenclaw: 1, slytherin: 3 } },
            { text: "Consider how it affects others", scores: { gryffindor: 5, hufflepuff: 10, ravenclaw: 3, slytherin: 1 } },
            { text: "Make a pros and cons list", scores: { gryffindor: 2, hufflepuff: 5, ravenclaw: 10, slytherin: 4 } },
            { text: "Consider what outcome benefits you most", scores: { gryffindor: 3, hufflepuff: 1, ravenclaw: 5, slytherin: 10 } }
        ]
    },
    {
        question: "What motivates you most?",
        options: [
            { text: "Doing what's right", scores: { gryffindor: 10, hufflepuff: 7, ravenclaw: 4, slytherin: 2 } },
            { text: "Helping others", scores: { gryffindor: 6, hufflepuff: 10, ravenclaw: 3, slytherin: 1 } },
            { text: "Learning and discovery", scores: { gryffindor: 4, hufflepuff: 3, ravenclaw: 10, slytherin: 5 } },
            { text: "Success and recognition", scores: { gryffindor: 5, hufflepuff: 2, ravenclaw: 6, slytherin: 10 } }
        ]
    },
    {
        question: "Which magical artifact would you most want to possess?",
        options: [
            { text: "The Sword of Gryffindor - appearing in times of need", scores: { gryffindor: 10, hufflepuff: 3, ravenclaw: 4, slytherin: 5 } },
            { text: "A time-turner - to give yourself more time for everything", scores: { gryffindor: 4, hufflepuff: 10, ravenclaw: 6, slytherin: 3 } },
            { text: "A pensieve - to review and analyze memories", scores: { gryffindor: 3, hufflepuff: 4, ravenclaw: 10, slytherin: 5 } },
            { text: "The Elder Wand - the most powerful wand in existence", scores: { gryffindor: 5, hufflepuff: 1, ravenclaw: 4, slytherin: 10 } }
        ]
    },
    {
        question: "In group projects, what role do you typically take?",
        options: [
            { text: "The leader who drives the project forward", scores: { gryffindor: 10, hufflepuff: 3, ravenclaw: 5, slytherin: 8 } },
            { text: "The mediator who ensures everyone works together", scores: { gryffindor: 5, hufflepuff: 10, ravenclaw: 3, slytherin: 2 } },
            { text: "The researcher who provides information and ideas", scores: { gryffindor: 3, hufflepuff: 4, ravenclaw: 10, slytherin: 5 } },
            { text: "The strategist who ensures efficiency and results", scores: { gryffindor: 4, hufflepuff: 2, ravenclaw: 6, slytherin: 10 } }
        ]
    },
    {
        question: "How do you view rules?",
        options: [
            { text: "Guidelines that can be broken for the greater good", scores: { gryffindor: 10, hufflepuff: 2, ravenclaw: 4, slytherin: 6 } },
            { text: "Important boundaries that maintain fairness", scores: { gryffindor: 4, hufflepuff: 10, ravenclaw: 5, slytherin: 1 } },
            { text: "Interesting systems to understand and analyze", scores: { gryffindor: 3, hufflepuff: 4, ravenclaw: 10, slytherin: 3 } },
            { text: "Obstacles to be worked around when necessary", scores: { gryffindor: 6, hufflepuff: 1, ravenclaw: 3, slytherin: 10 } }
        ]
    },
    {
        question: "How do you handle stress?",
        options: [
            { text: "Push through it with determination", scores: { gryffindor: 10, hufflepuff: 4, ravenclaw: 3, slytherin: 6 } },
            { text: "Take breaks and practice self-care", scores: { gryffindor: 4, hufflepuff: 10, ravenclaw: 5, slytherin: 3 } },
            { text: "Analyze the source and create a solution", scores: { gryffindor: 3, hufflepuff: 5, ravenclaw: 10, slytherin: 4 } },
            { text: "Focus only on what's essential and delegate the rest", scores: { gryffindor: 5, hufflepuff: 3, ravenclaw: 4, slytherin: 10 } }
        ]
    }
];

// Final question that will always appear last
const finalQuestion = {
    question: "The Sorting Hat takes your choice into account. Which house would you prefer to be in?",
    options: [
        { text: "Gryffindor - House of courage and bravery", scores: { gryffindor: 20, hufflepuff: 0, ravenclaw: 0, slytherin: 0 } },
        { text: "Hufflepuff - House of loyalty and hard work", scores: { gryffindor: 0, hufflepuff: 20, ravenclaw: 0, slytherin: 0 } },
        { text: "Ravenclaw - House of wit and learning", scores: { gryffindor: 0, hufflepuff: 0, ravenclaw: 20, slytherin: 0 } },
        { text: "Slytherin - House of ambition and cunning", scores: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 20 } }
    ]
};

// Generate a random quiz of 14-19 questions plus the final question
function generateQuiz() {
    // Shuffle the questions array
    const shuffledQuestions = [...allQuestions].sort(() => 0.5 - Math.random());
    
    // Select a random number between 14 and 19
    const questionCount = Math.floor(Math.random() * 6) + 14;
    
    // Take the first questionCount questions
    let selectedQuestions = shuffledQuestions.slice(0, questionCount);
    
    // Add the final question at the end
    selectedQuestions.push(finalQuestion);
    
    return selectedQuestions;
}

// House information
const houseInfo = {
    gryffindor: {
        title: "Gryffindor",
        description: "Congratulations! The Sorting Hat has placed you in Gryffindor, where dwell the brave at heart. Your daring, nerve, and chivalry set you apart from the rest. Like the mighty lion that symbolizes your house, you face challenges with courage and determination.",
        crestClass: "gryffindor-crest",
        themeClass: "theme-gryffindor",
        color: "#740001"
    },
    hufflepuff: {
        title: "Hufflepuff",
        description: "Congratulations! The Sorting Hat has placed you in Hufflepuff, where they are just and loyal. Your patience, dedication, and hard work make you a true Hufflepuff. Like the badger that represents your house, you are a steadfast friend and value fairness above all.",
        crestClass: "hufflepuff-crest",
        themeClass: "theme-hufflepuff",
        color: "#eeba30"
    },
    ravenclaw: {
        title: "Ravenclaw",
        description: "Congratulations! The Sorting Hat has placed you in Ravenclaw, where those of wit and learning will always find their kind. Your intelligence, creativity, and wisdom mark you as a true Ravenclaw. Like the eagle that soars for your house, your mind reaches beyond ordinary boundaries.",
        crestClass: "ravenclaw-crest",
        themeClass: "theme-ravenclaw",
        color: "#222f5b"
    },
    slytherin: {
        title: "Slytherin",
        description: "Congratulations! The Sorting Hat has placed you in Slytherin, where you'll make your real friends. Your ambition, cunning, and resourcefulness identify you as a true Slytherin. Like the serpent that represents your house, you are determined and will use all means to achieve your ends.",
        crestClass: "slytherin-crest",
        themeClass: "theme-slytherin",
        color: "#1a472a"
    }
};