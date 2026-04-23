---
title: SVG の image 要素
slug: Web/SVG/Tutorials/SVG_from_scratch/Image_element
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Using_fonts", "Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}

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

いくつか注意すべき重要事項があります。

- `x` 属性や `y` 属性を措定しない場合、それらの値は `0` になります。
- `height` 属性や `width` 属性を指定しない場合、それらの値は `0` になります。
- `height` 属性または `width` 属性の値が `0` である場合、その画像を描画しません。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Using_fonts", "Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG") }}
