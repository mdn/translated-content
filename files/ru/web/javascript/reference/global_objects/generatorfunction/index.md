---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Объект **`GeneratorFunction`** предоставляет методы для работы с [функциями-генераторами](/ru/docs/Web/JavaScript/Reference/Statements/function*). В JavaScript каждая функция-генератор фактически является объектом `GeneratorFunction`.

Обратите внимание, `GeneratorFunction` _не_ является глобальным объектом. Он может быть получен следующим образом:

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction` является подклассом {{jsxref("Function")}}.

{{EmbedInteractiveExample("pages/js/functionasterisk-function.html", "taller")}}

## Конструктор

- {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction()")}}
  - : Создаёт новый объект `GeneratorFunction`.

## Свойства экземпляра

_Также наследует свойства своего родителя {{jsxref("Function")}}_.

Эти свойства определены в `GeneratorFunction.prototype` и есть у всех экземпляров `GeneratorFunction`.

- {{jsxref("Object/constructor", "GeneratorFunction.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `GeneratorFunction` начальным значением является конструктор {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction")}}.
- `GeneratorFunction.prototype.prototype`
  - : Все функции-генераторы имеют доступ к общему свойству [`prototype`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype), значением которого является [`Generator.prototype`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Generator). Каждый экземпляр функции-генератора также имеет собственное свойство `prototype`. При вызове функции-генератора возвращается объект генератора, наследуемый от свойства `prototype` функции-генератора, которая в свою очередь наследуется от `GeneratorFunction.prototype.prototype`.
- `GeneratorFunction.prototype[@@toStringTag]`
  - : Начальным значением свойства [`@@toStringTag`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) является строка `"GeneratorFunction"`. Это свойство используется в {{jsxref("Object.prototype.toString()")}}.

## Методы экземпляра

_Наследует методы своего родителя {{jsxref("Function")}}_.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`function*`](/ru/docs/Web/JavaScript/Reference/Statements/function*)
- [выражение `function*`](/ru/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Functions", "Functions", "", 1)}}
