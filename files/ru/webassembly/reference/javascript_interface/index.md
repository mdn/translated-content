---
title: WebAssembly
slug: WebAssembly/Reference/JavaScript_interface
---

{{WebAssemblySidebar}}{{SeeCompatTable}}

Объект JavaScript **`WebAssembly`** действует как пространство имён для всего [WebAssembly](/ru/docs/WebAssembly)-связанной функциональности.

В отличие от большинства других глобальных объектов, `WebAssembly` не является конструктором (это не объект функции). Можно сравнить его с {{jsxref("Math")}}, который так же является пространством имён констант и функций, или {{jsxref("Intl")}}, который является пространством имён для конструкторов интернационализации и других языково-чувствительных функций.

## Описание

Основное использование `WebAssembly` следующее:

- Загрузка кода WebAssembly, с помощью функции [`WebAssembly.instantiate()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/instantiate).
- Создание новой памяти и таблицы экземпляров с помощью конструкторов [`WebAssembly.Memory()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/Table).
- Обеспечение возможности управлять ошибками, которые появляются в WebAssembly с помощью конструкторов [`WebAssembly.CompileError()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError).

## Методы

- [`WebAssembly.instantiate()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/instantiate)
  - : Основное API для компиляции и создания экземпляра кода WebAssembly, возвращающее `Module` и его первый `Instance`.
- [`WebAssembly.compile()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/compile)
  - : Компилирует [`WebAssembly.Module`](/ru/docs/WebAssembly/Reference/JavaScript_interface/Module) из бинарного кода WebAssembly, оставляя создание экземпляра отдельным шагом.
- [`WebAssembly.validate()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/validate)
  - : Проверяет представленный типизированный массив бинарного кода WebAssembly, возвращая в зависимости от того были ли байты кода WebAssembly валидны (`true`) или (`false`).

## Конструкторы

- [`WebAssembly.Module()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Создаёт новый объект WebAssembly `Module`.
- [`WebAssembly.Instance()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Создаёт новый объект WebAssembly `Instance`.
- [`WebAssembly.Memory()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Создаёт новый объект WebAssembly `Memory`.
- [`WebAssembly.Table()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Создаёт новый объект WebAssembly `Table`.
- [`WebAssembly.CompileError()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Создаёт новый объект WebAssembly `CompileError`.
- [`WebAssembly.LinkError()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Создаёт новый объект WebAssembly `LinkError`.
- [`WebAssembly.RuntimeError()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Создаёт новый объект WebAssembly `RuntimeError`.

## Примеры

Смотрите пример [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) на GitHub ([демо](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)).

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Потом осуществляется доступ к свойству `.instance` объекта `ResultObject` и вызывается содержащаяся в нём экспортированная функция.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebAssembly](/ru/docs/WebAssembly) обзорная страница
- [WebAssembly концепции](/ru/docs/WebAssembly/Guides/Concepts)
- [Использование WebAssembly JavaScript API](/ru/docs/WebAssembly/Guides/Using_the_JavaScript_API)
