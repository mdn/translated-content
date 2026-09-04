---
title: Inset properties (インセットプロパティ)
slug: Glossary/Inset_properties
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{GlossarySidebar}}

CSS において、**インセットプロパティ** (inset properties) は、要素の既定の位置からのオフセットを指定することで、位置指定された要素の位置を制御します。物理的、論理的、一括指定のインセットプロパティがあります。

インセットプロパティには、{{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}}, {{cssxref("right")}} の物理プロパティ、フローに基づく同等物である {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}} の{{glossary("logical properties", "論理プロパティ")}}、そして一括指定の {{cssxref("inset-block")}}, {{cssxref("inset-inline")}}, {{cssxref("inset")}} が含まれます。

**物理的プロパティ**は、要素の特定の物理的な辺を参照します。論理プロパティは、ブロック軸とインライン軸に基づく、方向キーワードを使用します。**ブロック軸**は、ブロックレイアウト内の要素の積み重ね順序を定義する軸を指します。**インライン軸**はブロック軸に垂直で、ブロック内のテキストなどのインラインコンテンツが流れる方向を表します。対応付けは、要素の {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}} によって異なります。

インセットプロパティの解釈は、{{cssxref("position")}} プロパティの値によって異なります。`position: absolute` が設定されている場合、[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)または[アンカー要素](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)からの内部余白を意味します。`position: relative` が設定されている場合、ボックスの既定では、マージン辺の位置からの内部余白を意味します。`sticky` が設定されている場合、{{glossary("scroll container","スクロールコンテナー")}}の辺からの内部余白を意味します。`fixed` の値は `absolute` と似ていますが、この要素は固定位置指定の包含ブロック（ふつうはビューポート）に対して相対的に位置指定され、サイズが指定されます。

## 関連情報

- [レイアウトと包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
- [CSS 論理プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュール
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
