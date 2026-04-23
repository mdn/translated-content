---
title: Content-Security-Policy：report-to 指令
short-title: report-to
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/report-to
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

`Content-Security-Policy` 的 **`report-to`** 指令用于指定浏览器在检测到 CSP（内容安全策略）违规时，应该将报告发送到的端点名称。

如果发生 CSP 违规，会生成一个包含序列化的 {{domxref("CSPViolationReportBody")}} 对象实例的报告。该报告将通过[报告 API](/zh-CN/docs/Web/API/Reporting_API) 中定义的通用机制，发送到与端点名称对应的 URL。

服务器必须在 {{HTTPHeader("Reporting-Endpoints")}} HTTP 响应标头中单独提供端点名称与其对应 URL 之间的映射关系。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP 版本</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">指令类型</th>
      <td>{{Glossary("Reporting directive","报告指令")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        此指令在 {{HTMLElement("meta")}} 元素中不受支持。
      </th>
    </tr>
  </tbody>
</table>

## 语法

```http
Content-Security-Policy: …; report-to <endpoint_name>
```

`<endpoint_name>` {{HTTPHeader("Reporting-Endpoints")}} HTTP 响应标头提供的端点名称。它也可以是服务器在 {{HTTPHeader("Report-To")}} {{deprecated_inline}} HTTP 响应标头中提供的组名称。

### 违规报告语法

CSP 违规报告是一个经过 JSON 序列化的 {{domxref("Report")}} 对象实例，其中 `type` 属性的值为 `"csp-violation"`，而 `body` 是 {{domxref("CSPViolationReportBody")}} 对象的序列化形式（其属性定义可参见对应对象文档）。报告会通过 `POST` 请求发送到目标端点，其 {{HTTPHeader("Content-Type")}} 为 `application/reports+json`。

单个报告的 JSON 示例可能如下所示：

```json
{
  "age": 53531,
  "body": {
    "blockedURL": "inline",
    "columnNumber": 39,
    "disposition": "enforce",
    "documentURL": "https://example.com/csp-report",
    "effectiveDirective": "script-src-elem",
    "lineNumber": 121,
    "originalPolicy": "default-src 'self'; report-to csp-endpoint-name",
    "referrer": "https://www.google.com/",
    "sample": "console.log(\"lo\")",
    "sourceFile": "https://example.com/csp-report",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://example.com/csp-report",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

## 使用说明

`report-to` 指令旨在取代 `report-uri`。支持 `report-to` 的浏览器会忽略 `report-uri` 指令。不过，在 `report-to` 尚未得到广泛支持之前，你可以同时指定这两个指令，如下所示：

```http
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
```

请注意，本主题中的其他示例未显示 `report-uri`。

## 示例

### 设置 CSP 违规报告端点

服务器可以在 HTTP 响应中使用 {{HTTPHeader("Reporting-Endpoints")}} 标头来定义端点名称与 URL 之间的映射关系。端点名称可以是任意名称：在此示例中我们使用了 `name-of-endpoint`。

```http
Reporting-Endpoints: name-of-endpoint="https://example.com/csp-reports"
```

随后，服务器可以通过 `report-to` 指令将该端点名称设为 CSP 违规报告的发送目标：

```http
Content-Security-Policy: default-src 'self'; report-to name-of-endpoint
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Reporting-Endpoints")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [报告 API](/zh-CN/docs/Web/API/Reporting_API)
