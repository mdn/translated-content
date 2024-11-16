---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

**Base64** 是一组相似的[二进制到文本](https://en.wikipedia.org/wiki/Binary-to-text_encoding)（binary-to-text）的编码规则，让二进制数据在解释成 64 进制的表现形式后能够用 {{glossary("ASCII")}} 字符串的格式表示出来。_Base64_ 这个词出自一种特定的 [MIME 内容传输编码](https://zh.wikipedia.org/wiki/多用途互聯網郵件擴展#内容传输编码)。

当单独使用术语“Base64”指代特定{{glossary("algorithm", "算法")}}时，通常指的是 [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648) 第 4 节中概述的 Base64 版本。该版本使用以下字母表来表示基于 64 进制的数字，以及使用 `=` 作为填充字符：

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

一种常见的变体是“URL 安全的 Base64”，它省略了填充，并将 `+/` 替换为 `-_`，以避免在 {{glossary("URL")}} 路径段或查询参数中可能引起问题的字符的问题。如果不将数据放在路径段或查询参数中，你就不需要用到这一变体。例如，[data URL](/zh-CN/docs/Web/URI/Schemes/data) 既没有路径段也没有查询参数，因此可以使用标准的 Base64 编码。

Base64 编码方案通常用于对二进制数据进行编码，以便在只能处理 ASCII 文本（或某些 ASCII 的超集，仍不接受任意二进制数据）的媒体上进行存储或传输。这确保了数据在传输过程中保持不变。Base64 的常见应用包括：

- 通过[多用途互联网邮件扩展](https://zh.wikipedia.org/wiki/多用途互聯網郵件擴展)发送电子邮件
- 在 [XML](/zh-CN/docs/Web/XML) 中存储复杂数据
- 编码二进制数据以便包含在 [`data:` URL](/zh-CN/docs/Web/URI/Schemes/data) 中

## 编码后大小增加

每个 Base64 位代表 6 位数据。因此，输入字符串/二进制文件的三个 8 位字节（3×8 位 = 24 位）可以用四个 6 位 Base64 位（4×6 = 24 位）表示。

这意味着字符串或文件的 Base64 版本通常比其原来的内容大大约三分之一（确切的大小增加取决于各种因素，如字符串的绝对长度、它除以 3 的长度余数，以及是否使用填充字符）。

## JavaScript 支持

浏览器原生提供了两个 JavaScript 函数，用于解码和编码 Base64 字符串：

- {{domxref("Window.btoa()")}}（也在 {{domxref("WorkerGlobalScope.btoa()", "worker 中可用", "", 1)}}）：从二进制数据字符串创建一个 Base64 编码的 ASCII 字符串（“btoa”应看作“从二进制到 ASCII”）
- {{domxref("Window.atob()")}}（也在 {{domxref("WorkerGlobalScope.atob()", "worker 中可用", "", 1)}}）：解码通过 Base64 编码的字符串数据（“atob”应看作“从 ASCII 到二进制”）

> [!NOTE]
> Base64 是一种二进制编码，而不是文本编码，但是在 Web 平台支持二进制数据类型之前，`btoa` 和 `atob` 被添加到了其中。因此，这两个函数使用字符串来表示二进制数据，其中每个字符的{{glossary("code point", "码位")}}表示每个字节的值。这导致了一个普遍的误解，即 `btoa` 可以用来编码任意文本数据，例如创建文本或 HTML 文档的 Base64 `data:` URL。
>
> 然而，字节到码位的对应关系只能可靠地适用于最高为 `0x7f` 的码位。此外，超过 `0xff` 的码位将导致 `btoa` 抛出错误，因为超过了 1 字节的最大值。下一节详细介绍了如何解决在编码任意 Unicode 文本时的这种限制。

## Unicode 问题

由于 `btoa` 将其输入字符串的码位解释为字节值，因此如果字符的码位超过 `0xff`，调用 `btoa` 将导致“Character Out Of Range”异常。对于需要编码任意 Unicode 文本的用例，需要首先将字符串转换为其 {{glossary("UTF-8")}} 的组成字节，然后对这些字节进行编码。

最简单的解决方案是使用 `TextEncoder` 和 `TextDecoder` 在 UTF-8 和字符串的单字节表示之间进行转换：

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

// 用法
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

## 转换任意二进制数据

前一节中的 `bytesToBase64` 和 `base64ToBytes` 函数可以直接用于在 Base64 字符串和 [`Uint8Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) 之间进行转换。

为了获得更好的性能，可以通过 Web 平台内置的 [`FileReader`](/zh-CN/docs/Web/API/FileReader) 和 [`fetch`](/zh-CN/docs/Web/API/Fetch_API) API 进行基于 Base64 数据 URL 的异步转换：

```js
async function bytesToBase64DataUrl(bytes, type = "application/octet-stream") {
  return await new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: () => resolve(reader.result),
      onerror: () => reject(reader.error),
    });
    reader.readAsDataURL(new File([bytes], "", { type }));
  });
}

async function dataUrlToBytes(dataUrl) {
  const res = await fetch(dataUrl);
  return new Uint8Array(await res.arrayBuffer());
}

// 用法
await bytesToBase64DataUrl(new Uint8Array([0, 1, 2])); // "data:application/octet-stream;base64,AAEC"
await dataUrlToBytes("data:application/octet-stream;base64,AAEC"); // Uint8Array [0, 1, 2]
```

## 参见

- JavaScript API:
  - {{domxref("Window.btoa()")}}（也在 {{domxref("WorkerGlobalScope.btoa()", "worker 中可用", "", 1)}}）
  - {{domxref("Window.atob()")}}（也在 {{domxref("WorkerGlobalScope.atob()", "worker 中可用", "", 1)}}）
- [Data URL](/zh-CN/docs/Web/URI/Schemes/data)
- 维基百科上的 [Base64](https://zh.wikipedia.org/wiki/Base64)
- [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648) 中对 Base64 算法的描述
