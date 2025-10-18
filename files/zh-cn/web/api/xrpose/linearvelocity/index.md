---
title: XRPose：linearVelocity 属性
short-title: linearVelocity
slug: Web/API/XRPose/linearVelocity
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}{{SecureContext_Header}}

{{DOMxRef("XRPose")}} 接口的 `linearVelocity` 只读属性是描述相对于基础 {{DOMxRef("XRSpace")}} 的线速度（以米/秒为单位）的 {{DOMxRef("DOMPointReadOnly")}}。

## 值

用于描述相对于基础 {{DOMxRef("XRSpace")}} 的线速度（以米/秒为单位）的 {{DOMxRef("DOMPointReadOnly")}}。如果用户代理无法填充此值，则返回 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XRPose.angularVelocity")}}
