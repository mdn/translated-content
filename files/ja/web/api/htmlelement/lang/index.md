---
title: HTMLElement.lang
slug: Web/API/HTMLElement/lang
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Property
  - Reference
translation_of: Web/API/HTMLElement/lang
---
<div>{{ APIRef("HTML DOM") }}</div>

<p><span class="seoSummary"><code><strong>HTMLElement.lang</strong></code> プロパティは、要素の属性値とテキストコンテンツの基本言語を取得または設定します。</span></p>

<p>このプロパティによって返される言語コードは、IETF 文書の<em><a href="https://www.ietf.org/rfc/bcp/bcp47.txt">言語を識別するタグ（BCP47）</a></em>（英語）で定義されています。 一般的な例には、英語の "en"、日本語の "ja"、スペイン語の "es" などがあります。 この属性のデフォルト値は <code>unknown</code>（不明）です。 この属性は、ここで説明する個々の要素レベルで有効ですが、ほとんどの場合、ドキュメントのルート要素に対して指定されます。</p>

<p>これも <code>lang</code> 属性でのみ機能し、<code>xml:lang</code> では機能しません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <var>languageUsed</var> = elementNodeReference.lang; // lang の値を取得
elementNodeReference.lang = <var>NewLanguage</var>; // lang に新しい値を設定
</pre>

<p><var>languageUsed</var> は、現在の要素のテキストを記述している言語を取得する文字列変数です。 <var>NewLanguage</var> は、現在の要素のテキストを記述している言語を設定する値を持つ文字列変数です。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">// このスニペットは基本言語を比較し、
// 言語に基づいて別の URL にリダイレクトするものです
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}</pre>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-59132807', 'lang')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLElement.lang")}}</p>
