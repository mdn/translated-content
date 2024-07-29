---
title: aria-busy
slug: Web/Accessibility/ARIA/Attributes/aria-busy
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

在 [ARIA 实时区域](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)中，全局的 `aria-busy` 状态指示元素正在被修改，并且辅助技术可能希望等到更改完成后再通知用户更新情况。

当实时区域的多个部分需要加载完成后才向用户通知变更时，设置 `aria-busy="true"` 直到加载完成为止。然后将其设置为 `aria-busy="false"`。这可以防止辅助技术在更新完成之前向用户通知变更。

## 描述

有一部分内容在更新。更新是重要的，并且你希望在其被修改后通知用户，因此你已将其转换为具有 [`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-live) 属性的 [ARIA 实时区域](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)。你可能希望同时更新该部分的几个组件，但是你无法确定所有内容是否会同时更新。即使它是一个非常重要的实时区域，具有 `aria-live="assertive"`，你也不希望在内容的不同部分加载时多次打断用户。这就是 `aria-busy` 可以提供帮助的地方。

`aria-busy` 属性是实时区域的可选属性，可以具有值 `true` 或 `false`。具有值 `true` 的 `aria-busy` 属性可以添加到当前正在更新或修改的元素中，以通知辅助技术在更改或修改完成之前应等待，然后再向用户公开内容。在下载完成后，使用对象的 [`ariaBusy`](/zh-CN/docs/Web/API/Element/ariaBusy) 属性将值更改为 `false`。

```js
ariaLiveElement.ariaBusy = "false";
```

[`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-live) 的值决定在将值更改为 `false` 时是否立即宣布更改，或者辅助技术在当前任务完成之前是否等待打断用户。

### 在 `feed` 内部

如果具有 [`feed`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/feed_role) 角色的元素的 `aria-busy` 被设置为 `true`，则消息来源（feed）内部发生的渲染更改不会被宣告，除非是用户发起的更改。

### 在 `widget` 内部

如果对渲染的微件进行更改会导致微件在脚本执行期间缺少必须拥有的元素，请在更新过程中将 `aria-busy` 设置为 `true`。例如，如果渲染的树网格更新了不一定同时渲染的多个分支，那么替换单个更新中的整个树的替代方法是在修改每个分支时标记树为繁忙状态。

## 值

- false（默认值）：
  - : 元素没有预期的更新。
- true
  - : 元素正在更新。

## 关联接口

- {{domxref("Element.ariaBusy")}}
  - : 每个元素接口的 [`ariaBusy`](/zh-CN/docs/Web/API/Element/ariaBusy) 属性反映了 `aria-busy` 属性的值，该属性指示元素是否正在修改。

```html
<div
  id="clock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-busy="false"></div>
```

```js
const el = document.getElementById("clock");
console.log(el.ariaBusy); // false
el.ariaBusy = "true";
console.log(el.ariaBusy); // true
```

## 关联角色

适用于**所有**角色

## 规范

{{Specifications}}

## 参见

- [ARIA 实时区域](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-relevant`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-atomic`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
