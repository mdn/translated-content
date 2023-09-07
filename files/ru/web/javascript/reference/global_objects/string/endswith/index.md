---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`endsWith()`** позволяет определить, заканчивается ли строка символами указанными в скобках, возвращая, соответственно, `true` или `false`.

## Синтаксис

```
str.endsWith(searchString[, length])
```

### Параметры

- `searchString`
  - : Символы, искомые в конце строки.
- `length`
  - : Необязательный параметр. Позволяет искать внутри строки, обрезая её по диапазону; по умолчанию равен длине строки.

### Возвращаемое значение

**`true`** если данные символы находятся в конце строки; в противном случае, **`false`**.

## Описание

Этот метод позволяет определять, заканчивается ли строка искомыми символами. Метод чувствителен к регистру.

## Примеры

### Пример: использование метода `endsWith()`

```js
var str = "Быть или не быть, вот в чём вопрос.";

console.log(str.endsWith("вопрос.")); // true
console.log(str.endsWith("быть")); // false
console.log(str.endsWith("быть", 16)); // true
```

## Полифил

Этот метод был добавлен к спецификации ECMAScript 6 и может быть доступен ещё не во всех реализациях JavaScript. Однако, вы можете легко эмулировать этот метод при помощи следующего кода:

```js
if (!String.prototype.endsWith) {
  Object.defineProperty(String.prototype, "endsWith", {
    value: function (searchString, position) {
      var subjectString = this.toString();
      if (position === undefined || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    },
  });
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.startsWith()")}} {{experimental_inline}}
- {{jsxref("String.prototype.contains()")}} {{experimental_inline}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
