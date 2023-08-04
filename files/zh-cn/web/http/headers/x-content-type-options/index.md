---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
---

{{HTTPSidebar}}

**`X-Content-Type-Options`** HTTP 消息头相当于一个提示标志，被服务器用来提示客户端一定要遵循在 {{HTTPHeader("Content-Type")}} 首部中对 [MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 的设定，而不能对其进行修改。这就禁用了客户端的 [MIME 类型嗅探](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types#MIME_sniffing)行为，换句话说，也就是意味着网站管理员确定自己的设置没有问题。

该消息头最初是由微软在 IE 8 浏览器中引入的，提供给网站管理员用作禁用内容嗅探的手段，内容嗅探技术可能会把不可执行的 MIME 类型转变为可执行的 MIME 类型。在此之后，其他浏览器也相继引入了这个消息头，尽管它们的 MIME 嗅探算法没有那么有侵略性。

安全测试人员通常期望站点设置了该消息头。

注意：`nosniff` 只应用于 "`script`" 和 "`style`" 两种类型。事实证明，将其应用于图片类型的文件会导致[与现有的站点冲突](https://github.com/whatwg/fetch/issues/395)。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
X-Content-Type-Options: nosniff
```

## 指令

- `nosniff`

  - : 下面两种情况的请求将被阻止：

    - 请求类型是"`style`" 但是 MIME 类型不是 "`text/css`"，
    - 请求类型是"`script`" 但是 MIME 类型不是 [JavaScript MIME 类型](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Content-Type")}}
- The [original definition](https://blogs.msdn.microsoft.com/ie/2008/09/02/ie8-security-part-vi-beta-2-update/) of X-Content-Type-Options by Microsoft.
- The [Mozilla Observatory](https://mozilla.github.io/http-observatory-website/) tool testing the configuration (including this header) of Web sites for safety and security
- [Mitigating MIME Confusion Attacks in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
