const $ = (id) => document.getElementById(id);

const grades = [
  {id:1,icon:"🌱",title:"1-sinf",desc:"Alifbo, ranglar, mevalar va eng oson inglizcha so‘zlar.",topics:["alphabet","greeting","colours","fruits","vegetables","domestic","seasons","school"]},
  {id:2,icon:"🐣",title:"2-sinf",desc:"Kundalik so‘zlar va sodda gaplarni mustahkamlash.",topics:["greeting","days","body","colours","fruits","vegetables","domestic","wild","seasons","weather","school","transport","sport","verbs","grammar","like","have"]},
  {id:3,icon:"🧩",title:"3-sinf",desc:"So‘zlarni gaplarda ishlatish va savollarga javob berish.",topics:["greeting","days","body","colours","fruits","vegetables","domestic","wild","seasons","weather","school","transport","sport","verbs","grammar","like","have"]},
  {id:4,icon:"🚀",title:"4-sinf",desc:"Lug‘at, gap tuzish va boshlang‘ich grammatika.",topics:["greeting","days","body","colours","fruits","vegetables","domestic","wild","seasons","weather","school","transport","sport","verbs","grammar","like","have"]},
  {id:5,icon:"🪐",title:"5-sinf",desc:"Kengroq lug‘at, zamonlar va matnni tushunish.",topics:["greeting","days","body","colours","fruits","vegetables","domestic","wild","seasons","weather","school","transport","sport","verbs","grammar","like","have"]},
  {id:6,icon:"🧠",title:"6-sinf",desc:"Grammatika, savol tuzish va kundalik suhbat.",topics:["greeting","days","body","colours","fruits","vegetables","domestic","wild","seasons","weather","school","transport","sport","verbs","grammar","like","have"]},
  {id:7,icon:"🌍",title:"7-sinf",desc:"Murakkabroq gaplar, matnlar va til ko‘nikmalari.",topics:["greeting","days","body","colours","fruits","vegetables","domestic","wild","seasons","weather","school","transport","sport","verbs","grammar","like","have"]},
  {id:8,icon:"🏆",title:"8-sinf",desc:"Bilimlarni mustahkamlash va aralash testlar.",topics:["greeting","days","body","colours","fruits","vegetables","domestic","wild","seasons","weather","school","transport","sport","verbs","grammar","like","have"]}
];

