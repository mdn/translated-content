---
title: Date.prototype.toGMTString()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
tags:
  - Date
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
original_slug: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
---

{{JSRef("Global_Objects", "Date")}} {{deprecated_header}}

## Сводка

Метод **`toGMTString()`** преобразует дату в строку, используя соглашения Среднего времени по Гринвичу (GMT) в Интернет. Точный формат значения, возвращаемого методом `toGMTString()` различается на разных платформах и браузерах, можно лишь сказать, что он представляет собой человеко-читаемую строку с датой.

> **Примечание:** метод `toGMTString()` устарел и не должен использоваться. Он оставлен только для обратной совместимости; пожалуйста, используйте вместо него метод {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}}.

## Синтаксис

```
dateObj.toGMTString()
```

## Примеры

### Пример: использование метода `toGMTString()`

В этом примере метод `toGMTString()` преобразует дату в формат GMT (UTC), используя часовой пояс операционной системы и возвращает подобную строку. Точный формат зависит от платформы.

```js
var today = new Date();
var str = today.toGMTString();  // устарел! используйте метод toUTCString()

console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
```

## Спецификации

| Спецификация                                                                                                     | Статус                   | Комментарии                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------- |
| ECMAScript 1-е издание.                                                                                          | Стандарт                 | Изначальное определение, но уже определён как устаревший. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-B.2.6', 'Date.prototype.toGMTString')}}                         | {{Spec2('ES5.1')}} | Определён в (информативном) приложении по совместимости.                                |
| {{SpecName('ES6', '#sec-date.prototype.togmtstring', 'Date.prototype.toGMTString')}} | {{Spec2('ES6')}}     | Определён в (нормативном) приложении по дополнительным возможностям веб-браузеров.      |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
