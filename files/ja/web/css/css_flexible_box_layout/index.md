---
title: CSS フレックスボックスレイアウト
slug: Web/CSS/CSS_Flexible_Box_Layout
tags:
  - CSS
  - CSS フレックスボックス
  - ガイド
  - 概要
  - リファレンス
  - フレックスボックス
translation_of: Web/CSS/CSS_Flexible_Box_Layout
---
{{CSSRef}}

**CSS フレックスボックスレイアウト** (CSS Flexible Box Layout) は [CSS](/ja/docs/Web/CSS) のモジュールの一つで、ユーザーインターフェイスの設計に最適化された CSS ボックスモデルと、一次元のアイテムのレイアウトを定義します。フレックスレイアウトモデルでは、フレックスコンテナーの子は任意の方向にレイアウトすることができ、また使われていない空間を埋めるために伸長したり、あるいは親のあふれることを避けるために収縮したりと、そのサイズを「伸縮」することができます。子の水平方向と垂直方向の両方の整列を、容易に操作することが可能です。

## 基本的な例

以下の例では、コンテナーに `display: flex` に設定されており、 3 つの子がフレックスアイテムであることを意味しています。 `justify-content` の値は、主軸上に均等に配置するため、 `space-between` に設定されています。それぞれのアイテムと、その左右のアイテムとの間は等しい間隔で配置され、フレックスコンテナーの両端に揃えられます。また、 `align-items` の既定値は `stretch` なので、アイテムが交差軸方向に引き伸ばされていることが分かります。アイテムはフレックスコンテナーの高さまで引き伸ばされ、最も高さが大きいアイテムと同じ高さで表示されます。

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 600)}}

## リファレンス

## CSS プロパティ

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

### 用語集の項目

- {{Glossary("Flexbox", "フレックスボックス", 1)}}
- {{Glossary("Flex Container", "フレックスコンテナー", 1)}}
- {{Glossary("Flex Item", "フレックスアイテム", 1)}}
- {{Glossary("Main Axis", "主軸", 1)}}
- {{Glossary("Cross Axis", "交差軸", 1)}}
- {{Glossary("Flex", "フレックス", 1)}}

## ガイド

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
  - : フレックスボックスの機能の概要
- [フレックスボックスと他のレイアウト方法の関係](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
  - : フレックスボックスが他のレイアウト方法や他の CSS 仕様書とどのように関係しているか
- [フレックスコンテナーにおけるアイテムの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
  - : ボックス配置プロパティがどのようにフレックスボックスに働くか
- [フレックスアイテムの順序](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
  - : アイテムの順序や向きを変更する様々な方法を説明し、その上での潜在的な問題を紹介します。
- [主軸に沿ったフレックスアイテムの比率の操作](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
  - : flex-grow, flex-shrink, flex-basis の各プロパティについての説明です。
- [フレックスアイテムの折り返しのマスター](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
  - : 複数行のフレックスコンテナーを作成する方法と、それらの行内でのアイテムの表示方法の制御。
- [典型的なフレックスボックスの用途](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)
  - : 典型的なフレックスボックスの用途の一般的なデザインパターン。
- [フレックスボックスの後方互換性](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
  - : フレックスボックスのブラウザーの互換性状況、相互運用性の問題、古いブラウザーと古い仕様書のバージョンの対応

## 仕様書

| 仕様書                         | 状態                        | 備考     |
| ------------------------------ | --------------------------- | -------- |
| {{ SpecName('CSS3 Flexbox') }} | {{ Spec2('CSS3 Flexbox') }} | 初回定義 |

## 関連情報

- [Flexbugs](https://github.com/philipwalton/flexbugs)
  - : コミュニティによって整理されているフレックスボックスに関するブラウザーのバグと回避方法の一覧
