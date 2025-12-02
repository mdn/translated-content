---
title: font-synthesis-weight
slug: Web/CSS/Reference/Properties/font-synthesis-weight
original_slug: Web/CSS/font-synthesis-weight
l10n:
  sourceCommit: 28368ab728eed206d9069f5ba5b889e990ff810c
---

**`font-synthesis-weight`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォントファミリーに太字書体がない場合に、ブラウザーが合成するかどうかを指定します。

すべての書体合成値を制御するために、多くの場合は一括指定プロパティ {{cssxref("font-synthesis")}} を使用した方が便利です。

## 構文

```css
/* キーワード値 */
font-synthesis-weight: auto;
font-synthesis-weight: none;

/* グローバル値 */
font-synthesis-weight: inherit;
font-synthesis-weight: initial;
font-synthesis-weight: revert;
font-synthesis-weight: revert-layer;
font-synthesis-weight: unset;
```

### 値

- `auto`
  - : 不足している太字書体は、必要に応じてブラウザーが合成する可能性があることを示します。
- `none`
  - : 不足している太字書体のブラウザーによる合成が許可されていないことを示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 太字書体の合成の無効化

この例は、 Montserrat フォントでブラウザーによる太字書体の合成をオフにすることを示しています。

#### HTML

```html-nolint
<p class="english">
  これは既定の <strong>bold typeface</strong> と <em>oblique typeface</em> です。
</p>

<p class="english no-syn">
  <strong>bold typeface</strong> はオフになりましたが、 <em>oblique typeface</em> はそうではありません。
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.no-syn {
  font-synthesis-weight: none;
}
```

#### 結果

{{EmbedLiveSample('Disabling synthesis of bold typeface', '', '100')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [font-synthesis](/ja/docs/Web/CSS/Reference/Properties/font-synthesis) 一括指定, [font-synthesis-small-caps](/ja/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps), [font-synthesis-style](/ja/docs/Web/CSS/Reference/Properties/font-synthesis-style)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
