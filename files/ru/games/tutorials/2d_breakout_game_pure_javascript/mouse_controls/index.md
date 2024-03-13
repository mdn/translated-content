---
title: Управление мышью
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Заключение")}}

Это 9-й шаг из 10 в [Gamedev Canvas tutorial](/ru/docs/Games/Workflows/Breakout_game_from_scratch). Вы можете найти исходный код к этому уроку в [Gamedev-Canvas-workshop/lesson9.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson09.html).

Сама игра на самом деле закончена, так что давайте отполируем её. Мы уже добавили элементы управления клавиатуру, но мы могли бы легко добавить элемент управления мышь.

## Отслеживание движений мыши

Отслеживание движений мыши ещё проще, чем обработка нажатий клавиш. Все, что нам нужно, это следить за событиями {{event("mousemove")}}. Добавьте следующую строку в том же месте, как и для других событий, чуть ниже `keyup event`:

```js
document.addEventListener("mousemove", mouseMoveHandler, false);
```

## Привязка движения ракетки к движению мыши

Мы можем обновить положение ракетки на основе координат указателя - следующая функция обработчика сделает именно это. Добавьте в код следующую функцию под предыдущей добавленной строкой:

```js
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
```

В этой функции мы сначала разрабатываем значение `relativeX`, которое равно горизонтальному положению мыши в окне браузера (`e.clientX`) минус расстояние между левым краем canvas и левым краем окна браузера (`canvas.offsetLeft`) - фактически это равно расстоянию между левым краем canvas и указателем мыши. Если относительный указатель позиции X больше нуля и меньше, чем ширина Canvas, указатель находится в пределах границы Canvas, и `paddleX` установки (крепится на левый край ракетки) - устанавливается на `relativeX` значение минус половина ширины ракетки, так что движение будет по отношению к середине ракетки.

Ракетка теперь будет следовать за положением курсора мыши, но так как мы ограничиваем движение размером Canvas, он не исчезнет полностью с обеих сторон.

## Сравните свой код

Это последнее состояние кода для сравнения:

{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/1L9ep9r2/1/","","395")}}

Упражнение: отрегулируйте границы движения ракетки так, что вся ракетка будет видна на обоих краях Canvas, а не только на его половину.

## Следующий шаг

Теперь у нас есть полная игра, мы закончим нашу серию уроков с ещё несколькими небольшими хитростями — [Finishing up](/ru/docs/Games/Workflows/Breakout_game_from_scratch/Finishing_up).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up")}}
