---
title: box-decoration-break
slug: Web/CSS/box-decoration-break
tags:
  - CSS
  - CSS プロパティ
  - CSS 断片化
  - Experimental
  - Reference
translation_of: Web/CSS/box-decoration-break
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>box-decoration-break</code></strong> プロパティは、要素の<a href="/ja/docs/Web/CSS/CSS_Fragmentation">断片</a>が複数の行、段、ページに渡る場合に描画する方法を指定します。</p>

<div>{{EmbedInteractiveExample("pages/css/box-decoration-break.html")}}</div>

<p class="hidden">この対話型サンプルのソースファイルは GitHub リポジトリに格納されています。対話型サンプルプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>指定された値は、次のプロパティの表示方法に影響を与えます。</p>

<ul>
 <li>{{Cssxref("background")}}</li>
 <li>{{Cssxref("border")}}</li>
 <li>{{Cssxref("border-image")}}</li>
 <li>{{Cssxref("box-shadow")}}</li>
 <li>{{Cssxref("clip-path")}}</li>
 <li>{{Cssxref("margin")}}</li>
 <li>{{Cssxref("padding")}}</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* キーワード値 */
box-decoration-break: slice;
box-decoration-break: clone;

/* グローバル値 */
box-decoration-break: initial;
box-decoration-break: inherit;
box-decoration-break: unset;
</pre>

<p><code>box-decoration-break</code> プロパティは、以下の一覧にあるキーワード値の一つで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>slice</code></dt>
 <dd>要素は最初、ボックスが断片化していないかのように描画され、その後でこの仮想ボックスに描画されたものが、それぞれの行/段/ページのための断片に分割されます。なお、仮想ボックスはインライン方向に分割された場合には独自の高さを使用し、ブロック方向に分割された場合は独自の幅を使用するため、それぞれの断片ごとに異なる場合があることに注意してください。詳しくは CSS の仕様書を参照してください。</dd>
 <dt><code>clone</code></dt>
 <dd>それぞれの断片が、それぞれの断片を囲む指定された境界、パディング、マージンを伴って個別に描画されます。 {{ Cssxref("border-radius") }}, {{ Cssxref("border-image") }}, {{ Cssxref("box-shadow") }} はそれぞれの断片に個別に適用されます。背景もそれぞれの断片で個別に描画されます。つまり、 {{ Cssxref("background-repeat") }}<code>: no-repeat</code> がついた背景画像であっても、複数回繰り返されます。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Inline_box_fragments" name="Inline_box_fragments">インラインボックスの断片化</h3>

<p>改行を含むインライン要素は次のように整形されます。</p>

<pre class="brush:css">.example {
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    8px 8px 10px 0px deeppink,
    -5px -5px 5px 0px blue,
    5px 5px 15px 0px yellow;
  padding: 0em 1em;
  border-radius: 16px;
  border-style: solid;
  margin-left: 10px;
  font: 24px sans-serif;
  line-height: 2;
}

...
&lt;span class="example"&gt;The&lt;br&gt;quick&lt;br&gt;orange fox&lt;/span&gt;</pre>

<p>... 結果は以下のようになります。</p>

<p><img alt="A screenshot of the rendering of an inline element styled with box-decoration-break:slice and styles given in the example." src="https://mdn.mozillademos.org/files/8167/box-decoration-break-inline-slice.png" style="height: 177px; width: 191px;"></p>

<p>上記のスタイルに <code>box-decoration-break: clone</code> を追加すると、</p>

<pre class="brush:css">-webkit-box-decoration-break: clone;
box-decoration-break: clone;
</pre>

<p>... 以下のような結果になります。</p>

<p><img alt="A screenshot of the rendering of an inline element styled with box-decoration-break:clone and styles given in the example" src="https://mdn.mozillademos.org/files/8169/box-decoration-break-inline-clone.png" style="height: 180px; width: 231px;"></p>

<p>ブラウザーで<a href="https://mdn.mozillademos.org/files/8179/box-decoration-break-inline.html">上記の二つのインラインの例を試してみる</a>ことができます。</p>

<p>これはインライン要素に大きな <code>border-radius</code> の値を使用した例です。二番目の <code>"iM"</code> には、 <code>"i"</code> と <code>"M"</code> の間に改行があります。それに対して、最初の <code>"iM"</code> には改行がありません。なお、２つの断片の描画結果を水平に並べると、断片化されていない描画結果と同じになります。</p>

<p><img alt="A screenshot of the rendering of the second inline element example." src="https://mdn.mozillademos.org/files/8189/box-decoration-break-slice-inline-2.png" style="height: 184px; width: 108px;"></p>

<p>ブラウザーで<a href="https://mdn.mozillademos.org/files/8191/box-decoration-break-inline-extreme.html">上の例を試してみる</a>ことができます。</p>

<h3 id="Block_box_fragments" name="Block_box_fragments">ブロックボックスの断片化</h3>

<p>上記と同様のスタイルのブロックボックスは、断片化がないと次のような結果になります。</p>

<p><img alt="A screenshot of the rendering of the block element used in the examples without any fragmentation." src="https://mdn.mozillademos.org/files/8181/box-decoration-break-block.png" style="height: 149px; width: 333px;"></p>

<p>上記のブロックが三つの段に分割されると、次のような結果になります。</p>

<p><img alt="A screenshot of the rendering of the fragmented block used in the examples styled with box-decoration-break:slice." src="https://mdn.mozillademos.org/files/8183/box-decoration-break-block-slice.png" style="height: 55px; max-width: none; width: 1025px;"></p>

<p>なお、これらの断片を縦に並べると、断片化されていない描画結果と同じになります。</p>

<p>そして、同じ例を <code>box-decoration-break: clone</code> で整形すると、次のような結果になります。</p>

<p><img alt="A screenshot of the rendering of the fragmented block used in the examples styled with box-decoration-break:clone." src="https://mdn.mozillademos.org/files/8185/box-decoration-break-block-clone.png" style="height: 61px; max-width: none; width: 1023px;"></p>

<p>なお、それぞれの断片に同じ境界線、ボックスの影、背景が複製されます。</p>

<p>ブラウザーで<a href="https://mdn.mozillademos.org/files/8187/box-decoration-break-block.html">上の例を試してみる</a>ことができます。</p>

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
   <td>{{ SpecName('CSS3 Fragmentation', '#break-decoration', 'box-decoration-break') }}</td>
   <td>{{ Spec2('CSS3 Fragmentation') }}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.box-decoration-break")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("break-after")}}, {{cssxref("break-before")}}, {{cssxref("break-inside")}}</li>
</ul>
