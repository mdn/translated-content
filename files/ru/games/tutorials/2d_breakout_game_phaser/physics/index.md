---
title: Физика
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Move_the_ball", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Bounce_off_the_walls")}}

Это **5 урок** из 16, которые входят в руководство [2D игра на Phaser](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser). Вы можете найти исходный код этого урока на [Gamedev-Phaser-Content-Kit/demos/lesson05.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson05.html).

Для правильного определения столкновений нам необходима физика, и в этом уроке мы покажем, что есть у Phaser на этот счёт, продемонстрировав это на простом примере.

## Добавление физики

В Phaser есть три разных физических движка: Arcade Physics, P2 и Ninja Physics. Также есть четвёртый Box2D как платный плагин. Для нашей простой игры мы будем использовать Arcade Physics, потому что нам не нужны сложные геометрические вычисления.

Во-первых, инициализируем Arcade Physics в нашей игре. Добавьте метод `physics.startSystem()` в начале функции `create()`. Убедитесь, что следующая строка кода находится в самом начале функции `create():`

```js
game.physics.startSystem(Phaser.Physics.ARCADE);
```

Во-вторых, нам необходимо добавить мяч в физическую систему, потому что объект, отвечающий за физику в Phaser, не включён по умолчанию. Добавьте следующую строку в конце функции `create()`:

```js
game.physics.enable(ball, Phaser.Physics.ARCADE);
```

В-третьих, теперь мы можем установить значение свойства `velocity` нашего мяча через `body`. Добавьте следующую строку снова в конце функции `create()`:

```js
ball.body.velocity.set(150, 150);
```

## Удаление предыдущих инструкций при обновлении

Теперь нам надо убрать старый код, который добавлял 1 к координатам x и y в функции update():

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

теперь мы сделали тоже самое, но на физическом движке.

## Финальный код

Весь код должен выглядеть вот так:

```js
var ball;

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor = "#eee";
  game.load.image("ball", "img/ball.png");
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  ball = game.add.sprite(50, 50, "ball");
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.body.velocity.set(150, 150);
}

function update() {}
```

Снова перезагрузите index.html. Мячик должен постоянно двигаться в направлении, которое мы задали. На данный момент в физическом движке гравитация (gravity) и трение (friction) имеют нулевое значение. Добавление гравитации заставит мячик падать вниз, пока трение будет пытаться остановить его.

## Поиграйте с физикой

Вы можете делать гораздо больше вещей с физикой. Например, добавив `ball.body.gravity.y = 100`, вы установите вертикальную гравитацию для мячика. Как результат он будет сначала запущен вверх, но затем начнёт падать, находясь под действием гравитации.

Это лишь верхушка айсберга: есть огромное количество переменных и функции, с помощью которых вы можете взаимодействовать с физическими объектами. Посмотрите официальную [документацию](http://phaser.io/docs/2.6.2/index#physics), чтобы увидеть огромное количество примеров применения [Arcade](http://phaser.io/examples/v2/category/arcade-physics) и [P2](http://phaser.io/examples/v2/category/p2-physics).

## Сравните свой код

Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, как он работает:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bjto9nj8/","","400")}}

## Следующее

Теперь мы можем посмотреть, как заставить мяч [отскакивать от стен](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/Bounce_off_the_walls).

{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Move_the_ball", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Bounce_off_the_walls")}}
