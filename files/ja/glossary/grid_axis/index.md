---
title: Grid Axis (グリッド軸)
slug: Glossary/Grid_Axis
l10n:
  sourceCommit: 4a9f9d2e9c1811ce3519a7061e906db9200a5e97
---

{{GlossarySidebar}}

CSS グリッドレイアウトはコンテンツを**行**と**列**でレイアウトできるようにする 2 次元レイアウトです。従って全てのグリッドには、**ブロックもしくは列の軸**と、**インラインもしくは行の列**という、 2 つの軸があります。

各アイテムはこれら 2 つの軸に沿って、[ボックス配置仕様書](/ja/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)で定義されているプロパティを使って配置されます。

CSS では、ブロックもしくは行の軸がテキストのブロックをレイアウトするのに使用する軸となります。右から左、上から下に書く言語で 2 つの段落があるばあい、ブロック軸に沿って一方が他方の下にレイアウトされます。

![Diagram showing the block axis in CSS Grid Layout.](7_block_axis.png)

インラインもしくは行の軸はブロック軸と交差し、通常のテキストが流れる方向沿った軸です。CSS グリッドレイアウトでは次のような行の軸となります。

![Diagram showing the inline axis in CSS Grid Layout.](7_inline_axis.png)

これらの軸の物理的な方向は文書の[書字方向](/ja/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)によって変更可能です。

## 関連情報

- CSS グリッドレイアウトガイド: _[グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)_
- CSS グリッドレイアウトガイド: _[グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)_
- CSS グリッドレイアウトガイド: _[グリッド、論理的な値、書字方向](/ja/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)_
