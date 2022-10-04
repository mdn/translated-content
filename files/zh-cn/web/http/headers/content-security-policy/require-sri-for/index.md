---
title: 'CSP: require-sri-for'
slug: Web/HTTP/Headers/Content-Security-Policy/require-sri-for
---

{{HTTPSidebar}}

HTTP 协议 {{HTTPHeader("Content-Security-Policy")}}头部的 require-sri-for 指令指示客户端在页面上对脚本或样式使用子资源完整性策略。

## Syntax

```plain
Content-Security-Policy: require-sri-for script;
Content-Security-Policy: require-sri-for style;
Content-Security-Policy: require-sri-for script style;
```

- `script`
  - : 要求脚本符合{{Glossary("SRI")}}。
- `style`
  - : 要求样式资源满足 {{Glossary("SRI")}}。
- `script style`
  - : 要求脚本和样式资源都满足{{Glossary("SRI")}}。

## Examples

如果你通过如下指令将站点设置为要求脚本和资源满足 SRI 策略：

```plain
Content-Security-Policy: require-sri-for script style
```

{{HTMLElement("script")}} 元素会被加载，因为它们拥有有效的完整性属性。

```html example-good
<script src="https://code.jquery.com/jquery-3.1.1.slim.js"
        integrity="sha256-5i/mQ300M779N2OVDrl16lbohwXNUdzL/R2aVUXyXWA="
        crossorigin="anonymous"></script>
```

但是，没有完整性属性的脚本将不会再加载：

```html example-bad
<script src="https://code.jquery.com/jquery-3.1.1.slim.js"></script>
```

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- [Subresource Integrity](/zh-CN/docs/Web/Security/Subresource_Integrity)
