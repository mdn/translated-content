---
title: Shadow parts de CSS
slug: Web/CSS/CSS_shadow_parts
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

El módulo **shadow parts de CSS** define el pseudoelemento {{CSSXref("::part", "::part()")}} que se puede establecer en un [shadow host](/es/docs/Glossary/Shadow_tree). Al usar este pseudoelemento, puedes habilitar shadow hosts para exponer el elemento seleccionado en el shadow tree al exterior de la página para poder estilarlo.

Por defecto, los elementos en un shadow tree solo se pueden estilar dentro de sus respectivos shadow roots. El módulo shadow parts de CSS habilita la inclusión de un atributo [`part`](/es/docs/Web/HTML/Reference/Global_attributes#part) en los descendientes de {{HTMLElement("template")}} que componen el elemento personalizado, exponiendo el nodo shadow tree para estilarlo usando el pseudoelemento `::part()`.

## Referencia

### Selectores

- {{CSSXref("::part", "::part()")}}

### Atributos HTML

- [`part`](/es/docs/Web/HTML/Reference/Global_attributes#part)
- [`exportparts`](/es/docs/Web/HTML/Reference/Global_attributes#exportparts)

### Definiciones

- {{glossary("Shadow tree")}}

## Guías

- [Pseudoelementos CSS](/es/docs/Web/CSS/Pseudo-elements)
  - : Lista alfabética de pseudoelementos definidos por todas las especificaciones de CSS y WebVTT

- [Componentes web](/es/docs/Web/API/Web_components)
  - : Vista general de las diferentes API que habilitan la creación de elementos personalizados reusables o componentes web.

## Conceptos relacionados

- Elemento de HTML {{HTMLElement("template")}}
- Elemento de HTML {{HTMLElement("slot")}}
- Propiedad {{domxref("Element.part")}}
- Propiedad {{domxref("Element.shadowRoot")}}
- Método {{domxref("Element.attachShadow()")}}
- Interfaz {{domxref("ShadowRoot")}}
- Modulo [ámbito de CSS](/es/docs/Web/CSS/CSS_scoping)
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted")}}

## Especificaciones

{{Specifications}}

## Véase también

- [Pseudoelementos de CSS](/es/docs/Web/CSS/CSS_pseudo-elements) module
- [Selectores de CSS](/es/docs/Web/CSS/CSS_selectors) module
- [Uso del shadow DOM](/es/docs/Web/API/Web_components/Using_shadow_DOM)
- [Plantillas: Estilando fuera del ámbito actual](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) en web.dev (2023)
