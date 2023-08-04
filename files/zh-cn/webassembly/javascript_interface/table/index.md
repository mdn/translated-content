---
title: WebAssembly.Table()
slug: WebAssembly/JavaScript_interface/Table
---

{{WebAssemblySidebar}}

**`WebAssembly.Table()`** 构造函数根据给定的大小和元素类型创建一个 Table 对象。

这是一个包装了 WebAssemble Table 的 Javascript 包装对象，具有类数组结构，存储了多个函数引用。在 Javascript 或者 WebAssemble 中创建 Table 对象可以同时被 Javascript 或 WebAssemble 访问和更改。

> **备注：** Tables 对象目前只能存储函数引用，不过在将来可能会被扩展。

## 语法

```plain
var myTable = new WebAssembly.Table(tableDescriptor);
```

### 参数

- _tableDescriptor_

  - : 该对象具有以下属性：

    - _element_
      - : 一个表明储存在该 Table 中对象的类型。目前只能是： `"anyfunc"` (函数)。
    - _initial_
      - : 该 WebAssembly Table 初始大小。
    - _maximum_ {{optional_inline}}
      - : 该 WebAssembly Table 允许扩展到的最大大小。

### 异常

- 如果 `tableDescriptor` 不是对象类型，将会抛出 {{jsxref("TypeError")}} 异常。
- 如果申明了 `maximum` 属性并且比 `initial` 小，将会抛出 {{jsxref("RangeError")}} 异常。

## `Table` Instance

所有`Table`实例都继承自`Table()`构造函数的[原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/prototype)-可以对其进行修改以影响所有`Table`实例。

### Instance 属性

- `Table.prototype.constructor`
  - : 返回创建该对象实例的函数。默认情况下，这是{{jsxref("WebAssembly.Table()")}} 的构造函数。
- {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}
  - : 返回 Table 的长度，即元素数。

### Instance methods

- {{jsxref("WebAssembly/Table/get","Table.prototype.get()")}}
  - : Accessor function — gets the element stored at a given index.
- {{jsxref("WebAssembly/Table/grow","Table.prototype.grow()")}}
  - : Increases the size of the Table instance by a specified number of elements.
- {{jsxref("WebAssembly/Table/set","Table.prototype.set()")}}
  - : Sets an element stored at a given index to a given value.

## 示例

The following example (see table2.html [source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html) and [live version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) creates a new WebAssembly Table instance with an initial size of 2 elements. We then print out the table length and contents of the two indexes (retrieved via {{jsxref("WebAssembly/Table/get", "Table.prototype.get()")}} to show that the length is two and both elements are {{jsxref("null")}}.

```js
var tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

We then create an import object that contains the table:

```js
var importObj = {
  js: {
    tbl: tbl,
  },
};
```

Finally, we load and instantiate a wasm module (table2.wasm) using the {{jsxref("WebAssembly.instantiateStreaming()")}} method. The table2.wasm module contains two functions (one that returns 42 and another that returns 83) and stores both into elements 0 and 1 of the imported table (see [text representation](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat)). So after instantiation, the table still has length 2, but the elements now contain callable [Exported WebAssembly Functions](/zh-CN/docs/WebAssembly/Exported_functions) which we can call from JS.

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  function (obj) {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Note how you've got to include a second function invocation operator at the end of the accessor to actually invoke the referenced function and log the value stored inside it (e.g. `get(0)()` rather than `get(0)`) .

This example shows that we're creating and accessing the table from JavaScript, but the same table is visible and callable inside the wasm instance too.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [WebAssembly](/zh-CN/docs/WebAssembly) overview page
- [WebAssembly concepts](/zh-CN/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
