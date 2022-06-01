---
title: mask-composite
slug: Web/CSS/mask-composite
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - Experimental
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.mask-composite
translation_of: Web/CSS/mask-composite
---
{{CSSRef}}

**`mask-composite`** は [CSS](/ja/docs/Web/CSS) のプロパティで、現在のマスクレイヤーとその下のマスクレイヤーとの間で使われる合成操作を表します。

```css
/* キーワード値 */
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* グローバル値 */
mask-composite: inherit;
mask-composite: initial;
mask-composite: revert;
mask-composite: unset;
```

## 構文

以下に示す 1 つまたは複数のキーワード値を、カンマで区切って指定します。

### 値

混合において、現在のマスクレイヤーは _source_、その下にあるすべてのマスクレイヤーは _destination_ とします。

- `add`
  - : source が destination の上に配置されます。
- `subtract`
  - : destination の外側に source が配置されます。
- `intersect`
  - : destination と重なっている source の部分が destination を置き換えます。
- `exclude`
  - : source と destination で重なっていない領域が結合されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### マスクレイヤーを加算で合成

{{EmbedGHLiveSample("css-examples/masking/mask-composite.html", '100%', 550)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
