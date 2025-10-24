---
title: Accept 标头
short-title: Accept
slug: Web/HTTP/Reference/Headers/Accept
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP **`Accept`** {{Glossary("request header", "请求")}}和{{Glossary("response header", "响应标头")}}用于指示发送方能够理解的内容类型，这些类型以 [MIME 类型](/zh-CN/docs/Web/HTTP/Guides/MIME_types)的形式表示。在请求中，服务器会使用[内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation)机制，从客户端提议的内容类型中选择一种，并通过 {{HTTPHeader("Content-Type")}} 响应标头告知客户端所选择的类型。在响应中，该标头则用于指示服务器能够理解哪些内容类型，以便客户端在后续对同一资源的请求中使用合适的内容类型。

浏览器会根据请求的上下文自动为该标头设置所需的值。例如，当请求获取 CSS 样式表、图像、视频或脚本时，浏览器会使用不同的取值。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}、{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止修改的请求标头")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "列入 CORS 白名单的请求标头")}}
      </th>
      <td>
        是*
      </td>
    </tr>
  </tbody>
</table>

\* 即值中不能包含 [CORS 不安全请求标头字节](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte)，包括 `"():<>?@[\]{},`、删除符 `0x7F`，以及控制字符 `0x00` 到 `0x19`（制表符 `0x09` 除外）。

## 语法

```http
Accept: <media-type>/<MIME_subtype>
Accept: <media-type>/*
Accept: */*

// 多种类型，采用权重值语法区分
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## 指令

- `<media-type>/<subtype>`
  - : 一个单一且精确的[媒体类型](/zh-CN/docs/Web/HTTP/Guides/MIME_types)，例如 `text/html`。
- `<media-type>/*`
  - : 没有指定子类型的媒体类型。例如，`image/*` 可对应 `image/png`、`image/svg`、`image/gif` 等多种图像类型。
- `*/*`
  - : 任意媒体类型。
- `;q=`（q 因子加权）
  - : 使用的值根据一个称为*权重*的相对{{Glossary("quality values", "质量价值")}}来排序，表达了优先级顺序。

## 示例

### 使用默认的 Accept 请求标头

使用命令行工具（例如 [curl](https://curl.se/) 和 [wget](https://www.gnu.org/software/wget/)）发起的 HTTP 请求，其默认的 `Accept` 值为 `*/*`：

```http
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

浏览器在进行页面导航请求时，通常会使用如下的 `Accept` 请求标头值：

```http
GET /zh-CN/ HTTP/2
Host: developer.mozilla.org
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
…
```

在接收到文档后，对 `Accept` 示例页面中的图像发起的请求，其默认的 `developer.mozilla.org` 值如下所示：

```http
Accept: image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5
```

### 为 JSON 响应配置 Accept 请求标头

在涉及 API 交互的系统中，通常会请求返回 `application/json` 格式的响应。以下是一个客户端明确请求 JSON 响应的 {{HTTPMethod("GET")}} 请求示例：

```http
GET /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
Accept: application/json
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTTP [内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation)
- [Accept 默认值列表](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values)
- [列入 CORS 白名单的请求标头的限制](/zh-CN/docs/Glossary/CORS-safelisted_request_header#附加限制)
- 表示内容协商结果的消息标头：{{HTTPHeader("Content-Type")}}
- 其他相似标头：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept-Language")}}
