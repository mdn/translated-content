---
title: グリッドレイアウトと他のレイアウト方法との関係
slug: Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout
tags:
  - CSS
  - CSS Grids
  - Guide
translation_of: Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout
---
<p>CSS グリッドレイアウトはレイアウトを行うための完全なシステムの一部として、 CSS の他の機能と一緒に動作するよう設計されました。このガイドでは、既に使われている他の技術と、どうのようにグリッドが適合するかを説明します。</p>

<h2 id="Grid_and_flexbox" name="Grid_and_flexbox">グリッドとフレックスボックス</h2>

<p>CSS グリッドレイアウトと<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">CSS フレックスボックスレイアウト</a>の基本的な違いは、フレックスボックスは一次元 - 一列<em>又は</em>一行 - のレイアウトのために設計されたという点です。グリッドは二次元 - 行と列が同時 - のレイアウトのために設計されました。しかし、２つの仕様書はいくつかの共通の機能を共有しており、すでにフレックスボックスの使い方を学んでいるのであれば、類似性がグリッドの手がかりを助けるでしょう。</p>

<h3 id="One-dimensional_vs._two-dimensional_layout" name="One-dimensional_vs._two-dimensional_layout">一次元 vs. ニ次元レイアウト</h3>

<p>一次元と二次元のレイアウトの違いを示すことができる単純な例です。</p>

<p>最初の例では、一連のボックスを配置するためにフレックスボックスを使用しています。コンテナーの中には五つの子項目があり、 flex プロパティ値を与えて150ピクセルの flex-basis から伸縮できるようにしています。</p>

<p>{{cssxref("flex-wrap")}} プロパティを <code>wrap</code> に設定して、コンテナーの大きさが細くなりすぎて flex basis を維持することができなくなったら、項目が次の行へ折り返されるようにしています。</p>

<div id="onedtwod">
<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.wrapper &gt; div {
  flex: 1 1 150px;
}
</pre>
</div>

<p>{{ EmbedLiveSample('onedtwod', '500', '230') }}</p>

<p>図では、2つの項目が新しい行へ折り返されているのがわかると思います。これらの項目は利用可能なスペースを共有していますが、上記の項目の下には整列してはいません。フレックスアイテムが折り返しをした時、新しい行（もしくは列として機能している時は列）のそれぞれがフレックスコンテナーになるからです。スペースの配分は行をまたがって起こります。</p>

<p>よくある質問はそれらのアイテムをどのようにして並べるかです。2次元レイアウトメソッドが必要な場所では、行またはカラムによるアラインメントのコントロールが必要で、グリッドが得意な場面です。</p>

<h3 id="The_same_layout_with_CSS_grids" name="The_same_layout_with_CSS_grids">CSS グリッドによる同様のレイアウト</h3>

<p>次の例では、グリッドを使って同様のレイアウトを構築します。今回は3つの <code>1fr</code> 列トラックを持ちます。項目自体には何もセットする必要はりません。構築されたグリッドのセルそれぞれに項目を一つずつ配置していきます。厳格なグリッドに項目が配置されているため、行と列は整列しています。5つの項目があるので、二つ目の行にある終わりには隙間があります。</p>

<div id="Two_Dimensional_With_Grid">
<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
  &lt;div&gt;Four&lt;/div&gt;
  &lt;div&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</pre>

<p>{{ EmbedLiveSample('Two_Dimensional_With_Grid', '300', '170') }}</p>
</div>

<p>グリッドとフレックスボックスのどちらを使うかを決めるシンプルな質問です。</p>

<ul>
 <li>行<u>又は</u>列のみによってレイアウトを制御する必要がありますか。 – フレックスボックスを使いましょう</li>
 <li>行<u>及び</u>列によりレイアウトを制御する必要がありますか。 - グリッドを使いましょう</li>
</ul>

<h3 id="Content_out_or_layout_in" name="Content_out_or_layout_in">コンテンツ外かレイアウト内か？</h3>

