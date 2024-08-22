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

## 兼容性说明

尽管此状态码适用于没有响应体的响应，但服务器可能会错误地在标头后面携带数据。这种问题在长连接中尤为常见，因为无效的响应体可能会与后续请求的响应数据混合在一起。HTTP 协议允许浏览器以不同的方式处理此类响应（[HTTPWG `http-core` GitHub 仓库](https://github.com/httpwg/http-core/issues/26)中正在持续讨论有关规范文本的内容）。

Apple Safari 拒绝任何此类数据。Google Chrome 和 Microsoft Edge 在得到有效响应之前最多丢弃 4 个无效字节。Firefox 在获得有效响应之前可以容忍超过 1KB 的无效数据。

## 参见

- [HTTP request methods](/zh-CN/docs/Web/HTTP/Methods)
