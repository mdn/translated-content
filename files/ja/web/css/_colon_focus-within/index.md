---
title: ':focus-within'
slug: 'Web/CSS/:focus-within'
tags:
  - ':focus'
  - ':focus-within'
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
translation_of: 'Web/CSS/:focus-within'
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>:focus-within</code></strong> <a href="/ja/docs/CSS/Pseudo-classes">擬似クラス</a>は、フォーカスを持っているか、フォーカスを持った要素を<em>含む</em>要素を表します。言い換えれば、それ自身が {{CSSxRef(":focus")}} 擬似クラスに該当するか、子孫に <code>:focus</code> に該当する要素がある要素を表します。 (これは<a href="/ja/docs/Web/Web_Components/Shadow_DOM">シャドウツリー</a>における子孫も含みます。)</p>

<pre class="brush: css no-line-numbers notranslate">/* 子孫要素の一つにフォーカスがある &lt;div&gt; を選択 */
div:focus-within {
  background: cyan;
}</pre>

<p>このセレクターは、よくある例のように、 {{HTMLElement("input")}} 欄の一つにユーザーがフォーカスを置いたときに、それを含む {{HTMLElement("form")}} を強調する場合に便利です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p>この例では、何れかの入力欄にフォーカスが当たった時、特殊な色のスタイルにします。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;このフォームに入力してみてください。&lt;/p&gt;

&lt;form&gt;
  &lt;label for="given_name"&gt;名前:&lt;/label&gt;
  &lt;input id="given_name" type="text"&gt;
  &lt;br&gt;
  &lt;label for="family_name"&gt;苗字:&lt;/label&gt;
  &lt;input id="family_name" type="text"&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css highlight[7] notranslate">form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ff8;
  color: black;
}

input {
  margin: 4px;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples", 500, 150)}}</p>

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
   <td>{{SpecName("CSS4 Selectors", "#the-focus-within-pseudo", ":focus-within")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.selectors.focus-within")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef(":focus")}}</li>
 <li>{{CSSxRef(":focus-visible")}} {{Experimental_Inline}}</li>
 <li><a href="https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4">Grab your user's attention with the focus-within selector</a></li>
</ul>
