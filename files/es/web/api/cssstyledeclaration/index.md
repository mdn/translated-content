---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
---

{{ APIRef("CSSOM") }}

## Resúmen

`CSSStyleDeclaration` representa una colección CSS de pares propiedad-valor. Se utiliza en unas cuantas APIs:

- {{domxref("HTMLElement.style")}} - para manipular el estilo de un solo elemento (\<elem style="...">);
- En otras palabras, es un interface para los [bloques de declaraciones](http://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) devueltos por la propiedad [`style`](/en/DOM/cssRule.style) de una [`regla CSS`](/en/DOM/cssRule) en una [hoja de estilos](/en/DOM/stylesheet), cuando la regla es una [CSSStyleRule](/en/DOM/cssRule#CSSStyleRule).
- `CSSStyleDeclaration` es también un interface de **sólo-lectura** para el resultado de [window.getComputedStyle](/en/DOM/window.getComputedStyle)().

## Atributos

- {{domxref("CSSStyleDeclaration.cssText")}}
  - : Representación textual del bloque de declaración. Estableciendo este atributo cambia el estilo.
- {{domxref("CSSStyleDeclaration.length")}}
  - : El número de propiedades. Ver el método del **elemento** inferior.
- {{domxref("CSSStyleDeclaration.parentRule")}}
  - : El contenedor {{domxref("CssRule")}}.

## Métodos

- {{domxref("CSSStyleDeclaration.getPropertyPriority()")}}
  - : Retorna la prioridad opcional, "important". Ejemplo: _priString_= _styleObj_.getPropertyPriority('color')
- {{domxref("CSSStyleDeclaration.getPropertyValue()")}}
  - : Retorna el valor de la propiedad. Ejemplo: _valString_= _styleObj_.getPropertyValue('color')
- {{domxref("CSSStyleDeclaration.item()")}}
  - : Retorna un nombre de propiedad. Ejemplo: _nameString_= _styleObj_.item(0) Alternative: _nameString_= _styleObj_\[0]
- {{domxref("CSSStyleDeclaration.removeProperty()")}}
  - : Retorna el valor borrado. Ejemplo: _valString_= _styleObj_.removeProperty('color')
- {{domxref("CSSStyleDeclaration.setProperty()")}}
  - : Sin retorno. Ejemplo: _styleObj_.setProperty('color', 'red', 'important')
- {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}}
  - : Solo soportado a través de getComputedStyle. Devuelve un {{ domxref("ROCSSPrimitiveValue") }} en Firefox ({{ domxref("CSSPrimitiveValue") }}, en otros, los cuales implementan [CSSValue](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue)), o nulo para [Propiedades taquigráficas](/en/CSS/Shorthand_properties). Ejemplo: _cssString_= window\.getComputedStyle(_elemento_, `null`).getPropertyCSSValue('color').cssText;
    Observación: Gecko 1.9 devuelve **null** a menos que se utilice [getComputedStyle()](/en/DOM/window.getComputedStyle).
    Observación: Este método puede estar [desaconsejado por el W3C](http://lists.w3.org/Archives/Public/www-style/2003Oct/0347.html) , y no está presente en el último [borrador CSSOM](http://dev.w3.org/csswg/cssom/#cssstyledeclaration). No está soportado por IE e incluso aunque la función existe en Opera, llamarla lanza una excepción {{ domxref("DOMException") }} NOT_SUPPORTED_ERR.

## Ejemplo

```js
var styleObj = document.styleSheets[0].cssRules[0].style;
alert(styleObj.cssText);
for (var i = styleObj.length - 1; i >= 0; i--) {
  var nameString = styleObj[i];
  styleObj.removeProperty(nameString);
}
alert(styleObj.cssText);
```

## Notas

El bloque de declaración es esa parte de la regla de estilo que aparece dentro de las llaves ({}) y que actualmente proporciona las definiciones de estilo (para el selector, la parte que precede a las llaves).

## Ver también

- [Propiedades DOM CSS](/es/docs/Web/CSS/CSS_Properties_Reference)

## Especificación

[CSSOM: CSSStyleDeclaration](http://dev.w3.org/csswg/cssom/#the-cssstyledeclaration-interface)
