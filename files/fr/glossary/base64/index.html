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
<p><strong>Base64</strong> est un groupe de schéma pour encoder des données binaires sous forme d'un texte au format ASCII grâce à la représentation de ces données en base 64. Le terme base64 vient à l'origine de l'encodage utilisé pour transférer certains <a href="https://fr.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions#Content-Transfer-Encoding">contenus MIME</a>.</p>

<p>Les schémas d'encodage en base64 sont principalement utilisés lorsqu'il s'agit d'enregistrer ou d'envoyer des données binaires via un media qui a été conçu pour gérer du texte. Cette transformation permet de conserver l'intégrité et la véracité des données envoyées lors du transport. Base64 est utilisé par plusieurs applications, notamment celles qui gèrent les courriels avec <a href="https://fr.wikipedia.org/wiki/MIME">MIME</a>, et le stockage de données complexes en <a href="/fr/docs/XML">XML</a>.</p>

<p>Pour JavaScript, il existe deux fonctions utilisées pour encoder et décoder des chaînes en base64 :</p>

<ul>
 <li>{{domxref("window.atob","atob()")}}</li>
 <li>{{domxref("window.btoa","btoa()")}}</li>
</ul>

<p>La fonction <code>atob()</code> permet de décoder des données encodées en une chaîne de caractères en base 64. La fonction <code>btoa()</code>, quant à elle, permet de créer une chaîne ASCII en base64 à partir d'une « chaîne » de données binaires.</p>

<p>Les deux méthodes, <code>atob()</code> et <code>btoa()</code>, fonctionnent sur des chaînes de caractères. Si vous voulez utiliser des <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer"><code>ArrayBuffers</code></a>, lisez <a href="#Solution_.232_.E2.80.93_rewriting_atob%28%29_and_btoa%28%29_using_TypedArrays_and_UTF-8">ce paragraphe</a>.</p>


<h2>Documentation</h2>

<dl>
  <dt><a href="/fr/docs/Web/HTTP/data_URIs">URIs de données</a></dt>
  <dd><small>Les URIs de données, définies par la <a href="http://tools.ietf.org/html/rfc2397">RFC 2397</a>, permettent aux créateurs de contenus d'intégrer des fichiers en ligne dans des documents.</small></dd>
  <dt><a href="https://fr.wikipedia.org/wiki/Base_64">Base64</a></dt>
  <dd><small>Article Wikipédia sur l'encodage en base64.</small></dd>
  <dt>{{domxref("window.atob","atob()")}}</dt>
  <dd><small>Méthode permettant de décoder une chaîne de donnée qui a été encodée en base64.</small></dd>
  <dt>{{domxref("window.btoa","btoa()")}}</dt>
  <dd><small>Méthode permettant de créer une chaîne ASCII en base64 à partir d'une « chaîne » de données binaires.</small></dd>
  <dt><a href="#The_.22Unicode_Problem.22">Le « problème Unicode »</a></dt>
  <dd><small>Pour la plupart des navigateurs, l'utilisation de <code>btoa()</code> sur une chaîne de caractères Unicode entraînera une exception <code>Character Out Of Range</code>. Ce paragraphe indique quelques solutions.</small></dd>
  <dt><a href="/fr/docs/URIScheme">URIScheme</a></dt>
  <dd><small>Une liste de schémas URI supportés par Mozilla</small>.</dd>
  <dt><a href="/fr/Add-ons/Code_snippets/StringView"><code>StringView</code></a></dt>
  <dd>Dans cet article, nous publions une bibliothèque dont les buts sont :
  <ul>
  <li>de créer une interface pour les chaînes de caractères à la façon du langage <a href="https://fr.wikipedia.org/wiki/C_%28langage%29">C</a> (i.e. un tableau de code de caractères —<a href="/fr/docs/Web/API/ArrayBufferView"> <code>ArrayBufferView</code></a> en JavaScript) basée sur l'interface JavaScript <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer"><code>ArrayBuffer</code></a>,</li>
  <li>de créer un ensemble de méthodes pour ces objets qui fonctionnent <strong>sur des tableaux de nombres</strong> plutôt que sur chaînes de caractères JavaScript immuables,</li>
  <li>de travailler avec d'autres encodages Unicode, y compris ceux différent d'UTF-16 qui est l'encodage par défaut de JavaScript pour les <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a>.</li>
  </ul>
  </dd>
