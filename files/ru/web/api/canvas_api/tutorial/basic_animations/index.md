---
title: Простые анимации
slug: Web/API/Canvas_API/Tutorial/Basic_animations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}

Поскольку для управления элементами {{HTMLElement ("canvas")}} используется JavaScript, не составляет труда сделать (интерактивные) анимации. В этой главе мы рассмотрим, как делаются некоторые базовые анимации.

Вероятно, самым большим ограничением является то, что когда фигура нарисована, её уже нельзя двигать. Чтобы изобразить движение нам нужно перерисовать фигуру и всё, что было нарисовано до неё. Перерисовка сложных кадров занимает много времени, и производительность сильно зависит от скорости компьютера, на котором она выполняется.

## Основные шаги анимации

Ниже перечислены необходимые шаги для того, чтобы нарисовать кадр:

1. **Очистить canvas**
   Если фигура, которую вы собираетесь нарисовать, не занимает всю площадь canvas (как фон, например), то всё что было нарисовано ранее необходимо стереть. Проще всего это сделать при помощи метода {{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}.
2. **Сохранить изначальное состояние canvas**
   Если вы изменяете любые настройки (такие как стили, трансформации и т.п.), которые затрагивают состояние canvas и вы хотите убедиться, что оригинальное состояние используется каждый раз, когда был отрисован кадр, то вам следует сохранить это оригинальное состояние.
3. **Нарисовать анимированные фигуры**
   Шаг на котором вы собственно отрисовываете кадр.
4. **Восстановить состояние canvas**
   Если вы сохраняли состояние, восстановите его, прежде чем отрисовывать новый кадр.

## Управление анимацией

Фигуры отрисовываются на canvas либо напрямую — при помощи методов canvas, либо с помощью сторонних функций. В нормальной ситуации результат станет виден на canvas после окончания выполнения скрипта. К примеру, цикл for использовать для анимации нельзя.

Это значит, нужен способ выполнения функций отрисовки через интервалы времени. Есть два способа для управления такой анимацией.

### Запланированные обновления

Первый — это функции {{domxref("window.setInterval()")}}, {{domxref("window.setTimeout()")}}, и {{domxref("window.requestAnimationFrame()")}}, которые могут быть использованы для вызова некоторой функции, через заданный промежуток времени.

- {{domxref("WindowTimers.setInterval", "setInterval(function, delay)")}}
  - : Начинает периодически исполнять функцию `function` каждые `delay` миллисекунд.
- {{domxref("WindowTimers.setTimeout", "setTimeout(function, delay)")}}
  - : Запускает выполнение указанной функции `function` через `delay` миллисекунд.
- {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame(callback)")}}
  - : Сообщает браузеру, что вы хотите выполнить анимацию, и запрашивает, чтобы браузер вызвал указанную функцию `callback` для обновления анимации перед следующей перерисовкой.

Если вы не планируете никакого взаимодействия с пользователем, вы можете использовать функцию `setInterval()` , которая многократно выполняет, предоставленный ей код. Если же вы планируете создать игру, в которой контроль анимации осуществляется мышью или клавиатурой, то необходимо использовать `setTimeout()`. Установив {{domxref("EventListener")}}, вы можете перехватываете любые действия пользователя и запустить соответствующие функции анимации.

> **Примечание:** В примерах ниже мы будем использовать функцию {{domxref("window.requestAnimationFrame()")}} для контроля анимации. Функция `requestAnimationFrame` является более эффективной для создания анимации, так как новая итерация вызывается, когда система готова к отрисовке нового кадра. Количество вызовов в секунду примерно равно 60 и уменьшается, когда вкладка неактивна. Для более подробного изучения цикла анимации, особенно для игр, прочитайте статью [Анатомия видеоигр](/ru/docs/Games/Anatomy) В [Зоне разработке игр](/ru/docs/Games).

## Анимированная солнечная система

В этом примере анимируется небольшая модель солнечной системы.

```js
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.strokeStyle = "rgba(0,153,255,0.4)";
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 50, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
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
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();
```

```html hidden
<canvas id="canvas" width="300" height="300"></canvas>
```

{{EmbedLiveSample("Анимированная_солнечная_система", "310", "310", "canvas_animation1.png")}}

## Анимированные часы

В этом примере создаются анимированные часы, показывающие правильное время.

```js
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

  // Hour marks
  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
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

  // write Hours
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

  // write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
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

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

{{EmbedLiveSample("Анимированные_часы", "180", "180", "canvas_animation2.png")}}

## Зацикленная панорама

В этом примере панорама прокручивается слева направо. Мы используем [фото национального парка Йосемити](http://commons.wikimedia.org/wiki/File:Capitan_Meadows,_Yosemite_National_Park.jpg) взятое из Википедии, но вы можете использовать любое изображение, большее элемента canvas.

```js
var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = "capitan_meadows,_yosemite_national_park.jpg";
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Main program

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
  } // image larger than canvas
  if (imgW > CanvasXSize) {
    clearX = imgW;
  } // image larger than canvas
  else {
    clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
    clearY = imgH;
  } // image larger than canvas
  else {
    clearY = CanvasYSize;
  }
  //Get Canvas Element
  ctx = document.getElementById("canvas").getContext("2d");
  //Set Refresh Rate
  return setInterval(draw, speed);
};

function draw() {
  //Clear Canvas
  ctx.clearRect(0, 0, clearX, clearY);
  //If image is <= Canvas Size
  if (imgW <= CanvasXSize) {
    //reset, start from beginning
    if (x > CanvasXSize) {
      x = 0;
    }
    //draw aditional image
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
    }
  }
  //If image is > Canvas Size
  else {
    //reset, start from beginning
    if (x > CanvasXSize) {
      x = CanvasXSize - imgW;
    }
    //draw aditional image
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  //draw image
  ctx.drawImage(img, x, y, imgW, imgH);
  //amount to move
  x += dx;
}
```

Заметьте, что ширина и высота должны совпадать со значениями `CanvasXZSize` и `CanvasYSize`.

```html
<canvas id="canvas" width="800" height="200"></canvas>
```

{{EmbedLiveSample("Зацикленная_панорама", "830", "230")}}

## Другие примеры

- [A basic ray-caster](/ru/docs/Web/API/Canvas_API/A_basic_ray-caster)
  - : Хороший пример того, как сделать управляемую анимацию с клавиатуры.
- [Advanced animations](/ru/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
  - : Мы рассмотрим некоторые продвинутые методы анимации и физику в следующей главе.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}