const topics = {
 alphabet:{title:"English Alphabet",icon:"🔤",desc:"Ingliz alifbosi va ilk harflar",questions:[
  {q:"A is for…",img:"🍎",a:["Apple","Ball","Cat","Dog"],correct:0},
  {q:"B is for…",img:"⚽",a:["Cat","Ball","Apple","Egg"],correct:1},
  {q:"C is for…",img:"🐱",a:["Dog","Fish","Cat","Apple"],correct:2},
  {q:"Which letter comes first in the English alphabet?",img:"🔤",a:["A","B","C","D"],correct:0},
  {q:"D is for…",img:"🐶",a:["Apple","Dog","Ball","Cat"],correct:1}]},
 greeting:{title:"Greeting",icon:"👋",desc:"Salomlashish va xayrlashish",questions:[
  {q:"How do you say “Salom” in English?",img:"👋",a:["Hello","Goodbye","Sorry","Please"],correct:0},
  {q:"Choose the morning greeting.",img:"🌞",a:["Good night","Good morning","Goodbye","See you"],correct:1},
  {q:"What do you say when you leave?",img:"🚪",a:["Hello","Thank you","Goodbye","Please"],correct:2},
  {q:"“How are you?” means…",img:"🙂",a:["Isming nima?","Qalaysan?","Yoshing nechada?","Xayr"],correct:1},
  {q:"Choose the polite reply to “Thank you”.",img:"💛",a:["You’re welcome","Good night","I’m fine","Hello"],correct:0}]},
 days:{title:"Days of the Week",icon:"📅",desc:"Hafta kunlari",questions:[
  {q:"Which day comes after Monday?",img:"📅",a:["Sunday","Tuesday","Friday","Saturday"],correct:1},
  {q:"What is “Dushanba” in English?",img:"🗓️",a:["Monday","Wednesday","Thursday","Sunday"],correct:0},
  {q:"Which day comes before Friday?",img:"5️⃣",a:["Sunday","Monday","Thursday","Saturday"],correct:2},
  {q:"How many days are in a week?",img:"7️⃣",a:["Five","Six","Seven","Eight"],correct:2},
  {q:"Which one is a weekend day?",img:"🏖️",a:["Tuesday","Thursday","Sunday","Wednesday"],correct:2}]},
 body:{title:"Body Parts",icon:"🧍",desc:"Tana a’zolari",questions:[
  {q:"Which body part helps you see?",img:"👀",a:["Ears","Eyes","Nose","Hands"],correct:1},
  {q:"What do you use to hear?",img:"👂",a:["Ears","Feet","Eyes","Mouth"],correct:0},
  {q:"What is “burun” in English?",img:"👃",a:["Nose","Neck","Knee","Arm"],correct:0},
  {q:"You walk with your…",img:"🦶",a:["Hands","Eyes","Feet","Ears"],correct:2},
  {q:"Which body part helps you smell?",img:"👃",a:["Nose","Hair","Leg","Finger"],correct:0}]},
 colours:{title:"Colours",icon:"🎨",desc:"Ranglar",questions:[
  {q:"What colour is a ripe banana?",img:"🍌",a:["Blue","Yellow","Purple","Black"],correct:1},
  {q:"Grass is usually…",img:"🌱",a:["Green","Pink","Grey","Orange"],correct:0},
  {q:"What colour is the sky on a clear day?",img:"☀️",a:["Brown","Blue","Red","Black"],correct:1},
  {q:"Mixing red and yellow makes…",img:"🖌️",a:["Green","Orange","Blue","White"],correct:1},
  {q:"Snow is usually…",img:"❄️",a:["White","Purple","Brown","Green"],correct:0},
  {q:"What colour is a dolphin?",img:"🐬",a:["Grey","Blue","Pink","Yellow"],correct:1}]},
 fruits:{title:"Fruits",icon:"🍎",desc:"Mevalar",questions:[
  {q:"Which fruit is often red or green?",img:"🍎",a:["Apple","Carrot","Potato","Onion"],correct:0},
  {q:"Which fruit is long and yellow?",img:"🍌",a:["Grape","Banana","Pear","Peach"],correct:1},
  {q:"“Apelsin” in English is…",img:"🍊",a:["Orange","Onion","Olive","Oat"],correct:0},
  {q:"Which fruit grows in a bunch?",img:"🍇",a:["Grapes","Carrot","Cabbage","Corn"],correct:0},
  {q:"Which one is a fruit?",img:"🍓",a:["Strawberry","Potato","Cucumber","Onion"],correct:0}]},
 vegetables:{title:"Vegetables",icon:"🥕",desc:"Sabzavotlar",questions:[
  {q:"Which vegetable is orange?",img:"🥕",a:["Carrot","Cucumber","Onion","Cabbage"],correct:0},
  {q:"What is “kartoshka” in English?",img:"🥔",a:["Tomato","Potato","Pepper","Pea"],correct:1},
  {q:"Which vegetable is often red?",img:"🍅",a:["Tomato","Lettuce","Potato","Garlic"],correct:0},
  {q:"Which vegetable is green and long?",img:"🥒",a:["Cucumber","Carrot","Onion","Beet"],correct:0},
  {q:"Which one is a vegetable?",img:"🥬",a:["Cabbage","Apple","Banana","Grape"],correct:0}]},
 domestic:{title:"Domestic Animals",icon:"🐶",desc:"Uy hayvonlari",questions:[
  {q:"Which animal says “meow”?",img:"🐱",a:["Cow","Cat","Dog","Duck"],correct:1},
  {q:"Which animal gives us milk?",img:"🐄",a:["Lion","Cow","Fox","Wolf"],correct:1},
  {q:"Which animal guards a house?",img:"🐶",a:["Dog","Tiger","Bear","Deer"],correct:0},
  {q:"Which animal gives us wool?",img:"🐑",a:["Sheep","Cat","Duck","Horse"],correct:0},
  {q:"Which animal can carry a rider?",img:"🐴",a:["Horse","Mouse","Fish","Hen"],correct:0}]},
 wild:{title:"Wild Animals",icon:"🦁",desc:"Yovvoyi hayvonlar",questions:[
  {q:"Which animal is called the king of the jungle?",img:"🦁",a:["Lion","Rabbit","Cow","Sheep"],correct:0},
  {q:"Which animal has a very long trunk?",img:"🐘",a:["Tiger","Elephant","Fox","Bear"],correct:1},
  {q:"Which animal has black and white stripes?",img:"🦓",a:["Zebra","Monkey","Wolf","Deer"],correct:0},
  {q:"Which animal is known for climbing trees?",img:"🐒",a:["Monkey","Cow","Sheep","Duck"],correct:0},
  {q:"Which one is a wild animal?",img:"🐅",a:["Tiger","Cat","Dog","Goat"],correct:0}]},
 seasons:{title:"Seasons",icon:"🌸",desc:"Fasllar",questions:[
  {q:"How many seasons are there?",img:"🍂",a:["Two","Three","Four","Five"],correct:2},
  {q:"Which season is usually the hottest?",img:"☀️",a:["Winter","Summer","Autumn","Spring"],correct:1},
  {q:"Flowers often bloom in…",img:"🌷",a:["Spring","Winter","Autumn","Night"],correct:0},
  {q:"Which season is often cold and snowy?",img:"⛄",a:["Summer","Spring","Winter","Autumn"],correct:2},
  {q:"Leaves often fall in…",img:"🍁",a:["Summer","Autumn","Spring","Winter"],correct:1}]},
 weather:{title:"Weather",icon:"🌦️",desc:"Ob-havo",questions:[
  {q:"The sun is shining. It is…",img:"☀️",a:["Sunny","Snowy","Windy","Rainy"],correct:0},
  {q:"Water falls from clouds. It is…",img:"🌧️",a:["Sunny","Rainy","Foggy","Hot"],correct:1},
  {q:"What is “qorli” in English?",img:"❄️",a:["Cloudy","Windy","Snowy","Rainy"],correct:2},
  {q:"The air is moving strongly. It is…",img:"💨",a:["Windy","Sunny","Dry","Warm"],correct:0},
  {q:"The sky is full of clouds. It is…",img:"☁️",a:["Cloudy","Snowy","Sunny","Hot"],correct:0}]},
 school:{title:"School Things",icon:"🎒",desc:"Maktab jihozlari",questions:[
  {q:"What do you write with?",img:"✏️",a:["Pencil","Chair","Bag","Door"],correct:0},
  {q:"Where do you keep your books?",img:"🎒",a:["Bag","Window","Board","Clock"],correct:0},
  {q:"What do you read?",img:"📚",a:["Book","Ruler","Desk","Pen"],correct:0},
  {q:"Which item helps you draw a straight line?",img:"📏",a:["Ruler","Eraser","Bag","Crayon"],correct:0},
  {q:"What removes pencil marks?",img:"🧽",a:["Eraser","Pencil","Book","Chair"],correct:0}]},
 transport:{title:"Transport",icon:"🚌",desc:"Transport vositalari",questions:[
  {q:"Which transport flies in the sky?",img:"✈️",a:["Bus","Plane","Car","Train"],correct:1},
  {q:"Which transport runs on rails?",img:"🚆",a:["Bicycle","Train","Boat","Car"],correct:1},
  {q:"Which one has two wheels and pedals?",img:"🚲",a:["Bicycle","Plane","Bus","Ship"],correct:0},
  {q:"Which transport carries many people around a city?",img:"🚌",a:["Bus","Scooter","Skateboard","Balloon"],correct:0},
  {q:"Which transport travels on water?",img:"🚢",a:["Ship","Car","Train","Motorbike"],correct:0}]},
 sport:{title:"Sport",icon:"⚽",desc:"Sport turlari",questions:[
  {q:"Which sport uses a football?",img:"⚽",a:["Football","Swimming","Tennis","Boxing"],correct:0},
  {q:"Which sport is played in a pool?",img:"🏊",a:["Swimming","Football","Chess","Running"],correct:0},
  {q:"Which sport uses a racket?",img:"🎾",a:["Tennis","Cycling","Running","Skiing"],correct:0},
  {q:"Which activity means moving fast on foot?",img:"🏃",a:["Running","Reading","Drawing","Sleeping"],correct:0},
  {q:"Which sport uses a basketball?",img:"🏀",a:["Basketball","Tennis","Golf","Swimming"],correct:0}]},
 verbs:{title:"Verbs",icon:"🏃",desc:"Harakat bildiruvchi fe’llar",questions:[
  {q:"What does “run” mean?",img:"🏃",a:["Yugurmoq","O‘qimoq","Yozmoq","Uxlamoq"],correct:0},
  {q:"What does “read” mean?",img:"📖",a:["Sakramoq","O‘qimoq","Ichmoq","O‘ynamoq"],correct:1},
  {q:"Choose the action word.",img:"⚽",a:["Play","Blue","Apple","Happy"],correct:0},
  {q:"“Write” means…",img:"✍️",a:["Yozmoq","Yugurmoq","Yemoq","Ko‘rmoq"],correct:0},
  {q:"What do you do with a book?",img:"📚",a:["Read","Swim","Fly","Cook"],correct:0}]},
 grammar:{title:"Grammar",icon:"🧠",desc:"Oddiy grammatika va gap tuzish",questions:[
  {q:"Choose the correct sentence.",img:"🧩",a:["I am happy.","I happy am.","Am I happy a.","I are happy."],correct:0},
  {q:"Choose the correct word: She ___ a pupil.",img:"👧",a:["am","is","are","be"],correct:1},
  {q:"Choose the plural of “book”.",img:"📚",a:["bookes","books","bookies","book"],correct:1},
  {q:"Choose the correct article: ___ apple.",img:"🍎",a:["A","An","The a","Are"],correct:1},
  {q:"Choose the correct question.",img:"❓",a:["What is your name?","What your name is?","Your name what?","Is name your what?"],correct:0}]},
 like:{title:"I Like / I Don't Like",icon:"😊",desc:"Yoqtiraman va yoqtirmayman",questions:[
  {q:"😊 I ___ apples.",img:"😊🍎",a:["like","likes not","don't likes","am like"],correct:0},
  {q:"🙁 I ___ onions.",img:"🙁🧅",a:["doesn't like","don't like","not likes","am not like"],correct:1},
  {q:"Which emoji means “I like it”?",img:"😊",a:["😊","🙁","😠","😴"],correct:0},
  {q:"Complete: I don't ___ milk.",img:"🥛",a:["likes","like","liking","liked"],correct:1},
  {q:"Choose the correct sentence.",img:"🍕",a:["I like pizza.","I likes pizza.","I don't likes pizza.","I liking pizza."],correct:0}]},
 have:{title:"I Have / I Don't Have",icon:"🎒",desc:"Bor va yo‘q gaplari",questions:[
  {q:"Complete: I ___ a book.",img:"📘",a:["have","has","having","am have"],correct:0},
  {q:"Complete: I don't ___ a pen.",img:"🖊️",a:["has","have","having","had"],correct:1},
  {q:"Which sentence means “Menda mushuk bor”?",img:"🐱",a:["I have a cat.","I am a cat.","I don't cat.","I has a cat."],correct:0},
  {q:"Choose the correct sentence.",img:"🎒",a:["I don't have a bag.","I doesn't have a bag.","I don't has a bag.","I no have bag."],correct:0},
  {q:"Complete: They ___ two pencils.",img:"✏️",a:["has","have","is","am"],correct:1}]}
};

