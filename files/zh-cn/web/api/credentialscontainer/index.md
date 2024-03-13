---
title: CredentialsContainer
slug: Web/API/CredentialsContainer
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}

[Credential Management API](/zh-CN/docs/Web/API/Credential_Management_API) 的 **`CredentialsContainer`** 接口提供了请求 credentials 和通知用户代理（当成功登陆或登出事件发生时）的方法。可通过 `Navigator.credentials` 获得该接口。

## 属性

None.

### 事件

None.

返回一个带有处理值 [`Credential`](https://w3c.github.io/webappsec-credential-management/#credential)（若它能够使用提供的选项创建的话）的 [`Promise`](https://heycam.github.io/webidl/#idl-promise) ，或返回 `null`（若不能创建 [`Credential`](https://w3c.github.io/webappsec-credential-management/#credential)）。在特殊情况下，返回的 [`Promise`](https://heycam.github.io/webidl/#idl-promise) 对象可能 reject。

## 方法

- {{domxref("CredentialsContainer.create()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a new {{domxref("Credential")}} instance based on the provided options, or `null` of no `Credential` object can be created.
- {{domxref("CredentialsContainer.get()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with the {{domxref("Credential")}} instance that matches the provided parameters.
- {{domxref("CredentialsContainer.preventSilentAccess()")}}
  - : Sets a flag that specifies whether automatic log in is allowed for future visits to the current origin, then returns an empty {{jsxref("Promise")}}. For example, you might call this, after a user signs out of a website to ensure that he/she isn't automatically signed in on the next site visit. Earlier versions of the spec called this method `requireUserMediation()`. See [Browser compatibility](#浏览器兼容性) for support details.
- {{domxref("CredentialsContainer.store()")}}
  - : Stores a set of credentials for a user, inside a provided {{domxref("Credential")}} instance and returns that instance in a {{jsxref("Promise")}}.

## 示例

```js
// TBD
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}
