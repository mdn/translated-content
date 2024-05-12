---
title: CSS フレックスボックスレイアウト
slug: Web/CSS/CSS_flexible_box_layout
l10n:
  sourceCommit: b9db4e51b6f1cddba3af708643fc9804849d61c2
---

{{CSSRef}}

**CSS フレックスボックスレイアウト** (CSS Flexible Box Layout) は、ユーザーインターフェイスの設計に最適化された CSS ボックスモデルと、一次元のアイテムのレイアウトを定義します。フレックスレイアウトモデルでは、フレックスコンテナーの子は任意の方向にレイアウトすることができ、また使われていない空間を埋めるために伸長したり、あるいは親のあふれることを避けるために収縮したりと、そのサイズを「伸縮」することができます。子の水平方向と垂直方向の両方の整列を、容易に操作することが可能です。

## 基本的な例

以下の例では、コンテナーに `display: flex` に設定されており、 3 つの子がフレックスアイテムであることを意味しています。 `justify-content` の値は、主軸上に均等に配置するため、 `space-between` に設定されています。それぞれのアイテムと、その左右のアイテムとの間は等しい間隔で配置され、フレックスコンテナーの両端に揃えられます。また、 `align-items` の既定値は `stretch` なので、アイテムが交差軸方向に引き伸ばされていることが分かります。アイテムはフレックスコンテナーの高さまで引き伸ばされ、最も高さが大きいアイテムと同じ高さで表示されます。

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 600)}}

## リファレンス

### プロパティ

- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("order")}}

### 配置プロパティ

`align-content`, `align-self`, `align-items`, `justify-content` の各プロパティは、当初はフレックスボックスの仕様書にありましたが、ボックス配置 (Box Alignment) の仕様書で定義されるようになりました。フレックスボックスの仕様書はボックス配置の最新の定義を参照するようになりました。ボックス配置では新しい配置プロパティも定義されるようになりました。

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

## ガイド

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : フレックスボックスの機能の概要
- [フレックスボックスと他のレイアウト方法の関係](/ja/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : フレックスボックスが他のレイアウト方法や他の CSS 仕様書とどのように関係しているか
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : ボックス配置プロパティがどのようにフレックスボックスに働くか
- [フレックスアイテムの順序](/ja/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : アイテムの順序や向きを変更する様々な方法を説明し、その上での潜在的な問題を紹介します。
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : flex-grow, flex-shrink, flex-basis の各プロパティについての説明です。
- [フレックスアイテムの折り返しをマスターする](/ja/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : 複数行のフレックスコンテナーを作成する方法と、それらの行内でのアイテムの表示方法の制御。
- [フレックスボックスの典型的な用途](/ja/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : 典型的なフレックスボックスの用途の一般的なデザインパターン。

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 表示](/ja/docs/Web/CSS/CSS_display)モジュール
- [CSS display の複数キーワード構文の使用](/ja/docs/Web/CSS/display/multi-keyword_syntax_of_display)
- 用語集の項目:
  - {{Glossary("Flexbox", "フレックスボックス", 1)}}
  - {{Glossary("Flex Container", "フレックスコンテナー", 1)}}
  - {{Glossary("Flex Item", "フレックスアイテム", 1)}}
  - {{Glossary("Main Axis", "主軸", 1)}}
  - {{Glossary("Cross Axis", "交差軸", 1)}}
  - {{Glossary("Flex", "フレックス", 1)}}
