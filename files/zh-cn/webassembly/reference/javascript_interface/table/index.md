---
title: WebAssembly.Table
slug: WebAssembly/Reference/JavaScript_interface/Table
l10n:
  sourceCommit: a8d2b658b3c9e7a98038712f421b3c7ae2320467
---

**`WebAssembly.Table`** 是代表 WebAssembly Table 的 JavaScript 包装对象，具有类数组结构，存储了多个函数引用。在 JavaScript 或者 WebAssemble 中创建的 Table 对象可以同时被 JavaScript 或 WebAssembly 访问和更改。

> [!NOTE]
> Table 对象目前只能存储函数引用，不过在将来可能会被扩展。

## 构造函数

- [`WebAssembly.Table()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table/Table)
  - : 创建一个新的 `Table` 对象。

### 实例属性

- [`Table.prototype.length`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table/length) {{ReadOnlyInline}}
  - : 返回 Table 的长度，即元素数。

### 实例方法

- [`Table.prototype.get()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table/get)
  - : 访问器函数——获取给定索引下存储的元素。
- [`Table.prototype.grow()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table/grow)
  - : 将 Table 实例的大小增加指定数量的元素。
- [`Table.prototype.set()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table/set)
  - : 将存储在给定索引中的元素设置为给定值。

## 示例

### 创建一个新的 WebAssembly Table 实例

下面的示例（见 table2.html [源代码](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html)和[实时版本](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)）创建了一个新的 WebAssembly Table 实例，初始大小为 2 个元素。然后，我们打印出表的长度和两个索引的内容（通过 [`Table.prototype.get()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table/get) 检索），以显示长度为 2，且两个元素均为 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

```js
const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

然后，我们创建一个包含 Table 的导入对象：

```js
const importObj = {
  js: { tbl },
};
```

最后，我们使用 [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 方法加载并实例化一个 Wasm 模块（table2.wasm）。table2.wasm 模块包含两个函数（一个返回 42，另一个返回 83），并将这两个函数分别存储到导入 Table 的 0 号和 1 号元素中（参见[文本表示](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat)）。因此，在实例化之后，表的长度仍然是 2，但元素中现在包含了可调用的 [WebAssembly 导出函数](/zh-CN/docs/WebAssembly/Guides/Exported_functions)，可以通过 JS 调用这些函数。

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

请注意，必须在访问器末尾包含第二个函数调用操作符，才能实际调用引用函数并记录其中存储的值（例如，要使用 `get(0)()` 而不是 `get(0)`）。

该示例显示，我们通过 JavaScript 创建并访问 Table，但在 Wasm 实例中，同样的 Table 也是可见并可调用的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览页
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
