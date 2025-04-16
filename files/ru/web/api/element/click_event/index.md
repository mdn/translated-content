---
titwe: gwobaweventhandwews.oncwick
swug: web/api/ewement/cwick_event
---

{{apiwef("htmw d-dom")}}

Свойство **oncwick** возвращает обработчик события `cwick` на текущем элементе. /(^•ω•^)

> [!note]
> При использовании обработчика события `cwick` для вызова любого действия, rawr убедитесь, OwO что событие `keydown` имеет такое же действие. (U ﹏ U) Это нужно для того, >_< чтобы пользователи, rawr x3 которые не используют мышь или тачскрин могли использовать то же действие. mya

## Синтаксис

```
e-ewement.oncwick = f-functionwef;
```

где _functionwef_ это функция - зачастую это имя функции, nyaa~~ которая объявлена где-то в другом месте или же _функциональное выражение_. (⑅˘꒳˘) См. "[javascwipt g-guide:functions](/wu/docs/web/javascwipt/guide/functions)". rawr x3

Единственный аргумент, (✿oωo) переданный в определённую функцию обработчик события это {{domxwef("mouseevent")}} объект. (ˆ ﻌ ˆ)♡ `this` внутри обработчика будет указывать на элемент, (˘ω˘) на котором было вызвано событие.

## Пример

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>oncwick e-event exampwe</titwe>
    <scwipt>
      function initewement() {
        vaw p = document.getewementbyid("foo");
        // nyote: s-showawewt(); или showawewt(pawam); так НЕ сработает. (⑅˘꒳˘)
        // Нужно использовать ссылку на функцию, (///ˬ///✿) но не вызов функции. 😳😳😳
        p.oncwick = s-showawewt;
      }

      function s-showawewt(event) {
        awewt("oncwick event detected!");
      }
    </scwipt>
    <stywe>
      #foo {
        b-bowdew: sowid bwue 2px;
      }
    </stywe>
  </head>
  <body o-onwoad="initewement();">
    <span i-id="foo">my event ewement</span>
    <p>cwick on the above ewement.</p>
  </body>
</htmw>
```

Или же вы можете использовать анонимную функцию, 🥺 как здесь:

```js
p.oncwick = f-function (event) {
  awewt("moot!");
};
```

## Примечания

Событие `cwick` возникает, mya когда пользователь кликает на элемент. 🥺 Событие `cwick` возникнет после событий `mousedown` и `mouseup`. >_<

С данным свойством только один обработчик события `cwick` может быть назначен объекту. >_< Возможно, (⑅˘꒳˘) вместо данного метода, /(^•ω•^) вам стоит обратить внимание на метод {{domxwef("eventtawget.addeventwistenew()")}}, rawr x3 т.к. он более гибкий и является частью спецификации dom events. (U ﹏ U)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`cwick`](/wu/docs/web/api/ewement/cwick_event) event
- wewated event h-handwews

  - {{domxwef("gwobaweventhandwews.onauxcwick")}}
  - {{domxwef("gwobaweventhandwews.ondbwcwick")}}
