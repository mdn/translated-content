---
title: accent-color
slug: Web/CSS/accent-color
tags:
  - CSS
  - CSS プロパティ
  - CSS ユーザーインターフェイス
  - HTML 色
  - Input
  - リファレンス
  - HTML 整形
  - accent-color
  - recipe:css-property
browser-compat: css.properties.accent-color
translation_of: Web/CSS/accent-color
---
{{CSSRef}}

**`accent-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、一部の要素で生成されるユーザーインターフェイス要素の{{Glossary("accent", "強調表示")}}色を設定します。

{{EmbedInteractiveExample("pages/css/accent-color.html")}}

現在 `accent-color` に対応しているブラウザーは、以下の HTML 要素に適用します。

- [`<input type="checkbox">`](/ja/docs/Web/HTML/Element/input/checkbox)
- [`<input type="radio">`](/ja/docs/Web/HTML/Element/input/radio)
- [`<input type="range">`](/ja/docs/Web/HTML/Element/input/range)
- [`<progress>`](/ja/docs/Web/HTML/Element/progress)

## 構文

```css
/* キーワード値 */
accent-color: auto;

/* <color> 値 */
accent-color: red;
accent-color: #5729e9;
accent-color: rgb(0, 200, 0);
accent-color: hsl(228, 4%, 24%);

/* グローバル値 */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: unset;
```

### 値

- `auto`
  - : UA が選択した色を表します。プラットフォームの強調色がある場合は、それと一致します。
- {{cssxref("&lt;color&gt;")}}
  - : 強調色として使用される色を指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 独自の強調色を設定

#### HTML

```html
<input type="checkbox" checked />
<input type="checkbox" class="custom" checked />
```

#### CSS

```css
input {
  accent-color: auto;
  display: block;
  width: 30px;
  height: 30px;
}

input.custom {
  accent-color: rebeccapurple;
}
```

#### 結果

{{EmbedLiveSample('Setting_a_custom_accent_color', 500, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} 要素
- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)
- {{cssxref("&lt;color&gt;")}} データ型
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
