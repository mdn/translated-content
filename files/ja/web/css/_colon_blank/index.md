---
title: ':blank'
slug: 'Web/CSS/:blank'
tags:
  - ':blank'
  - CSS
  - CSS Selectors
  - Draft
  - Experimental
  - NeedsContent
  - NeedsExample
  - Pseudo-class
translation_of: 'Web/CSS/:blank'
---
<p>{{CSSRef}}{{SeeCompatTable}}</p>

<div class="blockIndicator note">
<p><strong>注:</strong> <code>:blank</code> セレクターは、CSSWG が変更を続けているため、使用するリスクを考慮する必要があります。</p>

<p><a href="https://github.com/w3c/csswg-drafts/issues/1967" title="[selectors] decide on :blank">CSSWG issue #1967</a> を参照してください。</p>
</div>

<p><strong><code>:blank</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>で、空のユーザー入力要素 (例えば {{HTMLElement("input")}} や {{HTMLElement("textarea")}}) に一致します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

{{CSSSyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="Simple_blank_example" name="Simple_blank_example">単純な :blank の例</h3>

<p>最終的に対応しているブラウザーでは、 <code>:blank</code> 疑似クラスを使用することで、開発者は、必須ではないが、まだ何も記入されていない入力コントロールを、何らかの方法で強調表示することができるようになります。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;textarea&gt;&lt;/textarea&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">textarea:blank {
  border: 3px solid red;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Simple_blank_example', '100%', 150)}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS4 Selectors", "#blank-pseudo", ":blank")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.selectors.blank")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef(":empty")}}</li>
</ul>
