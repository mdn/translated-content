---
title: Décoder et encoder en base64
slug: Glossary/Base64
tags:
  - Advanced
  - Base64
  - JavaScript
  - Reference
  - Typed Arrays
  - URI
  - URL
  - Unicode Problem
  - atob()
  - btoa()
translation_of: Glossary/Base64
original_slug: Web/API/WindowBase64/Décoder_encoder_en_base64
---
**Base64** est un groupe de schéma pour encoder des données binaires sous forme d'un texte au format ASCII grâce à la représentation de ces données en base 64. Le terme base64 vient à l'origine de l'encodage utilisé pour transférer certains [contenus MIME](https://fr.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions#Content-Transfer-Encoding).

Les schémas d'encodage en base64 sont principalement utilisés lorsqu'il s'agit d'enregistrer ou d'envoyer des données binaires via un media qui a été conçu pour gérer du texte. Cette transformation permet de conserver l'intégrité et la véracité des données envoyées lors du transport. Base64 est utilisé par plusieurs applications, notamment celles qui gèrent les courriels avec [MIME](https://fr.wikipedia.org/wiki/MIME), et le stockage de données complexes en [XML](/fr/docs/XML).

Pour JavaScript, il existe deux fonctions utilisées pour encoder et décoder des chaînes en base64 :

- {{domxref("window.atob","atob()")}}
- {{domxref("window.btoa","btoa()")}}

La fonction `atob()` permet de décoder des données encodées en une chaîne de caractères en base 64. La fonction `btoa()`, quant à elle, permet de créer une chaîne ASCII en base64 à partir d'une « chaîne » de données binaires.

Les deux méthodes, `atob()` et `btoa()`, fonctionnent sur des chaînes de caractères. Si vous voulez utiliser des [`ArrayBuffers`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer), lisez [ce paragraphe](#Solution_.232_.E2.80.93_rewriting_atob%28%29_and_btoa%28%29_using_TypedArrays_and_UTF-8).

## Documentation

- [URIs de données](/fr/docs/Web/HTTP/data_URIs)
  - : Les URIs de données, définies par la [RFC 2397](http://tools.ietf.org/html/rfc2397), permettent aux créateurs de contenus d'intégrer des fichiers en ligne dans des documents.
- [Base64](https://fr.wikipedia.org/wiki/Base_64)
  - : Article Wikipédia sur l'encodage en base64.
- {{domxref("window.atob","atob()")}}
  - : Méthode permettant de décoder une chaîne de donnée qui a été encodée en base64.
- {{domxref("window.btoa","btoa()")}}
  - : Méthode permettant de créer une chaîne ASCII en base64 à partir d'une « chaîne » de données binaires.
- [Le « problème Unicode »](#The_.22Unicode_Problem.22)
  - : Pour la plupart des navigateurs, l'utilisation de `btoa()` sur une chaîne de caractères Unicode entraînera une exception `Character Out Of Range`. Ce paragraphe indique quelques solutions.
- [URIScheme](/fr/docs/URIScheme)
  - : Une liste de schémas URI supportés par Mozilla.
- [`StringView`](/fr/Add-ons/Code_snippets/StringView)

  - : Dans cet article, nous publions une bibliothèque dont les buts sont :

    - de créer une interface pour les chaînes de caractères à la façon du langage [C](https://fr.wikipedia.org/wiki/C_%28langage%29) (i.e. un tableau de code de caractères — [`ArrayBufferView`](/fr/docs/Web/API/ArrayBufferView) en JavaScript) basée sur l'interface JavaScript [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer),
    - de créer un ensemble de méthodes pour ces objets qui fonctionnent **sur des tableaux de nombres** plutôt que sur chaînes de caractères JavaScript immuables,
    - de travailler avec d'autres encodages Unicode, y compris ceux différent d'UTF-16 qui est l'encodage par défaut de JavaScript pour les [`DOMString`](/fr/docs/Web/API/DOMString).

## Outils

- [Réécrire `atob()`et `btoa()` en utilisant des `TypedArray`s et l'UTF-8](<#Solution_.232_.E2.80.93_rewriting_atob()_and_btoa()_using_TypedArrays_and_UTF-8>)
- [`StringView` – une représentation des chaînes de caractères semblable à celle du langage C, basée sur les tableaux typés.](/fr/docs/Web/JavaScript/Typed_arrays/StringView)

## Sujets connexes

- [`ArrayBuffer`](/fr/docs/Web/JavaScript/Typed_arrays/ArrayBuffer)
- [Les tableaux typés](/fr/docs/Web/JavaScript/Tableaux_typés)
- [ArrayBufferView](/fr/docs/Web/API/ArrayBufferView)
- [`Uint8Array`](/fr/docs/Web/API/Uint8Array)
- [`StringView` – une représentation des chaînes de caractères semblable à celle du langage C, basée sur les tableaux typés](/fr/docs/Web/JavaScript/Typed_arrays/StringView)
- [`DOMString`](/fr/docs/Web/API/DOMString)
- [`URI`](/fr/docs/Glossary/URI)
- [`encodeURI()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/encodeURI)

## Le « problème Unicode »

Les objets [`DOMString`](/fr/docs/Web/API/DOMString) sont des chaînes de caractères encodées sur 16 bits. Pour la plupart des navigateurs, lorsqu'on appelle `window.btoa` sur une chaîne Unicode, cela entraîne une exception `Character Out Of Range` si la représentation du caractère dépasse les 8 bits ASCII. Deux méthodes existent pour résoudre le problème :

- échapper la chaîne dans son intégralité puis l'encoder,
- convertir la chaîne UTF-16 [`DOMString`](/fr/docs/Web/API/DOMString) en un tableau UTF-8 de caractères puis l'encoder.

Voici ces deux méthodes :

### Première solution  – échapper la chaîne avant de l'encoder

```js
function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}

// Usage:
utf8_to_b64('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
```

Cette solution a été proposée dans un article de [Johan Sundström](http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html).

### Seconde solution – réécrire `atob()` et `btoa()` en utilisant des `TypedArray` avec de l'UTF-8

> **Note :** Le code suivant peut également être utilisé pour obtenir un [ArrayBuffer](/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer) depuis une chaîne en base 64 (et vice-versa, voir ci-après). **Pour un article concernant une bibliothèque complète sur les tableaux typés, voir [cet article](/fr/Add-ons/Code_snippets/StringView)**.

```js
"use strict";

/*\
|*|
|*|  utilitairezs de manipulations de chaînes base 64 / binaires / UTF-8
|*|
|*|  https://developer.mozilla.org/fr/docs/Décoder_encoder_en_base64
|*|
\*/

/* Décoder un tableau d'octets depuis une chaîne en base64 */

function b64ToUint6 (nChr) {

  return nChr > 64 && nChr < 91 ?
      nChr - 65
      nChr > 96 && nChr < 123 ?
      nChr - 71
       : nChr > 47 && nChr < 58
         nChr + 4
       : nChr === 43 ?
      62
    : nChr === 47 ?
      63
    :
      0;

}

function base64DecToArr (sBase64, nBlocksSize) {

  var
    sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""), nInLen = sB64Enc.length,
    nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2, taBytes = new Uint8Array(nOutLen);

  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
    nMod4 = nInIdx & 3;
    nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
    if (nMod4 === 3 || nInLen - nInIdx === 1) {
      for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
      }
      nUint24 = 0;
      
    }
  }

  return taBytes;
}

/* encodage d'un tableau en une chaîne en base64 */

function uint6ToB64 (nUint6) {

  return nUint6 < 26 ?
      nUint6 + 65
      nUint6 < 52 ?
      nUint6 + 71
       : nUint6 < 62 ?
         nUint6 -
       : nUint6 === 62 ?
      43
    : nUint6 === 63 ?
      47
    :
      65;

}

function base64EncArr (aBytes) {

  var nMod3 = 2, sB64Enc = "";

  for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
    nMod3 = nIdx % 3;
    if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
    nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
    if (nMod3 === 2 || aBytes.length - nIdx === 1) {
      sB64Enc += String.fromCharCode(uint6ToB64(nUint24 >>> 18 & 63), uint6ToB64(nUint24 >>> 12 & 63), uint6ToB64(nUint24 >>> 6 & 63), uint6ToB64(nUint24 & 63));
      nUint24 = 0;
    }
  }

  return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? '' : nMod3 === 1 ? '=' : '==');

}

/* Tableau UTF-8 en DOMString et vice versa */

function UTF8ArrToStr (aBytes) {

  var sView = "";

  for (var nPart, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
    nPart = aBytes[nIdx];
    sView += String.fromCharCode(
      nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? /* six bytes */
        /* (nPart - 252 << 32) n'est pas possible pour ECMAScript donc, on utilise un contournement... : */
        (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
        (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
        (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
        (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
        (nPart - 192 << 6) + aBytes[++nIdx] - 128
      : /* nPart < 127 ? */ /* one byte */
        nPart
    );
  }

  return sView;

}

function strToUTF8Arr (sDOMStr) {

  var aBytes, nChr, nStrLen = sDOMStr.length, nArrLen = 0;

  /* mapping... */

  for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
    nChr = sDOMStr.charCodeAt(nMapIdx);
    nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
  }

  aBytes = new Uint8Array(nArrLen);

  /* transcription... */

  for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
    nChr = sDOMStr.charCodeAt(nChrIdx);
    if (nChr < 128) {
      /* one byte */
      aBytes[nIdx++] = nChr;
      else if (nChr <
      /* two bytes */
      aBytes[nIdx++] = 192 + (nChr >>> 6);
      aBytes[nIdx++] = 
      else if (nChr < 0x10000) {
      /* three bytes *
      aBytes[nIdx++] = 224 + (nChr >>> 12);
      aBytes[nIdx++] =
      aBytes[nIdx++] = 128 + (nChr & 63);
      else if (nChr < 
      /* four bytes */
      aBytes[nIdx++] = 240 + (nChr >>> 18);
      aBytes[nIdx++] =
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 
      aBytes[nIdx++] 
      else if (nChr < 0x4000000) {
      /* five bytes */
      aBytes[nIdx++] = 248 + (nChr >>> 24);
      aBytes[nIdx++] 
      aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
         aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
         aBytes[nIdx++] = 128 + (nChr & 63);
       } else /* if (nChr <= 0x7fffffff) */ {
         /* six bytes */
         aBytes[nIdx++] = 252 + /* (nChr >>> 32) is not possible in ECMAScript! So...: */ (nChr / 1073741824);
      aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    }
  }

  return aBytes;

}
```

#### Tests

```js
/* Tests */

var entréeChaîne = "base64 \u2014 Mozilla Developer Network";

var entréeUTF8 = strToUTF8Arr(entréeChaîne);

var base64 = base64EncArr(entréeUTF8);

alert(base64);

var sortieUT8 = base64DecToArr(base64);

var sortieChaîne = UTF8ArrToStr(sortieUT8);

alert(sortieChaîne);
```

#### Annexe : Décoder une chaîne en base64 en un objet [Uint8Array](/fr/docs/Web/API/Uint8Array) ou [ArrayBuffer](/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer)

Ces fonctions permettent de créer des objets [uint8Arrays](/fr/docs/Web/API/Uint8Array) ou [arrayBuffers](/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer) à partir de chaînes en base64 :

```js
var monTableau = base64DecToArr("QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw=="); // "Base 64 \u2014 Mozilla Developer Network"

var monBuffer = base64DecToArr("QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==").buffer; // "Base 64 \u2014 Mozilla Developer Network"

alert(monBuffer.byteLength);
```

> **Note :** La fonction `base64DecToArr(sBase64[, nTailleBloc])` renvoie un [`uint8Array`](/fr/docs/Web/JavaScript/Typed_arrays/Uint8Array) d'octets. Si vous souhaitez utiliser un tampon mémoire de 16 bits, 32 bits, 64 bits pour les données brutes, utilisez l'argument `nTailleBloc`, qui représente le nombre d'octets dont la propriété `uint8Array.buffer.bytesLength` doit être un multiple (`1` ou pas de paramètre pour l'ASCII, [les chaînes binaires](/fr/docs/Web/API/DOMString/Binary) ou les chaînes encodées UTF-8, `2` pour les chaînes UTF-16, `4` pour les chaînes UTF-32).

Pour une bibliothèque plus complète, voir [`StringView` – une représentation des chaînes de caractères semblable à celle du langage C, basée sur les tableaux typés](/fr/docs/Web/JavaScript/Typed_arrays/StringView)

## Voir aussi

- {{domxref("window.atob","atob()")}}
- {{domxref("window.btoa","btoa()")}}
- [URIs de données](/fr/docs/Web/HTTP/data_URIs)
- [ArrayBuffer](/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer)
- [Tableaux typés](/fr/docs/Web/JavaScript/Tableaux_typés)
- [ArrayBufferView](/fr/docs/Web/API/ArrayBufferView)
- [Uint8Array](/fr/docs/Web/API/Uint8Array)
- [`StringView` – une représentation des chaînes, basée sur les tableaux typés](/fr/docs/Web/JavaScript/Typed_arrays/StringView)
- [DOMString](/fr/docs/Web/API/DOMString)
- [`URI`](/fr/docs/Glossary/URI)
- [`encodeURI()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/encodeURI)
- [`nsIURIFixup()`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIURIFixup)
- [Article sur la base64 sur Wikipédia](https://fr.wikipedia.org/wiki/Base64)
