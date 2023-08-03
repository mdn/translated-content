---
title: Создание кирпичей
slug: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Game_over", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Обработка_коллизий")}}

Это **9** из 16 уроков [руководства разработки игры с помощью Phaser](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser). Исходный код этого урока вы можете найти здесь: [Gamedev-Phaser-Content-Kit/demos/lesson09.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson09.html).

Создать поле кирпичей немного сложнее, чем просто добавить объект на экран, но всё же, благодаря Phaser, нам будет полегче, по сравнению с чистым JavaScript. Давайте разберёмся, как создать набор кирпичей и нарисовать их всех, используя цикл.

## Определяем переменные

Сначала, давайте определим необходимые переменные — добавьте следующий код ниже всех наших текущих определений переменных:

```js
var bricks;
var newBrick;
var brickInfo;
```

Переменная `bricks` будет использоваться в качестве набора кирпичей, `newBrick` будет тем самым кирпичом, который мы будем создавать в каждой итерации цикла и добавлять в набор, а в `brickInfo` будет хранить всю необходимую информацию о кирпичах, как таковых.

## Добавляем графику для кирпича

Далее, давайте загрузим изображение кирпича `brick`, при помощи ещё одного вызова функции `load.image()`:

```js
function preload() {
  // ...
  game.load.image("brick", "img/brick.png");
}
```

Не забудьте скачать [изображение кирпича с Github](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/brick.png) в папку `/img`.

## Рисуем кирпичи

Для удобства, давайте вынесем код отрисовки кирпичей в отдельную функцию `initBricks` и вызовем её в конце функции `create()`:

```js
function create() {
  // ...
  initBricks();
}
```

Теперь перейдём непосредственно к самой функции. Добавим функцию `initBricks()` в самый конец нашего кода, прямо перед `</script>`, а в теле этой функции опишем объект `brickInfo`, который нам скоро понадобится:

```js
function initBricks() {
  brickInfo = {
    width: 50,
    height: 20,
    count: {
      row: 3,
      col: 7,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
}
```

Объект `brickInfo` содержит всю необходимую нам информацию о кирпичах: ширина и высота кирпичика, количество рядов и столбцов кирпичей, которые мы хотим отрисовать на игровом поле, отступы от левого и верхнего края экрана (место на \<canvas>, откуда мы начнём располагать кирпичи) и зазоры между самими кирпичами.

А теперь, собственно, к кирпичам — инициализируйте пустой набор для хранения кирпичей, путём добавления следующей строчки кода в функцию `initBricks()`:

```js
bricks = game.add.group();
```

Далее переберём в цикле ряды и столбцы — добавьте следующий код со вложенным циклом после предыдущей строки:

```js
for (c = 0; c < brickInfo.count.col; c++) {
  for (r = 0; r < brickInfo.count.row; r++) {
    // create new brick and add it to the group
  }
}
```

Теперь необходимо в каждой итерации создавать кирпич, чтобы получить необходимое число кирпичей, нарисовать их всех на экране и добавить в наш набор `bricks`. Для этого добавим во вложенный цикл немного кода, как показано ниже:

```js
for (c = 0; c < brickInfo.count.col; c++) {
  for (r = 0; r < brickInfo.count.row; r++) {
    var brickX = 0;
    var brickY = 0;
    newBrick = game.add.sprite(brickX, brickY, "brick");
    game.physics.enable(newBrick, Phaser.Physics.ARCADE);
    newBrick.body.immovable = true;
    newBrick.anchor.set(0.5);
    bricks.add(newBrick);
  }
}
```

Вот мы и создали новый кирпич в каждой итерации и отрисовали его на экране. Как мы помним из [урока 5](/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/Physics), мы используем движок Arcade Physics. К каждому новому кирпичу применяем физику из этого движка и делаем его неподвижным, чтобы мячик его не сбивал, а, также, устанавливаем якорь кирпича в его середину. После этого, добавляем кирпич в набор `bricks`.

Но у нас осталась проблема — все кирпичи мы рисуем в одном и том же месте, в координатах (0,0). Чтобы это исправить, давайте добавим вычисление координат `brickX` и `brickY` в каждой итерации. Обновите строки инициализации этих переменных, как показано ниже:

```js
var brickX = c * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
var brickY = r * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
```

Координата `x` каждого кирпича рассчитывается на основе суммы ширины кирпича `brickInfo.width` и зазора `brickInfo.padding`, умноженной на номер столбца `с`, после этого добавляем отступ от левого края `brickInfo.offset.left`; Расчёт `y` аналогичен, только используются номер ряда r, высота кирпича `brickInfo.height` и отступ от верхнего края `brickInfo.offset.top`. Вот теперь каждый кирпич на своём месте, с учётом всех отступов и зазоров.

## Проверяем код функции initBricks()

Вот итоговый код функции `initBricks()`:

```js
function initBricks() {
  brickInfo = {
    width: 50,
    height: 20,
    count: {
      row: 3,
      col: 7,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
  bricks = game.add.group();
  for (c = 0; c < brickInfo.count.col; c++) {
    for (r = 0; r < brickInfo.count.row; r++) {
      var brickX =
        c * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
      var brickY =
        r * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
      newBrick = game.add.sprite(brickX, brickY, "brick");
      game.physics.enable(newBrick, Phaser.Physics.ARCADE);
      newBrick.body.immovable = true;
      newBrick.anchor.set(0.5);
      bricks.add(newBrick);
    }
  }
}
```

Если вы перезапустите страницу `index.html`, то увидеть кирпичи, нарисованные на расстоянии друг от друга.

## Сравните свой код

Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, как он работает:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/cck2b9e8/","","400")}}

## Следующий шаг

Кажется, что-то не так. Ах да! Мячик же проходит сквозь кирпичи. Добавим [обработку коллизий](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/%D0%9E%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BB%D0%BB%D0%B8%D0%B7%D0%B8%D0%B9).

{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Game_over", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Обработка_коллизий")}}
