---
title: Счёт и выигрыш
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Обнаружение_столкновений", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Управление_мышью")}}

Это 8й шаг из 10 в [Gamedev Canvas tutorial](/ru/docs/Games/Workflows/Breakout_game_from_scratch). Вы можете найти исходный код для этого урока по ссылке [Gamedev-Canvas-workshop/lesson8.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html).

Уничтожение кирпичей действительно классно, но, чтобы быть ещё более удивительным, игра должна присуждать очки за каждый кирпич, в который попадает игрок, и подсчитывать общий балл.

## Подсчёт очков

Если вы можете увидеть свои очки на протяжении всей игры, вы можете произвести впечатление на своих друзей. Вам нужна переменная для записи очков. Добавьте следующие данные в свой JavaScript, после остальных переменных:

```js
var score = 0;
```

Вам также нужна функция `drawScore()` для создания и обновления отображения оценки. Добавьте после функции `collisionDetection()` следующий код:

```js
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}
```

Рисование текста на канве аналогично рисованию фигур. Определение шрифта выглядит точно так же, как и в CSS - вы можете установить размер и тип шрифта в {{domxref("CanvasRenderingContext2D.font","font()")}} методе. Затем используйте {{domxref("CanvasRenderingContext2D.fillStyle()","fillStyle()")}} для установки цвета шрифта и {{domxref("CanvasRenderingContext2D.fillText","fillText()")}} для установки фактического текста, который будет помещён на канву, и где он будет размещён. Первым параметром является сам текст - приведённый выше код показывает текущее количество точек, а два последних параметра - это координаты, в которых текст будет помещён на канву.

Чтобы начислять баллы каждый раз при ударе кирпича, добавьте строку в функцию `collisionDetection()`, чтобы увеличить значение переменной оценки каждый раз при обнаружении столкновения. Добавьте в код следующую выделенную строку:

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
          score++;
        }
      }
    }
  }
}
```

Вызов `drawScore()` из функции `draw()` позволяет обновить счёт с каждым новым фреймом - добавьте следующую строку внутри `draw()`, чуть ниже вызова `drawPaddle()`:

```js
drawScore();
```

## Отображение сообщения о победе, когда все кирпичи были уничтожены

В конце концов, это главная цель игры, поэтому вы должны отобразить сообщение о победе, если все доступные кирпичи уничтожены. Добавьте следующий код в свою функцию `collisionDetection()` :

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
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}
```

Благодаря этому, игроки могут выиграть игру, когда они уничтожают все кирпичи, что очень важно, когда дело доходит до игр. Функция `document.location.reload()` перезагружает страницу и снова запускает игру после нажатия кнопки оповещения.

## Сравните ваш код

Вот работающий код для вас, чтобы сравнить со своим:

{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/2m74vr9r/1/","","395")}}

> **Примечание:** добавьте больше очков за каждый разбитый кирпич, выведите количество набранных очков в конце игры.

## Следующие шаги

На данный момент игра выглядит довольно хорошо. В следующем уроке вы расширите привлекательность игры, добавив [Mouse controls](/ru/docs/Games/Workflows/Breakout_game_from_scratch/Mouse_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
