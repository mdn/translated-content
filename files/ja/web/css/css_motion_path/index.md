---
title: CSS モーションパス
slug: Web/CSS/CSS_Motion_Path
tags:
  - CSS
  - CSS Motion Path
  - Experimental
  - Guide
  - Motion Path
  - Overview
  - Reference
translation_of: Web/CSS/CSS_Motion_Path
---
<div>{{CSSRef}}{{seecompattable}}</div>

<p><ruby><strong>モーションパス</strong><rp> (</rp><rt>Mortion Path</rt><rp>) </rp></ruby>は CSS のモジュールの一つで、任意のグラフィックオブジェクトを独自の経路に沿って動作させるためのものです。</p>

<p>この概念は、ある経路に従って動作する要素をアニメーションさせたい場合、以前は裁量権がアニメーションの推移や位置などしかなかったのですが、これは理想的はなく、単純な動作しかできませんでした。 {{cssxref("offset-path")}} によって、任意の形状の特定の経路を定義することができます。そして、 {{cssxref("offset-distance")}} により経路に沿って動かすことができ、 {{cssxref("offset-rotate")}} を用いて任意の位置での向きを選択することができます。</p>

<h2 id="Basic_example" name="Basic_example">基本的な例</h2>

<pre class="brush: html notranslate">&lt;div id="motion-demo"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">#motion-demo {
  offset-path: path('M20,20 C20,100 200,0 200,100');
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}</pre>

<p>{{EmbedLiveSample('Basic_example', '100%', 150)}}</p>

<h2 id="Reference" name="Reference">リファレンス</h2>

<h3 id="Properties" name="Properties">プロパティ</h3>

<div class="index">
<ul>
 <li>{{cssxref("offset")}}</li>
 <li>{{cssxref("offset-anchor")}}</li>
 <li>{{cssxref("offset-distance")}}</li>
 <li>{{cssxref("offset-path")}}</li>
 <li>{{cssxref("offset-position")}}</li>
 <li>{{cssxref("offset-rotate")}}</li>
</ul>
</div>

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
   <td>{{SpecName('Motion Path Level 1')}}</td>
   <td>{{Spec2('Motion Path Level 1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="offset_property" name="offset_property">offset プロパティ</h3>

<div>
<p>{{Compat("css.properties.offset-path")}}</p>
</div>
