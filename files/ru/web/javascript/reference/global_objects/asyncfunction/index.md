---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Объект **`AsyncFunction`** предоставляет методы для [асинхронных функций](/ru/docs/Web/JavaScript/Reference/Statements/async_function). В JavaScript каждая асинхронная функция фактически является объектом `AsyncFunction`.

Обратите внимание, что `AsyncFunction` _не_ является глобальным объектом. Его можно получить с помощью следующего кода:

```js
const AsyncFunction = async function () {}.constructor;
```

`AsyncFunction` является подклассом {{jsxref("Function")}}.

## Конструктор

- {{jsxref("AsyncFunction/AsyncFunction", "AsyncFunction()")}}
  - : Создаёт новый объект `AsyncFunction`.

## Свойства экземпляра

_Также наследует свойства своего родителя {{jsxref("Function")}}_.

Эти свойства определены в `AsyncFunction.prototype` и есть у всех экземпляров `AsyncFunction`.

- {{jsxref("Object/constructor", "AsyncFunction.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `AsyncFunction` начальным значением является конструктор {{jsxref("AsyncFunction/AsyncFunction", "AsyncFunction")}}.
- `AsyncFunction.prototype[@@toStringTag]`
  - : Начальным значением свойства [`@@toStringTag`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) является строка `"AsyncFunction"`. Это свойство используется в {{jsxref("Object.prototype.toString()")}}.

> [!NOTE]
> Экземпляры `AsyncFunction` не имею свойства [`prototype`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype).

## Методы экземпляра

_Наследует методы своего родителя {{jsxref("Function")}}_.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`async function`](/ru/docs/Web/JavaScript/Reference/Statements/async_function)
- [Выражение `async function`](/ru/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Function")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Functions", "", 1)}}
