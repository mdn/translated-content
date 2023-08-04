---
title: 기본 애니메이션
slug: Web/API/Canvas_API/Tutorial/Basic_animations
---

{{HTMLElement("canvas")}} 요소는 자바스크립트로 제어하는 것이므로, 애니메이션도 쉽게 만들 수 있습니다. 복잡한 애니메이션을 만드는 것은 추가 작업이 더 필요하고, 앞으로 그에 대한 페이지도 머지 않아 추가되기를 기대합니다.

도형은 한번 만들어 놓으면 그 모습 그대로 있다는 것이 애니메이션을 만들 때의 가장 큰 제약일 것입니다. 그 도형을 움직이고자 하면 그 도형뿐만이 아니라 그 도형이 그려지기 전에 그려진 모든 것을 다시 그려야 합니다. 복잡한 장면을 다시 그리는 것은 시간도 많이 걸리며, 코드를 실행하는 컴퓨터의 능력에 따라 달라집니다.

## 기본 애니메이션 단계

한 장면을 그리려면 아래와 같은 단계를 밟습니다.

1. **캔버스를 비웁니다.**
   그리려는 도형이 (배경 이미지를 만들 때처럼) 캔버스를 가득 채우는 것이 아니라면, 이전에 그려진 모든 도형을 지울 필요가 있습니다. 가장 쉬운 방법은 `clearRect()` 메소드를 사용하는 것입니다.
2. **캔버스 상태를 저장합니다.**
   캔버스 상태에 영향을 주는 (스타일 변경, 모양 변형 등의) 설정값을 바꾸려고 하고, 바뀐 값을 각 장면마다 사용하려고 한다면, 원래 상태를 저장할 필요가 있습니다.
3. **애니메이션할 도형을 그립니다.**
   실제 장면을 그리는 단계입니다.
4. **캔버스 상태를 복원합니다.**
   새로운 장면을 그리기 전에 저장된 상태를 복원합니다.

## 애니메이션 제어하기

캔버스 메소드를 사용하거나 사용자 함수를 사용하여 캔버스에 도형들을 그립니다. 보통의 경우에서는, 코드 실행이 완료되면 캔버스에 나타나는 결과만을 보게 됩니다. 예를 들어, `for` 반복문 안에서 애니메이션을 실행하는 것은 불가능합니다.

그래서 정해진 시간마다 그리기 함수를 실행하는 방법이 필요한 것입니다. 아래와 같이 애니메이션을 제어하는 두 가지 방법이 있습니다.

### 예정된 변경

정해진 시간마다 특정 함수를 부를 때 사용할 수 있는 {{domxref("window.setInterval()")}}과 {{domxref("window.setTimeout()")}} 함수가 있습니다.

> **참고:** 알아둘 것: 현재는 애니메이션을 만드는 방법으로 {{domxref("window.requestAnimationFrame()")}} 메소드를 추천합니다. 이에 대한 튜토리얼은 곧 업데이트할 것입니다.

- `setInterval(function, delay)`
  - : `delay` 밀리세컨드(1,000분의 1초)마다 `function` 함수 반복 실행을 시작합니다.
- `setTimeout(function, delay)`
  - : `delay` 밀리세컨드(1,000분의 1초) 경과후, `function` 함수를 실행합니다.

사용자의 제어를 **필요로 하지 않는** 반복 실행에는 `setInterval()` 함수가 알맞을 것입니다.

### 사용자 상호 작용 변경

애니메이션을 제어하는 두번째 방법은 사용자 입력입니다. 게임을 만들려고 한다면, 애니메이션을 제어하기 위해 키보드나 마우스 이벤트를 사용할 수 있을 것입니다. {{domxref("EventListener")}}를 설정하여, 사용자와 상호 작용하여 애니메이션 함수를 실행합니다.

