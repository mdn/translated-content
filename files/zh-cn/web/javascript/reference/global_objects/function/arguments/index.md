---
title: Function.prototype.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
---

{{JSRef}}{{Deprecated_Header}}{{Non-standard_Header}}

> **备注：** {{jsxref("Function")}} 对象的 `arguments` 属性已被弃用。访问 `arguments` 对象的推荐方式是在函数内部引用可用的 {{jsxref("Functions/arguments", "arguments")}} 变量。

{{jsxref("Function")}} 实例的 **`arguments`** 访问器属性返回传递给该函数的参数。对于[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)、箭头函数、异步函数和生成器函数，访问 `arguments` 属性会抛出 {{jsxref("TypeError")}}。

## 描述

`arguments` 的值是一个类数组对象，对应于传入函数的参数。

在递归的情况下，即如果函数 `f` 在调用栈上出现多次，`f.arguments` 的值表示最近一次调用该函数时的参数。

如果函数没有正在进行的、未完成的调用（即函数已被调用但尚未返回），`arguments` 属性的值通常为 {{jsxref("Operators/null", "null")}}。

请注意，ECMAScript 规范只规定了 `Function.prototype` 具有一个初始的 `arguments` 访问器，对于任何 `get` 或 `set` 请求都无条件地抛出 {{jsxref("TypeError")}}（称为“毒丸访问器”），而且引擎实现不允许改变此语义，除非是非严格的普通函数。（对于非严格的普通函数）`arguments` 属性的实际行为如果不是抛出错误，则该行为由实现定义。例如，Chrome 将其定义为自有的数据属性，而 Firefox 和 Safari 扩展了初始的毒丸访问器 `Function.prototype.arguments`，以特殊处理非严格函数的 `this` 值。

```js
(function f() {
  if (Object.hasOwn(f, "arguments")) {
    console.log(
      "arguments 是带有描述符的自有属性",
      Object.getOwnPropertyDescriptor(f, "arguments"),
    );
  } else {
    console.log(
      "f 没有自有的名为 arguments 的属性。尝试获取 f.[[Prototype]].arguments",
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "arguments",
      ).get.call(f),
    );
  }
})();

// 在 Chrome 中：
// arguments 是带有描述符的自有属性 {value: Arguments(0), writable: false, enumerable: false, configurable: false}

// 在 Firefox 中：
// f 没有自有的名为 arguments 的属性。尝试获取 f.[[Prototype]].arguments
// Arguments { … }
```

## 示例

### 使用 arguments 属性

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log(`之前：${g.arguments[0]}`);
  if (n > 0) {
    f(n);
  }
  console.log(`之后：${g.arguments[0]}`);
}

f(2);

console.log(`返回：${g.arguments}`);

// 输出：
// 之前：1
// 之前：0
// 之后：0
// 之后：1
// 返回：null
```

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Functions/arguments", "arguments")}}
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
