---
title: Grid 軸
slug: Glossary/Grid_Axis
tags:
  - CSS
  - CSS Grids
translation_of: Glossary/Grid_Axis
---
CSS グリッドレイアウトはコンテンツを**行**と**列**でレイアウトできるようにする 2 次元レイアウトです。従って全てのグリッドには、**ブロックもしくは列の軸**と、**インラインもしくは行の列**という、二つの軸があります。

各アイテムはこれら 2 つの軸に沿って、[Box Alignment 仕様](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)で定義されるプロパティを使って配置されます。

CSS ではブロックもしくは行の軸がテキストのブロックをレイアウトするのに使用する軸となります。右から左、上から下に書く言語で 2 つの段落があるばあい、ブロック軸に沿って一方が他方の下にレイアウトされます。

![Diagram showing the block axis in CSS Grid Layout.](https://mdn.mozillademos.org/files/14775/7_Block_Axis.png)

インラインもしくは行の軸はブロック軸と交差し、通常のテキストが流れる方向沿った軸です。CSS グリッドレイアウトでは次のような行の軸となります。

![Diagram showing the inline axis in CSS Grid Layout.](https://mdn.mozillademos.org/files/14773/7_Inline_Axis.png)

これらの軸の物理的な方向は文書の[ライティングモード](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)によって変更可能です。

## より詳しく

### より詳しい説明

- CSS グリッドレイアウトガイド: _[グリッドレイアウトの基本コンセプト](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- CSS グリッドレイアウトガイド: _[グリッドレイアウトに於けるボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- CSS グリッドレイアウトガイド: _[グリッドや論理値とライティングモード](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)_
