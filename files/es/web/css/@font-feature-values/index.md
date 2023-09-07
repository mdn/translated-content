---
title: "@font-feature-values"
slug: Web/CSS/@font-feature-values
---

{{CSSRef}}

## Resumen

La [regla-at](/es/docs/Web/CSS/At-rule) [CSS](/es/docs/Web/CSS) **`@font-feature-values`** permite a los autores usar un nombre común de {{cssxref("font-variant-alternates")}} para características activadas de distintas formas en OpenType. Permite simplificar el código CSS cuando se usan distintas fuentes.

```css
@font-feature-values Font One {
  /* Cómo activar nice-style en Font One */
  @styleset {
    nice-style: 12;
  }
}

@font-feature-values Font Two {
  /* Cómo activar nice-style en Font Two */
  @styleset {
    nice-style: 4;
  }
}

/* … */

.nice-look {
  font-variant-alternates: styleset(nice-style);
} /* Independiente de la fuente */
```

La regla-at `@font-feature-values` debe ser usada en la parte superior de la hoja de estilos, pero también dentro de [Grupos de reglas condicionales](/es/docs/Web/CSS/At-rule#Grupos_de_Reglas_Condicionales).

## Sintaxis

### Bloques de valores de características

- `@swash`
  - : Especifica el nombre de una característica que trabajará con la notación funcional {{cssxref("font-variant-alternates", "swash()", "#swash()")}} de {{cssxref("font-variant-alternates")}}. La definición de un valor de swash permite solo un valor: `ident1: 2` es válido con `ident2: 2 4` no lo es.
- `@annotation`
  - : Especifica el nombre de una característica que trabajará con la notación funcional {{cssxref("font-variant-alternates", "annotation()", "#annotation()")}} de {{cssxref("font-variant-alternates")}}. La definición de un valor de annotation permite solo un valor: `ident1: 2` es válido con `ident2: 2 4` no lo es.
- `@ornaments`
  - : Especifica el nombre de una característica que trabajará con la notación funcional {{cssxref("font-variant-alternates", "ornaments()", "#ornaments()")}} de {{cssxref("font-variant-alternates")}}. La definición de un valor de ornaments permite solo un valor: `ident1: 2` es válido con `ident2: 2 4` no lo es.
- `@stylistic`
  - : Especifica el nombre de una característica que trabajará con la notación funcional {{cssxref("font-variant-alternates", "stylistic()", "#stylistic()")}} de {{cssxref("font-variant-alternates")}}. La definición de un valor de stylistic permite solo un valor: `ident1: 2` es válido con `ident2: 2 4` no lo es.
- `@styleset`
  - : Especifica el nombre de una característica que trabajará con la notación funcional {{cssxref("font-variant-alternates", "styleset()", "#styleset()")}} de {{cssxref("font-variant-alternates")}}. La definición de un valor de stylset permite una cantidad ilimitada de valores: `ident1: 2 4 12 1` corresponden a los valores OpenType `ss02`, `ss04`, `ss12`, `ss01`. Nótese que los valores superiores a `99` son válidos, pero no corresponden a ningún valor OpenType y serán ignorados.
- `@character-variant`
  - : Especifica el nombre de una característica que trabajará con la notación funcional {{cssxref("font-variant-alternates", "character-variant()", "#character-variant()")}} de {{cssxref("font-variant-alternates")}}. La definición de un valor de character-variant permite uno o dos valores: `ident1: 2` corresponde a `cv02=1` y `ident2: 2 4` corresponde a `cv02)4` e `ident2: 2 4 5` no es válido.

### Sintaxis formal

{{csssyntax}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La propiedad {{cssxref("font-variant-alternates")}} que usa valores definidos por esta regla-at.
