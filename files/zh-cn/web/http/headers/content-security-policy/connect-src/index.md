---
title: 'CSP: connect-src'
slug: Web/HTTP/Headers/Content-Security-Policy/connect-src
---

{{HTTPSidebar}}

HTTP 协议头部{{HTTPHeader("Content-Security-Policy")}} (CSP) 的**`connect-src`** 指令用于控制允许通过脚本接口加载的链接地址。其中受到影响的 API 如下：

- {{HTMLElement("a")}} {{htmlattrxref("ping", "a")}},
- {{domxref("Fetch")}},
- {{domxref("XMLHttpRequest")}},
- {{domxref("WebSocket")}}, and
- {{domxref("EventSource")}}.

| CSP version                           | 1                                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------------------- |
| Directive type                        | {{Glossary("Fetch directive")}}                                                    |
| {{CSP("default-src")}} fallback | Yes. If this directive is absent, the user agent will look for the `default-src` directive. |

## Syntax

connect-src 可以设置一个或者多个源地址：

```plain
Content-Security-Policy: connect-src <source>;
Content-Security-Policy: connect-src <source> <source>;
```

### Sources

{{page("/Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## Examples

### Violation cases

给定如下 CSP 头部：

```bash
Content-Security-Policy: connect-src https://example.com/
```

如下的连接请求会被阻塞且不会加载：

```html
<a ping="https://not-example.com">

<script>
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://not-example.com/');
  xhr.send();

  var ws = new WebSocket("https://not-example.com/");

  var es = new EventSource("https://not-example.com/");

  navigator.sendBeacon("https://not-example.com/", { ... });
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Compatibility notes

- Prior to Firefox 23, `xhr-src` was used in place of the `connect-src` directive and only restricted the use of {{domxref("XMLHttpRequest")}}.

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("a")}} {{htmlattrxref("ping", "a")}}
- {{domxref("Fetch")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}
