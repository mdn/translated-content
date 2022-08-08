---
title: レイアウトと包含ブロック
slug: Web/CSS/Containing_block
tags:
  - CSS
  - CSS Position
  - Containers
  - Guide
  - Layout
  - Position
  - Style
  - blocks
  - containing block
  - size
translation_of: Web/CSS/Containing_block
---
<div>{{cssref}}</div>

<p>要素の寸法や位置は、しばしば<ruby><strong>包含ブロック</strong><rp> (</rp><rt>containing block</rt><rp>) </rp></ruby>に影響されます。多くの場合、包含ブロックは要素から見て直近の<a href="/ja/docs/Web/HTML/Block-level_elements">ブロックレベル</a>の祖先の<a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area">コンテンツ領域</a>ですが、常にそうとは限りません。<span class="seoSummary">この記事では、要素の包含ブロックが決まる要因を学びます。</span></p>

<p>ユーザーエージェント (ブラウザーなど) が文書をレイアウトする時、それぞれの要素にボックスを生成します。それぞれのボックスは４つの領域に分かれます。</p>

<ol start="1">
 <li>コンテンツ領域</li>
 <li>パディング領域</li>
 <li>境界領域</li>
 <li>マージン領域</li>
</ol>

<p><img alt="ボックスモデルの図" src="https://mdn.mozillademos.org/files/16558/box-model.png" style="height: 300px; width: 544px;"></p>

<p>多くの開発者が、要素の包含ブロックは常に親要素のコンテンツ領域であると信じていますが、それは必ずしも正しくありません。要素の包含ブロックが何になるかを決定する要因を調べてみましょう。</p>

<h2 id="Effects_of_the_containing_block" name="Effects_of_the_containing_block">包含ブロックの影響</h2>

<p>何が要素の包含ブロックを決定するかを学習する前に、最初になぜそのようなことが起こるのかを知っておくと役立ちます。</p>

<p>要素の寸法と位置は、しばしば包含ブロックに影響されます。 {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} に適用されるパーセント値や、絶対位置指定要素 (つまり、 {{cssxref("position")}} が <code>absolute</code> または <code>fixed</code> に設定されている要素) のオフセットプロパティは、要素の包含ブロックから計算されます。</p>

<h2 id="Identifying_the_containing_block" name="Identifying_the_containing_block">包含ブロックの識別</h2>

<p>包含ブロックを識別するプロセスは、要素の {{cssxref("position")}} プロパティの値に全面的に依存します。</p>

<ol start="1">
 <li><code>position</code> プロパティが <code><strong>static</strong></code>, <code><strong>relative</strong></code>, <strong><code>sticky</code></strong> のいずれかの場合、包含ブロックは<strong>ブロックコンテナー</strong> (inline-block, block, list-item などの要素) または<strong>整形コンテキストを確立する</strong>要素 (表コンテナー、フレックスコンテナー、グリッドコンテナー、ブロックコンテナー自身など) である直近の祖先要素の<em>コンテンツボックス</em>の辺によって構成されます。</li>
 <li><code>position</code> プロパティが <code><strong>absolute</strong></code> の場合、包含ブロックは <code>position</code> の値が <code>static</code> 以外 (<code>fixed</code>, <code>absolute</code>, <code>relative</code>, <code>sticky</code>) の直近の祖先要素における<em>パディングボックス</em>の辺によって構成されます。</li>
 <li><code>position</code> プロパティが <code><strong>fixed</strong></code> の場合、包含ブロックは{{glossary("viewport", "ビューポート")}} (連続的なメディアの場合) またはページ領域 (ページメディアの場合) によって確立されます。</li>
 <li><code>position</code> プロパティが <code><strong>absolute</strong></code> または <code><strong>fixed</strong></code> の場合、包含ブロックは以下の条件を持った直近の祖先要素における<em>パディングボックス</em>の辺によって構成されることがあります。
  <ol start="1">
   <li>{{cssxref("transform")}} または {{cssxref("perspective")}} の値が <code>none</code> 以外である</li>
   <li>{{cssxref("will-change")}} の値が <code>transform</code> または <code>perspective</code> である</li>
   <li>{{cssxref("filter")}} の値が <code>none</code> 以外、または <code>will-change</code> の値が <code>filter</code> の場合 (Firefox のみで動作)。</li>
   <li>{{cssxref("contain")}} の値が <code>paint</code> の場合 (例 <code>contain: paint;</code>)</li>
  </ol>
 </li>
</ol>

<div class="note">
<p><strong>注:</strong> ルート要素 ({{HTMLElement("html")}}) が包含ブロックである場合、<strong>初期包含ブロック</strong>と呼ばれる矩形になります。これはビューポート (連続的なメディアの場合) またはページ領域 (ページメディアの場合) の寸法を持ちます。</p>
</div>

