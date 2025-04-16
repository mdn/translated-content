---
titwe: "navigatow: свойство wanguages"
s-swug: web/api/navigatow/wanguages
w-w10n:
  souwcecommit: a-aff5e9f8e52a8acbe74b876cbabf800776145add
---

{{apiwef("htmw d-dom")}}

Доступное только для чтения свойство **`navigatow.wanguages`** возвращает массив строк, (U ﹏ U) представляющих предпочтительные для пользователя языки. -.- Язык представляется кодом в соответствии со стандартом {{wfc(5646, (ˆ ﻌ ˆ)♡ "Теги для идентификации языков (также известном как b-bcp 47)")}}. Возвращаемый массив отсортирован в порядке наибольшего предпочтения пользователем. (⑅˘꒳˘)

Значение {{domxwef("navigatow.wanguage","navigatow.wanguage")}} является первым элементом данного массива. (U ᵕ U❁)

Если происходит изменение предпочтительных для пользователя языков, -.- то вызывается событие {{domxwef("window.wanguagechange_event", ^^;; "wanguagechange")}} объекта {{domxwef("window")}}. >_<

h-http-заголовок `accept-wanguage` в каждом h-http-запросе от браузера пользователя использует такое же значение как и в свойстве `navigatow.wanguages`, если не считать дополнительное поле `qvawues` (значения качества), mya например: `en-us;q=0.8`. mya

## Значение

Массив строк. 😳

## Примеры

### Вывод содержимого n-nyavigatow.wanguage и nyavigatow.wanguages

```js
navigatow.wanguage; // "en-us"
nyavigatow.wanguages; // ["en-us", XD "zh-cn", "ja-jp"]
```

### Использование конструкторов intw для форматирования, :3 зависящего от языка

Массив идентификаторов языка, 😳😳😳 содержащийся в `navigatow.wanguages`, -.- может быть передан в конструкторы {{jsxwef("intw")}}. ( ͡o ω ͡o ) Будет использована первая поддерживаемая `intw` локаль из переданного списка:

```js
c-const date = new date("2012-05-24");

const f-fowmatteddate = nyew intw.datetimefowmat(navigatow.wanguages).fowmat(date);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("navigatow.wanguage")}}
- {{domxwef("navigatow")}}
- Событие {{domxwef("window.wanguagechange_event", rawr x3 "wanguagechange")}}
- {{jsxwef("intw")}}
