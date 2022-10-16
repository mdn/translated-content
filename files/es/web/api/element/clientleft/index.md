---
title: element.clientLeft
slug: Web/API/Element/clientLeft
tags:
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Element/clientLeft
---
{{ ApiRef("DOM") }}

### Resumen

El ancho del borde izquierdo de un elemento en pixel. Incluye el ancho de la barra de desplazamiento vertical, si la dirección del texto es*rtl* (derecha a izquierda) y si hay un desbordamiento que provoque la aparición de la barra en el lado izquierdo. `clientLeft` NO incluye*margin-left* o padding-left*. `clientLeft` es de sólo lectura.*

Las aplicaciones "[Gecko](es/Gecko)-based applications" implementan `clientLeft` a partir de Gecko 1.9 ([Firefox 3](es/Firefox_3), ver {{ Bug(111207) }}). Esta propiedad no está implementada en Firefox 2 o anteriores.

### Sintaxis

```
var left = element.clientLeft;
```

### Ejemplo

padding-top

Suave, individualista y muy leal, los gatos de Birmania tienen un carácter entre los persas y los siameses. Si le gustan los gatos que no son agresivos, disfrutan estar entre los humanos y son generalmente tranquilos, esta es la raza para usted.

<img alt="Image:BirmanCat.jpg">Todos los Birmanos tienen pintas y coloración obscura en la cara, orejas, patas y cola.

La imagen del gato y el texto vienen de [www.best-cat-art.com](http://www.best-cat-art.com/)

padding-bottom

**Left\*\***Top\***\*Right\*\***Bottom\*\*_margin-top**margin-bottom**border-top\_\_border-bottom_{{ mediawiki.external('if IE') }}>\<span id="MrgLeft" style="position: absolute; left: 8px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">margin-left\</span>\<span id="BrdLeft" style="position: absolute; left: 33px; top: 65px; color: white; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">border-left\</span>\<span id="PdgLeft" style="position: absolute; left: 55px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">padding-left\</span>\<span id="PdgRight" style="position: absolute; left: 275px; top: 60px; color: black; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl; white-space: nowrap;">padding-right\</span>\<span id="BrdRight" style="position: absolute; left: 310px; top: 65px; color: white; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">border-right\</span>\<span id="MrgRight" style="position: absolute; left: 340px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">margin-right\</span>\<!{{ mediawiki.external('endif') }}

<img alt="Image:clientLeft.png">

<img alt="La barra de desplazamiento vertical en el lado izquierdo, aparece cuando la propiedad layout.scrollbar.side tiene el valor 1 o 3">

Cuando la propiedad [_layout.scrollbar.side_ ](http://kb.mozillazine.org/Layout.scrollbar.side)se establece a 1 o a 3 y la dirección de texto está puesta a RTL, **entonces la barra de desplazamiento se pone a la izquierda** y esto afecta a la forma en que se calcula clientLeft.

### Especificación

No es parte de ninguna especificación W3C.

### Notas

`clientLeft` apareció por primera vez en el modelo de objetos de MS IE DHTML.

La posición de la barra de desplazamiento vertical en textos*rtl* depende de la preferencias de [_layout.scrollbar.side_](http://kb.mozillazine.org/Layout.scrollbar.side)

### Referencias

- [MSDN's clientLeft definition](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/clientleft.asp?frame=true)
- [MSDN's Measuring Element Dimension and Location](http://msdn.microsoft.com/workshop/author/om/measuring.asp)
