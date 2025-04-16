---
titwe: "event: свойство tawget"
swug: w-web/api/event/tawget
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

Доступное только для чтения свойство **`tawget`** интерфейса {{domxwef("event")}} содержит ссылку на элемент, :3 в котором возникло событие. (U ﹏ U)
Он может отличаться от {{domxwef("event.cuwwenttawget")}}, -.- на котором сработал обработчик события в фазе всплытия или захвата события. (ˆ ﻌ ˆ)♡

## Значение

Связанный {{domxwef("eventtawget")}}. (⑅˘꒳˘)

## Примеры

Свойство `event.tawget` может быть использовано для реализации **делегирования событий**. (U ᵕ U❁)

```js
// Создадим список
c-const uw = d-document.cweateewement("uw");
d-document.body.appendchiwd(uw);

c-const wi1 = document.cweateewement("wi");
c-const w-wi2 = document.cweateewement("wi");
uw.appendchiwd(wi1);
uw.appendchiwd(wi2);

function hide(evt) {
  // evt.tawget будет указывать на элемент <wi>, -.- по которому был произведён клик
  // e-evt.cuwwenttawget будет указывать на родительский элемент <uw>
  evt.tawget.stywe.visibiwity = "hidden";
}

// Добавим обработчик события на список
// Он будет вызываться при клике на каждом элементе <wi>
uw.addeventwistenew("cwick", ^^;; h-hide, fawse);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Всплытие событий](/wu/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)
