---
title: Base64
slug: Glossary/Base64
---

{{GlossarySidebar}}

**Base64** 是一组相似的[二进制到文本](https://en.wikipedia.org/wiki/Binary-to-text_encoding)（binary-to-text）的编码规则，使得二进制数据在解释成 radix-64 的表现形式后能够用 ASCII 字符串的格式表示出来。_Base64_ 这个词出自一种特定的 [MIME 内容传输编码](https://zh.wikipedia.org/wiki/多用途互聯網郵件擴展#内容传输编码)。

Base64 编码方案通常用于需要对二进制数据进行编码的情况，这些数据需要通过设计用于处理 ASCII 的媒体进行存储和传输。这样是为了保证数据的完整并且不用在传输过程中修改这些数据。Base64 也被一些应用（包括使用 [MIME](https://zh.wikipedia.org/wiki/多用途互聯網郵件擴展) 的电子邮件）和在 [XML](/zh-CN/docs/Web/XML) 中储存复杂数据时使用。

Base64 编码在网络上的一个常见应用是对二进制数据进行编码，以便将其纳入 [data: URL](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) 中。

在 JavaScript 中，有两个函数被分别用来处理解码和编码 Base64 字符串：

- [`btoa()`](/zh-CN/docs/Web/API/btoa)：从二进制数据“字符串”创建一个 Base-64 编码的 ASCII 字符串（“btoa”应读作“binary to ASCII”）
- [`atob()`](/zh-CN/docs/Web/API/atob)：解码通过 Base-64 编码的字符串数据（“atob”应读作“ASCII to binary”）

`atob()` 和 `btoa()` 使用的算法在 [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648) 第四节中给出。

> **备注：** `btoa()` 需要传入二进制数据，如果给定的字符串包含任何 UTF-16 表示的字符占据一个以上的字节，则会抛出一个异常。

## 编码尺寸增加

每一个 Base64 字符实际上代表着 6 比特位。因此，3 字节（一字节是 8 比特，3 字节也就是 24 比特）的字符串/二进制文件可以转换成 4 个 Base64 字符（4x6 = 24 比特）。

这意味着 Base64 格式的字符串或文件的尺寸约是原始尺寸的 133%（增加了大约 33%）。如果编码的数据很少，增加的比例可能会更高。例如：长度为 1 的字符串 `"a"` 进行 Base64 编码后是 `"YQ=="`，长度为 4，尺寸增加了 3 倍。

## “Unicode 问题”

由于 JavaScript 字符串是 16 位编码的字符串，在大多数浏览器中，在 Unicode 字符串上调用 `window.btoa`，如果一个字符超过了 8 位 ASCII 编码字符的范围，就会引起 `Character Out Of Range` 异常。有两种可能的方法来解决这个问题：

- 第一种是先对整个字符串转义，然后进行编码；
- 第二种是将 UTF-16 字符串转换为 UTF-8 字符数组，然后进行编码。

以下是两种可能的方法：

### 方案 1——先转义字符串

```js
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

// Usage:
utf8_to_b64("✓ à la mode"); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8("4pyTIMOgIGxhIG1vZGU="); // "✓ à la mode"
```

该方案由 [Johan Sundström](https://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html) 提出。

另一个可能的解决方案是不利用现在已经废弃的 'unescape' 和 'escape' 函数。不过这个方案并没有对输入的字符串进行 base64 编码。注意，`utf8_to_b64` 和 `b64EncodeUnicode` 的输出结果的不同。采用这种方式可能会导致与其他应用程序的互操作性问题。

```js
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str));
}

function UnicodeDecodeB64(str) {
  return decodeURIComponent(atob(str));
}

b64EncodeUnicode("✓ à la mode"); // "JUUyJTlDJTkzJTIwJUMzJUEwJTIwbGElMjBtb2Rl"
UnicodeDecodeB64("JUUyJTlDJTkzJTIwJUMzJUEwJTIwbGElMjBtb2Rl"); // "✓ à la mode"
```

### 方案 2——使用 `TypedArray` 和 UTF-8 重写 `atob()` 和 `btoa()` 方法

> **备注：** 以下代码对于从 Base64 字符串中获取 [ArrayBuffer](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 和/或从 ArrayBuffer 获取 Base64 字符串（[见下文](#附录：将_base64_字符串解码为_uint8array_或_arraybuffer)）也很有用。

```js
"use strict";
// Array of bytes to Base64 string decoding
function b64ToUint6(nChr) {
  return nChr > 64 && nChr < 91
    ? nChr - 65
    : nChr > 96 && nChr < 123
    ? nChr - 71
    : nChr > 47 && nChr < 58
    ? nChr + 4
    : nChr === 43
    ? 62
    : nChr === 47
    ? 63
    : 0;
}

function base64DecToArr(sBase64, nBlocksSize) {
  const sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, ""); // Remove any non-base64 characters, such as trailing "=", whitespace, and more.
  const nInLen = sB64Enc.length;
  const nOutLen = nBlocksSize
    ? Math.ceil(((nInLen * 3 + 1) >> 2) / nBlocksSize) * nBlocksSize
    : (nInLen * 3 + 1) >> 2;
  const taBytes = new Uint8Array(nOutLen);

  let nMod3;
  let nMod4;
  let nUint24 = 0;
  let nOutIdx = 0;
  for (let nInIdx = 0; nInIdx < nInLen; nInIdx++) {
    nMod4 = nInIdx & 3;
    nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << (6 * (3 - nMod4));
    if (nMod4 === 3 || nInLen - nInIdx === 1) {
      nMod3 = 0;
      while (nMod3 < 3 && nOutIdx < nOutLen) {
        taBytes[nOutIdx] = (nUint24 >>> ((16 >>> nMod3) & 24)) & 255;
        nMod3++;
        nOutIdx++;
      }
      nUint24 = 0;
    }
  }

  return taBytes;
}

/* Base64 string to array encoding */
function uint6ToB64(nUint6) {
  return nUint6 < 26
    ? nUint6 + 65
    : nUint6 < 52
    ? nUint6 + 71
    : nUint6 < 62
    ? nUint6 - 4
    : nUint6 === 62
    ? 43
    : nUint6 === 63
    ? 47
    : 65;
}

function base64EncArr(aBytes) {
  let nMod3 = 2;
  let sB64Enc = "";

  const nLen = aBytes.length;
  let nUint24 = 0;
  for (let nIdx = 0; nIdx < nLen; nIdx++) {
    nMod3 = nIdx % 3;
    // To break your base64 into several 80-character lines, add:
    //   if (nIdx > 0 && ((nIdx * 4) / 3) % 76 === 0) {
    //      sB64Enc += "\r\n";
    //    }

    nUint24 |= aBytes[nIdx] << ((16 >>> nMod3) & 24);
    if (nMod3 === 2 || aBytes.length - nIdx === 1) {
      sB64Enc += String.fromCodePoint(
        uint6ToB64((nUint24 >>> 18) & 63),
        uint6ToB64((nUint24 >>> 12) & 63),
        uint6ToB64((nUint24 >>> 6) & 63),
        uint6ToB64(nUint24 & 63),
      );
      nUint24 = 0;
    }
  }
  return (
    sB64Enc.substring(0, sB64Enc.length - 2 + nMod3) +
    (nMod3 === 2 ? "" : nMod3 === 1 ? "=" : "==")
  );
}

/* UTF-8 array to JS string and vice versa */

function UTF8ArrToStr(aBytes) {
  let sView = "";
  let nPart;
  const nLen = aBytes.length;
  for (let nIdx = 0; nIdx < nLen; nIdx++) {
    nPart = aBytes[nIdx];
    sView += String.fromCodePoint(
      nPart > 251 && nPart < 254 && nIdx + 5 < nLen /* six bytes */
        ? /* (nPart - 252 << 30) may be not so safe in ECMAScript! So…: */
          (nPart - 252) * 1073741824 +
            ((aBytes[++nIdx] - 128) << 24) +
            ((aBytes[++nIdx] - 128) << 18) +
            ((aBytes[++nIdx] - 128) << 12) +
            ((aBytes[++nIdx] - 128) << 6) +
            aBytes[++nIdx] -
            128
        : nPart > 247 && nPart < 252 && nIdx + 4 < nLen /* five bytes */
        ? ((nPart - 248) << 24) +
          ((aBytes[++nIdx] - 128) << 18) +
          ((aBytes[++nIdx] - 128) << 12) +
          ((aBytes[++nIdx] - 128) << 6) +
          aBytes[++nIdx] -
          128
        : nPart > 239 && nPart < 248 && nIdx + 3 < nLen /* four bytes */
        ? ((nPart - 240) << 18) +
          ((aBytes[++nIdx] - 128) << 12) +
          ((aBytes[++nIdx] - 128) << 6) +
          aBytes[++nIdx] -
          128
        : nPart > 223 && nPart < 240 && nIdx + 2 < nLen /* three bytes */
        ? ((nPart - 224) << 12) +
          ((aBytes[++nIdx] - 128) << 6) +
          aBytes[++nIdx] -
          128
        : nPart > 191 && nPart < 224 && nIdx + 1 < nLen /* two bytes */
        ? ((nPart - 192) << 6) + aBytes[++nIdx] - 128
        : /* nPart < 127 ? */ /* one byte */
          nPart,
    );
  }
  return sView;
}

function strToUTF8Arr(sDOMStr) {
  let aBytes;
  let nChr;
  const nStrLen = sDOMStr.length;
  let nArrLen = 0;

  /* mapping… */
  for (let nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
    nChr = sDOMStr.codePointAt(nMapIdx);

    if (nChr >= 0x10000) {
      nMapIdx++;
    }

    nArrLen +=
      nChr < 0x80
        ? 1
        : nChr < 0x800
        ? 2
        : nChr < 0x10000
        ? 3
        : nChr < 0x200000
        ? 4
        : nChr < 0x4000000
        ? 5
        : 6;
  }

  aBytes = new Uint8Array(nArrLen);

  /* transcription… */
  let nIdx = 0;
  let nChrIdx = 0;
  while (nIdx < nArrLen) {
    nChr = sDOMStr.codePointAt(nChrIdx);
    if (nChr < 128) {
      /* one byte */
      aBytes[nIdx++] = nChr;
    } else if (nChr < 0x800) {
      /* two bytes */
      aBytes[nIdx++] = 192 + (nChr >>> 6);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x10000) {
      /* three bytes */
      aBytes[nIdx++] = 224 + (nChr >>> 12);
      aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x200000) {
      /* four bytes */
      aBytes[nIdx++] = 240 + (nChr >>> 18);
      aBytes[nIdx++] = 128 + ((nChr >>> 12) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
      nChrIdx++;
    } else if (nChr < 0x4000000) {
      /* five bytes */
      aBytes[nIdx++] = 248 + (nChr >>> 24);
      aBytes[nIdx++] = 128 + ((nChr >>> 18) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 12) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
      nChrIdx++;
    } /* if (nChr <= 0x7fffffff) */ else {
      /* six bytes */
      aBytes[nIdx++] = 252 + (nChr >>> 30);
      aBytes[nIdx++] = 128 + ((nChr >>> 24) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 18) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 12) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
      nChrIdx++;
    }
    nChrIdx++;
  }

  return aBytes;
}
```

### 测试

```js
/* Tests */

const sMyInput = "Base 64 \u2014 Mozilla Developer Network";

const aMyUTF8Input = strToUTF8Arr(sMyInput);

const sMyBase64 = base64EncArr(aMyUTF8Input);

alert(sMyBase64);

const aMyUTF8Output = base64DecToArr(sMyBase64);

const sMyOutput = UTF8ArrToStr(aMyUTF8Output);

alert(sMyOutput);
```

### 附录：将 Base64 字符串解码为 Uint8Array 或 ArrayBuffer

这些函数让我们也可以从 Base64 编码的字符串中创建 [Uint8Array](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) 或 [ArrayBuffer](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)。

```js
// "Base 64 \u2014 Mozilla Developer Network"
const myArray = base64DecToArr(
  "QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==",
);

// "Base 64 \u2014 Mozilla Developer Network"
const myBuffer = base64DecToArr(
  "QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==",
).buffer;

alert(myBuffer.byteLength);
```

> **备注：** 函数 `base64DecToArr(sBase64[, nBlocksSize])` 将返回 [`uint8Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) 字节数组。如果你的目标是构建 16 位/ 32 位/ 64 位原始数据的缓冲区，使用 `nBlocksSize` 参数，这是 `uint8Array.buffer.bytesLength` 属性必须产生的字节数的倍数［`1` 或省略为 ASCII、二进制字符串（即字符串中的每个字符都被当作二进制数据的一个字节来处理）或 UTF-8 编码的字符串，`2` 用于 UTF-16 字符串，`4` 用于 UTF-32 字符串］。
