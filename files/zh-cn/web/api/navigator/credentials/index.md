---
title: credentials
slug: Web/API/Navigator/credentials
---

{{SeeCompatTable}}{{APIRef("")}}

{{domxref("Navigator")}}接口的 **`credentials`** 属性返回{{domxref("CredentialsContainer")}}接口，该接口暴露了请求凭证的方法。 {{domxref("CredentialsContainer")}}接口还会在下相关事件发生时通知用户，例如登录或注销成功。该接口可用于特征检测。

## 语法

```plain
var credentialsContainer = navigator.credentials
```

### 返回值

{{domxref("CredentialsContainer")}} 接口。

## 示例

```js
if ("credentials" in navigator) {
  navigator.credentials.get({ password: true }).then(function (creds) {
    //Do something with the credentials.
  });
} else {
  //Handle sign-in the way you did before.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
