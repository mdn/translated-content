---
title: ':enabled'
slug: 'Web/CSS/:enabled'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
translation_of: 'Web/CSS/:enabled'
---
<div>{{CSSRef}}</div>

<p><strong><code>:enabled</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>で、すべての有効な要素を表します。有効な要素とは、アクティブ化 (選択、クリック、入力など) したりフォーカスを得たりすることができるものです。要素には無効な状態、つまりアクティブ化したりフォーカスを得たりすることができない状態もあります。</p>

<pre class="brush: css no-line-numbers notranslate">/* 有効な &lt;input&gt; を選択 */
input:enabled {
  color: blue;
}</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例は有効なときに文字列の色とボタンの {{htmlElement("input")}} を緑色にし、無効な時に灰色にします。これでユーザーは要素が操作できるかどうかを知るのに役立ちます。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush:html notranslate">&lt;form action="url_of_form"&gt;
  &lt;label for="FirstField"&gt;First field (enabled):&lt;/label&gt;
  &lt;input type="text" id="FirstField" value="Lorem"&gt;&lt;br&gt;

  &lt;label for="SecondField"&gt;Second field (disabled):&lt;/label&gt;
  &lt;input type="text" id="SecondField" value="Ipsum" disabled="disabled"&gt;&lt;br&gt;

  &lt;input type="button" value="Submit"&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush:css; notranslate">input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples", 550, 95)}}</p>

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
   <td>{{SpecName('HTML WHATWG', '#selector-enabled', ':enabled')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', '#selector-enabled', ':enabled')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>HTML に関する意味を定義。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#enableddisabled', ':enabled')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#enableddisabled', ':enabled')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>擬似クラスを定義。ただし意味の結びつけの定義はなし。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.selectors.enabled")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref(":disabled")}}</li>
</ul>
