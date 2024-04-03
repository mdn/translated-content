---
title: Flex コンテナ
slug: Glossary/Flex_Container
---

{{GlossarySidebar}}

{{glossary("Flexbox")}} レイアウトは親要素の `display` プロパティの値に `flex` または `inline-flex` を指定することで定義されます。この親要素が**「flex コンテナ」**となり、その子要素が 「flex アイテム」({{glossary("flex item")}}) となります。

値に `flex` を指定すると、この要素はブロックレベルの flex コンテナとなり、`inline-flex` を指定すると、インラインレベルの flex コンテナとなります。これらの指定は、その要素に対する**「flex 整形文脈 (flex formatting context)」**を作成します。Flex 整形文脈は、フロートがコンテナに侵入せず、コンテナのマージンがアイテムのマージンによって相殺されないという点で、ブロック整形文脈と同様のものです。

## 関連項目

### プロパティリファレンス

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("flex")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### 参考文献

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS フレックスボックスガイド: _[フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS フレックスボックスガイド: _[フレックスアイテムの折り返しをマスターする](/ja/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)_