</dl>

<h2>Outils</h2>

<ul>
  <li><a href="#Solution_.232_.E2.80.93_rewriting_atob()_and_btoa()_using_TypedArrays_and_UTF-8">Réécrire <code>atob()</code>et <code>btoa()</code> en utilisant des <code>TypedArray</code>s et l'UTF-8</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Typed_arrays/StringView"><code>StringView</code> – une représentation des chaînes de caractères semblable à celle du langage C, basée sur les tableaux typés.</a></li>
</ul>

<h2>Sujets connexes</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Typed_arrays/ArrayBuffer"><code>ArrayBuffer</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Les tableaux typés</a></li>
  <li><a href="/fr/docs/Web/API/ArrayBufferView">ArrayBufferView</a></li>
  <li><a href="/fr/docs/Web/API/Uint8Array"><code>Uint8Array</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Typed_arrays/StringView"><code>StringView</code> – une représentation des chaînes de caractères semblable à celle du langage C, basée sur les tableaux typés</a></li>
  <li><a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a></li>
  <li><a href="/fr/docs/Glossary/URI"><code>URI</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/encodeURI"><code>encodeURI()</code></a></li>
</ul>

<h2 id="Le_«_problème_Unicode_»">Le « problème Unicode »</h2>

<p>Les objets <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> sont des chaînes de caractères encodées sur 16 bits. Pour la plupart des navigateurs, lorsqu'on appelle <code>window.btoa</code> sur une chaîne Unicode, cela entraîne une exception <code>Character Out Of Range</code> si la représentation du caractère dépasse les 8 bits ASCII. Deux méthodes existent pour résoudre le problème :</p>

<ul>
 <li>échapper la chaîne dans son intégralité puis l'encoder,</li>
 <li>convertir la chaîne UTF-16 <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> en un tableau UTF-8 de caractères puis l'encoder.</li>
</ul>

<p>Voici ces deux méthodes :</p>

<h3 id="Première_solution_–_échapper_la_chaîne_avant_de_lencoder">Première solution  – échapper la chaîne avant de l'encoder</h3>

<pre class="brush:js">function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}

// Usage:
utf8_to_b64('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"</pre>

<p>Cette solution a été proposée dans un article de <a href="http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html">Johan Sundström</a>.</p>

<h3 id="Seconde_solution_–_réécrire_atob_et_btoa_en_utilisant_des_TypedArray_avec_de_lUTF-8">Seconde solution – réécrire <code>atob()</code> et <code>btoa()</code> en utilisant des <code>TypedArray</code> avec de l'UTF-8</h3>

<div class="note">
  <p><strong>Note :</strong> Le code suivant peut également être utilisé pour obtenir un <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer">ArrayBuffer</a> depuis une chaîne en base 64 (et vice-versa, voir ci-après). <strong>Pour un article concernant une bibliothèque complète sur les tableaux typés, voir <a href="/fr/Add-ons/Code_snippets/StringView">cet article</a></strong>.</p>
</div>

<pre class="brush: js">"use strict";

/*\
|*|
|*|  utilitairezs de manipulations de chaînes base 64 / binaires / UTF-8
|*|
|*|  https://developer.mozilla.org/fr/docs/Décoder_encoder_en_base64
|*|
\*/

/* Décoder un tableau d'octets depuis une chaîne en base64 */

function b64ToUint6 (nChr) {

  return nChr &gt; 64 &amp;&amp; nChr &lt; 91 ?
      nChr - 65
    : nChr &gt; 96 &amp;&amp; nChr &lt; 123 ?
      nChr - 71
    : nChr &gt; 47 &amp;&amp; nChr &lt; 58 ?
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
    nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 &gt;&gt; 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 &gt;&gt; 2, taBytes = new Uint8Array(nOutLen);

  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx &lt; nInLen; nInIdx++) {
    nMod4 = nInIdx &amp; 3;
    nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) &lt;&lt; 18 - 6 * nMod4;
    if (nMod4 === 3 || nInLen - nInIdx === 1) {
      for (nMod3 = 0; nMod3 &lt; 3 &amp;&amp; nOutIdx &lt; nOutLen; nMod3++, nOutIdx++) {
        taBytes[nOutIdx] = nUint24 &gt;&gt;&gt; (16 &gt;&gt;&gt; nMod3 &amp; 24) &amp; 255;
      }
      nUint24 = 0;

    }
  }

  return taBytes;
}

