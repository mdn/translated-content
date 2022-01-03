---
title: ':in-range'
slug: 'Web/CSS/:in-range'
tags:
  - CSS
  - Reference
  - Web
  - セレクター
  - 疑似クラス
translation_of: 'Web/CSS/:in-range'
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>:in-range</code></strong> <a href="/ja/docs/CSS/Pseudo-classes" title="Pseudo-classes">疑似クラス</a>は、現在の値が {{htmlattrxref("min", "input")}} および {{htmlattrxref("max","input")}} 属性による制限範囲内にある {{htmlelement("input")}} 要素を表します。</p>

<pre class="brush: css no-line-numbers">/* 入力範囲が設定されていて、値がその範囲に該当する
   &lt;input&gt; 要素をすべて選択 */
input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}</pre>

<p>この疑似クラスは。入力欄の現在の値が許可された範囲内にあることをユーザーに視覚的に示すのに便利です。</p>

<div class="note"><strong>Note:</strong> この疑似クラスは範囲制限を持つ（または設定できる）要素にのみ適用されます。そのような制限がない場合は、要素は "in-range" にも "out-of-range" にもなりません。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<div id="example">
<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form action="" id="form1"&gt;
  &lt;ul&gt;1から10の間の値が有効です。
    &lt;li&gt;
      &lt;input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12"&gt;
      &lt;label for="value1"&gt;あなたの値は&lt;/label&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css;">li {
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

<div>{{EmbedLiveSample('Example', 600, 140)}}</div>

<h2 id="Specifications" name="Specifications"><span>仕様書</span></h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'scripting.html#selector-in-range', ':in-range')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>いつ HTML が <code>:in-range</code> に該当するかを定義。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#in-range-pseudo', ':in-range')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>
<div>
<p>{{Compat("css.selectors.in-range")}}</p>
</div>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>{{cssxref(":out-of-range")}}</li>
 <li><a href="/ja/docs/Learn/HTML/Forms/Form_validation">Form data validation</a></li>
</ul>
