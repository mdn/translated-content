---
title: Grid 軸
slug: Glossary/Grid_Axis
tags:
  - CSS
  - CSS Grids
translation_of: Glossary/Grid_Axis
---
<p>CSS グリッドレイアウトはコンテンツを<strong>行</strong>と<strong>列</strong>でレイアウトできるようにする 2 次元レイアウトです。従って全てのグリッドには、<strong>ブロックもしくは列の軸</strong>と、<strong>インラインもしくは行の列</strong>という、二つの軸があります。</p>

<p>各アイテムはこれら 2 つの軸に沿って、<a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box Alignment 仕様</a>で定義されるプロパティを使って配置されます。</p>

<p>CSS ではブロックもしくは行の軸がテキストのブロックをレイアウトするのに使用する軸となります。右から左、上から下に書く言語で 2 つの段落があるばあい、ブロック軸に沿って一方が他方の下にレイアウトされます。</p>

<p><img alt="Diagram showing the block axis in CSS Grid Layout." src="https://mdn.mozillademos.org/files/14775/7_Block_Axis.png" style="height: 306px; width: 940px;"></p>

<p>インラインもしくは行の軸はブロック軸と交差し、通常のテキストが流れる方向沿った軸です。CSS グリッドレイアウトでは次のような行の軸となります。</p>

<p><img alt="Diagram showing the inline axis in CSS Grid Layout." src="https://mdn.mozillademos.org/files/14773/7_Inline_Axis.png" style="height: 306px; width: 940px;"></p>

<p>これらの軸の物理的な方向は文書の<a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">ライティングモード</a>によって変更可能です。</p>

<h2 id="より詳しく">より詳しく</h2>

<h3 id="より詳しい説明">より詳しい説明</h3>

<ul>
 <li>CSS グリッドレイアウトガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">グリッドレイアウトの基本コンセプト</a></em></li>
 <li>CSS グリッドレイアウトガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">グリッドレイアウトに於けるボックス配置</a></em></li>
 <li>CSS グリッドレイアウトガイド: <em><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">グリッドや論理値とライティングモード</a></em></li>
</ul>
