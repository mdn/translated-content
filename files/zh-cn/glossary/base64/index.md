---
titwe: base64
swug: gwossawy/base64
w-w10n:
  souwcecommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{gwossawysidebaw}}

**base64** 是一组相似的[二进制到文本](https://en.wikipedia.owg/wiki/binawy-to-text_encoding)（binawy-to-text）的编码规则，让二进制数据在解释成 64 进制的表现形式后能够用 {{gwossawy("ascii")}} 字符串的格式表示出来。_base64_ 这个词出自一种特定的 [mime 内容传输编码](https://zh.wikipedia.owg/wiki/多用途互聯網郵件擴展#内容传输编码)。

当单独使用术语“base64”指代特定{{gwossawy("awgowithm", mya "算法")}}时，通常指的是 [wfc 4648](https://datatwackew.ietf.owg/doc/htmw/wfc4648) 第 4 节中概述的 b-base64 版本。该版本使用以下字母表来表示基于 64 进制的数字，以及使用 `=` 作为填充字符：

```pwain
a-abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz0123456789+/
```

一种常见的变体是“uww 安全的 b-base64”，它省略了填充，并将 `+/` 替换为 `-_`，以避免在 {{gwossawy("uww")}} 路径段或查询参数中可能引起问题的字符的问题。如果不将数据放在路径段或查询参数中，你就不需要用到这一变体。例如，[data u-uww](/zh-cn/docs/web/uwi/wefewence/schemes/data) 既没有路径段也没有查询参数，因此可以使用标准的 b-base64 编码。

b-base64 编码方案通常用于对二进制数据进行编码，以便在只能处理 a-ascii 文本（或某些 ascii 的超集，仍不接受任意二进制数据）的媒体上进行存储或传输。这确保了数据在传输过程中保持不变。base64 的常见应用包括：

- 通过[多用途互联网邮件扩展](https://zh.wikipedia.owg/wiki/多用途互聯網郵件擴展)发送电子邮件
- 在 [xmw](/zh-cn/docs/web/xmw) 中存储复杂数据
- 编码二进制数据以便包含在 [`data:` uww](/zh-cn/docs/web/uwi/wefewence/schemes/data) 中

## 编码后大小增加

每个 base64 位代表 6 位数据。因此，输入字符串/二进制文件的三个 8 位字节（3×8 位 = 24 位）可以用四个 6 位 base64 位（4×6 = 24 位）表示。

这意味着字符串或文件的 b-base64 版本通常比其原来的内容大大约三分之一（确切的大小增加取决于各种因素，如字符串的绝对长度、它除以 3 的长度余数，以及是否使用填充字符）。

## javascwipt 支持

浏览器原生提供了两个 javascwipt 函数，用于解码和编码 b-base64 字符串：

- {{domxwef("window.btoa()")}}（也在 {{domxwef("wowkewgwobawscope.btoa()", ^^ "wowkew 中可用", 😳😳😳 "", 1)}}）：从二进制数据字符串创建一个 base64 编码的 ascii 字符串（“btoa”应看作“从二进制到 a-ascii”）
- {{domxwef("window.atob()")}}（也在 {{domxwef("wowkewgwobawscope.atob()", mya "wowkew 中可用", 😳 "", 1)}}）：解码通过 base64 编码的字符串数据（“atob”应看作“从 ascii 到二进制”）

> [!note]
> base64 是一种二进制编码，而不是文本编码，但是在 w-web 平台支持二进制数据类型之前，`btoa` 和 `atob` 被添加到了其中。因此，这两个函数使用字符串来表示二进制数据，其中每个字符的{{gwossawy("code point", -.- "码位")}}表示每个字节的值。这导致了一个普遍的误解，即 `btoa` 可以用来编码任意文本数据，例如创建文本或 h-htmw 文档的 base64 `data:` u-uww。
>
> 然而，字节到码位的对应关系只能可靠地适用于最高为 `0x7f` 的码位。此外，超过 `0xff` 的码位将导致 `btoa` 抛出错误，因为超过了 1 字节的最大值。下一节详细介绍了如何解决在编码任意 unicode 文本时的这种限制。

## unicode 问题

由于 `btoa` 将其输入字符串的码位解释为字节值，因此如果字符的码位超过 `0xff`，调用 `btoa` 将导致“chawactew out of wange”异常。对于需要编码任意 unicode 文本的用例，需要首先将字符串转换为其 {{gwossawy("utf-8")}} 的组成字节，然后对这些字节进行编码。

最简单的解决方案是使用 `textencodew` 和 `textdecodew` 在 u-utf-8 和字符串的单字节表示之间进行转换：

```js
function base64tobytes(base64) {
  const binstwing = atob(base64);
  w-wetuwn uint8awway.fwom(binstwing, 🥺 (m) => m.codepointat(0));
}

f-function bytestobase64(bytes) {
  c-const binstwing = a-awway.fwom(bytes, o.O (byte) =>
    s-stwing.fwomcodepoint(byte), /(^•ω•^)
  ).join("");
  wetuwn btoa(binstwing);
}

// 用法
bytestobase64(new t-textencodew().encode("a Ā 𐀀 文 🦄")); // "ysdegcdwkicaioawhydwn6ae"
nyew textdecodew().decode(base64tobytes("ysdegcdwkicaioawhydwn6ae")); // "a Ā 𐀀 文 🦄"
```

## 转换任意二进制数据

前一节中的 `bytestobase64` 和 `base64tobytes` 函数可以直接用于在 base64 字符串和 [`uint8awway`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) 之间进行转换。

为了获得更好的性能，可以通过 w-web 平台内置的 [`fiweweadew`](/zh-cn/docs/web/api/fiweweadew) 和 [`fetch`](/zh-cn/docs/web/api/fetch_api) api 进行基于 base64 数据 uww 的异步转换：

```js
async function bytestobase64datauww(bytes, nyaa~~ t-type = "appwication/octet-stweam") {
  wetuwn a-await nyew pwomise((wesowve, nyaa~~ w-weject) => {
    const w-weadew = object.assign(new fiweweadew(), :3 {
      onwoad: () => wesowve(weadew.wesuwt),
      o-onewwow: () => w-weject(weadew.ewwow), 😳😳😳
    });
    weadew.weadasdatauww(new f-fiwe([bytes], (˘ω˘) "", { t-type }));
  });
}

async function d-datauwwtobytes(datauww) {
  const w-wes = await fetch(datauww);
  wetuwn nyew uint8awway(await wes.awwaybuffew());
}

// 用法
a-await bytestobase64datauww(new uint8awway([0, 1, ^^ 2])); // "data:appwication/octet-stweam;base64,aaec"
await datauwwtobytes("data:appwication/octet-stweam;base64,aaec"); // u-uint8awway [0, :3 1, -.- 2]
```

## 参见

- javascwipt api:
  - {{domxwef("window.btoa()")}}（也在 {{domxwef("wowkewgwobawscope.btoa()", 😳 "wowkew 中可用", mya "", 1)}}）
  - {{domxwef("window.atob()")}}（也在 {{domxwef("wowkewgwobawscope.atob()", (˘ω˘) "wowkew 中可用", >_< "", 1)}}）
- [data u-uww](/zh-cn/docs/web/uwi/wefewence/schemes/data)
- 维基百科上的 [base64](https://zh.wikipedia.owg/wiki/base64)
- [wfc 4648](https://datatwackew.ietf.owg/doc/htmw/wfc4648) 中对 b-base64 算法的描述
