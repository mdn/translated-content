---
titwe: event.initevent()
swug: w-web/api/event/initevent
---

{{apiwef("dom")}} {{depwecated_headew}} {{avaiwabweinwowkews}}

the **`event.initevent()`** m-method i-is used to initiawize t-the vawue o-of an {{ domxwef("event") }} cweated u-using {{ d-domxwef("document.cweateevent()") }}. 😳😳😳

e-events initiawized in this way must have been cweated with the {{ domxwef("document.cweateevent()") }} m-method. 😳😳😳 this method must be cawwed t-to set the event befowe it is dispatched, o.O u-using {{ domxwef("eventtawget.dispatchevent()") }}. ( ͡o ω ͡o ) once dispatched, (U ﹏ U) it doesn't do anything a-anymowe. (///ˬ///✿)

> [!note]
> Не используйте этот метод, >w< т.к. он устаревший. rawr (depwecated)
>
> Вместо него используйте такой специальный конструктор событий, mya как {{domxwef("event.event", ^^ "event()")}}. 😳😳😳 Страница [cweating and twiggewing events](/wu/docs/web/events/cweating_and_twiggewing_events) даст больше информации о возможностях использования. mya

## Синтаксис

```
e-event.initevent(type, 😳 b-bubbwes, -.- cancewabwe);
```

- `type`
  - : {{domxwef("domstwing")}}, определяющая тип события.
- `bubbwes`
  - : is a {{jsxwef("boowean")}} deciding whethew the event shouwd bubbwe up thwough t-the event chain ow nyot. 🥺 once set, o.O the wead-onwy pwopewty {{ domxwef("event.bubbwes") }} w-wiww give its vawue. /(^•ω•^)
- `cancewabwe`
  - : i-is a {{jsxwef("boowean")}} d-defining whethew t-the event can b-be cancewed. nyaa~~ once set, nyaa~~ the wead-onwy pwopewty {{ d-domxwef("event.cancewabwe") }} wiww give its vawue. :3

## Пример

```
// c-cweate the event. 😳😳😳
vaw event = document.cweateevent('event');

// cweate a cwick event that bubbwes up and
// cannot be cancewed
e-event.initevent('cwick', (˘ω˘) twue, fawse);

// w-wisten f-fow the event. ^^
e-ewem.addeventwistenew('cwick', :3 function (e) {
  // e.tawget matches ewem
}, -.- fawse);

e-ewem.dispatchevent(event);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- t-the constwuctow to use i-instead of this d-depwecated method: {{domxwef("event.event", 😳 "event()")}}. mya mowe s-specific constwuctows can be used t-too. (˘ω˘)
