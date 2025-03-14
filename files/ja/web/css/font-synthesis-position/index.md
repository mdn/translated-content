---
title: font-synthesis-position
slug: Web/CSS/font-synthesis-position
l10n:
  sourceCommit: a6cac9db700637ac004a3608a7b5003c1c0ef8f8
---

{{CSSRef}}

**`font-synthesis-position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、下付き文字と上付き文字の「位置」の書体がフォントファミリーになく、 {{cssxref("font-variant-position")}} を使用して位置を設定する場合に、ブラウザーが合成するかどうかを指定することができます。

**`font-synthesis-position`** プロパティは {{htmlelement("sup")}} および {{htmlelement("sub")}} 要素を使用しているときには効果がありません。

すべての書体合成値を制御するために、多くの場合は一括指定プロパティ {{cssxref("font-synthesis")}} を使用した方が便利です。

## 構文

```css
/* キーワード値 */
font-synthesis-position: auto;
font-synthesis-position: none;

/* グローバル値 */
font-synthesis-position: inherit;
font-synthesis-position: initial;
font-synthesis-position: revert;
font-synthesis-position: revert-layer;
font-synthesis-position: unset;
```

### 値

- `auto`
  - : 不足している位置の書体は、必要に応じてブラウザーが合成する可能性があることを示します。
- `none`
  - : 不足している位置の書体のブラウザーによる合成が許可されていないことを示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 位置の書体の合成の無効化

この例は、 `Montserrat` フォントでブラウザーによる位置の書体の合成をオフにすることを示しています。

#### HTML

```html
<p>
  These are the default position <span class="super">superscript</span>,
  position <span class="sub">subscript</span>, <strong>bold</strong> and
  <em>oblique</em> typefaces.
</p>

<p class="no-syn">
  The positions <span class="super">superscript</span> and
  <span class="sub">subscript</span> typeface is turned off here but not the
  <strong>bold</strong> and <em>oblique</em> typefaces (on browsers that support
  <code>font-synthesis-position</code>).
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}
.super {
  font-variant-position: super;
}
.sub {
  font-variant-position: sub;
}
.no-syn {
  font-synthesis-position: none;
}
```

#### 結果

{{EmbedLiveSample('Disabling synthesis of position typeface', '', '100')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-synthesis")}} 一括指定, {{cssxref("font-synthesis-style")}}, {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-weight")}}
