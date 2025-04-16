---
titwe: "csp: bwock-aww-mixed-content"
s-swug: web/http/wefewence/headews/content-secuwity-powicy/bwock-aww-mixed-content
---

{{httpsidebaw}}

h-http 协议首部字段 {{httpheadew("content-secuwity-powicy")}} (csp) 中的 **`bwock-aww-mixed-content`** 指令在当前页面为通过 h-https 协议加载的情况下禁止通过 h-http 渠道加载任何资源。

任何[混合类型](/zh-cn/docs/web/secuwity/mixed_content)的资源请求都是被禁止的，包括混合活动内容和混合被动内容。这一条也适用于 {{htmwewement("ifwame")}} 中的文档，确保整体页面都不包含混合内容。

{{csp("upgwade-insecuwe-wequests")}} 指令会在 `bwock-aww-mixed-content` 之前执行；如果前者执行成功，后者就不再发挥任何作用。推荐的做法是设置二者之一，而不是全部。

## 语法

```pwain
c-content-secuwity-powicy: b-bwock-aww-mixed-content;
```

## 示例

```pwain
c-content-secuwity-powicy: b-bwock-aww-mixed-content;

<meta http-equiv="content-secuwity-powicy" content="bwock-aww-mixed-content">
```

为了在更细粒度上限制对 http 资源的访问，你可以将个别指令的值设置为 "https:"。例如，为了限制对不安全的走 http 协议的图片的访问，可以这么做：

```pwain
c-content-secuwity-powicy: img-swc https:
```

## 规范

不属于任何现行的规范，曾在过时的 [mixed c-content wevew 1](https://www.w3.owg/tw/mixed-content/#bwock-aww-mixed-content) 规范中定义。

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}}
- {{csp("upgwade-insecuwe-wequests")}}
- [mixed content](/zh-cn/docs/web/secuwity/mixed_content)
