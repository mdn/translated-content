---
title: "HTMLImageElement: src プロパティ"
short-title: src
slug: Web/API/HTMLImageElement/src
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} の **`src`** プロパティは、HTML の [`src`](/ja/docs/Web/HTML/Element/img#src) 属性を反映し、{{HTMLElement("img")}} 要素に表示する画像を指定します。

## 値

単一の画像のみを指定し、ブラウザーがビューポートサイズと画面のピクセル密度に最適な画像を選択できるように複数の画像を指定しなかった場合、`src` 属性は希望する画像の URL を指定する文字列となります。これは、HTML の中で [`src`](/ja/docs/Web/HTML/Element/img#src) コンテンツ属性を用いて設定するか、プログラムによって要素の `src` プロパティを設定することで行うことができます。

[`srcset`](/ja/docs/Web/HTML/Element/img#srcset) コンテンツ属性を使って、画面のピクセル密度に応じた複数の画像の候補を提供する場合は、`src` 属性で指定された URL は、2 通りの方法で使用されます。

- `srcset` に対応していないブラウザーのための代替画像として使用します。
- `srcset` にサイズ倍率 `1x` で画像を指定したのと同等になります。つまり、`src` で指定した画像は、低密度の画面（ふつうの 72 DPI や 96 DPI ディスプレイなど）で使用されます。

さらに、`src` を {{domxref("HTMLImageElement.sizes", "sizes")}} （または、対応する [`sizes`](/ja/docs/Web/HTML/Element/img#sizes) コンテンツ属性）_および_ `srcset` の両方を使用して、ビューポートサイズに基づいて画像を選択する場合、 `src` 属性は `sizes` と `srcset` に対応していないブラウザーのための予備としてのみ使用されます。その他の場合は、全く使用されません。

## 例

### 単一の画像の指定

#### HTML

```html
<img
  src="grapefruit-slice-332-332.jpg"
  width="160"
  alt="グレープフルーツのスライスです。おいしそう。" />
```

#### 結果

{{EmbedLiveSample("Specifying_a_single_image", 640,200)}}

### 一連の画像を src で使用

一連の画像を {{domxref("HTMLImageElement.srcset", "srcset")}} プロパティで使用する場合、`src` は古いブラウザー用の予備画像として、あるいは画像の `1x` サイズとして機能します。

#### HTML

#### 結果

### ビューポートベース選択時の代替画像の指定

ビューポートベースで画像を選択する際に、{{domxref("HTMLImageElement.sizes", "sizes")}} プロパティも指定して `srcset` から選択すると、`src` プロパティはビューポートベースでの選択に対応していないブラウザーで使用される代替画像として機能します。ビューポートベースの選択に対応しているブラウザーは、この場合は `src` を無視します。

#### HTML

#### 結果

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
