---
title: image-set()
slug: Web/CSS/image/image-set
l10n:
  sourceCommit: 2a23f650d86d4f5d948614a607224a2bd52cca33
---

{{CSSRef}}

**`image-set()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)表記で、主に高解像度の画面において、指定されたセットから最も適切な CSS 画像をブラウザーに選択させる方法です。

解像度や帯域幅は、端末や ネットワークのアクセスによって異なります。`image-set()` 関数は、ユーザーの端末に最も適した画像解像度を提供します。画像オプションの集合を提供し、それぞれに関連する解像度宣言を付けて、そこからブラウザーが端末や設定に最も適したものを選び出します。解像度はファイルサイズのプロキシーとして使用することができます。高解像度の画面を持つ遅いモバイル接続のユーザーエージェントは、高解像度の画像を読み込むのを待つよりも、低解像度の画像を受信することを好むかもしれません。

`image-set()` はそれぞれのユーザーが必要なことを判断するのではなく、オプションを提供することができます。

## 構文

```css-nolint
/* 解像度に基づいて画像を選択 */
image-set(
  "image1.jpg" 1x,
  "image2.jpg" 2x
);

image-set(
  url("image1.jpg") 1x,
  url("image2.jpg") 2x
);

/* 解像度に基づいてグラデーションを選択 */
image-set(
  linear-gradient(blue, white) 1x,
  linear-gradient(blue, green) 2x
);

/* 対応しているファイル形式に基づいて画像を選択 */
image-set(
  url("image1.avif") type("image/avif"),
  url("image2.jpg") type("image/jpeg")
);
```

### 値

- `<image>`
  - : [`<image>`](/ja/docs/Web/CSS/image) は画像セット以外のあらゆる画像を指定できます。 `image-set()` 関数は他の `image-set()` 関数の中に入れ子にすることはできません。
- `<string>`
  - : 画像への URL です。
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/ja/docs/Web/CSS/resolution) の単位には、`x` や `dppx` (dots per pixel 単位)、dpi (dots per inch)、dpcm (dots per centimeter) があります。 `image-set()` 内の画像はすべて、解像度が固有でなければなりません。
- `type(<string>)`{{optional_inline}}
  - : 有効な MIME タイプの文字列、例えば "image/jpeg" です。

### 形式文法

{{csssyntax}}

## 例

### image-set() を使用して代替の background-image オプションの提供

この例は [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) を使用して 2 つの代替 {{cssxref("background-image")}} オプションを提供する方法を示しています。解像度の必要性に応じて、通常版と高解像度版から選択します。

{{EmbedGHLiveSample("css-examples/images/image-set.html", '100%', 600)}}

> **メモ:** 上記の例では、 `-webkit` の接頭辞が付いた版を Chrome および Safari に対応させるために併用しています。 Firefox 90 では（標準のプロパティを追加していない開発者の互換性を確保するために） `-webkit-image-set()` を `image-set()` の別名として使用する対応が追加されました。

### image-set() を使用して別な画像形式を提供

次の例では `type()` 関数を使用して画像を AVIF および JPEG 形式で提供しています。ブラウザーが avif に対応している場合は、このバージョンが選択されます。それ以外の場合は jpeg バージョンを使用します。

{{EmbedGHLiveSample("css-examples/images/image-set-type.html", '100%', 600)}}

#### 代替画像の提供

`image-set()` には内蔵のフォールバックはありません。したがって、この関数に対応していないブラウザーのための背景画像を設定するには、`image-set()` を使用する行の前に別の宣言が必要です。

```css
.box {
  background-image: url("large-balloons.jpg");
  background-image: image-set(
    "large-balloons.avif" type("image/avif"),
    "large-balloons.jpg" type("image/jpeg")
  );
}
```

## アクセシビリティの考慮

ブラウザーは支援技術に対して、背景画像についての特別な情報を何も提供しません。これは主に読み上げソフトにとって重要であり、読み上げソフトは背景画像が存在することをアナウンスせず、したがってユーザーには何も伝えられません。もし画像がページ全体の目的を理解するのに重要な情報を含んでいる場合は、文書中に意味的に記述するようにしてください。

- [MDN WCAG を理解する, ガイドライン 1.1 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("image")}}
- {{cssxref("image/image", "image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("url", "url()")}}
- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("cross-fade", "cross-fade()")}}
