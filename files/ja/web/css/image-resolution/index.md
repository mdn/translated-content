---
title: image-resolution
slug: Web/CSS/image-resolution
tags:
  - CSS
  - CSS 画像
  - CSS プロパティ
  - 実験的
  - Reference
  - image-resolution
browser-compat: css.properties.image-resolution
translation_of: Web/CSS/image-resolution
---
{{CSSRef}}{{SeeCompatTable}}

**`image-resolution`** は [CSS](/ja/docs/Web/CSS) のプロパティで、この要素で使用されているすべてのラスター画像の内在解像度を指定します。これは置換要素や生成コンテンツ、`background-image` のような装飾画像などのコンテンツ画像に作用します。

画像の解像度は、単位の長さあたりの画像ピクセル数として定義されています (例: 1 インチあたりのピクセル数)。既定では、CSS は CSS ピクセル単位に 1 つの画像ピクセルの解像度を想定していますが、`image-resolution` プロパティを使用することで、異なる解像度を指定することができます。

## 構文

```css
image-resolution: from-image;
image-resolution: 300dpi;
image-resolution: from-image 300dpi;
image-resolution: 300dpi snap;

/* Global values */
image-resolution: inherit;
image-resolution: initial;
image-resolution: revert;
image-resolution: unset;
```

### 値

- `{{cssxref("&lt;resolution&gt;")}}`
  - : 内在解像度を明示的に指定します。
- `from-image`
  - : 画像形式で指定された内在解像度を使用します。画像が自身の解像度を指定しなかった場合、明示的に指定された解像度が (与えられていれば) 使用し、そうでなければ既定で `1dppx` (1 画像ピクセル毎 CSS ピクセル)となります。
- `snap`
  - : `snap` キーワードが指定された場合、計算された解像度は、指定された解像度を、画像の 1 ピクセルを端末の整数のピクセルにマッピングする最も近い値に丸めたものになります。解像度が画像から取得された場合、使用される固有の解像度は、画像のネイティブ解像度を同様に調整したものになります。

> **Note:** SVG などのベクター形式は内在解像度を持たないので、このプロパティはベクター画像には影響しません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 印刷用に高い dpi を設定

文書を印刷する場合、より高い解像度を使用します。

```css
@media print {
  .myimage {
    image-resolution: 300dpi;
  }
}
```

### フォールバック付きの画像の解像度を使用する

画像から解像度を使用します。画像に解像度がない場合は、既定の 1dppx ではなく 300dpi を使用します。

```css
.myimage {
  image-resolution: from-image 300dpi;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の画像に関する CSS プロパティ: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}.
- [Chromium bug: 1086473](https://bugs.chromium.org/p/chromium/issues/detail?id=1086473).
