// 위성을 누르면 소개를 바꾸고, 퀴즈에 답하면 결과를 알려 줍니다.
const moons = {
  io: { english: '01 / IO', name: '이오', description: '태양계에서 화산 활동이 가장 활발한 천체야. 목성 등의 중력이 이오를 당기고 변형시키며 내부를 뜨겁게 해.' },
  europa: { english: '02 / EUROPA', name: '유로파', description: '얼음 표면 아래에 액체 상태의 바다가 있을 것으로 여겨져. 얼음에 새겨진 긴 선들을 보면, 그 아래 숨겨진 세계가 궁금해져.' },
  ganymede: { english: '03 / GANYMEDE', name: '가니메데', description: '태양계에서 가장 큰 위성이야. 크기는 수성보다도 크고, 위성으로는 드물게 자체 자기장까지 가지고 있어.' },
  callisto: { english: '04 / CALLISTO', name: '칼리스토', description: '표면에 수많은 충돌 구덩이가 남아 있는 위성이야. 오래된 흔적들을 고스란히 간직한, 태양계의 시간 여행 앨범 같아.' }
};

document.querySelectorAll('[data-moon]').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.moon;
    const moon = moons[key];
    document.querySelectorAll('[data-moon]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.getElementById('moon-globe').className = `moon-globe ${key}`;
    document.getElementById('moon-en').textContent = moon.english;
    document.getElementById('moon-name').textContent = moon.name;
    document.getElementById('moon-description').textContent = moon.description;
  });
});

// 문제를 추가하려면 이 목록에 질문, 보기, 정답 번호(0부터), 설명을 넣으세요.
const questions = [
  {
    title: '잠깐, 목성에서의 하루는?',
    options: ['약 10시간', '약 24시간', '약 48시간'],
    answer: 0,
    explanation: '목성은 약 10시간 만에 한 바퀴 돌아. 태양계 행성 중 자전이 가장 빨라.',
    hint: '목성은 지구보다 훨씬 빠르게 돌아.'
  },
  {
    title: '목성의 빨간 점, 대적점의 정체는?',
    options: ['커다란 화산', '거대한 폭풍', '충돌 구덩이'],
    answer: 1,
    explanation: '대적점은 목성의 대기에서 소용돌이치는 거대한 폭풍이야.',
    hint: '목성을 감싸는 구름과 바람을 떠올려 봐.'
  },
  {
    title: '태양계에서 가장 큰 위성은?',
    options: ['이오', '유로파', '가니메데'],
    answer: 2,
    explanation: '가니메데는 태양계에서 가장 큰 위성이야. 크기는 수성보다도 커.',
    hint: '위성 산책에서 수성보다 크다고 소개한 달이야.'
  }
];

let questionIndex = 0;
let answered = false;
const answerButtons = document.querySelectorAll('[data-answer]');
const quizTitle = document.getElementById('quiz-title');
const quizProgress = document.getElementById('quiz-progress');
const quizResult = document.getElementById('quiz-result');
const nextButton = document.getElementById('quiz-next');

function showQuestion() {
  const question = questions[questionIndex];
  answered = false;
  quizTitle.textContent = question.title;
  quizProgress.textContent = `작은 퀴즈 · ${questionIndex + 1} / ${questions.length}`;
  quizResult.textContent = '마음에 드는 답을 눌러 봐.';
  nextButton.hidden = true;
  answerButtons.forEach((button, index) => {
    button.textContent = question.options[index];
    button.disabled = false;
    button.classList.remove('selected');
    button.setAttribute('aria-pressed', 'false');
  });
}

answerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (answered) return;
    const question = questions[questionIndex];
    answerButtons.forEach((item) => {
      item.classList.toggle('selected', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    if (Number(button.dataset.answer) !== question.answer) {
      quizResult.textContent = `아깝다! 힌트: ${question.hint} 다른 답을 골라 봐.`;
      return;
    }
    answered = true;
    const isLast = questionIndex === questions.length - 1;
    quizResult.textContent = `정답! ${question.explanation}${isLast ? ' 세 문제를 모두 풀었어!' : ''}`;
    answerButtons.forEach((item) => { item.disabled = true; });
    nextButton.textContent = isLast ? '다시 풀기 ↻' : '다음 문제 →';
    nextButton.hidden = false;
    nextButton.focus();
  });
});

nextButton.addEventListener('click', () => {
  if (!answered) return;
  questionIndex = (questionIndex + 1) % questions.length;
  showQuestion();
  quizTitle.focus();
});

