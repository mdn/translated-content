---
title: report-to
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
---

{{HTTPSidebar}}

`Report-To` HTTP 响应头部指示客户端存储特定域名的报告端点。

```plain
Content-Security-Policy: ...; report-to groupname
```

该指令本身没有任何影响，仅与其他指令结合起来才有意义。

<table>
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">指令类型</th>
      <td>{{Glossary("Reporting directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        <p>{{HTMLElement("meta")}} 元素并不支持该指令</p>
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```plain
Content-Security-Policy: report-to <json-field-value>;
```

## Examples

可以查看{{HTTPHeader("Content-Security-Policy-Report-Only")}}获取更多信息和示例。

```plain
Report-To: { "group": "csp-endpoint",
             "max-age": 10886400,
             "endpoints": [
               { "url": "https://example.com/csp-reports" }
             ] },
           { "group": "hpkp-endpoint",
             "max-age": 10886400,
             "endpoints": [
               { "url": "https://example.com/hpkp-reports" }
             ] }
Content-Security-Policy: ...; report-to csp-endpoint
```

```plain
Report-To: { "group": "endpoint-1",
             "max-age": 10886400,
             "endpoints": [
               { "url": "https://example.com/reports" },
               { "url": "https://backup.com/reports" }
             ] }

Content-Security-Policy: ...; report-to endpoint-1
```

Browser compatibility

The compatibility table in this page is generated from structured data. If you'd like to contribute to the data, please check out <https://github.com/mdn/browser-compat-data> and send us a pull request.

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
