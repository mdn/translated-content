---
title: animation-duration
slug: Web/CSS/animation-duration
---

{{ CSSRef() }}

{{ SeeCompatTable() }}

## Resumen

La propiedad CSS `animation-duration` indica la cantidad de tiempo que la animación tarda en completar un ciclo (duración).

El valor por defecto es `0s`, que indica que la animación no debe producirse.

Es conveniente usar la propiedad abreviada {{ cssxref("animation") }} para ajustar todas las propiedades de animación a la vez

{{cssinfo}}

## Sintaxis

```
Gramatica formal: {{csssyntax("animation-duration")}}

animation-duration: 6s
animation-duration: 120ms
animation-duration: 1s, 15s
animation-duration: 10s, 30s, 230ms
```

### Valores

- `<time>`
  - : El tiempo que tarda la animación en terminar su secuencia. Podemos especificarlo en segundos (usando `s`) o milisegundos (usando `ms`). Si no especificamos la unidad, la sentencia no será válida.

> **Nota:** No acepta valores negativos, si los ponemos la sentencia se ignorará. Algunas implementaciones antiguas (con prefijos) pueden considerar los valores negativos como si fueran `0s`.

## Ejemplos

Visitar [CSS animations](/es/CSS/Usando_animaciones_CSS) para ver algunos ejemplos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Consultar también

- [Usando animaciones CSS](/es/docs/CSS/Usando_animaciones_CSS)
- {{ domxref("AnimationEvent", "AnimationEvent") }}
