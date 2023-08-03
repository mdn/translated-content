---
title: Заключение
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
---

{{GamesSidebar}}{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Управление_мышью")}}

Это 10-й и заключительный шаг в [Gamedev Canvas tutorial](/ru/docs/Games/Workflows/Breakout_game_from_scratch). Вы можете найти исходный код, как он должен выглядеть, после завершения этого урока в [Gamedev-Canvas-workshop/lesson10.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html).

В любой игре, которую мы пишем, всегда есть место для улучшений. Например, мы можем предложить игроку несколько жизней. Они могут сделать несколько ошибок и всё равно закончить игру. Мы также можем улучшить отрисовку кода.

## Предоставление игроку нескольких жизней

Реализация довольно проста. Давайте сначала добавим переменную для хранения количества жизней в том же месте, где мы объявляли другие наши переменные:

```js
var lives = 3;
```

Отрисовка счётчика жизни выглядит почти так же, как и счётчика баллов - добавьте в код следующую функцию под функцией `drawScore()` :

```js
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}
```

Вместо того, чтобы немедленно закончить игру, мы уменьшим количество жизней, пока они больше не будут доступны. Мы также можем сбросить позиции мяча и биты, когда игрок начинает игру со следующей жизнью. Итак, в функции `draw()` замените следующие три строки:

```js
alert("GAME OVER");
document.location.reload();
clearInterval(interval); // Needed for Chrome to end game
```

Давайте добавим немного более сложную логику к ней, как показано ниже:

```js
lives--;
if (!lives) {
  alert("GAME OVER");
  document.location.reload();
} else {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}
```

Теперь, когда мяч попадает в нижний край экрана, мы вычитаем одну жизнь из переменной `lives`. Если жизней не осталось, игра проиграна, если осталось ещё несколько жизней, то положение мяча и биты сбрасываются вместе с движением мяча.

### Визуализация дисплея жизней

Теперь вам нужно добавить вызов `drawLives()` внутри функции `draw()` и добавить его под вызовом `drawScore()`.

```js
drawLives();
```

## Улучшение рендеринга с requestAnimationFrame()

Теперь давайте работать над чем-то, что не связано с игровой механикой, но с тем, как она рендерится. {{domxref("window.requestAnimationFrame", "requestAnimationFrame")}} поможет браузеру рендерить игру лучше, чем фиксированная частота кадров, которую в настоящее время мы реализовали, используя {{domxref("windowTimers.setInterval()", "setInterval()")}}. Замените следующую строку:

```js
setInterval(draw, 10);
```

на:

```js
draw();
```

и удалите каждый экземпляр:

```
clearInterval(interval); // Needed for Chrome to end game
```

Затем в самом низу функции `draw()` (непосредственно перед закрывающей фигурной скобкой) добавьте следующую строку, которая заставляет функцию `draw()` вызывать себя снова и снова:

```js
requestAnimationFrame(draw);
```

Функция `draw()` теперь выполняется снова и снова в цикле `requestAnimationFrame()`, но вместо фиксированной частоты кадров в 10 миллисекунд, мы возвращаем управление частотой кадров обратно в браузер. Соответственно он будет синхронизировать частоту кадров и отображать фигуры только при необходимости. Это обеспечивает более эффективный и плавный цикл анимации, чем более старый метод `setInterval().`

## Сравните свой код

Вот и все-финальная версия игры готова!

{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/3becw9fy/1/","","395")}}

> **Примечание:** измените количество жизней и угол отскока мяча от биты.

## Игра закончена - на данный момент!

Вы закончили все уроки — поздравляем! К этому моменту вы должны знать основы манипулирования canvas и логику простых 2D-игр. Сейчас самое время изучить некоторые фреймворки и продолжить разработку игр. Вы можете проверить аналог этой серии, [2D breakout game using Phaser](/ru/docs/Games/Workflows/2D_breakout_game_Phaser) или [Cyber Orb built in Phaser](/ru/docs/Games/Workflows/HTML5_Gamedev_Phaser_Device_Orientation) учебник. Вы также можете просмотреть раздел [Games section on MDN](/ru/docs/Games) для вдохновения и увеличения знаний.

Вы также можете вернуться на [this tutorial series' index page](/ru/docs/Games/Workflows/Breakout_game_from_scratch) учебника. Получайте удовольствие от написания кода!

{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
