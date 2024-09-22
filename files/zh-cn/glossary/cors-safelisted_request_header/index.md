---
title: 列入 CORS 白名单的请求标头
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: fea9eb7420e6d70772144854242c30e421898415
---

{{GlossarySidebar}}

[**列入 CORS 白名单的请求标头**](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)（CORS-safelisted request header，也被称作“简单标头”）包含以下 [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers)：

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Range")}}

当仅包含这些标头（以及符合下面列出的额外请求的值）时，在 [CORS](/zh-CN/docs/Glossary/CORS) 上下文中的请求不需要发送{{Glossary("preflight request", "预检请求")}}。

你可以使用 {{HTTPHeader("Access-Control-Allow-Headers")}} 标头将更多标头列入白名单，也可以在其中列出上述标头以绕过下面的附加限制。

## 附加限制

列入 CORS 白名单的标头还必须满足以下要求：

- {{HTTPHeader("Accept-Language")}} 和 {{HTTPHeader("Content-Language")}} 只能包含由 `0-9`、`A-Z`、`a-z`、空格或 `*,-.;=` 组成的值。
- {{HTTPHeader("Accept")}} 和 {{HTTPHeader("Content-Type")}} 不能包含 _CORS 不安全的请求标头字节_：`0x00-0x1F`（除了 `0x09 (HT)`，这是被允许的）、`"():<>?@[\]{}`，以及 `0x7F (DEL)`。
- {{HTTPHeader("Content-Type")}} 的 MIME 类型的解析值（忽略参数）需要是 `application/x-www-form-urlencoded`、`multipart/form-data` 和 `text/plain` 中的一个。
- {{HTTPHeader("Range")}} 的值必须是由 `bytes=[0-9]+-[0-9]*` 形式表示的字节范围。参见 {{HTTPHeader("Range")}} 标头文档以获取更多详细信息。
- 对于任意标头：其值的长度不能超过 128。

## 参见

- {{Glossary("CORS-safelisted response header", "列入 CORS 白名单的响应标头")}}
- {{Glossary("Forbidden header name", "禁止修改的标头")}}
- {{Glossary("Request header", "请求标头")}}
