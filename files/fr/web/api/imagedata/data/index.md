---
title: ImageData.data
slug: Web/API/ImageData/data
translation_of: Web/API/ImageData/data
---
{{APIRef("Canvas API")}}

La propriété en lecteur seul `ImageData.data` retourne un {{jsxref("Uint8ClampedArray")}}. Il représente un tableau unidirectionnel contenant les données sous forme d'entiers inclus entre 0 et 255 dans l'ordre RGBA comme ceci&nbsp;: `[r1,g1,b1,a1,…,rn;gn;bn;an]`.

## Syntax

    imagedata.data

## Exemple

```js
var imagedata = new ImageData(100, 100);
imagedata.data; // Uint8ClampedArray[40000]
```

## Specification

| Specification                                                                                                | Status                           | Comment |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'scripting.html#dom-imagedata-data', 'ImageData.data')}} | {{Spec2('HTML WHATWG')}} |         |

## Browser compatibility

{{Compat("api.ImageData.data")}}

## See also

- {{domxref("ImageData.height")}}
- {{domxref("ImageData.width")}}
