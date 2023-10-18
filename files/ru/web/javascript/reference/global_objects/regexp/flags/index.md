---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
---

{{JSRef("Global_Objects", "RegExp")}}

## Сводка

Свойство **`flags`** возвращает строку, состоящую из флагов текущего регулярного выражения.

## Описание

Флаги в свойстве `flags` упорядочены по алфавиту (слева направо, то есть `"gimuy"`).

## Примеры

### Пример: использование свойства `flags`

```js
/foo/gi.flags; // "gi"
/bar/muy.flags; // "muy"
```

## Полифил

```js
if (RegExp.prototype.flags === undefined) {
  Object.defineProperty(RegExp.prototype, "flags", {
    configurable: true,
    get: function () {
      return this.toString().match(/[gimuy]*$/)[0];
    },
  });
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("RegExp.prototype.source")}}
