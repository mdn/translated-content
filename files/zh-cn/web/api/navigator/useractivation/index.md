---
title: Navigator：userActivation 属性
slug: Web/API/Navigator/userActivation
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}

{{domxref("Navigator")}} 接口的 **`userActivation`** 只读属性返回一个 {{domxref("UserActivation")}} 对象，该对象包含有关当前窗口用户激活状态的信息。

## 值

一个 {{domxref("UserActivation")}} 对象。

## 示例

### 检查用户最近是否进行了操作

使用 {{domxref("UserActivation.isActive")}} 检查用户是否正在与页面进行交互（{{Glossary("Transient activation", "瞬间激活")}}）。

```js
if (navigator.userActivation.isActive) {
  // 继续请求播放媒体，例如
}
```

### 检查用户曾经是否执行过操作

使用 {{domxref("UserActivation.hasBeenActive")}} 检查用户是否曾经与页面进行过交互（{{Glossary("Sticky activation", "粘性激活")}}）。

```js
if (navigator.userActivation.hasBeenActive) {
  // 自动播放动画，例如
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("UserActivation")}}
- {{domxref("UserActivation.hasBeenActive")}}
- {{domxref("UserActivation.isActive")}}
- [基于用户激活的功能](/zh-CN/docs/Web/Security/User_activation)
