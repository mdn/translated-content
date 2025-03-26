---
title: 解決値
slug: conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4
original_slug: Web/CSS/resolved_value
---

{{CSSRef}}

**解決値** は [CSS](/ja/docs/Web/CSS) プロパティにおいて、アクティブなスタイルシートを適用し、その値に含まれる可能性のある基本的な計算をすべて解決した後の値です。 {{domxref("Window.getComputedStyle", "getComputedStyle()")}} メソッドは、指定された要素に適用された CSS プロパティのすべてについて、解決値を含む生きた {{domxref("CSSStyleDeclaration")}} オブジェクトを返します。

過去には、 `getComputedStyle()` は要素または擬似要素の[計算値](/ja/docs/Web/CSS/CSS_cascade/Value_processing#計算値)を返していました。CSS の進化に伴い、「計算値」の概念も進化しましたが、展開されたスクリプトとの後方互換性を保つため、 `getComputedStyle()` が返す値は同じままでなければなりませんでした。これらの値が「解決値」です。

ほとんどのプロパティでは、解決値は[計算値](/ja/docs/Web/CSS/CSS_cascade/Value_processing#計算値)ですが、いくつかの古いプロパティ（{{cssxref("width")}} や {{cssxref("height")}} など）では、[使用値](/ja/docs/Web/CSS/CSS_cascade/Value_processing#使用値)です。プロパティごとの詳細については、下記の仕様書のリンクを参照してください。

## 仕様書

{{Specifications}}

## 関連情報

- {{domxref("window.getComputedStyle")}}
- {{domxref("CSSStyleDeclaration.getPropertyValue")}}
- 値
  - [初期値](/ja/docs/Web/CSS/CSS_cascade/Value_processing#初期値)
  - [計算値](/ja/docs/Web/CSS/CSS_cascade/Value_processing#計算値)
  - [使用値](/ja/docs/Web/CSS/CSS_cascade/Value_processing#使用値)
  - [実効値](/ja/docs/Web/CSS/CSS_cascade/Value_processing#実効値)
- [CSS の構文](/ja/docs/Web/CSS/CSS_syntax/Syntax)
- [アットルール](/ja/docs/Web/CSS/CSS_syntax/At-rule)
- [詳細度](/ja/docs/Web/CSS/CSS_cascade/Specificity)
- [継承](/ja/docs/Web/CSS/CSS_cascade/Inheritance)
- [値定義構文](/ja/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [一括指定プロパティ](/ja/docs/Web/CSS/CSS_cascade/Shorthand_properties)
