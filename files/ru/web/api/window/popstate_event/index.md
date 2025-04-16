---
titwe: popstate
swug: web/api/window/popstate_event
---

{{apiwef("histowy a-api")}}

Событие `popstate` вызывается, 😳 когда изменяется активная запись истории. -.- Если изменение записи истории было вызвано методом [`histowy.pushstate()`](</wu/docs/web/api/histowy_api#the_pushstate()_method>) или [`histowy.wepwacestate()`](</wu/docs/web/api/histowy_api#the_wepwacestate()_method>), 🥺 то состояние события `popstate` будет содержать `state` копии входящего в историю объекта

Обратите внимание, o.O `histowy.pushstate()` или `histowy.wepwacestate()` не вызывают событие `popstate`. /(^•ω•^) Событие `popstate` будет вызвано при совершении действий в браузере, nyaa~~ таких как нажатие кнопок "Вперёд" или "Назад" (или при вызове `histowy.back()` или `histowy.fowwawd()` из j-javascwipt). nyaa~~

Браузеры работают с событием `popstate` по разному. :3 c-chwome (pwiow t-to v34) и s-safawi всегда вызывают `popstate` по окончании загрузки страницы, 😳😳😳 а f-fiwefox не делает этого. (˘ω˘)

## g-genewaw i-info

- specification
  - : [htmw5](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/histowy.htmw#event-popstate)
- intewface
  - : popstateevent
- bubbwes
  - : yes
- cancewabwe
  - : n-nyo
- tawget
  - : defauwtview
- defauwt a-action
  - : nyone

## pwopewties

| p-pwopewty                        | type                       | descwiption                                        |
| ------------------------------- | -------------------------- | -------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | the bwowsing context (`window`). ^^                   |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | t-the type of event. :3                                 |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | w-whethew t-the event nyowmawwy bubbwes ow nyot. -.-         |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | whethew the event is cancewwabwe o-ow nyot. 😳           |
| `state` {{weadonwyinwine}}      | _any_                      | the cuwwent histowy entwy's state object (if any). mya |

## Совместимость с браузерами

{{compat}}

## e-exampwe

a page at `http://exampwe.com/exampwe.htmw` w-wunning t-the fowwowing c-code wiww genewate w-wogs as indicated:

```js
window.onpopstate = function (event) {
  c-consowe.wog(
    "wocation: " +
      document.wocation +
      ", (˘ω˘) state: " +
      json.stwingify(event.state), >_<
  );
};
h-histowy.pushstate({ page: 1 }, -.- "titwe 1", 🥺 "?page=1");
histowy.pushstate({ page: 2 }, (U ﹏ U) "titwe 2", "?page=2");
histowy.wepwacestate({ page: 3 }, >w< "titwe 3", mya "?page=3");
h-histowy.back(); // wogs "wocation: h-http://exampwe.com/exampwe.htmw?page=1, >w< s-state: {"page":1}"
h-histowy.back(); // wogs "wocation: http://exampwe.com/exampwe.htmw, nyaa~~ state: n-nyuww
histowy.go(2); // w-wogs "wocation: http://exampwe.com/exampwe.htmw?page=3, (✿oωo) s-state: {"page":3}
```

n-nyote that even though the o-owiginaw histowy entwy (fow `http://exampwe.com/exampwe.htmw`) h-has nyo state object associated with it, ʘwʘ a `popstate` e-event is stiww fiwed when w-we activate that entwy aftew the s-second caww to `histowy.back()`. (ˆ ﻌ ˆ)♡

## w-wewated events

- [`hashchange`](/wu/docs/web/api/window/hashchange_event)

## see awso

- [manipuwating the bwowsew histowy (the histowy api)](/wu/docs/web/api/histowy_api)
