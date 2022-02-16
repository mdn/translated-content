---
title: min-height
slug: Web/CSS/min-height
tags:
  - CSS
  - CSS プロパティ
  - レイアウト
  - 最小
  - リファレンス
  - 寸法
  - height
  - min-height
  - recipe:css-property
  - size
browser-compat: css.properties.min-height
translation_of: Web/CSS/min-height
---
{{CSSRef}}

**`min-height`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の最小高を設定します。これは {{cssxref("height")}} プロパティの[使用値](/ja/docs/Web/CSS/used_value)が、`min-height` で指定した値を下回ることを防ぎます。

{{EmbedInteractiveExample("pages/css/min-height.html")}}

`min-height` の値が {{cssxref("max-height")}} および {{cssxref("height")}} の値より大きい場合は、`min-height` の値が要素の高さになります。

## 構文

```css
/* <length> 値 */
min-height: 3.5em;

/* <percentage> 値 */
min-height: 10%;

/* キーワード値 */
min-height: max-content;
min-height: min-content;
min-height: fit-content(20em);

/* グローバル値 */
min-height: inherit;
min-height: initial;
min-height: revert;
min-height: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : `min-height` を絶対的な値で定義します。
- {{cssxref("&lt;percentage&gt;")}}
  - : `min-height` を包含ブロックの高さに対するパーセント値で定義します。
- `auto`
  - : ブラウザーが指定された要素の `min-height` を計算して選択します。
- `max-content`
  - : 内容物が推奨する `min-height` です。
- `min-content`
  - : 内容物の最小の `min-height` です。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : 利用可能な空白を指定された引数で置き換えた `fit-content` 式を使用します。すなわち、 `min(max-content, max(min-content, 引数))` です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### min-height の設定

```css
table { min-height: 75%; }

form { min-height: 0; }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("css.properties.min-height")}}

## 関連情報

- [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{cssxref("height")}}, {{cssxref("max-height")}}
