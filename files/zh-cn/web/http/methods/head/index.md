---
title: HEAD
slug: Web/HTTP/Methods/HEAD
---

{{HTTPSidebar}}

**HTTP `HEAD` 方法** 请求资源的头部信息，并且这些头部与 HTTP {{HTTPMethod("GET")}} 方法请求时返回的一致。该请求方法的一个使用场景是在下载一个大文件前先获取其大小再决定是否要下载，以此可以节约带宽资源。

`HEAD` 方法的响应不应包含响应正文。即使包含了正文也必须忽略掉。虽然描述正文信息的 {{glossary("Entity header", "entity headers")}}, 例如 {{HTTPHeader("Content-Length")}} 可能会包含在响应中，但它们并不是用来描述 `HEAD` 响应本身的，而是用来描述同样情况下的 {{HTTPMethod("GET")}} 请求应该返回的响应。

如果 `HEAD` 请求的结果显示在上一次 {{HTTPMethod("GET")}} 请求后缓存的资源已经过期了，即使没有发出{{HTTPMethod("GET")}}请求，缓存也会失效

| 请求是否有正文                                         | 否  |
| ------------------------------------------------------ | --- |
| 成功的响应是否有正文                                   | 否  |
| {{Glossary("Safe/HTTP", "安全")}}                           | 是  |
| {{Glossary("Idempotent", "幂等")}}                           | 是  |
| {{Glossary("Cacheable", "可缓存")}}                       | 是  |
| [HTML 表单](/zh-CN/docs/Web/Guide/HTML/Forms) 是否支持 | 否  |

## 语法

```plain
HEAD /index.html
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## ?另见

- {{HTTPMethod("GET")}}
