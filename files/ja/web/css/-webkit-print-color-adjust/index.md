---
title: '-webkit-print-color-adjust'
slug: Web/CSS/-webkit-print-color-adjust
tags:
  - CSS
  - CSS Property
  - Layout
  - Non-standard
  - Web
translation_of: Web/CSS/-webkit-print-color-adjust
---
<div>{{CSSRef}}{{Non-standard_Header}}</div>

<p><strong><code>-webkit-print-color-adjust</code></strong> CSSプロパティは、プリント時に背景色・背景画像の表示を強制できるようにする、WebKitブラウザ上で使用できる非標準のCSSプロパティです。</p>

<pre class="brush: css no-line-numbers">/* キーワード値 */
-webkit-print-color-adjust: economy;
-webkit-print-color-adjust: exact;

/* グローバル値 */
-webkit-print-color-adjust: inherit;
-webkit-print-color-adjust: initial;
-webkit-print-color-adjust: unset;
</pre>

<h2 id="構文">構文</h2>

<p>The <code>-webkit-print-color-adjust</code> 以下のいずれかの値を持ちます。</p>

<h3 id="値">値</h3>

<dl>
 <dt><code>economy</code></dt>
 <dd>初期値です。背景色・背景画像はユーザーが明示的にブラウザの設定で許可した場合のみプリントされます。</dd>
 <dt><code>exact</code></dt>
 <dd>この値が適用された要素の背景色・背景画像を強制的にプリントします。ユーザーのプリント設定を上書きます。</dd>
</dl>

<h2 id="例">例</h2>

<pre class="brush: css">/* 黒地に白文字でプリントする */
article {
  -webkit-print-color-adjust: exact;
  background: #222;
  color: #eee;
}</pre>

<h2 id="仕様書">仕様書</h2>

<p>Not part of any specification yet, though there is a <a href="http://wiki.csswg.org/ideas/print-backgrounds">proposal in the CSSWG wiki</a> to standardize it.</p>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>



<p>{{Compat("css.properties.-webkit-print-color-adjust")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>WebKit <a href="https://bugs.webkit.org/show_bug.cgi?id=64583">bug 64583</a>: "WIP: Add CSS property to control printing of backgrounds for individual elements"</li>
 <li>CSSWG wiki: <a href="http://wiki.csswg.org/ideas/print-backgrounds">print-backgrounds</a> - a proposal to standardize this property</li>
 <li>CSS Color Module Level 4:  the <code><a href="https://drafts.csswg.org/css-color-4/#color-adjust">color-adjust</a></code> property - a newer proposal to standardize this property</li>
</ul>
