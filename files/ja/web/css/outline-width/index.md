---
title: outline-width
slug: Web/CSS/outline-width
tags:
  - CSS
  - CSS 輪郭線
  - CSS プロパティ
  - Layout
  - Reference
  - recipe:css-property
browser-compat: css.properties.outline-width
translation_of: Web/CSS/outline-width
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`outline-width`** プロパティは、要素の輪郭線の太さを設定します。輪郭線とは要素の周りに描かれる線のことで、 {{cssxref("border")}} よりも外側です。

{{EmbedInteractiveExample("pages/css/outline-width.html")}}

たいていの場合、輪郭線の見た目を定義するときは一括指定プロパティ {{cssxref("outline")}} を使ったほうが便利です。

## 構文

```css
/* キーワード値 */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* <length> 値 */
outline-width: 1px;
outline-width: 0.1em;

/* グローバル値 */
outline-width: inherit;
outline-width: initial;
outline-width: revert;
outline-width: unset;
```

`outline-width` プロパティは、以下に挙げた値のうちの一つで指定します。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 輪郭線の太さを `<length>` で指定します。
- `thin`
  - : ユーザーエージェントに依存します。Firefox のようなデスクトップブラウザーでは、通常は `1px` です。
- `medium`
  - : ユーザーエージェントに依存します。Firefox のようなデスクトップブラウザーでは、通常は `3px` です。
- `thick`
  - : ユーザーエージェントに依存します。Firefox のようなデスクトップブラウザーでは、通常は `5px` です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_an_elements_outline_width">要素の輪郭線の幅の設定</h3>

#### HTML

```html
<span id="thin">thin</span>
<span id="medium">medium</span>
<span id="thick">thick</span>
<span id="twopixels">2px</span>
<span id="oneex">1ex</span>
<span id="em">1.2em</span>
```

#### CSS

```css
span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#em {
  outline-width: 1.2em;
}
```

#### 結果

{{EmbedLiveSample('Setting_an_elements_outline_width', '100%', '80')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
