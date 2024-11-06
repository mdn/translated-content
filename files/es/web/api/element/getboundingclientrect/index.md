---
title: element.getBoundingClientRect
slug: Web/API/Element/getBoundingClientRect
---

{{APIRef}}

El método `Element.getBoundingClientRect()` devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización (_viewport)._

## Sintaxis

```js
domRect = element.getBoundingClientRect();
```

### Valor

El valor devuelto es un objeto {{domxref("DOMRect")}} que es la unión de los rectángulos devueltos por {{domxref("Element.getClientRects", "getClientRects()")}}para el elemento, es decir, las _CSS border-boxes_ asociadas con el elemento. El resultado es el rectángulo más pequeño que contiene al elemento completo, con las propiedades de solo lectura `left`, `top`, `right`, `bottom`, `x`, `y`, `width`, and `height` describiendo la _border-box_ total en pixels. Excepto `width` and `height` las propiedades son relativas a la esquina superior izquierda (_top-left_) de la ventana.

![Explicación de los valores DOMRect](element-box-diagram.png)

Las _border-boxes_ vacías son ignoradas. Si todas las _border-boxes_ del elemento estan vacías, entonces se devuelve un rectángulo con `width` and `height` iguales a cero donde el `top` y el `left` son el top-left de la _border-box_ de la primera _CSS box_ (en onden de contenido) para el elemento.

La cantidad de _scrolling_ realizado en la ventana (o cualquier otro elemento _scrollable_) se tiene en cuenta cuando se calcula el rectángulo. Esto implica que los bordes del rectángulo (`top`, `left`, `bottom`, and `right`) cambián sus valores cada vez que la posición de _scrolling_ cambia (ya que sus valores no son absolutos sino relativos a la ventana). Si se necesita el _bounding rectangle_ relativo a la esquina _top-left_ del documento, hay que añadir la posición de _scrolling_ actual a las propiedades `top` and `left` (dicha posición de _scrolling_ puede obtenerse usando {{domxref("window.scrollX")}} y {{domxref("window.scrollY")}}) para obtener el _bounding rectangle_ independiente de la posición de _scrolling_.

### Fallback para todos los navegadores

Los scripts que requieran una alta compatibilidad _cross-browser_ pueden usar {{domxref("window.pageXOffset")}} y {{domxref("window.pageYOffset")}} en lugar de `window.scrollX` y `window.scrollY.` Si no se tiene acceso a esas propiedades puede usarse el siguiente código:

```js
// Para scrollX
(((t = document.documentElement) || (t = document.body.parentNode)) &&
typeof t.scrollLeft == "number"
  ? t
  : document.body
).scrollLeft(
  // Para scrollY
  ((t = document.documentElement) || (t = document.body.parentNode)) &&
    typeof t.scrollTop == "number"
    ? t
    : document.body,
).scrollTop;
```

## Ejemplo

```js
// rect es un objeto DOMRect con ocho propiedades: left, top, right, bottom, x, y, width, height
var rect = obj.getBoundingClientRect();
```

## Especificaciones

{{Specifications}}

### Notas

El objeto `DOMRect` devuelto puede modificarse en navegadores modernos. Esto no era así en versiones anteriores que devolvían `DOMRectReadOnly` de forma efectiva. Con IE y Edge, el hecho de no poder agregar propiedades faltantes a su objeto `ClientRect` [MSDN: `ClientRect`](<https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx>), devuelto impide rellenar los valores `x` e `y`.

Debido a problemas de compatibilidad (ver a continuación), es más seguro confiar sólo en las propiedades `left`, `top`, `right`, and `bottom`.

Las propiedades en el objeto `DOMRect` devuelto no son suyas. Mientras que el operador `in` y `for...in` encontrarán las propiedades devueltas, otras API como `Object.keys()` fallarán. Además, e inesperadamente, ES2015 y nuevas características como `Object.assign()` y los operadores rest/spread de los objetos, no podrán copiar las propiedades devueltas.

```js
rect = elt.getBoundingClientRect()
// El resultado en emptyObj es {}
emptyObj = Object.assign({}, rect)
emptyObj = { ...rect }
{width, ...emptyObj} = rect
```

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Element.getClientRects", "getClientRects()")}}
- [MSDN: `getBoundingClientRect`](<https://msdn.microsoft.com/en-us/library/ms536433(VS.85).aspx>)
- [MSDN: `ClientRect`](<https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx>), una versión anterior a `DOMRect`
