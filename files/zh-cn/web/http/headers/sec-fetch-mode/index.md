---
title: Sec-Fetch-Mode
slug: Web/HTTP/Headers/Sec-Fetch-Mode
---

{{HTTPSidebar}}

**`Sec-Fetch-Mode`** 获取元数据标头表明了一个请求的模式。

| Header type                                    | {{Glossary("Fetch Metadata Request Header")}}                                            |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name")}}          | 只要包含前缀 `Sec-` 都属于应用程序禁止修改的 HTTP 消息头，用户代理保留全部对它们的控制权 |
| {{Glossary("CORS-safelisted request header")}} |                                                                                          |

## 语法

```plain
Sec-Fetch-Mode: cors
Sec-Fetch-Mode: navigate
Sec-Fetch-Mode: nested-navigate
Sec-Fetch-Mode: no-cors
Sec-Fetch-Mode: same-origin
Sec-Fetch-Mode: websocket
```

## 值

- `cors`
  - : TBD
- `navigate`
  - : TBD
- `nested-navigate`
  - : TBD
- `no-cors`
  - : TBD
- `same-origin`
  - : TBD
- `websocket`
  - : TBD

## 示例

暂时没有内容

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}
