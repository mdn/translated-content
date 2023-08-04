---
title: Accept
slug: Web/HTTP/Headers/Accept
---

{{HTTPSidebar}}

**`Accept`** 请求头用来告知（服务器）客户端可以处理的内容类型，这种内容类型用[MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)来表示。借助[内容协商机制](/zh-CN/docs/Web/HTTP/Content_negotiation), 服务器可以从诸多备选项中选择一项进行应用，并使用 {{HTTPHeader("Content-Type")}} 应答头通知客户端它的选择。浏览器会基于请求的上下文来为这个请求头设置合适的值，比如获取一个 CSS 层叠样式表时值与获取图片、视频或脚本文件时的值是不同的。

| Header type                                                     | {{Glossary("Request header")}} |
| --------------------------------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}}                           | no                             |
| {{Glossary("Simple header", "CORS-safelisted request-header")}} | yes                            |

## 语法

```plain
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## 指令

- `<MIME_type>/<MIME_subtype>`
  - : 单一精确的 [MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)，例如`text/html`.
- `<MIME_type>/*`
  - : 一类 MIME 类型，但是没有指明子类。`image/*` 可以用来指代 `image/png`、`image/svg`、`image/gif` 以及任何其他的图片类型。
- `*/*`
  - : 任意类型的 MIME 类型
- `;q=` (q 因子权重)
  - : 值代表优先顺序，用相对[质量价值](/zh-CN/docs/Glossary/Quality_values)表示，又称作权重。

## 示例

```plain
Accept: text/html

Accept: image/*

Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTTP [内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation)
- 表示内容协商结果的消息头：{{HTTPHeader("Content-Type")}}
- 其他相似消息头：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept-Charset")}}、{{HTTPHeader("Accept-Language")}}
