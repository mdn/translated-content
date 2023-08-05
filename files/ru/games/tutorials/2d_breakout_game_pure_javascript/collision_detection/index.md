---
title: Обнаружение столкновений
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Создаём_зону_кирпичей", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}

Это 7 шаг из 10 в [Gamedev Canvas tutorial](/ru/docs/Games/Workflows/Breakout_game_from_scratch). Вы можете найти исходный код, как он будет выглядеть после завершения этого урока, тут [Gamedev-Canvas-workshop/lesson7.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson07.html).

У нас уже есть кирпичи, появляющиеся на экране, но игра все ещё не так интересна, ведь мяч проходит сквозь них. Нам нужно подумать о добавлении обнаружения столкновений, чтобы он мог отскакивать от кирпичей и ломать их.

Конечно, это наше решение, как реализовать это, но может быть сложно рассчитать, касается ли шар прямоугольника или нет, потому что в Canvas нет вспомогательных функций для этого. В этом уроке мы сделаем это самым простым способом. Мы проверим, сталкивается ли центр мяча с любым из данных кирпичей. Это не идеальное решение на все случаи жизни, и есть намного более сложные и эффективные способы обнаружения столкновений, но это научит вас основным понятиям.

## Функция обнаружения столкновения

Мы хотим создать функцию обнаружения столкновений, которая будет перебирать все кирпичи и сравнивать позицию каждого кирпича с координатами шара при каждой отрисовке кадра. Для лучшей читаемости кода определим переменную `b`, чтобы хранить объект кирпича в цикле обнаружения столкновения:

```js
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      // calculations
    }
  }
}
```

Если центр шара находится внутри координат одного из наших кирпичей, мы изменим направление шара. Для того, чтобы центр шара находился внутри кирпича, все четыре из следующих утверждений должны быть верны:

- Координата X шара больше, чем координата X кирпича.
- Координата X шара меньше, чем X-координата кирпича плюс его ширина.
- Координата Y шара больше, чем Y-координата кирпича.
- Координата Y шара меньше, чем Y-координата кирпича плюс его высота.

Давайте напишем это в коде:

```js
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
        dy = -dy;
      }
    }
  }
}
```

Добавьте вышеприведённый блок к вашему коду под `keyUpHandler()` функцией .

## Удаление кирпичей после их попадания

Вышеприведённый код будет работать, как и задумано, и мяч изменит своё направление. Проблема в том, что кирпичи остаются на своих местах. Мы должны придумать, как избавляться от тех, в которые мы уже попали мячом. Мы можем сделать это, добавив дополнительный параметр кирпичам, определяющий, будет ли кирпич отрисовываться на экране или нет. В той части кода, где мы инициализируем кирпичи, добавим свойство `status` к каждому кирпичному объекту. Обновите следующую часть кода, как показано ниже:

```js
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
```

Теперь мы будем проверять значение свойства `status` каждого кирпича в функции `drawBricks()` перед его рисованием - если `status` равен `1` , нарисуем его, а если равен `0` , то значит в него попал мяч и он не должен больше отрисовываться. Отредактируйте `drawBricks()` следующим образом:

```js
function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
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
}
```

## Отслеживание и обновление состояния в функции обнаружения столкновений

Теперь нам нужно задействовать свойство `status` кирпича в функции `collisionDetection()` : если кирпич активен (его статус равен `1` ), мы проверяем, было ли столкновение; если да, мы устанавливаем статус данного кирпича равным `0`, чтобы он не был нарисован на экране. Отредактируйте функцию `collisionDetection()`, как показано ниже:

```js
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}
```

## Активация нашего обнаружения столкновений

Последнее, что нужно сделать, это добавить вызов функции `collisionDetection()` в нашу основную функцию `draw()` . Добавьте следующую строку в функцию `draw()` , чуть ниже `drawPaddle()` :

```js
collisionDetection();
```

## Сравните свой код

Обнаружение столкновения шара теперь выполняется на каждом кадре и для каждого кирпича. Теперь мы можем ломать кирпичи! : -

{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/mkwtxgc3/3/","","395")}}

> **Примечание:** измените цвет шара, когда он ударит по кирпичу.

## Следующие шаги

Мы уверенно движемся вперёд! Поехали! В восьмой главе мы будем учиться [отслеживать счёт и выигрывать](/ru/docs/Games/Workflows/Breakout_game_from_scratch/Track_the_score_and_win).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}
