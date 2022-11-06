---
title: Grid Axis (グリッド軸)
slug: Glossary/Grid_Axis
l10n:
  sourceCommit: 4a9f9d2e9c1811ce3519a7061e906db9200a5e97
---

CSS グリッドレイアウトはコンテンツを**行**と**列**でレイアウトできるようにする 2 次元レイアウトです。従って全てのグリッドには、**ブロックもしくは列の軸**と、**インラインもしくは行の列**という、 2 つの軸があります。

各アイテムはこれら 2 つの軸に沿って、[ボックス配置仕様書](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)で定義されているプロパティを使って配置されます。

CSS では、ブロックもしくは行の軸がテキストのブロックをレイアウトするのに使用する軸となります。右から左、上から下に書く言語で 2 つの段落があるばあい、ブロック軸に沿って一方が他方の下にレイアウトされます。

![Diagram showing the block axis in CSS Grid Layout.](7_block_axis.png)

インラインもしくは行の軸はブロック軸と交差し、通常のテキストが流れる方向沿った軸です。CSS グリッドレイアウトでは次のような行の軸となります。

![Diagram showing the inline axis in CSS Grid Layout.](7_inline_axis.png)

これらの軸の物理的な方向は文書の[書字方向](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)によって変更可能です。

## 関連情報

- CSS グリッドレイアウトガイド: _[グリッドレイアウトの基本コンセプト](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- CSS グリッドレイアウトガイド: _[グリッドレイアウトに於けるボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- CSS グリッドレイアウトガイド: _[グリッドと論理的な値と書字方向](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)_
