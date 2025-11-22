---
title: clip
slug: Web/CSS/Reference/Properties/clip
original_slug: Web/CSS/clip
l10n:
  sourceCommit: 758ddcdfb06f53955fa3c05dd32e7e4e53fd3009
---

{{Deprecated_Header}}

> [!WARNING]
> 作成者は、代わりに {{cssxref("clip-path")}} プロパティを使用することをお勧めします。

**`clip`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のどの部分が可視であるかを定義します。 `clip` プロパティは絶対配置された要素、つまり {{cssxref("position","position:absolute")}} または {{cssxref("position","position:fixed")}} を持つ要素だけに適用されます。

## 構文

```css
/* キーワード値 */
clip: auto;

/* <shape> 値 */
clip: rect(1px, 10em, 3rem, 2ch);

/* グローバル値 */
clip: inherit;
clip: initial;
clip: revert;
clip: revert-layer;
clip: unset;
```

### 値

- `rect()`
  - : `rect()` 関数を使用して、 `rect(<top>, <right>, <bottom>, <left>)` の形で定義された長方形。 `<top>` と `<bottom>` は、ボックス境界の上辺からのオフセットを表します。`<right>` と `<left>` は、ボックス境界の左辺からのオフセットを表します。これがボックスの中身となります。

    `<top>`、`<right>`、`<bottom>`、`<left>` の値は {{cssxref("&lt;length&gt;")}} または `auto` のいずれかです。`auto` が指定されると、その辺の境界線の内側で切り取られます。

> [!NOTE]
> 非推奨の `clip` プロパティで使用される {{cssxref("shape")}} 関数の `rect()` は、 CSS で {{cssxref("basic-shape")}} を定義するために使用する CSS の {{cssxref("basic-shape/rect","rect()")}} 関数とは異なります。

- `auto`
  - : 要素はクリップされません（既定値）。ボックス境界で切り取る `rect(auto, auto, auto, auto)` とはまったく異なることに注意してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像のクリップ

```html
<p class="dotted-border">
  <img src="macarons.png" alt="Original graphic" />
  <img id="top-left" src="macarons.png" alt="Graphic clipped to upper left" />
  <img id="middle" src="macarons.png" alt="Graphic clipped towards middle" />
  <img
    id="bottom-right"
    src="macarons.png"
    alt="Graphic clipped to bottom right" />
</p>
```

```css
.dotted-border {
  border: dotted;
  position: relative;
  width: 390px;
  height: 400px;
}

#top-left,
#middle,
#bottom-right {
  position: absolute;
  top: 0;
}

#top-left {
  left: 400px;
  clip: rect(0, 130px, 90px, 0);
}

#middle {
  left: 270px;
  clip: rect(100px, 260px, 190px, 130px);
}

#bottom-right {
  left: 140px;
  clip: rect(200px, 390px, 290px, 260px);
}
```

{{EmbedLiveSample('clipping_an_image', '', '450px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("clip-path")}}
- {{cssxref("position")}}
- {{cssxref("mask")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-outside")}}