/* encodage d'un tableau en une chaîne en base64 */

function uint6ToB64 (nUint6) {

  return nUint6 &lt; 26 ?
      nUint6 + 65
    : nUint6 &lt; 52 ?
      nUint6 + 71
    : nUint6 &lt; 62 ?
      nUint6 - 4
    : nUint6 === 62 ?
      43
    : nUint6 === 63 ?
      47
    :
      65;

}

function base64EncArr (aBytes) {

  var nMod3 = 2, sB64Enc = "";

  for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx &lt; nLen; nIdx++) {
    nMod3 = nIdx % 3;
    if (nIdx &gt; 0 &amp;&amp; (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
    nUint24 |= aBytes[nIdx] &lt;&lt; (16 &gt;&gt;&gt; nMod3 &amp; 24);
    if (nMod3 === 2 || aBytes.length - nIdx === 1) {
      sB64Enc += String.fromCharCode(uint6ToB64(nUint24 &gt;&gt;&gt; 18 &amp; 63), uint6ToB64(nUint24 &gt;&gt;&gt; 12 &amp; 63), uint6ToB64(nUint24 &gt;&gt;&gt; 6 &amp; 63), uint6ToB64(nUint24 &amp; 63));
      nUint24 = 0;
    }
  }

  return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? '' : nMod3 === 1 ? '=' : '==');

}

/* Tableau UTF-8 en DOMString et vice versa */

function UTF8ArrToStr (aBytes) {

  var sView = "";

  for (var nPart, nLen = aBytes.length, nIdx = 0; nIdx &lt; nLen; nIdx++) {
    nPart = aBytes[nIdx];
    sView += String.fromCharCode(
      nPart &gt; 251 &amp;&amp; nPart &lt; 254 &amp;&amp; nIdx + 5 &lt; nLen ? /* six bytes */
        /* (nPart - 252 &lt;&lt; 32) n'est pas possible pour ECMAScript donc, on utilise un contournement... : */
        (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 &lt;&lt; 24) + (aBytes[++nIdx] - 128 &lt;&lt; 18) + (aBytes[++nIdx] - 128 &lt;&lt; 12) + (aBytes[++nIdx] - 128 &lt;&lt; 6) + aBytes[++nIdx] - 128
      : nPart &gt; 247 &amp;&amp; nPart &lt; 252 &amp;&amp; nIdx + 4 &lt; nLen ? /* five bytes */
        (nPart - 248 &lt;&lt; 24) + (aBytes[++nIdx] - 128 &lt;&lt; 18) + (aBytes[++nIdx] - 128 &lt;&lt; 12) + (aBytes[++nIdx] - 128 &lt;&lt; 6) + aBytes[++nIdx] - 128
      : nPart &gt; 239 &amp;&amp; nPart &lt; 248 &amp;&amp; nIdx + 3 &lt; nLen ? /* four bytes */
        (nPart - 240 &lt;&lt; 18) + (aBytes[++nIdx] - 128 &lt;&lt; 12) + (aBytes[++nIdx] - 128 &lt;&lt; 6) + aBytes[++nIdx] - 128
      : nPart &gt; 223 &amp;&amp; nPart &lt; 240 &amp;&amp; nIdx + 2 &lt; nLen ? /* three bytes */
        (nPart - 224 &lt;&lt; 12) + (aBytes[++nIdx] - 128 &lt;&lt; 6) + aBytes[++nIdx] - 128
      : nPart &gt; 191 &amp;&amp; nPart &lt; 224 &amp;&amp; nIdx + 1 &lt; nLen ? /* two bytes */
        (nPart - 192 &lt;&lt; 6) + aBytes[++nIdx] - 128
      : /* nPart &lt; 127 ? */ /* one byte */
        nPart
    );
  }

  return sView;

}