showQuestion();

// 해왕성의 선택 상태는 목성의 위성·퀴즈와 별도로 관리합니다.
(() => {
  const moonData = {
    triton: {
      name: '트리톤', english: '01 / TRITON', image: 'assets/triton-photo.jpg',
      description: '해왕성에서 가장 큰 위성이야. 행성의 자전과 반대 방향으로 공전하고, 보이저 2호는 이 차가운 달에서 물질이 분출하는 모습도 관측했어.',
      source: 'https://science.nasa.gov/neptune/moons/triton/',
      credit: 'NASA/JPL/USGS · 관측 사진 합성 · 표시 크기는 실제 비율과 달라. ↗'
    },
    nereid: {
      name: '네레이드', english: '02 / NEREID', image: 'assets/nereid-photo.jpg',
      description: '1949년에 발견된 위성이야. 아주 길쭉한 타원 궤도를 따라 돌고, 해왕성을 한 바퀴 도는 데 지구 시간으로 약 360일이 걸려.',
      source: 'https://science.nasa.gov/neptune/moons/nereid/',
      credit: 'NASA/JPL · 저해상도 관측 사진 · 표시 크기는 실제 비율과 달라. ↗'
    }
  };
  const moonButtons = document.querySelectorAll('[data-neptune-moon]');
  moonButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const moon = moonData[button.dataset.neptuneMoon];
      moonButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      const photo = document.getElementById('neptune-moon-photo');
      photo.src = moon.image;
      photo.alt = `${moon.name} 관측 사진`;
      document.getElementById('neptune-moon-en').textContent = moon.english;
      document.getElementById('neptune-moon-name').textContent = moon.name;
      document.getElementById('neptune-moon-description').textContent = moon.description;
      const credit = document.getElementById('neptune-moon-credit');
      credit.href = moon.source;
      credit.textContent = moon.credit;
    });
  });

  const questions = [
    { title: '잠깐, 해왕성에서의 하루는?', options: ['약 10시간', '약 16시간', '약 24시간'], answer: 1,
      explanation: '해왕성의 하루는 약 16시간이야.', hint: '목성보다는 길고 지구보다는 짧아.' },
    { title: '해왕성에도 고리가 있을까?', options: ['고리가 있어', '고리가 없어', '토성에만 있어'], answer: 0,
      explanation: '해왕성에도 희미한 고리가 있어.', hint: '두 번째 특징 카드의 사진을 떠올려 봐.' },
    { title: '해왕성의 가장 큰 위성은?', options: ['이오', '네레이드', '트리톤'], answer: 2,
      explanation: '트리톤은 해왕성에서 가장 큰 위성이야.', hint: '해왕성의 자전과 반대로 도는 달이야.' }
  ];
  let index = 0;
  let answered = false;
  const buttons = document.querySelectorAll('[data-neptune-answer]');
  const title = document.getElementById('neptune-quiz-title');
  const progress = document.getElementById('neptune-quiz-progress');
  const result = document.getElementById('neptune-quiz-result');
  const next = document.getElementById('neptune-quiz-next');
  function renderQuestion() {
    const question = questions[index];
    answered = false;
    title.textContent = question.title;
    progress.textContent = `작은 퀴즈 · ${index + 1} / ${questions.length}`;
    result.textContent = '마음에 드는 답을 눌러 봐.';
    next.hidden = true;
    buttons.forEach((button, option) => {
      button.textContent = question.options[option];
      button.disabled = false;
      button.classList.remove('selected');
      button.setAttribute('aria-pressed', 'false');
    });
  }
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (answered) return;
      const question = questions[index];
      buttons.forEach((item) => {
        item.classList.toggle('selected', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });
      if (Number(button.dataset.neptuneAnswer) !== question.answer) {
        result.textContent = `아깝다! 힌트: ${question.hint} 다른 답을 골라 봐.`;
        return;
      }
      answered = true;
      const isLast = index === questions.length - 1;
      result.textContent = `정답! ${question.explanation}${isLast ? ' 세 문제를 모두 풀었어!' : ''}`;
      buttons.forEach((item) => { item.disabled = true; });
      next.textContent = isLast ? '다시 풀기 ↻' : '다음 문제 →';
      next.hidden = false;
      next.focus();
    });
  });
  next.addEventListener('click', () => {
    if (!answered) return;
    index = (index + 1) % questions.length;
    renderQuestion();
    title.focus();
  });
  renderQuestion();
})();
