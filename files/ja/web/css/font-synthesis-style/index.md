---
title: font-synthesis-style
slug: Web/CSS/font-synthesis-style
l10n:
  sourceCommit: 28368ab728eed206d9069f5ba5b889e990ff810c
---

{{CSSRef}}

**`font-synthesis-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォントファミリーに斜体書体がない場合に、ブラウザーが斜体書体を合成するかどうかを指定します。

すべての書体合成値を制御するために、多くの場合は一括指定プロパティ {{cssxref("font-synthesis")}} を使用した方が便利です。

## 構文

```css
/* キーワード値 */
font-synthesis-style: auto;
font-synthesis-style: none;

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
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.no-syn {
  font-synthesis-style: none;
}
```

#### 結果

{{EmbedLiveSample('Disabling synthesis of bold typeface', '', '100')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [font-synthesis](/ja/docs/Web/CSS/font-synthesis) shorthand, [font-synthesis-small-caps](/ja/docs/Web/CSS/font-synthesis-small-caps), [font-synthesis-weight](/ja/docs/Web/CSS/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
