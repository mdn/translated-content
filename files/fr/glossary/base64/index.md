---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 490c9e8c6d2a0faf04f8dcff3472dbe5c324eac3
---

**Base64** est un groupe de schémas pour [encoder des données binaires sous forme d'un texte](https://fr.wikipedia.org/wiki/Conversion_du_binaire_en_texte) au format ASCII grâce à la représentation de ces données en base 64. Le terme _base64_ vient à l'origine de l'encodage utilisé pour transférer certains [contenus MIME](https://fr.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions#Content-Transfer-Encoding).

Les schémas d'encodage en base64 sont principalement utilisés lorsqu'il s'agit d'enregistrer ou d'envoyer des données binaires via un média qui a été conçu pour gérer du texte en ASCII. Cette transformation permet de conserver l'intégrité des données envoyées lors du transport. Base64 est utilisé par plusieurs applications, notamment celles qui gèrent les courriels avec [MIME](https://fr.wikipedia.org/wiki/MIME), et le stockage de données complexes en [XML](/fr/docs/Web/XML).

Sur le Web, on utilise généralement l'encodage base64 pour inclure des données binaires dans [une URL de données `data:`](/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URLs).

En JavaScript, il existe deux fonctions utilisées pour encoder et décoder des chaînes en base64&nbsp;:

- [`btoa()`](/fr/docs/Web/API/btoa)
  - : Crée une chaîne ASCII encodée en base64 à partir d'une «&nbsp;chaîne&nbsp;» de données binaires. (<i lang="en">btoa</i> signifie <i lang="en">binary to ASCII</i> en anglais, soit «&nbsp;binaire vers ASCII&nbsp;»)
- [`atob()`](/fr/docs/Web/API/atob)
  - : Décode des données encodées en une chaîne de caractères en base64 (<i lang="en">atob</i> signifie <i lang="en">ASCII to binary</i> en anglais, soit «&nbsp;ASCII vers binaire&nbsp;»)

L'algorithme utilisé par `atob()` et `btoa()` est défini dans la section 4 de [la RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648).

> **Note :** La méthode `btoa()` s'attend à recevoir des données binaires et il émettra une erreur si la chaîne en paramètre contient n'importe lequel caractère dont la représentation UTF-16 occupe plus d'un octet.

## Augmentation de la taille lors de l'encodage

Chaque chiffre en base 64 représente exactement 6 bits. Une donnée pesant trois octets (soit 3×8 bits = 24 bits) peut donc être représentée par quatre chiffres (4×6 = 24 bits) pour son encodage base64.

Ceci signifie que la taille des données encodées en base64 sera augmentée d'au moins 33% comparativement à sa taille initiale (soit un ratio de 133%). Cette augmentation pourrait être plus grande si les données encodées sont petites. Par exemple, la chaîne `"a"` avec une longeur de 1 (`length === 1`) sera encodée vers `"YQ=="` qui a une longeur de 4 (`length === 4`), soit une augmentation de 300%.

## Le «&nbsp;problème Unicode&nbsp;»

Comme les chaînes de caractères JavaScript sont encodées sur 16 bits, pour la plupart des navigateurs, lorsqu'on appelle `window.btoa()` sur une chaîne Unicode, cela entraîne une exception `Character Out Of Range` si la représentation du caractère dépasse les 8 bits ASCII. Deux méthodes permettent de résoudre ce problème&nbsp;:

- Échapper la chaîne dans son intégralité puis l'encoder,
- Convertir la chaîne UTF-16 vers un tableau UTF-8 de caractères et puis l'encoder.

### Première solution&nbsp;: échapper la chaîne avant de l'encoder

```js example-bad
// unescape() et escape() sont dépréciées, à éviter !

function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

// Utilisation :
utf8_to_b64("✓ à la mode"); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8("4pyTIMOgIGxhIG1vZGU="); // "✓ à la mode"
```

Cette solution a été proposée dans un article de [Johan Sundström](https://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html).

Voici une autre solution qui n'utilise pas les fonctions `unescape()` et `escape()` qui sont désormais dépréciées. Cette solution alternative, malheureusement, n'encode pas en base64 la chaîne passée en entrée. Notez la différence des valeurs produites par les fonctions `utf8_to_b64()` et `b64EncodeUnicode()`. Utiliser cette solution alternative pourrait créer des problèmes d'interopérabilité avec d'autres applications.

```js example-good
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str));
}

function UnicodeDecodeB64(str) {
  return decodeURIComponent(atob(str));
}

b64EncodeUnicode("✓ à la mode"); // "JUUyJTlDJTkzJTIwJUMzJUEwJTIwbGElMjBtb2Rl"
UnicodeDecodeB64("JUUyJTlDJTkzJTIwJUMzJUEwJTIwbGElMjBtb2Rl"); // "✓ à la mode"
```

### Seconde solution&nbsp;: réécrire `atob()` et `btoa()` en utilisant des tableaux typés (`TypedArray`) et UTF-8

> **Note :** Le code suivant peut également être utilisé pour obtenir un [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) depuis une chaîne en base64 et vice-versa ([voir ci-après](#annexe_décoder_une_chaîne_en_base64_en_un_objet_uint8array_ou_arraybuffer)).

```js
"use strict";

/* Décoder un tableau d'octets depuis une chaîne en base64 */

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
  // Seulement nécessaire si la chaîne en base64 contient
  // des espaces tel qu'un retour de chariot.
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

/* Chaîne en base64 encodée vers un tableau */
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
    // Décommenter le test qui suit afin de découper la
    // chaîne base64 en plusieurs lignes de 80 caractères
    //if (nIdx > 0 && ((nIdx * 4) / 3) % 76 === 0) {
    //  sB64Enc += "\r\n";
    //}
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

/* Tableau UTF-8 vers une chaîne JS et vice versa */
function UTF8ArrToStr(aBytes) {
  let sView = "";
  let nPart;
  const nLen = aBytes.length;
  for (let nIdx = 0; nIdx < nLen; nIdx++) {
    nPart = aBytes[nIdx];
    sView += String.fromCodePoint(
      nPart > 251 && nPart < 254 && nIdx + 5 < nLen /* six octets */
        ? /* (nPart - 252 << 30) n'est pas possible pour ECMAScript donc, on utilise un contournement : */
          (nPart - 252) * 1073741824 +
            ((aBytes[++nIdx] - 128) << 24) +
            ((aBytes[++nIdx] - 128) << 18) +
            ((aBytes[++nIdx] - 128) << 12) +
            ((aBytes[++nIdx] - 128) << 6) +
            aBytes[++nIdx] -
            128
        : nPart > 247 && nPart < 252 && nIdx + 4 < nLen /* cinq octets */
        ? ((nPart - 248) << 24) +
          ((aBytes[++nIdx] - 128) << 18) +
          ((aBytes[++nIdx] - 128) << 12) +
          ((aBytes[++nIdx] - 128) << 6) +
          aBytes[++nIdx] -
          128
        : nPart > 239 && nPart < 248 && nIdx + 3 < nLen /* quatre octets */
        ? ((nPart - 240) << 18) +
          ((aBytes[++nIdx] - 128) << 12) +
          ((aBytes[++nIdx] - 128) << 6) +
          aBytes[++nIdx] -
          128
        : nPart > 223 && nPart < 240 && nIdx + 2 < nLen /* trois octets */
        ? ((nPart - 224) << 12) +
          ((aBytes[++nIdx] - 128) << 6) +
          aBytes[++nIdx] -
          128
        : nPart > 191 && nPart < 224 && nIdx + 1 < nLen /* deux octets */
        ? ((nPart - 192) << 6) + aBytes[++nIdx] - 128
        : /* nPart < 127 ? */ /* un octet */
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

  /* correspondance… */
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

  /* transposition… */
  let nIdx = 0;
  let nChrIdx = 0;
  while (nIdx < nArrLen) {
    nChr = sDOMStr.codePointAt(nChrIdx);
    if (nChr < 128) {
      /* un octet */
      aBytes[nIdx++] = nChr;
    } else if (nChr < 0x800) {
      /* deux octets */
      aBytes[nIdx++] = 192 + (nChr >>> 6);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x10000) {
      /* trois octets */
      aBytes[nIdx++] = 224 + (nChr >>> 12);
      aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x200000) {
      /* quatre octets */
      aBytes[nIdx++] = 240 + (nChr >>> 18);
      aBytes[nIdx++] = 128 + ((nChr >>> 12) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
      nChrIdx++;
    } else if (nChr < 0x4000000) {
      /* cinq octets */
      aBytes[nIdx++] = 248 + (nChr >>> 24);
      aBytes[nIdx++] = 128 + ((nChr >>> 18) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 12) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
      nChrIdx++;
    } /* if (nChr <= 0x7fffffff) */ else {
      /* six octets */
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

#### Tests

```js
/* Tests */

const entréeChaîne = "base64 \u2014 Mozilla Developer Network";

const entréeUTF8 = strToUTF8Arr(entréeChaîne);

const base64 = base64EncArr(entréeUTF8);

alert(base64);

const sortieUT8 = base64DecToArr(base64);

const sortieChaîne = UTF8ArrToStr(sortieUT8);

alert(sortieChaîne);
```

#### Annexe : décoder une chaîne en base64 en un objet `Uint8Array` ou `ArrayBuffer`

Ces fonctions permettent de créer des objets [`Uint8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) ou [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) à partir de chaînes en base64&nbsp;:

```js
// "Base 64 \u2014 Mozilla Developer Network"
var monTableau = base64DecToArr(
  "QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==",
);

// "Base 64 \u2014 Mozilla Developer Network"
var monBuffer = base64DecToArr(
  "QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==",
).buffer;

alert(monBuffer.byteLength);
```

> **Note :** La fonction `base64DecToArr(sBase64[, nTailleBloc])` renvoie un [`Uint8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) d'octets. Si vous souhaitez utiliser un tampon mémoire de 16 bits, 32 bits, 64 bits pour les données brutes, utilisez l'argument `nTailleBloc`, qui représente le nombre d'octets dont la propriété `uint8Array.buffer.bytesLength` doit être un multiple&nbsp;:
>
> - `1` ou pas de paramètre pour l'ASCII (chaque caractère dans la chaîne est considéré comme un octet de donnée binaire)
> - `2` pour les chaînes UTF-16
> - `4` pour les chaînes UTF-32.
