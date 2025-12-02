---
title: image-orientation
slug: Web/CSS/Reference/Properties/image-orientation
original_slug: Web/CSS/image-orientation
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

**`image-orientation`** は [CSS](/ja/docs/Web/CSS) のプロパティで、画像の向きのレイアウトに依存しない修正を指定します。

{{InteractiveExample("CSS デモ: image-orientation")}}

```css interactive-example-choice
image-orientation: none;
```

```css interactive-example-choice
image-orientation: from-image;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/hummingbird.jpg" />
</section>
```

```css interactive-example
#example-element {
  height: inherit;
}
```

## 構文

```css
/* キーワード値 */
image-orientation: none;
image-orientation: from-image; /* 画像の EXIF データを使用 */

/* グローバル値 */
image-orientation: inherit;
image-orientation: initial;
image-orientation: revert;
image-orientation: revert-layer;
image-orientation: unset;
```

### 値

- `none`
  - : 追加の画像の回転を適用しません。画像はエンコードされた方向、または他の CSS プロパティの値で決められた方向になります。
- `from-image`
  - : 既定の初期値です。画像に含まれている [EXIF](https://ja.wikipedia.org/wiki/EXIF) 情報を使用して、画像の向きを適切にします。

> [!WARNING]
> `image-orientation: none;` はセキュリティ上の懸念により、EXIF 情報でエンコードされた安全でないオリジン画像の向きを上書きしません。 詳細は、[この CSS 作業グループ草案課題](https://github.com/w3c/csswg-drafts/issues/5165)をご覧ください。

## 解説

このプロパティは、回転したカメラで撮影された画像の方向を修正するため*だけ*を目的としています。自由に回転させるために使用するべきでは*ありません*。撮影やスキャンで回転してしまった画像の向きを修正する以外の用途の場合は、{{cssxref("transform")}} プロパティに `rotate` キーワードを付けて回転を指定してください。これはユーザーによる画像の向きの変更や、印刷時に縦向きと横向きを変更する必要がある場合も含みます。

{{cssxref("&lt;transform-function&gt;")}} などの他の CSS プロパティとの組み合わせで使用された場合、 `image-orientation` による回転は、常に他の変形が行われる前に適用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像データから画像の向きを変更

以下の画像は 180 度回転しており、 `image-orientation` プロパティを使用して、画像内の EXIF データに基づいて向きを修正しています。 `image-orientation` を `none` に変更すると、このプロパティの効果を見ることができます。

#### CSS

```css
#image {
  image-orientation: from-image; /* ライブサンプルの中で変更することができます */
}
```

```css hidden
img {
  margin: 0.5rem 0;
}

label {
  font-family: monospace;
}
```

```html hidden
<img id="image" src="oriole.jpg" alt="Orientation taken from the image" />

<div>
  <input
    type="radio"
    id="from-image"
    name="orientation"
    value="from-image"
    checked />
  <label for="from-image">from-image</label>
</div>

<div>
  <input type="radio" id="none" name="orientation" value="none" />
  <label for="none">none</label>
</div>
```

```js hidden
document.addEventListener("change", (evt) => {
  document.getElementById("image").style.imageOrientation = evt.target.value;
});
```

#### 結果

{{EmbedLiveSample("Orienting_image_from_image_data", "100%", 900)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の画像関連 CSS プロパティ: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}
- {{cssxref("transform")}} および {{cssxref("rotate")}}
