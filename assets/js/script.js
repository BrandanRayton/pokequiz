// Use a CSS framework other than Bootstrap.
// Be deployed to GitHub Pages.
// Be interactive (i.e., accept and respond to user input).
// Use at least two server-side APIs.
// Does not use alerts, confirms, or prompts (use modals).
// Use client-side storage to store persistent data.
// Be responsive.
// Have a polished UI.

//Music Preload
var audMusic = new Audio('./assets/audio/Pokemon Red, Yellow, Blue Battle Music- Trainer_360P - Copy.mp4')
audMusic.volume = 0.5

//global point values
var water = 0;
var fire = 0;
var fighting = 0;
var grass = 0;
var flying = 0;
var psychic = 0;
var rock = 0;
var ground = 0;
var normal = 0;
var electric = 0;


console.log("test");

var questions = [
    {
        question: "In front of you is a thug threatening to take your money. What do you do?",
        answers: [{
            answer: "Splash",
            points: [{ "water": 1 }]
        },
        {
            answer: "Punch",
            points: [{ "fighting": 1, "rock": 1 }]
        },
        {
            answer: "Run Away",
            points: [{ "fighting": 1, "rock": 1 }]
        },
        {
            answer: "Solar Beam",
            points: [{ "grass": 1 }]
        }
        ]
    },
    {
        question: "Which country would you rather travel to?",
        answers: [{
            answer: "The Bahamas",
            points: [{ "water": 1, "normal": 1, "fire": 1 }]
        },
        {
            answer: "Japan",
            points: [{ "fighting": 1, "rock": 1, "ground": 1 }]
        },
        {
            answer: "New Zealand",
            points: [{ "grass": 1, "ground": 1 }]
        },
        {
            answer: "Mexico",
            points: [{ "fire": 2 }]
        }
        ]
    },
    {
        question: "Which would you rather eat?",
        answers: [{
            answer: "Ice cream",
            points: [{ "water": 1, "normal": 1}]
        },
        {
            answer: "Cheeseburger",
            points: [{ "fire": 1, "normal": 1, "ground": 1 }]
        },
        {
            answer: "French Fries",
            points: [{ "fire": 1, "ground": 1 }]
        },
        {
            answer: "Spaghetti & Meatballs",
            points: [{ "psychic": 2 }]
        }
        ]
    },
    {
        question: "Where would you go on a vacation?",
        answers: [
            {
                answer: "Mountains",
                points: [{ "rock": 1 }]
            },
            {
                answer: "The beach",
                points: [{ "water": 1 }]
            },
            {
                answer: "New York City",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Chicago",
                points: [{ "Flying": 1 }]
            }
        ]
    },
    {
        question: "Where would you choose to live?",
        answers: [
            {
                answer: "The mountains",
                points: [{ "rock": 1 }]
            },
            {
                answer: "An island",
                points: [{ "water": 1 }]
            },
            {
                answer: "Big City",
                points: [{ "electric": 1 }]
            },
            {
                answer: "The country",
                points: [{ "grass": 1 }]
            }
        ]
    },
    {
        question: "What is your preferred choice of travel?",
        answers: [
            {
                answer: "Train",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Airplane",
                points: [{ "flying": 1 }]
            },
            {
                answer: "Walking",
                points: [{ "ground": 1 }]
            },
            {
                answer: "Boat",
                points: [{ "water": 1 }]
            }
        ]
    },
    {
        question: "Someone makes you very angry, how do you react?",
        answers: [
            {
                answer: "Fight them",
                points: [{ "fighting": 1 }]
            },
            {
                answer: "Try to set them on Fire",
                points: [{ "fire": 1 }]
            },
            {
                answer: "Run away",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Throw sand in their eyes and hit them",
                points: [{ "ground": 1, "fighting": 1 }]
            }
        ]
    },
    {
        question: "What is your favorite meal?",
        answers: [
            {
                answer: "Breakfast",
                points: [{ "rock": 1 }]
            },
            {
                answer: "Brunch",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Lunch",
                points: [{ "water": 1 }]
            },
            {
                answer: "Dinner",
                points: [{ "fire": 1 }]
            }
        ]
    },
    {
        question: "How fast do you get angry?",
        answers: [
            {
                answer: "Eh, I just brush stupid people off",
                points: [{ "Water": 1 }]
            },
            {
                answer: "Don't start with ME",
                points: [{ "normal": 1 }]
            },
            {
                answer: "You look at me wrong, I'm swinging on YOU",
                points: [{ "fighting": 1 }]
            },
            {
                answer: "In order to get angry I'd have to care",
                points: [{ "psychic": 1 }]
            }
        ]
    },
    {
        question: "What is your dream job?",
        answers: [
            {
                answer: "Construction",
                points: [{ "rock": 1 }]
            },
            {
                answer: "Business owner",
                points: [{ "fire": 1 }]
            },
            {
                answer: "Doctor",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Pilot",
                points: [{ "Flying": 1 }]
            }
        ]
    },
    {
        question: "What do you look forward to most on a normal day?",
        answers: [
            {
                answer: "Going to sleep",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Watching TV",
                points: [{ "water": 1 }]
            },
            {
                answer: "Playing video games",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Hanging out with friends",
                points: [{ "grass": 1 }]
            }
        ]
    },
    {
        question: "What is your favorite sport to watch?",
        answers: [
            {
                answer: "Football",
                points: [{ "fighting": 1 }]
            },
            {
                answer: "Swimming",
                points: [{ "water": 1 }]
            },
            {
                answer: "Basketball",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Soccer",
                points: [{ "grass": 1 }]
            }
        ]
    },
    {
        question: "How would you navigate your way to the other side of a mountain?",
        answers: [
            {
                answer: "Hike up then back down",
                points: [{ "rock": 1 }]
            },
            {
                answer: "Use the lift up then down the other side",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Walk around it following the river",
                points: [{ "water": 1 }]
            },
            {
                answer: "Sprout wings and soar to your destination",
                points: [{ "Flying": 1 }]
            }
        ]
    },
    {
        question: "What is your favorite drink?",
        answers: [
            {
                answer: "Soda",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Water",
                points: [{ "water": 1 }]
            },
            {
                answer: "Coffee",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Energy drinks",
                points: [{ "rock": 1 }]
            }
        ]
    },
    {
        question: "How much time do you spend a day watching TV?",
        answers: [
            {
                answer: "None",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "1 hour",
                points: [{ "fighting": 1 }]
            },
            {
                answer: "3 hours",
                points: [{ "normal": 1 }]
            },
            {
                answer: "5 or more hours",
                points: [{ "electric": 1 }]
            }
        ]
    },
    {
        question: "What type of TV do you watch most?",
        answers: [
            {
                answer: "Horror",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Drama",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Anime",
                points: [{ "fighting": 1 }]
            },
            {
                answer: "Comedy",
                points: [{ "fire": 1 }]
            }
        ]
    },
    {
        question: "Favorite snack for a movie?",
        answers: [
            {
                answer: "Popcorn",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Chocolate",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Soda",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Nachos",
                points: [{ "fire": 1 }]
            }
        ]
    },
    {
        question: "What is your idea of a good date?",
        answers: [
            {
                answer: "Dinner and a movie",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Picnic",
                points: [{ "ground": 1, "grass": 1 }]
            },
            {
                answer: "Flying to another country",
                points: [{ "flying": 1 }]
            },
            {
                answer: "Go cruising",
                points: [{ "electric": 1 }]
            }
        ]
    },
    {
        question: "Pick a color?",
        answers: [
            {
                answer: "Blue",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Red",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Green",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Purple",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "If you could start over, which profession would you choose?",
        answers: [
            {
                answer: "Psychologist",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Developer",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Lawyer",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Doctor",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "Your personality is?",
        answers: [
            {
                answer: "Calm and Collected",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Anxious",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Outgoing",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Aloft",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "Favorite family member?",
        answers: [
            {
                answer: "Mother",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Father",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Brother/Sister",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Grandma/Grandpa",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "Favorite kind of pizza?",
        answers: [
            {
                answer: "Cheese",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Pepperoni",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Veggie",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Meat-lover",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "Favorite type of car?",
        answers: [
            {
                answer: "Coupe",
                points: [{ "normal": 1 }]
            },
            {
                answer: "SUV",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Sedan",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Soccer mom",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "Favorite sport?",
        answers: [
            {
                answer: "Basketball",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Football",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Boxing",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Soccer",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "What would be your perfect date would be?",
        answers: [
            {
                answer: "Standing in a parking lot talking and looking bored and complicated.",
                points: [{ "normal": 1 }]
            },
            {
                answer: "A movie and ice cream. Classic.",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Going out on a hike.",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Go out to dinner.",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "What’s your favorite school subject?",
        answers: [
            {
                answer: "Math",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Social studies",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Science",
                points: [{ "electric": 1 }]
            },
            {
                answer: "P.E.",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "What do you value most?",
        answers: [
            {
                answer: "Adventure",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Relaxation",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Knowledge",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Power",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "What’s one thing you can’t leave the house without?",
        answers: [
            {
                answer: "Phone",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Wallet/purse",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Glasses",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Headphones",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "What’s your favorite season?",
        answers: [
            {
                answer: "Spring",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Winter",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Summer",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Fall",
                points: [{ "fire": 1 }]
            }
        ]
    },
 {
        question: "Favorite type of music?",
        answers: [
            {
                answer: "Hip hop",
                points: [{ "normal": 1 }]
            },
            {
                answer: "Rock",
                points: [{ "psychic": 1 }]
            },
            {
                answer: "Country",
                points: [{ "electric": 1 }]
            },
            {
                answer: "Pop",
                points: [{ "fire": 1 }]
            }
          ]
       },
]

//run this whenever you need to delegate points
var answerQuestion = function (answerIndex, answersArray) {
    console.log("QUESTION:" + questions[0].question)
    answersArray[answerIndex].points.forEach(element => {
        console.log(element);
    });
}




// A bunch of tests on pulling data from the array
console.log("QUESTION 1:" + questions[17].question);

answerQuestion(1, questions[0].answers)
answerQuestion(1, questions[1].answers)
