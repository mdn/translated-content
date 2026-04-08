---
title: PaymentRequest：payerName 属性
short-title: payerName
slug: Web/API/PaymentResponse/payerName
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

{{domxref("PaymentResponse")}} 接口的 **`payerName`** 只读属性返回用户提供的名称。只有当在 {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} 构造函数的 options 参数中的 `requestPayerName` 选项设置为 `true` 时才会存在此选项。

## 值

包含付款人名称的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
