'use strict';

/* ENGLISH ZERO — 1-SINF UCHUN */

const $ = (selector) => document.querySelector(selector);

const TOPICS = [
  {id:'alphabet',title:'Alphabet',uz:'Alifbo',description:'Ingliz harflarini o‘rganamiz',emoji:'🔤',color:'#fff0ad',words:[
    ['A','🍎'],['B','⚽'],['C','🐱'],['D','🐶'],['E','🥚'],['F','🐟'],['G','🍇'],['H','🏠'],['I','🍦'],['J','🧃'],['K','🔑'],['L','🦁'],['M','🌙'],['N','👃'],['O','🍊'],['P','🐼'],['Q','👑'],['R','🌈'],['S','☀️'],['T','🐯'],['U','☂️'],['V','🎻'],['W','⌚'],['X','❌'],['Y','🪀'],['Z','🦓']
  ]},
  {id:'greetings',title:'Greetings',uz:'Salomlashish',description:'Salomlashishni o‘rganamiz',emoji:'👋',color:'#ffe1ec',words:[
    ['Hello','👋'],['Good morning','🌅'],['Good afternoon','☀️'],['Good evening','🌇'],['Good night','🌙'],['Goodbye','👋'],['Thank you','💜'],['Please','🙏'],['Sorry','🙇'],['Welcome','🏡']
  ]},
  {id:'colours',title:'Colours',uz:'Ranglar',description:'Ranglarning inglizcha nomlari',emoji:'🎨',color:'#f0e6ff',words:[
    ['Red','🔴'],['Blue','🔵'],['Green','🟢'],['Yellow','🟡'],['Orange','🟠'],['Purple','🟣'],['Pink','💗'],['Black','⚫'],['White','⚪'],['Brown','🟤']
  ]},
  {id:'fruits',title:'Fruits',uz:'Mevalar',description:'Mevalarni inglizcha aytamiz',emoji:'🍎',color:'#ffe6d9',words:[
    ['Apple','🍎'],['Banana','🍌'],['Orange','🍊'],['Grapes','🍇'],['Watermelon','🍉'],['Strawberry','🍓'],['Lemon','🍋'],['Pear','🍐'],['Peach','🍑'],['Pineapple','🍍']
  ]},
  {id:'domestic',title:'Domestic Animals',uz:'Uy hayvonlari',description:'Uy hayvonlari bilan tanishamiz',emoji:'🐄',color:'#e3f8e8',words:[
    ['Cat','🐱'],['Dog','🐶'],['Cow','🐄'],['Sheep','🐑'],['Horse','🐴'],['Duck','🦆'],['Hen','🐔'],['Pig','🐷'],['Goat','🐐'],['Rabbit','🐰']
  ]},
  {id:'wild',title:'Wild Animals',uz:'Yovvoyi hayvonlar',description:'Yovvoyi hayvonlarni o‘rganamiz',emoji:'🦁',color:'#fff0d5',words:[
    ['Lion','🦁'],['Tiger','🐅'],['Elephant','🐘'],['Giraffe','🦒'],['Zebra','🦓'],['Monkey','🐒'],['Bear','🐻'],['Fox','🦊'],['Crocodile','🐊'],['Deer','🦌']
  ]},
  {id:'seasons',title:'Seasons',uz:'Fasllar',description:'Yilning to‘rt fasli',emoji:'🌈',color:'#e4f4ff',words:[
    ['Spring','🌷'],['Summer','☀️'],['Autumn','🍂'],['Winter','❄️']
  ]},
  {id:'numbers',title:'Numbers',uz:'Sonlar',description:'Birdan o‘ngacha sanaymiz',emoji:'🔢',color:'#eae6ff',words:[
    ['One','1️⃣'],['Two','2️⃣'],['Three','3️⃣'],['Four','4️⃣'],['Five','5️⃣'],['Six','6️⃣'],['Seven','7️⃣'],['Eight','8️⃣'],['Nine','9️⃣'],['Ten','🔟']
  ]},
  {id:'school',title:'School Things',uz:'Maktab buyumlari',description:'Maktabdagi buyumlar',emoji:'🎒',color:'#e1f5ff',words:[
    ['Pencil','✏️'],['Book','📚'],['School bag','🎒'],['Ruler','📏'],['Eraser','🧽'],['Pen','🖊️'],['Notebook','📓'],['Desk','🪑'],['Scissors','✂️'],['Computer','💻']
  ]},
  {id:'transport',title:'Transports',uz:'Transportlar',description:'Transport vositalarini o‘rganamiz',emoji:'🚗',color:'#e1f5ff',words:[
    ['Car','🚗'],['Bus','🚌'],['Train','🚆'],['Bike','🚲'],['Motorbike','🏍️'],['Helicopter','🚁'],['Plane','✈️'],['Ship','🚢'],['Boat','⛵'],['Ambulance','🚑']
  ]}
];

