---
title: Basic Transformations
slug: Web/SVG/Tutorial/Basic_Transformations
tags:
  - SVG
  - 'SVG:Tutorial'
translation_of: Web/SVG/Tutorial/Basic_Transformations
---
<div>{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}</div>


<p>これまで作成してきた美しい画像を変形させる準備ができました。しかし始めに、{{SVGElement("g")}} 要素を正式に紹介しましょう。このヘルパーを用いると、要素のセット全体にプロパティを割り当てることができます。実際のところ、これが唯一の用途です。例を示します:</p>
<pre class="brush: xml">&lt;g fill="red"&gt;
  &lt;rect x="0" y="0" width="10" height="10" /&gt;
  &lt;rect x="20" y="0" width="10" height="10" /&gt;
&lt;/g&gt;
</pre>
<p>この結果 2 つの赤い長方形ができます。</p>
<p>以下に示すトランスフォームは、要素の <code>transform</code> 属性の要約です。トランスフォームはホワイトスペース文字区切りで連結することで、連鎖させることができます。</p>






<h2 id="Translation" name="Translation">移動</h2>
<p>適切な属性を用いて要素を配置できる場合でも、要素をあちこちに移動させる必要があるかもしれません。この用途のために、<code>translate()</code> トランスフォームを用意しています。</p>
<pre class="brush: xml">&lt;rect x="0" y="0" width="10" height="10" transform="translate(30,40)" /&gt;
</pre>
<p>この例では長方形を描画し、描画位置を (0, 0) ではなく (30, 40) に移します。</p>
<p>2 番目の値が与えられない場合は、<var>0</var> であるとみなします。</p>






<h2 id="Rotation" name="Rotation">回転</h2>
<p>要素を回転させることは、よく行われる処理です。これには <code>rotate()</code> トランスフォームを用います:</p>
<pre class="brush: xml">&lt;rect x="20" y="20" width="20" height="20" transform="rotate(45)" /&gt;
</pre>
<p>この例では、45 度回転した正方形を表示します。<code>rotate()</code> の値は "度" 単位で与えます。</p>






<h2 id="Skewing" name="Skewing">傾斜</h2>
<p>長方形からひし形を作成するために、<code>skewX()</code> および <code>skewY()</code> トランスフォームを利用できます。<code>どちらのトランスフォームも</code>、要素をどれだけ傾けるかを表す角度を与えます。</p>






<h2 id="Scaling" name="Scaling">拡大と縮小</h2>
<p><code>scale()</code> は、要素のサイズを変更します。これは 2 つの数値を受け取って、拡大または縮小の比率として用います。<var>0.5</var> は 50% への縮小を表します。2 番目の数値を省略した場合は、1 番目の値と同じであるとみなします。</p>







<h2 id="Complex_transformations_with_matrix()" name="Complex_transformations_with_matrix()"><code>matrix()</code> を用いた複雑なトランスフォーム</h2>
<p>前出のトランスフォームはすべて、3x3 のトランスフォーム行列で表現できます。複数のトランスフォームをまとめるために、<code>matrix(A1, A2, B1, B2, C1, C2)</code> トランスフォームを用いて結果の行列を直接設定することができます。このプロパティに関する詳細情報は、<a href="http://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined">SVG 勧告</a>で得ることができます。</p>





<h2 id="Effects_on_Coordinate_Systems" name="Effects_on_Coordinate_Systems">座標系に与える効果</h2>
<p>トランスフォームを用いるときは、トランスフォームを適用した要素内で新たな座標系が確立します。つまり、その要素や子要素に指定する単位が 1:1 のピクセル対応づけに従わない可能性があり、またそれはトランスフォームに伴う変形、移動、拡大縮小にも波及します。</p>
<pre class="brush: xml">&lt;g transform="scale(2)"&gt;
  &lt;rect width="50" height="50" /&gt;
&lt;/g&gt;
</pre>
<p>上記の例で、長方形のサイズは 100x100 ピクセルになります。<code>userSpaceOnUse</code> のような属性に依存している場合などに、より興味深い効果が発生します。</p>





<h2 id="Embedding_SVG_in_SVG" name="Embedding_SVG_in_SVG">SVG 内への SVG 埋め込み</h2>
<p>HTML とは対照的に、SVG では他の <code>svg</code> 要素をシームレスに埋め込むことができます。この方法を用い、内部の <code>svg</code> 要素で <code>viewBox</code>、<code>width</code>、<code>height</code> 属性を活用して新たな座標系を作成することもできます。</p>
<pre class="brush: xml">&lt;svg xmlns="http://www.w3.org/2000/svg" version="1.1"&gt;
  &lt;svg width="100" height="100" viewBox="0 0 50 50"&gt;
    &lt;rect width="50" height="50" /&gt;
  &lt;/svg&gt;
&lt;/svg&gt;
</pre>
<p>上記の例は、基本的にはもうひとつ上の例と同じ効果をもたらすもので、すなわち長方形のサイズは rect 要素で指定したサイズの 2 倍になります。</p>


<div>{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}</div>
