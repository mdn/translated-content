---
title: Accept
slug: Web/HTTP/Headers/Accept
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Accept`** 请求 HTTP 标头表示客户端能够理解的内容类型，以 [MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)的形式表达。借助[内容协商机制](/zh-CN/docs/Web/HTTP/Content_negotiation), 服务器可以从诸多备选项中选择一项进行应用，并使用 {{HTTPHeader("Content-Type")}} 应答标头通知客户端它的选择。浏览器会基于请求的上下文来为这个请求标头设置合适的值，比如获取一个 CSS 层叠样式表时值与获取图片、视频或脚本文件时的值是不同的。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "列入 CORS 白名单的请求标头")}}
      </th>
      <td>
        是的，但有额外的限制，即值中不能包含 <em>CORS 不安全请求标头字节</em>：0x00-0x1F（除了 0x09（制表符，HT）），<code>"():&#x3C;>?@[\]{}</code> 以及 0x7F（DEL）。
      </td>
    </tr>
  </tbody>
</table>

## 语法

```http
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// 多种类型，采用{{glossary("quality values", "权重值")}}语法区分：
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
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

```http
Accept: text/html

Accept: image/*

// 一般默认值
Accept: */*

// 导航请求的默认值
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTTP [内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation)
- [Accept 默认值](/zh-CN/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)
- 表示内容协商结果的消息标头：{{HTTPHeader("Content-Type")}}
- 其他相似消息标头：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept-Charset")}}、{{HTTPHeader("Accept-Language")}}
