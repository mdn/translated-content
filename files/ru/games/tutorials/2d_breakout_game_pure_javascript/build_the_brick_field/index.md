---
title: Создаём зону кирпичей
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection")}}

Это 6 шаг из 10 в [Gamedev Canvas tutorial](/ru/docs/Games/Workflows/Breakout_game_from_scratch). Вы можете найти исходный код, как он будет выглядеть после завершения этого урока, тут - [Gamedev-Canvas-workshop/lesson6.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html).

После изменения механики игрового процесса мы теперь можем проиграть - это здорово, так как это означает, что игра, наконец, больше похожа на игру. Тем не менее, он быстро станет скучным, если все, что вы делаете, это отскок шара от стен и биты. То, что действительно нужно для прорыва - это кирпичи, которые нужно уничтожить мячом, и это то, что мы сейчас создадим!

## Настройка переменных кирпича

Общая цель этого урока - сделать несколько строк кода для кирпичей, используя вложенный цикл, который работает через двумерный массив. Однако сначала нам нужно настроить некоторые переменные для определения информации о таких кирпичах, как их ширина и высота, строки и столбцы и т. Д. Добавьте следующие строки в свой код под переменными, которые вы ранее объявили в своей программе.

```js
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
```

Здесь мы определили количество строк и столбцов кирпичей, их ширину и высоту, прокладку между кирпичами, чтобы они не касались друг друга и верхнее и левое смещение, чтобы они не начинали рисоваться прямо от края Холста.

Мы будем держать все наши кирпичи в двумерном массиве. Он будет содержать кирпичные столбцы (c), которые, в свою очередь, будут содержать кирпичные ряды (r), которые, в свою очередь, будут содержать объект, содержащий положение `x` и `y` чтобы рисовать каждый кирпич на экране. Добавьте следующие значения ниже ваших переменных:

```js
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
```

Вышеприведённый код будет прокручивать строки и столбцы и создавать новые кирпичи. Обратите внимание, что кирпичные объекты также будут использоваться для целей обнаружения столкновений позже.

## Механизм отрисовки кирпичей

Теперь давайте создадим функцию, чтобы перебрать все кирпичи в массиве и нарисовать их на экране. Наш код может выглядеть так:

```js
function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      bricks[c][r].x = 0;
      bricks[c][r].y = 0;
      ctx.beginPath();
      ctx.rect(0, 0, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}
```

Опять же, мы зацикливаем строки и столбцы, чтобы установить положение `x` и `y` каждого кирпича, и мы также `brickWidth` кирпич на кирпичной `brickWidth` Canvas - `brickWidth` - с каждой итерацией цикла. Проблема в том, что мы рисуем их все в одном месте, в координатах `(0,0)` . Нам нужно включить некоторые вычисления, которые будут определять положение `x` и `y` каждого кирпича для каждой итерации цикла:

```js
var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
```

Каждая позиция `brickX` разрабатывается как `brickWidth` + `brickPadding` , умноженная на номер столбца, `c` , плюс `brickOffsetLeft` ; логика для brickY идентична, за исключением того, что она использует значения для номера строки, `r`, `brickHeight` и `brickOffsetTop` . Теперь каждый отдельный кирпич может быть помещён в правильное место и столбец места, с отступом между каждым кирпичом, нарисованным на смещение от левого и верхнего краёв холста.

Окончательная версия функции `drawBricks()` после назначения `brickX` и `brickY` в качестве координат вместо `(0,0)` каждый раз будет выглядеть следующим образом: добавьте это в свой код ниже функции `drawPaddle()` :

```js
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}
```

## Сама отрисовка кирпичей

Последнее, что нужно сделать в этом уроке, - добавить вызов `drawBricks()` где-нибудь в функции `draw()` , предпочтительно в начале, между очисткой холста и рисованием шара. Добавьте следующее выше `drawBall()` :

```js
drawBricks();
```

## Сравните свой код

На этом этапе игра снова стала интереснее:

{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/t1zqmzLp/","","395")}}

> **Примечание:** попробуйте изменить количество кирпичей в строке или столбце или их позиции.

## Следующие шаги

Итак, теперь у нас есть кирпичи! Но мяч вообще не взаимодействует с ними - мы изменим это, поскольку мы переходим в седьмую главу: [Collision detection](/ru/docs/Games/Workflows/Breakout_game_from_scratch/Collision_detection).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}
