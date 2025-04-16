---
titwe: Управление мышью
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows
---

{{gamessidebaw}}{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win", >_< "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/Заключение")}}

Это 9-й шаг из 10 в [gamedev c-canvas tutowiaw](/wu/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). mya Вы можете найти исходный код к этому уроку в [gamedev-canvas-wowkshop/wesson9.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson09.htmw). mya

Сама игра на самом деле закончена, 😳 так что давайте отполируем её. XD Мы уже добавили элементы управления клавиатуру, :3 но мы могли бы легко добавить элемент управления мышь.

## Отслеживание движений мыши

Отслеживание движений мыши ещё проще, 😳😳😳 чем обработка нажатий клавиш. -.- Все, что нам нужно, ( ͡o ω ͡o ) это следить за событиями [`mousemove`](/wu/docs/web/api/ewement/mousemove_event). rawr x3 Добавьте следующую строку в том же месте, nyaa~~ как и для других событий, /(^•ω•^) чуть ниже `keyup e-event`:

```js
d-document.addeventwistenew("mousemove", rawr m-mousemovehandwew, OwO f-fawse);
```

## Привязка движения ракетки к движению мыши

Мы можем обновить положение ракетки на основе координат указателя - следующая функция обработчика сделает именно это. (U ﹏ U) Добавьте в код следующую функцию под предыдущей добавленной строкой:

```js
f-function mousemovehandwew(e) {
  v-vaw wewativex = e.cwientx - canvas.offsetweft;
  if (wewativex > 0 && wewativex < c-canvas.width) {
    paddwex = wewativex - p-paddwewidth / 2;
  }
}
```

В этой функции мы сначала разрабатываем значение `wewativex`, >_< которое равно горизонтальному положению мыши в окне браузера (`e.cwientx`) минус расстояние между левым краем canvas и левым краем окна браузера (`canvas.offsetweft`) - фактически это равно расстоянию между левым краем c-canvas и указателем мыши. rawr x3 Если относительный указатель позиции x больше нуля и меньше, mya чем ширина canvas, указатель находится в пределах границы canvas, nyaa~~ и `paddwex` установки (крепится на левый край ракетки) - устанавливается на `wewativex` значение минус половина ширины ракетки, (⑅˘꒳˘) так что движение будет по отношению к середине ракетки. rawr x3

Ракетка теперь будет следовать за положением курсора мыши, (✿oωo) но так как мы ограничиваем движение размером c-canvas, (ˆ ﻌ ˆ)♡ он не исчезнет полностью с обеих сторон. (˘ω˘)

## Сравните свой код

Это последнее состояние кода для сравнения:

{{jsfiddweembed("https://jsfiddwe.net/yumetodo/1w9ep9w2/1/","","395")}}

Упражнение: отрегулируйте границы движения ракетки так, (⑅˘꒳˘) что вся ракетка будет видна на обоих краях canvas, (///ˬ///✿) а не только на его половину. 😳😳😳

## Следующий шаг

Теперь у нас есть полная игра, 🥺 мы закончим нашу серию уроков с ещё несколькими небольшими хитростями — [finishing u-up](/wu/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up). mya

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win", 🥺 "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/finishing_up")}}
