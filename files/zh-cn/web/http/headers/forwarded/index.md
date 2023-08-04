---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
---

{{HTTPSidebar}}

**`Forwarded`** 首部中包含了代理服务器的客户端的信息，即由于代理服务器在请求路径中的介入而被修改或丢失的信息。

其他可用来替换的，已经成为既成标准的首部是 {{HTTPHeader("X-Forwarded-For")}} 、 {{HTTPHeader("X-Forwarded-Host")}} 以及{{HTTPHeader("X-Forwarded-Proto")}} 。

这个消息首部会被用来进行调试和统计，以及生成基于位置的定制化内容，按照设计的目的，它会暴露一定的隐私和敏感信息，比如客户端的 IP 地址。所以在应用此消息首部的时候，需要将用户的隐私问题考虑在内。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
Forwarded: by=<identifier>; for=<identifier>; host=<host>; proto=<http|https>
```

## 指令

- \<identifier>

  - : 一个 identifier 显示了在使用代理的过程中被修改或者丢失的信息。它们可以是以下几种形式：

    - 一个 IP 地址（V4 或 V6，端口号可选，ipv6 地址需要包含在方括号里面，同时用引号括起来），
    - 语意不明的标识符（比如 "\_hidden" 或者 "\_secret"）,
    - 或者是 "unknown"，当当前信息实体不可知的时候（但是你依然想要说明请求被进行了转发）。

- by=\<identifier>
  - : 该请求进入到代理服务器的接口。
- for=\<identifier>
  - : 发起请求的客户端以及代理链中的一系列的代理服务器。
- host=\<host>
  - : 代理接收到的 {{HTTPHeader("Host")}} 首部的信息。
- proto=\<http|https>
  - : 表示发起请求时采用的何种协议（通常是 "http" 或者 "https"）。

## 示例

### 使用 `Forwarded`

```plain
Forwarded: for="_mdn"

# 大小写不敏感
Forwarded: For="[2001:db8:cafe::17]:4711"

# for proto by 之间可用分号分隔
Forwarded: for=192.0.2.60; proto=http; by=203.0.113.43

# 多值可用逗号分隔
Forwarded: for=192.0.2.43, for=198.51.100.17
```

### 从 X-Forwarded-For 到 Forwarded 的迁移

如果应用、服务器或是代理支持标准格式的 Forwarded 的首部的话，那么 {{HTTPHeader("X-Forwarded-For")}} 可以被替换。需要注意的是，在 Forwarded 中 ipv6 地址需要包含在方括号里面，同时用引号括起来。

```plain
X-Forwarded-For: 123.34.567.89
Forwarded: for=123.34.567.89

X-Forwarded-For: 192.0.2.43, 2001:db8:cafe::17
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
```

## 规范

{{Specifications}}

## 相关内容

- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}} – 提供代理自身的信息，而非与其相连的客户端信息。
