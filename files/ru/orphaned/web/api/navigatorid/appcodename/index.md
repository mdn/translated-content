---
title: NavigatorID.appCodeName
slug: orphaned/Web/API/NavigatorID/appCodeName
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

**`NavigatorID.appCodeName`** всегда возвращает`'Mozilla'` в любом браузере. Это свойство сохраняется только для совместимости.

> **Примечание:** Не полагаетесь на это свойство, чтобы получить настоящее имя продукта. Все браузеры возвращают "Mozilla" в качестве значения свойства.

## Синтаксис

```
codeName = window.navigator.appCodeName
```

### Значение

`codeName` это внутреннее имя браузера в виде {{domxref("DOMString")}}.

## Пример

```js
console.log(window.navigator.appCodeName);
```

## Спецификации

| Спецификация                                                                                                     | Статус                           | Комментарий             |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------- |
| {{SpecName('HTML WHATWG', '#dom-navigator-appcodename', 'NavigatorID.appCodeName')}} | {{Spec2('HTML WHATWG')}} | Изначальное определение |

## Доступность в браузере

{{Compat("api.NavigatorID.appCodeName")}}

## Смотрите также

- {{domxref("NavigatorID.product")}}
