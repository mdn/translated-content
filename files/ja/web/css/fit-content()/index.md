---
title: fit-content
slug: Web/CSS/fit-content
tags:
  - CSS
  - CSS グリッド
  - CSS 関数
  - Experimental
  - Reference
  - Web
  - ウェブ
  - レイアウト
translation_of: Web/CSS/fit-content
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>fit-content()</code></strong> は<a href="/ja/docs/Web/CSS">CSS</a> の関数で、指定された寸法を <code>min(<var>最大寸法</var>, max(<var>最小寸法</var>, <var>引数</var>))</code> の式に従って有効な寸法に制約します。</span></p>

<div>{{EmbedInteractiveExample("pages/css/function-fit-content.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>この関数は <a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッド</a>のプロパティにおいて、トラックの寸法を <code><a href="/ja/docs/Web/CSS/grid-template-columns#max-content">max-content</a></code> で定義された最大寸法と <code><a href="/ja/docs/Web/CSS/grid-template-columns#auto">auto</a></code> で定義された最小寸法との間で、 <code>auto</code> と似た方法 (すなわち <code><a href="/ja/docs/Web/CSS/minmax">minmax(auto, max-content)</a></code>) で計算しますが、 <code>auto</code> の最小値よりも大きい場合は <var>引数</var> がトラックの寸法になるという点が異なります。</p>

<p>これは {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}}, {{cssxref("max-height")}} にレイアウトボックスの寸法としても使用され、最大寸法は内容の最大寸法、最小寸法は内容の最小寸法になります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>引数として <code>&lt;length&gt;</code> または <code>&lt;percentage&gt;</code> を受け付ける関数です。</p>

<pre class="brush: css no-line-numbers">/* &lt;length&gt; 値 */
fit-content(200px)
fit-content(5cm)
fit-content(30vw)
fit-content(100ch)

/* &lt;percentage&gt; 値 */
fit-content(40%)
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>絶対的な長さ。</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>指定された軸で有効な空間に対する相対的なパーセント値です。</dd>
 <dd>グリッドプロパティでは、行トラックにおける列内のグリッドコンテナーのインライン方向の寸法およびグリッドコンテナーのブロック方向の寸法の相対値です。それ以外では、書字方向に応じてレイアウトボックスの有効なインライン方向の寸法またはブロック方向の寸法に対する相対値になります。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css; highlight[3]">#container {
  display: grid;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container &gt; div {
  background-color: #8ca0ff;
  padding: 5px;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="container"&gt;
  &lt;div&gt;Item as wide as the content.&lt;/div&gt;
  &lt;div&gt;
    Item with more text in it. Because the contents of it are
    wider than the maximum width, it is clamped at 300 pixels.
  &lt;/div&gt;
  &lt;div&gt;Flexible item&lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example", "100%", 200)}}</p>

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
   <td>{{SpecName("CSS3 Sizing", "#valdef-width-fit-content-length-percentage", "fit-content()")}}</td>
   <td>{{Spec2("CSS3 Sizing")}}</td>
   <td>{{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}}, {{cssxref("max-height")}} のレイアウトボックスの寸法としての関数を定義。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS Grid", "#valdef-grid-template-columns-fit-content", "fit-content()")}}</td>
   <td>{{Spec2("CSS Grid")}}</td>
   <td>トラックの寸法として使用される際の関数を定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.grid-template-columns.fit-content")}}</p>
