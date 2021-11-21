---
title: translateZ()
slug: Web/CSS/transform-function/translateZ()
tags:
  - 3D
  - CSS
  - CSS Function
  - CSS Transforms
  - Function
  - Reference
translation_of: Web/CSS/transform-function/translateZ()
---
<div>{{CSSRef}}</div>

<p><strong><code>translateZ()</code></strong> <a href="/ja/docs/Web/CSS">CSS</a> <a href="/ja/docs/Web/CSS/CSS_Functions">関数</a>は、3 次元空間の z 軸に沿って、すなわちビューアーに近づくまたは遠ざかって、要素を移動させます。その結果は {{cssxref("&lt;transform-function&gt;")}} データ型となります。</p>

<div>{{EmbedInteractiveExample("pages/css/function-translateZ.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>この変換は、 {{cssxref("&lt;length&gt;")}} によって定義され、要素または要素がどれだけ内側または外側に移動するかを指定します。</p>

<p>上記のデモでは、 <code><a href="/ja/docs/Web/CSS/perspective">perspective: 550px;</a></code> (3D空間を作成するため) と <code><a href="/ja/docs/Web/CSS/transform-style">transform-style. preserve-3d;</a></code> (従って、子つまり立方体の6辺も3D空間に配置されています) が、立方体に設定されています。</p>

<div class="note">
<p><strong>注:</strong> <code>translateZ(tz)</code> は、<code><a href="/ja/docs/Web/CSS/transform-function/translate3d">translate3d</a>(0, 0, tz)</code> と等価です。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">translateZ(<var>tz</var>)
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code><var>tz</var></code></dt>
 <dd>変換ベクトルの z 成分を表す{{cssxref("&lt;length&gt;")}}。正の値では要素がビューアーに向かって移動し、負の値で移動すると遠ざかります。</dd>
</dl>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">ℝ<sup>2</sup> のデカルト座標</th>
   <th scope="col">ℝℙ<sup>2</sup> の同次座標</th>
   <th scope="col">ℝ<sup>3</sup> のデカルト座標</th>
   <th scope="col">ℝℙ<sup>3</sup> の同次座標</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td colspan="2" rowspan="2">この変換は 3 次元空間に適用されます。平面上では表現できません。</td>
   <td colspan="1" rowspan="2">この変換は ℝ<sup>3</sup> の線形変換ではなく、デカルト座標系の行列では表現できません。</td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>t</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>この例では、2 つのボックスが作成されます。 1 つは通常変換されずにページ上に配置されます。 2 番目の方法は、3D 空間を作成するためのパースペクティブを適用して変更し、ユーザーに向かって移動します。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div&gt;Static&lt;/div&gt;
&lt;div class="moved"&gt;Moved&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">div {
  position: relative;
  width: 60px;
  height: 60px;
  left: 100px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translateZ(200px);
  background-color: pink;
}
</pre>

<p>本当にここで重要なのは、class "moved" です。それが何をするかを見てみましょう。 まず、<code><a href="/ja/docs/Web/CSS/transform-function/perspective">perspective()</a></code> 関数は、ビューアーを、z=0 (本質的にスクリーンの表面) にある平面に対してビューアーを配置します。<code>500px</code> の値は、ユーザーが z=0 にある画像の「正面」に 500 ピクセルあることを意味します。</p>

<p>次に、<code>translateZ()</code> 関数は、要素を画面からユーザーの方に「外向きに」200 ピクセル移動します。 これは、2D ディスプレイ上で見たときに要素を大きく見せる、または VR ヘッドセットや他の 3D ディスプレイデバイスを使用して見たときに要素をより近く見せるという効果があります。</p>

<p>なお、 <code>perspective()</code> の値が <code>translateZ()</code> の値よりも小さい場合、例えば <code>transform: perspective(200px) translateZ(300px);</code> の場合、変換された要素はユーザーのビューポートよりも手前にあるため、表示されません。 perspective と translateZ の値の差が小さければ小さいほど、ユーザーは要素に近づき、変換された要素は大きく見えます。</p>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples", 250, 250)}}</p>

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
   <td>{{SpecName('CSS Transforms 2', '#transform-functions', 'transform')}}</td>
   <td>{{Spec2('CSS Transforms 2')}}</td>
   <td>3D 変換関数を CSS Transforms 標準に追加。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p><code><a href="/ja/docs/Web/CSS/transform-function#Browser_compatibility">&lt;transform-function&gt;</a></code> データ型の互換性情報をご覧ください。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("&lt;transform-function&gt;")}}</li>
</ul>
