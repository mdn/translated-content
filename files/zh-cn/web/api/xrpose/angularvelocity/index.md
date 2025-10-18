---
title: XRPose：angularVelocity 属性
short-title: angularVelocity
slug: Web/API/XRPose/angularVelocity
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef}}{{SecureContext_Header}}

{{DOMxRef("XRPose")}} 接口的 `angularVelocity` 只读属性是描述相对于基础 {{DOMxRef("XRSpace")}} 的角速度（单位：弧度/秒） {{DOMxRef("DOMPointReadOnly")}}。

## 取值

用于描述相对于基础 {{DOMxRef("XRSpace")}} 的角速度（单位：弧度/秒）的 {{DOMxRef("DOMPointReadOnly")}}。如果用户代理无法填充此值，则返回 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XRPose.linearVelocity")}}
