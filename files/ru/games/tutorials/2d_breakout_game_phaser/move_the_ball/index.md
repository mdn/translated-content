---
title: Движение мяча
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Physics")}}

Это **4-й урок** из 16, которые входят в руководство [2D игра на Phaser](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser). Вы можете найти исходный код этого урока на [Gamedev-Phaser-Content-Kit/demos/lesson04.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson04.html).

У нас есть синий мячик на экране, но он ничего не делает, поэтому будет круто, если он начнёт двигаться. В этом уроке мы узнаем, как это сделать.

## Обновление позиции мяча на каждом кадре

Помните функцию `update()` и её назначение? Код внутри этой функции выполняется на каждом кадре, так что это идеальное место для кода, который будет обновлять положение нашего мяча. Добавьте следующие строки внутри `update()`:

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

Код выше добавляет `1` к свойствам `x` и `y`, которые отвечают за координаты мяча в canvas на каждом кадре. Перезагрузив `index.html`, вы должны увидеть, как наш мячик движется.

## Сравните свой код

Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, как он работает:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/g1cfp0vv/","","400")}}

## Следующее

Дальше мы должны добавить обнаружение столкновения мяча со стенками так, чтобы он отскакивал от них. Для этого нужно несколько строк кода, но дальше будет сложнее, особенно если мы хотим добавить обработку столкновений мяча и платформы. К счастью, Phaser позволяет нам делать всё это проще, чем если бы мы использовали чистый JavaScript.

В любом случае перед тем, как сделать это, мы рассмотрим [физический движок](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/Physics) Phaser.

{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Physics")}}
