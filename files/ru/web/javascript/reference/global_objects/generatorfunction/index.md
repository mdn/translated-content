---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
---

{{JSRef}}

**`GeneratorFunction` constructor** создаёт новый {{jsxref("Statements/function*", "generator function")}} объект. В JavaScript каждая функция-генератор - это фактически `GeneratorFunction` объект.

`Обратите внимание, что GeneratorFunction` - это не глобальный объект. Он может быть получен при выполнении следующего кода.

```js
Object.getPrototypeOf(function* () {}).constructor;
```

## Синтаксис

```
new GeneratorFunction ([arg1[, arg2[, ...argN]],] functionBody)
```

### Параметры

- `arg1, arg2, ... argN`
  - : Имена, используемые функцией как имена формальных аргументов. Каждый должен быть строкой, которая соответствует правильному JavaScript идентификатору или списком таких строк, разделённых запятыми; например "`x`", "`theValue`", или "`a,b`".
- `functionBody`
  - : A string containing the JavaScript statements comprising the function definition.

## Description

{{jsxref("Statements/function*", "generator function")}} objects created with the `GeneratorFunction` constructor are parsed when the function is created. This is less efficient than declaring a generator function with a {{jsxref("Statements/function*", "function* expression")}} and calling it within your code, because such functions are parsed with the rest of the code.

All arguments passed to the function are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed.

> **Примечание:** {{jsxref("Statements/function*", "generator function")}} created with the `GeneratorFunction` constructor do not create closures to their creation contexts; they always are created in the global scope. When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the `GeneratorFunction` constructor was called. This is different from using {{jsxref("Global_Objects/eval", "eval")}} with code for a generator function expression.

Invoking the `GeneratorFunction` constructor as a function (without using the `new` operator) has the same effect as invoking it as a constructor.

## Properties

- **`GeneratorFunction.length`**
  - : The `GeneratorFunction` constructor's length property whose value is 1.
- {{jsxref("GeneratorFunction.prototype")}}
  - : Allows the addition of properties to all generator function objects.

## `GeneratorFunction` prototype object

### Properties

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype', 'Properties')}}

## `GeneratorFunction` instances

`GeneratorFunction` instances inherit methods and properties from {{jsxref("GeneratorFunction.prototype")}}. As with all constructors, you can change the constructor's prototype object to make changes to all `GeneratorFunction` instances.

## Examples

### Creating a generator function from a `GeneratorFunction` constructor

```js
var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
var g = new GeneratorFunction("a", "yield a * 2");
var iterator = g(10);
console.log(iterator.next().value); // 20
```

## Specifications

| Specification                                                                  | Status               | Comment             |
| ------------------------------------------------------------------------------ | -------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-generatorfunction-objects', 'GeneratorFunction')}}  | {{Spec2('ES2015')}}  | Initial definition. |
| {{SpecName('ESDraft', '#sec-generatorfunction-objects', 'GeneratorFunction')}} | {{Spec2('ESDraft')}} |                     |

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function* function")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope", "", 1)}}
