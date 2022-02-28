---
title: Element.scrollLeft
slug: Web/API/Element/scrollLeft
tags:
  - API
  - CSSOM View
  - Property
  - Reference
  - プロパティ
translation_of: Web/API/Element/scrollLeft
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>Element.scrollLeft</code></strong> プロパティは、要素の内容が左端からスクロールするピクセル数を取得または設定します。</p>

<p>要素の {{cssxref("direction")}} が <code>rtl</code> (right-to-left、右書き) の場合、 <code>scrollLeft</code> が <code>0</code> のときにスクロールバーが右端の位置 (スクロールする内容の開始位置) にあり、コンテンツの末尾にスクロールするにつれて、負の数が増加していきます。</p>

<div class="blockIndicator warning">
<p>画面拡大を使用するシステムでは、 <code>scrollLeft</code> が小数になることがあります。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Getting_the_value" name="Getting_the_value">値の取得</h3>

<pre class="syntaxbox">// スクロールしたピクセル数を取得
var <em>sLeft</em> = <em>element</em>.scrollLeft;
</pre>

<p><code>sLeft</code> は <code>element</code> が左端からスクロールしたピクセル数を整数で表現したものです。</p>

<h3 id="Setting_the_value" name="Setting_the_value">値の設定</h3>

<pre class="syntaxbox">// スクロールしたピクセル数を設定
<em>element</em>.scrollLeft = 10;
</pre>

<p><code>scrollLeft</code> は任意の整数値で設定することができます。しかし、</p>

<ul>
 <li>要素がスクロールできない場合 (例えば、はみ出した部分がない場合)、 <code>scrollLeft</code> は <code>0</code> に設定されます。</li>
 <li>指定された値が <code>0</code> より小さかったら (右書きの要素では <code>0</code> より大きかったら)、 <code>scrollLeft</code> は <code>0</code> に設定されます。</li>
 <li>指定された値が、コンテンツがスクロールできる最大値を超えていたら、 <code>scrollLeft</code> は最大値に設定されます。</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="container"&gt;
  &lt;div id="content"&gt;ボタンをクリックすると右にスライドします。&lt;/div&gt;
&lt;/div&gt;

&lt;button id="slide" type="button"&gt;右へスライド&lt;/button&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#container {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  overflow-x: scroll;
}

#content {
  width: 250px;
  background-color: #ccc;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">const button = document.getElementById('slide');

button.onclick = function () {
  document.getElementById('container').scrollLeft += 20;
};</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example")}}</p>

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
   <td>{{SpecName('CSSOM View', '#dom-element-scrollleft', 'scrollLeft')}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.scrollLeft")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx" title="MSDN Measuring Element Dimension and Location">MSDN's Measuring Element Dimension and Location</a></li>
 <li>{{domxref("Element.scrollTop")}}</li>
 <li>{{domxref("Element.scrollTo()")}}</li>
</ul>
