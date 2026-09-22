# 나만 아는 재미를 소개해줄게 — 목성과 해왕성 편

`index.html`을 더블 클릭하거나 브라우저 창으로 끌어 놓으면 열립니다. 설치나 서버, 인터넷 연결은 필요하지 않습니다.

- `index.html`: 홈페이지의 글과 구조
- `style.css`: 색상, 배치, 모바일 화면 디자인
- `script.js`: 위성 선택과 퀴즈 동작
- `assets/jupiter.svg`: 직접 제작한 목성 일러스트 (실제 관측 사진 아님)
- `assets/jupiter-photo.jpg`: 메인 목성과 구름 카드에 사용하는 실제 관측 사진
- `assets/jupiter-storm.jpg`: 대적점 카드의 실제 관측 사진
- `assets/jupiter-moons.jpg`: 위성 카드의 관측 사진 합성 이미지

사진은 로컬에 저장되어 인터넷 없이 표시됩니다. 원본 출처 링크를 열 때만 인터넷 연결이 필요합니다. 기존 SVG는 보관하며, 위성 선택 영역의 작은 구체는 기존의 설명용 그림입니다.

## 사진 출처

- [Cassini Jupiter Portrait (PIA04866)](https://science.nasa.gov/photojournal/cassini-jupiter-portrait/) — NASA/JPL/Space Science Institute. 카시니 관측 사진의 자연색 모자이크. 구름 카드에서는 같은 사진의 일부를 보여 줍니다.
- [Jupiter Eye to Io (PIA02852)](https://science.nasa.gov/photojournal/jupiter-eye-to-io/) — NASA/JPL/University of Arizona. 색 합성 및 대비 보정된 카시니 관측 사진.
- [Family Portrait (PIA00600)](https://science.nasa.gov/photojournal/family-portrait-of-jupiters-great-red-spot-and-the-galilean-satellites/) — NASA/JPL/DLR. 갈릴레오와 보이저가 촬영한 사진을 모은 합성 이미지로, 위성들의 실제 배치를 보여 주는 한 장의 사진은 아닙니다.

위성 버튼 4개를 눌러 소개가 바뀌는지, 퀴즈의 각 답을 눌러 피드백이 나오는지 확인해 보세요. 브라우저 폭을 줄이면 모바일 배치로 바뀝니다.

다음에 해 볼 요청 예시: “이 홈페이지에 내가 목성을 좋아하는 이유를 적는 코너를 추가해 줘.”

## 해왕성 편

목성 퀴즈 다음에 같은 형식의 해왕성 소개가 이어집니다. 기존 HTML, CSS, JS를 사용하며, 사진도 기존 `assets/` 폴더에 저장했습니다. 위성 선택과 퀴즈 3개는 목성과 독립적으로 동작합니다.

- `assets/neptune-photo.jpg`: 보이저 2호 해왕성 관측 사진 합성·색 처리, NASA/JPL-Caltech.
- `assets/neptune-rings.jpg`: 보이저 2호 고리 관측 사진 PIA01493, NASA/JPL-Caltech.
- `assets/triton-photo.jpg`: 트리톤 색 모자이크 PIA00317, NASA/JPL/USGS.
- `assets/nereid-photo.jpg`: 네레이드 저해상도 관측 사진, NASA/JPL.

내용과 사진 출처: [NASA 해왕성](https://science.nasa.gov/neptune/neptune-facts/), [트리톤](https://science.nasa.gov/neptune/moons/triton/), [네레이드](https://science.nasa.gov/neptune/moons/nereid/). 사진의 색은 처리 방식에 따라 달라지며 맨눈으로 보는 색과 같지는 않을 수 있습니다.