<p>1次元 vs 2次元の区別に加えて、レイアウトのためにフレックスボックス又はグリッドを使わなければならないかどうかを決める別の方法があります。フレックスボックスはコンテンツ外から機能します。フレックスボックスの理想的な使用例は、コンテナー内で項目に等しくスペースを設定したいような場合です。コンテンツのサイズはそれぞれの項目がどのくらい個々のスペースを占めるかにより決定されます。もし項目が新しい行へ折り返されたら、行のサイズと利用可能なスペースをもとに項目の間隔が算出されます。</p>

<p>グリッドはレイアウトの外から機能します。 CSS グリッドレイアウトを使ってレイアウトを作った際、自動配置ルールでアイテムを厳格なグリッドによるセルへ配置させることができます。それらはコンテンツのサイズに応じたトラックを作ることができます。しかしながら、全体のトラックも変わるでしょう。</p>

<p>もしフレックスボックスを使っていていくつかの柔軟性が欠けていたら、おそらく CSS グリッドレイアウトを使う必要性を感じるでしょう。例えばフレックスアイテムの幅をパーセンテージで設定し、ある行へその他の項目とともに整列させていたら、その場合にはグリッドはより良い選択肢になるでしょう。</p>

<h3 id="Box_alignment" name="Box_alignment">ボックス配置</h3>

<p>フレックスボックスの最も素晴らしい特徴は、我々に適切な配置制御を与えてくれる最初のものということでした。これによりページの真ん中にボックスを置くことが簡単になりました。フレックス要素はフレックスコンテナーの高さに引き伸ばすことができ、これはつまり、同じ高さの列が可能ということです。これらは私たちが長い間求めてきたもので、少なくとも視覚効果を実現するためのさまざまな種類のハックが考え出されてきました。</p>

<p>フレックスボックスの仕様による配置プロパティは <a href="https://drafts.csswg.org/css-align/">Box Alignment Level 3</a> と呼ばれる新しい仕様に追加されました。これはつまり、グリッドレイアウトを含む他の仕様でも使用できるということです。将来的には、他のレイアウト手法にも適用できるようになるでしょう。</p>

<p>この一連のガイドの後、ボックス配置と、それがグリッドレイアウトの中でどのように動作するのかを見ていきます。今回の場合、フレックスボックスと grid の簡単な比較例を挙げます。</p>

<p>一つ目のフレックスボックスを利用する例では、３つの要素を持つコンテナがあります。コンテナである<code>wrapper</code>には{{cssxref("min-height")}}が設定され、これはフレックスコンテナーの高さを決めています。コンテナには {{cssxref("align-items")}} を <code>flex-end</code> に設定してコンテナの終端に要素が並ぶようにしました。また、<code>box1</code>の{{cssxref("align-self")}}プロパティをcontainerの高さに合わせるよう<code>streach</code>へ上書きし、<code>box2</code>もコンテナの始まりから整列するにように上書きしています。</p>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;One&lt;/div&gt;
  &lt;div class="box2"&gt;Two&lt;/div&gt;
  &lt;div class="box3"&gt;Three&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: flex;
  align-items: flex-end;
  min-height: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: flex-start;
}
</pre>

<p>{{ EmbedLiveSample('Box_alignment', '300', '230') }}</p>

<h3 id="CSSグリッド上でのアラインメント">CSSグリッド上でのアラインメント</h3>

<p>二つ目の例ではグリッドを使って同じレイアウトを作りましょう。今回はグリッドレイアウトを使うため、ボックスアラインメントプロパティを使います。従って、<code>flex-start</code>と<code>flex-end</code>ではなく<code>start</code>と<code>end</code>を使ってアラインメントします。グリッドレイアウトのケースでは、グリッド領域の中にアイテムをアラインメントしていきます。今回のケースでは単一のグリッドセルを作成していますが、これは複数のグリッドセルで構成された領域にもなることが可能です。</p>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;One&lt;/div&gt;
  &lt;div class="box2"&gt;Two&lt;/div&gt;
  &lt;div class="box3"&gt;Three&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  align-items: end;
  grid-auto-rows: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: start;
}
</pre>

<p>{{ EmbedLiveSample('Alignment_in_CSS_Grids', '200', '310') }}</p>

