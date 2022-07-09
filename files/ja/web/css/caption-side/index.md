---
title: caption-side
slug: Web/CSS/caption-side
tags:
  - CSS
  - CSS プロパティ
  - CSS 表
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.caption-side
translation_of: Web/CSS/caption-side
---
{{CSSRef}}

**`caption-side`** は [CSS](/ja/docs/Web/CSS) のプロパティで、表 ({{htmlelement("table")}}) の {{HTMLElement("caption")}} の中身を指定された側に配置します。この値は表の {{cssxref('writing-mode')}} に対する相対値です。

{{EmbedInteractiveExample("pages/css/caption-side.html")}}

## 構文

```css
/* 方向を示す値 */
caption-side: top;
caption-side: bottom;

/* 警告: 非標準の値 */
caption-side: block-start;
caption-side: block-end;
caption-side: inline-start;
caption-side: inline-end;

/* グローバル値 */
caption-side: inherit;
caption-side: initial;
caption-side: revert;
caption-side: unset;
```

`caption-side` プロパティは、以下のキーワード値のうちの一つで指定します。

### 値

- `top`
  - : キャプションボックスを表の上方に配置します。
- `bottom`
  - : キャプションボックスを表の下方に配置します。
- `block-start`
  - : キャプションボックスを表のブロック方向の先頭に配置します。
- `block-end`
  - : キャプションボックスを表のブロック方向の末尾に配置します。
- `inline-start`
  - : キャプションボックスを表のインライン方向の先頭に配置します。
- `inline-end`
  - : キャプションボックスを表のインライン方向の末尾に配置します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_captions_above_and_below">キャプションを上や下に設定</h3>

#### HTML

```html
<table class="top">
  <caption>Caption ABOVE the table</caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
</table>

<br>

<table class="bottom">
  <caption>Caption BELOW the table</caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
</table>
```

#### CSS

```css
.top caption {
  caption-side: top;
}

.bottom caption {
  caption-side: bottom;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid blue;
}
```

#### 結果

{{EmbedLiveSample('Setting_captions_above_and_below', 'auto', 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
