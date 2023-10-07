---
title: 子资源完整性
slug: Web/Security/Subresource_Integrity
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Security")}}

**子资源完整性**（Subresource Integrity，SRI）是允许浏览器检查其获得的资源（例如从 [CDN](/zh-CN/docs/Glossary/CDN) 获得的）是否被篡改的一项安全特性。它通过验证获取文件的哈希值是否和你提供的哈希值一样来判断资源是否被篡改。

> **备注：** 对于从嵌入文件以外的来源提供的资源的子资源完整性验证，浏览器还使用[跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/CORS)检查资源，以确保提供资源的来源允许它与请求来源共享。

## SRI 如何工作

使用{{Glossary("CDN", "内容分发网络（CDN）")}}在多个站点之间共享脚本和样式表等文件可以提高站点性能并节省带宽。然而，使用 CDN 也存在风险，如果攻击者获得对 CDN 的控制权，则可以将任意恶意内容注入到 CDN 上的文件中（或完全替换掉文件），因此可能潜在地攻击所有从该 CDN 获取文件的站点。

子资源完整性使你能够减轻这种攻击的一些风险，确保你的网络应用程序或网络文档（从 CDN 或任何地方）获取的文件在交付时没有被第三方注入任何额外的内容，也没有对这些文件进行任何其他形式的修改。

## SRI 如何使用

使用子资源完整性功能的方法是，在任何 {{HTMLElement("script")}} 或 {{HTMLElement("link")}} 元素的 `integrity` 属性值中，指定你要告诉浏览器所获取的资源（或文件）的 base64 编码的加密哈希值。

`integrity` 值至少由一个字符串开始，每个字符串包括一个前缀，表示一个特定的哈希算法（目前允许的前缀是 `sha256`、`sha384` 和 `sha512`），后面是一个短横线（-），最后是实际的 base64 编码的哈希。

> **备注：** **integrity** 值可以包含多个由空格分隔的哈希值，只要文件匹配其中任意一个哈希值，就可以通过校验并加载该资源。

使用 base64 编码 sha384 算法计算出摘要后的 `integrity` 值的示例：

```
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

`oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` 即“哈希”部分，`sha384` 前缀说明使用的是 sha384 哈希方法。

> **备注：** 严格来说，`integrity` 值的“哈希”部分是通过对一些输入（例如，一个脚本或样式表文件）应用一个特定的哈希函数而形成的**加密摘要**。但人们通常用“哈希”来表示**加密摘要**，所以本文就用了这个词。

### 生成 SRI 哈希的工具

[SRI Hash Generator](https://srihash.org/) 是一个在线生成 SRI 哈希值的工具。

也可以用 **openssl** 在命令行中执行如下命令来生成 SRI 哈希值：

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

或者用 **shasum** 在命令行中执行：

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

> **备注：**
>
> - 通过管道连接的 `xxd` 步骤从 `shasum` 中获取十六进制的输出，并将其转换为二进制。
> - 通过管道连接的 `awk` 的步骤是必要的，因为 `shasum` 会将其输出中的散列文件名传递给 `xxd`。如果文件名中恰好有有效的十六进制字符，这将产生灾难性的后果——因为 `xxd` 也会对其进行解码并传递给 `base64`。

在 Windows 环境下，你可以使用以下代码创建生成 SRI 哈希的工具：

```batch
@echo off
set bits=384
openssl dgst -sha%bits% -binary %1% | openssl base64 -A > tmp
set /p a= < tmp
del tmp
echo sha%bits%-%a%
pause
```

如何使用这些代码：

1. 在你的环境中的 Windows SendTo 文件夹（例如， `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`）中，将该代码保存在一个名为 `sri-hash.bat` 的文件中。
2. 在文件资源管理器中右击一个文件，选择**发送至...**，然后选择 `sri-hash`。你将在一个命令框中看到完整性值。
3. 选择完整性值，然后右键单击，将其复制到剪贴板上。
4. 按任意键都可以关闭命令框。

## 跨源资源共享和子资源完整性

对于从嵌入文档以外的来源提供的资源的子资源完整性验证，浏览器还使用[跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/CORS)检查资源，以确保提供资源的来源允许它与请求来源共享。因此，资源必须使用 [`Access-Control-Allow-Origin`](/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) 标头来提供，以允许资源与请求方共享；例如：

```http
Access-Control-Allow-Origin: *
```

## 示例

在这个例子中，我们已知 `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` 是一个指定文件 `example-framework.js` 经过 SHA-384 算法得出的摘要，同时在 `https://example.com/example-framework.js` 上有其一份拷贝。

### 在 \<script> 元素中确保 SRI

你可以使用以下的 {{HTMLElement("script")}} 元素告诉浏览器在执行 `https://example.com/example-framework.js` 中的内容之前，必须先比较该文件的哈希值是否和预期的一致，并验证是否匹配。

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> **备注：** 有关 `crossorigin` 属性的更多信息，见 [CORS 设置属性](/zh-CN/docs/Web/HTML/Attributes/crossorigin)。

## 浏览器如何处理 SRI

浏览器根据以下步骤处理 SRI：

1. 当浏览器在 {{HTMLElement("script")}} 或者 {{HTMLElement("link")}} 标签中遇到 `integrity` 属性之后，会在执行脚本或者应用样式表之前对比所加载文件的哈希值和期望的哈希值。

   对于从其他来源提供的资源的子资源完整性验证，浏览器还使用[跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/CORS)检查资源，以确保提供资源的来源允许它与请求来源共享。

2. 如果脚本或样式表不符合其相关的 `integrity` 值，浏览器必须拒绝执行该脚本或拒绝应用该样式表，并且必须返回一个网络错误，表明该脚本或样式表的获取失败。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关资料

- [内容安全策略](/zh-CN/docs/Web/HTTP/CSP)
- HTTP 标头 {{httpheader("Content-Security-Policy")}}
- [一个不能对你进行 XSS 的 CDN：使用 SRI](https://frederik-braun.com/using-subresource-integrity.html)
- [来自 W3C 的 SRI 测试](https://w3c-test.org/subresource-integrity/subresource-integrity.html)
- [SRI Hash 生成器](https://www.srihash.org/)