const gradeColors = [
 ["#3b82f6","#243c7c"],["#10b981","#145b62"],["#f59e0b","#8a4b25"],["#ec4899","#702e70"],
 ["#8b5cf6","#40328a"],["#06b6d4","#155e75"],["#f97316","#7c2d12"],["#6366f1","#312e81"]
];
const gradeDescriptions = {
 1:"Salomlashish, ranglar, mevalar va ilk so‘zlar.",
 2:"Oddiy so‘zlarni eslab qolish va sodda gaplar.",
 3:"So‘zlarni gaplarda ishlatish va savollarga javob berish.",
 4:"Lug‘at, gap tuzish va boshlang‘ich grammatika.",
 5:"Kengroq lug‘at, zamonlar va matnni tushunish.",
 6:"Grammatika, savol tuzish va kundalik suhbat.",
 7:"Murakkabroq gaplar, matnlar va til ko‘nikmalari.",
 8:"Bilimlarni mustahkamlash va aralash testlar."
};
let currentGrade=1, currentMode="easy", currentTopic="greeting", questions=[], questionIndex=0, correctCount=0, answered=false, lastResult=null, soundOn=true, studentName="O‘quvchi", studentGrade=1;
const storageKey="englishZeroProgressV1";

function getProgress(){try{return JSON.parse(localStorage.getItem(storageKey))||{points:0,history:[]}}catch(e){return {points:0,history:[]}}}
function saveProgress(data){try{localStorage.setItem(storageKey,JSON.stringify(data))}catch(e){}}
function shuffle(arr){const copy=[...arr];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy}
function escapeHtml(str){return String(str).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]))}
function showView(viewId){
 document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
 $(viewId).classList.add("active");
 window.scrollTo({top:0,behavior:"smooth"});
 $(viewId).querySelectorAll(".reveal").forEach(el=>el.classList.add("is-visible"));
}
function toast(message){const el=$("toast");el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2300)}
function speak(text){if(!soundOn||!("speechSynthesis" in window))return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="en-US";u.rate=.83;speechSynthesis.speak(u)}catch(e){}}
function renderGrades(){
 $("gradeGrid").innerHTML=grades.map((g,i)=>`<button class="grade-card" data-grade="${g.id}" style="--card-a:${gradeColors[i][0]};--card-b:${gradeColors[i][1]}"><span class="arrow">↗</span><span class="grade-emoji">${g.icon}</span><strong>${g.title}</strong><small>${g.id===1?"Start learning":g.id===8?"Challenge yourself":"Lessons & quizzes"}</small></button>`).join("");
 $("gradeGrid").querySelectorAll("[data-grade]").forEach(btn=>btn.addEventListener("click",()=>openGrade(Number(btn.dataset.grade))));
}
function renderFeatured(){
 const keys=["greeting","colours","fruits","domestic","weather","like"];
 $("featuredTopics").innerHTML=keys.map(key=>topicCard(key)).join("");
 $("featuredTopics").querySelectorAll("[data-topic]").forEach(btn=>btn.addEventListener("click",()=>{currentGrade=1;openTopic(btn.dataset.topic)}));
}
const topicPhotos = {
 fruits:"https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=180&q=80",
 domestic:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=180&q=80",
 wild:"https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=180&q=80",
 school:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=180&q=80",
 transport:"https://images.unsplash.com/photo-1509749837427-ac7e7a6b4f5e?auto=format&fit=crop&w=180&q=80",
 colours:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=180&q=80",
 vegetables:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=180&q=80",
 seasons:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=180&q=80"
};
const questionPhotos = {
 greeting:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
 days:"https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=85",
 body:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
 colours:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
 fruits:"https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=85",
 vegetables:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
 domestic:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85",
 wild:"https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=85",
 seasons:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85",
 weather:"https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=900&q=85",
 school:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
 transport:"https://images.unsplash.com/photo-1509749837427-ac7e7a6b4f5e?auto=format&fit=crop&w=900&q=85",
 sport:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
 verbs:"https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=85",
 grammar:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=85",
 like:"https://images.unsplash.com/photo-1512621776951-a57141f2eefe?auto=format&fit=crop&w=900&q=85",
 have:"https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=900&q=85"
};