const TRANSLATIONS = {
  A:'A harfi',B:'B harfi',C:'C harfi',D:'D harfi',E:'E harfi',F:'F harfi',G:'G harfi',H:'H harfi',I:'I harfi',J:'J harfi',K:'K harfi',L:'L harfi',M:'M harfi',N:'N harfi',O:'O harfi',P:'P harfi',Q:'Q harfi',R:'R harfi',S:'S harfi',T:'T harfi',U:'U harfi',V:'V harfi',W:'W harfi',X:'X harfi',Y:'Y harfi',Z:'Z harfi',
  Hello:'Salom','Good morning':'Xayrli tong','Good afternoon':'Xayrli kun','Good evening':'Xayrli kech','Good night':'Xayrli tun',Goodbye:'Xayr','Thank you':'Rahmat',Please:'Iltimos',Sorry:'Kechirasiz',Welcome:'Xush kelibsiz',
  Red:'Qizil',Blue:'Ko‘k',Green:'Yashil',Yellow:'Sariq',Orange:'To‘q sariq',Purple:'Binafsha',Pink:'Pushti',Black:'Qora',White:'Oq',Brown:'Jigarrang',
  Apple:'Olma',Banana:'Banan',Grapes:'Uzum',Watermelon:'Tarvuz',Strawberry:'Qulupnay',Lemon:'Limon',Pear:'Nok',Peach:'Shaftoli',Pineapple:'Ananas',
  Cat:'Mushuk',Dog:'It',Cow:'Sigir',Sheep:'Qo‘y',Horse:'Ot',Duck:'O‘rdak',Hen:'Tovuq',Pig:'Cho‘chqa',Goat:'Echki',Rabbit:'Quyon',
  Lion:'Sher',Tiger:'Yo‘lbars',Elephant:'Fil',Giraffe:'Jirafa',Zebra:'Zebra',Monkey:'Maymun',Bear:'Ayiq',Fox:'Tulki',Crocodile:'Timsoh',Deer:'Kiyik',
  Spring:'Bahor',Summer:'Yoz',Autumn:'Kuz',Winter:'Qish',
  One:'Bir',Two:'Ikki',Three:'Uch',Four:'To‘rt',Five:'Besh',Six:'Olti',Seven:'Yetti',Eight:'Sakkiz',Nine:'To‘qqiz',Ten:'O‘n',
  Pencil:'Qalam',Book:'Kitob','School bag':'Maktab sumkasi',Ruler:'Chizg‘ich',Eraser:'O‘chirg‘ich',Pen:'Ruchka',Notebook:'Daftar',Desk:'Parta',Scissors:'Qaychi',Computer:'Kompyuter',
  Car:'Mashina',Bus:'Avtobus',Train:'Poyezd',Bike:'Velosiped',Motorbike:'Mototsikl',Helicopter:'Vertolyot',Plane:'Samolyot',Ship:'Kema',Boat:'Qayiq',Ambulance:'Tez yordam mashinasi'
};
const PRONUNCIATION = {Car:'car',Bus:'bus',Train:'train',Bike:'bike',Motorbike:'motorbike',Helicopter:'helicopter',Plane:'plane',Ship:'ship',Boat:'boat',Ambulance:'ambulance'};
const STORAGE_KEY = 'englishZeroGrade1_v3';
const QUESTION_COUNTS = [10,20,25];

