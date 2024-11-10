---
title: ページ付け
slug: Web/CSS/Layout_cookbook/Pagination
l10n:
  sourceCommit: e6f3d674aff436f22b7a4e5bb59a02161492d1ef
---

{{CSSRef}}

この料理帳のパターンは、ページ付け (pagination) を表示するために使用されるナビゲーションのパターンを示し、ユーザーは検索結果などのコンテンツのページ間を移動できます。

![ページ付きリスト内のページのセットへのリンク](pagination.png)

## 要件

スクリーンリーダーを使用している人がページ付けであることを理解できるようにするために、項目を {{htmlelement("nav")}} 要素内のリストとしてマークアップし、CSS を使用してレイアウトを視覚的に 1 行で表示します。

通常、ページ付けのコンポーネントはコンテンツの下側にあり、水平方向の中央に配置されます。

## レシピ

{{EmbedGHLiveSample("css-examples/css-cookbook/pagination.html", '100%', 720)}}

> [!CALLOUT]
>
> [この例をダウンロード](https://github.com/mdn/css-examples/blob/main/css-cookbook/pagination--download.html)

## 行った選択

このパターンは、[フレックスボックス](/ja/docs/Web/CSS/CSS_flexible_box_layout)を使用してレイアウトされています — 一方のフレックスコンテナーは別のフレックスコンテナーの中にネストされています。 {{htmlelement("nav")}} 要素は、{{cssxref("justify-content")}} プロパティを使用してリストを中央に配置できるように、フレックスコンテナーとして指定されています。

リストそのものもフレックスコンテナーとなって、アイテムを一列に並べます。アイテムの空間を空けるには、フレックスアイテムに {{cssxref("margin")}} を使用するか、フレックスコンテナーに {{cssxref("gap")}} を追加するかしてください。

```css
.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2px;
}
```

## アクセシビリティの考慮

スクリーンリーダーを使用している人が、このナビゲーションが何をするのか、そしてリンクをクリックしたときにどこに行くのかを確実に理解できるようにしたいです。 これを手助けするために、 [`aria-label="pagination"`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) を `<nav>` 要素に追加しました。

スクリーンリーダーによって読み取られるが視覚的に隠されている追加のコンテンツを追加し、ページング矢印に [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) 属性を設定しました。

このドキュメントの最後にある「関連情報」の節には、関連するアクセシビリティのトピックへのリンクがあります。

## 仕様書

{{Specifications}}

## 関連情報

- {{Cssxref("justify-content")}}、{{Cssxref("column-gap")}}
- [ARIA を知る: 'Hidden' 対 'None'](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) (2018) （英語）
- [スクリーンリーダーのユーザーには見えないコンテンツ](https://webaim.org/techniques/css/invisiblecontent/#techniques) (2020)（英語）
- [アクセシビリティを意識した CSS の書き方](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939) (2017)（英語）（[日本語訳](https://frasco.io/writing-css-with-accessibility-in-mind-4fc82b26aecb)）
- [アクセシビリティ（a11y）スタイルガイド: ページ付け](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)（英語）