function topicCard(key){
 const t=topics[key];
 const visual=topicPhotos[key]
   ? `<img class="topic-photo" src="${topicPhotos[key]}" alt="${escapeHtml(t.title)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span class="topic-icon topic-fallback" style="display:none">${t.icon}</span>`
   : `<span class="topic-icon">${t.icon}</span>`;
 return `<button class="topic-card" data-topic="${key}">${visual}<span class="topic-copy"><strong>${t.title}</strong><small>${t.desc}</small></span></button>`;
}
function openGrade(id){
 currentGrade=id;const grade=grades.find(g=>g.id===id);
 $("gradeEyebrow").textContent=`GRADE ${id}`;$("gradeTitle").textContent=`${id}-sinf darslari`;$("gradeDescription").textContent=gradeDescriptions[id];$("gradeBigIcon").textContent=grade.icon;
 document.querySelectorAll(".mode-btn").forEach(b=>b.classList.toggle("selected",b.dataset.mode===currentMode));
 $("topicCount").textContent=`${grade.topics.length} ta mavzu`;
 $("topicGrid").innerHTML=grade.topics.map(topicCard).join("");
 $("topicGrid").querySelectorAll("[data-topic]").forEach(btn=>btn.addEventListener("click",()=>openTopic(btn.dataset.topic)));
 showView("lessonView");
}
// Har bir savolning rasmi savolning o‘zidan olinadi; mavzu uchun umumiy foto ishlatilmaydi.
const questionImageOverrides = {
 "Which body part helps you smell?":"👃",
 "What colour is the sky on a clear day?":"🌤️",
 "How many seasons are there?":"🌸☀️🍂❄️",
 "Mixing red and yellow makes…":"🟥🟨🎨",
 "Which day comes after Monday?":"📅",
 "What is “Dushanba” in English?":"📅",
 "Which day comes before Friday?":"📅",
 "How many days are in a week?":"7️⃣",
 "Which one is a weekend day?":"🏖️"
};
function getQuestionVisual(q){
 const visual=questionImageOverrides[q.q] || q.img || topics[currentTopic]?.icon || "📘";
 return visual;
}

