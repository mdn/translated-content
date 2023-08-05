---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
---

{{APIRef("HTML DOM")}}

La interfaz **`HTMLImageElement`** provee de propiedas especiales y métodos (más allá de las interfaces {{domxref("HTMLElement")}}, también tiene disponible la herencia) para manipular el diseño y la presentación de elementos {{HTMLElement("img")}}.

## Propiedades

_Heredadas de su padre, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.align")}} {{deprecated_inline}}
  - : Es un {{domxref("DOMString")}} que indica el alineamiento de la imagen respecto al contexto que la rodea.
- {{domxref("HTMLImageElement.alt")}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML [`alt`](/es/docs/Web/HTML/Element/img#alt), indicando texto de respaldo a la imagen.
- {{domxref("HTMLImageElement.border")}} {{deprecated_inline}}
  - : Es un {{domxref("DOMString")}} que indica el ancho del borde alrededor de la imagen. Este está desaprobado y debe usarse la propiedad CSS {{cssxref("border")}} en su lugar.
- {{domxref("HTMLImageElement.complete")}} {{readonlyInline}}
  - : Devuelve un {{domxref("Boolean")}} que es `true` si el navegador ha terminado de buscar la imagen, sea o no exitoso. También devuelve `true` si la imagen no tiene valor {{domxref("HTMLImageElement.src", "src")}}.
- {{domxref("HTMLImageElement.crossOrigin")}}
  - : Es un {{domxref("DOMString")}} representa la configuración CORS para el elemento imagen. Ver [Atributos de configuración CORS](/es/docs/Web/HTML/Atributos_de_configuracion_CORS) para más detalles.
- {{domxref("HTMLImageElement.currentSrc")}} {{readonlyInline}}{{experimental_inline}}
  - : Devuelve un {{domxref("DOMString")}}
- {{domxref("HTMLImageElement.height")}}
  - : Es un `unsigned long` que refleja el atributo HTML [`height`](/es/docs/Web/HTML/Element/img#height), indica el alto de la imagen en píxeles CSS.
- {{domxref("HTMLImageElement.hspace")}} {{deprecated_inline}}
  - : Es un `long` que representa el espacio a izquierda y derecha de la imagen.
- {{domxref("HTMLImageElement.isMap")}}
  - : Es un {{domxref("Boolean")}} que refleja el atributo HTML [`ismap`](/es/docs/Web/HTML/Element/img#ismap), indica que la imagen es parte del mapa de imagen del lado del servidor.
- {{domxref("HTMLImageElement.longDesc")}} {{deprecated_inline}}
  - : Es un {{domxref("DOMString")}} que representa la URI de una larga descripción de la imagen.
- {{domxref("HTMLImageElement.lowSrc")}} {{deprecated_inline}}
  - : Es un {{domxref("DOMString")}} que referencia una copia de la imagen en mala calidad (pero más rápida cargando)
- {{domxref("HTMLImageElement.name")}} {{deprecated_inline}}
  - : Es un {{domxref("DOMString")}}.
- {{domxref("HTMLImageElement.naturalHeight")}} {{readonlyInline}}
  - : Devuelve un `unsigned long` que representa el alto intrínseco de la imagen en píxeles CSS, si está disponible, de otro modo, es 0.
- {{domxref("HTMLImageElement.naturalWidth")}} {{readonlyInline}}
  - : Devuelve un `unsigned long` que representa el ancho intrínseco de la imagen en píxeles CSS, si está disponible, de otro modo, es 0.
- {{domxref("HTMLImageElement.referrerPolicy")}} {{experimental_inline}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML [`referrerpolicy`](/es/docs/Web/HTML/Element/img#referrerpolicy) indica la referencia a usar para buscar la imagen.
- {{domxref("HTMLImageElement.src")}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML [`src`](/es/docs/Web/HTML/Element/img#src) HTML attribute, contiene la URL completa de la imagen, incluido la base del URI
- {{domxref("HTMLImageElement.sizes")}} {{experimental_inline}}
  - : Es un {{domxref("DOMString")}}
- {{domxref("HTMLImageElement.srcset")}} {{experimental_inline}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML [`srcset`](/es/docs/Web/HTML/Element/img#srcset), contiene una ista de imágenes candidatas, separadas por una coma (`',', U+002C COMMA`). Una imagen candidata es una URL seguida por `'w'` con el ancho, o una `'x'` seguida de la densidad del píxel.
- {{domxref("HTMLImageElement.useMap")}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML [`usemap`](/es/docs/Web/HTML/Element/img#usemap), contiene una URL parcial del mapa del elemento.
- {{domxref("HTMLImageElement.vspace")}} {{deprecated_inline}}
  - : Es un `long` que representa el espacio sobre y bajo la imagen.
- {{domxref("HTMLImageElement.width")}}
  - : Es un `unsigned long` que refleja el atributo HTML [`width`](/es/docs/Web/HTML/Element/img#width), indica el ancho de la imagen en píxeles CSS.
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
img1.src = "image1.png";
img1.alt = "alt";
document.body.appendChild(img1);

var img2 = document.createElement("img"); // Uso DOM HTMLImageElement
img2.src = "image2.jpg";
img2.alt = "alt text";
document.body.appendChild(img2);

// Usando la primera imagen en el documento
alert(document.images[0].src);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El elemento HTML implementa esta interfaz: {{HTMLElement("img")}}
