---
title: CSS の z-index を理解する
slug: Web/CSS/CSS_Positioning/Understanding_z_index
tags:
  - Advanced
  - CSS
  - Guide
  - Reference
  - Understanding_CSS_z-index
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index
---
<div>{{cssref}}</div>

<p>最も基本的な場合では、 <a href="/ja/docs/Web/HTML">HTML</a> のページは二次元であると考えることができ、テキスト、画像、その他の要素が重なることなくページに並べられます。この場合、単一のレンダリングの流れがあり、すべての要素で他の要素との間で取る間隔が分かっています。<span class="seoSummary"> {{cssxref("z-index")}} 属性で、コンテンツの描画時にオブジェクトの重なり合いの順番を調整することができます。</span></p>

<blockquote>
<p><em>CSS 2.1 では、各ボックスは三次元空間の座標を持ちます。ボックスは、水平方向と垂直方向に加えて、垂直方向の "z 軸" に沿って配置され、その中で一番上の1つが整形されます。 Z 軸の位置は、特にボックス同士が視覚的に重なる場合に関係します。</em></p>
</blockquote>

<p>(<a class="external" href="http://www.w3.org/TR/CSS21/visuren.html#z-index">CSS 2.1 Section 9.9.1 - Layered presentation</a> より)</p>

<p>これは、 CSS のスタイル規則によって、ボックスを通常の描画レイヤー (レイヤー 0) 以外のレイヤーに配置できるということです。各レイヤーの Z 位置は、描画処理の重ね合わせ順を示す整数値で表現されます。数値が大きいほど、見ている人に近いことになります。 Z 位置は CSS の <code>z-index</code> プロパティで制御できます。</p>

<p><code>z-index</code> を使うのは非常に簡単に見えます。単一のプロパティに、単一の整数値を割り当て、分かりやすい振舞いをします。しかし、 <code>z-index</code> を HTML 要素の複雑な階層に適用するとき、その振舞いは理解や予測がしづらくなることがあります。これは重ね合わせの規則が複雑であるためです。実際、 CSS 仕様書ではこれらの規則をもっと分かりやすく説明するために、専用の章である <a class="external" href="http://www.w3.org/TR/CSS21/zindex.html">CSS-2.1 Appendix E</a> が占められています。</p>

<p>この記事では、単純化といくつかの例によって、こうした規則の説明を行なってみます。</p>

<ol>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index"><code>z-index</code> なしの重ね合わせ</a>: 既定の重ね合わせ規則</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float">浮動ブロックの重ね合わせ</a>: 浮動要素が重ね合わせでどのように扱われるか</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index">z-index の使用</a>: <code>z-index</code> を使って既定の重ね合わせ変更する方法</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context">重ね合わせコンテキスト</a>: 重ね合わせコンテキストについてのメモ</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1">重ね合わせコンテキストの例 1</a>: 2階層の HTML 構造で、最終階層の <code>z-index</code></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2">重ね合わせコンテキストの例 2</a>: 2階層の HTML 構造、全レベルの <code>z-index</code></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3">重ね合わせコンテキストの例 3</a>: 3階層の HTML 構造、第2階層の <code>z-index</code></li>
</ol>

<div class="originaldocinfo">
<h2 id="Original_Document_Information" name="Original_Document_Information">原典情報</h2>

<ul>
 <li>原著者: Paolo Lombardi</li>
 <li>この記事は原著者が <a class="external" href="http://www.yappy.it">YappY</a> のためにイタリア語で書いた記事の英訳の邦訳です。<a class="external" href="http://creativecommons.org/licenses/by-sa/2.0/">Creative Commons: Attribution-Sharealike license</a> の条件に従う限り、全内容の共有を認めます。</li>
 <li>最終更新日: 2005年7月9日</li>
</ul>

<p><small><em>著者のメモ: Wladimir Palant と Rod Whiteley、レビューありがとう。</em></small></p>
</div>
