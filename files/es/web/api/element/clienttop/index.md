---
title: element.clientTop
slug: Web/API/Element/clientTop
---

{{ ApiRef }}

## Resumen

El ancho del borde superior de un elemento en pixel. No incluye ni el _margin-top_ , ni el _padding-top_ . `clientTop` es de sólo lectura.

Las aplicaciones "[Gecko](/es/Gecko)-based applications" implementan el uso de `clientTop` a partir de Gecko 1.9 ([Firefox 3](/es/Firefox_3),ver [Error 111207 en Firefox](https://bugzil.la/111207)). Esta propiedad no está disponible en Firefox 2 o anteriores.

## Sintaxis

```js
vartop = element.clientTop;
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

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Referencias

- [MSDN's clientTop definition](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/clienttop.asp?frame=true)
- [MSDN's Measuring Element Dimension and Location](http://msdn.microsoft.com/workshop/author/om/measuring.asp)
