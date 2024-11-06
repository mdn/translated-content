---
title: "Navigator: свойство languages"
slug: Web/API/Navigator/languages
l10n:
  sourceCommit: aff5e9f8e52a8acbe74b876cbabf800776145add
---

{{APIRef("HTML DOM")}}

Доступное только для чтения свойство **`Navigator.languages`** возвращает массив строк, представляющих предпочтительные для пользователя языки. Язык представляется кодом в соответствии со стандартом {{RFC(5646, "Теги для идентификации языков (также известном как BCP 47)")}}. Возвращаемый массив отсортирован в порядке наибольшего предпочтения пользователем.

Значение {{domxref("Navigator.language","navigator.language")}} является первым элементом данного массива.

Если происходит изменение предпочтительных для пользователя языков, то вызывается событие {{domxref("Window.languagechange_event", "languagechange")}} объекта {{domxref("Window")}}.

HTTP-заголовок `Accept-Language` в каждом HTTP-запросе от браузера пользователя использует такое же значение как и в свойстве `navigator.languages`, если не считать дополнительное поле `qvalues` (значения качества), например: `en-US;q=0.8`.

## Значение

Массив строк.

## Примеры

### Вывод содержимого navigator.language и navigator.languages

```js
navigator.language; // "en-US"
navigator.languages; // ["en-US", "zh-CN", "ja-JP"]
```

### Использование конструкторов Intl для форматирования, зависящего от языка

Массив идентификаторов языка, содержащийся в `navigator.languages`, может быть передан в конструкторы {{jsxref("Intl")}}. Будет использована первая поддерживаемая `Intl` локаль из переданного списка:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.languages).format(date);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("navigator.language")}}
- {{domxref("navigator")}}
- Событие {{domxref("Window.languagechange_event", "languagechange")}}
- {{jsxref("Intl")}}
