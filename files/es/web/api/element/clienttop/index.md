---
title: element.clientTop
slug: Web/API/Element/clientTop
tags:
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Element/clientTop
---
{{ ApiRef() }}

### Resumen

El ancho del borde superior de un elemento en pixel. No incluye ni el*margin-top* , ni el*padding-top* . `clientTop` es de sólo lectura.

Las aplicaciones "[Gecko](es/Gecko)-based applications" implementan el uso de `clientTop` a partir de Gecko 1.9 ([Firefox 3](es/Firefox_3),ver {{ Bug(111207) }}). Esta propiedad no está disponible en Firefox 2 o anteriores.

### Sintaxis

```
vartop = element.clientTop;
```

### Ejemplo

padding-top

Suave, individualista y muy leal, los gatos de Birmania tienen un carácter entre los persas y los siameses. Si le gustan los gatos que no son agresivos, disfrutan estar entre los humanos y son generalmente tranquilos, esta es la raza para usted.

<img alt="Image:BirmanCat.jpg">Todos los Birmanos tienen pintas y coloración obscura en la cara, orejas, patas y cola.

La imagen del gato y el texto vienen de [www.best-cat-art.com](http://www.best-cat-art.com/)

padding-bottom

**Left\*\***Top\***\*Right\*\***Bottom\*\*_margin-top**margin-bottom**border-top\_\_border-bottom_{{ mediawiki.external('if IE') }}>\<span id="MrgLeft" style="position: absolute; left: 8px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">margin-left\</span>\<span id="BrdLeft" style="position: absolute; left: 33px; top: 65px; color: white; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">border-left\</span>\<span id="PdgLeft" style="position: absolute; left: 55px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">padding-left\</span>\<span id="PdgRight" style="position: absolute; left: 275px; top: 60px; color: black; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl; white-space: nowrap;">padding-right\</span>\<span id="BrdRight" style="position: absolute; left: 310px; top: 65px; color: white; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">border-right\</span>\<span id="MrgRight" style="position: absolute; left: 340px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">margin-right\</span>\<!{{ mediawiki.external('endif') }}

<img alt="Image:clientTop.png">

### Especificación

No es parte de ninguna especificación W3C.

### Notas

`clientTop` se presento por primera vez en el modelo de objetos de MS IE DHTML.

### Referencias

- [MSDN's clientTop definition](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/clienttop.asp?frame=true)
- [MSDN's Measuring Element Dimension and Location](http://msdn.microsoft.com/workshop/author/om/measuring.asp)