function adaptQuestion(q, index){
 const copy={...q,a:[...q.a]};
 copy.visual=getQuestionVisual(q);
 if(currentGrade>=5) copy.hint="Read carefully and choose the best answer.";
 else copy.hint="Rasmga qarang va to‘g‘ri javobni tanlang.";
 // Easy: 4 ta variant. Medium: 3 ta variant. Hard: barcha variantlar va aralash tartib.
 if(currentMode==="medium"){
   const correctAnswer=copy.a[copy.correct];
   const wrong=shuffle(copy.a.filter((answer,i)=>i!==copy.correct)).slice(0,2);
   copy.a=shuffle([correctAnswer,...wrong]);
   copy.correct=copy.a.indexOf(correctAnswer);
   copy.hint="O‘ylab ko‘ring: 3 ta javobdan birini tanlang.";
 }else if(currentMode==="hard"){
   const correctAnswer=copy.a[copy.correct];
   copy.a=shuffle(copy.a);
   copy.correct=copy.a.indexOf(correctAnswer);
   copy.hint="Challenge rejimi: diqqat bilan javob bering!";
 }
 return copy;
}
function openTopic(key){
 currentTopic=key;const base=topics[key];questions=base.questions.map((q,i)=>adaptQuestion(q,i));
 if(currentMode==="hard")questions=shuffle(questions);
 questionIndex=0;correctCount=0;answered=false;
 $("quizTopic").textContent=base.title.toUpperCase();showView("quizView");renderQuestion();
}
function renderQuestion(){
 const q=questions[questionIndex];answered=false;
 $("quizCount").textContent=`${questionIndex+1} / ${questions.length}`;
 $("quizProgress").style.width=`${(questionIndex/questions.length)*100}%`;
 const imageBox=$("quizImage");
 const visual=q.visual || getQuestionVisual(q);
 imageBox.classList.add("question-illustration");
 imageBox.setAttribute("role","img");
 imageBox.setAttribute("aria-label",`Savolga mos rasm: ${q.q}`);
 imageBox.innerHTML=`<span class="question-art-emoji">${escapeHtml(visual)}</span><span class="question-art-label">LOOK &amp; LEARN</span>`;
 $("quizQuestion").textContent=q.q;
 $("quizHint").textContent=q.hint||"Rasmga qarang va to‘g‘ri javobni tanlang.";
 $("feedback").textContent="";$("feedback").className="feedback";
 $("nextQuestion").disabled=true;$("nextQuestion").textContent=questionIndex===questions.length-1?"Natijani ko‘rish 🏆":"Keyingi savol →";
 $("answerGrid").innerHTML=q.a.map((answer,i)=>`<button class="answer-btn" data-answer="${i}">${escapeHtml(answer)}</button>`).join("");
 $("answerGrid").querySelectorAll("[data-answer]").forEach(btn=>btn.addEventListener("click",()=>chooseAnswer(Number(btn.dataset.answer))));
}
function chooseAnswer(index){
 if(answered)return;answered=true;const q=questions[questionIndex];const correctText=q.a[q.correct];const buttons=[...$("answerGrid").querySelectorAll(".answer-btn")];
 buttons.forEach((btn,i)=>{btn.disabled=true;if(i===q.correct)btn.classList.add("correct");if(i===index&&i!==q.correct)btn.classList.add("wrong")});
 const good=index===q.correct;if(good){correctCount++;$("feedback").textContent="Ajoyib! To‘g‘ri javob! ⭐";$("feedback").classList.add("good");speak(correctText)}else{$("feedback").textContent=`Yana urinib ko‘ring! To‘g‘ri javob: ${correctText}`;$("feedback").classList.add("bad")}
 $("quizProgress").style.width=`${((questionIndex+1)/questions.length)*100}%`;$("nextQuestion").disabled=false;
}
function nextQuestion(){if(!answered)return;if(questionIndex<questions.length-1){questionIndex++;renderQuestion()}else finishQuiz()}
function finishQuiz(){
 const percent=Math.round(correctCount/questions.length*100);const points=correctCount*10+(percent===100?20:0);const stars=percent>=80?"⭐⭐⭐":percent>=50?"⭐⭐":"⭐";
 lastResult={grade:currentGrade,topic:currentTopic,mode:currentMode,correct:correctCount,total:questions.length,percent,points,stars,date:new Date().toISOString(),studentName,studentGrade};
 const progress=getProgress();progress.points+=points;progress.history.unshift(lastResult);progress.history=progress.history.slice(0,50);saveProgress(progress);
 $("resultEmoji").textContent=percent>=80?"🏆":percent>=50?"🌟":"💪";$("resultTitle").textContent=percent>=80?"Zo‘r natija!":percent>=50?"Yaxshi harakat!":"Mashqni davom ettir!";$("resultText").textContent=`${grades[currentGrade-1].title} · ${topics[currentTopic].title} · ${currentMode.toUpperCase()} rejimi`;
 $("resultScore").textContent=`${correctCount}/${questions.length}`;$("resultPercent").textContent=`${percent}%`;$("resultStars").textContent=stars;
 $("certificateName").textContent=studentName;
 $("certificateGrade").textContent=`${studentGrade}-sinf · ${topics[currentTopic].title}`;
 $("certificatePercent").textContent=`${percent}%`;
 $("certificateTopic").textContent=`${correctCount}/${questions.length} to‘g‘ri javob`;
 $("certificateDate").textContent=new Date().toLocaleDateString("uz-UZ",{year:"numeric",month:"long",day:"numeric"});
 showView("resultView");
}
function openProgress(){
 const p=getProgress();$("totalPoints").textContent=p.points;$("completedLessons").textContent=p.history.length;$("bestPercent").textContent=`${p.history.length?Math.max(...p.history.map(h=>h.percent)):0}%`;
 if(!p.history.length){$("historyList").innerHTML='<div class="empty-state">Hozircha natija yo‘q. Birinchi testingizni boshlang! 🚀</div>'}
 else $("historyList").innerHTML=p.history.slice(0,12).map(h=>`<div class="history-item"><div><b>${escapeHtml(grades[h.grade-1].title)} · ${escapeHtml(topics[h.topic].title)}</b><small>${new Date(h.date).toLocaleDateString("uz-UZ")} · ${escapeHtml(h.mode.toUpperCase())}</small></div><span class="history-score">${h.correct}/${h.total} · ${h.percent}%</span></div>`).join("");
 showView("progressView");
}
function init(){
 renderGrades();renderFeatured();
 // Premium motion: reveal sections as they enter the viewport.
 const revealObserver = ("IntersectionObserver" in window) ? new IntersectionObserver((entries)=>{
   entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target)}});
 },{threshold:.08,rootMargin:"0px 0px -24px 0px"}) : null;
 document.querySelectorAll(".hero,.section-heading,.grade-grid,.topic-grid,.lesson-head,.mode-panel,.quiz-shell,.result-card,.progress-summary,.history-card").forEach(el=>{
   el.classList.add("reveal");
   if(revealObserver) revealObserver.observe(el); else el.classList.add("is-visible");
 });
 window.addEventListener("load",()=>setTimeout(()=> $("pageLoader")?.classList.add("loader-hidden"),220));
 setTimeout(()=> $("pageLoader")?.classList.add("loader-hidden"),1800);
 const welcomeForm=$("welcomeForm");
 welcomeForm.addEventListener("submit",(event)=>{
   event.preventDefault();
   studentName=$("studentName").value.trim().slice(0,30)||"O‘quvchi";
   studentGrade=Number($("studentGrade").value)||1;
   currentGrade=studentGrade;
   $("personalGreeting").textContent=`Salom, ${studentName}! Ingliz tilini o‘yin orqali o‘rgan!`;
   $("personalSubheading").textContent=`${studentGrade}-sinf uchun rasmli testlar va yangi yutuqlar seni kutmoqda.`;
   $("welcomeScreen").classList.add("welcome-hidden");document.body.classList.remove("app-locked");
   openGrade(studentGrade);
 });
 $("startLearning").addEventListener("click",()=>openGrade(studentGrade));
 $("showProgress").addEventListener("click",openProgress);
 $("backHome").addEventListener("click",()=>showView("homeView"));
 $("backLessons").addEventListener("click",()=>openGrade(currentGrade));
 $("progressBack").addEventListener("click",()=>showView("homeView"));
 $("nextQuestion").addEventListener("click",nextQuestion);
 $("retryQuiz").addEventListener("click",()=>openTopic(currentTopic));
 $("printCertificate").addEventListener("click",()=>window.print());
 $("resultLessons").addEventListener("click",()=>openGrade(currentGrade));
 $("modeButtons").querySelectorAll("[data-mode]").forEach(btn=>btn.addEventListener("click",()=>{currentMode=btn.dataset.mode;$("modeButtons").querySelectorAll(".mode-btn").forEach(b=>{const active=b===btn;b.classList.toggle("selected",active);b.setAttribute("aria-pressed",String(active))});toast(`${btn.textContent.trim()} rejimi tanlandi`)}));
 $("modeButtons").querySelectorAll("[data-mode]").forEach(btn=>btn.setAttribute("aria-pressed",String(btn.dataset.mode===currentMode)));
 $("soundToggle").addEventListener("click",()=>{soundOn=!soundOn;$("soundToggle").textContent=soundOn?"🔊":"🔇";if(!soundOn&&"speechSynthesis"in window)speechSynthesis.cancel();toast(soundOn?"Talaffuz yoqildi":"Talaffuz o‘chirildi")});
 $("clearProgress").addEventListener("click",()=>{if(confirm("Barcha saqlangan natijalarni o‘chirmoqchimisiz?")){saveProgress({points:0,history:[]});openProgress();toast("Natijalar tozalandi")}});
}
document.addEventListener("DOMContentLoaded",init);
