---
title: Game over
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Платформа_и_управление", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Создание_кирпичей")}}

Это **8** из 16 уроков [руководства разработки игры с помощью Phaser](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser). Исходный код этого урока вы можете найти здесь: [Gamedev-Phaser-Content-Kit/demos/lesson08.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson08.html).

Чтобы разнообразить игру, давайте добавим возможность проигрыша — если вы не отобьёте мячик и дадите ему упасть на пол, то game over.

## Проигрыш

Чтобы добавить возможность проигрыша, давай те отключим определение коллизии с нижней гранью экрана. Добавьте следующую строку кода в функцию `create()`, сразу после кода инициализации всех атрибутов мячика:

```js
game.physics.arcade.checkCollision.down = false;
```

Теперь мячик отскакивает только от трёх стен (верхней, левой и правой) и, если не отбить его платформой, проходит сквозь нижнюю стену, выходя за пределы экрана. Осталось только поймать момент выхода мячика за пределы экрана и вывести сообщение о проигрыше. Добавьте эти строки кода сразу после предыдущей:

```js
ball.checkWorldBounds = true;
ball.events.onOutOfBounds.add(function () {
  alert("Game over!");
  location.reload();
}, this);
```

Мы сделали так, чтобы мячик проверял границы игрового мира (в нашем случае границы `<canvas>`) и, в случае выхода за их пределы (событие `onOutOfBounds`), выполнял функцию, которую мы привязали к этому событию. После закрытия всплывающего окна с сообщением 'Game over!', происходит перезагрузка страницы, чтобы можно было сыграть снова.

## Сравните свой код

Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, как он работает:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/436bckb7/","","400")}}

## Следующий шаг

Базовый геймплей готов. Но какой арканоид без разбивания [кирпичиков](/ru/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)?

{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Платформа_и_управление", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Создание_кирпичей")}}
