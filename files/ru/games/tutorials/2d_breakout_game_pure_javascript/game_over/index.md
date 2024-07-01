---
title: Game over
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Создаём_зону_кирпичей")}}

Это - 5-й шаг из 10 из [Gamedev Canvas tutorial](/ru/docs/Games/Workflows/Breakout_game_from_scratch). Вы можете найти исходный код к этому уроку в [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html).

Конечно интересно наблюдать за отражающимся мячом и двигать биту, но кроме этого игра ничего не делает и не имеет никакого прогресса или конечной цели. Было бы хорошо с точки зрения геймплея иметь возможность проигрыша. Логика проигрыша в потере мяча. Если вы пропустите мяч и дадите ему добраться до нижнего края экрана, то на этом игра закончится.

## Реализация окончания игры

Давайте попытаемся реализовать "Конец Игры" в нашей игре. Вот часть кода от третьего урока, где мы заставили шар отталкиваться от стен:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Вместо того, чтобы позволить шару отталкиваться от всех четырёх стен, давайте позволим отталкиваться только от трёх стен — левую, верхнюю и правую. Удар об нижнюю стенку закончит игру. Мы отредактируем второй блок if, таким образом, что if else вызовет "Конец Игры" , когда шар столкнётся с нижней стенкой холста. Сохраните документ, взгляните на выводящееся сообщение перезагрузите игру путём перезагрузки страницы.

Во-первых, измените код, где вы изначально вызывали `setInterval()`

```
setInterval(draw, 10);
```

на следующий:

```
var interval = setInterval(draw, 10);
```

Затем замените второй оператор if следующим:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
}
```

## Отбить шар

Последняя вещь, которую нужно сделать на этом уроке состоит в том, чтобы создать некоторое обнаружение столкновений между шаром и битой, таким образом, шар оттолкнётся от биты и возвратиться в область игры. Самая простая вещь состоит в том, чтобы проверить, является ли центр шара между левыми и правыми краями биты. Обновите последний бит кода, который вы изменили:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
  } else {
    alert("GAME OVER");
    document.location.reload();
  }
}
```

Если мяч направляется к нижнему краю Canvas, мы должны проверить, касается ли он биты. Если да, то шар возвращается прочь точно так же, как вы ожидали бы; если не тогда игра заканчивается.

## Сравните свой код

Вот рабочий код для вас, чтобы сравнить ваш с:

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/L61c9y50/","","395")}}

> **Примечание:** заставьте мяч двигаться быстрее, когда он попадает в биту.

## Следующие шаги

Все идёт хорошо и наша игра начинает чувствовать себя намного более достойно. Вы уже можете проиграть! Но все ещё не хватает чего-то. Перейдём к шестой главе — [Build the brick field](/ru/docs/Games/Workflows/Breakout_game_from_scratch/Build_the_brick_field) — и создадим некоторые кирпичи для шара, чтобы их уничтожить.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
