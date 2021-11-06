---
title: 重ね合わせコンテキストの例 1
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1
tags:
  - Advanced
  - CSS
  - Guide
  - Understanding_CSS_z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1
---
<div>{{cssref}}</div>

<p>« <a href="/ja/docs/Web/CSS">CSS</a> « <a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index">CSS の z-index を理解する</a></p>

<h2 id="Stacking_context_example_1" name="Stacking_context_example_1">重ね合わせコンテキストの例 1</h2>

<p>基礎的な例から始めましょう。ルートの重ね合わせコンテキストに、2つの DIV (DIV #1 と DIV #3) があって、どちらも relative の位置指定がされていますが、 z-index プロパティの指定はありません。 DIV #1 の中に absolute の位置指定がされた DIV #2 があり、一方 DIV #3 の中には absolute の位置指定がされた DIV #4 があります。どちらも z-index プロパティの指定はありません。</p>

<p>唯一の重ね合わせコンテキストはルート要素にあります。 z-indexe がなければ要素は出現した順に重なります。</p>

<p><img alt="重ね合わせコンテキストの例 1" class="internal" src="/@api/deki/files/914/=Understanding_zindex_05a.png"></p>

<p>DIV #2 に正の (ゼロでなく auto でもない) z-index 値が代入されれば、他のどの DIV よりも上に描画されます。</p>

<p><img alt="重ね合わせコンテキストの例 1" class="internal" src="/@api/deki/files/915/=Understanding_zindex_05b.png"></p>

<p>さらにまた、DIV #4 に DIV #2 のものより大きな正の z-index が代入されれば、DIV #4 は、DIV #2を含む他のどの要素よりも上に描画されます。</p>

<p><img alt="重ね合わせコンテキストの例 1" class="internal" src="/@api/deki/files/916/=Understanding_zindex_05c.png"></p>

<p>最後に見た例では、 DIV #2 と DIV #4 が兄弟要素ではないことがわかります。これは、HTML 要素の階層構造においては、それぞれ別の親要素を持っているからです。そうだとしても、DIV #4 と DIV #2 間の重なり順は、z-index を使って制御できます。たまたま、DIV #1 と DIV #3 には z-index 値が代入されていなかったため、重ね合わせコンテキストを作らなかったのです。これは、DIV #2 と DIV #3 を含むそれら要素の中身がどれも、同一のルートの重ね合わせコンテキストに含まれるということです。</p>

<p>重ね合わせコンテキストの見地からは、DIV #1 と DIV #3 は単にルート要素に吸収され、結果の階層構造は次のようになっています:</p>

<ul>
 <li>ルートの重ね合わせコンテキスト
  <ul>
   <li>DIV #2 (z-index 1)</li>
   <li>DIV #4 (z-index 2)</li>
  </ul>
 </li>
</ul>

<div class="note"><strong>注:</strong> DIV #1 と DIV #3 は半透明ではありません。位置指定された要素に1未満の不透明度を与えると、ちょうど z-index 値を追加したのと同じように、暗黙的に重ね合わせコンテキストが作られることを忘れないのは大切です。また、この例は、親要素が重ね合わせコンテキストを作らないときに、何が起こるのかを示しています。</div>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div id="div1"&gt;
&lt;br /&gt;&lt;span class="bold"&gt;DIV #1&lt;/span&gt;
&lt;br /&gt;position: relative;
   &lt;div id="div2"&gt;
   &lt;br /&gt;&lt;span class="bold"&gt;DIV #2&lt;/span&gt;
   &lt;br /&gt;position: absolute;
   &lt;br /&gt;z-index: 1;
   &lt;/div&gt;
&lt;/div&gt;

&lt;br /&gt;

&lt;div id="div3"&gt;
&lt;br /&gt;&lt;span class="bold"&gt;DIV #3&lt;/span&gt;
&lt;br /&gt;position: relative;
   &lt;div id="div4"&gt;
   &lt;br /&gt;&lt;span class="bold"&gt;DIV #4&lt;/span&gt;
   &lt;br /&gt;position: absolute;
   &lt;br /&gt;z-index: 2;
   &lt;/div&gt;
&lt;/div&gt;

&lt;/body&gt;&lt;/html&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">.bold {
    font-weight: bold;
    font: 12px Arial;
}
#div1,
#div3 {
    height: 80px;
    position: relative;
    border: 1px dashed #669966;
    background-color: #ccffcc;
    padding-left: 5px;
}
#div2 {
    opacity: 0.8;
    z-index: 1;
    position: absolute;
    width: 150px;
    height: 200px;
    top: 20px;
    left: 170px;
    border: 1px dashed #990000;
    background-color: #ffdddd;
    text-align: center;
}
#div4 {
    opacity: 0.8;
    z-index: 2;
    position: absolute;
    width: 200px;
    height: 70px;
    top: 65px;
    left: 50px;
    border: 1px dashed #000099;
    background-color: #ddddff;
    text-align: left;
    padding-left: 10px;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Example', '', '', '', 'Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1') }}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index"><code>z-index</code> なしの重ね合わせ</a>: 既定の重ね合わせ規則</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float">浮動ブロックの重ね合わせ</a>: 浮動要素が重ね合わせでどのように扱われるか</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index">z-index の使用</a>: <code>z-index</code> を使って既定の重ね合わせ変更する方法</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context">重ね合わせコンテキスト</a>: 重ね合わせコンテキストについてのメモ</li>
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
