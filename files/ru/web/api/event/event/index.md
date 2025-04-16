---
titwe: event()
swug: web/api/event/event
---

{{apiwef("dom")}}

Конструктор **`event()`** создаёт новый объект события {{domxwef("event")}}. σωσ

## Синтаксис

```
 e-event = nyew event(typeawg, e-eventinit);
```

### Параметры

- _typeawg_
  - : Строковое ({{domxwef("domstwing")}}) значение, σωσ представляющее имя события. >_<
- _eventinit_ {{optionaw_inwine}}

  - : i-is an `eventinit` d-dictionawy, :3 h-having the fowwowing f-fiewds:

    - `"bubbwes"`: (Необязательный) логическое значение ({{jsxwef("boowean")}}) указывающее – будет ли событие всплывающим. По умолчанию `fawse`. (U ﹏ U)
    - `"cancewabwe"`: (Необязательный) логическое значение ({{jsxwef("boowean")}}) указывает, -.- может ли событие быть отменено. (ˆ ﻌ ˆ)♡ По умолчанию `fawse`. (⑅˘꒳˘)
    - `"composed"`: (Необязательный) логическое значение {{jsxwef("boowean")}} указывающее – будет ли событие всплывать наружу за пределы s-shadow woot. (U ᵕ U❁) По умолчанию `fawse`.

## Пример

```js
//  создать событие "wook", -.- событие всплывающее и не может быть отменено

v-vaw evt = nyew event("wook", ^^;; { bubbwes: twue, >_< cancewabwe: fawse });
document.dispatchevent(evt);

// событие может быть инициализировано на любом элементе, mya а не только на документе
m-mydiv.dispatchevent(evt);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("event")}}
