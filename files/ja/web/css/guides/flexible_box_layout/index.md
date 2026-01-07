---
title: CSS フレックスボックスレイアウト
short-title: フレックスボックスレイアウト
slug: Web/CSS/Guides/Flexible_box_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS フレックスボックスレイアウト** (CSS flexible box layout) は、ユーザーインターフェイスの設計に最適化された CSS ボックスモデルと、一次元のアイテムのレイアウトを定義します。フレックスレイアウトモデルでは、フレックスコンテナーの子は任意の方向にレイアウトすることができ、また使われていない空間を埋めるために伸長したり、あるいは親のあふれることを避けるために収縮したりと、そのサイズを「伸縮」することができます。子の水平方向と垂直方向の両方の整列を、容易に操作することが可能です。

## フレックスボックスレイアウトの実際

以下の例では、コンテナーに `display: flex` に設定されており、 3 つの子がフレックスアイテムであることを意味しています。 `justify-content` の値は、主軸上に均等に配置するため、 `space-between` に設定されています。それぞれのアイテムと、その左右のアイテムとの間は等しい間隔で配置され、フレックスコンテナーの両端に揃えられます。また、 `align-items` の既定値は `stretch` なので、アイテムが交差軸方向に引き伸ばされていることが分かります。アイテムはフレックスコンテナーの高さまで引き伸ばされ、最も高さが大きいアイテムと同じ高さで表示されます。

```html live-sample___simple-example
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />には追加の<br />テキストが<br />あります</div>
</div>
```

```css live-sample___simple-example
body {
  font-family: sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  justify-content: space-between;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 1em;
}
```

{{EmbedLiveSample("simple-example")}}

## リファレンス

### プロパティ

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### 用語集の用語

- {{Glossary("Flexbox","フレックスボックス")}}
- {{Glossary("Flex container","フレックスコンテナー")}}
- {{Glossary("Flex item","フレックスアイテム")}}
- {{Glossary("Main axis","主軸")}}
- {{Glossary("Cross axis","交差軸")}}
- {{Glossary("Flex")}}

## ガイド

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - : フレックスボックスの機能の概要です。
- [フレックスボックスと他のレイアウト方法の関係](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
  - : フレックスボックスが他のレイアウト方法や他の CSS 仕様書とどのように関係しているかです。
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - : ボックス配置プロパティがどのようにフレックスボックスに働くかです。
- [フレックスアイテムの順序](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
  - : アイテムの順序や向きを変更する様々な方法を説明し、その上での潜在的な問題を紹介します。
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : flex-grow, flex-shrink, flex-basis の各プロパティについての説明です。
- [フレックスアイテムの折り返しをマスターする](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
  - : 複数行のフレックスコンテナーを作成する方法と、それらの行内でのアイテムの表示方法の制御。
- [フレックスボックスの典型的な用途](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
  - : 典型的なフレックスボックスの用途の一般的なデザインパターン。
- [CSS レイアウト: フレックスボックス](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : フレックスボックスレイアウトを使用してウェブレイアウトを作成する方法を学びます。
- [フレックスボックスのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)の詳細機能のうち、フレックスボックスに特有のものです。

## 関連概念

[CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール

- {{cssxref("display")}}
- {{cssxref("order")}}

[CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}

[CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール

- {{cssxref("aspect-ratio")}}
- {{cssxref("max-content")}} 値
- {{cssxref("min-content")}} 値
- {{cssxref("fit-content")}} 値
- {{glossary("intrinsic size","内在サイズ")}}（用語）

## 仕様書

{{Specifications}}

## 関連情報

- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
- [CSS 書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)モジュール
- [CSS display の複数キーワード構文の使用](/ja/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)
