---
title: UserActivation：hasBeenActive 属性
slug: Web/API/UserActivation/hasBeenActive
l10n:
  sourceCommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{APIRef("HTML DOM")}}

{{domxref("UserActivation")}} 接口的 **`hasBeenActive`** 只读属性表示当前的窗口是否有{{Glossary("sticky activation","粘性用户激活")}}。

## 值

一个布尔值。

## 示例

### 检查是否执行过用户手势

使用 `hasBeenActive` 属性检查用户自加载页面以来是否与页面进行过交互。

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
- {{domxref("UserActivation.isActive")}}
- [由用户激活控制的特性](/zh-CN/docs/Web/Security/User_activation)
