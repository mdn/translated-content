---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 04e75ce1f83a591a576f52b143f195133bfcbe96
---

**Base64** とは、[バイナリーからテキストへの符号化](https://en.wikipedia.org/wiki/Binary-to-text_encoding)を行う手法のグループであり、バイナリーデータを 64 を基数とする表現に変換することで、 ASCII 文字列で表すことができます。_Base64_ という呼び方は、 [MIME の Content-Transfer-Encoding](https://ja.wikipedia.org/wiki/MIME#Content-Transfer-Encoding) における特定の符号化方式の名前に由来します。

Base64 符号化方式がよく使われるのは、テキストデータを扱うよう設計されたメディア上で、バイナリーデータを格納または転送する必要がある場合です。Base64 符号化により、転送中に変換されることなく、バイナリーデータがそのままであることを保証できます。Base64 は、[MIME](https://ja.wikipedia.org/wiki/MIME) による電子メールや [XML](/ja/docs/Web/XML) における複合型データの格納など、多くのアプリケーションで幅広く使われています。

ウェブにおける Base64 符号化のよくある用途の一つが、バイナリーデータを符号化することで [data: URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) に入れられるようにすることです。

JavaScript には、Base64 文字列のエンコードとデコードのそれぞれに対応した、次の 2 つの関数があります。

- [`btoa()`](/ja/docs/Web/API/btoa): バイナリーデータの「文字列」から Base64 で符号化された ASCII 文字列を生成します ("btoa" は "binary to ASCII" と読んでください)。
- [`atob()`](/ja/docs/Web/API/atob): Base64 で符号化された文字列をデコードします ("atob" は "ASCII to binary" と読んでください)。

`atob()` と `btoa()` のアルゴリズムは、 [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648) section 4 で定義されています。

なお、 `btoa()` はバイナリーデータを受け取ることを期待しているため、与えられた文字列に UTF-16 表現の 2 バイト以上を占める文字が含まれていると例外が発生します。詳しくは、 [`btoa()`](/ja/docs/Web/API/btoa) のドキュメントを参照してください。

#### 符号化によるサイズの増加

Base64 の 1 文字はデータのちょうど 6 ビット分を表します。そのため、入力される文字列やバイナリーファイルに含まれる 3 バイト（3×8 ビット = 24 ビット）は、4 桁の Base64 で表されます（4×6 = 24 ビット）。

このことにより、Base64 で表された文字列またはファイルは、元のサイズの 133% の大きさになると言えます（33% の増加）。エンコードされるデータが小さい場合は、さらに増加幅が大きくなります。例えば、`length === 1` である文字列 `"a"` は、エンコードされて `length === 4` の文字列 `"YQ=="` になり、これは 300% の増加です。

## 「Unicode 問題」

JavaScript の文字列は 16 ビットでエンコードされているので、ほとんどのブラウザーでは、 Unicode 文字列に対して `window.btoa` を呼び出すと、文字が 8 ビット ASCII エンコード文字の範囲を超えた場合に `Character Out Of Range` という例外が発生します。この問題を解決するために、 2 つの使用可能な方法があります。

- 最初の方法は、文字列全体をエスケープしてからエンコードする方法です。
- もう 1 つは、 UTF-16 文字列を UTF-8 文字の配列に変換してからエンコードする方法です。

以下に、使用可能な2つの方法を示します。

### 解決策その 1 - 文字列をエンコードする前にエスケープする

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

この解決策は [Johan Sundström](https://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html) によって提案されたものです。

もう一つの使用可能な解決策は、今では非推奨となっている 'unescape' と 'escape' 関数を使用しないものです。
しかし、この方法では、入力文字列の base64 エンコーディングは行われません。
`utf8_to_b64` と `b64EncodeUnicode` の出力の違いに注意してください。
この代替手段を採用すると、他のアプリケーションとの相互運用性の問題が発生する可能性があります。

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

### 解決策その 2 - `atob()` と `btoa()` を `TypedArray` と UTF-8 を使用して書き直す

> **メモ:** 以下のコードは、 [ArrayBuffer](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) を Base64 文字列から取得する場合、またはその逆の場合にも有用です（[下記参照](#付録_base64_文字列を_uint8array_または_arraybuffer_へデコード)）。

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
  const sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, "");
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
    if (nIdx > 0 && ((nIdx * 4) / 3) % 76 === 0) {
      sB64Enc += "\r\n";
    }

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
    sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) +
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

    if (nChr > 65536) {
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

### テスト

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

### 付録: Base64 文字列を Uint8Array または ArrayBuffer へデコード

これらの関数により、 Base64 エンコードされた文字列から [Uint8Array](/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) や [ArrayBuffer](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) を作成することも可能です。

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

> **メモ:** `base64DecToArr(sBase64[, nBlocksSize])` 関数は、バイト列の [`Uint8Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) を返します。 16 ビット/ 32 ビット/ 64 ビットの生データのバッファーを構築することを目的とする場合、 `nBlocksSize` 引数を使用します。これは、 `uint8Array.buffer.bytesLength` プロパティの結果が倍数となるべきバイト数（ASCII、バイナリー列（すなわち、列内のそれぞれの文字を 1 バイトのバイナリーデータと見なす列）、 UTF-16 列では `2`、 UTF-32 列では `4`）を表します。
