---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
original_slug: Web/Security/子资源完整性
---

**子资源完整性**(SRI) 是允许浏览器检查其获得的资源（例如从 [CDN](/zh-CN/docs/Glossary/CDN) 获得的）是否被篡改的一项安全特性。它通过验证获取文件的哈希值是否和你提供的哈希值一样来判断资源是否被篡改。

## SRI 如何工作

使用{{Glossary("CDN", "内容分发网络（CDN）")}}在多个站点之间共享脚本和样式表等文件可以提高站点性能并节省带宽。然而，使用 CDN 也存在风险，如果攻击者获得对 CDN 的控制权，则可以将任意恶意内容注入到 CDN 上的文件中（或完全替换掉文件）
），因此可能潜在地攻击所有从该 CDN 获取文件的站点。

子资源完整性通过确保 Web 应用程序获得的文件未经第三方注入或其他任何形式的修改来降低这种攻击的风险。

> **备注：** SRI 并不能规避所有的风险。第三方库经常会自己请求额外的信息，这就有可能会携带用户的账号密码等关键信息。这些经常需要 js 功能的支持，比如一个地图库会需要取\<svg>数据来渲染，但是包含点击事件。

## 如何使用 SRI

将使用 base64 编码过后的文件哈希值写入你所引用的 {{HTMLElement("script")}} 或 {{HTMLElement("link")}} 标签的 **integrity** 属性值中即可启用子资源完整性功能。

integrity 值分成两个部分，第一部分指定哈希值的生成算法（目前支持 sha256、sha384 及 sha512），第二部分是经过 base64 编码的实际哈希值，两者之间通过一个短横（-）分割。

> **备注：** **integrity** 值可以包含多个由空格分隔的哈希值，只要文件匹配其中任意一个哈希值，就可以通过校验并加载该资源。

使用 base64 编码 sha384 算法计算出摘要后的 **integrity** 值的例子：

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

`oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` 即哈希值部分，`sha384` 前缀说明使用的是 sha384 哈希方法。

> **备注：** **integrity** 中的“hash”部分，严格来说，是一种经过特定的哈希函数转换之后的密码学摘要。但是更一般的叫法就是**哈希**，本文用的也是这种叫法。

### 生成 SRI 哈希的工具

你可以用 **openssl** 在命令行中执行如下命令来生成 SRI 哈希值：

```plain
cat FILENAME.js | openssl dgst -sha384 -binary | openssl enc -base64 -A
```

或者用 **shasum** 在命令行中执行：

```plain
shasum -b -a 384 FILENAME.js | xxd -r -p | base64
```

另外，[SRI Hash Generator](https://srihash.org/) 是一个在线生成 SRI 哈希值的工具。

## 内容安全策略及子资源完整性

你可以根据[内容安全策略](/zh-CN/docs/Web/HTTP/CSP)来配置你的服务器使得指定类型的文件遵守 SRI。这是通过在 CSP 头部添加 {{CSP("require-sri-for")}} 指令实现的：

```plain
Content-Security-Policy: require-sri-for script;
```

这条指令规定了所有 JavaScript 都要有 integrity 属性，且通过验证才能被加载。

你也可以指定所有样式表也要通过 SRI 验证：

```plain
Content-Security-Policy: require-sri-for style;
```

你也可以对两者都加上验证。

## 范例

在这个例子中，我们已知 `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` 是一个指定文件，比如 `example-framework.js`，经过 `SHA-384` 算法得出的摘要，同时在 `https://example.com/example-framework.js` 上有其一份拷贝。

### 在 script 标签中增加 SRI

你可以使用以下的 {{HTMLElement("script")}} 元素告诉浏览器在执行 `https://example.com/example-framework.js` 中的内容之前，必须先比较该文件的哈希值是否和预期的一致，只有一致才能执行。

```html
<script src="https://example.com/example-framework.js"
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous"></script>
```

> **备注：** 有关 **crossorigin** 属性的更多信息，见 [CORS settings attributes](/zh-CN/docs/Web/HTML/CORS_settings_attributes).

## 浏览器如何处理 SRI

浏览器根据以下步骤处理 SRI：

1. 当浏览器在 {{HTMLElement("script")}} 或者 {{HTMLElement("link")}} 标签中遇到 **integrity** 属性之后，会在执行脚本或者应用样式表之前对比所加载文件的哈希值和期望的哈希值。
2. 当脚本或者样式表的哈希值和期望的不一致时，浏览器必须拒绝执行脚本或者应用样式表，并且必须返回一个网络错误说明获得脚本或样式表失败。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关资料

- Content Security Policy 内容安全策略
- {{httpheader("Content-Security-Policy")}}
- [A CDN that can not XSS you: Using Subresource Integrity](https://frederik-braun.com/using-subresource-integrity.html)

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Security")}}
