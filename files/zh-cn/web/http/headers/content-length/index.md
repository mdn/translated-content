---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
---

{{HTTPSidebar}}

**`Content-Length`** 是一个实体消息首部，用来指明发送给接收方的消息主体的大小，即用十进制数字表示的八位元组的数目。

| Header type                           | {{Glossary("Entity header")}} |
| ------------------------------------- | ----------------------------- |
| {{Glossary("Forbidden header name")}} | yes                           |

## 语法

```plain
Content-Length: <length>
```

## 指令

- \<length>
  - : 消息的长度，用十进制数字表示的八位字节的数目。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Transfer-Encoding")}}
