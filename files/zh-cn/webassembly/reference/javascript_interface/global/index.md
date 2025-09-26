---
title: WebAssembly.Global
slug: WebAssembly/Reference/JavaScript_interface/Global
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

**`WebAssembly.Global`** 对象表示一个全局变量实例，可以在 JavaScript 中访问，也可以在 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 实例之间导入/导出。这允许动态链接多个模块。

## 构造函数

- [`WebAssembly.Global()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Global/Global)
  - : 创建一个新的 `Global` 对象。

## Global 实例

所有的 `Global` 实例继承自 `Global()` 构造函数的原型对象——修改它会影响所有的 `Global` 实例。

### 实例属性

- `Global.prototype.constructor`
  - : 返回创建这个对象的实例的函数。默认是 [`WebAssembly.Global()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Global/Global) 构造函数。
- `Global.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值为字符串值“WebAssembly.Global”。
- `Global.prototype.value`
  - : 全局变量包含的值——可以直接用于设置和获取全局变量的值。

### 实例方法

- `Global.prototype.valueOf()`
  - : 旧式的方法，返回全局变量包含的值。

## 示例

### 创建一个新的 Global 实例

下面的例子展示的是用 `WebAssembly.Global()` 构造函数创建一个新的 global 实例。它被定义为可变的 `i32` 类型，值为 0。

然后改变 global 的值，首先用 `Global.value` 属性设置为 `42`，然后用从 `global.wasm` 模块导出的 `incGlobal()` 函数设置为 43（它将接收到的参数的值加 1 并返回）。

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `成功！获得：${got}\n`
      : `失败！\n获得：${got}\n期望的是：${expected}\n`;
  output.innerText += `测试${msg}：${result}`;
}

assertEq("WebAssembly.Global 存在", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq("从 wasm 获取初始值", instance.exports.getGlobal(), 0);
    global.value = 42;
    assertEq("从 wasm 获取用 JS 更新的值", instance.exports.getGlobal(), 42);
    instance.exports.incGlobal();
    assertEq("从 JS 获取用 wasm 更新的值", global.value, 43);
  },
);
```

> [!NOTE]
> 你可以查看[在 GitHub 上实时运行的](https://mdn.github.io/webassembly-examples/js-api-examples/global.html)示例；也可以查看[源代码](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [导入/导出可变的全局变量提案](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
