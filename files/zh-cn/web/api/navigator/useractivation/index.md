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

### 检查最近是否执行了用户手势

使用 {{domxref("UserActivation.isActive")}} 来检查用户是否正在与页面进行交互（{{Glossary("Transient activation", "短暂激活")}}）。

```js
if (navigator.userActivation.isActive) {
  // 例如，继续请求播放媒体
}
```

### 检查是否曾执行过用户手势

使用 {{domxref("UserActivation.hasBeenActive")}} 检查用户是否曾经与页面进行过交互（{{Glossary("Sticky activation", "粘性激活")}}）。

```js
if (navigator.userActivation.hasBeenActive) {
  // 例如，继续自动播放动画
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
- [由用户激活控制的功能](/zh-CN/docs/Web/Security/Defenses/User_activation)
