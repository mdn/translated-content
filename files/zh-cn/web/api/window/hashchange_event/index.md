---
title: Window：hashchange 事件
slug: Web/API/Window/hashchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

当 URL 的片段标识符（以 `#` 符号开头和之后的 URL 部分）更改时，将触发 **`hashchange`** 事件。

## 语法

在如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("hashchange", (event) => {});
onhashchange = (event) => {};
```

## 事件类型

一个 {{domxref("HashChangeEvent")}}，继承自 {{domxref("Event")}}。

{{InheritanceDiagram("HashChangeEvent")}}

## 事件属性

- {{domxref("HashChangeEvent.newURL")}} {{ReadOnlyInline}}
  - : 一个字符串，表示窗口导航到的新 URL。
- {{domxref("HashChangeEvent.oldURL")}} {{ReadOnlyInline}}
  - : 一个字符串，表示导航窗口的上一个 URL。

## 事件处理器别名

除了 `Window` 接口以外，事件处理器属性 `onhashchange` 同样可以用于以下目标：

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 示例

你可以在 {{domxref("EventTarget/addEventListener", "addEventListener")}} 方法中使用 `hashchange` 事件：

```js
window.addEventListener(
  "hashchange",
  () => {
    console.log("哈希已更改！");
  },
  false,
);
```

或使用 `onhashchange` 事件处理程序属性：

```js
function locationHashChanged() {
  if (location.hash === "#cool-feature") {
    console.log("你正在访问一个很酷的功能！");
  }
}

window.onhashchange = locationHashChanged;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window/popstate_event", "popstate")}} 事件
