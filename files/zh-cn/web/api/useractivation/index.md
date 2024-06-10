---
title: UserActivation
slug: Web/API/UserActivation
l10n:
  sourceCommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{APIRef("HTML DOM")}}

**`UserActivation`** 接口提供有关用户当前是否正在与页面交互，或者自页面加载以来是否已完成交互的信息。

此 API 仅在 window 上下文中可用，web worker 中不可用。

## 实例属性

- {{domxref("UserActivation.hasBeenActive")}} {{ReadOnlyInline}}
  - : 指示当前窗口是否具有粘性（用户）激活。
- {{domxref("UserActivation.isActive")}} {{ReadOnlyInline}}
  - : 指示当前窗口是否具有瞬态（用户）激活。

## 描述

此类型的对象可通过 {{domxref("navigator.userActivation")}} 属性访问，并可用于查询有关 window 的用户激活状态的信息。

用户激活意味着用户当前正在与页面交互，或者自页面加载以来已完成交互。用户激活可以通过按钮点击、指针触摸或其它的用户界面的交互来触发。

window 用户激活状态有两种：

- {{Glossary("Transient activation", "瞬态激活")}}（用户当前正在与页面交互）和
- {{Glossary("Sticky activation", "粘性激活")}}（自页面加载以来，用户至少交互过一次）。

有关更多信息以及需要粘性或瞬态激活的 API 列表，请参见[由用户激活控制的特性](/zh-CN/docs/Web/Security/User_activation) 。

## 示例

### 检查最近是否执行过用户手势

使用 {{domxref("navigator.userActivation")}} 访问 `UserActivation` 对象，然后使用 {{domxref("UserActivation.isActive")}} 检查用户当前是否正在与页面进行交互（{{Glossary("Transient activation", "瞬态激活")}}）。

```js
if (navigator.userActivation.isActive) {
  // 例如，继续请求播放媒体
}
```

### 检查是否执行过用户手势

使用 {{domxref("UserActivation.hasBeenActive")}} 检查用户是否曾与页面进行过交互（{{Glossary("Sticky activation", "粘性激活")}}）。

```js
if (navigator.userActivation.hasBeenActive) {
  // 例如，继续自动播放动画。
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("navigator.userActivation")}}
- [由用户激活的控制的特性](/zh-CN/docs/Web/Security/User_activation)
