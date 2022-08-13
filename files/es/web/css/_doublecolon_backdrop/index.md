---
title: '::backdrop'
slug: Web/CSS/::backdrop
tags:
  - CSS
  - Layout
  - NeedsContent
  - Pantalla completa
  - Pseudo Elemento CSS
  - Referencia
  - Web
translation_of: Web/CSS/::backdrop
---
{{CSSRef}} {{SeeCompatTable}}

Cada uno de los elementos en la pila de la [capa superior](https://fullscreen.spec.whatwg.org/#top-layer) posee un _`::backdrop`_ {{Cssxref("pseudo-elements", "pseudo-element")}}. Este pseudo-elemento es una caja que se muestra inmediatamente debajo del elemento (y sobre el elemento inmediatamente inferior de la pila, si es que hay), dentro de dicha capa superior.

> **Nota:** El pseudo-elemento `::backdrop` se puede usar para crear un fondo que oculte el documento subyacente detrás de la pila de la capa superior, p.ej., para el elemento que es mostrado a pantalla complete tal y como se describe en esta especificación.

No se hereda ni es heredado de ningún elemento. Tampoco se hacen restricciones sobre qué propiedades se aplican a este pseudo-elemento.

## Especificaciones

| Especificación                                                                               | Estado                           | Comentario         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('Fullscreen', '#::backdrop-pseudo-element', '::backdrop')}} | {{Spec2('Fullscreen')}} | Definición Inicial |

## Compatibilidad con los distintos navegadores

{{Compat("css.selectors.backdrop")}}

## Ver además

- {{cssxref(":fullscreen")}}
- {{HTMLElement("dialog")}}
