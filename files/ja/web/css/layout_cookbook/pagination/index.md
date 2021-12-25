---
title: ページ付け
slug: Web/CSS/Layout_cookbook/Pagination
tags:
  - CSS
  - CSS 料理帳
  - ガイド
  - CSS レイアウト
  - フレックスボックス
  - pagination
translation_of: Web/CSS/Layout_cookbook/Pagination
---
{{CSSRef}}

この料理帳のパターンは、ページ付け（pagination）を表示するために使用されるナビゲーションのパターンを示し、ユーザーは検索結果などのコンテンツのページ間を移動できます。

![ページ付きリスト内のページのセットへのリンク](pagination.png)

## 要件

画面リーダーを使用している人がページ付けであることを理解できるようにするために、項目を {{htmlelement("nav")}} 要素内のリストとしてマークアップし、CSS を使用してレイアウトを視覚的に 1 行で表示します。

通常、ページ付けのコンポーネントはコンテンツの下側にあり、水平方向の中央に配置されます。

## レシピ

{{EmbedGHLiveSample("css-examples/css-cookbook/pagination.html", '100%', 720)}}

> **Callout:**
>
> [この例をダウンロード](https://github.com/mdn/css-examples/blob/master/css-cookbook/pagination--download.html)

## 行った選択

このパターンは、[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)を使用してレイアウトされています — 一方のフレックスコンテナーは別のフレックスコンテナーの中にネストされています。 {{htmlelement("nav")}} 要素は、{{cssxref("justify-content")}} プロパティを使用してリストを中央に配置できるように、フレックスコンテナーとして指定されています。

リスト自体も、項目を行としてレイアウトするためのフレックスコンテナーになります。 項目を配置するために、フレックスアイテムには {{cssxref("margin")}} を使用します。

## 代替策

{{cssxref("column-gap")}} プロパティがブラウザーに実装されると、項目の間隔を空けるためにマージンの代わりにこれを使用できます。

```css
.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 2px;
}
```

## アクセシビリティの考慮

画面リーダーを使用している人が、このナビゲーションが何をするのか、そしてリンクをクリックしたときにどこに行くのかを確実に理解できるようにしたいです。 これを手助けするために、 [`aria-label="pagination"`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) を `<nav>` 要素に追加しました。

画面リーダーによって読み取られるが視覚的に隠されている追加のコンテンツを追加し、ページング矢印に [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) 属性を設定しました。

このドキュメントの最後にある「関連情報」の節には、関連するアクセシビリティのトピックへのリンクがあります。

## ブラウザーの互換性

レイアウト方法によってブラウザーの対応状況が異なります。使用しているプロパティの基本的な対応の詳細については、以下の表を参照してください。

_align-items を含む以下の例のように、使用したキー・プロパティのコンパチデータを含めます。_

#### justify-content

{{Compat("css.properties.justify-content")}}

#### フレックスレイアウトにおける column-gap

{{Compat("css.properties.column-gap.flex_context")}}

## 関連情報

- {{Cssxref("justify-content")}}、{{Cssxref("column-gap")}}
- [ARIA を知る: 'Hidden' 対 'None'](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html)（英語）
- [画面リーダーのユーザーには見えないコンテンツ](https://webaim.org/techniques/css/invisiblecontent/#techniques)（英語）
- [アクセシビリティを意識した CSS の書き方](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939)（英語）（[日本語訳](https://frasco.io/writing-css-with-accessibility-in-mind-4fc82b26aecb)）
- [アクセシビリティ（a11y）スタイルガイド: ページ付け](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)（英語）
