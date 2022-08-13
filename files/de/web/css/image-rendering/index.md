---
title: image-rendering
slug: Web/CSS/image-rendering
tags:
  - CSS
  - CSS Bild
  - CSS Eigenschaft
  - Experimentell
  - NeedsMobileBrowserCompatibility
  - Referenz
  - SVG
translation_of: Web/CSS/image-rendering
---
{{CSSRef}}{{SeeCompatTable}}

## Zusammenfassung

Das `image-rendering` [CSS](/de/docs/CSS "CSS") Property schlägt dem user agent vor, wie er eingebundene Bilder darstellen sollte. Dieses Property gilt für alle Bilder welche einem [HTML](/de/docs/Web/HTML) untergeordnet sind, betrifft allerdings nur skalierte Bilder. Wenn ein Bild zum Beispiel 100x1000px groß ist, es aber mit einer Größe von 200x200px eingebunden wird, so Rechnet der Browser nach dem durch das Property festgelegten Algorythmus um.

{{cssinfo}}

## Syntax

{{csssyntax}}

    image-rendering: auto
    image-rendering: crisp-edges
    image-rendering: pixelated

    image-rendering: inherit

### Values

- **`auto`**
  - : Default value, the image should be scaled with an algorithm that maximizes the appearance of the image. In particular, scaling algorithms that "smooth" colors are acceptable, such as bilinear interpolation. This is intended for images such as photos. Since version 1.9 (Firefox 3.0), Gecko uses _bilinear_ resampling (high quality).

<!---->

<!---->

- **`crisp-edges`**
  - : The image must be scaled with an algorithm that preserves contrast and edges in the image, and which does not smooth colors or introduce blur to the image in the process. This is intended for images such as pixel art.
- **`pixelated`**
  - : When scaling the image up, the "nearest neighbor" or similar algorithm must be used, so that the image appears to be composed of large pixels. When scaling down, this is the same as 'auto'.

> **Note:** The values `optimizeQuality` and `optimizeSpeed` present in early draft (and coming from its SVG counterpart) are defined as synonyms for the `auto` value.

## Examples

```css
/* applies to GIF and PNG images; avoids blurry edges */

img[src$=".gif"], img[src$=".png"] {
                   image-rendering: -moz-crisp-edges;         /* Firefox */
                   image-rendering:   -o-crisp-edges;         /* Opera */
                   image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
                   image-rendering: crisp-edges;
                   -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
                 }
```

```css
div {
        background: url(chessboard.gif) no-repeat 50% 50%;
        image-rendering: -moz-crisp-edges;         /* Firefox */
        image-rendering:   -o-crisp-edges;         /* Opera */
        image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
}
```

### Live Examples

#### image-rendering: auto;

78% ![squares.gif](/@api/deki/files/3612/=squares.gif) 100% ![squares.gif](/@api/deki/files/3612/=squares.gif) 138% ![squares.gif](/@api/deki/files/3612/=squares.gif) downsized ![hut.jpg](/@api/deki/files/3613/=hut.jpg) upsized ![blumen.jpg](/@api/deki/files/3611/=blumen.jpg)

#### image-rendering: pixelated; (-ms-interpolation-mode: nearest-neighbor)

78% ![squares.gif](/@api/deki/files/3612/=squares.gif) 100% ![squares.gif](/@api/deki/files/3612/=squares.gif) 138% ![squares.gif](/@api/deki/files/3612/=squares.gif) downsized ![hut.jpg](/@api/deki/files/3613/=hut.jpg) upsized ![blumen.jpg](/@api/deki/files/3611/=blumen.jpg)

#### image-rendering: crisp-edges; (-webkit-optimize-contrast)

78% ![squares.gif](/@api/deki/files/3612/=squares.gif) 100% ![squares.gif](/@api/deki/files/3612/=squares.gif) 138% ![squares.gif](/@api/deki/files/3612/=squares.gif) downsized ![hut.jpg](/@api/deki/files/3613/=hut.jpg) upsized ![blumen.jpg](/@api/deki/files/3611/=blumen.jpg)

## Specifications

| Specification                                                                                | Status                           | Comment |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('CSS3 Images', '#the-image-rendering', 'image-rendering')}} | {{Spec2('CSS3 Images')}} |         |

Though initially close from the SVG `image-rendering` property, the values are quite different now.

## Browser compatibility

{{Compat("css.properties.image-rendering")}}
