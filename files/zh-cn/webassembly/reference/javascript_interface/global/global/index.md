---
title: WebAssembly.Global() 构造函数
slug: WebAssembly/Reference/JavaScript_interface/Global/Global
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

**`WebAssembly.Global()`** 构造函数创建一个新的表示一个全局变量实例的 `Global` 对象，可以从 JavaScript 访问，也可以从一个或多个 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 实例的导入/导出访问。这允许动态链接多个模块。

## 语法

```js-nolint
new WebAssembly.Global(descriptor, value)
```

### 参数

- `descriptor`
  - : 一个对象，包含两个属性：
    - `value`: 一个表示全局数据类型的字符串。它可以是下列值之一：
      - `i32`: 一个 32 位的整数。
      - `i64`: 一个 64 位的整数。（在 JavaScript 中，它被表示为一个 {{jsxref("BigInt")}}）
      - `f32`: 一个 32 位的浮点数。
      - `f64`: 一个 64 位的浮点数。
      - `v128`: 一个 128 位的向量。
      - `externref`: 一个宿主引用。
      - `anyfunc`: 一个函数引用。
    - `mutable`: 一个布尔值，确定全局是否可变。默认为 `false`。

- `value`
  - : 变量包含的值。它可以是任意值，只要它的类型和变量的数据类型相匹配。如果没有指定值，当 `descriptor.value` 的值是 `i32`、`i64`、`f32` 或 `f64` 其中之一时，该值为对应类型的 0，如果 `descriptor.value` 是 `externref` 或 `anyfunc` 时，该值为 `null`（由 [`DefaultValue` 算法](https://webassembly.github.io/spec/js-api/#defaultvalue)指定）。

## 示例

### 创建一个新的 Global 实例

下面的例子展示的是用 `WebAssembly.Global()` 构造函数创建一个新的 global 实例。它被定义为可变的 `i32` 类型，值为 0。

然后改变 global 的值，首先用 `Global.value` 属性设置为 `42`，然后用从 `global.wasm` 模块导出的 `incGlobal()` 函数（它将接收到的参数的值加 1 并返回）设置为 43。

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
