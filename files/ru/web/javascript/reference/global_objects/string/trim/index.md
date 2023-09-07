---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`trim()`** удаляет пробельные символы с начала и конца строки. Пробельными символами в этом контексте считаются все собственно пробельные символы (пробел, табуляция, неразрывный пробел и прочие) и все символы конца строки (LF, CR и прочие).

## Синтаксис

```
str.trim()
```

## Описание

Метод `trim()` возвращает строку с вырезанными пробельными символами с её концов. Метод `trim()` не изменяет значение самой строки.

## Примеры

### Пример: использование метода `trim()`

Следующий пример покажет строку `'foo'`:

```js
var orig = "   foo  ";
console.log(orig.trim()); // 'foo'

// Другой пример, в котором .trim() убирает пробельные символы только с одной стороны.

var orig = "foo    ";
console.log(orig.trim()); // 'foo'
```

## Полифил

Запуск следующего кода до любого другого создаст метод `trim()`, если он ещё не реализуется браузером.

```js
if (!String.prototype.trim) {
  (function () {
    // Вырезаем BOM и неразрывный пробел
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };
  })();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.trimLeft()")}} {{non-standard_inline}}
- {{jsxref("String.prototype.trimRight()")}} {{non-standard_inline}}
