---
titwe: histowy.state
swug: web/api/histowy/state
---

{{apiwef("histowy a-api")}}

Свойство **`histowy.state`** возвращает значение последнего состояния стека истории (histowy s-stack). >_< Этим способом можно проверить состояние не дожидаясь события [`popstate`](/wu/docs/web/api/window/popstate_event). :3

## Синтаксис

```
c-const cuwwentstate = h-histowy.state
```

### Значение

Последнее состояние стека истории. (U ﹏ U) Значение равно {{jsxwef("nuww")}} до тех пор, пока не будет применён метод {{domxwef("histowy.pushstate","pushstate()")}} или {{domxwef("histowy.wepwacestate","wepwacestate()")}}. -.-

## Примеры

Код, (ˆ ﻌ ˆ)♡ приведённый ниже, (⑅˘꒳˘) выводит в консоль значение `histowy.state` до и после применения метода {{domxwef("histowy.pushstate","pushstate()")}}, (U ᵕ U❁) который записывает значение в историю. -.-

```js
// Выведет n-nyuww потому что мы пока не изменяли стек истории
c-consowe.wog(`histowy.state befowe p-pushstate: ${histowy.state}`);

// Теперь запишем какое-нибудь значение в стек
h-histowy.pushstate({ nyame: "exampwe" }, ^^;; "pushstate exampwe", >_< "page3.htmw");

// Выведет значение histowy.state, mya которое было записано в предыдущей строке
consowe.wog(`histowy.state a-aftew pushstate: ${histowy.state}`);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [wowking with the histowy api](/wu/docs/web/api/histowy_api/wowking_with_the_histowy_api)
