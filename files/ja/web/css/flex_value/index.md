---
title: <flex>
slug: Web/CSS/flex_value
tags:
  - CSS
  - CSS データ型
  - データ型
  - レイアウト
  - リファレンス
  - ウェブ
translation_of: Web/CSS/flex_value
---
{{CSSRef}}

**`<flex>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、グリッドコンテナー内部における可変の長さを記述します。 {{cssxref("grid-template-columns")}} や {{cssxref("grid-template-rows")}} およびほかの関連プロパティで使われます。

## 構文

`<flex>` データ型は {{cssxref("&lt;number&gt;")}} のあとに単位 `fr` が付きます。他の CSS の数量と同様に、数値と単位の間に空白は入れません。

## 例

### fr データ型の正しい値の例

```css
1fr    /* 整数値の使用 */
2.5fr  /* 浮動小数点値の使用 */
```

### CSS グリッドレイアウトのトラックリストでの使用例

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 2.5fr 1.5fr;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

 - [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)
