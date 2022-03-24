---
title: ':-moz-loading'
slug: 'Web/CSS/:-moz-loading'
tags:
  - CSS
  - 'CSS:Mozilla Extensions'
  - 'CSS:Mozilla 拡張'
  - NeedsCompatTable
  - Non-standard
  - Pseudo-class
  - Reference
  - Selector
  - セレクター
  - 擬似クラス
  - 標準外
translation_of: 'Web/CSS/:-moz-loading'
---
<div>{{CSSRef}}{{Non-standard_header}}{{gecko_minversion_header("1.9")}}</div>

<strong>`:-moz-loading`</strong> は [CSS](/ja/docs/Web/CSS) の [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)であり、読み込みが開始されていないために表示できない要素、例えばまだ到着が開始されていない画像などに一致します。なお、読み込み<em>中</em>の画像は、この擬似クラスには一致<em>しません</em>。

<div class="note">
<strong>注:</strong> このセレクターは主にテーマ開発者が使用するためのものです。
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">:-moz-loading</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: css notranslate">:-moz-loading {
  background-color: #aaa;
  background-image: url(loading-animation.gif) center no-repeat;
}</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}</li>
</ul>
