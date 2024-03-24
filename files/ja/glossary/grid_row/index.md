---
title: Grid Row (グリッド行)
slug: Glossary/Grid_Row
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

**グリッド行**とは [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)における水平トラックであり、 2 つの水平方向のグリッドラインに挟まれた領域のことです。グリッド行は {{cssxref("grid-template-rows")}} プロパティまたは一括指定の {{cssxref("grid")}} や {{cssxref("grid-template")}} プロパティで定義されます。

加えて、明示的グリッド _(explicit grid)_ で作られる行の外にアイテムが配置される場合は、暗黙的グリッド _(implicit grid)_ にもグリッド行が作られます。これらの行はデフォルトでは自動的に大きさが決定されますが、{{cssxref("grid-auto-rows")}} プロパティでサイズ指定することもできます。

[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)の中で位置調整 (alignment) をする場合、行が並ぶ軸をインライン軸もしくは行軸と呼びます。

## 関連情報

### プロパティリファレンス

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### 参考情報

- CSS グリッドレイアウトガイド: _[グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)_
