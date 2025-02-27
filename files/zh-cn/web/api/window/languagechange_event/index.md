---
title: Window：languagechange 事件
slug: Web/API/Window/languagechange_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

**`languagechange`** 事件在用户首选语言发生变化时，在全局对象作用域上触发。

## 语法

在如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("languagechange", (event) => {});
onlanguagechange = (event) => {};
```

## 事件类型

一个通用的 {{domxref("Event")}}。

## 事件处理器别名

除了 `Window` 接口以外，事件处理器属性 `onlanguagechange` 同样可以用于以下目标：

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 示例

你可以在 {{domxref("EventTarget/addEventListener", "addEventListener")}} 方法中使用 `languagechange` 事件：

```js
window.addEventListener("languagechange", () => {
  console.log("检测到 languagechange 事件！");
});
```

或使用 `onlanguagechange` 事件处理器属性：

```js
window.onlanguagechange = (event) => {
  console.log("检测到 languagechange 事件！");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("navigator.language")}}
- {{domxref("navigator.languages")}}
- {{domxref("navigator")}}
