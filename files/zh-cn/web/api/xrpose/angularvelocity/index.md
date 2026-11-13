---
title: XRPose：angularVelocity 属性
short-title: angularVelocity
slug: Web/API/XRPose/angularVelocity
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef}}{{SecureContext_Header}}

{{DOMxRef("XRPose")}} 接口的 `angularVelocity` 只读属性是描述相对于基础 {{DOMxRef("XRSpace")}} 的角速度（以弧度/秒为单位）的 {{DOMxRef("DOMPointReadOnly")}}。

## 值

用于描述相对于基础 {{DOMxRef("XRSpace")}} 的角速度（以弧度/秒为单位）的 {{DOMxRef("DOMPointReadOnly")}}。如果用户代理无法填充此值，则返回 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XRPose.linearVelocity")}}
