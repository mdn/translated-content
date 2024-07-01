---
title: Победа
slug: Games/Tutorials/2D_breakout_game_Phaser/Win_the_game
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Очки", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Жизни")}}

Это **12** из 16 уроков [руководства разработки игры с помощью Phaser](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser). Исходный код этого урока вы можете найти здесь: [Gamedev-Phaser-Content-Kit/demos/lesson12.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson12.html).

Победа в нашей игре будет достаточно простой: если ты разрушил все кирпичи, то победил.

## Как победить?

Добавьте следующий код в функцию `ballHitBrick()`:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText("Points: " + score);

  var count_alive = 0;
  for (i = 0; i < bricks.children.length; i++) {
    if (bricks.children[i].alive == true) {
      count_alive++;
    }
  }
  if (count_alive == 0) {
    alert("You won the game, congratulations!");
    location.reload();
  }
}
```

Чтобы перебрать все кирпичи в наборе, необходимо обратиться к полю `bricks.children`. Найдём все неразрешённые кирпичи, проверяя поле `alive` у каждого кирпича и, если все кирпичи разрушены, выведем всплывающее окно с текстом о победе. После закрытия этого окна, страница перезагрузится.

## Сравните свой код

Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, как он работает:

{{JSFiddleEmbed("https://jsfiddle.net/u8waa4Lx/1/","","400")}}

## Следующий шаг

Логику проигрыша и выигрыша мы сделали, так что, основная часть игры готова. Теперь давайте добавим какую-нибудь фишку — дадим игроку три [жизни](Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Жизни), вместо одной.

{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Очки", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Жизни")}}
