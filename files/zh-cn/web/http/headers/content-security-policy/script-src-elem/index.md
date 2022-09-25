---
title: 'CSP: script-src-elem'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
---

{{HTTPSidebar}}

HTTP 协议中 {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-elem`** 指示符明指定了合法的 js 要素来源 {{HTMLElement("script")}} ，但是不包括类似 onclick 这样的事件处理器中包含的内联脚本。

| CSP 版本                              | 3                                                                                                                                                                               |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Directive type                        | {{Glossary("Fetch directive")}}                                                                                                                                        |
| {{CSP("default-src")}} fallback | Yes. If this directive is absent, the user agent will look for the {{CSP("script-src")}} directive, and if both of them are absent, fallback to `default-src` directive. |

## 语法

`script-src-elem` 可以允许多个来源：

```plain
Content-Security-Policy: script-src-elem <source>;
Content-Security-Policy: script-src-elem <source> <source>;
```

`script-src-elem` 可以跟 {{CSP("script-src")}}一起用：

```plain
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

### Sources

{{page("Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## 范例

### 回退到 script-src

如果没有 `script-src-elem` 存在，客户端会回退到 {{CSP("script-src")}} 指示符，如果那个也还是没有那就回退到 {{CSP("default-src")}}。

TODO: Add comprehensive examples.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他的链接

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-attr")}}
