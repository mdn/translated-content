---
title: カード
slug: Web/CSS/Layout_cookbook/Card
tags:
  - CSS
  - CSS 料理帳
  - CSS グリッド
  - ガイド
  - カード
  - css レイアウト
translation_of: Web/CSS/Layout_cookbook/Card
---
{{CSSRef}}

このパターンは、オプションでフッターが付く「カード」部品のリストです。

![1 行に 3 つのカード部品](cards.png)

## 要件

カード部品には、見出し、画像、コンテンツ、フッターなど、さまざまなコンテンツを含めることができます。

各カードは同じ高さでなければならず、フッターはカードの一番下に固定する必要があります。

カードのコレクションに追加すると、カードを 2 次元に並べる必要があります。

## レシピ

{{EmbedGHLiveSample("css-examples/css-cookbook/card.html", '100%', 1720)}}

> **Callout:**
>
> [この例をダウンロード](https://github.com/mdn/css-examples/blob/master/css-cookbook/card--download.html)

## 行った選択

このカードは、 1 次元レイアウトであるにもかかわらず [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)を使用してレイアウトされています。 これは、グリッドトラックに対してコンテンツのサイズ変更の使用が可能になるためです。 単一列グリッドを設定するときは、次のようにします。

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

見出しトラックは {{cssxref("max-content")}} に設定されているため、伸縮は行われません。 画像は 200 ピクセルの高さのトラック内に収めることにしました。 それから、その次のトラック（コンテンツが存在する場所）を `1fr` に設定します。 これは、残りの空間を占有することを意味します。

暗黙的にグリッドに作成された行は、既定で自動的にサイズ変更されるため、トラックにフッターがある場合は自動的にサイズ変更されます。 したがって、これは追加されたコンテンツに合わせられます。

> **Note:** 各カードは独立したグリッドであるため、別々のカードのさまざまな要素は互いに整列しません。 Grid Level  2 で提案されたサブグリッド機能は、この問題を解決するでしょう。

## 有用な代替策またはその他の方法

[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)を使ってカードをレイアウトすることもできます。その場合は、コンテンツ領域を大きくし、他のアイテムは大きくしないようにする必要があります。これは合理的なカードのレイアウト方法ですが、私は、アイテムにルールを追加するよりも、コンテナーからトラックを制御できる方がやや好きです。

全体的なレイアウトのためにフレックスボックスを使うことができますが、この場合は最終的なフレックス業の上でカードが伸縮するでしょう。あるいは、[CSS 段組み](/ja/docs/Web/CSS/CSS_Columns)を使用することもできます。これにより、カードが段の上にレイアウトされることになりますが、これは問題になる場合もあれば、そうでない場合もあります。

これらの各レイアウト方法のデモについては、[欄のレシピ](/ja/docs/Web/CSS/Layout_cookbook/Column_layouts)を参照してください。

## アクセシビリティの考慮

カードの内容によっては、アクセシビリティを高めるためにできること、あるいはすべきことがあるかもしれません。 これらの問題のとても詳細な説明については、 Heydon Pickering による[包括的な部品: カード](https://inclusive-components.design/cards/)（英語）を参照してください。

## ブラウザーの互換性

レイアウト方法によってブラウザーの対応状況が異なります。使用しているプロパティの基本的な対応の詳細については、以下の表を参照してください。

#### grid-template-columns

{{Compat("css.properties.grid-template-columns")}}

#### grid-template-rows

{{Compat("css.properties.grid-template-rows")}}

## 関連情報

- {{Cssxref("grid-template-columns")}}, {{Cssxref("grid-template-rows")}}, {{Cssxref("gap")}}
- [包括的な部品: カード](https://inclusive-components.design/cards/)（英語）