<h3 id="The_fr_unit_and_flex-basis" name="The_fr_unit_and_flex-basis"><code>fr</code> 単位と <code>flex-basis</code></h3>

<p>We have already seen how the <code>fr</code> unit works to assign a proportion of available space in the grid container to our grid tracks. The <code>fr</code> unit, when combined with the {{cssxref("minmax", "minmax()")}} function can give us very similar behavior to the <code>flex</code> properties in flexbox while still enabling the creation of a layout in two dimensions.</p>

<p>If we look back at the example where I demonstrated the difference between one and two-dimensional layouts, you can see there is a difference between the way of the two layouts work responsively. With the flex layout, if we drag our window wider and smaller, the flexbox does a nice job of adjusting the number of items in each row according to the available space. If we have a lot of space all five items can fit on one row. If we have a very narrow container we may only have space for one.</p>

<p>In comparison, the grid version always has three column tracks. The tracks themselves will grow and shrink, but there are always three since we asked for three when defining our grid.</p>

<h4 id="Auto-filling_grid_tracks">Auto-filling grid tracks</h4>

<p>We can create a similar effect to flexbox, while still keeping the content arranged in strict rows and columns, by creating our track listing using repeat notation and the <code>auto-fill</code> and <code>auto-fit</code> properties.</p>

<p>In this next example, I have used the <code>auto-fill</code> keyword in place of an integer in the repeat notation and set the track listing to 200 pixels. This means that grid will create as many 200 pixels column tracks as will fit in the container.</p>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
}
</pre>

<p>{{ EmbedLiveSample('Auto-filling_grid_tracks', '500', '170') }}</p>

<h3 id="A_flexible_number_of_tracks" name="A_flexible_number_of_tracks">柔軟なトラック数</h3>

<p>This isn’t quite the same as flexbox. In the flexbox example, the items are larger than the 200 pixel basis before wrapping. We can achieve the same in grid by combining <code>auto-fit</code> and the {{cssxref("minmax", "minmax()")}} function. In this next example, I create auto filled tracks with <code>minmax</code>. I want my tracks to be a minimum of 200 pixels, so I set the maximum to be <code>1fr</code>. Once the browser has worked out how many times 200 pixels will fit into the container–also taking account of grid gaps–it will treat the <code>1fr</code> maximum as an instruction to share out the remaining space between the items.</p>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</pre>

<p>{{ EmbedLiveSample('A_flexible_number_of_tracks', '500', '170') }}</p>

<p>We now have the ability to create a grid with a flexible number of flexible tracks, but see items laid out on the grid aligned by rows and columns at the same time.</p>

<h2 id="Grid_and_absolutely_positioned_elements" name="Grid_and_absolutely_positioned_elements">グリッドと絶対位置指定された要素</h2>

<p>Grid interacts with absolutely positioned elements, which can be useful if you want to position an item inside a grid or grid area. The specification defines the behavior when a grid container is a containing block and a parent of the absolutely positioned item.</p>

<h3 id="A_grid_container_as_containing_block" name="A_grid_container_as_containing_block">含有ブロックとしてのグリッドコンテナ</h3>

<p>To make the grid container a containing block you need to add the position property to the container with a value of relative, just as you would make a containing block for any other absolutely positioned items. Once you have done this, if you give a grid item <code>position: absolute</code> it will take as its containing block the grid container or, if the item also has a grid position, the area of the grid it is placed into.</p>

<p>In the below example I have a wrapper containing four child items. Item three is absolutely positioned and also placed on the grid using line-based placement. The grid container has <code>position: relative</code> and so becomes the positioning context of this item.</p>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;One&lt;/div&gt;
  &lt;div class="box2"&gt;Two&lt;/div&gt;
  &lt;div class="box3"&gt;
   This block is absolutely positioned. In this example the grid container is the containing block and so the absolute positioning offset values are calculated in from the outer edges of the area it has been placed into.
  &lt;/div&gt;
  &lt;div class="box4"&gt;Four&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: 200px;
  grid-gap: 20px;
  position: relative;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: absolute;
  top: 40px;
  left: 40px;
}
</pre>

