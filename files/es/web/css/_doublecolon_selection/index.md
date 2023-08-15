---
title: "::selection"
slug: Web/CSS/::selection
---

{{ CSSRef() }}

{{ Non-standard_header() }}

## Resumen

El selector `::selection` CSS pseudo-elemento aplica reglas a una porción de un documento que ha sido destacado (por ejemplo: selección con el mouse o algún otro puntero en un dispositivo) del usuario.

Sólo un pequeño subconjunto de propiedades CSS pueden ser usadas en una regla `::selection` en el selector de: {{ cssxref("color") }}, {{ cssxref("background") }}, {{ cssxref("background-color") }} y {{ cssxref("text-shadow") }}. Nótese que, en particular, {{ cssxref("background-image") }} es ignorado, como cualquier otra propiedad.

> **Nota:** `text-shadow` en `::selection` es soportado por Chrome y Safari y Firefox 17 y superior.

> **Nota:** Aunque este pseudo-elemento está en borradores como nivel 3 de selectores CSS, fue quitado durante la fase recomendaciones de candidatos, como parecía que su comportamiento estaba infra-especificado, especialmente con elementos anidados, y la interoperabilidad no fue conseguida [(basado en discusión en W3C lista de correos de estilo)](http://lists.w3.org/Archives/Public/www-style/2008Oct/0268.html).
>
> `El ::selection` pseudo elemento actualmente no está en los modulos de CSS para estandar track. No debe ser usado en entornos de produccion.

## Ejemplo

Gecko es la única máquina que requiere el prefijo. Devido a el factor que las reglas de análisis de CSS requieren dejar caer la regla general cuando encuentre un pseudo elemento inválido, dos reglas deben ser escritas: `::-moz-selection, ::selection {...}`. La regla debe soltada en non-Gecko como `::-moz-selection` es inválido en esto.

```css
/* dibuja en cualquier texto seleccionado el color amarillo  sobre un fondo rojo */
::-moz-selection {
  color: gold;
  background: red;
}
::selection {
  color: gold;
  background: red;
}

/* dibuja el texto seleccionado en un parrafo de color blanco y negro*/
p::-moz-selection {
  color: white;
  background: black;
}
p::selection {
  color: white;
  background: black;
}
```

## Especificaciones

El `::selection` CSS pseudo-elemento fue redactado selector CSS nivel 3 pero quitado antes que alcanzara el estatus recomendado. Apesar de esto es simplemente en algunos Navegadores, que probablemente tendran soporte a este.

En estos momentos, el seudo elemento CSS `::selection` no esta en ninguna especificación.

## Compatibilidad con navegadores

{{Compat}}
