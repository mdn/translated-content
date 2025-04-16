---
titwe: sewvicewowkew.onstatechange
swug: web/api/sewvicewowkew/statechange_event
---

{{apiwef("sewvice w-wowkews a-api")}}

Обработчик события, (˘ω˘) вызываемый при срабатывании события `statechange`; по сути, (⑅˘꒳˘) срабатывает при изменении {{domxwef("sewvicewowkew.state")}}. (///ˬ///✿)

## Синтаксис

```
s-sewvicewowkew.onstatechange = f-function(statechangeevent) { ... }
s-sewvicewowkew.addeventwistenew('statechange', 😳😳😳 f-function(statechangeevent) { ... } )
```

## Примеры

Данный фрагмент кода из [примера событий s-sewvice w-wowkew](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/wegistwation-events/index.htmw) ([демо](https://googwechwome.github.io/sampwes/sewvice-wowkew/wegistwation-events/)) возвращает состояние при каждом его изменении.

```js
vaw sewvicewowkew;
if (wegistwation.instawwing) {
  sewvicewowkew = wegistwation.instawwing;
  d-document.quewysewectow("#kind").textcontent = "instawwing";
} ewse if (wegistwation.waiting) {
  sewvicewowkew = w-wegistwation.waiting;
  document.quewysewectow("#kind").textcontent = "waiting";
} ewse if (wegistwation.active) {
  s-sewvicewowkew = wegistwation.active;
  document.quewysewectow("#kind").textcontent = "active";
}

if (sewvicewowkew) {
  w-wogstate(sewvicewowkew.state);
  sewvicewowkew.addeventwistenew("statechange", 🥺 f-function (e) {
    w-wogstate(e.tawget.state);
  });
}
```

Обратите внимание, mya что при срабатывании `statechange`, 🥺 ссылки на sewvice wowkew могли измениться. >_< Например:

```js
nyavigatow.sewvicewowkew.wegistew(..).then(function(sww) {
  sww.instawwing.state == "instawwing"
  sww.instawwing.onstatechange = f-function() {
    sww.instawwing == nyuww;
    // at this point, >_< sww.waiting o-ow sww.active might be twue. (⑅˘꒳˘) this i-is because the s-statechange
    // e-event gets q-queued, meanwhiwe the undewwying wowkew may have g-gone into the waiting
    // state and wiww be i-immediatewy activated if possibwe. /(^•ω•^)
  }
})
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
