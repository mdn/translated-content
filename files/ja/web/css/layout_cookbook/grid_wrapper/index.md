---
title: グリッドラッパー
slug: Web/CSS/Layout_cookbook/Grid_wrapper
tags:
  - CSS
  - ガイド
  - レイアウト
  - 料理帳
  - レシピ
translation_of: Web/CSS/Layout_cookbook/Grid_wrapper
---
{{CSSRef}}

このパターンは、中央のラッパー内でグリッドのコンテンツを整列させるのに便利ですが、必要に応じて項目を脱出させて親要素やページの端に整列させることもできます。

## 要件

グリッド上に配置された項目は、水平方向の中央に配置された最大幅のラッパーやグリッドの外側の端に揃えることができます。

## レシピ

{{EmbedGHLiveSample("css-examples/css-cookbook/grid-wrapper.html", '100%', 720)}}

> **Callout:**
>
> [この例をダウンロードする](https://github.com/mdn/css-examples/blob/master/css-cookbook/grid-wrapper--download.html)

## 行った選択

このレシピでは、CSS グリッドの {{cssxref("minmax")}} 関数を使用して、{{cssxref("grid-template-columns")}} プロパティでグリッドトラックのサイズを定義しています。 最大幅を持つ中央の（グリッドレイアウトに使う 6 つの）列には、0 以上の最小値と、列トラックが大きくなれる最大サイズを指定する最大値を設定できます。 数値の単位（ピクセル、em、rem）を使用すると、中央のラッパーの固定最大サイズが作成されますが、パーセント値またはビューポート単位を使用すると、このラッパーはそのコンテキストに応じて拡大または縮小します。

外側の2つの列の最大サイズは `1fr` です。 つまり、グリッドコンテナー内の残りの使用可能スペースを埋めるようにそれぞれが拡大されます。

## 有用な代替策または代替方法

このレシピをページレベルで使用するときは、コンテンツを水平方向に中央揃えするために、次のように左右の `auto` の {{cssxref("margin")}} とともに `max-width` を設定すると便利です。

```css
.grid {
  max-width: 1200px;
  margin: 0 auto; // コンテナーを水平方向に中央揃え
}

/* ブラウザーがグリッドに対応している場合は、max-width と margin を取り除く */
@supports (display: grid) {
  .grid {
    display: grid;
    /* 他のグリッドのコードはここへ */
    max-width: none;
    margin: 0;
  }
}
```

`full-width` 項目をビューポートの端まで「脱出」させるには、次のトリックを使用できます（[Una Kravets](https://una.im/) の好意による）。

```css
.item {
  width: 100vw;
  margin-left: 50%;
  transform: translate3d(-50%, 0, 0);
}
```

これは、正確なグリッド上で項目を簡単に整列させることができるという利点が必要ない場合に限り、レイアウトの適切な近似値を提供します。

## アクセシビリティの考慮

グリッドを使用すると（理由の範囲内で）項目を適切な場所に配置できますが、CSS グリッドを使用して項目を配置する場合は、基になるマークアップが論理的な順序に従うことが重要です（詳細については、[CSS グリッドのレイアウトとアクセシビリティ](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)を参照）。

## ブラウザーの互換性

レイアウト方法によってブラウザーの対応状況が異なります。使用しているプロパティの基本的な対応の詳細については、以下の表を参照してください。

#### grid-template-columns

{{Compat("css.properties.grid-template-columns")}}

## 関連情報

- {{Cssxref("grid-template-columns")}}
- [MDN の CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)
- 記事: [CSS グリッド: minmax() によるさらなる柔軟性](https://css-irl.info/more-flexibility-with-minmax/)（英語）
- 記事: [CSS グリッドを使った脱出](https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/)（英語）
