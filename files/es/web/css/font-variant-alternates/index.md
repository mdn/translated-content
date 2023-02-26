---
title: font-variant-alternates
slug: Web/CSS/font-variant-alternates
---

{{CSSRef}}

## Resumen

La propiedad CSS **`font-variant-alternates`** controla el uso de glifos alternos. Estos glifos alternos pueden ser referenciados por nombres alternativos en {{cssxref("@font-feature-values")}}.

Las reglas-at definen nombres, para un tipo determinado de glifos alternativos (`stylistic`, `styleset`, `character-variant`, `swash`, `ornament` o `annotation`), asociándolos a un valor OpenType dado. Esta propiedad permite utilizar estos nombres de fácil uso (según se defina en {{cssxref("@font-feature-values")}}) dentro de la hoja de estilos.

{{cssinfo}}

## Sintaxis

```css
font-variant-alternates: normal;
font-variant-alternates: historical-forms;
font-variant-alternates: stylistic(user-defined-ident);
font-variant-alternates: styleset(user-defined-ident);
font-variant-alternates: character-variant(user-defined-ident);
font-variant-alternates: swash(user-defined-ident);
font-variant-alternates: ornaments(user-defined-ident);
font-variant-alternates: annotation(user-defined-ident);
font-variant-alternates: swash(ident1) annotation(ident2);

/* Global values */
font-variant-alternates: initial;
font-variant-alternates: inherit;
font-variant-alternates: unset;
```

### Valores

- `normal`
  - : Se deshabilita el uso de glifos alternos.
- `historical-forms`
  - : Se habilita la muestra de formas históricas , es decir, glifos que eran usados comúnmente en el pasado, pero no en la actualidad. Corresponde al valor de OpenType `hist`.
- `stylistic()`
  - : Esta función habilita la muestra de alternos estilísticos. El parámetro es un nombre específico de fuente mapeado a un número. Corresponde al valor de OpenType `salt`, como `salt 2`.
- `styleset()`
  - : Esta función habilita el uso de un conjunto de alternos estilísticos para caracteres. El parámetro es un nombre de fuente específico mapeado a un número. Corresponde al valor de OpenType `ssXY`, como `ss02`.
- `character-variant()`
  - : Esta función habilita el uso de un conjunto de alternos estilísticos para caracteres. Es muy similar a `styleset()`, aunque la variante aquí no crea glifos coherentes a un set de caracteres; los caracteres individuales tendrán estilos indipendientes, no necesariamente coherentes. El parámetro es un nombre específico de fuente mapeado a un número. Corresponde al valor de OpenType `cvXY`, como `cv02`.
- `swash()`
  - : Esta función habilita la muestra de glifos de tipografía [swash](http://en.wikipedia.org/wiki/Swash_%28typography%29). El parámetro es un nombre específico de fuente mapeado a un número. Corresponde a los valores de OpenType `swsh` y `cswh`, como `swsh 2` y `cswh 2`.
- `ornaments()`

  - : Esta función habilita la muestra de ornamentas, que son [florones](http://en.wikipedia.org/wiki/Fleuron_%28typography%29) y otros glifos de estilo dingbat. El parámetro es un nombre específico de fuente mapeado a un número. Corresponde al valor de OpenType `ornm`, como `ornm 2`.

    > **Nota:** para manteneer la semántica de la fuente, se invita a los diseñadores de fuentes a incluir ornamentas qoe no coincidan con caracteres zingbat de Unicode como variantes de ornamenta al caracter de viñeta (U+2022). Las fuentes bien diseñadas lo harán, aunque muchas otras fuentes no.

- `annotation()`
  - : Esta función habilita la muestra de anotaciones, como dígitos circulares o caracteres invertidos. El parámetro es un nombre de fuente específico mapeado a un número. Corresponde al valor de OpenType `nalt`, como `nalt 2`.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<p>Firefox rocks!</p>
<p class="variant">Firefox rocks!</p>
```

### CSS

```css
p.variant {
  font-family: Leitura Display Swashes;
  font-variant-alternates: swash(2);
}
```

### Resultado

**Nota:** se necesita la fuente Open Type [Leitura Display Swashes](http://ufonts.com/download/leituradisplay-swashes-opentype/470776.html) instalada para que este ejemplo funcione

{{EmbedLiveSample('', '', '')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
