---
title: stroke-linecap
slug: Web/SVG/Attribute/stroke-linecap
---

« [SVG 属性リファレンスホーム](/ja/docs/Web/SVG/Attribute)

`stroke-linecap` 要素は線を引いた時の開いている部分パスの終端の形状を指定します。

プレゼンテーション属性であるため、直接 CSS スタイルシートの中で定義したプロパティとして使うこともできます。

## 使用可能な場所

| カテゴリ       | プレゼンテーション属性                                                                |
| -------------- | ------------------------------------------------------------------------------------- |
| 値             | butt \| round \| square \| inherit                                                    |
| アニメーション | Yes                                                                                   |
| 標準文書       | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/painting.html#StrokeLinecapProperty) |

## 例

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <line
    stroke-linecap="butt"
    x1="30"
    y1="30"
    x2="30"
    y2="90"
    stroke="black"
    stroke-width="20" />

  <line
    stroke-linecap="round"
    x1="60"
    y1="30"
    x2="60"
    y2="90"
    stroke="black"
    stroke-width="20" />

  <line
    stroke-linecap="square"
    x1="90"
    y1="30"
    x2="90"
    y2="90"
    stroke="black"
    stroke-width="20" />

  <path d="M30,30 L30,90 M60,30 L60,90 M90,30 L90,90" stroke="white" />
</svg>
```

**Live sample**

{{ EmbedLiveSample('Example','120','120') }}

## 要素

以下の要素で `stroke-linecap` を使うことができます

- [Shape 要素](/ja/docs/Web/SVG/Element#Shape) »
- [Text content 要素](/ja/docs/Web/SVG/Element#TextContent) »
