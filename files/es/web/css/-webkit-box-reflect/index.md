---
title: "-webkit-box-reflect"
slug: Web/CSS/-webkit-box-reflect
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

`La propiedad` [CSS](/es/docs/Web/CSS) `-webkit-box-reflect` permite reflejar el contenido del elemento en una dirección específica.

> **Advertencia:** **Nota:** Esta característica **no está pensada para ser usada en páginas Web** .Para conseguir reflexión en la Web, la forma estándar es usando la función CSS {{cssxref("element", "element()")}} .

{{cssinfo}}

## Síntaxis

```css
/* Valores para la dirección */
-webkit-box-reflect: above;
-webkit-box-reflect: below;
-webkit-box-reflect: left;
-webkit-box-reflect: right;

/* Valor del desplazamiento */
-webkit-box-reflect: below 10px;

/* Valor de máscara */
-webkit-box-reflect: below 0 linear-gradient(transparent, white);

/* Valores globales */
-webkit-box-reflect: inherit;
-webkit-box-reflect: initial;
-webkit-box-reflect: unset;
```

### Valores

- `above`_,_ `below`_,_ `right`_,_ `left`
  - : Son palabras clave que indican en qué dirección se realiza la reflexión.
- `<length>`
  - : Indica el tamaño de la reflexión.
- `<image>`
  - : Describe la máscara que se aplicará a la reflexión.

### Síntaxis Formal

{{csssyntax}}

## Especificaciones

Esta propiedad no está entre los objetivos de la especificación estándar y no será parte de CSS. La manera estándar para conseguir reflexión en CSS es el uso de la función {{cssxref("element", "element()")}}.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- La [documentación](http://developer.apple.com/library/safari/documentation/appleapplications/reference/safaricssref/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW16) de Apple.
- La [especificación](https://www.webkit.org/blog/182/css-reflections/) de Webkit.
- El artículo de Lea Verou sobre reflexión usando [característica CSS que están en el estándar](http://lea.verou.me/2011/06/css-reflections-for-firefox-with-moz-element-and-svg-masks/).
