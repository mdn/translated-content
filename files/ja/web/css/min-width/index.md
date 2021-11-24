---
title: min-width
slug: Web/CSS/min-width
tags:
  - CSS
  - CSS プロパティ
  - 水平
  - レイアウト
  - 最小
  - リファレンス
  - 寸法
  - min-width
  - recipe:css-property
  - size
  - width
browser-compat: css.properties.min-width
translation_of: Web/CSS/min-width
---
{{CSSRef}}

**`min-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の最小幅を設定します。これは {{Cssxref("width")}} プロパティの[使用値](/ja/docs/Web/CSS/used_value)が、`min-width` で指定した値を下回ることを防ぎます。

{{EmbedInteractiveExample("pages/css/min-width.html")}}

`min-width` の値が {{Cssxref("max-width")}} および {{Cssxref("width")}} の値より大きい場合は、`min-width` の値が要素の幅になります。

## 構文

```css
/* <length> 値 */
min-width: 3.5em;

/* <percentage> 値 */
min-width: 10%;

/* キーワード値 */
min-width: max-content;
min-width: min-content;
min-width: fit-content(20em);

/* グローバル値 */
min-width: inherit;
min-width: initial;
min-width: revert;
min-width: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : `min-width` を絶対的な値で定義します。
- {{cssxref("&lt;percentage&gt;")}}
  - : `min-width` を包含ブロックの幅に対するパーセント値で定義します。
- `auto`
  - : ブラウザーが指定された要素の `min-width` を計算して選択します。
- `max-content`
  - : 内容物が推奨する `min-width` です。
- `min-content`
  - : 内容物の最小の `min-width` です。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : 利用可能な空白を指定された引数で置き換えた `fit-content` 式を使用します。すなわち、 `min(max-content, max(min-content, 引数))` です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 要素の最小幅を設定

```css
table { min-width: 75%; }

form { min-width: 0; }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("width")}}, {{Cssxref("max-width")}}
- [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), {{Cssxref("box-sizing")}}
