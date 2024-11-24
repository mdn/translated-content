---
title: Ink overflow (インクオーバーフロー)
slug: Glossary/Ink_overflow
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

ボックスの**インクオーバーフロー**とは、ボックスとそのコンテンツのうち、ボックスの境界線の外側に視覚効果を作成する部分を指します。インクオーバーフローは、外観上のみであり、ボックスモデルのプロパティに影響を与えないため、レイアウトに影響を与えません。

インクオーバーフローとは、[ボックスシャドウ](/ja/docs/Web/CSS/box-shadow)、[境界画像](/ja/docs/Web/CSS/CSS_backgrounds_and_borders)、[テキスト装飾](/ja/docs/Web/CSS/CSS_text_decoration)、[輪郭線](/ja/docs/Web/CSS/outline)など、レイアウトに影響を与えない、あるいはスクロール可能なオーバーフロー領域を拡張しない描画効果のオーバーフローを表します。また、 em ボックスの外にはみ出すアセンダーやディセンダーのような、字体のオーバーフローもインクオーバーフローです。

[置換要素](/ja/docs/Web/CSS/Replaced_element)は常に独立した[整形コンテキスト](/ja/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)を確立するので、置換コンテンツのオーバーフローは常にインクオーバーフローとなります（[スクロール可能なオーバーフロー](/ja/docs/Learn/CSS/Building_blocks/Overflowing_content)とは異なります）。

## 関連情報

- [CSS オーバーフローモジュール](/ja/docs/Web/CSS/CSS_overflow)
