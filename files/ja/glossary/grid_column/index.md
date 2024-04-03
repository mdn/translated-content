---
title: Grid Column (グリッド列)
slug: Glossary/Grid_Column
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

**グリッド列**とは [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)における縦のトラックであり、二つの垂直方向のグリッド線に挟まれた領域のことです。グリッド列は {{cssxref("grid-template-columns")}} プロパティまたは一括指定の {{cssxref("grid")}} や {{cssxref("grid-template")}} プロパティで定義されます。

加えて、明示的グリッド _(explicit grid)_ で作られる列の外にアイテムが配置される場合は、暗黙的グリッド _(implicit grid)_ にもグリッド列が作られます。これらの列はデフォルトでは自動的に大きさが決定されますが、{{cssxref("grid-auto-columns")}} プロパティでサイズ指定することもできます。

[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)の中で位置調整 (alignment) をする場合、列が並ぶ軸を _ブロック軸もしくは列軸_ と呼びます。

## 関連情報

### プロパティリファレンス

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### 参考情報

- CSS グリッドレイアウトガイド: _[グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)_
