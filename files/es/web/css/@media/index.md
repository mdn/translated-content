---
title: "@media"
slug: Web/CSS/@media
---

{{CSSRef}}

## Resumen

La [regla-at](/es/docs/Web/CSS/At-rule) [CSS](/es/docs/Web/CSS) `@media` asocia un grupo de declaraciones anidadas, en un bloque CSS delimitado por llaves, con una condición definida por un [media query](/es/docs/Web/CSS/Media_Queries). La regla-at `@media` puede ser usada no solo en el nivel superior de la hoja de estilos, sino también dentro de cualquier [grupo de reglas condicionales](/es/docs/Web/CSS/At-rule#grupos_de_reglas_condicionales).

La regla-at `@media` puede ser accesible por medio de la interfaz de modelo de objeto {{domxref("CSSMediaRule")}}.

## Sintaxis

{{csssyntax}}

Un `<media-query>` está compuesto por un tipo de medio opcional y/o un conjunto de características de medio.

## Tipos de medios

- `all`
  - : Aplicable a todos los dispositivos.
- `print`
  - : Destinado a material paginado y documentos visibles en una pantalla en modo de vista previa para impresión. Por favor, consulte la sección de [medios paginados](/es/docs/Web/CSS/Paged_Media), y la [sección de Media en el tutorial de Introducción](/es/docs/Web/CSS/Media_Queries/Using_media_queries) para más información acerca de problemas de formateo específicos para los medios paginados.
- `screen`
  - : Destinado a principalmente a pantallas de computadora a color.

> **Nota:** CSS2.1 y Media Queries 3 definió varios tipos de media adicionales (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, `aural`, `speech`), pero fueron descontinuados en [Media Queries 4](https://dev.w3.org/csswg/mediaqueries/#media-types) y no deben ser usados.

## Características de Medios (media feature)

Cada _característica de medios_ verifica una característica específica del navegador o dispositivo.

| Nombre                                                                                                     | Resumen                                                                                                                                                    | Notas                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [`width`](/es/docs/Web/CSS/@media/width)                                                                   | Anchura del viewport                                                                                                                                       |                                                                                                                                  |
| [`height`](/es/docs/Web/CSS/@media/height)                                                                 | Altura del viewport                                                                                                                                        |                                                                                                                                  |
| [`aspect-ratio`](/es/docs/Web/CSS/@media/aspect-ratio)                                                     | Relación de aspecto anchura-altura del viewport                                                                                                            |                                                                                                                                  |
| [`orientation`](/es/docs/Web/CSS/@media/orientation)                                                       | Orientación del viewport                                                                                                                                   |                                                                                                                                  |
| [`resolution`](/es/docs/Web/CSS/@media/resolution)                                                         | Densidad de pixeles del dispositivo                                                                                                                        |                                                                                                                                  |
| [`scan`](/es/docs/Web/CSS/@media/scan)                                                                     | Proceso de escaneo del dispositivo                                                                                                                         |                                                                                                                                  |
| [`grid`](/es/docs/Web/CSS/@media/grid)                                                                     | ¿El dispositivo es un grid o un mapa de bits?                                                                                                              |                                                                                                                                  |
| [`update-frequency`](/es/docs/Web/CSS/@media/update-frequency)                                             | Qué tan rápido (si lo hace) puede el dispositivo modificar la apariencia del contenido                                                                     | Incluido en Media Queries Nivel 4                                                                                                |
| [`overflow-block`](/es/docs/Web/CSS/@media/overflow-block)                                                 | Cómo maneja el dispositivo el contenido que excede los límites del viewport a lo largo del eje de bloque                                                   | Incluido en Media Queries Nivel 4                                                                                                |
| [`overflow-inline`](/es/docs/Web/CSS/@media/overflow-inline)                                               | ¿Puede desplazarse hacia el contenido que excede los límites del viewport?                                                                                 | Incluido en Media Queries Nivel 4                                                                                                |
| [`color`](/es/docs/Web/CSS/@media/color)                                                                   | Componente de número de bits por color del dispositivo, o cero si el dispositivo no es a color.                                                            |                                                                                                                                  |
| [`color-index`](/es/docs/Web/CSS/@media/color-index)                                                       | Número de entradas en la tabla de búsqueda de color del dispositivo, o cero si el dispositivo no usa una tabla.                                            |                                                                                                                                  |
| [`display-mode`](/es/docs/Web/CSS/@media/display-mode)                                                     | Modo de visualización de la aplicación, según se especifique en la [propiedad display](/es/docs/Web/Manifest#display) del manifiesto de la aplicación web. | Definido en la [especificación del Manifiesto de Aplicación Web](http://w3c.github.io/manifest/#the-display-mode-media-feature). |
| [`monochrome`](/es/docs/Web/CSS/@media/monochrome)                                                         | Bits por pixel en el buffer de marco monocromático del dispositivo, o 0 si el dispositivo no es monocromático.                                             |                                                                                                                                  |
| [`inverted-colors`](/es/docs/Web/CSS/@media/inverted-colors)                                               | ¿El agente usuario o el Sistema Operativo está invirtiendo los colores?                                                                                    | Incluido en Media Queries Nivel 4                                                                                                |
| [`pointer`](/es/docs/Web/CSS/@media/pointer)                                                               | ¿El mecanismo de entrada principal es un dispositivo apuntador? y de ser así, ¿qué tan preciso es?                                                         | Incluido en Media Queries Nivel 4                                                                                                |
| [`hover`](/es/docs/Web/CSS/@media/hover)                                                                   | ¿El mecanismo de entrada principal permite que el usuario posicione el puntero sobre los elementos?                                                        | Incluido en Media Queries Nivel 4                                                                                                |
| [`any-pointer`](/es/docs/Web/CSS/@media/any-pointer)                                                       | ¿Hay algún mecanismo de entrada que sea dispositivo apuntador? y de ser así, ¿qué tan preciso es éste?                                                     | Incluido en Media Queries Nivel 4                                                                                                |
| [`any-hover`](/es/docs/Web/CSS/@media/any-hover)                                                           | ¿Algún mecanismo de entrada disponible permite que el usuario posicione el puntero sobre los elementos?                                                    | Incluido en Media Queries Nivel 4                                                                                                |
| [`light-level`](/es/docs/Web/CSS/@media/light-level)                                                       | Nivel de luz ambiental actual                                                                                                                              | Incluido en Media Queries Nivel 4                                                                                                |
| [`scripting`](/es/docs/Web/CSS/@media/scripting)                                                           | ¿Se soporta lenguaje de script (p.ej. JavaScript)?                                                                                                         | Incluido en Media Queries Nivel 4                                                                                                |
| [`device-width`](/es/docs/Web/CSS/@media/device-width) {{deprecated_inline}}                               | Anchura de la superficie de representación del dispositivo                                                                                                 | Descontinuado en Media Queries Nivel 4                                                                                           |
| [`device-height`](/es/docs/Web/CSS/@media/device-height) {{deprecated_inline}}                             | Altura de la superficie de representación del dispositivo                                                                                                  | Descontinuado en Media Queries Nivel 4                                                                                           |
| [`device-aspect-ratio`](/es/docs/Web/CSS/@media/device-aspect-ratio) {{deprecated_inline}}                 | Relación de aspecto anchura-altura del dispositivo                                                                                                         | Descontinuado en Media Queries Nivel 4                                                                                           |
| [`-webkit-device-pixel-ratio`](/es/docs/Web/CSS/@media/-webkit-device-pixel-ratio) {{non-standard_inline}} | Número de pixeles reales del dispositivo por pixel CSS                                                                                                     | No estándar; Específica de WebKit/Blink. De ser posible, use la característica `resolution en su lugar`.                         |
| [`-webkit-transform-3d`](/es/docs/Web/CSS/@media/-webkit-transform-3d) {{non-standard_inline}}             | ¿Se soportan {{cssxref("transform", "transformaciones")}} 3D?                                                                                              | No estándar; Específica de WebKit/Blink                                                                                          |
| [`-webkit-transform-2d`](/es/docs/Web/CSS/@media/-webkit-transform-2d) {{non-standard_inline}}             | ¿Se soportan {{cssxref("transform", "transformaciones")}} 2D?                                                                                              | No estándar; Específica de WebKit                                                                                                |
| [`-webkit-transition`](/es/docs/Web/CSS/@media/-webkit-transition) {{non-standard_inline}}                 | Se soportan {{cssxref("transition", "transiciones")}} CSS?                                                                                                 | No estándar; Específica de WebKit                                                                                                |
| [`-webkit-animation`](/es/docs/Web/CSS/@media/-webkit-animation) {{non-standard_inline}}                   | ¿Se soportan {{cssxref("animation", "animaciones")}} CSS?                                                                                                  | No estándar; Específica de WebKit                                                                                                |

## Ejemplos

```css
@media print {
  body {
    font-size: 10pt;
  }
}
@media screen {
  body {
    font-size: 13px;
  }
}
@media screen, print {
  body {
    line-height: 1.2;
  }
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  body {
    line-height: 1.4;
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Media queries](/es/docs/Web/CSS/Media_Queries)
- El modelo CSSOM {{ domxref("CSSMediaRule") }} asociado a esta regla-at.
