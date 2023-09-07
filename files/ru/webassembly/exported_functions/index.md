---
title: Экспортируемые функции WebAssembly
slug: WebAssembly/Exported_functions
---

{{WebAssemblySidebar}}

Экспортированные функции WebAssembly - это функции вашего модуля доступные в JavaScript. В этой статье более подробно описывается, что они из себя представляют.

## Экспортированные… что?

Экспортированные функции это просто JavaScript обёртки, которые вызывают функции модуля WebAssembly. При их использовании происходит неявное преобразование типов аргументов функции в типы, с которыми может работать WebAssembly (например, преобразование number в int32). Дальше эти аргументы передаются функции вашего модуля и она вызывается. Результат также преобразовывается и возвращается в JavaScript.

Вы можете получить список экспортированных функций двумя способами:

- Вызовите [`Table.prototype.get()`](/ru/docs/WebAssembly/API/Table/get) у существующей таблице;
- Через [`Instance.exports`](/ru/docs/WebAssembly/API/Instance/exports) существующего экземпляра модуля.

В любом случае вы получаете одну и туже обёртку функции вашего модуля. С точки зрения JavaScript, все экспортированные функции wasm являются функциями JavaScript, но они инкапсулированы экземпляром модуля wasm, и имеют только ограниченный способ доступа к ним.

## Пример

Давайте посмотрим на пример, чтобы прояснить ситуацию (вы можете найти его на GitHub как [table-set.html](https://github.com/mdn/webassembly-examples/blob/master/other-examples/table-set.html) или [запустить в своём браузере](https://mdn.github.io/webassembly-examples/other-examples/table-set.html), и посмотреть [текстовое представление модуля wasm](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.wat)):

```js
var otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  var tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
  otherTable.set(0, tbl.get(0));
  otherTable.set(1, tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});
```

Здесь мы создаём таблицу (`otherTable`) из JavaScript используя конструктор {{jsxref("WebAssembly.Table")}}, после этого мы загружаем модуль `table.wasm` при помощи функции {{jsxref("WebAssembly.instantiateStreaming()")}}.

Затем мы получаем объект содержащий все функции, экспортированные из экземпляра модуля. Извлекаем ссылки на эти функции через `tbl.get(),` вызываем их и выводим результат работы в консоль. Затем мы используем `set()` чтобы таблица `otherTable` содержала ссылки на те же функции, что и таблица `tbl`.

Чтобы доказать это, мы получаем ссылки на функции из таблицы `otherTable` и вызываем их. При выводе в консоль они дают такие же результаты.

## Они являются настоящими функциями

В предыдущем примере возвращаемое значение каждого вызова [`Table.prototype.get()`](/ru/docs/WebAssembly/API/Table/get) является экспортированной функцией WebAssembly — это именно то, о чем мы говорили.

Стоит заметить что помимо того что они являются обёртками для функций WebAssembly, это обычные функции JavaScript. Если вы загрузите приведённый выше пример в [браузере с поддержкой WebAssembly](/ru/docs/WebAssembly#Browser_compatibility), и запустите следующие строки в консоли:

```js
var testFunc = otherTable.get(0);
typeof testFunc;
```

результатом выполнения будет `function`. Вы можете сделать с ней все тоже самое что и с другими [функциями](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function) в JavaScript — [`call()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call), `bind()` и т.д. Вызов `testFunc.toString()` возвращает интересный результат:

```js
function 0() {
    [native code]
}
```

Это наводит на мысль о том что эта функция является обёрткой.

Дополнительные сведения которые нужно знать при работе с экспортированными функциями:

- Их свойство [length](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/length) это количество аргументов указанных в сигнатуре wasm функции.
- Их свойство [name](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/name) является результатом вызова `toString()` индекса функции в модуле wasm.
- Если вы попытаетесь вызвать экспортированную функцию wasm, которая принимает или возвращает значение типа i64, то это приведёт к ошибке, поскольку в настоящее время JavaScript не имеет точного способа представления i64. Однако в дальнейшем это может измениться - новый тип int64 рассматривается для будущих стандартов, который затем может использоваться wasm.
