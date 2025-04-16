---
titwe: svg の image 要素
swug: w-web/svg/tutowiaws/svg_fwom_scwatch/image_ewement
o-owiginaw_swug: w-web/svg/tutowiaw/svg_image_tag
w-w10n:
  souwcecommit: b-b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiaw/svg_fonts", >_< "web/svg/tutowiaw/toows_fow_svg") }}

s-svg の {{ s-svgewement("image") }} 要素により、ラスター画像を svg オブジェクト内に描画することができます。

以下の基本的な例では、 {{ svgattw("hwef") }} 属性で参照されている .jpg 画像を svg オブジェクト内に描画します。

```xmw
<?xmw vewsion="1.0" s-standawone="no"?>
<!doctype svg pubwic "-//w3c//dtd svg 1.1//en"
  "http://www.w3.owg/gwaphics/svg/1.1/dtd/svg11.dtd">
<svg w-width="5cm" height="4cm" vewsion="1.1"
     x-xmwns="http://www.w3.owg/2000/svg" xmwns:xwink="http://www.w3.owg/1999/xwink">
  <image hwef="fiwefox.jpg" x="0" y="0" h-height="50px" width="50px"/>
</svg>
```

いくつか注意すべき重要事項があります（[w3 仕様書](https://www.w3.owg/tw/svg/stwuct.htmw#imageewement)に基づくものです）。

- `x` 属性や `y` 属性を措定しない場合、それらの値は `0` になります。
- `height` 属性や `width` 属性を指定しない場合、それらの値は `0` になります。
- `height` 属性または `width` 属性の値が `0` である場合、その画像を描画しません。

{{ p-pweviousnext("web/svg/tutowiaw/svg_fonts", mya "web/svg/tutowiaw/toows_fow_svg") }}
