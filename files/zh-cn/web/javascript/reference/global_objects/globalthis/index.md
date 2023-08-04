---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
---

{{jsSidebar("Objects")}}

全局属性 `globalThis` 包含全局的 `this` 值，类似于全局对象（global object）。

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html","shorter")}}

{{JS_Property_Attributes(1, 0, 1)}}

## 语法

```plain
globalThis
```

## 描述

在以前，从不同的 JavaScript 环境中获取全局对象需要不同的语句。在 Web 中，可以通过 `window`、`self` 或者 `frames` 取到全局对象，但是在 [Web Workers](/zh-CN/docs/Web/API/Worker) 中，只有 `self` 可以。在 Node.js 中，它们都无法获取，必须使用 `global`。

在松散模式下，可以在函数中返回 `this` 来获取全局对象，但是在严格模式和模块环境下，`this` 会返回 `undefined`。你也可以使用 `Function('return this')()`，但那些禁用{{jsxref("eval", "eval()")}}的环境，如在浏览器中的[CSP](/zh-CN/docs/Glossary/CSP)，不允许这样使用{{jsxref("Function")}}。

`globalThis` 提供了一个标准的方式来获取不同环境下的全局 `this` 对象（也就是全局对象自身）。不像 `window` 或者 `self` 这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用 `globalThis`，不必担心它的运行环境。为便于记忆，你只需要记住，全局作用域中的 `this` 就是 `globalThis`。

### HTML 与 WindowProxy

在很多引擎中， `globalThis` 被认为是真实的全局对象的引用，但是在浏览器中，由于 iframe 以及跨窗口安全性的考虑，它实际引用的是真实全局对象（不可以被直接访问）的 {{jsxref("Proxy")}} 代理。在通常的应用中，很少会涉及到代理与对象本身的区别，但是也需要加以注意。

### 命名

并没有采用一些更常见的命名方式，如 `self` 和 `global`，这是为了避免影响现存代码的兼容性。更多相关信息可以查看 [language proposal's "naming" document](https://github.com/tc39/proposal-global/blob/master/NAMING.md) 。

## 示例

在 `globalThis` 之前，获取某个全局对象的唯一方式就是 `Function('return this')()`，但是这在某些情况下会违反 [CSP](/zh-CN/docs/Web/HTTP/CSP) 规则，所以，[es6-shim](https://github.com/paulmillr/es6-shim) 使用了类似如下的方式：

```js
var getGlobal = function () {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};

var globals = getGlobal();

if (typeof globals.setTimeout !== "function") {
  // 此环境中没有 setTimeout 方法！
}
```

但是有了 `globalThis` 之后，只需要：

```js
if (typeof globalThis.setTimeout !== "function") {
  //  此环境中没有 setTimeout 方法！
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
