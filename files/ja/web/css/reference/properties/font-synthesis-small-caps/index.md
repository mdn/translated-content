---
title: font-synthesis-small-caps
slug: Web/CSS/Reference/Properties/font-synthesis-small-caps
original_slug: Web/CSS/font-synthesis-small-caps
l10n:
  sourceCommit: 28368ab728eed206d9069f5ba5b889e990ff810c
---

**`font-synthesis-small-caps`** は [CSS](/ja/docs/Web/CSS) プロパティで、フォントファミリーにスモールキャップの書体がない場合に、ブラウザーがスモールキャップの書体を合成するかどうかを指定します。スモールキャップの字体は通常、大文字の形状を使用しますが、小文字のサイズに縮小されます。

すべての書体合成値を制御するために、多くの場合は一括指定プロパティ {{cssxref("font-synthesis")}} を使用した方が便利です。

## 構文

```css
/* キーワード値 */
font-synthesis-small-caps: auto;
font-synthesis-small-caps: none;

/* グローバル値 */
font-synthesis-small-caps: inherit;
font-synthesis-small-caps: initial;
font-synthesis-small-caps: revert;
font-synthesis-small-caps: revert-layer;
font-synthesis-small-caps: unset;
```

### 値

- `auto`
  - : 不足しているスモールキャップの書体は、必要に応じてブラウザーが合成する可能性があることを示します。
- `none`
  - : 不足しているスモールキャップの書体のブラウザーによる合成が許可されていないことを示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### スモールキャップの書体の合成の無効化

この例は、 Montserrat フォントでブラウザーによるスモールキャップの書体の合成をオフにすることを示しています。

#### HTML

```html-nolint
<p class="english">
  これは既定の <span class="small-caps">small-caps</span>,
  <strong>bold</strong>, <em>oblique</em> の書体です。
</p>

<p class="english no-syn">
  <span class="small-caps">small-caps</span> の書体はオフになりましたが、 <strong>bold</strong> と <em>oblique</em> の書体はそうではありません。
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.small-caps {
  font-variant: small-caps;
}
.no-syn {
  font-synthesis-small-caps: none;
}
```

#### 結果

{{EmbedLiveSample('Disabling synthesis of small-caps typeface', '', '100')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [font-synthesis](/ja/docs/Web/CSS/Reference/Properties/font-synthesis) shorthand, [font-synthesis-style](/ja/docs/Web/CSS/Reference/Properties/font-synthesis-style), [font-synthesis-weight](/ja/docs/Web/CSS/Reference/Properties/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-weight")}}
- [CanvasRenderingContext2D: fontVariantCaps property](/ja/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
