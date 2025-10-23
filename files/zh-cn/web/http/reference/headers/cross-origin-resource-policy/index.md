---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: b54373ab9025ceb6eb404bd2538ebd4c01576c60
---

HTTP **`Cross-Origin-Resource-Policy`** 响应标头表示期望浏览器阻止对给定资源在 no-cors 模式下的跨源或跨站点请求。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

## 示例

以下响应标头将导致兼容的用户代理拒绝 no-cors 模式下的跨源请求：

```http
Cross-Origin-Resource-Policy: same-origin
```

有关更多示例，请参阅 <https://resourcepolicy.fyi/>。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [跨源资源策略（CORP）说明](/zh-CN/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
- [考虑部署跨源资源策略](https://resourcepolicy.fyi/)
- {{httpheader("Access-Control-Allow-Origin")}}
