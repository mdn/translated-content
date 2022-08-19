---
title: Navigator.language
slug: Web/API/Navigator/language
tags:
  - API
  - Language
  - Navigator
  - Property
  - Read-only
  - Reference
browser-compat: api.Navigator.language
translation_of: Web/API/Navigator/language
original_slug: Web/API/NavigatorLanguage/language
---
<div>{{APIRef("HTML DOM")}}</div>

<p><strong><code>Navigator.language</code></strong> は読み取り専用プロパティで、ユーザーの言語を表す文字列を返します。普通、ブラウザー UI の言語が返されます。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">const <em>lang</em> = navigator.language
</pre>

<h3 id="Value">値</h3>

<p>{{domxref("DOMString")}} です。。<em><code>lang</code></em> は、<a class="external" href="https://tools.ietf.org/rfc/bcp/bcp47.txt">BCP 47</a> で定義された言語バージョンを表す文字列が格納されます。例えば、"en"、"en-US"、"fr"、"fr-FR"、"es-ES" などが含まれます。</p>

<p>iOS 10.2 以前の Safari では、国コードは "en-us"、"fr-fr" のように小文字で返されます。</p>

<h2 id="Example">例</h2>

<pre class="brush: js">if (/^en\b/.test(navigator.language)) {
  doLangSelect(window.navigator.language);
}
</pre>

<h2 id="Specification">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("navigator.languages")}}</li>
  <li>{{domxref("navigator")}}</li>
</ul>