<h2 id="Calculating_percentage_values_from_the_containing_block" name="Calculating_percentage_values_from_the_containing_block">包含ブロックからのパーセント値の計算</h2>

<p>前述の通り、特定のプロパティがパーセント値を与えられた場合、計算値は要素の包含ブロックに依存します。このように動作するプロパティは<strong>ボックスモデルプロパティ</strong>及び<strong>オフセットプロパティ</strong>です。</p>

<ol start="1">
 <li>{{cssxref("height")}}, {{cssxref("top")}}, {{cssxref("bottom")}} の各プロパティは、包含ブロックの <code>height</code> からパーセント値を計算します。</li>
 <li>{{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, {{cssxref("margin")}} の各プロパティは、包含ブロックの <code>width</code> からパーセント値を計算します。</li>
</ol>

<h2 id="Some_examples" name="Some_examples">いくつかの例</h2>

<p>すべての例の HTML コードは以下の通りです。</p>

<pre class="brush: html notranslate">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;This is a paragraph!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>

<p>以下のそれぞれの例では、 CSS のみが異なります。</p>

<h3 id="Example_1" name="Example_1">例 1</h3>

<p>この例では、段落が静的に配置されているため、包含ブロックはブロックコンテナーである直近の祖先である {{HTMLElement("section")}} になります。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;This is a paragraph!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>
</div>

<pre class="brush: css notranslate">body {
  background: beige;
}

section {
  display: block;
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  width: 50%;   /* == 400px * .5 = 200px */
  height: 25%;  /* == 160px * .25 = 40px */
  margin: 5%;   /* == 400px * .05 = 20px */
  padding: 5%;  /* == 400px * .05 = 20px */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('Example_1','100%','300')}}</p>

<h3 id="Example_2" name="Example_2">例 2</h3>

<p>この例では、 <code>&lt;section&gt;</code> が (<code>display: inline</code> であるため) ブロックコンテナーではなく、整形コンテキストを確立しないので、段落の包含ブロックは {{HTMLElement("body")}} 要素になります。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;This is a paragraph!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>
</div>

<pre class="brush: css notranslate">body {
  background: beige;
}

section {
  display: inline;
  background: lightgray;
}

p {
  width: 50%;     /* == half the body's width */
  height: 200px;  /* Note: a percentage would be 0 */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('Example_2','100%','300')}}</p>

<h3 id="Example_3" name="Example_3">例 3</h3>

<p>この例では、 <code>&lt;section&gt;</code> の <code>position</code> が <code>absolute</code> であるため、段落の包含ブロックは <code>&lt;section&gt;</code> になります。段落のパーセント値は、包含ブロックの <code>padding</code> に影響されますが、 {{cssxref("box-sizing")}} の値が <code>border-box</code> である場合はそのようにはなりません。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;This is a paragraph!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>
</div>

<pre class="brush: css notranslate">body {
  background: beige;
}

section {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  background: lightgray;
}

p {
  position: absolute;
  width: 50%;   /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%;  /* == (160px + 30px + 30px) * .25 = 55px */
  margin: 5%;   /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%;  /* == (400px + 20px + 20px) * .05 = 22px */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('Example_3','100%','300')}}</p>

<h3 id="Example_4" name="Example_4">例 4</h3>

<p>この例では、段落の <code>position</code> が <code>fixed</code> なので、包含ブロックは初期包含ブロック (画面の場合はビューポート) になります。従って、段落の寸法はブラウザーウィンドウの寸法に基づいて変化します。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;This is a paragraph!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>
</div>

<pre class="brush: css notranslate">body {
  background: beige;
}

section {
  width: 400px;
  height: 480px;
  margin: 30px;
  padding: 15px;
  background: lightgray;
}

p {
  position: fixed;
  width: 50%;   /* == (50vw - (width of vertical scrollbar)) */
  height: 50%;  /* == (50vh - (height of horizontal scrollbar)) */
  margin: 5%;   /* == (5vw - (width of vertical scrollbar)) */
  padding: 5%;  /* == (5vw - (width of vertical scrollbar)) */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('Example_4','100%','300')}}</p>

<h3 id="Example_5" name="Example_5">例 5</h3>

<p>この例では、段落の <code>position</code> が <code>absolute</code> なので、包含ブロックは {{cssxref("transform")}} プロパティが <code>none</code> ではない直近の祖先である <code>&lt;section&gt;</code> になります。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;This is a paragraph!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>
</div>

<pre class="brush: css notranslate">body {
  background: beige;
}

section {
  transform: rotate(0deg);
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  position: absolute;
  left: 80px;
  top: 30px;
  width: 50%;   /* == 200px */
  height: 25%;  /* == 40px */
  margin: 5%;   /* == 20px */
  padding: 5%;  /* == 20px */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('Example_5','100%','300')}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{css_key_concepts}}</li>
 <li>{{cssxref("all")}} プロパティは、すべての CSS 宣言を初期状態に初期化します</li>
</ul>
