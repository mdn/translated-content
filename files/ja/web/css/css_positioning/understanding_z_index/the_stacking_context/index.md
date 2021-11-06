---
title: 重ね合わせコンテキスト
slug: Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
tags:
  - Advanced
  - CSS
  - Reference
  - z-index
  - ガイド
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
---
<div>{{cssref}}</div>

<p><ruby><strong>重ね合わせコンテキスト</strong><rp> (</rp><rt>Stacking context</rt><rp>) </rp></ruby>は、ビューポートまたはウェブページに面していると想定されるユーザーに対する仮想的な Z 軸に沿って並べられた HTML 要素の三次元の概念化です。 HTML 要素は、要素の属性に基づいてこの空間を優先度つきの順序で占有します。</p>

<h2 id="The_stacking_context" name="The_stacking_context">重ね合わせコンテキスト</h2>

<p>この記事の前の部分である <a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index">z-index の使用</a>では、ある要素の描画順はそれらの <code>z-index</code> の値に影響を受けていました。これは、要素が<em>重ね合わせコンテキスト</em>を生じさせる特別なプロパティを持っていたからです。</p>

<p>重ね合わせコンテキストは以下のような場面で、文書の随所に様々な要素によって構成されます。</p>

<ul>
 <li>文書のルート要素 (<code>&lt;html&gt;</code>)</li>
 <li>{{cssxref("position")}} の値が <code>absolute</code> または <code>relative</code> であり、かつ {{cssxref("z-index")}} の値が <code>auto</code> 以外の要素</li>
 <li>{{cssxref("position")}} の値が <code>fixed</code> または <code>sticky</code> の要素 (sticky はすべてのモバイルブラウザーにありますが、古いデスクトップブラウザーにはありません)。</li>
 <li>フレックス ({{cssxref("flexbox")}}) コンテナーの子であり、 {{cssxref("z-index")}} の値が <code>auto</code> 以外の要素。</li>
 <li>グリッド ({{cssxref("grid")}}) コンテナーの子であり、 {{cssxref("z-index")}} の値が <code>auto</code> 以外の要素。</li>
 <li>{{cssxref("opacity")}} の値が <code>1</code> 未満である要素 (<a href="http://www.w3.org/TR/css3-color/#transparency">不透明度の仕様</a>をご覧ください)。</li>
 <li>{{cssxref("mix-blend-mode")}} の値が <code>normal</code> 以外の要素</li>
 <li>以下のプロパティ値が <code>none</code> 以外の要素。
  <ul>
   <li>{{cssxref("transform")}}</li>
   <li>{{cssxref("filter")}}</li>
   <li>{{cssxref("perspective")}}</li>
   <li>{{cssxref("clip-path")}}</li>
   <li>{{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}</li>
  </ul>
 </li>
 <li>{{cssxref("isolation")}} の値が <code>isolate</code> である要素。</li>
 <li>{{cssxref("-webkit-overflow-scrolling")}} の値が <code>touch</code> である要素。</li>
 <li>{{cssxref("will-change")}} の値が、初期値以外で重ね合わせコンテキストを作成する任意のプロパティを指定している要素 (<a href="https://dev.opera.com/articles/ja/css-will-change-property/">この記事</a>を参照)。</li>
 <li>{{cssxref("contain")}} の値が <code>layout</code> または <code>paint</code> であるか、これらのどちらかを含む複合値 (すなわち <code>contain: strict</code>, <code>contain: content</code>) を持つ要素。</li>
</ul>

<p>重ね合わせコンテキストの内部で、子要素は前に説明した規則に従って重ね合わせられます。重要なのは、子要素の <code>z-index</code> 値は、その親要素に対してのみ意味を持つということです。重ね合わせコンテキストは、その親の重ね合わせコンテキストでは不可分な一つの固まりとして扱われます。</p>

<p>まとめると、</p>

<ul>
 <li>重ね合わせコンテキストは他の重ね合わせコンテキストに含めることができ、その結果重ね合わせコンテキストの階層構造ができます。</li>
 <li>重ね合わせコンテキストはすべて、その兄弟要素と完全に独立しています。重ね合わせ処理では、子孫要素だけが考慮されます。</li>
 <li>重ね合わせコンテキストははめ込み式です。要素の中身が重ねられた後、その要素がまるごと、今度は親の重ね合わせコンテキストの重ね合わせ順の中にあるとみなされます。</li>
</ul>

<div class="note"><strong>注:</strong> 重ね合わせコンテキストを作れるのが一部の要素に限定されるため、重ね合わせコンテキストは HTML 要素の階層構造の部分集合です。それ自身の重ね合わせコンテキストを作らない要素は、その親の重ね合わせコンテキストに<em>同化される</em>、と言えます。</div>

<h2 id="The_example" name="The_example">例</h2>

<p><img alt="Example of stacking rules modified using z-index" src="/@api/deki/files/913/=Understanding_zindex_04.png"></p>

<p>この例では、配置要素はすべて、位置と <code>z-index</code> の値によって、それ自身の重ね合わせコンテキストを作ります。重ね合わせコンテキストの階層構造が、次のように構成されます。</p>

<ul>
 <li>ルート要素
  <ul>
   <li>DIV #1</li>
   <li>DIV #2</li>
   <li>DIV #3
    <ul>
     <li>DIV #4</li>
     <li>DIV #5</li>
     <li>DIV #6</li>
    </ul>
   </li>
  </ul>
 </li>
</ul>

<p>重要なのは、 DIV #4, DIV #5, DIV #6 は DIV #3 の子要素なので、DIV #3 の内側で重なり方が完全に決まることです。一旦 DIV #3 内部の重ね合わせと描画が終われば、DIV #3 はルート要素に丸ごと渡され、兄弟要素との重ね合わせ処理が行われます。</p>

<div class="note">
<p><strong>注:</strong></p>

<ul>
 <li>DIV #4 は DIV #1 の下に描画されます。これは、DIV #1 の z-index (5) はルート要素の重ね合わせコンテキストでだけ有効な値で、DIV #4 の z-index (6) は DIV #3 の重ね合わせコンテキストでだけ有効な値だからです。DIV #4 は DIV #3 の内部にあり、DIV #3 は DIV #1 よりも小さな z-index 値を持っているので、DIV #4 は DIV #1 の下になります。</li>
 <li>同じ理由で DIV #2 (z-index 2) は DIV #5 (z-index 1) の下に描画されます。これは DIV #5 が DIV #3 に含まれていて、DIV #3は DIV #2 より高い z-index 値を持っているからです。</li>
 <li>DIV #3 の z-index は 4 ですが、この値は DIV #4、DIV #5、DIV #6 の z-index とは独立しています。異なる重ね合わせコンテキストに含まれるためです。</li>
 <li>Z軸方向に重なった要素の<em>描画順序</em>の簡単な計算方法は、それがバージョン番号のようなものを持っていると考えることです。親要素のメジャーバージョン番号の下に、子要素のマイナーバージョン番号があるものとします。この方法で、 z-index 1 を持つ要素 (DIV #5) がどうやって z-index 2 を持つ要素 (DIV #2) の上になるのか、そして、 z-index 6 を持つ要素 (DIV #4) がどうやって z-index 5 を持つ要素 (DIV #1) の下になるのか、簡単にわかります。用意した例では次のようになります (以下は最終的な描画順に並べています)。
  <ul>
   <li>ルート要素
    <ul>
     <li>DIV #2 - z-index は 2</li>
     <li>DIV #3 - z-index は 4
      <ul>
       <li>DIV #5 - z-index は 1、描画順は 4.1 なので、 z-index が 4 である要素の下に重なる</li>
       <li>DIV #6 - z-index は 3、描画順は 4.3 なので、 z-index が 4 である要素の下に重なる</li>
       <li>DIV #4 - z-index は 6、描画順は 4.6 なので、 z-index が 4 である要素の下に重なる</li>
      </ul>
     </li>
     <li>DIV #1 - z-index は 5</li>
    </ul>
   </li>
  </ul>
 </li>
</ul>
</div>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div id="div1"&gt;
  &lt;h1&gt;Division Element #1&lt;/h1&gt;
  &lt;code&gt;position: relative;&lt;br/&gt;
  z-index: 5;&lt;/code&gt;
&lt;/div&gt;

&lt;div id="div2"&gt;
  &lt;h1&gt;Division Element #2&lt;/h1&gt;
  &lt;code&gt;position: relative;&lt;br/&gt;
  z-index: 2;&lt;/code&gt;
&lt;/div&gt;

&lt;div id="div3"&gt;
  &lt;div id="div4"&gt;
    &lt;h1&gt;Division Element #4&lt;/h1&gt;
    &lt;code&gt;position: relative;&lt;br/&gt;
    z-index: 6;&lt;/code&gt;
  &lt;/div&gt;

  &lt;h1&gt;Division Element #3&lt;/h1&gt;
  &lt;code&gt;position: absolute;&lt;br/&gt;
  z-index: 4;&lt;/code&gt;

  &lt;div id="div5"&gt;
    &lt;h1&gt;Division Element #5&lt;/h1&gt;
    &lt;code&gt;position: relative;&lt;br/&gt;
    z-index: 1;&lt;/code&gt;
  &lt;/div&gt;

  &lt;div id="div6"&gt;
    &lt;h1&gt;Division Element #6&lt;/h1&gt;
    &lt;code&gt;position: absolute;&lt;br/&gt;
    z-index: 3;&lt;/code&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="Division_Element_.231" name="Division_Element_.231">CSS</h3>

<pre class="brush: css notranslate">* {
  margin: 0;
}
html {
  padding: 20px;
  font: 12px/20px Arial, sans-serif;
}
div {
  opacity: 0.7;
  position: relative;
}
h1 {
  font: inherit;
  font-weight: bold;
}
#div1,
#div2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#div1 {
  z-index: 5;
  margin-bottom: 190px;
}
#div2 {
  z-index: 2;
}
#div3 {
  z-index: 4;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 180px;
  width: 330px;
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
}
#div4,
#div5 {
  border: 1px dashed #996;
  background-color: #ffc;
}
#div4 {
  z-index: 6;
  margin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  margin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
  width: 150px;
  height: 125px;
  border: 1px dashed #009;
  padding-top: 125px;
  background-color: #ddf;
  text-align: center;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Example', '100%', '396') }}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index"><code>z-index</code> なしの重ね合わせ</a>: 既定の重ね合わせ規則</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float">浮動ブロックの重ね合わせ</a>: 浮動要素が重ね合わせでどのように扱われるか</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index"><code>z-index</code> の使用</a>: z-index を使って既定の重ね合わせ変更する方法</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1">重ね合わせコンテキストの例 1</a>: 2階層の HTML 構造で、最終階層の <code>z-index</code></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2">重ね合わせコンテキストの例 2</a>: 2階層の HTML 構造、全レベルの <code>z-index</code></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3">重ね合わせコンテキストの例 3</a>: 3階層の HTML 構造、第2階層の <code>z-index</code></li>
</ul>

<div class="originaldocinfo">
<h2 id="Original_Document_Information" name="Original_Document_Information">原典情報</h2>

<ul>
 <li>原著者: Paolo Lombardi</li>
 <li>この記事は原著者が <a class="external" href="http://www.yappy.it">YappY</a> のためにイタリア語で書いた記事の英訳の邦訳です。<a class="external" href="http://creativecommons.org/licenses/by-sa/2.0/">Creative Commons: Attribution-Sharealike license</a> の条件に従う限り、全内容の共有を認めます。</li>
 <li>最終更新日: 2005年7月9日</li>
</ul>
</div>