사용자 상호 작용이 **필요하다면**, 우리가 만든 [애니메이션용 프레임웍(framework)](/ko/docs/JavaScript/Timers/Daemons)의 [최소 기능 버전](/ko/docs/DOM/window.setInterval#A_little_framework) 또는 [최대 기능 버전](/ko/docs/JavaScript/Timers/Daemons)을 사용할 수 있을 것입니다.

```js
var myAnimation = new MiniDaemon(null, animateShape, 500, Infinity);
```

또는

```js
var myAnimation = new Daemon(null, animateShape, 500, Infinity);
```

아래 예제에서는, 애니메이션을 제어하기 위해 {{domxref("window.setInterval()")}}을 사용할 것입니다. 페이지 제일 아래쪽에 {{domxref("window.setTimeout()")}}을 사용한 예제 링크도 있습니다.

#### 태양계 애니메이션

이 예제에서는 달이 지구를 돌고 지구가 태양을 도는 애니메이션을 만듭니다.

```js
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  setInterval(draw, 100);
}

function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 300, 300); // 캔버스를 비운다

  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.strokeStyle = "rgba(0,153,255,0.4)";
  ctx.save();
  ctx.translate(150, 150);

  // 지구
  var time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 50, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // 달
  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds(),
  );
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // 지구 궤도
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);
}
```

```html hidden
<canvas id="canvas" width="300" height="300"></canvas>
```

```js hidden
init();
```

{{EmbedLiveSample("An_animated_solar_system", "310", "310", "canvas_animation1.png")}}

#### 시계 애니메이션

이 예제에서는, 현재 시각을 보여주는 움직이는 시계를 만듭니다.

```js
function init() {
  clock();
  setInterval(clock, 1000);
}

function clock() {
  var now = new Date();
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // 시계판 - 시
  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // 시계판 - 분
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  ctx.fillStyle = "black";

  // 시간 표시 - 시
  ctx.save();
  ctx.rotate(
    hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // 시간 표시 - 분
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // 시간 표시 - 초
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
init();
```

{{EmbedLiveSample("An_animated_clock", "180", "180", "canvas_animation2.png")}}

#### 움직이는 파노라마 사진

이 예제에서는, 움직이는 파노라마 사진을 만듭니다. 사용할 그림은 위키피디어(Wikipedia)에서 구한 [요세미티 국립공원](http://commons.wikimedia.org/wiki/File:Capitan_Meadows,_Yosemite_National_Park.jpg)입니다. 캔버스보다 큰 그림을 사용할 수도 있습니다.

```js
var img = new Image();

// 변수
// 스크롤될 이미지, 방향, 속도를 바꾸려면 변수값을 바꾼다.

img.src = "capitan_meadows,_yosemite_national_park.jpg";
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; // 값이 작을 수록 빨라진다
var scale = 1.05;
var y = -4.5; // 수직 옵셋

// 주요 프로그램

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function () {
  imgW = img.width * scale;
  imgH = img.height * scale;
  if (imgW > CanvasXSize) {
    x = CanvasXSize - imgW;
  } // 캔버스보다 큰 이미지
  if (imgW > CanvasXSize) {
    clearX = imgW;
  } // 캔버스보다 큰 이미지
  else {
    clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
    clearY = imgH;
  } // 캔버스보다 큰 이미지
  else {
    clearY = CanvasYSize;
  }
  // 캔버스 요소 얻기
  ctx = document.getElementById("canvas").getContext("2d");
  // 새로 그리기 속도 설정
  return setInterval(draw, speed);
};

function draw() {
  // 캔버스를 비운다
  ctx.clearRect(0, 0, clearX, clearY);
  // 이미지가 캔버스보다 작거나 같다면 (If image is <= Canvas Size)
  if (imgW <= CanvasXSize) {
    // 재설정, 처음부터 시작
    if (x > CanvasXSize) {
      x = 0;
    }
    // 추가 이미지 그리기
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
    }
  }
  // 이미지가 캔버스보다 크다면 (If image is > Canvas Size)
  else {
    // 재설정, 처음부터 시작
    if (x > CanvasXSize) {
      x = CanvasXSize - imgW;
    }
    // 추가 이미지 그리기
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  // 이미지 그리기
  ctx.drawImage(img, x, y, imgW, imgH);
  // 움직임 정도
  x += dx;
}
```

예제에 사용된 {{HTMLElement("canvas")}}의 크기는 아래와 같다. 캔버스의 너비가 변수 `CanvasXSize`값과 같고, 캔버스의 높이는 변수 `CanvasYSize`값과 같다는 것에 주목하라.

```html
<canvas id="canvas" width="800" height="200"></canvas>
```

**Live sample**

{{EmbedLiveSample("A_looping_panorama", "830", "230")}}

## 또 다른 예제들

- [Gartic](http://www.gartic.net/)
  - : 다중 사용자 지원 그리기 놀이.
- [Canvascape](http://www.abrahamjoffe.com.au/ben/canvascape/)
  - : 3D 어드벤처 게임 (1인칭 슈팅).
- [A basic ray-caster](/ko/docs/Web/Guide/HTML/A_basic_ray-caster)
  - : 키보드를 사용한 애니메이션 제어 방법에 대한 좋은 예제.
- [canvas adventure](http://andrewwooldridge.com/canvas/canvasgame001/canvasgame002.html)
  - : 키보드 제어를 사용하는 또다른 좋은 예제.
- [An interactive Blob](http://www.blobsallad.se/)
  - : 물방울 갖고 놀기.
- [Flying through a starfield](http://arapehlivanian.com/wp-content/uploads/2007/02/canvas.html)
  - : 별, 동그라미, 네모가 떠다니는 우주를 누벼라.
- [iGrapher](http://igrapher.com/)
  - : 주식 시장 자료 차트 예제.

## 이것도 보세요

- [JavaScript timers](/ko/docs/JavaScript/Timers)
- [`setInterval` – A little framework](/ko/docs/DOM/window.setInterval#A_little_framework)
- [JavaScript Daemons Management](/ko/docs/JavaScript/Timers/Daemons)
- [HTMLCanvasElement](/ko/docs/DOM/HTMLCanvasElement)

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Compositing", "Web/Guide/HTML/Canvas_tutorial/Optimizing_canvas")}}