function strToUTF8Arr (sDOMStr) {

  var aBytes, nChr, nStrLen = sDOMStr.length, nArrLen = 0;

  /* mapping... */

  for (var nMapIdx = 0; nMapIdx &lt; nStrLen; nMapIdx++) {
    nChr = sDOMStr.charCodeAt(nMapIdx);
    nArrLen += nChr &lt; 0x80 ? 1 : nChr &lt; 0x800 ? 2 : nChr &lt; 0x10000 ? 3 : nChr &lt; 0x200000 ? 4 : nChr &lt; 0x4000000 ? 5 : 6;
  }

  aBytes = new Uint8Array(nArrLen);

  /* transcription... */

  for (var nIdx = 0, nChrIdx = 0; nIdx &lt; nArrLen; nChrIdx++) {
    nChr = sDOMStr.charCodeAt(nChrIdx);
    if (nChr &lt; 128) {
      /* one byte */
      aBytes[nIdx++] = nChr;
    } else if (nChr &lt; 0x800) {
      /* two bytes */
      aBytes[nIdx++] = 192 + (nChr &gt;&gt;&gt; 6);
      aBytes[nIdx++] = 128 + (nChr &amp; 63);
    } else if (nChr &lt; 0x10000) {
      /* three bytes */
      aBytes[nIdx++] = 224 + (nChr &gt;&gt;&gt; 12);
      aBytes[nIdx++] = 128 + (nChr &gt;&gt;&gt; 6 &amp; 63);
      aBytes[nIdx++] = 128 + (nChr &amp; 63);
    } else if (nChr &lt; 0x200000) {
      /* four bytes */
      aBytes[nIdx++] = 240 + (nChr &gt;&gt;&gt; 18);
      aBytes[nIdx++] = 128 + (nChr &gt;&gt;&gt; 12 &amp; 63);
      aBytes[nIdx++] = 128 + (nChr &gt;&gt;&gt; 6 &amp; 63);
      aBytes[nIdx++] = 128 + (nChr &amp; 63);
    } else if (nChr &lt; 0x4000000) {
      /* five bytes */
      aBytes[nIdx++] = 248 + (nChr &gt;&gt;&gt; 24);
      aBytes[nIdx++] = 128 + (nChr &gt;&gt;&gt; 18 &amp; 63);
      aBytes[nIdx++] = 128 + (nChr &gt;&gt;&gt; 12 &amp; 63);
      aBytes[nIdx++] = 128 + (nChr &gt;&gt;&gt; 6 &amp; 63);
      aBytes[nIdx++] = 128 + (nChr &amp; 63);
    } else /* if (nChr &lt;= 0x7fffffff) */ {
      /* six bytes */
      aBytes[nIdx++] = 252 + /* (nChr &gt;&gt;&gt; 32) is not possible in ECMAScript! So...: */ (nChr / 1073741824);
      aBytes[nIdx++] = 128 + (nChr &gt;&gt;&gt; 24 &amp; 63);
      aBytes[nIdx++] = 128 + (nChr &gt;&gt;&gt; 18 &amp; 63);
      aBytes[nIdx++] = 128 + (nChr &gt;&gt;&gt; 12 &amp; 63);
      aBytes[nIdx++] = 128 + (nChr &gt;&gt;&gt; 6 &amp; 63);
      aBytes[nIdx++] = 128 + (nChr &amp; 63);
    }
  }

  return aBytes;

}
</pre>

