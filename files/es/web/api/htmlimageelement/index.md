---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
tags:
  - API
  - HTML DOM
  - Interfaz
  - Reference
translation_of: Web/API/HTMLImageElement
---
{{APIRef("HTML DOM")}}

La interfaz **`HTMLImageElement`** provee de propiedas especiales y métodos (más allá de las interfaces {{domxref("HTMLElement")}}, también tiene disponible la herencia) para manipular el diseño y la presentación de elementos {{HTMLElement("img")}}.

## Propiedades

_Heredadas de su padre, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.align")}} {{obsolete_inline}}
  - : Es un {{domxref("DOMString")}} que indica el alineamiento de la imagen respecto al contexto que la rodea.
- {{domxref("HTMLImageElement.alt")}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML {{htmlattrxref("alt", "img")}}, indicando texto de respaldo a la imagen.
- {{domxref("HTMLImageElement.border")}} {{obsolete_inline}}
  - : Es un {{domxref("DOMString")}} que indica el ancho del borde alrededor de la imagen. Este está desaprobado y debe usarse la propiedad CSS {{cssxref("border")}} en su lugar.
- {{domxref("HTMLImageElement.complete")}} {{readonlyInline}}
  - : Devuelve un {{domxref("Boolean")}} que es `true` si el navegador ha terminado de buscar la imagen, sea o no exitoso. También devuelve `true` si la imagen no tiene valor {{domxref("HTMLImageElement.src", "src")}}.
- {{domxref("HTMLImageElement.crossOrigin")}}
  - : Es un {{domxref("DOMString")}} representa la configuración CORS para el elemento imagen. Ver [Atributos de configuración CORS](/es/docs/Web/HTML/Atributos_de_configuracion_CORS) para más detalles.
- {{domxref("HTMLImageElement.currentSrc")}} {{readonlyInline}}{{experimental_inline}}
  - : Devuelve un {{domxref("DOMString")}}
- {{domxref("HTMLImageElement.height")}}
  - : Es un `unsigned long` que refleja el atributo HTML {{htmlattrxref("height", "img")}}, indica el alto de la imagen en píxeles CSS.
- {{domxref("HTMLImageElement.hspace")}} {{obsolete_inline}}
  - : Es un `long` que representa el espacio a izquierda y derecha de la imagen.
- {{domxref("HTMLImageElement.isMap")}}
  - : Es un {{domxref("Boolean")}} que refleja el atributo HTML {{htmlattrxref("ismap", "img")}}, indica que la imagen es parte del mapa de imagen del lado del servidor.
- {{domxref("HTMLImageElement.longDesc")}} {{obsolete_inline}}
  - : Es un {{domxref("DOMString")}} que representa la URI de una larga descripción de la imagen.
- {{domxref("HTMLImageElement.lowSrc")}} {{obsolete_inline}}
  - : Es un {{domxref("DOMString")}} que referencia una copia de la imagen en mala calidad (pero más rápida cargando)
- {{domxref("HTMLImageElement.name")}} {{obsolete_inline}}
  - : Es un {{domxref("DOMString")}}.
- {{domxref("HTMLImageElement.naturalHeight")}} {{readonlyInline}}
  - : Devuelve un `unsigned long` que representa el alto intrínseco de la imagen en píxeles CSS, si está disponible, de otro modo, es 0.
- {{domxref("HTMLImageElement.naturalWidth")}} {{readonlyInline}}
  - : Devuelve un `unsigned long` que representa el ancho intrínseco de la imagen en píxeles CSS, si está disponible, de otro modo, es 0.
- {{domxref("HTMLImageElement.referrerPolicy")}} {{experimental_inline}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML {{htmlattrxref("referrerpolicy", "img")}} indica la referencia a usar para buscar la imagen.
- {{domxref("HTMLImageElement.src")}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML {{htmlattrxref("src", "img")}} HTML attribute, contiene la URL completa de la imagen, incluido la base del URI
- {{domxref("HTMLImageElement.sizes")}} {{experimental_inline}}
  - : Es un {{domxref("DOMString")}}
- {{domxref("HTMLImageElement.srcset")}} {{experimental_inline}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML {{htmlattrxref("srcset", "img")}}, contiene una ista de imágenes candidatas, separadas por una coma (`',', U+002C COMMA`). Una imagen candidata es una URL seguida por `'w'` con el ancho, o una `'x'` seguida de la densidad del píxel.
- {{domxref("HTMLImageElement.useMap")}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML {{htmlattrxref("usemap", "img")}}, contiene una URL parcial del mapa del elemento.
- {{domxref("HTMLImageElement.vspace")}} {{obsolete_inline}}
  - : Es un `long` que representa el espacio sobre y bajo la imagen.
- {{domxref("HTMLImageElement.width")}}
  - : Es un `unsigned long` que refleja el atributo HTML {{htmlattrxref("width", "img")}}, indica el ancho de la imagen en píxeles CSS.
- {{domxref("HTMLImageElement.x")}} {{readonlyInline}}{{experimental_inline}}
  - : Devuelve un `long` que representa el hueco horizontal hasta la capa más cercana. Esta propiedad copia el comportamiento de Netscape 4.
- {{domxref("HTMLImageElement.y")}} {{readonlyInline}} {{experimental_inline}}
  - : Devuelve un `long` que representa el hueco vertical hasta la capa más cercana. Esta propiedad copia el comportamiento de Netscape 4.

## Métodos

_Heredados de su padre, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.Image()", "Image()")}}
  - : El constructor `Image()`, toma dos `unsigned long` opcionales, ancho y alto del recurso, crea una instacia de creates `HTMLImageElement` no insertada en el árbol DOM.

## Ejemplo

```js
var img1 = new Image(); // HTML5 Constructor
img1.src = 'image1.png';
img1.alt = 'alt';
document.body.appendChild(img1);

var img2 = document.createElement('img'); // Uso DOM HTMLImageElement
img2.src = 'image2.jpg';
img2.alt = 'alt text';
document.body.appendChild(img2);

// Usando la primera imagen en el documento
alert(document.images[0].src);
```

## Especificiaciones

| Especicifación                                                                                                                                   | Estado                               | Comentario                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Referrer Policy', '#referrer-policy-delivery-referrer-attribute', 'referrer attribute')}}         | {{Spec2('Referrer Policy')}} | Añadida la propiedad `referrerPolicy`.                                                                                                                                                                                                                                                                                                                                    |
| {{SpecName("CSSOM View", "#excensions-to-the-htmlimageelement-interface", "Extensions to HTMLImageElement")}} | {{Spec2('CSSOM View')}}     | Añadidas propiedades `x` e `y`                                                                                                                                                                                                                                                                                                                                            |
| {{SpecName('HTML WHATWG', "embedded-content.html#the-img-element", "HTMLImageElement")}}                             | {{Spec2('HTML WHATWG')}}     | Las siguientes propiedades han sido añadidas: `srcset`, `currentSrc` y `sizes`.                                                                                                                                                                                                                                                                                           |
| {{SpecName('HTML5 W3C', "embedded-content-0.html#the-img-element", "HTMLImageElement")}}                             | {{Spec2('HTML5 W3C')}}         | Un constructor (con 2 parámetros opcionales) añadido. Las siguientes propiedades quedaron obsoletas: `name`, `border`, `align`, `hspace`, `vspace`, y `longdesc`. Las siguientes propiedades son ahora `unsigned long`, en lugar de `long`: `height`, y width.Las siguientes propiedades fueron añadidas: `crossorigin`, `naturalWidth`, `naturalHeight`, `y` `complete`. |
| {{SpecName('DOM2 HTML', 'html.html#ID-17701901', 'HTMLImgElement')}}                                                     | {{Spec2('DOM2 HTML')}}         | La propiedad `lowSrc` fue eliminada. Las siguientes propiedades son ahora `long`, en lugar de `DOMString`: `height`, `width`, `hspace`, y `vspace`.                                                                                                                                                                                                                       |
| {{SpecName('DOM1', 'level-one-html.html#ID-17701901', 'HTMLImgElement')}}                                                 | {{Spec2('DOM1')}}             | Definición inicial.                                                                                                                                                                                                                                                                                                                                                       |

## Compatibilidad con navegador

{{Compat("api.HTMLImageElement")}}

## Ver también

- El elemento HTML implementa esta interfaz: {{HTMLElement("img")}}
