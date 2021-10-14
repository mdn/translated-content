---
title: outline-style
slug: Web/CSS/outline-style
tags:
  - CSS
  - CSS プロパティ
  - CSS 輪郭線
  - Outline
  - Reference
  - outline-style
translation_of: Web/CSS/outline-style
---
<div>{{CSSRef}}</div>

<p>CSS の <strong><code>outline-style</code></strong> プロパティは、要素の輪郭線のスタイルを設定します。輪郭線とは要素の周りに描かれる線のことで、 {{cssxref("border")}} よりも外側です。</p>

<div>{{EmbedInteractiveExample("pages/css/outline-style.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>たいていの場合、輪郭線の見た目を定義するときは一括指定プロパティ {{cssxref("outline")}} を使ったほうが便利です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* キーワード値 */
outline-style: auto;
outline-style: none;
outline-style: dotted;
outline-style: dashed;
outline-style: solid;
outline-style: double;
outline-style: groove;
outline-style: ridge;
outline-style: inset;
outline-style: outset;

/* グローバル値 */
outline-style: inherit;
outline-style: initial;
outline-style: unset;
</pre>

<p><code>outline-style</code> プロパティは、以下に挙げた値のうちの一つで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>
 <p><code>auto</code></p>
 </dt>
 <dd style="outline: 8px auto red;">ユーザーエージェントに輪郭線の描画を任せます。</dd>
 <dt>
 <p><code>none</code></p>
 </dt>
 <dd>輪郭線を描きません。{{cssxref("outline-width")}} は <code>0</code> です。</dd>
 <dt>
 <p><code>dotted</code></p>
 </dt>
 <dd style="outline: 8px dotted red;">点線の輪郭線です。</dd>
 <dt>
 <p><code>dashed</code></p>
 </dt>
 <dd style="outline: 8px dashed red;">破線の輪郭線です。</dd>
 <dt>
 <p><code>solid</code></p>
 </dt>
 <dd style="outline: 8px solid red;">1本の実線の輪郭線です。</dd>
 <dt>
 <p><code>double</code></p>
 </dt>
 <dd style="outline: 8px double red;">2本の実線の輪郭線です。{{cssxref("outline-width")}}は2本の線とその隙間の合計です。</dd>
 <dt>
 <p><code>groove</code></p>
 </dt>
 <dd style="outline: 8px groove red;">ページに刻まれたかのように見える輪郭線です。</dd>
 <dt>
 <p><code>ridge</code></p>
 </dt>
 <dd style="outline: 8px ridge red;"><code>groove</code>の逆で、ページから押し出されたように見える輪郭線です。</dd>
 <dt>
 <p><code>inset</code></p>
 </dt>
 <dd style="outline: 8px inset red;">領域がページに埋め込まれたかのように見える輪郭線です。</dd>
 <dt>
 <p><code>outset</code></p>
 </dt>
 <dd style="outline: 8px outset red;"><code>inset</code>の逆で、領域がページから隆起しているように見える輪郭線です。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Example_0_-_auto" name="Example_0_-_auto">例 0 - <code>auto</code></h3>

<p>値<code>auto</code>は、輪郭線スタイルがカスタムであることを表します。 — <q cite="https://www.w3.org/TR/css-ui-3/#outline-style">典型的には、プラットフォーム用のユーザーインターフェースのデフォルトのスタイル、または、CSSで詳細に記述できるスタイルよりも表現豊かなスタイル(例:輝いて見える半透明の外郭を持つ、輪郭の丸い輪郭線)</q></p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="auto"&gt;Outline Demo&lt;/p&gt;
&lt;/div&gt; </pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.auto {
  outline-style: auto; /* "outline: auto" と同じ */
}

/* デモを見やすく */
* { outline-width: 10px; padding: 15px; } </pre>

<p>{{ EmbedLiveSample('Example_0_-_auto') }}</p>

<h3 id="Example_1_-_dotted_and_dashed" name="Example_1_-_dotted_and_dashed">例 1 - <code>dotted</code> と <code>dashed</code></h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;div class="dotted"&gt;
    &lt;p class="dashed"&gt;Outline Demo&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt; </pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">.dotted {
  outline-style: dotted; /* "outline: dotted" と同じ */
}
.dashed {
  outline-style: dashed;
}

/* デモを見やすく */
* { outline-width: 10px; padding: 15px; } </pre>

<p>{{ EmbedLiveSample('Example_1_-_dotted_and_dashed') }}</p>

<h3 id="Example_2_-_solid_and_double" name="Example_2_-_solid_and_double">例 2 - <code>solid</code> と <code>double</code></h3>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;div class="solid"&gt;
    &lt;p class="double"&gt;Outline Demo&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt; </pre>

<h4 id="CSS_3">CSS</h4>

<pre class="brush: css">.solid {
  outline-style: solid;
}
.double {
  outline-style: double;
}

/* デモを見やすく */
* { outline-width: 10px; padding: 15px; } </pre>

<p>{{ EmbedLiveSample('Example_2_-_solid_and_double') }}</p>

<h3 id="Example_3_-_groove_and_ridge" name="Example_3_-_groove_and_ridge">例 3 - <code>groove</code> と <code>ridge</code></h3>

<h4 id="HTML_4">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;div class="groove"&gt;
    &lt;p class="ridge"&gt;Outline Demo&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<h4 id="CSS_4">CSS</h4>

<pre class="brush: css">.groove {
  outline-style: groove;
}
.ridge {
  outline-style: ridge;
}

/* デモを見やすく */
* { outline-width: 10px; padding: 15px; }</pre>

<p>{{ EmbedLiveSample('Example_3_-_groove_and_ridge') }}</p>

<h3 id="Example_4_-_inset_and_outset" name="Example_4_-_inset_and_outset">例 4 - <code>inset</code> と <code>outset</code></h3>

<h4 id="HTML_5">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;div class="inset"&gt;
    &lt;p class="outset"&gt;Outline Demo&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<h4 id="CSS_5">CSS</h4>

<pre class="brush: css">.inset {
  outline-style: inset;
}
.outset {
  outline-style: outset;
}

/* デモを見やすく */
* { outline-width: 10px; padding: 15px; }</pre>

<p>{{ EmbedLiveSample('Example_4_-_inset_and_outset') }}</p>

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
   <td>{{SpecName('CSS3 Basic UI', '#outline-style', 'outline-style')}}</td>
   <td>{{Spec2('CSS3 Basic UI')}}</td>
   <td><code>auto</code>値を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'ui.html#propdef-outline-style', 'outline-style')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.outline-style")}}</p>
