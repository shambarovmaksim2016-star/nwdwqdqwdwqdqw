'use strict';

// Все пункты выбора можно отмечать одновременно. Последний пункт каждого раздела
// открывает поле, куда Ксюша может вписать собственное пожелание.
const steps = [
  {
    key: 'food', name: 'Вкусный выбор', title: 'Что будем кушать?',
    hint: 'Выбирай всё, что тебе хочется — можно несколько вариантов.', multi: true,
    options: [
      ['🍣','Суши и роллы','Роллы, запечённые роллы и любимые соусы'],
      ['🍕','Пицца','С сыром, вкусняшками и без спешки'],
      ['🍔','Бургеры','Сочный бургер и картошечка'],
      ['🍰','Кафе с десертами','Кофе, тортик и разговоры'],
      ['🥩','Мясо или шашлык','Сытно и по-праздничному'],
      ['🍝','Паста','Паста с любимым соусом'],
      ['🥟','Пельмени или хинкали','Уютная и сытная еда'],
      ['🍜','Азиатская кухня','Лапша, вок или что-нибудь острое'],
      ['🍱','Пробовать новое','Попробуем то, что ещё не заказывали'],
      ['🥗','Лёгкий ужин','Салаты и что-нибудь свежее'],
      ['🍤','Морепродукты','Креветки и другие морские вкусности'],
      ['🥞','Завтрак или бранч','Сырники, блинчики и неспешное утро'],
      ['🍿','Перекус и кино','Попкорн, снеки и любимые напитки'],
      ['🍓','Фрукты и сладости','Клубника, шоколад и другие радости'],
      ['🍳','Домашний ужин','Приготовим что-нибудь вместе дома'],
      ['✍️','Свой вариант','Напиши, что хочется именно тебе','custom']
    ]
  },
  {
    key: 'place', name: 'Место мечты', title: 'Куда отправимся?',
    hint: 'Отметь все идеи, которые тебе нравятся. Точное место выберем вместе.', multi: true,
    options: [
      ['🕯️','Уютный ресторан','Красиво одеться и вкусно поужинать'],
      ['☕','Милое кафе','Уютный столик и что-нибудь вкусное'],
      ['🎬','Кинотеатр','Фильм, попкорн и держаться за руки'],
      ['🌳','Прогулка по городу','Погуляем и зайдём за вкусняшками'],
      ['🌅','К красивому виду','Встретим закат и сделаем фотографии'],
      ['🧺','Пикник','Плед, угощения и время вдвоём'],
      ['🏡','Домашний уют','Свечи, вкусная еда и наш фильм'],
      ['🎤','Караоке','Петь песни и смеяться вместе'],
      ['🎳','Развлечения и игры','Боулинг, игровые автоматы или настолки'],
      ['🛍️','Торговый центр','Прогуляться, заглянуть в магазины и кафе'],
      ['📸','Фотопрогулка','Найти красивые места и сделать снимки'],
      ['🌲','На природу','Свежий воздух и небольшое приключение'],
      ['🚗','Небольшая поездка','Съездим куда-нибудь сменить обстановку'],
      ['🧖','Место для отдыха','Спа или расслабляющий отдых'],
      ['💞','Пока не знаю — решим вместе','Выберем по настроению в Благовещенске'],
      ['✍️','Свой вариант','Напиши конкретное место или идею','custom']
    ]
  },
  {
    key: 'activity', name: 'Впечатления', title: 'Чем займёмся?',
    hint: 'Можно выбрать хоть все варианты — пусть день будет по-настоящему твоим.', multi: true,
    options: [
      ['📸','Сделаем красивые фото','Оставим воспоминания об этом дне'],
      ['🛍️','Шопинг','Выберем что-нибудь приятное'],
      ['🎲','Игры и веселье','Настолки, аркады или что-то новое'],
      ['💆','Расслабиться','Спа, массаж или спокойный отдых'],
      ['🚗','Маленькое приключение','Съездим куда-нибудь вместе'],
      ['🫶','Побыть вдвоём','Без спешки, планов и телефонов'],
      ['🎥','Кино дома','Устроим уютный вечер с фильмом'],
      ['🍳','Приготовить что-то вместе','Выберем рецепт и будем готовить вдвоём'],
      ['💃','Танцы','Потанцуем или попробуем что-то новое'],
      ['🎤','Петь в караоке','Любимые песни и никакого стеснения'],
      ['🧁','Сходить на десерт','Попробуем что-нибудь красивое и вкусное'],
      ['🌇','Посмотреть закат','Обниматься и любоваться небом'],
      ['🎨','Творческое свидание','Рисование, керамика или мастер-класс'],
      ['🧩','Настольные игры','Немного азарта и много смеха'],
      ['💐','Цветы и романтика','Выберем букет и устроим фотопрогулку'],
      ['📱','Сделать видео на память','Снимем наши смешные и милые моменты'],
      ['🛋️','День полного отдыха','Никуда не торопиться и нежиться вместе'],
      ['✍️','Свой вариант','Напиши, что ещё хотелось бы сделать','custom']
    ]
  },
  {
    key: 'gift', name: 'Подарок', title: 'Какой подарок хочешь?',
    hint: 'Можешь выбрать несколько идей или написать конкретное желание.', multi: true,
    options: [
      ['💍','Украшение','Что-то красивое на память'],
      ['💙','Синие или любимые цветы','Букет, выбранный специально для тебя'],
      ['🌸','Парфюм','Любимый аромат или новый запах'],
      ['💄','Косметика и уход','То, что давно хотелось попробовать'],
      ['🧸','Мягкая игрушка','Милая вещь для обнимашек'],
      ['👜','Сумка или аксессуар','Красивая вещь на каждый день'],
      ['👗','Одежда','Что-нибудь, что ты сама выберешь'],
      ['⌚','Аксессуар или гаджет','Полезная и красивая вещь'],
      ['📚','Книга','История, которую захочется читать'],
      ['🎟️','Впечатление в подарок','Билеты, мастер-класс или приключение'],
      ['🏨','Мини-путешествие','Провести время вместе в новом месте'],
      ['💌','Письмо или альбом воспоминаний','Что-то личное, сделанное с любовью'],
      ['🛍️','Подарочная карта','Сама выберешь то, что нужно'],
      ['💳','Что-то из списка желаний','Подарок, о котором давно мечтала'],
      ['🎁','Сюрприз от меня','Доверяю тебе придумать что-то особенное'],
      ['💞','Выбрать вместе','Хочу, чтобы подарок точно понравился'],
      ['✍️','Свой вариант','Напиши конкретную вещь или желание','custom']
    ]
  }
];

