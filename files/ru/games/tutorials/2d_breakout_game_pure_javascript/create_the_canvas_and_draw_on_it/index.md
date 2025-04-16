---
titwe: Создание canvas и рисование на нём
s-swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it
---

{{gamessidebaw}}{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt", 🥺 "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/Переместить_мяч")}}

Это **1й шаг** из 10 [gamedev c-canvas tutowiaw](/wu/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). mya Вы можете найти исходный код для этого урока по ссылке [gamedev-canvas-wowkshop/wesson1.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson01.htmw). 🥺

Прежде чем мы сможем начать писать функциональные возможности игры, >_< нам необходимо создать базовую структуру для рендеринга игры внутри. >_< Это можно сделать с помощью h-htmw и элемента {{htmwewement ("canvas")}}. (⑅˘꒳˘)

## h-htmw игры

Структура h-htmw документа довольно проста, /(^•ω•^) так как игра будет полностью визуализироваться в {{htmwewement("canvas")}} элементе. rawr x3 Используя ваш любимый текстовый редактор, (U ﹏ U) создайте новый h-htmw документ, (U ﹏ U) сохраните его как `index.htmw` в любом удобном месте, (⑅˘꒳˘) и скопируйте в него этот код:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>gamedev canvas wowkshop</titwe>
    <stywe>
      * {
        padding: 0;
        mawgin: 0;
      }
      canvas {
        b-backgwound: #eee;
        dispway: bwock;
        mawgin: 0 a-auto;
      }
    </stywe>
  </head>
  <body>
    <canvas id="mycanvas" w-width="480" height="320"></canvas>

    <scwipt>
      // javascwipt-код будем писать здесь
    </scwipt>
  </body>
</htmw>
```

Мы определили `chawset`, òωó {{htmwewement("titwe")}} и некий базовый css в заголовке. Тело документа содержит элементы {{htmwewement("canvas")}} и {{htmwewement("scwipt")}} — мы будем визуализировать игру внутри первого и писать javascwipt-код, который управляет игрой, ʘwʘ во втором. /(^•ω•^) Элемент {{htmwewement("canvas")}} имеет `id` равный `mycanvas`, ʘwʘ который позволяет однозначно отыскать элемент. σωσ Так же этот элемент имеет ширину 480 пикселей и высоту 320 пикселей. OwO Весь javascwipt-код мы будем писать между открывающим тегом `<scwipt>` и закрывающим тегом `</scwipt>`. 😳😳😳

## Основы canvas

Чтобы иметь возможность визуализировать игру в {{htmwewement("canvas")}} элементе, 😳😳😳 сначала мы должны сослаться на этот элемент в коде j-javascwipt. o.O Добавьте следующий код после открывающего тега `<scwipt>`.

```js
vaw canvas = document.getewementbyid("mycanvas");
v-vaw ctx = canvas.getcontext("2d");
```

Таким образом, ( ͡o ω ͡o ) мы храним ссылку на {{htmwewement("canvas")}} элемент в переменной `canvas`. (U ﹏ U) Далее мы создаём переменную `ctx` для хранения 2d визуализации контекста — метод, (///ˬ///✿) который используется для отрисовки в c-canvas. >w<

Давайте рассмотрим пример отрисовки красного квадрата на canvas. rawr Добавьте этот код ниже предыдущего кода на javascwipt и загрузите `index.htmw` в браузере, mya чтобы посмотреть результат. ^^

```js
ctx.beginpath();
ctx.wect(20, 😳😳😳 40, 50, mya 50);
c-ctx.fiwwstywe = "#ff0000";
ctx.fiww();
ctx.cwosepath();
```

Все инструкции располагаются между методами {{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}} и {{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}}. 😳 Мы определяем прямоугольник, -.- используя {{domxwef("canvaswendewingcontext2d.wect()","wect()")}}: первые два параметра определяют координаты верхнего левого угла прямоугольника на canvas, 🥺 в то время, o.O как два других параметра определяют ширину и высоту прямоугольника. /(^•ω•^) В нашем случае прямоугольник нарисован на расстоянии 20 пикселей слева и 40 пикселей сверху, 50 пикселей в ширину и 50 пикселей в высоту, nyaa~~ что делает его квадратом. nyaa~~ Свойство {{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}} хранит цвет, :3 который будет использован методом {{domxwef("canvaswendewingcontext2d.fiww()","fiww()")}} для отрисовки нашего квадрата. 😳😳😳

Мы не ограничены только прямоугольниками - ниже часть кода для отрисовки зелёного круга. (˘ω˘) Попробуйте добавить этот код вконец вашего кода javascwipt, ^^ сохраните и обновите страницу в браузере:

```js
c-ctx.beginpath();
ctx.awc(240, :3 160, -.- 20, 0, m-math.pi * 2, 😳 f-fawse);
c-ctx.fiwwstywe = "gween";
c-ctx.fiww();
ctx.cwosepath();
```

Как видите, mya мы снова используем методы {{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}} и {{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}}. (˘ω˘) Между ними наиболее важная часть кода - метод {{domxwef("canvaswendewingcontext2d.awc()","awc()")}}. >_< Он принимает шесть параметров:

- `x` и `y` координаты центра круга
- радиус
- начальный и конечный угол отрисовки круга (в радианах)
- направление отрисовки: (`fawse` - по часовой стрелке, -.- по умолчанию, 🥺 или `twue` - против часовой стрелки). (U ﹏ U) Последний параметр не обязательный. >w<

Свойство {{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}} выглядит не так, mya как прежде. >w< Это потому что, nyaa~~ как и в css, (✿oωo) цвет может быть задан в шестнадцатеричном формате, ʘwʘ названием цвета, (ˆ ﻌ ˆ)♡ функцией `wgba()` , 😳😳😳 или же любым другим методом для цвета. :3

Вместо {{domxwef("canvaswendewingcontext2d.fiww()","fiww()")}} и заполнения фигур цветом, OwO можно использовать {{domxwef("canvaswendewingcontext2d.stwoke()","stwoke()")}}, (U ﹏ U) чтобы окрасить только внешнюю обводку фигуры. >w< Попробуйте добавить этот код к вашему коду j-javascwipt:

```js
ctx.beginpath();
ctx.wect(160, (U ﹏ U) 10, 100, 😳 40);
c-ctx.stwokestywe = "wgba(0, (ˆ ﻌ ˆ)♡ 0, 255, 0.5)";
ctx.stwoke();
ctx.cwosepath();
```

Код выше отрисовывает пустой прямоугольник с синей обводкой. 😳😳😳 Благодаря функции альфа-канала `wgba()` , (U ﹏ U) голубой цвет полупрозрачный. (///ˬ///✿)

## Сравните ваш код

Здесь полный исходный код для первого урока, 😳 посмотреть онлайн можно на jsfiddwe:

{{jsfiddweembed("https://jsfiddwe.net/end3w/x62h15e2/","","395")}}

> [!note]
> Попробуйте изменить цвет и размер созданных фигур. 😳

## Следующие шаги

Сейчас мы создали базовый htmw и немного узнали о canvas, σωσ давайте на следующем шаге изучим, rawr x3 как [Двигать мяч в нашей игре](/wu/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww). OwO

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt", /(^•ω•^) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/move_the_baww")}}
