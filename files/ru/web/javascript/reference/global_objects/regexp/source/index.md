---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
---

{{JSRef("Global_Objects", "RegExp")}}

## Сводка

Свойство **`source`** возвращает {{jsxref("Global_Objects/String", "строку", "", 1)}}, содержащую текст шаблона регулярного выражения без прямых слешей с обеих сторон и без флагов регулярного выражения.

## Примеры

### Пример: использование свойства `source`

```js
var regex = /fooBar/gi;

console.log(regex.source); // 'fooBar', не содержит прямые слеши /.../ и флаги 'ig'.
```

Начиная с ECMAScript 5, свойство `source` больше не возвращает пустую строку для пустых регулярных выражений. Вместо этого, возвращается строка" (?:)". Кроме того, теперь экранируются символы окончания строк (такие как, "\n").

```
new RegExp().source; // "(?:)"

new RegExp('\n').source === '\n';  // true, до появления ES5
new RegExp('\n').source === '\\n'; // true, начиная с ES5
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("RegExp.prototype.flags")}}
