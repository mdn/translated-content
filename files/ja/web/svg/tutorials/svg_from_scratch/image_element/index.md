---
title: SVG の image 要素
slug: Web/SVG/Tutorials/SVG_from_scratch/Image_element
l10n:
  sourceCommit: 8d0c8728f49f2a0577ca17910f2149d6dd36b37e
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Using_fonts", "Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}

SVG の {{ SVGElement("image") }} 要素により、ラスター画像を SVG オブジェクト内に描画することができます。

以下の基本的な例では、 {{ SVGAttr("href") }} 属性で参照されている .jpg 画像を SVG オブジェクト内に描画します。

```xml
<svg width="5cm" height="4cm"
     xmlns="http://www.w3.org/2000/svg">
  <image href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>
</svg>
```

いくつか注意すべき重要事項があります。

- `x` 属性や `y` 属性を指定しない場合、それらの値は `0` になります。
- `height` 属性や `width` 属性を指定しない場合、それらの値は `0` になります。
- `height` 属性または `width` 属性の値が `0` である場合、画像は描画されません。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Using_fonts", "Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}
