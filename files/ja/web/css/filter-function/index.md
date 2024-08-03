---
title: <filter-function>
slug: Web/CSS/filter-function
l10n:
  sourceCommit: e9206dfb180daef7922487a99706b6ca82e4e34d
---

{{CSSRef}}

**`<filter-function>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、入力された画像の表示方法を変更することができるグラフィカル効果を表します。これは {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティで使用します。

## 構文

`<filter-function>` データ型は以下の一覧にあるフィルター関数を使用して指定されます。それぞれの関数には引数が必要であり、無効な場合は、フィルターが適用されません。

- {{cssxref("filter-function/blur", "blur()")}}
  - : 画像をぼかします。
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : 画像を明るくしたり暗くしたりします。
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : 画像のコントラストを上げたり下げたりします。
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : 画像の背後にドロップシャドウを適用します。
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : 画像をグレイスケールに変換します。
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : 画像の色相を全体的に変更します。
- {{cssxref("filter-function/invert", "invert()")}}
  - : 画像の色を反転させます。
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : 画像を半透明にします。
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : 入力画像の彩度を上げたり下げたりします。
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : 画像をセピア調に変換します。

## 形式文法

{{csssyntax}}

## 例

### フィルター関数の比較

この例では、シンプルなグラフィックに加えて、さまざまな種類のフィルター機能を選択するための選択メニューと、フィルター機能内で使用される値を変化させるためのスライダーが用意されています。コントロールを更新すると、フィルター効果がリアルタイムで更新されるので、さまざまなフィルターの効果を調べることができます。

```css
div {
  width: 300px;
  height: 300px;
  background: url(firefox.png) no-repeat center;
  filter: <filter-function>(<value>);
}
```

ここで、 `<filter-function>` はドロップダウンから選択したフィルターであり、 `<value>` はスライダーで設定した値です。
'
{{EmbedGHLiveSample("css-examples/types/filterfunctions.html", '100%', '500')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("filter")}} および {{cssxref("backdrop-filter")}}
