---
title: NEL
slug: Web/HTTP/Reference/Headers/NEL
l10n:
  sourceCommit: 7ef65e18c747d5a6e109a0babf5c1ee3cb32a0a2
---

{{SeeCompatTable}}

HTTP **`NEL`** 响应标头用于配置网络请求日志记录。

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
NEL: { "report_to": "name_of_reporting_group", "max_age": 12345, "include_subdomains": false, "success_fraction": 0.0, "failure_fraction": 1.0 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [网络错误日志（NEL）说明](/zh-CN/docs/Web/HTTP/Guides/Network_Error_Logging)
