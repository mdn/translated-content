---
title: Navigator：credentials 属性
slug: Web/API/Navigator/credentials
l10n:
  sourceCommit: 61e0e2ba096262b69b86b36bbadb5fcbfd546b1e
---

{{securecontext_header}}{{APIRef("Credential Management API")}}

{{domxref("Navigator")}} 接口的只读属性 **`credentials`** 返回与当前文档关联的 {{domxref("CredentialsContainer")}} 对象，该对象暴露用于请求凭据的方法。{{domxref("CredentialsContainer")}} 接口还会在发生感兴趣的事件时通知用户代理，例如成功登录或注销。此接口可用于特性检测。

## 值

一个 {{domxref("CredentialsContainer")}} 对象。

## 示例

```js
if ("credentials" in navigator) {
  navigator.credentials.get({ password: true }).then((creds) => {
    // 使用凭据执行操作
  });
} else {
  // 使用之前的方式处理登录
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