<p>{{ EmbedLiveSample('A_grid_container_as_containing_block', '500', '330') }}</p>

<p>You can see that the item is taking the area from grid column line 2 to 4, and starting after line 1. Then it is offset in that area using the top and left properties. However, it has been taken out of flow as is usual for absolutely positioned items and so the auto-placement rules now place items into the same space. The item also doesn’t cause the additional row to be created to span to row line 3.</p>

<p>If we remove <code>position:</code> <code>absolute</code> from the rules for <code>.box3</code> you can see how it would display without the positioning.</p>

<h3 id="A_grid_container_as_parent" name="A_grid_container_as_parent">親としてのグリッドコンテナ</h3>

<p>If the absolutely positioned child has a grid container as a parent but that container does not create a new positioning context, then it is taken out of flow as in the previous example. The positioning context will be whatever element creates a positioning context as is common to other layout methods. In our case, if we remove <code>position:</code> <code>relative</code> from the wrapper above, positioning context is from the viewport, as shown in this image.</p>

<p><img alt="Image of grid container as parent" src="https://mdn.mozillademos.org/files/14661/2_abspos_example.png" style="height: 408px; width: 1702px;"></p>

<p>Once again the item no longer participates in the grid layout in terms of sizing or when other items are auto-placed.</p>

<h3 id="With_a_grid_area_as_the_parent">With a grid area as the parent</h3>

<p>If the absolutely positioned item is nested inside a grid area then you can create a positioning context on that area. In the below example we have our grid as before but this time I have nested an item inside <code>.box3</code> of the grid.</p>

<p>I have given <code>.box3</code> position relative and then positioned the sub-item with the offset properties. In this case, the positioning context is the grid area.</p>

<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper &gt; div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
</pre>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;One&lt;/div&gt;
  &lt;div class="box2"&gt;Two&lt;/div&gt;
  &lt;div class="box3"&gt;Three
    &lt;div class="abspos"&gt;
     This block is absolutely positioned. In this example the grid area is the containing block and so the absolute positioning offset values are calculated in from the outer edges of the grid area.
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="box4"&gt;Four&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: 200px;
  grid-gap: 20px;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: relative;
}
.abspos {
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: rgba(255,255,255,.5);
  border: 1px solid rgba(0,0,0,0.5);
  color: #000;
  padding: 10px;
}
</pre>

<p>{{ EmbedLiveSample('With_a_grid_area_as_the_parent', '500', '420') }}</p>

<h2 id="Grid_and_display_contents" name="Grid_and_display_contents">グリッドと <code>display: contents</code></h2>

<p>A final interaction with another layout specification that is worth noting is the interaction between CSS Grid Layout and <code>display: contents</code>. The <code>contents</code> value of the display property is a new value that is described in the <a href="https://drafts.csswg.org/css-display/#box-generation">Display specification</a> as follows:</p>

<blockquote>
<p>“The element itself does not generate any boxes, but its children and pseudo-elements still generate boxes as normal. For the purposes of box generation and layout, the element must be treated as if it had been replaced with its children and pseudo-elements in the document tree.”</p>
</blockquote>

<p>If you set an item to <code>display:</code> <code>contents</code> the box it would normally create disappears, and the boxes of the child elements appear as if they have risen up a level. This means that children of a grid item can become grid items. Sound odd? Here is a simple example. In the following markup, I have a grid and the first item on the grid is set to span all three column tracks. It contains three nested items. As these items are not direct children, they don’t become part of the grid layout and so display using regular block layout.</p>

<div id="Display_Contents_Before">
<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
</pre>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box box1"&gt;
    &lt;div class="nested"&gt;a&lt;/div&gt;
    &lt;div class="nested"&gt;b&lt;/div&gt;
    &lt;div class="nested"&gt;c&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="box box2"&gt;Two&lt;/div&gt;
  &lt;div class="box box3"&gt;Three&lt;/div&gt;
  &lt;div class="box box4"&gt;Four&lt;/div&gt;
  &lt;div class="box box5"&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
}

</pre>

