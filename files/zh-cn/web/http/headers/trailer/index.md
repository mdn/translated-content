---
title: Trailer
slug: Web/HTTP/Headers/Trailer
---

{{HTTPSidebar}}

**Trailer** 是一个响应首部，允许发送方在分块发送的消息后面添加额外的元信息，这些元信息可能是随着消息主体的发送动态生成的，比如消息的完整性校验，消息的数字签名，或者消息经过处理之后的最终状态等。

> **备注：** 请求首部 {{HTTPHeader("TE")}} 需要设置 trailers 来允许挂载字段。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | yes                             |

## 语法

```plain
Trailer: header-names
```

## 指令

- `header-names`

  - : 出现在分块信息挂载部分的消息首部。以下首部字段**不允许**出现：

    - 用于信息分帧的首部 (例如{{HTTPHeader("Transfer-Encoding")}} 和 {{HTTPHeader("Content-Length")}}),
    - 用于路由用途的首部 (例如 {{HTTPHeader("Host")}})，
    - 请求修饰首部 (例如控制类和条件类的，如{{HTTPHeader("Cache-Control")}}，{{HTTPHeader("Max-Forwards")}}，或者 {{HTTPHeader("TE")}})，
    - 身份验证首部 (例如 {{HTTPHeader("Authorization")}} 或者 {{HTTPHeader("Set-Cookie")}})，
    - {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}}，以及 `Trailer` 自身。

## 示例

### 在分块传输编码中使用挂载（trailer）首部

在这个例子中，{{HTTPHeader("Expires")}} 首部出现在分块信息的结尾，作为挂载（trailer）首部。

```plain
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked
Trailer: Expires

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
Expires: Wed, 21 Oct 2015 07:28:00 GMT\r\n
\r\n
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("TE")}}
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
