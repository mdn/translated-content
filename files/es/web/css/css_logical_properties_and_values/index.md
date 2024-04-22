---
title: Propiedades y Valores Lógicos de CSS
slug: Web/CSS/CSS_logical_properties_and_values
---

{{CSSRef}}

**CSS Logical Properties** (las propiedades lógicas en CSS) son un módulo de [CSS](/es/docs/Web/CSS) que introduce propiedades y valores lógicos, proporcionando la capacidad de controlar el diseño de forma lógica en vez de la asignación de dimensiones físicas de dirección y dimensión.

Este módulo también define propiedades y valores lógicos para propiedades previamente definidas en CSS 2.1. Las propiedades lógicas definen una equivalencia a sus propiedades físicas correspondientes.

### Dimensiones de bloque y en línea

Las propiedades y valores lógicos usan los términos abstractos de bloque (_block)_ y en línea (_inline)_ para describir la dirección en la que fluyen. El sentido físico de estos términos depende del [modo de escritura](/es/docs/Web/CSS/CSS_Writing_Modes).

- Dimensión de bloque
  - : Es la dimensión perpendicular al flujo del texto en línea, es decir, la dimensión vertical en un modo de escritura horizontal, y la dimensión horizontal en un modo de escritura vertical. Para el texto estándar en inglés, es la dimensión vertical.
- Dimensión en línea
  - : Es la dimensión paralela al flujo del texto en línea, es decir, la dimensión horizontal en un modo de escritura horizontal, y la dimensión vertical en un modo de escritura vertical. Para el texto estándar en inglés, es la dimensión horizontal.

## Referencia

### Propiedades para dimensionamiento

- {{CSSxRef("block-size")}} {{Experimental_Inline}}
- {{CSSxRef("inline-size")}} {{Experimental_Inline}}
- {{CSSxRef("max-block-size")}} {{Experimental_Inline}}
- {{CSSxRef("max-inline-size")}} {{Experimental_Inline}}
- {{CSSxRef("min-block-size")}} {{Experimental_Inline}}
- {{CSSxRef("min-inline-size")}} {{Experimental_Inline}}

### Propiedades para márgenes, bordes y relleno

- {{CSSxRef("border-block")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-color")}} (`logical` {{Experimental_Inline}} palabra clave)
- {{CSSxRef("border-inline")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-start-start-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-start-end-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-end-start-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-end-end-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-style")}} (`logical` {{Experimental_Inline}} palabra clave)
- {{CSSxRef("border-width")}} (`logical` {{Experimental_Inline}} palabra clave)
- {{CSSxRef("margin")}} (`logical` {{Experimental_Inline}} palabra clave)
- {{CSSxRef("margin-block")}} {{Experimental_Inline}}
- {{CSSxRef("margin-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("margin-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("margin-inline")}} {{Experimental_Inline}}
- {{CSSxRef("margin-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("margin-inline-start")}} {{Experimental_Inline}}
- {{CSSxRef("padding")}} (`logical` {{Experimental_Inline}} palabra clave)
- {{CSSxRef("padding-block")}} {{Experimental_Inline}}
- {{CSSxRef("padding-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("padding-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("padding-inline")}} {{Experimental_Inline}}
- {{CSSxRef("padding-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("padding-inline-start")}} {{Experimental_Inline}}

### Propiedades para flotantes y posicionamiento

- {{CSSxRef("clear")}} (`inline-end` {{Experimental_Inline}} y `inline-start` {{Experimental_Inline}} palabras claves)
- {{CSSxRef("float")}} (`inline-end` {{Experimental_Inline}} y `inline-start` {{Experimental_Inline}} palabras claves)
- {{CSSxRef("inset")}} {{Experimental_Inline}}
- {{CSSxRef("inset-block")}} {{Experimental_Inline}}
- {{CSSxRef("inset-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("inset-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("inset-inline")}} {{Experimental_Inline}}
- {{CSSxRef("inset-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("inset-inline-start")}} {{Experimental_Inline}}

### Otras propiedades

- {{CSSxRef("caption-side")}} (`inline-end` {{Experimental_Inline}} y `inline-start` {{Experimental_Inline}} palabras claves)
- {{CSSxRef("resize")}} {{Experimental_Inline}} (`block` {{Experimental_Inline}} y `inline` {{Experimental_Inline}} palabras claves)
- {{CSSxRef("text-align")}} (`end` {{Experimental_Inline}} y `start` {{Experimental_Inline}} palabras claves)

### Propiedades obsoletas

- {{CSSxRef("offset-block-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (ahora {{CSSxRef("inset-block-end")}} {{Experimental_Inline}})
- {{CSSxRef("offset-block-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (ahora {{CSSxRef("inset-block-start")}} {{Experimental_Inline}})
- {{CSSxRef("offset-inline-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (ahora {{CSSxRef("inset-inline-end")}} {{Experimental_Inline}})
- {{CSSxRef("offset-inline-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (ahora {{CSSxRef("inset-inline-start")}} {{Experimental_Inline}})

## Guías

- [Conceptos básicos de propiedades y valores lógicos](/es/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts)
- [Propiedades Lógicas para dimensionamiento](/es/docs/Web/CSS/CSS_Logical_Properties/Sizing)
- [Propiedades Lógicas para márgenes, bordes y relleno](/es/docs/Web/CSS/CSS_Logical_Properties/Sizing)
- [Propiedades Lógicas para flotantes y posicionamiento](/es/docs/Web/CSS/CSS_Logical_Properties/Sizing)

## Especificaciones

{{Specifications}}

## Compatibilidad en los Navegadores

En general:

- Firefox tiene soporte para las propiedades asignadas — donde hay una directa asignación desde la versión física a la versión lógica.
- Chrome, desde la versión 69, tiene soporte para las propiedades asignadas.
- Edge actualmente no tiene soporte.
- Firefox 66 introduce soporte para dos valores abreviados.

Mira la página de la propiedad en específico para tener una información más completa sobre su compatibilidad.
