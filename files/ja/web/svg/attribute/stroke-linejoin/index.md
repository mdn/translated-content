---
title: stroke-linejoin
slug: Web/SVG/Attribute/stroke-linejoin
---

« [SVG 属性リファレンスホーム](/ja/docs/Web/SVG/Attribute)

`stroke-linejoin` 属性は線を引いた時のパスの曲がりまたは基本的な輪郭の形状を指定します。

プレゼンテーション属性のため、直接 CSS スタイルシートの中で定義したプロパティとして使うこともできます。

**注意:** `miter` オプションの最終的な見た目は [`stroke-miterlimit`](/ja/docs/Web/SVG/Attribute/stroke-miterlimit) 属性の値の影響を受けます。

## 使用可能な場所

| カテゴリ       | プレゼンテーション属性                                                                 |
| -------------- | -------------------------------------------------------------------------------------- |
| 値             | **miter** \| round \| bevel \| inherit                                                 |
| アニメーション | Yes                                                                                    |
| 標準文書       | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/painting.html#StrokeLinejoinProperty) |

## 例

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="300"
  viewBox="0 0 120 300"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <polyline
    stroke-linejoin="miter"
    points="-20,115 60,40 140,115"
    stroke="black"
    stroke-width="40"
    fill="none" />

  <polyline
    stroke-linejoin="round"
    points="-20,200 60,125 140,200"
    stroke="black"
    stroke-width="40"
    fill="none" />

  <polyline
    stroke-linejoin="bevel"
    points="-20,285 60,210 140,285"
    stroke="black"
    stroke-width="40"
    fill="none" />

  <path
    d="M-20,115 L60,40 L140,115 M-20,200 L60,125 L140,200 M-20,285 L60,210 L140,285"
    stroke="white"
    fill="none" />
</svg>
```

**Live sample**

{{ EmbedLiveSample('Example','120','300') }}

## 要素

以下の要素で `stroke-linejoin` 属性を使うことができます

- [Shape 要素](/ja/SVG/Element#Shape) »
- [Text content 要素](/ja/SVG/Element#TextContent) »

## 関連

- [stroke-miterlimit](/ja/docs/Web/SVG/Attribute/stroke-miterlimit)
