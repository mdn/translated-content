---
title: WebAssembly.Table
slug: WebAssembly/JavaScript_interface/Table
---

{{WebAssemblySidebar}}

Объект **`WebAssembly.Table()`** - это JavaScript обёртка — структура похожая на массив, представляющая таблицу функций WebAssembly. Таблица, созданная через JavaScript или в коде WebAssembly, будет доступна и может быть изменена как из JavaScript, так и из WebAssembly.

> **Примечание:** Таблицы сейчас хранят только ссылки на функции, но это может быть расширено в будущем.

## Конструктор

- [`WebAssembly.Table()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table)
  - : Создаёт новый объект `Table`.

## Экземпляры `Table`

Все экземпляры `Table` наследуются от [прототипа конструктора](/ru/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/prototype) `Table()`, следовательно изменения прототипа затронут все экземпляры `Table`.

### Свойства экземпляра

- `Table.prototype.constructor`
  - : Возвращает функцию которая создала этот объект. По умолчанию это конструктор {{jsxref("WebAssembly.Table()")}}.
- {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}
  - : Возвращает длину таблицы (количество элементов в таблице).

### Instance methods

- {{jsxref("WebAssembly/Table/get","Table.prototype.get(index)")}}
  - : Возвращает указанное значение из таблицы.
- {{jsxref("WebAssembly/Table/grow","Table.prototype.grow(count)")}}
  - : Увеличивает размер таблицы на указанное количество элементов.
- {{jsxref("WebAssembly/Table/set","Table.prototype.set(index, value)")}}
  - : Сохраняет указанное значение в таблицу под указанным индексом.

## Примеры

Следующий пример (смотри [исходный код](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html) и [живую версию](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html) table2.html) создаёт новый экземпляр WebAssembly Table с 2 элементами. После этого выводит длину таблицы и содержимое первых двух элементов (полученных через {{jsxref("WebAssembly/Table/get", "Table.prototype.get()")}} чтобы показать что длина равняется 2 и элементы равны {{jsxref("null")}}.

```js
var tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

После этого мы создаём объект импорта содержащий таблицу:

```js
var importObj = {
  js: {
    tbl: tbl,
  },
};
```

После этого, мы создаём экземпляр модуля wasm (table2.wasm) используя метод {{jsxref("WebAssembly.instantiateStreaming()")}}. Модуль table2.wasm содержит две функции, одна возвращает 42, а вторая - 83) и сохраняет эти функции под индексами 0 и 1 в импортированную таблицу (смотри [текстовую версию](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat)). Таким образом, после создания wasm-модуля, таблица имеет туже длину, но элементы таблицы стали [функциями экспортированными из WebAssembly](/ru/docs/WebAssembly/Exported_functions) которые можно вызывать из JS.

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  function (obj) {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Заметьте что понадобилось добавить второй оператор вызова функции чтобы вызвать функцию возвращённую из талицы (т.е. `get(0)()` вместо `get(0)`) .

Этот пример показывает что мы создаём и работаем с таблицей из JavaScript, но экземпляр таблицы также виден и доступен внутри модуля wasm.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Обзор [WebAssembly](/ru/docs/WebAssembly)
- [Концепция WebAssembly](/ru/docs/WebAssembly/Concepts)
- [Использование JavaScript API WebAssembly](/ru/docs/WebAssembly/Using_the_JavaScript_API)
