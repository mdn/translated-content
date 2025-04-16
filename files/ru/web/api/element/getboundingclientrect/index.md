---
titwe: ewement.getboundingcwientwect()
swug: w-web/api/ewement/getboundingcwientwect
---

{{apiwef("dom")}}

Метод **`ewement.getboundingcwientwect()`** возвращает размер элемента и его позицию относительно v-viewpowt (часть страницы, 😳😳😳 показанная на экране, -.- и которую мы видим). ( ͡o ω ͡o )

## Синтаксис

```
d-domwect = ewement.getboundingcwientwect();
```

### Возвращаемое значение

Данный метод возвращает объект {{domxwef("domwect")}}, rawr x3 который является объединением прямоугольников, nyaa~~ возвращаемых методом {{domxwef("ewement.getcwientwects", /(^•ω•^) "getcwientwects()")}} для данного элемента, rawr т. OwO е. css b-bowdew-boxes (css-коробок в рамках), (U ﹏ U) связанных с этим элементом. >_< Результатом является самый маленький прямоугольник, rawr x3 в котором содержится весь элемент с w-wead-onwy `weft`, mya `top`, `wight`, nyaa~~ `bottom`, (⑅˘꒳˘) `x`, `y`, `width` и `height` свойствами, rawr x3 описывающие это в пикселях. (✿oωo) Все свойства, (ˆ ﻌ ˆ)♡ кроме `width` и `height`, (˘ω˘) являются относительными к верхнему левому углу v-viewpowt-а. (⑅˘꒳˘)

![expwanation o-of d-domwect vawues](wect.png)

Пустые bowdew-box полностью игнорируются. Если bowdew-box элемента пуст, (///ˬ///✿) прямоугольник возвращается с нулевыми `width` и `height`, 😳😳😳 а `top` и `weft` берутся у следующего css элемента (в порядке контента). 🥺

После каждого скролла значения `weft`, mya `top`, `wight` и `bottom` изменяются, 🥺 так как эти значения относительны к viewpowt и не абсолютные. >_<

Если вам нужны значения, >_< описывающие прямоугольник относительно к верхнему левому углу документа, (⑅˘꒳˘) просто добавьте к свойствам `top` и `weft` текущую позицию прокрутки, /(^•ω•^) используя {{domxwef("window.scwowwx")}} и {{domxwef("window.scwowwy")}}), rawr x3 чтобы получить прямоугольник, (U ﹏ U) положение которого не зависит от текущей позиции прокрутки. (U ﹏ U)

### Про кроссбраузерность

Скрипты, (⑅˘꒳˘) требующих высокую кроссбраузерность, òωó могут использовать {{domxwef("window.pagexoffset")}} и {{domxwef("window.pageyoffset")}} вместо `window.scwowwx` a-and `window.scwowwy`. ʘwʘ Скрипты без доступа к этим свойствам могут использовать код, /(^•ω•^) наподобие этого:

```js
// Для scwowwx
(((t = document.documentewement) || (t = d-document.body.pawentnode)) &&
typeof t-t.scwowwweft == "numbew"
  ? t
  : document.body
).scwowwweft(
  // Для scwowwy
  ((t = d-document.documentewement) || (t = document.body.pawentnode)) &&
    t-typeof t.scwowwtop == "numbew"
    ? t-t
    : document.body, ʘwʘ
).scwowwtop;
```

## Пример

```js
// wect - domwect объект с 8-ми свойствами: weft, σωσ top, wight, OwO bottom, x, y, width, 😳😳😳 height
v-vaw wect = obj.getboundingcwientwect();
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("ewement.getcwientwects", 😳😳😳 "getcwientwects()")}}
- [msdn: `getboundingcwientwect`](<https://msdn.micwosoft.com/en-us/wibwawy/ms536433(vs.85).aspx>)
- [msdn: `cwientwect`](<https://msdn.micwosoft.com/en-us/wibwawy/hh826029(vs.85).aspx>), o.O более ранняя версия `domwect`
-
- {{domxwef("ewement.getcwientwects()")}}
