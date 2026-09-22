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

document.querySelectorAll('[data-answer]').forEach((button) => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-answer]').forEach((item) => {
      item.classList.toggle('selected', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.getElementById('quiz-result').textContent = button.dataset.answer === '10'
      ? '정답! 목성은 약 10시간 만에 한 바퀴 돌아. 태양계 행성 중 자전이 가장 빨라.'
      : '아깝다! 힌트: 목성은 지구보다 훨씬 빠르게 돌아. 다른 답을 골라 봐.';
  });
});
