---
title: lengthAdjust
slug: Web/SVG/Attribute/lengthAdjust
---

SVG の `<text>` 要素または `<tspan>` 要素が特定の長さを有している場合、それは `textLength` 属性を使って設定したものである訳ですが、`lengthAdjust` 属性は、テキストをその長さに引き延ばすかあるいはその長さに圧縮する方法を制御します。

この属性で可能な二つの値は、 **`spacing`** と **`spacingAndGlyphs`** です。`spacing` (デフォルト値) を使うと、文字の形が保たれる一方で、文字同士の間のスペースが伸び縮みします。`spacingAndGlyphs` を使うと、テキスト要素全体が、そのテキストの方向に沿って引き延ばされます。

## lengthAdjust を用いた SVG テキストの調整

### HTML の内容

```html
<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
  <g font-face="sans-serif">
    <text x="0" y="20" textLength="300" lengthAdjust="spacing">
      Stretched using spacing only.
    </text>
    <text x="0" y="50" textLength="300" lengthAdjust="spacingAndGlyphs">
      Stretched using spacing and glyphs.
    </text>
    <text x="0" y="80" textLength="100" lengthAdjust="spacing">
      Shrunk using spacing only.
    </text>
    <text x="0" y="110" textLength="100" lengthAdjust="spacingAndGlyphs">
      Shrunk using spacing and glyphs.
    </text>
  </g>
</svg>
```

### 結果

{{ EmbedLiveSample('SVG_text_fitting_using_lengthAdjust') }}
