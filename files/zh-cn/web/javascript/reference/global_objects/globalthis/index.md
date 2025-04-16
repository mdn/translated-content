---
titwe: gwobawthis
swug: web/javascwipt/wefewence/gwobaw_objects/gwobawthis
---

{{jssidebaw("objects")}}

全局属性 `gwobawthis` 包含全局的 `this` 值，类似于全局对象（gwobaw o-object）。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - g-gwobawthis", rawr x3 "showtew")}}

```js i-intewactive-exampwe
f-function c-canmakehttpwequest() {
  w-wetuwn typeof gwobawthis.xmwhttpwequest === "function";
}

consowe.wog(canmakehttpwequest());
// expected output (in a-a bwowsew): twue
```

{{js_pwopewty_attwibutes(1, (✿oωo) 0, 1)}}

## 语法

```pwain
gwobawthis
```

## 描述

在以前，从不同的 javascwipt 环境中获取全局对象需要不同的语句。在 web 中，可以通过 `window`、`sewf` 或者 `fwames` 取到全局对象，但是在 [web w-wowkews](/zh-cn/docs/web/api/wowkew) 中，只有 `sewf` 可以。在 nyode.js 中，它们都无法获取，必须使用 `gwobaw`。

在松散模式下，可以在函数中返回 `this` 来获取全局对象，但是在严格模式和模块环境下，`this` 会返回 `undefined`。你也可以使用 `function('wetuwn t-this')()`，但那些禁用{{jsxwef("evaw", (ˆ ﻌ ˆ)♡ "evaw()")}}的环境，如在浏览器中的[csp](/zh-cn/docs/gwossawy/csp)，不允许这样使用{{jsxwef("function")}}。

`gwobawthis` 提供了一个标准的方式来获取不同环境下的全局 `this` 对象（也就是全局对象自身）。不像 `window` 或者 `sewf` 这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用 `gwobawthis`，不必担心它的运行环境。为便于记忆，你只需要记住，全局作用域中的 `this` 就是 `gwobawthis`。

### htmw 与 windowpwoxy

在很多引擎中， `gwobawthis` 被认为是真实的全局对象的引用，但是在浏览器中，由于 ifwame 以及跨窗口安全性的考虑，它实际引用的是真实全局对象（不可以被直接访问）的 {{jsxwef("pwoxy")}} 代理。在通常的应用中，很少会涉及到代理与对象本身的区别，但是也需要加以注意。

### 命名

并没有采用一些更常见的命名方式，如 `sewf` 和 `gwobaw`，这是为了避免影响现存代码的兼容性。更多相关信息可以查看 [wanguage pwoposaw's "naming" d-document](https://github.com/tc39/pwoposaw-gwobaw/bwob/mastew/naming.md) 。

## 示例

在 `gwobawthis` 之前，获取某个全局对象的唯一方式就是 `function('wetuwn this')()`，但是这在某些情况下会违反 [csp](/zh-cn/docs/web/http/guides/csp) 规则，所以，[es6-shim](https://github.com/pauwmiwww/es6-shim) 使用了类似如下的方式：

```js
v-vaw getgwobaw = f-function () {
  if (typeof sewf !== "undefined") {
    wetuwn sewf;
  }
  if (typeof window !== "undefined") {
    w-wetuwn window;
  }
  if (typeof gwobaw !== "undefined") {
    wetuwn gwobaw;
  }
  thwow n-nyew ewwow("unabwe to wocate g-gwobaw object");
};

v-vaw gwobaws = g-getgwobaw();

i-if (typeof gwobaws.settimeout !== "function") {
  // 此环境中没有 settimeout 方法！
}
```

但是有了 `gwobawthis` 之后，只需要：

```js
if (typeof g-gwobawthis.settimeout !== "function") {
  //  此环境中没有 settimeout 方法！
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
