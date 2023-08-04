---
title: Server
slug: Web/HTTP/Headers/Server
---

{{HTTPSidebar}}

**`Server`** 首部包含了处理请求的源头服务器所用到的软件相关信息。

应该避免使用过长或者过于详细的描述作为 Server 的值，因为这有可能泄露服务器的内部实现细节，有利于攻击者找到或者探测已知的安全漏洞。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Server: <product>
```

## 指令

- \<product>
  - : 处理请求的软件或者产品（或组件产品）的名称。

## 示例

```plain
Server: Apache/2.4.1 (Unix)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Allow")}}
