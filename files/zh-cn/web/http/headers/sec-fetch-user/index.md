---
title: Sec-Fetch-User
slug: Web/HTTP/Headers/Sec-Fetch-User
---

{{HTTPSidebar}}

**`Sec-Fetch-User`** 获取元数据标头表明了一个导航请求是否由用户激活触发。

| Header type                                    | {{Glossary("Fetch Metadata Request Header")}}                                            |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name")}}          | 只要包含前缀 `Sec-` 都属于应用程序禁止修改的 HTTP 消息头，用户代理保留全部对它们的控制权 |
| {{Glossary("CORS-safelisted request header")}} |                                                                                          |

## 语法

```plain
Sec-Fetch-User: ?0
Sec-Fetch-User: ?1
```

## 值

该值是一个布尔结构化的标头。

- `?0`
  - : 导航请求由用户激活触发。
- `?1`
  - : 导航请求由用户激活以外的原因触发。

## 示例

暂时没有内容

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Sec-Fetch-Dest")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-Site")}}
