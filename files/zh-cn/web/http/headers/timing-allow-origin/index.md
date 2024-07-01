---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
---

{{HTTPSidebar}}

响应头 **`Timing-Allow-Origin`** 用于指定特定站点，以允许其访问[Resource Timing API](/zh-CN/docs/Web/API/Performance_API/Resource_timing)提供的相关信息，否则这些信息会由于跨源限制将被报告为零

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Timing-Allow-Origin: *
Timing-Allow-Origin: <origin>[, <origin>]*
```

## 指令

- \*
  - : 服务器可以以“`*`”作为通配符，从而允许所有域都具有访问定时信息的权限。
- \<origin>
  - : 指定一个可以访问资源的 URI。你也可以通过逗号隔开，指定多个 URI。

## 示例

如需允许任何资源都可以看到的计时 (timing) 信息，你可以如此设置：

```plain
Timing-Allow-Origin: *
```

如需允许`https://developer.mozilla.org`查看你的计时信息，你可以设置：

```plain
Timing-Allow-Origin: https://developer.mozilla.org
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Resource Timing（概览）](/zh-CN/docs/Web/API/Performance_API/Resource_timing)
- {{HTTPHeader("Vary")}}
