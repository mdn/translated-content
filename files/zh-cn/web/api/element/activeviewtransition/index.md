---
title: Element：activeViewTransition 属性
short-title: activeViewTransition
slug: Web/API/Element/activeViewTransition
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

{{domxref("Element")}} 接口的只读属性 **`activeViewTransition`** 返回一个 {{domxref("ViewTransition")}} 实例，表示元素上当前正在进行的[视图过渡](/zh-CN/docs/Web/API/View_Transition_API)。它提供了一种一致的方式来访问当前处于活动状态的[元素级视图过渡](/zh-CN/docs/Web/API/View_Transition_API/Using_element-scoped)，而无需在稍后保存对它的引用。

元素级的 {{domxref("ViewTransition")}} 也可以通过 {{domxref("Element.startViewTransition()")}} 的返回值来访问。

## 值

返回 {{domxref("ViewTransition")}}；如果元素没有进行中的视图过渡，则返回 `null`。

## 示例

### 基本用法

此代码片段演示了如何使用 `activeViewTransition` 取得指向进行中视图过渡的引用。

```js
const myElement = document.querySelector(".my-element");

// ...

function handleVT() {
  const vt = myElement.startViewTransition(() => {
    updateDOMSomehow();
  });
}

// 如果过渡仍在进行中，则返回 vt 的引用
myElement.activeViewTransition;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.startViewTransition()")}}
- {{domxref("Document.activeViewTransition")}}
- [使用元素级视图过渡](/zh-CN/docs/Web/API/View_Transition_API/Using_element-scoped)
- [视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API)
- {{domxref("ViewTransition")}}
