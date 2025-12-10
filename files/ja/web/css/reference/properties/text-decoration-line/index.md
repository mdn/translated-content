---
title: text-decoration-line
slug: Web/CSS/Reference/Properties/text-decoration-line
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`text-decoration-line`** は [CSS](/ja/docs/Web/CSS) のプロパティで、下線や上線など、要素内の文字列に使われる装飾の種類を設定します。

{{InteractiveExample("CSS デモ: text-decoration-line")}}

```css interactive-example-choice
text-decoration-line: none;
```

```css interactive-example-choice
text-decoration-line: underline;
```

```css interactive-example-choice
text-decoration-line: overline;
```

```css interactive-example-choice
text-decoration-line: line-through;
```

```css interactive-example-choice
text-decoration-line: grammar-error;
```

```css interactive-example-choice
text-decoration-line: spelling-error;
```

```css interactive-example-choice
text-decoration-line: underline overline;
```

```css interactive-example-choice
text-decoration-line: underline line-through;
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}
```

複数の line-decoration に関するプロパティを一度に設定するときは、代わりに一括指定の {{cssxref("text-decoration")}} プロパティを使用したほうが便利かもしれません。

## 構文

```css
/* 単一のキーワード */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;
text-decoration-line: spelling-error;
text-decoration-line: grammar-error;

/* 複数のキーワード */
text-decoration-line: underline overline; /* 2 本の装飾線 */
text-decoration-line: overline underline line-through; /* 複数の装飾線 */

/* グローバル値 */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: revert;
text-decoration-line: revert-layer;
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
- `blink`
  - : テキストが点滅します (表示と非表示を交互に繰り返します)。準拠するユーザーエージェントはテキストを点滅させないかもしれません。この値は**非推奨**であり、 [CSS アニメーション](/ja/docs/Web/CSS/Reference/Properties/animation)に取って代わりました。
- `spelling-error`
  - : それぞれのテキスト行は、ユーザーエージェントのスペルミス強調表示方法を使っており、ほとんどのブラウザーでは赤い点線で表示されます。
- `grammar-error`
  - : それぞれのテキスト行は、ユーザーエージェントの文法エラー強調表示方法を使っており、ほとんどのブラウザーでは緑の点線で表示されます。

> [!NOTE]
> `spelling-error` および `grammar-error` の値を使用したとき、ブラウザーは {{cssxref("text-decoration")}} 一括指定に指定される他のプロパティ（{{cssxref("text-underline-position")}}、`color`、`stroke` など）を無視します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

```html-nolint
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

{{EmbedLiveSample('basic_example',,90)}}

### エラーの例

この例では、最初の段落にはスペルミスが含まれており、誤字に対してブラウザーのスペルミス用スタイルが適用されています。2 番目の段落では文法エラー用のブラウザースタイルが使用されています。これらの `text-decoration-line` 値に非対応のブラウザーではスタイル変更は発生しません。

<!-- cSpell:ignore speling -->

```html
<p>このテキストには<span class="spelling">スペルミス</span>があります。</p>
<p class="grammar">このテキストには文法エラーがあります。</p>
```

```css
.spelling {
  text-decoration-line: spelling-error;
}

.grammar {
  text-decoration-line: grammar-error;
}
```

{{EmbedLiveSample('errors_example',,90)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 複数の線の装飾プロパティを一度に設定するときは、代わりに一括指定の {{cssxref("text-decoration")}} プロパティを使った方が便利かもしれません。
  - {{cssxref("text-decoration-style")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
- {{cssxref("::spelling-error")}}
- {{cssxref("::grammar-error")}}
