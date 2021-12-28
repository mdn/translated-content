---
title: 段組みの基本概念
slug: Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol
tags:
  - CSS
  - CSS 段組みレイアウト
  - Guide
  - レイアウト
translation_of: Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol
---
<div>{{CSSRef}}</div>

<p class="summary"><ruby>段組みレイアウト<rp> (</rp><rt>Multiple-column Layout</rt><rp>) </rp></ruby>は、内容物を新聞のように複数の段ボックスにレイアウトする仕様です。このガイドでは、この仕様がどのように働くかを、いくつかのよくある使用例と共に説明します。</p>

<h2 id="Key_Concepts_and_Terminology" name="Key_Concepts_and_Terminology">主要概念と用語</h2>

<p>段組みは他のレイアウト方法とは異なり、 CSS でコンテンツを分割し、すべての子孫要素を段に含めます。これは、印刷スタイルシートを作成するのに使われる <a href="/ja/docs/Web/CSS/CSS_Pages">CSS ページ付きメディア</a>がコンテンツをページに分割するのと同様のことを行います。</p>

<p>仕様書で定義されているプロパティは次の通りです。</p>

<ul>
 <li>{{cssxref("column-width")}}</li>
 <li>{{cssxref("column-count")}}</li>
 <li>{{cssxref("columns")}}</li>
 <li>{{cssxref("column-rule-color")}}</li>
 <li>{{cssxref("column-rule-style")}}</li>
 <li>{{cssxref("column-rule-width")}}</li>
 <li>{{cssxref("column-rule")}}</li>
 <li>{{cssxref("column-span")}}</li>
 <li>{{cssxref("column-fill")}}</li>
 <li>{{cssxref("column-gap")}}</li>
</ul>

<p><code>column-count</code> 又は <code>column-width</code> を要素に追加することで、要素は<em>段組みコンテナー</em>になります。段は無名のボックスになり、仕様書上では段ボックスと呼ばれます。</p>

<h2 id="Defining_columns" name="Defining_columns">段の定義</h2>

<p>段組みコンテナーを作成するには、少なくとも一つの <code>column-*</code> プロパティ、つまり <code>column-count</code> か <code>column-width</code> を使用する必要があります。</p>

<h3 id="The_column-count_property" name="The_column-count_property"><code>column-count</code> プロパティ</h3>

<p><code>column-count</code> プロパティは、内容物を表示したい段数を指定します。ブラウザーは要求された数の段を生成するために、それぞれの段ボックスに適正な大きさの空間を割り当てます。</p>

<p>以下の例では、 <code>column-count</code> プロパティを使用して <code>.container</code> 要素に3つの段を生成します。その内容は、 <code>.container</code> の子も含めて3つの段に分割されます。</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}</p>

<p>上記の例では、内容物は既定のスタイルの段落 <code>p</code> タグで囲まれています。従って、それぞれの段落の上にはマージンがあります。マージンが働いてテキストの最初の行を押し下げているのが分かるでしょう。これは、段組みコンテナーは新しいブロック整形文脈 (BFC) を作成し、つまり子要素のマージンはコンテナーのマージンと相殺されないからです。</p>

<h3 id="The_column-width_property" name="The_column-width_property"><code>column-width</code> プロパティ</h3>

<p><code>column-width</code> プロパティは、それぞれの段ボックスの最適な幅を設定するために使用されます。 column-width を宣言すると、ブラウザーは段組みコンテナー内にその幅の段と、段間の均等の空間が収まる数を計算します。従って、段の幅は最小幅として扱われ、段ボックスはふつう、追加の空間があるためにより広くなります。</p>

<p>段ボックスは、利用できる幅が <code>column-width</code> の値よりも狭い一段組の場合に限り、宣言された段の幅よりも狭くなることがあります。</p>

<p>以下の例では、 <code>column-width</code> の値を 200px にして使用しています。コンテナーに合うように200ピクセルの段が確保され、残りの空間は均等に割り当てられます。</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/basics/column-width.html", '100%', 550)}}</p>

<h3 id="Using_column-count_and_column-width_together" name="Using_column-count_and_column-width_together"><code>column-count</code> と <code>column-width</code> の併用</h3>

<p>段組みコンテナーに両方のプロパティを指定すると、 <code>column-count</code> は最大の段数として動作します。従って、 <code>column-count</code> の段数に達するまでは、 <code>column-width</code> で宣言された通りに動作します。これを超えると、 <code>column-width</code> で指定された寸法の段を追加する余裕があっても、段は追加されず、余った空間は既存の段に均等に割り当てられます。</p>

<p>両方のプロパティを併用すると、 <code>column-count</code> の値で指定されたよりも少ない数の段数になることがあります。</p>

<p>次の例では、 <code>column-width</code> を 200px で <code>column-count</code> を 2 で使用しています。３段以上の空間があっても２段になります。しかし、 200px の段を２つ設置する空間の余裕がなければ、１段になります。</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/basics/column-count-width.html", '100%', 550)}}</p>

<h3 id="The_columns_shorthand" name="The_columns_shorthand"><code>columns</code> 一括指定</h3>

<p><code>columns</code> 一括指定で <code>column-count</code> と <code>column-width</code> を設定することができます。長さの単位を設定すると、 <code>column-width</code> に使用され、整数値を設定すると、 <code>column-count</code> に使用されます。２つの値を空白で区切って両方を設定することができます。</p>

<p>この CSS は例１と同じ結果で、 <code>column-count</code> を 3 に設定します。</p>

<pre>.container {
  columns: 3;
}</pre>

<p>この CSS は例２と同じ結果で、 <code>column-width</code> を 200px に設定します。</p>

<pre>.container {
  columns: 200px;
}</pre>

<p>この CSS は例３と同じ結果で、 <code>column-count</code> と <code>column-width</code> の両方に設定します。</p>

<pre>.container {
  columns: 2 200px;
}</pre>

<h2 id="Next_Steps" name="Next_Steps">次のステップ</h2>

<p>このガイドでは、段組みレイアウトの基本的な利用を学びました。次のガイドでは、 <a href="/ja/docs/Web/CSS/CSS_Columns/Styling_Columns">段のスタイル付け</a>がどれだけできるかを見てみます。</p>
