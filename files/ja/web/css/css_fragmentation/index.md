---
title: CSS 断片化
slug: Web/CSS/CSS_Fragmentation
tags:
  - CSS
  - CSS 断片化
  - ガイド
  - NeedsCompatTable
  - NeedsContent
  - 概要
  - リファレンス
translation_of: Web/CSS/CSS_Fragmentation
---
{{CSSRef}}

**CSS 断片化**は CSS のモジュールの一つで、コンテンツが[ページ](/ja/docs/Web/CSS/Paged_Media)、領域、[段](/ja/docs/Web/CSS/CSS_Columns)をまたがって分割された (断片化された) ときにどのように表示するかを定義します。

断片化が発生するのは、インラインボックスが複数の行に渡る場合です。また、ブロックが段組みレイアウトコンテナーの中で複数の段にまたがる場合や、印刷時にページにまたがる場合です。その要素の表示されるそれぞれの部分は*断片*と呼ばれます。

## リファレンス

- {{cssxref("box-decoration-break")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

## 仕様書

| 仕様書                             | 状態                            | 備考     |
| ---------------------------------- | ------------------------------- | -------- |
| {{SpecName('CSS3 Fragmentation')}} | {{Spec2('CSS3 Fragmentation')}} | 初回定義 |
