---
title: 指定値
slug: Web/CSS/specified_value
tags:
  - CSS
  - Guide
  - Reference
translation_of: Web/CSS/specified_value
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><ruby><strong>指定値</strong><rp> (</rp><rt>specified value</rt><rp>) </rp></ruby>は、 <a href="/ja/docs/Web/CSS">CSS</a> プロパティにおいて文書のスタイルシートから受け取る値です。</span>指定されたプロパティの指定値は、以下の規則に従って決定されます。</p>

<ol>
 <li>文書のスタイルシートが明示的にプロパティに値を指定した場合は、その値が使用されます。</li>
 <li>文書のスタイルシートが値を指定しなかった場合、可能であれば親要素から値を継承します。</li>
 <li>上記のいずれも利用できない場合、要素の<a href="/ja/docs/Web/CSS/initial_value">初期値</a>が使用されます。</li>
</ol>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;My specified color is given explicitly in the CSS.&lt;/p&gt;

&lt;div&gt;The specified values of all my properties default to their
    initial values, because none of them are given in the CSS.&lt;/div&gt;

&lt;div class="fun"&gt;
  &lt;p&gt;The specified value of my font family is not given explicitly
      in the CSS, so it is inherited from my parent. However,
      the border is not an inheriting property.&lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">.fun {
  border: 1px dotted pink;
  font-family: fantasy;
}

p {
  color: green;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples", 500, 220)}}</p>

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
   <td>{{SpecName("CSS2.2", "cascade.html#specified-value", "cascaded value")}}</td>
   <td>{{Spec2("CSS2.2")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "cascade.html#specified-value", "cascaded value")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSS_key_concepts}}</li>
</ul>
