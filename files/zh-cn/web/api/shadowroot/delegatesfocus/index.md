---
title: ShadowRoot.delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
---

{{APIRef("Shadow DOM")}}

{{domxref("ShadowRoot")}} 接口中的只读属性 **`delegatesFocus`** 返回一个布尔值表明 delegatesFocus 是否在 shadow 被附加的时候设置了。

这目前是一个实验的非标准特性，仅在 Chrome 中可用。

## 语法

```plain
var df = shadowRoot.delegatesFocus
```

### 值

一个布尔值 — `true` 值表明 shadow root 已经 delegate focus, `false` 反之。

## 示例

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;

  ...

// Does it delegate focus?
let hostElem = shadow.delegatesFocus;
```

## 标准

这目前是个非标准特性。

## 浏览器兼容性

{{Compat}}
