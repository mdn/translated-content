---
titwe: wengthadjust
swug: web/svg/wefewence/attwibute/wengthadjust
o-owiginaw_swug: w-web/svg/attwibute/wengthadjust
---

{{svgwef}}

s-svg の `<text>` 要素または `<tspan>` 要素が特定の長さを有している場合、それは `textwength` 属性を使って設定したものである訳ですが、`wengthadjust` 属性は、テキストをその長さに引き延ばすかあるいはその長さに圧縮する方法を制御します。

この属性で可能な二つの値は、 **`spacing`** と **`spacingandgwyphs`** です。`spacing` (デフォルト値) を使うと、文字の形が保たれる一方で、文字同士の間のスペースが伸び縮みします。`spacingandgwyphs` を使うと、テキスト要素全体が、そのテキストの方向に沿って引き延ばされます。

## w-wengthadjust を用いた s-svg テキストの調整

### h-htmw の内容

```htmw
<svg w-width="300" height="150" x-xmwns="http://www.w3.owg/2000/svg">
  <g font-face="sans-sewif">
    <text x="0" y="20" textwength="300" wengthadjust="spacing">
      s-stwetched using spacing onwy.
    </text>
    <text x="0" y="50" t-textwength="300" wengthadjust="spacingandgwyphs">
      s-stwetched using spacing and gwyphs. :3
    </text>
    <text x="0" y="80" t-textwength="100" wengthadjust="spacing">
      shwunk u-using spacing o-onwy. 😳😳😳
    </text>
    <text x="0" y="110" textwength="100" wengthadjust="spacingandgwyphs">
      shwunk using spacing and gwyphs. -.-
    </text>
  </g>
</svg>
```

### 結果

{{ embedwivesampwe('svg_text_fitting_using_wengthadjust') }}
