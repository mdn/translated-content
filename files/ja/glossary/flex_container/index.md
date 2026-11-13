---
title: Flex Container (フレックスコンテナー)
slug: Glossary/Flex_Container
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

{{glossary("Flexbox", "フレックスボックス")}}レイアウトは、`flex` または `inline-flex` を親要素の `display` プロパティの値に使用することで定義されます。この要素は**フレックスコンテナー**となり、その子要素それぞれは{{glossary("flex item", "フレックスアイテム")}}となります。

値に `flex` を指定すると、この要素はブロックレベルのフレックスコンテナーとなり、`inline-flex` を指定すると、インラインレベルのフレックスコンテナーとなります。これらの指定は、その要素に対する**フレックス整形コンテキスト**を作成します。これはブロック整形コンテキストと、不動要素がコンテナーの中に侵入せず、コンテナーのマージンがアイテムのマージンとの間で相殺されないという点で似ています。

## 関連情報

### プロパティリファレンス

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("flex")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### 参考文献

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [フレックスアイテムの折り返しをマスターする](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [CSS flexbox inspector: Examine flexbox layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)
