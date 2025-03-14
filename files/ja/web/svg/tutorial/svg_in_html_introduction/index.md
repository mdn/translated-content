---
title: HTML 内の SVG 入門
slug: Web/SVG/Tutorial/SVG_In_HTML_Introduction
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{SVGRef}}

## 概要

この記事と関連する例は、インライン [SVG](/ja/docs/Web/SVG) を使用する方法を示しています。

## 基本的な例

HTML ファイルにインライン SVG を記述するには、 SVG ファイル全体を HTML ファイルに貼り付けます。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>SVG デモ</title>
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" role="img">
      <title>グラデーション</title>
      <linearGradient id="gradient">
        <stop class="begin" offset="0%" stop-color="red" />
        <stop class="end" offset="100%" stop-color="black" />
      </linearGradient>
      <rect x="0" y="0" width="100" height="100" style="fill:url(#gradient)" />
      <circle cx="50" cy="50" r="30" style="fill:url(#gradient)" />
    </svg>
  </body>
</html>
```

## 解説

このページは通常の HTML と CSS で、単一の SVG があります。唯一の興味深い部分は `<svg>` 要素です。この要素とその子要素は SVG 名前空間にあると宣言されています。要素にはグラデーションと、グラデーションで塗りつぶされた 2 つの図形が格納されています。グラデーションの色経由点は CSS によって設定されています。

特筆すべきは 3 つの属性と 1 つの入れ子要素です。

1. [`viewBox`](/ja/docs/Web/SVG/Attribute/viewBox) 属性は、 SVG 画像の座標が相対的である論理座標系を確立します。この場合、画像は 100 x 100 のビューポートに配置されます。

2. [`preserveAspectRatio`](/ja/docs/Web/SVG/Attribute/preserveAspectRatio) 属性は、利用できるサイズで画像を中央に配置し、高さや幅の最大値まで変倍し、はみ出した部分をカットすることで、アスペクト比を保持することを指定します。

3. [`role="img"`](/ja/docs/Web/Accessibility/ARIA/Roles/img_role) を記載することで、支援技術が SVG を画像として処理することを保証します。

4. SVG 内の [`<title>`](/ja/docs/Web/SVG/Element/title) はグラフィックのアクセシビリティのための短いテキストによる説明を提供します。タイトルテキストは描画されませんが、ブラウザーは SVG にポインターを乗せた時にツールチップとして表示することがあります。 `<title>` は `<svg>` 開始タグの後の最初の要素でなければなりません。

## ベストプラクティス

SVG が {{HTMLElement('img')}} 要素を介して記述される場合、 `alt` 属性は画像にアクセシビリティ向けの代替テキストを提供します。インライン SVG は `alt` 属性に対応していません。しかし、他にもアクセシビリティを持たせるいくつかの方法に対応しています。インライン SVG では元のオブジェクト内のソースが DOM で利用できるため、インライン SVG ファイル内のすべてのマークアップがアクセシビリティオブジェクトモデル (AOM) でアクセスできることを意味しています。 `<title>` 要素を記述することで代替テキストを提供します。

画像が短いタイトル以上のことを伝える場合は、 [`<desc>`](/ja/docs/Web/SVG/Element/desc) 要素で詳しい説明を記載してください。 `<desc>` 要素はアクセシビリティのための長文の説明を提供します。 `<title>` テキストと同様に、 `<desc>` 内のテキストは画面に描画されません。

SVG が可視テキストでラベル付けできる場合、そのテキストを [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 属性で参照します。あるいは、 `<title>` の [`id`](/ja/docs/Web/SVG/Attribute/id) に `aria-labelledby` 属性を記述します。

```html
<svg viewBox="0 0 100 125" role="img" aria-labelledby="svgTitle svgDescription">
  <title id="svgTitle">Manual</title>
  <desc id="svgDescription">
    A non-descript twelve page booklet opened to the middle page
  </desc>
  <defs>
    <style>
      rect {
        fill: #cccccc;
        stroke: #666;
        transform-origin: top;
      }
    </style>
  </defs>

  <rect
    width="36"
    height="60"
    x="13"
    y="18"
    ry="2"
    style="transform: skewy(24deg)" />
  <rect
    width="39"
    height="60"
    x="11"
    y="20"
    ry="2"
    style="transform: skewy(18deg)" />
  <rect
    width="42"
    height="90"
    x="8"
    y="22"
    ry="2"
    style="transform: skewy(12deg)" />
  <rect
    width="36"
    height="60"
    x="50"
    y="18"
    ry="2"
    style="transform: skewy(-24deg)" />
  <rect
    width="39"
    height="60"
    x="50"
    y="20"
    ry="2"
    style="transform: skewy(-18deg)" />
  <rect
    width="42"
    height="90"
    x="50"
    y="22"
    ry="2"
    style="transform: skewy(-12deg)" />
</svg>
```

SVG が可視テキストで記述できる場合、そのテキストは [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 属性で参照することができます。 aria-describedby を使用する場合、 `<desc>` よりも優先されます。

この例では、 `aria-labelledby` 属性は `aria-describedby` 属性よりも支援技術に対応しているため、説明文とタイトルの両方を記載しています。

## 関連情報

- [SVG を始めましょう](/ja/docs/Web/SVG/Tutorial/Getting_Started)
