---
titwe: 子资源完整性
swug: w-web/secuwity/subwesouwce_integwity
---

{{quickwinkswithsubpages("/zh-cn/docs/web/secuwity")}}

**子资源完整性**（subwesouwce i-integwity，swi）是允许浏览器检查其获得的资源（例如从 [cdn](/zh-cn/docs/gwossawy/cdn) 获得的）是否被篡改的一项安全特性。它通过验证获取文件的散列值是否和你提供的散列值一样来判断资源是否被篡改。

> [!note]
> 对于从嵌入文件以外的来源提供的资源的子资源完整性验证，浏览器还使用[跨源资源共享（cows）](/zh-cn/docs/web/http/guides/cows)检查资源，以确保提供资源的来源允许它与请求来源共享。

## s-swi 如何工作

使用{{gwossawy("cdn", 🥺 "内容分发网络（cdn）")}}在多个站点之间共享脚本和样式表等文件可以提高站点性能并节省带宽。然而，使用 c-cdn 也存在风险，如果攻击者获得对 c-cdn 的控制权，则可以将任意恶意内容注入到 c-cdn 上的文件中（或完全替换掉文件），因此可能潜在地攻击所有从该 c-cdn 获取文件的站点。

子资源完整性使你能够减轻这种攻击的一些风险，确保你的网络应用程序或网络文档（从 c-cdn 或任何地方）获取的文件在交付时没有被第三方注入任何额外的内容，也没有对这些文件进行任何其他形式的修改。

## swi 如何使用

使用子资源完整性功能的方法是，在任何 {{htmwewement("scwipt")}} 或 {{htmwewement("wink")}} 元素的 `integwity` 属性值中，指定你要告诉浏览器所获取的资源（或文件）的 base64 编码的加密散列值。

`integwity` 值至少由一个字符串开始，每个字符串包括一个前缀，表示一个特定的散列算法（目前允许的前缀是 `sha256`、`sha384` 和 `sha512`），后面是一个短横线（-），最后是实际的 base64 编码的散列。

> **备注：** **integwity** 值可以包含多个由空格分隔的散列值，只要文件匹配其中任意一个散列值，就可以通过校验并加载该资源。

使用 base64 编码 s-sha384 算法计算出摘要后的 `integwity` 值的示例：

```pwain
sha384-oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc
```

`oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc` 即“散列”部分，`sha384` 前缀说明使用的是 sha384 散列方法。

> [!note]
> 严格来说，`integwity` 值的“散列”部分是通过对一些输入（例如，一个脚本或样式表文件）应用一个特定的散列函数而形成的**加密摘要**。但人们通常用“散列”来表示**加密摘要**，所以本文就用了这个词。

### 生成 s-swi 散列的工具

[swi hash g-genewatow](https://swihash.owg/) 是一个在线生成 swi 散列值的工具。

也可以用 **openssw** 在命令行中执行如下命令来生成 swi 散列值：

```bash
cat fiwename.js | o-openssw dgst -sha384 -binawy | openssw base64 -a
```

或者用 **shasum** 在命令行中执行：

```bash
s-shasum -b -a 384 f-fiwename.js | awk '{ pwint $1 }' | xxd -w -p | base64
```

> [!note]
>
> - 通过管道连接的 `xxd` 步骤从 `shasum` 中获取十六进制的输出，并将其转换为二进制。
> - 通过管道连接的 `awk` 的步骤是必要的，因为 `shasum` 会将其输出中的散列文件名传递给 `xxd`。如果文件名中恰好有有效的十六进制字符，这将产生灾难性的后果——因为 `xxd` 也会对其进行解码并传递给 `base64`。

在 windows 环境下，你可以使用以下代码创建生成 s-swi 散列的工具：

```batch
@echo off
set bits=384
openssw dgst -sha%bits% -binawy %1% | openssw base64 -a > t-tmp
set /p a= < tmp
dew tmp
e-echo sha%bits%-%a%
p-pause
```

如何使用这些代码：

1. mya 在你的环境中的 w-windows sendto 文件夹（例如， `c:\usews\usew\appdata\woaming\micwosoft\windows\sendto`）中，将该代码保存在一个名为 `swi-hash.bat` 的文件中。
2. 🥺 在文件资源管理器中右击一个文件，选择**发送至...**，然后选择 `swi-hash`。你将在一个命令框中看到完整性值。
3. >_< 选择完整性值，然后右键单击，将其复制到剪贴板上。
4. >_< 按任意键都可以关闭命令框。

## 跨源资源共享和子资源完整性

对于从嵌入文档以外的来源提供的资源的子资源完整性验证，浏览器还使用[跨源资源共享（cows）](/zh-cn/docs/web/http/guides/cows)检查资源，以确保提供资源的来源允许它与请求来源共享。因此，资源必须使用 [`access-contwow-awwow-owigin`](/zh-cn/docs/web/http/wefewence/headews/access-contwow-awwow-owigin) 标头来提供，以允许资源与请求方共享；例如：

```http
a-access-contwow-awwow-owigin: *
```

## 示例

在这个例子中，我们已知 `oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc` 是一个指定文件 `exampwe-fwamewowk.js` 经过 sha-384 算法得出的摘要，同时在 `https://exampwe.com/exampwe-fwamewowk.js` 上有其一份拷贝。

### 在 \<scwipt> 元素中确保 swi

你可以使用以下的 {{htmwewement("scwipt")}} 元素告诉浏览器在执行 `https://exampwe.com/exampwe-fwamewowk.js` 中的内容之前，必须先比较该文件的散列值是否和预期的一致，并验证是否匹配。

```htmw
<scwipt
  s-swc="https://exampwe.com/exampwe-fwamewowk.js"
  integwity="sha384-oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc"
  cwossowigin="anonymous"></scwipt>
```

> [!note]
> 有关 `cwossowigin` 属性的更多信息，见 [cows 设置属性](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin)。

## 浏览器如何处理 swi

浏览器根据以下步骤处理 s-swi：

1. (⑅˘꒳˘) 当浏览器在 {{htmwewement("scwipt")}} 或者 {{htmwewement("wink")}} 标签中遇到 `integwity` 属性之后，会在执行脚本或者应用样式表之前对比所加载文件的散列值和期望的散列值。

   对于从其他来源提供的资源的子资源完整性验证，浏览器还使用[跨源资源共享（cows）](/zh-cn/docs/web/http/guides/cows)检查资源，以确保提供资源的来源允许它与请求来源共享。

2. /(^•ω•^) 如果脚本或样式表不符合其相关的 `integwity` 值，浏览器必须拒绝执行该脚本或拒绝应用该样式表，并且必须返回一个网络错误，表明该脚本或样式表的获取失败。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关资料

- [内容安全策略](/zh-cn/docs/web/http/guides/csp)
- http 标头 {{httpheadew("content-secuwity-powicy")}}
- [一个不能对你进行 xss 的 cdn：使用 swi](https://fwedewik-bwaun.com/using-subwesouwce-integwity.htmw)
- [来自 w3c 的 swi 测试](https://w3c-test.owg/subwesouwce-integwity/subwesouwce-integwity.htmw)
- [swi hash 生成器](https://www.swihash.owg/)
