---
title: WebAssembly
slug: WebAssembly/JavaScript_interface
---

{{WebAssemblySidebar}}{{SeeCompatTable}}

Объект JavaScript **`WebAssembly`** действует как пространство имён для всего [WebAssembly](/ru/docs/WebAssembly)-связанной функциональности.

В отличие от большинства других глобальных объектов, `WebAssembly` не является конструктором (это не объект функции). Можно сравнить его с {{jsxref("Math")}}, который так же является пространством имён констант и функций, или {{jsxref("Intl")}}, который является пространством имён для конструкторов интернационализации и других языково-чувствительных функций.

## Описание

Основное использование `WebAssembly` следующее:

- Загрузка кода WebAssembly, с помощью функции {{jsxref("WebAssembly.instantiate()")}}.
- Создание новой памяти и таблицы экземпляров с помощью конструкторов {{jsxref("WebAssembly.Memory()")}}/{{jsxref("WebAssembly.Table()")}}.
- Обеспечение возможности управлять ошибками, которые появляются в WebAssembly с помощью конструкторов {{jsxref("WebAssembly.CompileError()")}}/{{jsxref("WebAssembly.LinkError()")}}/{{jsxref("WebAssembly.RuntimeError()")}}.

## Методы

- {{jsxref("WebAssembly.instantiate()")}}
  - : Основное API для компиляции и создания экземпляра кода WebAssembly, возвращающее `Module` и его первый `Instance`.
- {{jsxref("WebAssembly.compile()")}}
  - : Компилирует {{jsxref("WebAssembly.Module")}} из бинарного кода WebAssembly, оставляя создание экземпляра отдельным шагом.
- {{jsxref("WebAssembly.validate()")}}
  - : Проверяет представленный типизированный массив бинарного кода WebAssembly, возвращая в зависимости от того были ли байты кода WebAssembly валидны (`true`) или (`false`).

## Конструкторы

- {{jsxref("WebAssembly.Module()")}}
  - : Создаёт новый объект WebAssembly `Module`.
- {{jsxref("WebAssembly.Instance()")}}
  - : Создаёт новый объект WebAssembly `Instance`.
- {{jsxref("WebAssembly.Memory()")}}
  - : Создаёт новый объект WebAssembly `Memory`.
- {{jsxref("WebAssembly.Table()")}}
  - : Создаёт новый объект WebAssembly `Table`.
- {{jsxref("WebAssembly.CompileError()")}}
  - : Создаёт новый объект WebAssembly `CompileError`.
- {{jsxref("WebAssembly.LinkError()")}}
  - : Создаёт новый объект WebAssembly `LinkError`.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : Создаёт новый объект WebAssembly `RuntimeError`.

## Примеры

После загрузки некоторого байт-кода WebAssembly с помощью fetch, мы компилируем и создаём экземпляр модуля с помощью функции {{jsxref("WebAssembly.instantiate()")}}, импортируя функции JavaScript в WebAssembly Module в процессе. Этот промис результирует в объект (`result`), содержащий скомпилированные [`Module`](/ru/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module) и объекты [`Instance`](/ru/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance). Мы можем вызвать [Exported WebAssembly function](/ru/docs/WebAssembly/Exported_functions), которая была экспортирована через `Instance`.

```js
var importObject = {
  imports: {
    imported_func: function (arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((result) => result.instance.exports.exported_func());
```

> **Примечание:** Смотрите пример [index.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html) на GitHub ([view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/)), который использует наши [`fetchAndInstantiate()`](https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js#L1) библиотечные функции.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [WebAssembly](/ru/docs/WebAssembly) обзорная страница
- [WebAssembly концепции](/ru/docs/WebAssembly/Concepts)
- [Использование WebAssembly JavaScript API](/ru/docs/WebAssembly/Using_the_JavaScript_API)
