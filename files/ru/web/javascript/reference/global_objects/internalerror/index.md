---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}{{Non-standard_Header}}

Объект **`InternalError`** представляет ошибку, возникающую внутри движка JavaScript.

В основном такие ошибки связаны с тем, что что-то слишком велико, например:

- "too many switch cases",
- "too many parentheses in regular expression",
- "array initializer too large",
- "too much recursion".

`InternalError` является подклассом {{jsxref("Error")}}.

## Конструктор

- {{jsxref("InternalError/InternalError", "InternalError()")}} {{non-standard_inline}}
  - : Создаёт новый объект `InternalError`.

## Свойства экземпляра

_Также наследует свойства экземпляра своего родителя {{jsxref("Error")}}_.

Эти свойства определены в `InternalError.prototype` и есть у всех экземпляров `InternalError`.

- {{jsxref("Object/constructor", "InternalError.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `InternalError` начальным значением является конструктор {{jsxref("InternalError/InternalError", "InternalError")}}.
- {{jsxref("Error/name", "InternalError.prototype.name")}}
  - : Представляет название типа ошибки. Начальным значением `InternalError.prototype.name` является `"InternalError"`.

## Методы экземпляра

_Наследует методы экземпляра своего родителя {{jsxref("Error")}}_.

## Примеры

### Слишком глубокая рекурсия

Эта рекурсивная функция выполняется 10 раз в соответствии с условием выхода.

```js
function loop(x) {
  // условие выхода из функции
  if (x >= 10) return;

  // рекурсивный вызов
  loop(x + 1);
}

loop(0);
```

Установка для этого условия чрезвычайно высокого значения может не сработать:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;

  loop(x + 1);
}

loop(0);

// InternalError: too much recursion
```

Для получения дополнительной информации смотрите [InternalError: too much recursion.](/ru/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)

## Спецификации

Не является частью какого-либо стандарта.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
- [InternalError: too much recursion](/ru/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
