/*
document.getElementById("astroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const zodiac = getZodiacSign(day, month);

  document.getElementById("result").innerHTML = 
    `✨ Hello ${name} ${surname}!<br>
     You were born on ${day}/${month}/${year}.<br>
     Your Zodiac Sign is <strong>${zodiac}</strong> 🌟`;
});

function getZodiacSign(day, month) {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries ♈";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus ♉";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini ♊";
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer ♋";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo ♌";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo ♍";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra ♎";
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio ♏";
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius ♐";
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn ♑";
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius ♒";
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces ♓";
}
*/

// generate a basic insight based on DOB

// based on month size is 12
const zodiacsigns= [
  "Capricorn" , "Aquarius","Pisces","Aries","Taurus","Gemini",
  "Cancer","Leo","Virgo","Libra","Scorpio","Sigittarium"
];

// based on date size is 31
const compliments = [
  "You have a wonderful smile.",
  "Your positivity is contagious.",
  "You light up the room.",
  "You are incredibly thoughtful.",
  "You have a great sense of humor.",
  "Your creativity inspires me.",
  "You are a great listener.",
  "You make people feel valued.",
  "You are full of wisdom.",
  "You bring out the best in others.",
  "You are so kind-hearted.",
  "You have a calming presence.",
  "You are very talented.",
  "You radiate confidence.",
  "You are a true friend.",
  "You make challenges look easy.",
  "You are deeply compassionate.",
  "You are a natural leader.",
  "You always know how to cheer people up.",
  "You are incredibly resilient.",
  "You have a beautiful soul.",
  "You are trustworthy and reliable.",
  "You make learning fun.",
  "You are full of great ideas.",
  "You are inspiring to be around.",
  "You are a problem solver.",
  "You are genuine and authentic.",
  "You are adventurous and brave.",
  "You make people feel comfortable.",
  "You are thoughtful in everything you do.",
  "You are simply amazing."
];

// size 20
const victimCardCompliments = [
  "You always help others, even when they don’t appreciate it.",
  "You give so much love, but rarely get it back.",
  "You sacrifice your own happiness for others’ comfort.",
  "You always put others first, even when they forget you.",
  "You forgive easily, even when people don’t deserve it.",
  "You stay kind, even when kindness isn’t returned.",
  "You go the extra mile, but people take it for granted.",
  "You care deeply, even when others don’t notice.",
  "You always support people, but they don’t always support you.",
  "You spread positivity, even when negativity surrounds you.",
  "You give without expecting anything, but people still expect more.",
  "You stay loyal, even when others betray you.",
  "You listen to everyone, but few listen to you.",
  "You always show up, even when others don’t.",
  "You share your wisdom, but people don’t value it enough.",
  "You stay strong, even when no one checks on you.",
  "You make sacrifices, but people rarely acknowledge them.",
  "You always believe in others, even when they doubt you.",
  "You give second chances, even when you shouldn’t have to.",
  "You keep being good, even when the world isn’t fair to you."
];

// size is 30

const Recommendations = [
  "Feed a street dog.",
  "Plant a tree in your neighborhood.",
  "Help an elderly person cross the road.",
  "Donate clothes you no longer use.",
  "Smile at strangers to brighten their day.",
  "Cook a meal for someone in need.",
  "Volunteer at a local shelter.",
  "Spend time teaching kids something useful.",
  "Compliment someone sincerely.",
  "Pick up litter from a public place.",
  "Support a small local business.",
  "Give food to birds or stray animals.",
  "Offer your seat to someone in need.",
  "Share knowledge with a friend.",
  "Help a student with their studies.",
  "Practice gratitude daily.",
  "Call your parents or grandparents often.",
  "Encourage someone who feels low.",
  "Share your umbrella when it rains.",
  "Donate books to a library or school.",
  "Spend time meditating for peace of mind.",
  "Give blood to save lives.",
  "Offer water to delivery workers or laborers.",
  "Teach someone how to use technology.",
  "Be patient with people around you.",
  "Write a thank-you note to someone.",
  "Help a neighbor with groceries.",
  "Share food with coworkers or classmates.",
  "Listen carefully when someone speaks.",
  "Celebrate small wins with others."
];

// size is 20

const Predictions = [
  "You will become a crorepati.",
  "You will travel the world.",
  "You will inspire millions of people.",
  "You will achieve your dream job.",
  "You will own a beautiful house.",
  "You will be surrounded by true friends.",
  "You will find endless happiness.",
  "You will make your family proud.",
  "You will discover your hidden talent.",
  "You will live a healthy and long life.",
  "You will be recognized for your hard work.",
  "You will create something extraordinary.",
  "You will enjoy financial freedom.",
  "You will become a role model for others.",
  "You will experience unforgettable adventures.",
  "You will always have peace of mind.",
  "You will achieve success beyond expectations.",
  "You will be loved deeply and sincerely.",
  "You will leave a lasting legacy.",
  "You will shine brighter than ever."
];




const form= document.getElementById('astroForm');
form.addEventListener('submit',(event)=>{

  event.preventDefault();
   
  const name= document.getElementById('name').value;
  const Surname= document.getElementById('surname').value;
  
  const Day= Number(document.getElementById('day').value);
  const Month=Number( document.getElementById('month').value);
  const Year= Number(document.getElementById('year').value);
 
  const Result= document.getElementById('result');


  const first_message=`✨ Hello ${name} ${Surname}`;
  const second_message=` Your Zodiac sign is  ${zodiacsigns[Month-1]}🌟.`;
  const third_message= compliments[Day-1];

  let index = Math.floor(Math.random()*20);
  const fourth_message= victimCardCompliments[index];


  index = (name.length * Surname.length * Year)%30;
  const fifth_message= Recommendations[index];

  index = (Day*Month*Year)%20;
  const sixth_message=Predictions[index];
  Result.innerText=`${first_message} ${second_message} ${third_message} ${fourth_message} Our Recommendations is ${fifth_message} Future Prediction ${sixth_message}`;

})

