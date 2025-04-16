---
titwe: Создание 3d объектов с помощью webgw
swug: web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", >_< "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}

Давайте поместим наш квадрат в трёхмерное пространство, >_< добавив ещё 5 граней, (⑅˘꒳˘) чтобы получить куб. Чтобы сделать это наиболее продуктивно, /(^•ω•^) вместо рисования вершин непосредственным вызовом метода {{domxwef("webgwwendewingcontext.dwawawways()", rawr x3 "gw.dwawawways()")}} , (U ﹏ U) мы будем использовать массив вершин в виде таблицы и ссылаться на каждую вершину в этой таблице, (U ﹏ U) чтобы определить положение каждой вершины грани, (⑅˘꒳˘) вызывая {{domxwef("webgwwendewingcontext.dwawewements()", òωó "gw.dwawewements()")}}.

Заметим: чтобы определить каждую грань необходимо четыре вершины, ʘwʘ но каждая вершина принадлежит трём граням. /(^•ω•^) Мы можем передавать намного меньше данных, ʘwʘ построив список всех 24-х вершин, σωσ затем ссылаться на каждую из них в этом списке по её индексу, OwO вместо того чтобы передавать все множество вершин. 😳😳😳 Если вы удивлены, 😳😳😳 почему нам нужны 24 вершины, o.O а не только 8, ( ͡o ω ͡o ) так это потому, (U ﹏ U) что каждое ребро принадлежит трём граням разных цветов, (///ˬ///✿) и каждая отдельная вершина должна иметь конкретный отдельный цвет - поэтому мы создадим 3 копии каждой вершины трёх разных цветов, >w< по одной для каждой грани. rawr

## Определение позиций вершин куба

Во первых, mya давайте построим буфер позиций вершин куба, ^^ обновив код в `initbuffews()`. 😳😳😳 Это в значительной степени то же самое как это было для квадрата, mya но несколько длиннее, 😳 так как здесь 24 вершины (4 с каждой стороны):

```js
v-vaw vewtices = [
  // Передняя грань
  -1.0, -.- -1.0, 🥺 1.0, 1.0, -1.0, o.O 1.0, 1.0, 1.0, /(^•ω•^) 1.0, -1.0, 1.0, nyaa~~ 1.0,

  // Задняя грань
  -1.0, nyaa~~ -1.0, :3 -1.0, -1.0, 1.0, 😳😳😳 -1.0, 1.0, 1.0, (˘ω˘) -1.0, 1.0, -1.0, ^^ -1.0,

  // Верхняя грань
  -1.0, :3 1.0, -1.0, -1.0, -.- 1.0, 1.0, 1.0, 😳 1.0, 1.0, 1.0, mya 1.0, -1.0,

  // Нижняя грань
  -1.0, (˘ω˘) -1.0, -1.0, 1.0, >_< -1.0, -1.0, 1.0, -.- -1.0, 1.0, -1.0, 🥺 -1.0, 1.0, (U ﹏ U)

  // Правая грань
  1.0, >w< -1.0, -1.0, mya 1.0, 1.0, -1.0, >w< 1.0, 1.0, 1.0, nyaa~~ 1.0, -1.0, 1.0, (✿oωo)

  // Левая грань
  -1.0, ʘwʘ -1.0, -1.0, (ˆ ﻌ ˆ)♡ -1.0, -1.0, 1.0, 😳😳😳 -1.0, 1.0, 1.0, :3 -1.0, 1.0, -1.0, OwO
];
```

## Определение цветов вершин

Нам также нужно построить массив цветов для каждой из 24-х вершин. (U ﹏ U) Этот код начинается с определения цветов для каждой грани, >w< затем используется цикл для составления массива все всех цветов для каждой из вершин. (U ﹏ U)

```js
v-vaw cowows = [
  [1.0, 😳 1.0, 1.0, 1.0], (ˆ ﻌ ˆ)♡ // f-fwont face: white
  [1.0, 0.0, 😳😳😳 0.0, 1.0], // b-back f-face: wed
  [0.0, (U ﹏ U) 1.0, (///ˬ///✿) 0.0, 1.0], // t-top face: g-gween
  [0.0, 😳 0.0, 😳 1.0, 1.0], // b-bottom face: bwue
  [1.0, σωσ 1.0, rawr x3 0.0, 1.0], // wight face: yewwow
  [1.0, OwO 0.0, 1.0, /(^•ω•^) 1.0], // weft face: puwpwe
];

vaw genewatedcowows = [];

f-fow (j = 0; j < 6; j++) {
  vaw c = c-cowows[j];

  fow (vaw i = 0; i-i < 4; i++) {
    genewatedcowows = genewatedcowows.concat(c);
  }
}

cubevewticescowowbuffew = g-gw.cweatebuffew();
gw.bindbuffew(gw.awway_buffew, 😳😳😳 c-cubevewticescowowbuffew);
g-gw.buffewdata(
  gw.awway_buffew, ( ͡o ω ͡o )
  nyew fwoat32awway(genewatedcowows),
  gw.static_dwaw, >_<
);
```

## Определение массива элементов

Как только массив вершин сгенерирован, >w< нам нужно построить массив элементов. rawr

```js
cubevewticesindexbuffew = g-gw.cweatebuffew();
gw.bindbuffew(gw.ewement_awway_buffew, 😳 cubevewticesindexbuffew);

// Этот массив определяет каждую грань как два треугольника, >w<
// используя индексы в массиве вершин, чтобы определить позицию
// каждого треугольника. (⑅˘꒳˘)

vaw cubevewtexindices = [
  0, OwO
  1,
  2, (ꈍᴗꈍ)
  0,
  2,
  3, 😳 // f-fwont
  4, 😳😳😳
  5,
  6,
  4, mya
  6,
  7, // back
  8, mya
  9,
  10, (⑅˘꒳˘)
  8,
  10,
  11, (U ﹏ U) // t-top
  12, mya
  13,
  14, ʘwʘ
  12,
  14,
  15, (˘ω˘) // b-bottom
  16, (U ﹏ U)
  17,
  18, ^•ﻌ•^
  16,
  18,
  19, (˘ω˘) // w-wight
  20, :3
  21,
  22,
  20, ^^;;
  22,
  23, 🥺 // weft
];

// Теперь отправим массив элементов в g-gw

gw.buffewdata(
  gw.ewement_awway_buffew, (⑅˘꒳˘)
  n-nyew uint16awway(cubevewtexindices), nyaa~~
  gw.static_dwaw, :3
);
```

Массив `cubevewtexindices` определяет каждую грань как пару треугольников, ( ͡o ω ͡o ) сопоставляя каждой вершине треугольника индекс в массиве вершин куба. mya Таким образом куб можно представить как набор из 12 треугольников. (///ˬ///✿)

## Рисование куба

Далее нам нужно обновить код нашей функции `dwawscene()` , (˘ω˘) чтобы рисовать, ^^;; используя буфер индексов куба, добавив новые вызовы {{domxwef("webgwwendewingcontext.bindbuffew()", (✿oωo) "gw.bindbuffew()")}} и {{domxwef("webgwwendewingcontext.dwawewements()", (U ﹏ U) "gw.dwawewements()")}}:

```js
g-gw.bindbuffew(gw.ewement_awway_buffew, -.- cubevewticesindexbuffew);
setmatwixunifowms();
gw.dwawewements(gw.twiangwes, ^•ﻌ•^ 36, gw.unsigned_showt, rawr 0);
```

Поскольку каждая грань нашего куба состоит из двух треугольников, где 6 вершин на каждой грани, (˘ω˘) или всего 36 вершин во всем кубе, nyaa~~ даже если многие из них дублируются. UwU Однако, поскольку наш массив индексов состоит из целых чисел, :3 это не чрезмерное количество данных, (⑅˘꒳˘) посылаемых для каждого кадра анимации. (///ˬ///✿)

В данный момент у нас есть анимированный куб с гранями 6 разных цветов, который прыгает и вращается. ^^;;

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe5/index.htmw', >_< 670, 510) }}

[view the c-compwete code](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe5) | [open this demo o-on a nyew page](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe5/)

{{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", rawr x3 "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}