<p>{{ EmbedLiveSample('Display_Contents_Before', '400', '420') }}</p>
</div>

<p>If I now add <code>display:</code> <code>contents</code> to the rules for <code>box1</code>, the box for that item vanishes and the sub-items now become grid items and lay themselves out using the auto-placement rules.</p>

<div id="Display_Contents_After">
<div class="hidden">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
</pre>
</div>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box box1"&gt;
    &lt;div class="nested"&gt;a&lt;/div&gt;
    &lt;div class="nested"&gt;b&lt;/div&gt;
    &lt;div class="nested"&gt;c&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="box box2"&gt;Two&lt;/div&gt;
  &lt;div class="box box3"&gt;Three&lt;/div&gt;
  &lt;div class="box box4"&gt;Four&lt;/div&gt;
  &lt;div class="box box5"&gt;Five&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  display: contents;
}
</pre>

<p>{{ EmbedLiveSample('Display_Contents_After', '400', '330') }}</p>
</div>

<p>This can be a way to get items nested into the grid to act as if they are part of the grid, and is a way around some of the issues that would be solved by subgrids once they are implemented. You can also use <code>display:</code> <code>contents</code> in a similar way with flexbox to enable nested items to become flex items.</p>

<p>As you can see from this guide, CSS Grid Layout is just one part of your toolkit. Don’t be afraid to mix it with other methods of doing layout to get the different effects you need.</p>

<h2 id="See_Also">See Also</h2>

<ul>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックスガイド</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Columns">段組みレイアウトガイド</a></li>
</ul>

<section id="Quick_links">
<ol>
 <li><a href="/ja/docs/Web/CSS"><strong>CSS</strong></a></li>
 <li><a href="/ja/docs/Web/CSS/Reference"><strong>CSS リファレンス</strong></a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッドレイアウト</a></li>
 <li data-default-state="open"><a href="#"><strong>ガイド</strong></a>
  <ol>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">グリッドレイアウトの基本概念</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">他のレイアウト方法との関係</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">線ベースの配置</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">グリッドテンプレート領域</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">名前付きグリッド線を使用したレイアウト</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">CSS グリッドレイアウトにおける自動配置</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">CSS グリッドレイアウトにおけるボックス配置</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">CSS グリッド、論理値、書字方向</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS グリッドレイアウトとアクセシビリティ</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS グリッド及び進歩的な拡張</a></li>
   <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout">CSS グリッドを利用したよくあるレイアウトの実現</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>プロパティ</strong></a>
  <ol>
   <li><a href="/ja/docs/Web/CSS/grid">grid</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-area">grid-area</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-auto-columns">grid-auto-columns</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-auto-flow">grid-auto-flow</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-auto-rows">grid-auto-rows</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-column">grid-column</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-column-end">grid-column-end</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-column-gap">grid-column-gap</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-column-start">grid-column-start</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-gap">grid-gap</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-row">grid-row</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-row-end">grid-row-end</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-row-gap">grid-row-gap</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-row-start">grid-row-start</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-template">grid-template</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-template-areas">grid-template-areas</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-template-columns">grid-template-columns</a></li>
   <li><a href="/ja/docs/Web/CSS/grid-template-rows">grid-template-rows</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>用語集</strong></a>
  <ol>
   <li><a href="/ja/docs/Glossary/Grid">グリッド</a></li>
   <li><a href="/ja/docs/Glossary/Grid_lines">グリッド線</a></li>
   <li><a href="/ja/docs/Glossary/Grid_tracks">グリッドトラック</a></li>
   <li><a href="/ja/docs/Glossary/Grid_cell">グリッドセル</a></li>
   <li><a href="/ja/docs/Glossary/Grid_areas">グリッド領域</a></li>
   <li><a href="/ja/docs/Glossary/Gutters">溝</a></li>
   <li><a href="/ja/docs/Glossary/Grid_Axis">グリッド軸</a></li>
   <li><a href="/ja/docs/Glossary/Grid_rows">グリッド行</a></li>
   <li><a href="/ja/docs/Glossary/Grid_column">グリッド列</a></li>
  </ol>
 </li>
</ol>
</section>
