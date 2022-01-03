---
title: ':out-of-range'
slug: 'Web/CSS/:out-of-range'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Selectors
  - UI Selector
translation_of: 'Web/CSS/:out-of-range'
---
<div>{{CSSRef}}</div>

<p><strong><code>:out-of-range</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/CSS/Pseudo-classes" title="Pseudo-classes">擬似クラス</a>で、 {{htmlelement("input")}} 要素のうち、現在の値が {{htmlattrxref("min", "input")}} および {{htmlattrxref("max","input")}} 属性で指定された範囲を外れているものを表します。</p>

<pre class="brush: css no-line-numbers notranslate">/* 入力範囲が設定されていて、値がその範囲外である
   &lt;input&gt; 要素をすべて選択 */
input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
}</pre>

<p>この擬似クラスは。入力欄の現在の値が許可された範囲外にあることをユーザーに視覚的に示すのに便利です。</p>

<div class="note"><strong>注:</strong> この擬似クラスは範囲制限を持つ (または設定できる) 要素にのみ適用されます。そのような制限がない場合は、要素は "in-range" にも "out-of-range" にもなりません。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<div id="example">
<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;form action="" id="form1"&gt;
 &lt;p&gt;1から10の間の値が有効です。&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12"&gt;
      &lt;label for="value1"&gt;あなたの値は&lt;/label&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css; notranslate">li {
  list-style: none;
  margin-bottom: 1em;
}

input {
  border: 1px solid black;
}

input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
  border: 2px solid red;
}

input:in-range + label::after {
  content: '範囲内です。';
}

input:out-of-range + label::after {
  content: '範囲外です！';
}</pre>

<h3 id="Result" name="Result">結果</h3>
</div>

<div>{{EmbedLiveSample('Examples', 600, 140)}}</div>

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
   <td>{{SpecName('HTML WHATWG', 'scripting.html#selector-out-of-range', ':out-of-range')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>いつ HTML が <code>:out-of-range</code> に該当するかを定義。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#out-of-range-pseudo', ':out-of-range')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.selectors.out-of-range")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref(":in-range")}}</li>
 <li><a href="/ja/docs/Learn/HTML/Forms/Form_validation">フォームデータの検査</a></li>
</ul>
