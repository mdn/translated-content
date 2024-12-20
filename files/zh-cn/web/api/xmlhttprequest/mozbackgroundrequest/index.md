---
title: XMLHttpRequest.mozBackgroundRequest
slug: Web/API/XMLHttpRequest/mozBackgroundRequest
---

{{APIRef('XMLHttpRequest')}}

> [!NOTE]
> Web 内容无法使用此方法。它需要提升权限才能访问。

**`XMLHttpRequest.mozBackgroundRequest`** 是一个布尔对象，表示 `object` 是否为后台的服务请求。如果为 `true`，则不会将任何加载组与请求关联，并且不会向用户显示安全对话框。

请求失败时通常会显示安全对话框（例如身份验证或错误证书通知）。

> [!NOTE]
> 该属性必须在调用 `open()` 之前设置。
