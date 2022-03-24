---
title: ':-moz-broken'
slug: 'Web/CSS/:-moz-broken'
tags:
  - CSS
  - 'CSS:Mozilla Extensions'
  - NeedsCompatTable
  - Non-standard
  - Pseudo-class
  - Reference
  - Selector
translation_of: 'Web/CSS/:-moz-broken'
---
<div>{{CSSRef}}{{Non-standard_header}}{{gecko_minversion_header("1.9")}}</div>

<strong>`:-moz-broken`</strong> は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions) であり、壊れた画像リンクを表している要素に一致します。

<div class="note">
<strong>注:</strong> このセレクターは、主にテーマ開発者が使用することを意図しているものです。
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">:-moz-broken</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;img src="broken.jpg" alt="This image is broken. :-("&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">:-moz-broken {
  background: bisque;
  padding: 8px;
}</pre>

<h3 id="Result" name="Result">結果</h3>

{{EmbedLiveSample("Examples")}}

<h2 id="Specifications" name="Specifications">仕様書</h2>

標準の一部ではありません。

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("css.selectors.-moz-broken")}}

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}</li>
 <li>{{bug("11011")}}</li>
</ul>
