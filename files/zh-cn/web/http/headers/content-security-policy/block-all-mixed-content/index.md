---
title: "CSP: block-all-mixed-content"
slug: Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
---

{{HTTPSidebar}}

HTTP 协议首部字段 {{HTTPHeader("Content-Security-Policy")}} (CSP) 中的 **`block-all-mixed-content`** 指令在当前页面为通过 HTTPS 协议加载的情况下禁止通过 HTTP 渠道加载任何资源。

任何[混合类型](/zh-CN/docs/Web/Security/Mixed_content)的资源请求都是被禁止的，包括混合活动内容和混合被动内容。这一条也适用于 {{HTMLElement("iframe")}} 中的文档，确保整体页面都不包含混合内容。

{{CSP("upgrade-insecure-requests")}} 指令会在 `block-all-mixed-content` 之前执行；如果前者执行成功，后者就不再发挥任何作用。推荐的做法是设置二者之一，而不是全部。

## 语法

```plain
Content-Security-Policy: block-all-mixed-content;
```

## 示例

```plain
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

为了在更细粒度上限制对 http 资源的访问，你可以将个别指令的值设置为 "https:"。例如，为了限制对不安全的走 http 协议的图片的访问，可以这么做：

```plain
Content-Security-Policy: img-src https:
```

## 规范

不属于任何现行的规范，曾在过时的 [Mixed Content Level 1](https://www.w3.org/TR/mixed-content/#block-all-mixed-content) 规范中定义。

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Mixed content](/zh-CN/docs/Web/Security/Mixed_content)
