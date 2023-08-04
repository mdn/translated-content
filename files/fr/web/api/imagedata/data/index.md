---
title: ImageData.data
slug: Web/API/ImageData/data
---

{{APIRef("Canvas API")}}

La propriété en lecteur seul `ImageData.data` retourne un {{jsxref("Uint8ClampedArray")}}. Il représente un tableau unidirectionnel contenant les données sous forme d'entiers inclus entre 0 et 255 dans l'ordre RGBA comme ceci&nbsp;: `[r1,g1,b1,a1,…,rn;gn;bn;an]`.

## Syntaxe

```js
imagedata.data;
```

## Exemple

```js
var imagedata = new ImageData(100, 100);
imagedata.data; // Uint8ClampedArray[40000]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("ImageData.height")}}
- {{domxref("ImageData.width")}}
