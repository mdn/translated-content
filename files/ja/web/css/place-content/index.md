---
title: place-content
slug: Web/CSS/place-content
tags:
  - CSS
  - CSS プロパティ
  - CSS ボックス配置
  - Reference
  - align-content
  - justify-content
  - place-content
  - リファレンス
translation_of: Web/CSS/place-content
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <code><strong>place-content</strong></code> プロパティは、 {{CSSxRef("align-content")}} および {{CSSxRef("justify-content")}} の<a href="/ja/docs/Web/CSS/Shorthand_properties">一括指定</a>です。これらの配置方法を利用するどのレイアウト方法でも使用することができます。</p>

<div>{{EmbedInteractiveExample("pages/css/place-content.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* 位置による配置 */
/* align-content は left 及び right の値を取りません */
place-content: center start;
place-content: start center;
place-content: end left;
place-content: flex-start center;
place-content: flex-end center;

/* ベースラインによる配置 */
/* justify-content は baseline の値を取りません */
place-content: baseline center;
place-content: first baseline space-evenly;
place-content: last baseline right;

/* 均等配置 */
place-content: space-between space-evenly;
place-content: space-around space-evenly;
place-content: space-evenly stretch;
place-content: stretch space-evenly;

/* グローバル値 */
place-content: inherit;
place-content: initial;
place-content: unset;</pre>

<p>最初の値は {{CSSxRef("align-content")}} プロパティ値で、二番目の値は {{CSSxRef("justify-content")}} の値です。</p>

<div class="warning">
<p><strong>重要</strong>: 二番目の値がない場合、最初の値に両方に有効な値が設定されていれば、両方に使用されます。どちらかに無効な値であれば、値自体が無効になります。</p>
</div>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>start</code></dt>
 <dd>各アイテムは、適切な軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。</dd>
 <dt><code>end</code></dt>
 <dd>各アイテムは、適切な軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。</dd>
 <dt><code>flex-start</code></dt>
 <dd>各アイテムは、フレックスコンテナーに依存して、主軸または交差軸の先頭側である配置コンテナーの端に向けて互いに寄せて配置されます。<br>
 これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は <code>start</code> のように扱われます。</dd>
 <dt><code>flex-end</code></dt>
 <dd>各アイテムは、フレックスコンテナーに依存して、主軸または交差軸の末尾側である配置コンテナーの端に向けて互いに寄せて配置されます。<br>
 これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は <code>end</code> のように扱われます。</dd>
 <dt><code>center</code></dt>
 <dd>各アイテムは、配置コンテナーの中央に向けて互いに寄せて配置されます。</dd>
 <dt><code>left</code></dt>
 <dd>各アイテムは、適切な軸方向で配置コンテナーの左側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は <code>start</code> のように動作します。</dd>
 <dt><code>right</code></dt>
 <dd>各アイテムは、適切な軸方向で配置コンテナーの右側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は <code>start</code> のように動作します。</dd>
 <dt><code>space-between</code></dt>
 <dd>各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムは主軸の先頭側に寄せられ、最後のアイテムは主軸の末尾側に寄せられます。</dd>
 <dt><code>baseline<br>
 first baseline</code><br>
 <code>last baseline</code></dt>
 <dd>first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。<br>
 <code>first baseline</code> の代替配置は <code>start</code>、<code>last baseline</code> の代替配置は <code>end</code> です。</dd>
 <dt><code>space-around</code></dt>
 <dd>各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムの前と最後のアイテムの後の余白は、隣接するアイテム同士の間隔の半分の幅になります。</dd>
 <dt><code>space-evenly</code></dt>
 <dd>各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔、最初のアイテムの前の余白、最後のアイテムの後の余白は、まったく同じ幅になります。</dd>
 <dt><code>stretch</code></dt>
 <dd>各アイテムの寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が <code>auto</code> のアイテムは、 {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、寸法の合計が配置コンテナーを満たすようになります。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css; highlight[7]">#container {
  display: flex;
  height:240px;
  width: 240px;
  flex-wrap: wrap;
  background-color: #8c8c8c;
  writing-mode: horizontal-tb; /* Can be changed in the live sample */
  direction: ltr; /* Can be changed in the live sample */
  place-content: flex-end center; /* Can be changed in the live sample */
}

div &gt; div {
  border: 2px solid #8c8c8c;
  width: 50px;
  background-color: #a0c8ff;
}

.small {
  font-size: 12px;
  height: 40px;
}

.large {
  font-size: 14px;
  height: 50px;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="container"&gt;
  &lt;div class="small"&gt;Lorem&lt;/div&gt;
  &lt;div class="small"&gt;Lorem&lt;br/&gt;ipsum&lt;/div&gt;
  &lt;div class="large"&gt;Lorem&lt;/div&gt;
  &lt;div class="large"&gt;Lorem&lt;br/&gt;impsum&lt;/div&gt;
  &lt;div class="large"&gt;&lt;/div&gt;
  &lt;div class="large"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<div class="hidden">
<pre class="brush:html">&lt;code&gt;writing-mode:&lt;/code&gt;&lt;select id="writingMode"&gt;
  &lt;option value="horizontal-tb" selected&gt;horizontal-tb&lt;/option&gt;
  &lt;option value="vertical-rl"&gt;vertical-rl&lt;/option&gt;
  &lt;option value="vertical-lr"&gt;vertical-lr&lt;/option&gt;
  &lt;option value="sideways-rl"&gt;sideways-rl&lt;/option&gt;
  &lt;option value="sideways-lr"&gt;sideways-lr&lt;/option&gt;
&lt;/select&gt;&lt;code&gt;;&lt;/code&gt;&lt;br/&gt;
&lt;code&gt;direction:&lt;/code&gt;&lt;select id="direction"&gt;
  &lt;option value="ltr" selected&gt;ltr&lt;/option&gt;
  &lt;option value="rtl"&gt;rtl&lt;/option&gt;
&lt;/select&gt;&lt;code&gt;;&lt;/code&gt;&lt;br/&gt;
&lt;code&gt;place-content:&lt;/code&gt;&lt;select id="alignContentAlignment"&gt;
  &lt;option value="normal"&gt;normal&lt;/option&gt;
  &lt;option value="first baseline"&gt;first baseline&lt;/option&gt;
  &lt;option value="last baseline"&gt;last baseline&lt;/option&gt;
  &lt;option value="baseline"&gt;baseline&lt;/option&gt;
  &lt;option value="space-between"&gt;space-between&lt;/option&gt;
  &lt;option value="space-around"&gt;space-around&lt;/option&gt;
  &lt;option value="space-evenly" selected&gt;space-evenly&lt;/option&gt;
  &lt;option value="stretch"&gt;stretch&lt;/option&gt;
  &lt;option value="center"&gt;center&lt;/option&gt;
  &lt;option value="start"&gt;start&lt;/option&gt;
  &lt;option value="end"&gt;end&lt;/option&gt;
  &lt;option value="flex-start"&gt;flex-start&lt;/option&gt;
  &lt;option value="flex-end"&gt;flex-end&lt;/option&gt;
  &lt;option value="safe"&gt;safe&lt;/option&gt;
  &lt;option value="unsafe"&gt;unsafe&lt;/option&gt;
&lt;/select&gt;
﻿&lt;select id="justifyContentAlignment"&gt;
  &lt;option value="normal"&gt;normal&lt;/option&gt;
  &lt;option value="space-between"&gt;space-between&lt;/option&gt;
  &lt;option value="space-around"&gt;space-around&lt;/option&gt;
  &lt;option value="space-evenly"&gt;space-evenly&lt;/option&gt;
  &lt;option value="stretch"&gt;stretch&lt;/option&gt;
  &lt;option value="center" selected&gt;center&lt;/option&gt;
  &lt;option value="start"&gt;start&lt;/option&gt;
  &lt;option value="end"&gt;end&lt;/option&gt;
  &lt;option value="flex-start"&gt;flex-start&lt;/option&gt;
  &lt;option value="flex-end"&gt;flex-end&lt;/option&gt;
  &lt;option value="left"&gt;left&lt;/option&gt;
  &lt;option value="right"&gt;right&lt;/option&gt;
  &lt;option value="safe"&gt;safe&lt;/option&gt;
  &lt;option value="unsafe"&gt;unsafe&lt;/option&gt;
&lt;/select&gt;&lt;code&gt;;&lt;/code&gt;
</pre>

<pre class="brush: js">var update = function () {
   document.getElementById("container").style.placeContent = document.getElementById("alignContentAlignment").value + " " + document.getElementById("justifyContentAlignment").value;
}

var alignContentAlignment = document.getElementById("alignContentAlignment");
alignContentAlignment.addEventListener("change",  update);

var justifyContentAlignment = document.getElementById("justifyContentAlignment");
justifyContentAlignment.addEventListener("change", update);

var writingM = document.getElementById("writingMode");
writingM.addEventListener("change", function (evt) {
   document.getElementById("container").style.writingMode = evt.target.value;
});
var direction = document.getElementById("direction");
direction.addEventListener("change", function (evt) {
   document.getElementById("container").style.direction = evt.target.value;
});
</pre>
</div>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example", "370", "300")}}</p>

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
   <td>{{SpecName("CSS3 Box Alignment", "#propdef-place-content", "place content")}}</td>
   <td>{{Spec2("CSS3 Box Alignment")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{CSSInfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>{{Compat("css.properties.place-content")}}</div>

<h3 id="Support_in_Flex_layout" name="Support_in_Flex_layout">フレックスレイアウトでの対応</h3>

<div>{{Compat("css.properties.place-content.flex_context")}}</div>

<h3 id="Support_in_Grid_layout" name="Support_in_Grid_layout">グリッドレイアウトでの対応</h3>

<div>{{Compat("css.properties.place-content.grid_context")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>CSS フレックスボックスガイド: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">フレックスボックスの基本概念</a></em></li>
 <li>CSS フレックスボックスガイド: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">フレックスコンテナー内でのアイテムの配置</a></em></li>
 <li>CSS グリッドガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">CSS グリッドレイアウト内でのボックス配置</a></em></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Alignment">CSS ボックス配置</a></li>
 <li>{{CSSxRef("align-content")}} プロパティ</li>
 <li>{{CSSxRef("justify-content")}} プロパティ</li>
</ul>
