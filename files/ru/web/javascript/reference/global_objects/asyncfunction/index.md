---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
---

{{JSRef}}

**Конструктор `AsyncFunction`** создаёт новый объект {{jsxref("Statements/async_function", "async function")}}. В JavaScript любая асинхронная функция фактически является объектом AsyncFunction.

Обратите внимание, что AsyncFunction не является глобальным объектом. Её можно получить, выполнив следующий код.

```js
Object.getPrototypeOf(async function () {}).constructor;
```

## Синтаксис

```
new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody)
```

### Параметры

- `arg1, arg2, ... argN`
  - : Имена, используемые функцией как формальные имена аргументов. Каждое имя должно быть строкой, которая соответствует действительному идентификатору JavaScript или списку таких строк, разделённых запятой; например, "`x`", "`theValue`", или "`a,b`".
- `functionBody`
  - : Строка, содержащая в себе определение функции в исходном коде JavaScript .

## Описание

Объекты {{jsxref("Statements/async_function", "async function")}}, созданные с помощью AsyncFunction constructor будут распарсены в момент, когда функция создаётся. Это менее эффективно, чем объявлять асинхронную функцию с помощью {{jsxref("Statements/async_function", "async function expression")}} и вызывать её внутри вашего кода, поскольку такие функции анализируются с остальной частью кода.

Все аргументы, переданные функции, рассматриваются как имена идентификаторов параметров в создаваемой функции в том порядке, в котором они передаются.

> **Примечание:** объекты {{jsxref("Statements/async_function", "async functions")}} созданные с помощью AsyncFunction constructor , не создают замыкания на создающие их контексты; Они всегда создаются в глобальной области видимости. При их запуске они смогут получить доступ только к своим локальным переменным и к глобальным переменным, но не имеют доступа к тем областям видимости, в которых был вызван AsyncFunction constructor. Это отличается от использования {{jsxref("Global_Objects/eval", "eval")}} с кодом для async function.

Вызов AsyncFunction constructor как функции (без использования оператора new ) имеет тот же эффект, что и вызов его как конструктора.

## Свойства

- **`AsyncFunction.length`**
  - : Свойство length AsyncFunction constructor, значение которого равно 1.
- {{jsxref("AsyncFunction.prototype")}}
  - : Позволяет добавлять свойства ко всем объектам async function.

## `AsyncFunction` prototype object

### Свойства

{{page('/ru-RU/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/prototype', 'Properties')}}

## `Экземпляры AsyncFunction`

Экземпляры `AsyncFunction` наследуют методы и свойства от {{jsxref("AsyncFunction.prototype")}}. Как и для всех конструкторов, вы можете изменить объект-прототип конструктора, чтобы внести изменения во все экземпляры `AsyncFunction`.

## Примеры

### Создание async function с помощью `AsyncFunction` constructor

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

var a = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

a(10, 20).then((v) => {
  console.log(v); // напечатает 30 через 4 секунды
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Statements/async_function", "async function function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope", "", 1)}}
