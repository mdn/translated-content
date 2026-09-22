---
title: Element：activeViewTransition 属性
short-title: activeViewTransition
slug: Web/API/Element/activeViewTransition
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

{{domxref("Element")}} 接口的 **`activeViewTransition`** 只读属性返回一个 {{domxref("ViewTransition")}} 实例，表示当前在元素上处于活动状态的[视图过渡](/zh-CN/docs/Web/API/View_Transition_API)。它提供了一种一致的方式来访问活动的[元素作用域视图过渡](/zh-CN/docs/Web/API/View_Transition_API/Using_element-scoped)，无需保存其引用以供稍后使用。

元素作用域的 {{domxref("ViewTransition")}} 也可通过 {{domxref("Element.startViewTransition()")}} 的返回值访问。

## 值

一个 {{domxref("ViewTransition")}}，若元素没有活动的视图过渡则为 `null`。

## 示例

### 基本用法

此代码片段展示如何使用 `activeViewTransition` 获取正在进行的视图过渡的引用。

```js
const myElement = document.querySelector(".my-element");

// …

function handleVT() {
  const vt = myElement.startViewTransition(() => {
    updateDOMSomehow();
  });
}

// 若过渡仍在进行，则返回 vt 的引用
myElement.activeViewTransition;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.startViewTransition()")}}
- {{domxref("Document.activeViewTransition")}}
- [使用元素作用域视图过渡](/zh-CN/docs/Web/API/View_Transition_API/Using_element-scoped)
- [视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API)
- {{domxref("ViewTransition")}}
