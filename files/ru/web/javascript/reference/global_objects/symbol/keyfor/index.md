---
title: Symbol.keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
---

{{JSRef}}Метод **`Symbol.keyFor(sym)`** получает ключ для заданного символа из глобального реестра символов.

{{InteractiveExample("JavaScript Demo: Symbol.keyFor()")}}

```js interactive-example
const globalSym = Symbol.for("foo"); // Global symbol

console.log(Symbol.keyFor(globalSym));
// Expected output: "foo"

const localSym = Symbol(); // Local symbol

console.log(Symbol.keyFor(localSym));
// Expected output: undefined

console.log(Symbol.keyFor(Symbol.iterator));
// Expected output: undefined
```

## Синтаксис

```
Symbol.keyFor(sym);
```

### Параметры

- sym
  - : Символ, обязательный. Символ, ключ которого требуется найти

### Возвращаемое значение

Строка с ключом заданного символа, если он есть в глобальном реестре символов, либо {{jsxref("undefined")}}, если его там нет.

## Примеры

```js
var globalSym = Symbol.for("foo"); // Создаёт новый глобальный символ
Symbol.keyFor(globalSym); // "foo"

var localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// Известные символы не является символами,
// которые находятся в глобальном реестре символов
Symbol.keyFor(Symbol.iterator); // undefined
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Symbol.for()")}}
