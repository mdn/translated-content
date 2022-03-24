---
title: ':-moz-only-whitespace'
slug: 'Web/CSS/:-moz-only-whitespace'
tags:
  - ':-moz-only-whitespace'
  - CSS
  - Non-standard
  - Pseudo-class
  - Reference
  - セレクター
translation_of: 'Web/CSS/:-moz-only-whitespace'
---
<div>{{CSSRef}}{{Non-standard_Header}}</div>

<div class="blockIndicator note">
<strong>メモ:</strong> {{SpecName("CSS4 Selectors", "#the-empty-pseudo")}} では、 {{CSSxRef(":empty")}} セレクターが <code style="white-space: nowrap;">:-moz-only-whitespace</code> のように動作するよう変更されましたが、まだこれに対応しているブラウザーはありません。
</div>

[CSS](/ja/docs/Web/CSS) の <strong>`:-moz-only-whitespace`</strong> [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)は、{{Glossary("whitespace", "ホワイトスペース")}}のみが入ったテキストノードのみを含む要素に一致します。 (これには空のテキストノードや子ノードを持たない要素も含みます)。

<h2 id="Syntax" name="Syntax">構文</h2>

{{CSSSyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt; &lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<div class="hidden">
<pre class="brush: css">:root {
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
}

div {
  background-color: #ccc;
  box-sizing: border-box;
  height: 100vh;
  min-height: 16px;
  min-height: 1rem;
}</pre>
</div>

<pre class="brush: css">div {
  border: 4px solid red;
}

:-moz-only-whitespace {
  border-color: lime;
}</pre>

<h3 id="Result" name="Result">結果</h3>

{{EmbedLiveSample("Example", "100%", "50")}}

<h2 id="Specifications" name="Specifications">仕様書</h2>

短期間だけ `:blank` として {{SpecName("CSS4 Selectors", "#changes-2018-02")}} において定義されましたが、その後に機能的に {{CSSxRef(":empty")}} に統合され、 {{CSSxRef(":blank")}} は空欄の {{HTMLElement("input")}} を意味するように再定義されました。

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

{{Compat("css.selectors.-moz-only-whitespace")}}

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef(":blank")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef(":empty")}}</li>
</ul>
