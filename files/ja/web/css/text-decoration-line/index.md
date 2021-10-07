---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
tags:
  - CSS
  - CSS プロパティ
  - CSS テキスト装飾
  - Reference
  - recipe:css-property
browser-compat: css.properties.text-decoration-line
translation_of: Web/CSS/text-decoration-line
---
{{CSSRef}}

**`text-decoration-line`** は [CSS](/ja/docs/Web/CSS) のプロパティで、下線や上線など、要素内の文字列に使われる装飾の種類を設定します。

{{EmbedInteractiveExample("pages/css/text-decoration-line.html")}}

複数の line-decoration に関するプロパティを一度に設定するときは、代わりに一括指定の {{cssxref("text-decoration")}} プロパティを使用したほうが便利かもしれません。

## 構文

```css
/* 単一のキーワード */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;

/* 複数のキーワード */
text-decoration-line: underline overline;               /* 2 つの装飾線 */
text-decoration-line: overline underline line-through;  /* 複数の装飾線 */

/* グローバル値 */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: revert;
text-decoration-line: unset;
```

`text-decoration-line` プロパティは `none` または以下のリストにある **1 つ以上の**空白で区切られた値を指定します。

### 値

- `none`
  - : テキストの装飾を行いません。
- `underline`
  - : テキストの各行に下線を引きます。
- `overline`
  - : テキストの各行の上線を引きます。
- `line-through`
  - : テキストの各行の中央を貫く線を引きます。
- `blink` {{deprecated_inline}}
  - : テキストが点滅します (表示と非表示を交互に繰り返します)。準拠するユーザーエージェントはテキストを点滅させないかもしれません。この値は**非推奨**であり、 [CSS アニメーション](/ja/docs/Web/CSS/animation)に取って代わりました。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### 基本的な例

```html
<p class="wavy">こちらのテキストには赤い波線の下線が付いています。</p>
<p class="both">このテキストには上線と下線がついています。</p>
```

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}

.both {
  text-decoration-line: underline overline;
}
```

{{ EmbedLiveSample('Examples', '', '', '') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 複数の行内装飾プロパティを一度に設定するときは、代わりに一括指定の {{cssxref("text-decoration")}} プロパティを使った方が便利かもしれません。
