---
title: text-decoration-thickness
slug: Web/CSS/Reference/Properties/text-decoration-thickness
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`text-decoration-thickness`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素内のテキストに用いられる装飾線、例えば取り消し線、下線、上線の太さを設定します。

{{InteractiveExample("CSS デモ: text-decoration-thickness")}}

```css interactive-example-choice
text-decoration-line: underline;
text-decoration-thickness: 3px;
```

```css interactive-example-choice
text-decoration-line: line-through;
text-decoration-thickness: 0.4rem;
```

```css interactive-example-choice
text-decoration-line: underline overline;
text-decoration-thickness: from-font;
font-size: 2rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Confusion kissed me on the cheek, and left a taste so bittersweet
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
  text-decoration-color: red;
}
```

## 構文

```css
/* 単独のキーワード */
text-decoration-thickness: auto;
text-decoration-thickness: from-font;

/* 長さ */
text-decoration-thickness: 0.1em;
text-decoration-thickness: 3px;

/* パーセント値 */
text-decoration-thickness: 10%;

/* グローバル値 */
text-decoration-thickness: inherit;
text-decoration-thickness: initial;
text-decoration-thickness: revert;
text-decoration-thickness: revert-layer;
text-decoration-thickness: unset;
```

### 値

- `auto`
  - : ブラウザーがテキスト装飾線の適切な太さを選択します。
- `from-font`
  - : フォントファイルに推奨する太さの情報が含まれている場合は、その値を使用します。フォントファイルにこの情報が含まれていない場合は、 `auto` が設定されているのと同様に動作し、ブラウザーが適切な太さを選択します。
- `<length>`
  - : テキスト装飾線の太さを {{cssxref('length')}} として指定し、フォントファイルの推奨値やブラウザーの既定値を無視します。
- `<percentage>`
  - : テキスト装飾線の太さを現在のフォントの **1em** に対する {{cssxref('percentage')}} で指定します。パーセント値は相対値として継承されるので、フォントが変わるとそれに合わせて変わります。ブラウザーは最小でも 1 デバイスピクセルを使用しなければなりません。このプロパティを適用した場合、フォントの大きさが異なる子要素があっても、適用されたボックス全体で太さが一定になります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々な太さ

#### HTML

```html
<p class="thin">赤い 1px の下線を引いたテキストです。</p>
<p class="thick">赤い 5px の下線を引いたテキストです。</p>
<p class="shorthand">これは同等の一括指定を使用しています。</p>
```

#### CSS

```css
.thin {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 1px;
}

.thick {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 5px;
}

.shorthand {
  text-decoration: underline solid red 5px;
}
```

#### 結果

{{EmbedLiveSample('Varying_thickness')}}

## 仕様書

{{Specifications}}

> [!NOTE]
> このプロパティは `text-decoration-width` と呼ばれていましたが、 2019 年に `text-decoration-thickness` に更新されました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-decoration")}}
- {{cssxref("text-underline-offset")}}
