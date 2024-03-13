---
title: element.clientLeft
slug: Web/API/Element/clientLeft
---

{{ APIRef }}

## Resumen

El ancho del borde izquierdo de un elemento en pixel. Incluye el ancho de la barra de desplazamiento vertical, si la dirección del texto es _rtl_ (derecha a izquierda) y si hay un desbordamiento que provoque la aparición de la barra en el lado izquierdo. `clientLeft` NO incluye _margin-left_ o _padding-left_. `clientLeft` es de sólo lectura.

Las aplicaciones "[Gecko](/es/Gecko)-based applications" implementan `clientLeft` a partir de Gecko 1.9 ([Firefox 3](/es/Firefox_3), ver [Error 111207 en Firefox](https://bugzil.la/111207)). Esta propiedad no está implementada en Firefox 2 o anteriores.

## Sintaxis

```js
var left = element.clientLeft;
```

## Ejemplo

```html hidden
<div
  id="offsetContainer"
  style="margin: 26px 0px; background-color: rgb(255, 255, 204); border: 4px dashed black; color: black; position: absolute; left: 260px;">
  <div
    id="idDiv"
    style="margin: 24px 29px; border: 24px black solid; padding: 0px 28px; width: 199px; height: 102px; overflow: auto; background-color: white; font-size: 13px!important; font-family: Arial, sans-serif;">
    <p
      id="PaddingTopLabel"
      style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">
      padding-top
    </p>

    <p>
      Suave, individualista y muy leal, los gatos de Birmania tienen un carácter
      entre los persas y los siameses. Si le gustan los gatos que no son
      agresivos, disfrutan estar entre los humanos y son generalmente
      tranquilos, esta es la raza para usted.
    </p>

    <p>
      Todos los Birmanos tienen pintas y coloración obscura en la cara, orejas,
      patas y cola.
    </p>

    <p>
      La imagen del gato y el texto vienen de
      <a class="external" href="http://www.best-cat-art.com/"
        >www.best-cat-art.com</a
      >
    </p>

    <p
      id="PaddingBottomLabel"
      style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">
      padding-bottom
    </p>
  </div>
  <strong
    style="color: blue; font-family: Arial,sans-serif; font-size: 13px!important; font-weight: bold; left: -32px; position: absolute; top: 85px;"
    >Left</strong
  ><strong
    style="color: blue; font-family: Arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 170px; position: absolute; top: -24px;"
    >Top</strong
  ><strong
    style="color: blue; font-family: Arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 370px; position: absolute; top: 85px;"
    >Right</strong
  ><strong
    style="color: blue; font-family: Arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 164px; position: absolute; top: 203px;"
    >Bottom</strong
  >
</div>
```

{{EmbedLiveSample("",400,300)}}

La barra de desplazamiento vertical en el lado izquierdo, aparece cuando la propiedad layout.scrollbar.side tiene el valor 1 o 3

Cuando la propiedad [_layout.scrollbar.side_](http://kb.mozillazine.org/Layout.scrollbar.side) se establece a 1 o a 3 y la dirección de texto está puesta a RTL, **entonces la barra de desplazamiento se pone a la izquierda** y esto afecta a la forma en que se calcula clientLeft.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Referencias

- [MSDN's clientLeft definition](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/clientleft.asp?frame=true)
- [MSDN's Measuring Element Dimension and Location](http://msdn.microsoft.com/workshop/author/om/measuring.asp)
