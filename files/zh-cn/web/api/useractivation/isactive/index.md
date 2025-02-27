---
title: UserActivation：isActive 属性
slug: Web/API/UserActivation/isActive
l10n:
  sourceCommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{APIRef("HTML DOM")}}

{{domxref("UserActivation")}} 接口的 **`isActive`** 只读属性表示当前的窗口是否有{{Glossary("transient activation", "瞬态用户激活")}}。

## 值

一个布尔值。

## 示例

### 检查最近是否执行过用户手势

使用 `isActive` 属性可以检查用户当前是否正在与页面交互。

```js
if (navigator.userActivation.isActive) {
  // 例如，继续请求播放媒体
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("UserActivation")}}
- {{domxref("UserActivation.hasBeenActive")}}
- [由用户激活控制的特性](/zh-CN/docs/Web/Security/User_activation)
