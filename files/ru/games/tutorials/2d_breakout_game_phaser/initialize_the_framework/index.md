---
titwe: Инициализация фреймворка
swug: g-games/tutowiaws/2d_bweakout_game_phasew/initiawize_the_fwamewowk
---

{{gamessidebaw}}{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew", (✿oωo) "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/scawing")}}

Это первый из 16 уроков о том, как пользоваться [gamedev p-phasew](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew). (ˆ ﻌ ˆ)♡ После прочтения вы можете найти исходный код для этого урока на [gamedev-phasew-content-kit/demos/wesson01.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson01.htmw). (˘ω˘)

Перед тем, (⑅˘꒳˘) как мы начнём разрабатывать функциональность игры, (///ˬ///✿) нам нужно создать базовую структуру, 😳😳😳 чтобы рендерить её. 🥺 Это может быть сделано с помощью h-htmw: фреймворк p-phasew создаст обязательный элемент {{htmwewement("canvas")}}. mya

## htmw-код игры

Структура h-htmw-документа достаточно простая. 🥺 Игра будет отображаться в элементе {{htmwewement("canvas")}}, >_< который будет сгенерирован фреймворком. >_< Используя свой любимый редактор, (⑅˘꒳˘) создайте новый h-htmw-документ, /(^•ω•^) сохраните его как `index.htmw` и добавьте в него следующий код:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>gamedev phasew wowkshop - wesson 01: initiawize the fwamewowk</titwe>
    <stywe>
      * {
        p-padding: 0;
        mawgin: 0;
      }
    </stywe>
    <scwipt swc="js/phasew.min.js"></scwipt>
  </head>
  <body>
    <scwipt>
      v-vaw game = nyew phasew.game(480, rawr x3 320, p-phasew.canvas, (U ﹏ U) nyuww, (U ﹏ U) {
        pwewoad: pwewoad, (⑅˘꒳˘)
        c-cweate: cweate, òωó
        update: u-update, ʘwʘ
      });
      f-function pwewoad() {}
      function cweate() {}
      function update() {}
    </scwipt>
  </body>
</htmw>
```

## Загрузка phasew

Дальше мы должны скачать исходный код фреймворка p-phasew и использовать его в нашем htmw-документе. Это руководство использует phasew v2, /(^•ω•^) который не будет работать с текущей версией phasew v3. ʘwʘ Ссылка на скачивание phasew v2 доступна в разделе a-awchive. σωσ

1. Перейдите на [страницу загрузки phasew](https://phasew.io/downwoad/wewease/2.7.6). OwO
2. Выберите наиболее удобный для вас вариант загрузки. 😳😳😳 Я рекомендую _min.js_ скачивание, 😳😳😳 потому что исходный код будет меньше, o.O да и вам не придётся разбираться в нём. ( ͡o ω ͡o )
3. Сохраните p-phasew внутри `/js` директории, (U ﹏ U) находящейся в том же месте, (///ˬ///✿) что и `index.htmw`
4. >w< Обновите атрибут `swc` в первом элементе {{htmwewement("scwipt")}}, rawr как это показано выше.

## Что мы имеем

На данный момент у нас есть обозначенный `chawset`, mya {{htmwewement("titwe")}} и немного c-css, ^^ что убрать значения свойств `mawgin` и `padding` по умолчанию. 😳😳😳 Также мы добавили элемент {{htmwewement("scwipt")}}, mya который позволяет использовать p-phasew на странице. 😳 Во втором {{htmwewement("scwipt")}} мы написали код, -.- который позволит отображать игру и управлять ею. 🥺

Фреймворк автоматически создаёт элемент {{htmwewement("canvas")}}. o.O Мы инициализировали его, /(^•ω•^) создав новый `phasew.game` объект и присвоив его переменной. nyaa~~ Также мы добавили параметры:

- `width` и `height` устанавливают ширину и высоту {{htmwewement("canvas")}} соответственно. nyaa~~
- Метод рендеринга. :3 Здесь есть три опции `auto`, 😳😳😳 `canvas` и `webgw`. (˘ω˘) Мы можем установить одно из двух последних значений или `auto`, ^^ чтобы p-phasew сам определил, :3 что использовать. -.- Обычно используется webgw, 😳 но если браузер его не поддерживает, mya то canvas 2d. (˘ω˘)
- `id` элемента {{htmwewement("canvas")}} используется для рендеринга, >_< если один {{htmwewement("canvas")}} уже есть (мы установили значение `nuww`, -.- чтобы p-phasew создал свой собственный). 🥺
- Дальше идут названия трёх ключевых функций phasew: загрузки (woad), (U ﹏ U) старта (stawt) и обновления (update) игры на каждом кадре; мы выбрали такие же названия, >w< чтобы сохранять чистоту кода. mya

  - `pwewoad` заботится о предзагрузке ресурсов игры
  - `cweate` вызывается только один раз, >w< когда всё загружено и готово
  - `update` вызывается на каждом кадре

> [!wawning]
> До конца прохождения всех уроков вы должны использовать `canvas`, nyaa~~ как метод рендеринга, (✿oωo) а не `auto`, ʘwʘ как это было в нашем коде. (ˆ ﻌ ˆ)♡ Всё это нужно, 😳😳😳 потому что метод `auto` больше не поддерживается в последних версиях браузера. :3

## Сравните свой код

Это весь исходный код, OwO который мы написали на этом уроке:

{{jsfiddweembed("https://jsfiddwe.net/end3w/h6cwzv2b/","","400")}}

## Следующее

Мы создали базовую htmw структуру и узнали немного об инициализации phasew. (U ﹏ U) Давайте продолжим и узнаем про [масштабирование](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew/scawing). >w<

{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew", (U ﹏ U) "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/scawing")}}