let student = {name:'',stars:0,completed:0,bestScore:0,history:[]};
let selectedTopic = 'alphabet';
let selectedLevel = 'easy';
let selectedQuestionCount = 10;
let currentQuestions = [];
let questionIndex = 0;
let score = 0;
let answersReview = [];
let soundEnabled = true;
let answered = false;
let lastResult = null;

function saveStudent() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(student)); }
  catch (error) { console.warn('Saqlashda xatolik:', error); }
}
function loadStudent() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved && typeof saved === 'object') student = {...student,...saved,history:Array.isArray(saved.history)?saved.history:[]};
  } catch (error) { console.warn('Ma’lumot yuklanmadi:', error); }
}
function shuffle(items) {
  const result = [...items];
  for (let i=result.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [result[i],result[j]]=[result[j],result[i]]; }
  return result;
}
function getTopic(id) { return TOPICS.find(topic=>topic.id===id); }
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function showToast(message) {
  const toast=$('#toast'); if(!toast) return;
  toast.textContent=message; toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer=setTimeout(()=>toast.classList.remove('show'),2300);
}
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen=>screen.classList.toggle('active',screen.id===id));
  window.scrollTo({top:0,behavior:'smooth'});
}
function speak(word) {
  if(!soundEnabled || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(PRONUNCIATION[word]||word);
  utterance.lang='en-US'; utterance.rate=0.82; utterance.pitch=1.05;
  window.speechSynthesis.speak(utterance);
}
function updateSoundButtons() {
  const symbol=soundEnabled?'🔊':'🔇';
  if($('#soundToggle')) $('#soundToggle').textContent=symbol;
  if($('#quizSound')) $('#quizSound').textContent=symbol;
}
function toggleSound() {
  soundEnabled=!soundEnabled;
  if(!soundEnabled && 'speechSynthesis' in window) window.speechSynthesis.cancel();
  updateSoundButtons();
}
function updateName() {
  if($('#displayName')) $('#displayName').textContent=student.name||'Do‘stim';
  if($('#topStars')) $('#topStars').textContent=student.stars;
}
function renderTopics() {
  const grid=$('#topicGrid'); if(!grid) return;
  grid.innerHTML='';
  TOPICS.forEach(topic=>{
    const done=student.history.filter(item=>item.topicId===topic.id).length;
    const button=document.createElement('button');
    button.type='button'; button.className='topic-card'; button.style.setProperty('--tile',topic.color);
    button.innerHTML=`<span class="topic-emoji">${topic.emoji}</span><strong>${escapeHTML(topic.title)}</strong><small>${escapeHTML(topic.uz)}</small><small class="topic-progress">${done?`⭐ ${done} marta ishlangan`:'Boshlash →'}</small>`;
    button.addEventListener('click',()=>openLesson(topic.id));
    grid.appendChild(button);
  });
}
function renderHistory() {
  const list=$('#historyList'); if(!list) return;
  if(!student.history.length) { list.innerHTML='<p class="empty-history">Hali test ishlanmadi. Birinchi darsni boshlang!</p>'; return; }
  list.innerHTML=student.history.slice(0,4).map(item=>{
    const topic=getTopic(item.topicId);
    return `<div class="history-item"><span class="history-emoji">${topic?topic.emoji:'📘'}</span><span class="history-info"><strong>${escapeHTML(topic?topic.title:'Dars')}</strong><small>${escapeHTML(item.date||'')}</small></span><b class="history-score">${item.score}%</b></div>`;
  }).join('');
}
function updateHome() {
  $('#totalStars').textContent=student.stars;
  $('#completedLessons').textContent=student.completed;
  $('#bestScore').textContent=student.bestScore+'%';
  updateName(); renderHistory(); renderTopics();
}
function showHome() { updateHome(); showScreen('homeScreen'); }
function openLesson(id) {
  const topic=getTopic(id); if(!topic) return;
  selectedTopic=id; selectedLevel='easy'; selectedQuestionCount=10;
  $('#lessonEmoji').textContent=topic.emoji;
  $('#lessonTitle').textContent=topic.title;
  $('#lessonDescription').textContent=topic.description;
  document.querySelectorAll('[data-level]').forEach(button=>button.classList.toggle('selected',button.dataset.level==='easy'));
  $('#questionCount').value='10';
  showScreen('lessonScreen');
}
function chooseLevel(level) {
  if(!['easy','medium','hard'].includes(level)) return;
  selectedLevel=level;
  document.querySelectorAll('[data-level]').forEach(button=>button.classList.toggle('selected',button.dataset.level===level));
}
function buildQuestions() {
  const topic=getTopic(selectedTopic); if(!topic || topic.words.length<4) return [];
  const shuffled=shuffle(topic.words);
  const questions=[];
  for(let i=0;i<selectedQuestionCount;i++) {
    const [word,emoji]=shuffled[i%shuffled.length];
    const distractors=shuffle(topic.words.filter(pair=>pair[0]!==word)).slice(0,3).map(pair=>pair[0]);
    const options=shuffle([word,...distractors]);
    questions.push({word,emoji,options,translation:TRANSLATIONS[word]||word});
  }
  return questions;
}
function startQuiz() {
  selectedQuestionCount=Number($('#questionCount').value);
  if(!QUESTION_COUNTS.includes(selectedQuestionCount)) selectedQuestionCount=10;
  currentQuestions=buildQuestions();
  if(!currentQuestions.length) { showToast('Bu mavzuda savollar tayyor emas.'); return; }
  questionIndex=0; score=0; answersReview=[]; answered=false;
  showScreen('quizScreen'); renderQuestion();
}
function renderQuestion() {
  const q=currentQuestions[questionIndex]; if(!q) return finishQuiz();
  answered=false;
  $('#questionPicture').textContent=q.emoji;
  $('#questionText').textContent=selectedTopic==='alphabet'?'Which letter is this?':'What is this?';
  $('#questionHint').textContent='To‘g‘ri javobni tanlang';
  $('#answerFeedback').textContent='';
  $('#answerFeedback').className='feedback';
  $('#progress').textContent=`Savol ${questionIndex+1} / ${currentQuestions.length}`;
  $('#scoreLive').textContent=`⭐ ${score}`;
  $('#progressFill').style.width=`${((questionIndex+1)/currentQuestions.length)*100}%`;
  $('#nextQuestion').classList.add('hidden');
  $('#nextQuestion').textContent=questionIndex===currentQuestions.length-1?'Natijani ko‘rish →':'Keyingi →';
  $('#answerGrid').innerHTML='';
  q.options.forEach((option,index)=>{
    const button=document.createElement('button');
    button.type='button'; button.className='answer-button';
    button.innerHTML=`<span class="answer-letter">${String.fromCharCode(65+index)}</span><span>${escapeHTML(option)}</span>`;
    button.addEventListener('click',()=>checkAnswer(option,button));
    $('#answerGrid').appendChild(button);
  });
}
function checkAnswer(choice,clicked) {
  if(answered) return;
  answered=true;
  const q=currentQuestions[questionIndex];
  const correct=choice===q.word;
  document.querySelectorAll('.answer-button').forEach(button=>{
    button.disabled=true;
    const text=button.querySelector('span:last-child').textContent;
    if(text===q.word) button.classList.add('correct');
  });
  if(correct) {
    score++; clicked.classList.add('correct');
    $('#answerFeedback').textContent='🎉 Barakalla! To‘g‘ri javob!';
    $('#answerFeedback').className='feedback correct-feedback';
    speak(q.word);
  } else {
    clicked.classList.add('incorrect');
    $('#answerFeedback').textContent=`😊 To‘g‘ri javob: ${q.word}`;
    $('#answerFeedback').className='feedback wrong-feedback';
  }
  answersReview.push({word:q.word,emoji:q.emoji,selected:choice,correct:q.word,translation:q.translation,isCorrect:correct});
  $('#scoreLive').textContent=`⭐ ${score}`;
  $('#nextQuestion').classList.remove('hidden');
}
function nextQuestion() {
  if(!answered) { showToast('Avval javobni tanlang!'); return; }
  questionIndex++;
  if(questionIndex>=currentQuestions.length) finishQuiz();
  else renderQuestion();
}
function showHint() {
  const q=currentQuestions[questionIndex]; if(!q) return;
  $('#questionHint').textContent=`💡 O‘zbekchasi: ${q.translation}`;
}
function finishQuiz() {
  const total=currentQuestions.length; if(!total) return;
  const percent=Math.round(score/total*100);
  const stars=Math.max(1,Math.round(score/total*10));
  const topic=getTopic(selectedTopic);
  student.stars+=stars; student.completed++;
  student.bestScore=Math.max(student.bestScore,percent);
  const result={topicId:selectedTopic,score:percent,correct:score,total,date:new Date().toLocaleDateString('uz-UZ')};
  student.history.unshift(result); student.history=student.history.slice(0,30);
  saveStudent();
  lastResult={...result,stars,topicTitle:topic?topic.title:'Dars'};
  showResults();
}
function showResults() {
  const r=lastResult; if(!r) return;
  $('#resultScore').textContent=r.score+'%';
  $('#resultCorrect').textContent=r.correct;
  $('#resultTotal').textContent=r.total;
  $('#resultStars').textContent='⭐ '+r.stars;
  $('#resultMessage').textContent=r.score>=90?'Ajoyib! Sen zo‘rsan! 🏆':r.score>=70?'Juda yaxshi! Davom et! 🎉':r.score>=50?'Yaxshi harakat! 👏':'Yana bir bor urinib ko‘r! 💪';
  $('#reviewList').classList.add('hidden');
  $('#reviewButton').textContent='📖 Javoblarni ko‘rish';
  showScreen('resultScreen');
}
function toggleReview() {
  const box=$('#reviewList');
  if(box.classList.contains('hidden')) {
    box.innerHTML=answersReview.map((item,index)=>`<div class="review-item"><span class="review-number">${index+1}</span><div class="review-content"><strong>${item.emoji} ${escapeHTML(item.word)}</strong><small>Tarjimasi: ${escapeHTML(item.translation)}</small><small>Sizning javobingiz: ${escapeHTML(item.selected)}</small><small>To‘g‘ri javob: ${escapeHTML(item.correct)}</small></div><span class="review-status">${item.isCorrect?'✅ To‘g‘ri':'❌ Xato'}</span></div>`).join('');
    box.classList.remove('hidden'); $('#reviewButton').textContent='Javoblarni yashirish';
  } else {
    box.classList.add('hidden'); $('#reviewButton').textContent='📖 Javoblarni ko‘rish';
  }
}
function confirmExit() {
  if(confirm('Testdan chiqib, bosh sahifaga qaytmoqchimisiz?')) showHome();
}
function initializeApp() {
  loadStudent();
  $('#startButton').addEventListener('click',()=>{
    const name=$('#studentName').value.trim();
    if(!name) { showToast('Iltimos, ismingizni kiriting!'); return; }
    student.name=name.slice(0,24); saveStudent(); showHome();
  });
  $('#studentName').addEventListener('keydown',event=>{if(event.key==='Enter') $('#startButton').click();});
  document.querySelectorAll('[data-level]').forEach(button=>button.addEventListener('click',()=>chooseLevel(button.dataset.level)));
  $('#beginQuiz').addEventListener('click',startQuiz);
  $('#nextQuestion').addEventListener('click',nextQuestion);
  $('#retryButton').addEventListener('click',startQuiz);
  $('#reviewButton').addEventListener('click',toggleReview);
  $('#hintButton').addEventListener('click',showHint);
  $('#soundToggle').addEventListener('click',toggleSound);
  $('#quizSound').addEventListener('click',()=>{const q=currentQuestions[questionIndex];if(q)speak(q.word);});
  document.querySelectorAll('[data-home]').forEach(button=>button.addEventListener('click',showHome));
  document.querySelectorAll('[data-back]').forEach(button=>button.addEventListener('click',confirmExit));
  $('#brandHome').addEventListener('click',event=>{event.preventDefault();showHome();});
  updateSoundButtons(); updateName();
  if(student.name) showHome(); else showScreen('welcomeScreen');
  console.log('ENGLISH ZERO — Grade 1 ready');
}
document.addEventListener('DOMContentLoaded',initializeApp);
