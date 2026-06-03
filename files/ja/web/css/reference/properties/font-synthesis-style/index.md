---
title: font-synthesis-style
slug: Web/CSS/Reference/Properties/font-synthesis-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`font-synthesis-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォントファミリーに斜体書体がない場合に、ブラウザーが斜体書体を合成するかどうかを指定します。

すべての書体合成値を制御するために、多くの場合は一括指定プロパティ {{cssxref("font-synthesis")}} を使用した方が便利です。

## 構文

```css
/* キーワード値 */
font-synthesis-style: auto;
font-synthesis-style: none;
font-synthesis-style: oblique-only;

/* グローバル値 */
font-synthesis-style: inherit;
font-synthesis-style: initial;
font-synthesis-style: revert;
font-synthesis-style: revert-layer;
font-synthesis-style: unset;
```

### 値

- `auto`
  - : 不足している斜体書体は、必要に応じてブラウザーが合成する可能性があることを示します。
- `none`
  - : 不足している斜体書体のブラウザーによる合成が許可されていないことを示します。
- `oblique-only`
  - : `auto` と同様ですが、`font-style: italic` が設定されている場合は合成が行われません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 斜体書体の合成の無効化

この例は、 Montserrat フォントでブラウザーによる斜体書体の合成をオフにすることを示しています。

#### HTML

```html-nolint
<p class="english">
  これは既定の <em>oblique typeface</em> と
  <strong>bold typeface</strong> です。
</p>

<p class="english no-syn">
  <em>oblique typeface</em> はオフになりましたが、 <strong>bold typeface</strong> はそうでありません。
</p>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

.english {
  font-family: "Montserrat", sans-serif;
}

.no-syn {
  font-synthesis-style: none;
}
```

#### 結果

{{EmbedLiveSample('Disabling synthesis of bold typeface', '', '100')}}

### font-synthesis-style 値の比較

この例では、イタリック体と斜体で書かれたテキストを使用して、すべての `font-synthesis-style` の値を比較しています。

#### HTML

```html
<div class="fss-none">
  <h2>font-synthesis-style: none</h2>
  <p class="oblique">このテキストは <code>oblique</code> に設定されています</p>
  <p class="italic">このテキストは <code>italic</code> に設定されています</p>
</div>

<div class="fss-auto">
  <h2>font-synthesis-style: auto</h2>
  <p class="oblique">このテキストは <code>oblique</code> に設定されています</p>
  <p class="italic">このテキストは <code>italic</code> に設定されています</p>
</div>

<div class="fss-oblique-only">
  <h2>font-synthesis-style: oblique-only</h2>
  <p class="oblique">このテキストは <code>oblique</code> に設定されています</p>
  <p class="italic">このテキストは <code>italic</code> に設定されています</p>
</div>
```

#### CSS

```css hidden
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

p {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
}

@supports not (font-synthesis-style: oblique-only) {
  body::before {
    content: "このブラウザーは 'oblique-only' 値には対応していません。";
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

```css
/* フォント合成のスタイルを指定 */
.fss-none {
  font-synthesis-style: none;
}

.fss-auto {
  font-synthesis-style: auto;
}

.fss-oblique-only {
  font-synthesis-style: oblique-only;
}

/* フォントスタイルを設定 */
.oblique {
  font-style: oblique;
}

.italic {
  font-style: italic;
}

/* デモのためのスタイル設定 */
.oblique::after {
  content: " (font-style: oblique)";
  font-size: 0.8rem;
  vertical-align: sub;
}

.italic::after {
  content: " (font-style: italic)";
  font-size: 0.8rem;
  vertical-align: sub;
}
```

#### 結果

{{EmbedLiveSample('Comparison of font-synthesis-style values', '', '560')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [font-synthesis](/ja/docs/Web/CSS/Reference/Properties/font-synthesis) shorthand, [font-synthesis-small-caps](/ja/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps), [font-synthesis-weight](/ja/docs/Web/CSS/Reference/Properties/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
