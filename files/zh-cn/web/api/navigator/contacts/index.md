---
title: Navigator：contacts 属性
slug: Web/API/Navigator/contacts
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Contact Picker API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("Navigator")}} 接口的只读属性 **`contacts`** 返回一个 {{domxref('ContactsManager')}} 接口，该接口允许用户从他们的联系人列表中选择条目，并与网站或应用程序共享所选条目的有限详细信息。

## 值

一个 {{domxref('ContactsManager')}} 对象。两次连续调用返回同一个对象。

## 示例

以下代码检查是否支持联系人选择器 API。

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [网页联系人选择器](https://developer.chrome.google.cn/docs/capabilities/web-apis/contact-picker)
- [Glitch 上的联系人选择器演示](https://contact-picker.glitch.me/)
