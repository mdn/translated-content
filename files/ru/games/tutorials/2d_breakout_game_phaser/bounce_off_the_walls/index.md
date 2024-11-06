---
title: Отскакивания
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Physics", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Платформа_и_управление")}}

Это **6 урок** из 16 [Руководства разработки игры с помощью Phaser](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser). Вы можете найти исходный код того как должен выглядеть код после завершения урока здесь: [Gamedev-Phaser-Content-Kit/demos/lesson06.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson06.html).

Теперь, когда мы познакомились с физикой, мы можем начать реализовывать определение столкновений в игре — сначала посмотрим на "стены".

## Отскакивание от границ представления

Самый простой способ заставить мячик от стен это сообщить фреймворку что мы хотим рассматривать границы элемента {{htmlelement("canvas")}} как стены и не позволять мячу проходить через них. В Phaser это может быть просто реализовано с помощью свойства `collideWorldsBound`. Добавьте этот код сразу после существующего вызова метода `game.physics.enable()`:

```js
ball.body.collideWorldBounds = true;
```

Теперь мяч будет останавливаться у границ экрана, вместо того чтобы исчезать, но он не отскакивает. Чтобы это происходило нам нужно установить его "отскакиваемость". Добавите следующий код ниже предыдущей строки:

```js
ball.body.bounce.set(1);
```

Попробуйте перезагрузить index.html опять — теперь мяч отскакивает от стен и движется внутри холста canvas.

## Сравните ваш код

Вы можете сравнить получившийся код из этого урока в превью и поиграть с ним, чтобы лучше понять как он работает:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/dcw36opz/","","400")}}

## Следующие шаги

Это начинает больше походить на игру, но мы никак не можем её контролировать — самое время добавить [рычаги управления для игрока](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/%D0%9F%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0_%D0%B8_%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5).

{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Physics", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Платформа_и_управление")}}
