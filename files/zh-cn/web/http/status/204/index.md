---
title: 204 No Content
slug: Web/HTTP/Status/204
---

{{HTTPSidebar}}

HTTP **`204 No Content`** 成功状态响应码，表示该请求已经成功了，但是客户端客户不需要离开当前页面。默认情况下 204 响应是可缓存的。一个 {{HTTPHeader("ETag")}} 标头包含在此类响应中。

使用惯例是，在 {{HTTPMethod("PUT")}} 请求中进行资源更新，但是不需要改变当前展示给用户的页面，那么返回 204 No Content。如果创建了资源，则返回 {{HTTPStatus("201")}} `Created` 。如果应将页面更改为新更新的页面，则应改用 {{HTTPStatus("200")}} 。

## 状态

```plain
204 No Content
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTTP request methods](/zh-CN/docs/Web/HTTP/Methods)
