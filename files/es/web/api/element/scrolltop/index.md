---
title: Element.scrollTop
slug: Web/API/Element/scrollTop
---

{{ APIRef }}

La propiedad `Element.scrollTop` obtiene o establece el número de pixels que el contenido de un elemento ha sido desplazado (enrollado) hacia arriba. El `scrollTop` de un elemento es una medida de la distancia desde el límite superior de un elemento al límite superior de su contenido visible. Cuando un elemento no genera una barra de scroll vertical, el valor de su `scrollTop` es establecido por defecto a `0`.

## Sintaxis

```js
// Obtiene el número de pixels desplazados
var intElemScrollTop = someElement.scrollTop;
```

Después de ejecutar este código, `intElemScrollTop` es un entero que corresponde al número de pixesl que el contenido del {{domxref("element")}} ha sido desplazado hacia arriba.

```js
// Establece el número de pixels desplazados
element.scrollTop = intValue;
```

`scrollTop` puede ser establecido a cualquier valor entero, con ciertas salvedades:

- Si el elemento no puede ser desplazado (p.e. no tiene desbordamiento (overflow) o si el elemento no es desplazable (**non-scrollable**), `scrollTop` es establecido a `0`.
- Si se asigna un valor menor que `0`, `scrollTop` es establecido a `0`.
- Si se asigna un valor mayor que el máximo al que el contenido puede ser desplazado, `scrollTop` es establecido al valor máximo.

## Ejemplo

```html hidden
<div
  id="offsetContainer"
  style="margin: 40px 50px 50px; background-color: rgb(255, 255, 204); border: 4px dashed black; color: black; position: relative; display: inline-block;">
  <div
    id="idDiv"
    style="margin: 24px 29px; border: 24px black solid; padding: 0px 28px; width: 199px; height: 102px; overflow: auto; background-color: white; font-size: 13px!important; font-family: Arial, sans-serif;">
    <p
      id="PaddingTopLabel"
      style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">
      padding-top
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <p
      id="PaddingBottomLabel"
      style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">
      padding-bottom
    </p>
  </div>
  <strong
    style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: -32px; position: absolute; top: 85px;"
    >Left</strong
  >
  <strong
    style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 170px; position: absolute; top: -24px;"
    >Top</strong
  >
  <strong
    style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 370px; position: absolute; top: 85px;"
    >Right</strong
  >
  <strong
    style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 164px; position: absolute; top: 203px;"
    >Bottom</strong
  >
  <em>margin-top</em> <em>margin-bottom</em> <em>border-top</em>
  <em>border-bottom</em>
</div>
```

{{EmbedLiveSample("",400,350)}}

![Image:scrollTop.png](scrolltop.png)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Referencias

- [Borrador del Módulo Vista del W3C](http://dev.w3.org/csswg/cssom-view/#dom-element-scrolltop)
- [definición de scrollTop en MSDN](<http://msdn.microsoft.com/en-us/library/ms534618(VS.85).aspx>)
- [Medidas de Dimensión y Ubicación de Elementos en MSDN](<http://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx>)
