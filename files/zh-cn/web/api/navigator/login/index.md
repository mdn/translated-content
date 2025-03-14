---
title: Navigator：login 属性
slug: Web/API/Navigator/login
l10n:
  sourceCommit: 7f1ce551464bcf12aa4fd038be3cc5b332ee2ad5
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

{{domxref("Navigator")}} 接口的 **`login`** 只读属性提供对浏览器 {{domxref("NavigatorLogin")}} 对象的访问权限，联合身份提供商（IdP）可以使用它在用户登录或退出 IdP 时设置其登录状态。

有关如何使用它的更多详细信息，请参阅[使用登录状态 API 更新登录状态](/zh-CN/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api)。

## 值

一个 {{domxref("NavigatorLogin")}} 对象。

## 示例

```js
/* 设置登录状态 */
navigator.login.setStatus("logged-in");

/* 设置登出状态 */
navigator.login.setStatus("logged-out");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [联合凭证管理（FedCM）API](/zh-CN/docs/Web/API/FedCM_API)
