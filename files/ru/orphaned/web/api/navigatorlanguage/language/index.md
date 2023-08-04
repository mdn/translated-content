---
title: NavigatorLanguage.language
slug: orphaned/Web/API/NavigatorLanguage/language
---

{{ APIRef("HTML DOM") }}

Свойство **`NavigatorLanguage.language`** только для чтения, оно возвращает строку, представляющую предпочитаемый пользователем язык, как правило это язык пользовательского интерфейса браузера.

## Синтаксис

```
lang = globalObj.navigator.language
```

### Значение

Строка представляющая версию языка которая определена в [RFC 4646](http://tools.ietf.org/html/rfc4646). Примеры валидных языковых кодов включают "en", "EN-US", "FR", "es-ES" и т.д.

## Пример

```js
if ( window.navigator.language.slice(0, 2) !== "en" ) {
 doLangSelect(window.navigator.language);
}
```

## Спецификации

{{Specifications}}

## Доступность в браузерах

{{Compat("api.NavigatorLanguage.language")}}

## Смотрите также

- {{domxref("NavigatorLanguage.languages","navigator.languages")}}
- {{domxref("navigator")}}
