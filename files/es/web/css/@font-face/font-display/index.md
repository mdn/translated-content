---
title: font-display
slug: Web/CSS/@font-face/font-display
---

{{CSSRef}}

El descriptor `font-display` determina cómo se muestra una fuente basándose en cuándo está descargada y lista para usarse.

## La visualización de las fuentes

La visualización de la fuentes se basa en un temporizador que comienza en el momento en que el agente de usuario intenta utilizar una fuente descargada. El tiempo de visualización se divide en tres periodos dictan el comportamiento de renderizado de cualquier elemento que utilice la fuente.

- Tiempo de bloqueo de fuente
  - : Si la fuente no está cargada, cualquier elemento que intente utilizarla debe mostrar una fuente alternativa _invisible_. Si la fuente se carga correctamente durante este período, se utiliza normalmente.
- Tiempo de intercambio de fuente
  - : Si la fuente no está cargada, cualquier elemento que intente usarla debe mostrar una fuente alternativa. Si la fuente se carga correctamente durante este período, se utiliza normalmente.
- Tiempo de fallo de la fuente
  - : Si la fuente no está cargada el agente de usuario lo trata como una descarga fallida y utiliza una fuente alternativa.

{{cssinfo}}

## Sintaxis

```css
/* Valores */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### Valores

- `auto`
  - : El agente de usuario define la estrategia de visualización de fuentes.
- `block`
  - : Establece un tiempo de bloqueo de la fuente corto y un periodo de intercambio infinito
- `swap`
  - : No establece tiempo de bloqueo para la fuente y un tiempo infinito de intercambio.
- `fallback`
  - : Establece un tiempo de bloqueo muy pequeño y un período de intercambio corto.
- `optional`
  - : Establece un tiempo de bloqueo muy corto y sin tiempo de intercambio.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```css
@font-face {
  font-family: ExampleFont;
  src:
    url(/path/to/fonts/examplefont.woff) format("woff"),
    url(/path/to/fonts/examplefont.eot) format("eot");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