<h4 id="Tests">Tests</h4>

<pre class="brush: js">/* Tests */

var entréeChaîne = "base64 \u2014 Mozilla Developer Network";

var entréeUTF8 = strToUTF8Arr(entréeChaîne);

var base64 = base64EncArr(entréeUTF8);

alert(base64);

var sortieUT8 = base64DecToArr(base64);

var sortieChaîne = UTF8ArrToStr(sortieUT8);

alert(sortieChaîne);</pre>

<h4 id="Annexe_Décoder_une_chaîne_en_base64_en_un_objet_Uint8Array_ou_ArrayBuffer">Annexe : Décoder une chaîne en base64 en un objet <a href="/fr/docs/Web/API/Uint8Array">Uint8Array</a> ou <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer">ArrayBuffer</a></h4>

<p>Ces fonctions permettent de créer des objets <a href="/fr/docs/Web/API/Uint8Array">uint8Arrays</a> ou <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer">arrayBuffers</a> à partir de chaînes en base64 :</p>

<pre class="brush: js">var monTableau = base64DecToArr("QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw=="); // "Base 64 \u2014 Mozilla Developer Network"

var monBuffer = base64DecToArr("QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==").buffer; // "Base 64 \u2014 Mozilla Developer Network"

alert(monBuffer.byteLength);</pre>

<div class="note">
  <p><strong>Note :</strong> La fonction <code>base64DecToArr(sBase64[, <em>nTailleBloc</em>])</code> renvoie un <a href="/fr/docs/Web/JavaScript/Typed_arrays/Uint8Array"><code>uint8Array</code></a> d'octets. Si vous souhaitez utiliser un tampon mémoire de 16 bits, 32 bits, 64 bits pour les données brutes, utilisez l'argument <code>nTailleBloc</code>, qui représente le nombre d'octets dont la propriété <code>uint8Array.buffer.bytesLength</code> doit être un multiple (<code>1</code> ou pas de paramètre pour l'ASCII, <a href="/fr/docs/Web/API/DOMString/Binary">les chaînes binaires</a> ou les chaînes encodées UTF-8, <code>2</code> pour les chaînes UTF-16, <code>4</code> pour les chaînes UTF-32).</p>
</div>

<p>Pour une bibliothèque plus complète, voir <a href="/fr/docs/Web/JavaScript/Typed_arrays/StringView"><code>StringView</code> – une représentation des chaînes de caractères semblable à celle du langage C, basée sur les tableaux typés</a></p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("window.atob","atob()")}}</li>
 <li>{{domxref("window.btoa","btoa()")}}</li>
 <li><a href="/fr/docs/Web/HTTP/data_URIs">URIs de données </a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer">ArrayBuffer</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Tableaux typés</a></li>
 <li><a href="/fr/docs/Web/API/ArrayBufferView">ArrayBufferView</a></li>
 <li><a href="/fr/docs/Web/API/Uint8Array">Uint8Array</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Typed_arrays/StringView"><code>StringView</code> – une représentation des chaînes, basée sur les tableaux typés</a></li>
 <li><a href="/fr/docs/Web/API/DOMString">DOMString</a></li>
 <li><a href="/fr/docs/Glossary/URI"><code>URI</code></a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/encodeURI"><code>encodeURI()</code></a></li>
 <li><a href="/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIURIFixup"><code>nsIURIFixup()</code></a></li>
 <li><a href="https://fr.wikipedia.org/wiki/Base64">Article sur la base64 sur Wikipédia</a></li>
</ul>
