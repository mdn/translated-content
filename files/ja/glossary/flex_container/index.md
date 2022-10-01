---
title: Flex コンテナ
slug: Glossary/Flex_Container
---

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

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Flexbox Guide: _[Mastering wrapping of flex items](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
