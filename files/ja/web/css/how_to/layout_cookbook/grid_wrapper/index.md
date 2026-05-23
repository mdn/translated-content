---
title: グリッドラッパー
slug: Web/CSS/How_to/Layout_cookbook/Grid_wrapper
l10n:
  sourceCommit: 0ab262675372b83fc870accf3dc46d6a367c451c
---

グリッドラッパーパターンは、中央のラッパー内でグリッドコンテンツを揃えつつ、アイテムがラッパーの外側にはみ出して、親要素やページの端に整列することをすることができる点で便利です。

## 要件

グリッド上に配置されたアイテムは、水平方向の中央に配置された最大幅のラッパーやグリッドの外側の端に揃えることができます。

## レシピ

以下のコードブロックの "Play" をクリックすると、この例を MDN Playground で開きます。

```html live-sample___grid-wrapper-example
<div class="grid">
  <div class="wrapper">
    <p>
      このアイテムは、最大幅が設定された列である中央の「ラッパー」に揃えられます。
    </p>
  </div>
  <div class="full-width">
    <p>このアイテムは、グリッドコンテナーの端に揃えられます。</p>
  </div>
  <div class="left-edge">
    <p>
      このアイテムは、グリッドコンテナーの左端とラッパーの右端に揃えられます。
    </p>
  </div>
  <div class="right-wrapper">
    <p>このアイテムは、「ラッパー」列の右端に揃えられます。</p>
  </div>
</div>
```

```css live-sample___grid-wrapper-example
body {
  font: 1.2em sans-serif;
}
.grid {
  display: grid;
  grid-template-columns: minmax(20px, 1fr) repeat(6, minmax(0, 60px)) minmax(
      20px,
      1fr
    );
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
}

.grid > * {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
}

.full-width {
  grid-column: 1 / -1;
}

.wrapper {
  grid-column: 2 / -2;
}

.left-edge {
  grid-column: 1 / -2;
}

.right-wrapper {
  grid-column: 4 / -2;
}
```

{{EmbedLiveSample("grid-wrapper-example", "", "550px")}}

## 選択したもの

このレシピでは、CSS グリッドの {{cssxref("minmax()")}} 関数を使用して、{{cssxref("grid-template-columns")}} プロパティでグリッドトラックのサイズを定義しています。 最大幅を持つ中央の（グリッドレイアウトに使う 6 つの）列には、0 以上の最小値と、列トラックが大きくなれる最大サイズを指定する最大値を設定できます。[相対](/ja/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_font)または[絶対](/ja/docs/Web/CSS/Reference/Values/length#absolute_length_units) {{cssxref("length")}} 単位（ピクセル、em、rem）を使用すると、中央のラッパーに固定の最大サイズが設定されます。一方、{{cssxref("percentage")}} 値や [ビューポート単位](/ja/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport)を使用すると、ラッパーはそのコンテキストに応じて伸長または縮短します。

外側の 2 つの列の最大サイズは `1fr` です。 つまり、グリッドコンテナー内の残りの利用可能な空間を埋めるようにそれぞれが拡大されます。

## 有用な代替策またはその他の方法

コンテンツを水平方向に中央揃えするために、次のように左右の `auto` の {{cssxref("margin")}} とともに `max-width` を設定すると便利です。

```css
.grid {
  max-width: 96vw; /* 幅をビューポートの幅の 96% に制限 */
  margin: 0 auto; /* コンテナーを水平方向に中央揃え */
}
```

## アクセシビリティの考慮

グリッドを使用すると（理由の範囲内で）アイテムを適切な場所に配置できますが、CSS グリッドを使用してアイテムを配置する場合は、基になるマークアップが論理的な順序に従うことが重要です（詳細については、[CSS グリッドのレイアウトとアクセシビリティ](/ja/docs/Web/CSS/Guides/Grid_layout/Accessibility)を参照）。

## 関連情報

- {{Cssxref("grid-template-columns")}} プロパティ
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
- [CSS グリッド: `minmax()` によるさらなる柔軟性](https://css-irl.info/more-flexibility-with-minmax/)<sup>（英語）</sup> (2018)
- [CSS グリッドを使った脱出](https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/)<sup>（英語）</sup> (2017)
