---
title: mask-position
slug: Web/CSS/mask-position
---

{{CSSRef}}

**`mask-position`** は [CSS](/ja/docs/Web/CSS) プロパティで、定義されたマスク画像それぞれについて、 {{cssxref("mask-origin")}} で設定されたマスク位置レイヤーに対する初期位置を設定します。

```css
/* キーワード値 */
mask-position: top;
mask-position: bottom;
mask-position: left;
mask-position: right;
mask-position: center;

/* <position> 値 */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* 複数の値 */
mask-position: top right;
mask-position:
  1rem 1rem,
  center;

/* グローバル値 */
mask-position: inherit;
mask-position: initial;
mask-position: revert;
mask-position: unset;
```

## 構文

1 つ以上の `<position>` 値をカンマで区切ったもの。

### 値

- {{cssxref("&lt;position&gt;")}}
  - : 要素ボックスの辺からの二次元の位置を表す 1 つから 4 つの値です。相対または絶対オフセットを与えることができます。なお、位置は要素ボックスの外に設定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### マスク位置の設定

`mask-position` の値を上記の許容値のいずれかに変更してみてください。
Chromium ベースのブラウザーでこの例を見る場合は、`-webkit-mask-position` の値を変更してください。

{{EmbedGHLiveSample("css-examples/masking/mask-position.html", '100%', 760)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
