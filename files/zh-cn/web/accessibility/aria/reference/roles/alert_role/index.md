---
title: ARIA：alert 角色
slug: Web/Accessibility/ARIA/Reference/Roles/alert_role
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

`alert` 角色用于重要且通常对时间敏感的信息。`alert` 是 [`status`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) 角色的一种，会被当作原子实时区域来处理。

## 描述

`alert` 角色用于向用户传达重要的、且通常对时间敏感的消息。当该角色被添加到某个元素上时，浏览器会向辅助技术产品发送一个可访问的 alert 事件，随后辅助技术产品便可以通知用户。

alert 角色应当只用于需要用户立即注意的信息，例如：

- 在表单字段中输入了无效的值
- 用户的登录会话即将过期
- 与服务器的连接已丢失，因此本地的更改将不会被保存

`alert` 角色应当只用于文本内容，而非链接或按钮等交互元素。带有 `alert` 角色的元素不必能够接收焦点，因为当该角色被添加时，无论键盘焦点位于何处，屏幕阅读器（语音或盲文）都会自动宣告更新后的内容。

`alert` 角色应当被添加到包含警报消息的节点上，**而不是**触发警报的元素上。警报属于 [assertive 实时区域](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Live_regions)。设置 `role="alert"` 等同于设置 [`aria-live="assertive"`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) 和 [`aria-atomic="true"`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)。由于它们不接收焦点，因此不需要管理焦点，也不应要求用户进行交互。

> [!WARNING]
> 由于 `alert` 角色具有侵入性，必须节制地使用它，并且仅应在需要用户立即注意的情况下使用。

[`alert`](https://w3c.github.io/aria/#alert) 角色是五种[实时区域](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Live_regions)角色之一。不那么紧急的动态变更应当使用较温和的方式，例如包含 `aria-live="polite"`，或使用 [`status`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) 等其他实时区域角色。如果预期用户会关闭警报，则应改用 [`alertdialog`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) 角色。

关于 `alert` 角色，最重要的一点是：它适用于动态显示的内容，而不是页面加载时就出现的内容。它非常适合这样的场景：用户正在填写表单，此时用 JavaScript 添加一条错误消息——警报会立即读出这条消息。它不应当被用在用户尚未与之交互过的 HTML 上。例如，如果页面加载时就散布着多个可见的警报，则不应使用 alert 角色，因为这些消息并不是动态触发的。

与其他所有[实时区域](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Live_regions)一样，只有当带有 `role="alert"` 的元素的内容被*更新*时，警报才会被宣告。请确保带有该角色的元素首先存在于页面的标记中——这相当于给浏览器和屏幕阅读器“预热”，让它们持续监视该元素的变化。此后，对该内容的任何更改都会被宣告。不要试图动态添加或生成一个已经填充了想要宣告的警报消息的 `role="alert"` 元素——这通常*不会*导致宣告，因为这并不构成内容变更。

由于 `alert` 角色会读出任何发生变更的内容，因此使用时应当谨慎。警报从定义上讲就是具有干扰性的。同时出现多个警报，以及不必要的警报，都会带来糟糕的用户体验。

## 示例

以下是警报的常见示例及其实现方式：

### 示例 1：使带有 alert 角色的元素内预先存在的内容变为可见

如果带有 `role="alert"` 的元素*内部*的内容最初通过 CSS 隐藏，那么使其可见就会触发警报。这意味着现有的警报容器元素可以被“重用”多次。

```css
.hidden {
  display: none;
}
```

```html
<div id="expirationWarning" role="alert">
  <span class="hidden">您的登录会话将在 2 分钟后过期</span>
</div>
```

```js
// 移除 'hidden' 类会使元素内部的内容变为可见，这将让屏幕阅读器宣告该警报：
document
  .getElementById("expirationWarning")
  .firstChild.classList.remove("hidden");
```

### 示例 2：动态更改带有 alert 角色的元素内部的内容

使用 JavaScript，你可以动态更改带有 `role="alert"` 的元素*内部*的内容。请注意，如果你需要多次触发同一个警报（即动态插入的内容与之前相同），这通常不会被视为一次变更，因而*不会*导致宣告。因此，通常最好的做法是先短暂地“清空”警报容器的内容，然后再注入警报消息。

```html
<div id="alertContainer" role="alert"></div>
```

```js
// 清空容器的内容
document.getElementById("alertContainer").textContent = "";
// 注入新的警报消息
document.getElementById("alertContainer").textContent =
  `您的会话将在 ${expiration} 分钟后过期`;
```

### 示例 3：为屏幕阅读器通知使用视觉上隐藏的警报容器

可以将警报容器本身在视觉上隐藏，并用它来专门为屏幕阅读器提供更新/通知。当页面上的重要内容已经更新，但这种变化对屏幕阅读器用户来说不会立刻显现时，这种做法会很有用。

但是，请确保不要使用 `display:none` 来隐藏容器，因为这样会把它对辅助技术也隐藏起来，意味着它们不会收到任何变更的通知。作为替代，请使用类似 [`.visually-hidden` 样式](https://www.a11yproject.com/posts/how-to-hide-content/)的方案。

```html
<div id="hiddenAlertContainer" role="alert" class="visually-hidden"></div>
```

```css
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

```js
// 清空容器的内容
document.getElementById("hiddenAlertContainer").textContent = "";
// 注入新的警报消息
document.getElementById("hiddenAlertContainer").textContent =
  "所有物品已从你的库存中移除。";
```

## 规范

{{Specifications}}

## 参见

- [`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-atomic`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [ARIA：`log` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA：`marquee` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA：`status` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA：`timer` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA：`alertdialog` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [ARIA：实时区域](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [ARIA alert 支持 - Vispero](https://vispero.com/resources/aria-alert-support/)
- [ARIA Practices 警报示例](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
