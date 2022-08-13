---
title: フローレイアウトと書字方向
slug: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes
tags:
  - CSS 書字方向
  - ガイド
  - フローレイアウト
  - 方向
  - 日本語処理
  - 書字方向
translation_of: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes
---
<p class="summary">通常フローの動きについて詳細を説明している CSS 2.1 仕様書は、横書きを想定しています。<a href="/ja/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow">レイアウト</a>プロパティは縦書きモードでも同様に動作するべきです。このガイドでは、異なる文書の書字方向が使われた場合のフローレイアウトの動作を見てみましょう。</p>

<p>これは CSS での書字方向の使用に関する包括的なガイドではなく、ここでの目的は、フローレイアウトと書字方向の起こりうる相互作用が予想できないような領域を文書化することです。この文書の<a href="#External_Resources">外部リソース</a>や<a href="#See_Also">関連情報</a>の節で、書字方向に関するより多くのリソースを紹介します。</p>

<h2 id="The_Writing_Modes_Specification" name="The_Writing_Modes_Specification">書字方向の仕様書</h2>

<p>CSS Writing Modes Level 3 仕様書では、フローレイアウトで文書の書字方向が変更された時の影響を定義しています。<a href="https://drafts.csswg.org/css-writing-modes-3/#text-flow">仕様書</a>の書字方向の導入部では、以下のように書かれています。</p>

<blockquote>
<p>“CSS の書字方向は {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} プロパティによって決められます。これは主にインラインベース方向とブロックフロー方向から決まります。”</p>
</blockquote>

<p>仕様書では<em>インラインベース方向</em>を、行内でコンテンツが並べられる方向として定義しています。ここでは、インライン方向の始点と終点を定義しています。始点は文が始まるところであり、終点はテキストの行が終わり、新しい行への折り返しが始まる前です。</p>

<p><em>ブロックフロー方向</em>は、段落などのボックスが、その書字方向で積み重なる方向です。 CSS の writing-mode プロパティは、ブロックフロー方向を制御します。ページまたはページの一部を <code>vertical-lr</code> に変更したい場合、要素に <code>writing-mode: vertical-lr</code> と設定し、これがブロックの方向を変更して、従ってインライン方向も同様に変更します。</p>

<p>特定の言語では書字方向やテキストの方向が使用されますが、これらの方向を創造的な効果として、例えば見出しを縦書きにするために使用することができます。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/creative-use.html", '100%', 720)}}</p>

<h2 id="The_writing-mode_property_and_block_flow" name="The_writing-mode_property_and_block_flow"><code>writing-mode</code> プロパティとブロックフロー</h2>

<p>{{cssxref("writing-mode")}} プロパティは <code>horizontal-tb</code>, <code>vertical-rl</code>, <code>vertical-lr</code> の値を受け入れます。これらの値はページのブロックフローの方向を制御します。初期値は <code>horizontal-tb</code> で、ブロックフロー方向は上から下で、インライン方向は横書きとなります。英語のような左書きの言語、アラビア語のような右書きの言語は、すべて <code>horizontal-tb</code> です。</p>

<p>以下の例は <code>horizontal-tb</code> を使用したブロックを示しています。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/horizontal-tb.html", '100%', 720)}}</p>

<p>vertical-rl の値は、次の例に見られるように、ブロックフロー方向は右から左で、インライン方向は縦書きになります。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-rl.html", '100%', 720)}}</p>

<p>最後の例では <code>writing-mode</code> の第三の値である <code>vertical-lr</code> を紹介します。ブロックフロー方向は左から右で、インライン方向は縦書きになります。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-lr.html", '100%', 720)}}</p>

<h2 id="Boxes_with_a_different_writing_mode_to_their_parent" name="Boxes_with_a_different_writing_mode_to_their_parent">書字方向が親と異なるボックス</h2>

<p>親とは書字方向が異なる内部のボックスを作成した場合、インラインレベルボックスは <code>display: inline-block</code> であるかのように表示されます。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-change-mode.html", '100%', 720)}}</p>

<p>ブロックレベルボックスは新しいブロック整形コンテキストを生成し、つまり内部の display 種別が <code>flow</code> であれば、 display 種別の計算値は <code>flow-root</code> になります。次の例では、親が新しいブロック整形コンテキストを確立するため、 <code>horizontal-tb</code> で表示される浮動要素を含むボックスがどこに表示されるかを確認できます。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/block-change-mode.html", '100%', 720)}}</p>

<h2 id="Replaced_elements" name="Replaced_elements">置換要素</h2>

<p>画像などの置換要素は、 <code>writing-mode</code> プロパティによって方向が変更されません。しかし、テキストを含むフォームコントロールのような置換要素は、使用中の書字方向に一致するでしょう。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/replaced.html", '100%', 720)}}</p>

<h2 id="Logical_Properties_and_Values" name="Logical_Properties_and_Values">論理プロパティと値</h2>

<p>書字方向を <code>horizontal-tb</code> 以外にして作業をすると、画面の物理的な寸法に合わせられた多くのプロパティと値はおかしく見えます。例えば、 <code>horizontal-tb</code> の中でボックスの幅を 100px に設定すると、インライン方向の寸法を制御することになります。 <code>vertical-lr</code> では、ブロック方向の寸法を制御することになり、テキストに合わせて回転するわけではありません。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/width.html", '100%', 720)}}</p>

<p>従って、新しいプロパティ {{cssxref("block-size")}} および {{cssxref("inline-size")}} ができました。ブロックの <code>inline-size</code> を 100px に設定すると、書字方向が横書きか縦書きかに関わらず、 <code>inline-size</code> は常にインライン方向の寸法を意味します。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-size.html", '100%', 720)}}</p>

<p><a href="/ja/docs/Web/CSS/CSS_Logical_Properties">CSS 論理プロパティと値</a>の仕様書は、マージン、パディング、境界の制御や、その他の通常は物理的な方向を使用して指定するものの論理バージョンのプロパティを含んでいます。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>多くの場合、フローレイアウトは文書や文書の一部の書字方向を変更したときに、期待通りに動作するでしょう。これはふつう、縦書きの言語や創造的な理由で使用することができます。 CSS は論理プロパティと値を導入することで、縦書き時にインラインやブロック方向に基づいて寸法を決めやすくしています。これはどの書字方向でも動作するコンポーネントを作成するのに便利です。</p>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Writing_Modes">書字方向</a></li>
</ul>

<h2 id="External_Resources" name="External_Resources">外部リソース</h2>

<ul>
 <li><em><a href="https://24ways.org/2016/css-writing-modes/">CSS Writing Modes</a></em>, Jen Simmons on 24 Ways</li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Web/CSS/CSS_Flow_Layout/")}}</div>
