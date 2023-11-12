---
title: Base64
slug: Glossary/Base64
---

**Base64** é um grupo de esquemas de [codificação binários](https://en.wikipedia.org/wiki/Binary-to-text_encoding) para texto semelhantes que representam dados binários em um formato de string ASCII, traduzindo-os em uma representação radix-64. O termo _Base64_ se origina de uma codificação de [transferência de conteúdo MIME](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Os esquemas de codificação Base64 são comumente usados quando há necessidade de codificar dados binários que precisam ser armazenados e transferidos por meio de mídia projetada para lidar com ASCII. Isso é para garantir que os dados permaneçam intactos sem modificação durante o transporte. _Base64_ é comumente usado em vários aplicativos, incluindo e-mail via [MIME](https://pt.wikipedia.org/wiki/MIME) e armazenamento de dados complexos em [XML](/pt-BR/docs/Web/XML)

Uma aplicação comum da codificação Base64 na web é codificar dados binários para que possam ser incluídos em um [data: URL](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/Data_URLs).

Em JavaScript existem duas funções respectivamente para decodificar e codificar strings Base64:

- [`btoa()`](/pt-BR/docs/Web/API/btoa): cria uma string ASCII codificada em Base64 a partir de uma "string" de dados binários ("btoa" deve ser lido como "binário para ASCII").
- [`atob()`](/pt-BR/docs/Web/API/atob): decodifica uma string codificada em Base64 ("atob" deve ser lida como "ASCII para binário").

O algoritmo usado por `atob()` e `btoa()` é especificado na [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), seção 4.

Observe que `btoa()` espera receber dados binários e lançará uma exceção se a string fornecida contiver quaisquer caracteres cuja representação UTF-16 ocupe mais de um byte. Para obter mais detalhes, consulte a documentação de [`btoa()`](/pt-BR/docs/Web/API/btoa).

## Aumento de tamanho codificado

Cada dígito Base64 representa exatamente 6 bits de dados. Assim, três bytes de 8 bits da string de entrada/arquivo binário (3×8 bits = 24 bits) podem ser representados por quatro dígitos Base64 de 6 bits (4×6 = 24 bits).

Isso significa que a versão Base64 de uma string ou arquivo terá pelo menos 133% do tamanho de sua fonte (um aumento de ~33%). O aumento pode ser maior se os dados codificados forem pequenos. Por exemplo, a cadeia "a" com length === 1 fica codificado para "YQ==" com length === 4— um aumento de 300%.

## O "Unicode Problem"

Como as strings JavaScript são codificadas em 16 bits, na maioria dos navegadores que chamam `window.btoa` em uma string Unicode causará um `Character Out Of Range`, exceção se um caractere exceder o intervalo de um caractere codificado em ASCII de 8 bits. Existem dois métodos possíveis para resolver este problema:

- a primeira é escapar de toda a string e depois codificá-la;
- a segunda é converter a string UTF-16 em uma matriz de caracteres UTF-8 e depois codificá-la.

Aqui estão os dois métodos possíveis.

### Solução nº 1 – escapando da string antes de codificá-la

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

Esta solução foi proposta por [Johan Sundström](https://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html).

Outra solução possível sem utilizar as funções 'unescape' e 'escape' agora obsoletas.
Essa alternativa, no entanto, não executa a codificação base64 da string de entrada. Observe as diferenças nas saídas de `utf8_to_b64` e `b64EncodeUnicode`. Adotar essa alternativa pode levar a problemas de interoperabilidade com outros aplicativos.

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

### Solution #2 – rewriting `atob()` and `btoa()` using `TypedArray`s and UTF-8

> **Note:** The following code is also useful to get an [ArrayBuffer](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) from a Base64 string and/or vice versa ([see below](#appendix_decode_a_base64_string_to_uint8array_or_arraybuffer)).

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

### Testes

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

### Appendix: Decodifique uma string Base64 para Uint8Array ou ArrayBuffer

Essas funções nos permitem criar também [uint8Arrays](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) ou [arrayBuffers](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) a partir de strings codificadas em Base64:

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

> **Note:** A função `base64DecToArr(sBase64[, nBlocksSize])` retorna
> um [uint8Array](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) de bytes.
> Se o seu objetivo é construir um buffer de dados brutos de 16 bits / 32 bits / 64 bits,
> use o argumento `nBlocksSize`,
> que é o número de bytes dos quais a propriedade `uint8Array.buffer.bytesLength` deve resultar em múltiplos
> (`1` ou omitido para ASCII, strings binárias
> (ou seja, uma string na qual cada caractere na string é tratado como um byte de dados binários)
> ou strings codificadas em UTF-8, `2` para strings UTF-16, `4` para strings UTF-32).
