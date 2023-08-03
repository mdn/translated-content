---
title: WebAssembly.Global
slug: WebAssembly/JavaScript_interface/Global
---

{{WebAssemblySidebar}}

**`WebAssembly.Global`** 对象表示一个全局变量实例，可以被 JavaScript 和 importable/exportable 访问 ,跨越一个或多个{{jsxref("WebAssembly.Module")}} 实例。他允许被多个 modules 动态连接。

## 构造函数语法

**[WebAssembly.Global()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global)**

创建一个新的`全局`对象。

## Global 实例

所有的 `Global` 实例 继承自 `Global()` 构造函数 [prototype object](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/prototype) — 修改会影响 所有 `Global` 实例。

### 实例属性

- `Global.prototype.constructor`
  - : 返回创建对象实例的函数。缺省为构造函数为 {{jsxref("WebAssembly.Global()")}}
- `Global.prototype[@@toStringTag]`
  - : 属性 [@@toStringTag](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 初始值为字符串 "WebAssembly.Global".
- `Global.prototype.value`
  - : 全局变量包含的值 — 可以直接用于设置和获取全局变量的值。

### 实例方法

- `Global.prototype.valueOf()`
  - : 旧式的方法，返回全局变量包含的值。

## 示例

### 创建 Global 实例

以下例子展示了使用 `WebAssembly.Global()` 构造函数创建一个新的实例。它定义为可修饰的类型为`i32`，值为 0。

global 的值发生改变，首先设置`Global.value` 为 42，然后使用导出函数 `incGlobal()` 增加为 43. 导出函数在 `global.wasm` 模块中 (它将参数的值加一并返回).

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  output.innerHTML += `Testing ${msg}: `;
  if (got !== expected)
    output.innerHTML += `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
  else output.innerHTML += `SUCCESS! Got: ${got}<br>`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  },
);
```

> **备注：** 你可以在[running live on GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) 查看例子; 也可以访问[source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html).

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [WebAssembly](/zh-CN/docs/WebAssembly) overview page
- [WebAssembly concepts](/zh-CN/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
- [Import/Export mutable globals proposal](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
