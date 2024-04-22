---
title: Масштабирование
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Initialize_the_framework", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Load_the_assets_and_print_them_on_screen")}}

Это **2-й урок** из 16, которые входят в руководство [2D игра на Phaser](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser). Вы можете найти исходный код этого урока на [Gamedev-Phaser-Content-Kit/demos/lesson02.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson02.html).

Масштабирование отвечает за то, как ваша игра будет выглядеть на экранах разных размеров. Мы можем заставить игру масштабироваться под каждый экран автоматически во время стадии предзагрузки (preload), чтобы нам не пришлось волноваться об этом в будущем.

## Масштабирование

В Phaser есть специальный объект `scale`, которые имеет несколько полезных методов и свойств. Измените вашу функцию `preload()` так, как показано ниже:

```js
function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
}
```

`scaleMode` имеет несколько опций, которые определяют, как {{htmlelement("canvas")}} будет масштабироваться:

- `NO_SCALE` — ничего не масштабировать.
- `EXACT_FIT` — масштабировать с полным заполнением пустого места вертикально и горизонтально, не соблюдая соотношение (aspect ratio).
- `SHOW_ALL` — масштабирует игру, но сохраняет соотношение так, что картинки не будут искажаться, как и при предыдущем значении. Возможно наличие чёрных полос по краям экрана, но мы можем жить с этим.
- `RESIZE` — создаёт {{htmlelement("canvas")}} с доступными шириной и высотой так, что вы можете помещать объекты в игру динамически; это расширенный режим (advanced mode).
- `USER_SCALE` — позволяет вам делать динамическое масштабирование, подсчёт размеров, масштаб и соотношение самостоятельно; опять же это расширенный режим.

Две другие строчки кода в функции `preload()` отвечают за вертикальное и горизонтальное выравнивание элемента {{htmlelement("canvas")}}, так что он всегда будет находиться по центру независимо от размера экрана.

## Изменение цвета фона

Мы также можем сделать фон нашего элемента {{htmlelement("canvas")}} таким, каким захотим, чтобы он не оставался постоянно чёрным. Объект `stage` имеет свойство `backgroundColor` для этого. Мы можем изменить значение, используя синтаксис CSS для цветов. Добавьте эту строку после трёх, недавно добавленных:

```js
game.stage.backgroundColor = "#eee";
```

## Сравните свой код

Вы можете сравнить весь код из этого урока со своим и поиграть с ним, чтобы понять, как он работает:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/6a64vecL/","","400")}}

## Следующее

Мы научились масштабировать нашу игру, так что давайте перейдём к третьему уроку и узнаем, [как загружать ресурсы игры и выводить их](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/Load_the_assets_and_print_them_on_screen).

{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Initialize_the_framework", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Load_the_assets_and_print_them_on_screen")}}
