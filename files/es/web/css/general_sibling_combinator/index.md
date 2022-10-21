---
title: Selectores de hermanos generales
slug: Web/CSS/General_sibling_combinator
tags:
  - CSS
  - NeedsMobileBrowserCompatibility
  - Referencia CSS
  - Selectores
translation_of: Web/CSS/General_sibling_combinator
original_slug: Web/CSS/Selectores_hermanos_generales
---
{{CSSRef("Selectors")}}

## Resumen

El combinador `~` separa dos selectores y selecciona el segundo elemento sólo si está precedido por el primero y ambos comparten un padre común.

## Sintaxis

```
elemento ~ elemento { estilos }
```

## Ejemplo

```css
p ~ span {
  color: red;
}
```

```html
<span>Este span no es rojo.</span>
<p>Aquí hay un párrafo.</p>
<code>Aquí hay algo de código.</code>
<span>Aquí hay un span. Es rojo porque va precedido de un párrafo y ambos comparten el mismo padre.</span>
```

{{ EmbedLiveSample('Example', 320, 150) }}

## Especificaciones

| Especificación                                                                                                                   | Estado                               | Comentarios |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{ SpecName('CSS4 Selectors', '#general-sibling-combinators', 'following-sibling combinator') }} | {{Spec2('CSS4 Selectors')}} |             |
| {{ SpecName('CSS3 Selectors', '#general-sibling-combinators', 'general sibling combinator') }}     | {{Spec2('CSS3 Selectors')}} |             |

## Compatibilidad entre navegadores

{{Compat("css.selectors.general_sibling")}}

## Ver también

- [Selectores de hermanos adyacentes](/es/docs/Web/CSS/Adjacent_sibling_selectors)
