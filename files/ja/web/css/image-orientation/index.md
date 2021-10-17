---
title: image-orientation
slug: Web/CSS/image-orientation
tags:
  - CSS
  - CSS 画像
  - CSS プロパティ
  - EXIF
  - 実験的
  - 画像補正
  - 画像の向き
  - Deprecated
  - 向き
  - Reference
  - image-orientation
  - recipe:css-property
browser-compat: css.properties.image-orientation
translation_of: Web/CSS/image-orientation
---
**`image-orientation`** は [CSS](/ja/docs/Web/CSS) のプロパティで、画像の向きのレイアウトに依存しない修正を指定します。

> **Note:** `from-image` と `none` 以外の値は、仕様書では非推奨とされています。

```css
/* キーワード値 */
image-orientation: none;
image-orientation: from-image; /* 画像の EXIF データを使用 */

/* グローバル値 */
image-orientation: inherit;
image-orientation: initial;
image-orientation: revert;
image-orientation: unset;

/* 廃止された値 {{obsolete_inline(63)}} */
image-orientation: 90deg; /* 90度回転 */
image-orientation: 90deg flip; /* 90度回転して、水平方向に反転 */
image-orientation: flip; /* 回転せず、水平方向の反転のみ適用 */
```

## 構文

### 値

- `none`
  - : 既定の初期値です。追加の画像の回転を適用しません。画像はエンコードされた方向、または他の CSS プロパティの値で決められた方向になります。
- `from-image`
  - : 画像に含まれている {{interwiki("wikipedia", "EXIF")}} 情報を使用して、画像の向きを適切にします。
- {{cssxref("&lt;angle&gt;")}}{{deprecated_inline}}
  - : 画像を回転させる {{cssxref("&lt;angle&gt;")}}。 もっとも近い `90deg` (`0.25turn`) 単位の値に丸められます。
- `flip`{{deprecated_inline}}
  - : {{cssxref("&lt;angle&gt;")}} 値に従って回転した後に、画像を水平方向に反転します (つまり鏡像にします)。{{cssxref("&lt;angle&gt;")}} を指定しない場合は、 `0deg` が使用されます。

## 解説

このプロパティは、回転したカメラで撮影された画像の方向を修正するため*だけ*を目的としています。自由に回転させるために使用するべきでは*ありません*。撮影やスキャンで回転してしまった画像の向きを修正する以外の用途の場合は、{{cssxref("transform")}} プロパティに `rotate` キーワードを付けて回転を指定してください。これはユーザーによる画像の向きの変更や、印刷時に縦向きと横向きを変更する必要がある場合も含みます。

{{cssxref("&lt;transform-function&gt;")}} などの他の CSS プロパティとの組み合わせで使用された場合、 `image-orientation` による回転は、常に他の変形が行われる前に適用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Orienting_image_from_image_data">画像データから画像の向きを変更</h3>

#### CSS

```css
#image {
  image-orientation: from-image; /* ライブ例の中で変更することができます */
}
```

```html hidden
<img id="image" src="mdn.svg"
    alt="Orientation taken from the image">
<select id="imageOrientation">
  <option value="from-image">from-image</option>
  <option value="none">none</option>
</select>
```

```js hidden
var imageOrientation = document.getElementById("imageOrientation");
imageOrientation.addEventListener("change", function (evt) {
  document.getElementById("image").style.imageOrientation = evt.target.value;
});
```

#### 結果

{{EmbedLiveSample("Orienting_image_from_image_data", "100%", 240)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の画像関連 CSS プロパティ: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}
- {{cssxref("transform")}} および {{cssxref("rotate")}}

{{CSSRef}}
