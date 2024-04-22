---
title: Жизни
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Победа", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Анимация")}}

Это **12** из 16 уроков [руководства разработки игры с помощью Phaser](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser). Исходный код этого урока вы можете найти здесь: [Gamedev-Phaser-Content-Kit/demos/lesson13.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson13.html).

Мы можем растянуть удовольствие от игры, добавив жизни. Это позволит игроку сделать несколько попыток, а не одну.

## Новый переменные

Добавьте следующие переменные сразу после всех наших текущих определений переменных:

```js
var lives = 3;
var livesText;
var lifeLostText;
```

Эти переменные хранят, соответственно, количество жизней, надпись с количеством оставшихся жизней, и надпись, которая выведется на экран, если игрок потеряет жизнь.

## Определяем новые надписи

Надписи мы уже определяли, когда реализовывали систему [очков](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/%D0%9E%D1%87%D0%BA%D0%B8). Добавьте следующие строки кода в после определения надписи `scoreText` в функции `create()`:

```js
livesText = game.add.text(game.world.width - 5, 5, "Lives: " + lives, {
  font: "18px Arial",
  fill: "#0095DD",
});
livesText.anchor.set(1, 0);
lifeLostText = game.add.text(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "Life lost, click to continue",
  { font: "18px Arial", fill: "#0095DD" },
);
lifeLostText.anchor.set(0.5);
lifeLostText.visible = false;
```

Объекты `livesText` и `lifeLostText` очень похожи на `scoreText` — они определяют положение на экране, текст надписи и стилизацию шрифта. Чтобы всё выглядело должным образом, надпись с жизнями мы закрепляем в правом верхнем углу, а надпись о потере жизни, мы выводим в центре экрана. И всё это при помощи функции `anchor.set()`.

Надпись `lifeLostText` появится только при потере жизни, поэтому её видимость мы выставляем в `false`.

### Чистим код, стилизирующий надписи

Как вы могли заметить, мы используем одинаковые стили для всех надписей: `scoreText`, `livesText` и `lifeLostText`. Однако, налицо копирование кода и если мы, когда-либо, захотим изменить размер шрифта или цвет, то нам придётся делать это в нескольких местах. Чтобы избежать этого, мы вынесем стиль в отдельную переменную. Напишите следующую строку сразу после всех наших текущих определений переменных:

```js
var textStyle = { font: "18px Arial", fill: "#0095DD" };
```

Теперь мы можем использовать эту переменную для нашего текста — обновите ваш код и замените повторяющиеся участки со стилем текста на переменную.

```js
scoreText = game.add.text(5, 5, "Points: 0", textStyle);
livesText = game.add.text(
  game.world.width - 5,
  5,
  "Lives: " + lives,
  textStyle,
);
livesText.anchor.set(1, 0);
lifeLostText = game.add.text(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "Life lost, click to continue",
  textStyle,
);
lifeLostText.anchor.set(0.5);
lifeLostText.visible = false;
```

Теперь, чтобы изменить стиль всего текста в игре, достаточно изменить только эту переменную.

## Код обработки жизни

Чтобы реализовать жизнь в нашей игре, давайте сначала изменим функцию шара, связанную с событием `onOutOfBounds`. Вместо того, чтобы выполнять анонимную функцию и сразу показывать сообщение:

```js
ball.events.onOutOfBounds.add(function () {
  alert("Game over!");
  location.reload();
}, this);
```

Мы объявим новую функцию `ballLeaveScreen`; Удалим предыдущий обработчик (зачёркнутый код сверху) и заменим его следующей линией:

```js
ball.events.onOutOfBounds.add(ballLeaveScreen, this);
```

Мы будем уменьшать количество жизней каждый раз, когда шар выйдет за пределы окна Canvas. Добавьте функцию `ballLeaveScreen()` в конец кода:

```js
function ballLeaveScreen() {
  lives--;
  if (lives) {
    livesText.setText("Lives: " + lives);
    lifeLostText.visible = true;
    ball.reset(game.world.width * 0.5, game.world.height - 25);
    paddle.reset(game.world.width * 0.5, game.world.height - 5);
    game.input.onDown.addOnce(function () {
      lifeLostText.visible = false;
      ball.body.velocity.set(150, -150);
    }, this);
  } else {
    alert("You lost, game over!");
    location.reload();
  }
}
```

Вместо того, чтобы сразу вызывать сообщение, когда мяч выходит за пределы Canvas, мы сначала вычитаем одну жизнь из текущего числа и проверяем, не равно ли оно нулю. Если не равно, то у игрока все ещё осталось несколько жизней, и он может продолжать играть - он увидит сообщение о потере жизни, позиции мяча и платформы будут сброшены и при следующем клике мышью сообщение будет скрыто и мяч снова начнёт двигаться.

Когда количество жизней достигнет нуля игра заканчивается, а игроку показывается соответствующее сообщение.

## События

Скорее всего вы заметили вызов методов `add()` и `addOnce()` в двух блоках кода выше и хотите знать, чем они отличаются. Разница в том, что метод `add()` и привязанная к нему функция выполняется каждый раз, когда выполняется событие, тогда как метод `addOnce()` полезен, когда вы хотите, чтобы связанная с ним функция выполнилась единожды и не повторялась снова. В нашем случае при каждом событии `outOfBounds` будет выполняться `ballLeaveScreen`, но когда мяч покидает экран, сообщение с экрана удалится единожды.

## Проверь свой код

Вы можете проверить готовый код этого урока в его демо-версии и поиграть с ним чтобы лучше понять, как он работает:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/yk1c5n0b/","","400")}}

## Следующий шаг

Жизни делают игру более казуальной — даже если вы проиграете единожды, у вас будут ещё 2 жизни и вы сможете продолжить игру. Теперь мы можем поработать над внешним видом игры, сделать её более красивой, добавив [анимацию и эффекты](/ru/docs/Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}
