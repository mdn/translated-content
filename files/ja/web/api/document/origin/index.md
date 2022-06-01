---
title: Document.origin
slug: Web/API/Document/origin
tags:
  - API
  - DOM
  - Document
  - Experimental
  - Interface
  - Property
  - Read-only
translation_of: Web/API/Document/origin
---
<div>{{APIRef("DOM")}}{{Obsolete_header}}</div>

<div class="blockIndicator note">
<p>代わりに <code>self.origin</code> を使用してください。</p>
</div>

<p><strong><code>Document.origin</code></strong> は読み取り専用プロパティで、文書のオリジンを返します。ほとんどの場合、このプロパティは <code>document.defaultView.location.origin</code> と等価です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>origin</var> = <var>document</var>.origin;</pre>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js notranslate">var origin = document.origin;
// このページでは、 'https://developer.mozilla.org' を返します

var origin = document.origin;
// "about:blank" では 'null' を返します

var origin = document.origin;
// "data:text/html,&lt;b&gt;foo&lt;/b&gt;" では、 'null' を返します。
</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.Document.origin")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("URLUtils.origin")}} プロパティ</li>
</ul>
