---
title: SVG の image 要素
slug: Web/SVG/Tutorial/SVG_Image_Tag
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}

SVG の {{ SVGElement("image") }} 要素により、ラスター画像を SVG オブジェクト内に描画することができます。

以下の基本的な例では、 {{ SVGAttr("href") }} 属性で参照されている .jpg 画像を SVG オブジェクト内に描画します。

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="5cm" height="4cm" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <image href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>
</svg>
```

いくつか注意すべき重要事項があります（[W3 仕様書](https://www.w3.org/TR/SVG/struct.html#ImageElement)に基づくものです）。

- `x` 属性や `y` 属性を措定しない場合、それらの値は `0` になります。
- `height` 属性や `width` 属性を指定しない場合、それらの値は `0` になります。
- `height` 属性または `width` 属性の値が `0` である場合、その画像を描画しません。

{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}
