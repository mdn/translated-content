---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`startsWith()`** помогает определить, начинается ли строка с символов указанных в скобках, возвращая, соответственно, `true` или `false`.

## Синтаксис

```
str.startsWith(searchString[, position])
```

### Параметры

- `searchString`
  - : Символы, искомые в начале данной строки.
- `position`
  - : Необязательный параметр. Позиция в строке, с которой начинать поиск `searchString`; по умолчанию 0.

## Описание

Этот метод позволяет определять, начинается ли строка с указанных в скобках символов.

## Примеры

### Пример: использование метода `startsWith()`

```js
var str = "Быть или не быть, вот в чём вопрос.";

console.log(str.startsWith("Быть")); // true
console.log(str.startsWith("не быть")); // false
console.log(str.startsWith("не быть", 9)); // true
```

## Полифил

Этот метод был добавлен к спецификации ECMAScript 6 и может быть доступен ещё не во всех реализациях JavaScript. Однако, вы можете легко эмулировать этот метод при помощи следующего кода:

```js
if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, "startsWith", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function (searchString, position) {
      position = position || 0;
      return this.indexOf(searchString, position) === position;
    },
  });
}
```

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.endsWith()")}} {{experimental_inline}}
- {{jsxref("String.prototype.includes()")}} {{experimental_inline}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
