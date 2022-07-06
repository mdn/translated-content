---
title: '-moz-outline-radius'
slug: Web/CSS/-moz-outline-radius
tags:
  - CSS
  - CSS プロパティ
  - Mozilla 拡張
  - 標準外
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.-moz-outline-radius
translation_of: Web/CSS/-moz-outline-radius
---
{{CSSRef}}{{deprecated_header}}

Firefox などの Mozilla アプリケーションにおいて、**`-moz-outline-radius`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の輪郭線 ({{cssxref("outline")}}) の角を丸くするために使用することができます。

```css
/* 1 つの値 */
-moz-outline-radius: 25px;

/* 2 つの値 */
-moz-outline-radius: 25px 1em;

/* 3 つの値 */
-moz-outline-radius: 25px 1em 12%;

/* 4 つの値 */
-moz-outline-radius: 25px 1em 12% 4mm;

/* グローバル値 */
-moz-outline-radius: inherit;
-moz-outline-radius: initial;
-moz-outline-radius: unset;
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`-moz-outline-radius-bottomleft`](/ja/docs/Web/CSS/-moz-outline-radius-bottomleft)
- [`-moz-outline-radius-bottomright`](/ja/docs/Web/CSS/-moz-outline-radius-bottomright)
- [`-moz-outline-radius-topleft`](/ja/docs/Web/CSS/-moz-outline-radius-topleft)
- [`-moz-outline-radius-topright`](/ja/docs/Web/CSS/-moz-outline-radius-topright)

## 構文

### 値

> **Note:** 楕円形の輪郭線や `<percentage>` の値は、 {{cssxref("border-radius")}} で説明されている構文に従います。

1 ～ 4 つの `<outline-radius>` 値で、次のうちの一つを表します。

- {{cssxref("&lt;length&gt;")}}
  - : 取りうる値については {{cssxref("&lt;length&gt;")}} をご覧ください。
- {{cssxref("&lt;percentage&gt;")}}
  - : {{cssxref("&lt;percentage&gt;")}}。詳しくは {{cssxref("border-radius")}} を参照してください。

<!---->

- 1 つの値が設定された場合、全 4 隅に適用します。
- 2 つの値が設定された場合、最初の値は左上と右下の角に、2 番目の値は右上と左下の角に適用します。
- 3 つの値が設定された場合、最初の値は左上の角に、2 番目の値は右上と左下の角に、3 番目の値は右下の角に適用します。
- 4 つの値が設定された場合、最初の値は左上の角に、2 番目の値は右上の角に、3 番目の値は右下の角に、4 番目の値は左下の角に適用します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Rounding_an_outline">輪郭線を丸める</h3>

注: この例は Firefox 以外のブラウザーで閲覧したときに、期待される効果が表示されません。

#### HTML

```html
<p>This element has a rounded outline!</p>
```

#### CSS

```css
p {
  margin: 5px;
  border: 1px solid black;
  outline: dotted red;
  -moz-outline-radius: 12% 1em 25px;
}
```

### 結果

{{EmbedLiveSample('Rounding_an_outline')}}

## メモ

- `dotted` または `dashed` で角を丸めた輪郭線は、 Firefox 50 までは実線で描かれていました。 {{bug("382721")}}
- 将来のバージョンの Gecko/Firefox では、このプロパティが完全になくなるかもしれません。 {{bug("593717")}} を参照してください。

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Mozilla CSS 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)
- 関連する CSS プロパティ:

  - [`outline`](/ja/docs/Web/CSS/outline)
