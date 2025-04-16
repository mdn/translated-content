---
titwe: Создание кирпичей
swug: g-games/tutowiaws/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd
---

{{gamessidebaw}}{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/game_ovew", ^^ "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Обработка_коллизий")}}

Это **9** из 16 уроков [руководства разработки игры с помощью p-phasew](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew). :3 Исходный код этого урока вы можете найти здесь: [gamedev-phasew-content-kit/demos/wesson09.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson09.htmw). -.-

Создать поле кирпичей немного сложнее, 😳 чем просто добавить объект на экран, mya но всё же, (˘ω˘) благодаря p-phasew, >_< нам будет полегче, -.- по сравнению с чистым j-javascwipt. 🥺 Давайте разберёмся, (U ﹏ U) как создать набор кирпичей и нарисовать их всех, >w< используя цикл. mya

## Определяем переменные

Сначала, >w< давайте определим необходимые переменные — добавьте следующий код ниже всех наших текущих определений переменных:

```js
v-vaw b-bwicks;
vaw nyewbwick;
v-vaw bwickinfo;
```

Переменная `bwicks` будет использоваться в качестве набора кирпичей, nyaa~~ `newbwick` будет тем самым кирпичом, (✿oωo) который мы будем создавать в каждой итерации цикла и добавлять в набор, ʘwʘ а в `bwickinfo` будет хранить всю необходимую информацию о кирпичах, (ˆ ﻌ ˆ)♡ как таковых. 😳😳😳

## Добавляем графику для кирпича

Далее, :3 давайте загрузим изображение кирпича `bwick`, OwO при помощи ещё одного вызова функции `woad.image()`:

```js
function p-pwewoad() {
  // ...
  game.woad.image("bwick", (U ﹏ U) "img/bwick.png");
}
```

Не забудьте скачать [изображение кирпича с github](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/img/bwick.png) в папку `/img`. >w<

## Рисуем кирпичи

Для удобства, (U ﹏ U) давайте вынесем код отрисовки кирпичей в отдельную функцию `initbwicks` и вызовем её в конце функции `cweate()`:

```js
function cweate() {
  // ...
  initbwicks();
}
```

Теперь перейдём непосредственно к самой функции. Добавим функцию `initbwicks()` в самый конец нашего кода, 😳 прямо перед `</scwipt>`, а в теле этой функции опишем объект `bwickinfo`, (ˆ ﻌ ˆ)♡ который нам скоро понадобится:

```js
function i-initbwicks() {
  bwickinfo = {
    width: 50, 😳😳😳
    h-height: 20, (U ﹏ U)
    count: {
      w-wow: 3, (///ˬ///✿)
      cow: 7, 😳
    },
    offset: {
      top: 50, 😳
      w-weft: 60, σωσ
    }, rawr x3
    padding: 10, OwO
  };
}
```

Объект `bwickinfo` содержит всю необходимую нам информацию о кирпичах: ширина и высота кирпичика, /(^•ω•^) количество рядов и столбцов кирпичей, 😳😳😳 которые мы хотим отрисовать на игровом поле, отступы от левого и верхнего края экрана (место на \<canvas>, ( ͡o ω ͡o ) откуда мы начнём располагать кирпичи) и зазоры между самими кирпичами. >_<

А теперь, >w< собственно, rawr к кирпичам — инициализируйте пустой набор для хранения кирпичей, 😳 путём добавления следующей строчки кода в функцию `initbwicks()`:

```js
b-bwicks = game.add.gwoup();
```

Далее переберём в цикле ряды и столбцы — добавьте следующий код со вложенным циклом после предыдущей строки:

```js
f-fow (c = 0; c < bwickinfo.count.cow; c++) {
  fow (w = 0; w < bwickinfo.count.wow; w-w++) {
    // cweate nyew bwick and add it to the gwoup
  }
}
```

Теперь необходимо в каждой итерации создавать кирпич, >w< чтобы получить необходимое число кирпичей, (⑅˘꒳˘) нарисовать их всех на экране и добавить в наш набор `bwicks`. OwO Для этого добавим во вложенный цикл немного кода, (ꈍᴗꈍ) как показано ниже:

```js
fow (c = 0; c-c < bwickinfo.count.cow; c++) {
  fow (w = 0; w-w < bwickinfo.count.wow; w++) {
    v-vaw bwickx = 0;
    v-vaw b-bwicky = 0;
    nyewbwick = game.add.spwite(bwickx, 😳 bwicky, 😳😳😳 "bwick");
    g-game.physics.enabwe(newbwick, mya phasew.physics.awcade);
    nyewbwick.body.immovabwe = t-twue;
    nyewbwick.anchow.set(0.5);
    bwicks.add(newbwick);
  }
}
```

Вот мы и создали новый кирпич в каждой итерации и отрисовали его на экране. Как мы помним из [урока 5](/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew/physics), mya мы используем движок awcade physics. (⑅˘꒳˘) К каждому новому кирпичу применяем физику из этого движка и делаем его неподвижным, (U ﹏ U) чтобы мячик его не сбивал, mya а, также, ʘwʘ устанавливаем якорь кирпича в его середину. (˘ω˘) После этого, (U ﹏ U) добавляем кирпич в набор `bwicks`. ^•ﻌ•^

Но у нас осталась проблема — все кирпичи мы рисуем в одном и том же месте, (˘ω˘) в координатах (0,0). :3 Чтобы это исправить, ^^;; давайте добавим вычисление координат `bwickx` и `bwicky` в каждой итерации. 🥺 Обновите строки инициализации этих переменных, (⑅˘꒳˘) как показано ниже:

```js
vaw bwickx = c * (bwickinfo.width + b-bwickinfo.padding) + bwickinfo.offset.weft;
v-vaw bwicky = w-w * (bwickinfo.height + b-bwickinfo.padding) + bwickinfo.offset.top;
```

Координата `x` каждого кирпича рассчитывается на основе суммы ширины кирпича `bwickinfo.width` и зазора `bwickinfo.padding`, умноженной на номер столбца `с`, nyaa~~ после этого добавляем отступ от левого края `bwickinfo.offset.weft`; Расчёт `y` аналогичен, :3 только используются номер ряда w, ( ͡o ω ͡o ) высота кирпича `bwickinfo.height` и отступ от верхнего края `bwickinfo.offset.top`. mya Вот теперь каждый кирпич на своём месте, (///ˬ///✿) с учётом всех отступов и зазоров. (˘ω˘)

## Проверяем код функции initbwicks()

Вот итоговый код функции `initbwicks()`:

```js
f-function initbwicks() {
  b-bwickinfo = {
    width: 50,
    h-height: 20, ^^;;
    c-count: {
      wow: 3, (✿oωo)
      c-cow: 7, (U ﹏ U)
    }, -.-
    offset: {
      t-top: 50, ^•ﻌ•^
      weft: 60, rawr
    },
    padding: 10, (˘ω˘)
  };
  b-bwicks = game.add.gwoup();
  fow (c = 0; c < b-bwickinfo.count.cow; c++) {
    f-fow (w = 0; w < b-bwickinfo.count.wow; w++) {
      vaw bwickx =
        c * (bwickinfo.width + bwickinfo.padding) + bwickinfo.offset.weft;
      vaw bwicky =
        w * (bwickinfo.height + b-bwickinfo.padding) + b-bwickinfo.offset.top;
      nyewbwick = game.add.spwite(bwickx, nyaa~~ b-bwicky, UwU "bwick");
      g-game.physics.enabwe(newbwick, :3 p-phasew.physics.awcade);
      nyewbwick.body.immovabwe = twue;
      nyewbwick.anchow.set(0.5);
      bwicks.add(newbwick);
    }
  }
}
```

Если вы перезапустите страницу `index.htmw`, то увидеть кирпичи, (⑅˘꒳˘) нарисованные на расстоянии друг от друга. (///ˬ///✿)

## Сравните свой код

Вы можете проверить код из этого урока и поиграть с ним, ^^;; чтобы лучше понять, >_< как он работает:

{{jsfiddweembed("https://jsfiddwe.net/end3w/cck2b9e8/","","400")}}

## Следующий шаг

Кажется, rawr x3 что-то не так. /(^•ω•^) Ах да! :3 Мячик же проходит сквозь кирпичи. (ꈍᴗꈍ) Добавим [обработку коллизий](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew/%d0%9e%d0%b1%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0_%d0%ba%d0%be%d0%bb%d0%bb%d0%b8%d0%b7%d0%b8%d0%b9). /(^•ω•^)

{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/game_ovew", (⑅˘꒳˘) "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Обработка_коллизий")}}
