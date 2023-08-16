---
title: Создание Canvas и рисование на нём
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Переместить_мяч")}}

Это **1й шаг** из 10 [Gamedev Canvas tutorial](/ru/docs/Games/Workflows/Breakout_game_from_scratch). Вы можете найти исходный код для этого урока по ссылке [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html).

Прежде чем мы сможем начать писать функциональные возможности игры, нам необходимо создать базовую структуру для рендеринга игры внутри. Это можно сделать с помощью HTML и элемента {{htmlelement ("canvas")}}.

## HTML игры

Структура HTML документа довольно проста, так как игра будет полностью визуализироваться в {{htmlelement("canvas")}} элементе. Используя ваш любимый текстовый редактор, создайте новый HTML документ, сохраните его как `index.html` в любом удобном месте, и скопируйте в него этот код:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Gamedev Canvas Workshop</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      canvas {
        background: #eee;
        display: block;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="480" height="320"></canvas>

    <script>
      // JavaScript-код будем писать здесь
    </script>
  </body>
</html>
```

Мы определили `charset`, {{htmlelement("title")}} и некий базовый CSS в заголовке. Тело документа содержит элементы {{htmlelement("canvas")}} и {{htmlelement("script")}} — мы будем визуализировать игру внутри первого и писать JavaScript-код, который управляет игрой, во втором. Элемент {{htmlelement("canvas")}} имеет `id` равный `myCanvas`, который позволяет однозначно отыскать элемент. Так же этот элемент имеет ширину 480 пикселей и высоту 320 пикселей. Весь JavaScript-код мы будем писать между открывающим тегом `<script>` и закрывающим тегом `</script>`.

## Основы Canvas

Чтобы иметь возможность визуализировать игру в {{htmlelement("canvas")}} элементе, сначала мы должны сослаться на этот элемент в коде JavaScript. Добавьте следующий код после открывающего тега `<script>`.

```js
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
```

Таким образом, мы храним ссылку на {{htmlelement("canvas")}} элемент в переменной `canvas`. Далее мы создаём переменную `ctx` для хранения 2D визуализации контекста — метод, который используется для отрисовки в Canvas.

Давайте рассмотрим пример отрисовки красного квадрата на canvas. Добавьте этот код ниже предыдущего кода на JavaScript и загрузите `index.html` в браузере, чтобы посмотреть результат.

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

Все инструкции располагаются между методами {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} и {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}. Мы определяем прямоугольник, используя {{domxref("CanvasRenderingContext2D.rect()","rect()")}}: первые два параметра определяют координаты верхнего левого угла прямоугольника на canvas, в то время, как два других параметра определяют ширину и высоту прямоугольника. В нашем случае прямоугольник нарисован на расстоянии 20 пикселей слева и 40 пикселей сверху, 50 пикселей в ширину и 50 пикселей в высоту, что делает его квадратом. Свойство {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} хранит цвет, который будет использован методом {{domxref("CanvasRenderingContext2D.fill()","fill()")}} для отрисовки нашего квадрата.

Мы не ограничены только прямоугольниками - ниже часть кода для отрисовки зелёного круга. Попробуйте добавить этот код вконец вашего кода JavaScript, сохраните и обновите страницу в браузере:

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

Как видите, мы снова используем методы {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} и {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}. Между ними наиболее важная часть кода - метод {{domxref("CanvasRenderingContext2D.arc()","arc()")}}. Он принимает шесть параметров:

- `x` и `y` координаты центра круга
- радиус
- начальный и конечный угол отрисовки круга (в радианах)
- направление отрисовки: (`false` - по часовой стрелке, по умолчанию, или `true` - против часовой стрелки). Последний параметр не обязательный.

Свойство {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} выглядит не так, как прежде. Это потому что, как и в CSS, цвет может быть задан в шестнадцатеричном формате, названием цвета, функцией `rgba()` , или же любым другим методом для цвета.

Вместо {{domxref("CanvasRenderingContext2D.fill()","fill()")}} и заполнения фигур цветом, можно использовать {{domxref("CanvasRenderingContext2D.stroke()","stroke()")}}, чтобы окрасить только внешнюю обводку фигуры. Попробуйте добавить этот код к вашему коду JavaScript:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
```

Код выше отрисовывает пустой прямоугольник с синей обводкой. Благодаря функции альфа-канала `rgba()` , голубой цвет полупрозрачный.

## Сравните ваш код

Здесь полный исходный код для первого урока, посмотреть онлайн можно на JSFiddle:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/x62h15e2/","","395")}}

> **Примечание:** попробуйте изменить цвет и размер созданных фигур.

## Следующие шаги

Сейчас мы создали базовый HTML и немного узнали о canvas, давайте на следующем шаге изучим, как [Двигать мяч в нашей игре](/ru/docs/Games/Workflows/Breakout_game_from_scratch/Move_the_ball).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
