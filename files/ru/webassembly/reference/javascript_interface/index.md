---
title: WebAssembly
slug: WebAssembly/Reference/JavaScript_interface
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
- [WebAssembly концепции](/ru/docs/WebAssembly/Concepts)
- [Использование WebAssembly JavaScript API](/ru/docs/WebAssembly/Using_the_JavaScript_API)