const state = { food: [], place: [], activity: [], gift: [], custom: {} };
let currentStep = 0;
const $ = (selector) => document.querySelector(selector);
const homeScreen = $('#home');
const quizScreen = $('#quiz');
const resultScreen = $('#result');
const postcardScreen = $('#postcard');
const optionsGrid = $('#optionsGrid');
const customEntry = $('#customEntry');
const customText = $('#customText');
const validationMessage = $('#validationMessage');

function showScreen(screen) {
  [homeScreen, quizScreen, resultScreen, postcardScreen].forEach((item) => {
    item.hidden = item !== screen;
    item.classList.toggle('active', item === screen);
  });
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

function activeValue(step) {
  return state[step.key];
}

function isSelected(step, index) {
  return activeValue(step).includes(index);
}

function customSelected(step) {
  const customIndex = step.options.findIndex((option) => option[3] === 'custom');
  return customIndex !== -1 && activeValue(step).includes(customIndex);
}

function renderStep() {
  const step = steps[currentStep];
  $('#stepCount').textContent = `${String(currentStep + 1).padStart(2, '0')} / ${String(steps.length).padStart(2, '0')}`;
  $('#stepName').textContent = step.name;
  $('#step-title').textContent = step.title;
  $('#step-hint').textContent = step.hint;
  $('#progressFill').style.width = `${((currentStep + 1) / steps.length) * 100}%`;
  $('#backButton').innerHTML = currentStep === 0 ? '← В начало' : '← Назад';
  $('#nextButton').innerHTML = currentStep === steps.length - 1 ? 'К моему плану <span aria-hidden="true">♡</span>' : 'Дальше <span aria-hidden="true">→</span>';
  optionsGrid.innerHTML = '';

  step.options.forEach((option, index) => {
    const selected = isSelected(step, index);
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `option-card${selected ? ' selected' : ''}`;
    card.setAttribute('aria-pressed', String(selected));
    card.innerHTML = '<span class="option-emoji" aria-hidden="true"></span><span class="option-copy"><span class="option-title"></span><span class="option-description"></span></span><span class="option-check" aria-hidden="true">✓</span>';
    card.querySelector('.option-emoji').textContent = option[0];
    card.querySelector('.option-title').textContent = option[1];
    card.querySelector('.option-description').textContent = option[2];
    card.addEventListener('click', () => chooseOption(step, index));
    optionsGrid.appendChild(card);
  });

  customEntry.hidden = !customSelected(step);
  customText.value = state.custom[step.key] || '';
  const customLabel = customEntry.querySelector('label');
  customLabel.textContent = `Твой вариант для раздела «${step.name.toLowerCase()}»`;
  customText.placeholder = step.key === 'place' ? 'Напиши место или куда давно хочется…' :
    step.key === 'gift' ? 'Напиши, какой именно подарок хочется…' :
    step.key === 'activity' ? 'Напиши занятие своей мечты…' : 'Напиши, что хочется попробовать…';
  validationMessage.textContent = '';
}

function chooseOption(step, index) {
  const selected = new Set(state[step.key]);
  if (selected.has(index)) selected.delete(index);
  else selected.add(index);
  state[step.key] = [...selected].sort((a, b) => a - b);
  renderStep();
}

function optionLabel(step) {
  return state[step.key].map((index) => {
    const option = step.options[index];
    if (option[3] === 'custom') {
      return state.custom[step.key]?.trim() || 'свой вариант (обсудим вместе)';
    }
    return option[1];
  }).join(', ');
}

function validateCurrentStep() {
  const step = steps[currentStep];
  const selected = state[step.key];
  if (!selected.length) {
    validationMessage.textContent = 'Отметь хотя бы один вариант, любимая 💗';
    return false;
  }
  if (customSelected(step) && !(state.custom[step.key] || '').trim()) {
    validationMessage.textContent = 'Напиши свой вариант или сними отметку с этой карточки 💗';
    customText.focus();
    return false;
  }
  return true;
}

function updateSummary() {
  steps.forEach((step) => {
    const target = $(`#summary-${step.key}`);
    if (target) target.textContent = optionLabel(step);
  });
}

function makeWhatsAppMessage() {
  return [
    '💗 Ксюша выбрала свой идеальный день рождения!',
    '',
    `🍓 Что поедим: ${optionLabel(steps[0])}`,
    `📍 Куда пойдём: ${optionLabel(steps[1])}`,
    `✨ Чем займёмся: ${optionLabel(steps[2])}`,
    `🎁 Подарки и пожелания: ${optionLabel(steps[3])}`,
    '',
    'Теперь осталось воплотить этот план в жизнь 🥰',
    'С любовью, Ксюша 💌'
  ].join('\n');
}

$('#startButton').addEventListener('click', () => {
  currentStep = 0;
  renderStep();
  showScreen(quizScreen);
});

$('#backButton').addEventListener('click', () => {
  if (currentStep === 0) {
    showScreen(homeScreen);
    return;
  }
  currentStep -= 1;
  renderStep();
});

$('#nextButton').addEventListener('click', () => {
  if (!validateCurrentStep()) return;
  if (currentStep < steps.length - 1) {
    currentStep += 1;
    renderStep();
  } else {
    updateSummary();
    showScreen(resultScreen);
  }
});

$('#editButton').addEventListener('click', () => {
  currentStep = 0;
  renderStep();
  showScreen(quizScreen);
});

$('#restartButton').addEventListener('click', () => {
  state.food = [];
  state.place = [];
  state.activity = [];
  state.gift = [];
  state.custom = {};
  currentStep = 0;
  renderStep();
  showScreen(homeScreen);
});

$('#whatsappButton').addEventListener('click', () => {
  const url = `https://wa.me/?text=${encodeURIComponent(makeWhatsAppMessage())}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});

$('#cardButton').addEventListener('click', () => showScreen(postcardScreen));
$('#backToPlanButton').addEventListener('click', () => showScreen(resultScreen));

customText.addEventListener('input', () => {
  state.custom[steps[currentStep].key] = customText.value;
  validationMessage.textContent = '';
});
