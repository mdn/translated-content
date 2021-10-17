---
title: align-self
slug: Web/CSS/align-self
tags:
  - CSS
  - CSS フレックスボックス
  - CSS プロパティ
  - CSS ボックス配置
  - place-self
  - リファレンス
translation_of: Web/CSS/align-self
---
<div>{{CSSRef}}</div>

<p><strong><code>align-self</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、グリッドやフレックスのアイテムの {{cssxref("align-items")}} の値を上書きします。グリッドでは、アイテムは{{glossary("Grid Areas", "グリッド領域")}}内に配置されます。フレックスボックスでは、アイテムは{{glossary("cross axis", "交差軸")}}上に配置されます。</p>

<div>{{EmbedInteractiveExample("pages/css/align-self.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>このプロパティは、ブロックレベルのボックスやテーブルのセルには適用されません。フレックスボックスの交差軸のマージンが <code>auto</code> の場合、 <code> align-self</code> は無視されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css no-line-numbers">/* キーワード値 */
align-self: auto;
align-self: normal;

/* 位置による配置 */
/* align-self は left および right の値をとりません */
align-self: center; /* アイテムを中央付近に配置 */
align-self: start; /* アイテムを起点に配置 */
align-self: end; /* アイテムを末端に配置 */
align-self: self-start; /* アイテムを起点に詰めて配置 */
align-self: self-end; /* アイテムを末端に詰めて配置 */
align-self: flex-start; /* フレックスアイテムを起点に配置 */
align-self: flex-end; /* フレックスアイテムを末端に配置 */

/* ベースラインによる配置 */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* 寸法が 'auto' のアイテムをコンテナーに合うよう伸長 */

/* あふれたときの配置 */
align-self: safe center;
align-self: unsafe center;

/* グローバル値 */
align-self: inherit;
align-self: initial;
align-self: unset;</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>親の {{cssxref("align-items")}} の値で計算します。</dd>
 <dt><code>normal</code></dt>
 <dd>このキーワードの効果は、現在のレイアウトモードに依存します。
 <ul>
  <li>絶対位置のレイアウトでは、このキーワードは<em>置換</em>の絶対位置ボックスには <code>start</code> のように動作し、<em>その他</em>の絶対位置ボックスには <code>stretch</code> のように動作します。</li>
  <li>絶対位置指定レイアウトの固定位置指定時は、このキーワードは <code>stretch</code> と同様に動作します。</li>
  <li>フレックスアイテムでは、このキーワードは <code>stretch</code> と同様に動作します。</li>
  <li>グリッドアイテムでは、このキーワードは <code>stretch</code> のうちの一つと似た動作をしますが、アスペクト比や固有の寸法を持つボックスは <code>start</code> のように動作します。</li>
  <li>ブロックレベルボックスと表のセルでは、プロパティは適用されません。</li>
 </ul>
 </dd>
 <dt><code>self-start</code></dt>
 <dd>アイテムは交差軸の開始側に対応する配置コンテナーの端に詰めて配置されます。</dd>
 <dt><code>self-end</code></dt>
 <dd>アイテムは交差軸の終端側に対応する配置コンテナーの端に詰めて配置されます。</dd>
 <dt><code>flex-start</code></dt>
 <dd>このフレックスアイテムの cross-start マージン側が、行の cross-start 側に詰められます。</dd>
 <dt><code>flex-end</code></dt>
 <dd>このフレックスアイテムの cross-end マージン側が、行の cross-end 側に詰められます。</dd>
 <dt><code>center</code></dt>
 <dd>このフレックスアイテムのマージンボックスが、行の交差軸方向の中央に配置されます。アイテムの交差軸方向の寸法がフレックスコンテナーよりも大きい場合は、両方向に均等にはみ出します。</dd>
 <dt><code>baseline<br>
 first baseline</code><br>
 <code>last baseline</code></dt>
 <dd>first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。<br>
 <code>first baseline</code> の代替配置は <code>start</code>、<code>last baseline</code> の代替配置は <code>end</code> です。</dd>
 <dt><code>stretch</code></dt>
 <dd>アイテムの交差軸方向の寸法の合計値が、配置コンテナーの寸法よりも小さく、アイテムの寸法が <code>auto</code> であった場合、アイテムの寸法は {{cssxref("max-height")}}/{{cssxref("max-width")}} (または同等の機能) で課された制約を尊重しつつ、均等の寸法 (比例的ではない) に拡大されるので、 <code>auto</code> が指定されたアイテムすべての寸法の合計は、ちょうど配置コンテナーの交差軸方向を埋めるようになります。</dd>
 <dt><code>safe</code></dt>
 <dd>アイテムのサイズが配置コンテナーを超えるとき、アイテムは配置モードが <code>start</code> であったかのように配置されます。</dd>
 <dt><code>unsafe</code></dt>
 <dd>アイテムの配置コンテナーのサイズの関係にかかわらず、指定した値を尊重します。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="brush: html">&lt;section&gt;
  &lt;div&gt;Item #1&lt;/div&gt;
  &lt;div&gt;Item #2&lt;/div&gt;
  &lt;div&gt;Item #3&lt;/div&gt;
&lt;/section&gt;</pre>

<h3 id="CSS" name="CSS">CSS</h3>

<pre class="brush: css">section {
  display: flex;
  align-items: center;
  height: 120px;
  background: beige;
}

div {
  height: 60px;
  background: cyan;
  margin: 5px;
}

div:nth-child(3) {
  align-self: flex-end;
  background: pink;
}</pre>

<h3 id="Result" name="Result">表示結果</h3>

<p>{{EmbedLiveSample('Example')}}</p>

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
   <td>{{SpecName("CSS3 Box Alignment", "#propdef-align-self", "align-self")}}</td>
   <td>{{Spec2("CSS3 Box Alignment")}}</td>
   <td>最新の構文定義に更新。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Flexbox", "#propdef-align-self", "align-self")}}</td>
   <td>{{Spec2("CSS3 Flexbox")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="Support_in_Flex_layout" name="Support_in_Flex_layout">フレックスレイアウトでの対応</h3>

<p>{{Compat("css.properties.align-self.flex_context")}}</p>

<h3 id="Support_in_Grid_layout" name="Support_in_Grid_layout">グリッドレイアウトでの対応</h3>

<p>{{Compat("css.properties.align-self.grid_context")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>CSS フレックスボックスガイド: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">フレックスボックスの基本概念</a></em></li>
 <li>CSS フレックスボックスガイド: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">フレックスコンテナー内でのアイテムの配置</a></em></li>
 <li>CSS グリッドガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">CSS グリッドレイアウト内でのボックス配置</a></em></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Alignment">CSS ボックス配置</a></li>
 <li>{{cssxref("align-items")}} プロパティ</li>
</ul>
