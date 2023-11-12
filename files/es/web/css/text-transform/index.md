---
title: text-transform
slug: Web/CSS/text-transform
---

{{CSSRef}}

## Resumen

La propiedad CSS **`text-transform`** especifica el cambio entre mayúsculas y minúsculas del texto de un elemento. Puede ser usada para que un texto aparezca completamente en mayúsculas, en minúsculas, o con la primera letra de cada palabra en mayúscula.

La propiedad `text-transform` toma en cuenta las reglas específicas del idioma, como:

- en lenguas turcas, como turco (`tr`), azerí (`az`), tártaro de Crimea (`crh`), tártaro de Volga (`tt`), y baskir (`ba`), hay dos tipos de i, con y sin punto, y dos pares de mayúscula/minúscula: `i`/`İ` e `ı`/`I`.
- En alemán (`de`), la `ß` se vuelve `SS` en mayúsculas.
- En holandés (`nl`), el dígrafo `ij` se vuelve `IJ`, aún con `text-transform: capitalize`, que solamente convierte la primera letra de una palabra en mayúsculas.
- En griego (`el`), las vocales pierden su acento cuando la palabra completa está en mayúsculas (`ά`/`Α`), excepto por la eta disyuntiva (`ή`/`Ή`). Además, los diptongos con acento en la primera vocal cambian el acento por diéresis en la segunda vocal (`άι`/`ΑΪ`).
- En griego (`el`), el caracter sigma en minúscula tiene dos formas: `σ` y `ς`. `ς` es usada solamente cuando la sigma termina la palabra. Cuando se aplica `text-transform: lowercase` a una sigma mayúscula (`Σ`), el navegador necesita elegir la minúscula correcta de acuerdo con el contexto.

Por otro lado, algunas reglas de mapeo específicas no son tomada en cuenta por ningun navegador, como:

- en gaélico (`ga`), una letra prefijo se mantiene en minúsculas cuando la inicial base es convertida a mayúscula, así, en este ejemplo, el símbolo `h-` no debería cambiar a mayúscula: `text-transform: uppercase` cambiará `Meud na h-aplacaid` a `MEUD NA H-APLACAID`, lo cual viola las reglas ortográficas, cuando debería ser `MEUD NA h-APLACAID.`

El idioma es definido por el atributo HTML `lang` o el atributo `xml:lang`.

El soporte para estos casos específicos varía de un navegador a otro, véase la [tabla de compatibilidad de navegadores](#Compatibilidad_de_navegadores).

{{cssinfo}}

## Sintáxis

```css
/* Valores clave */
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: none;
text-transform: full-width;

/* Valores globales */
text-transform: inherit;
text-transform: initial;
text-transform: unset;
```

### Valores

- `capitalize`

  - : Es una palabra clave que fuerza a que la primera _letra_ de cada palabra sea convertida a mayúscula. EL resto de caracteres no es modificado; eso significa que mantienen su tamaño original, como haya sido escrito en el texto del elemento. Una letra es cualquier caracter Unicode que sea parte de la categoría general de Letras o Números {{experimental_inline}}: esto excluye cualquier signo de puntuación o símbolos al principio de la palabra.

    > **Nota:** Los autores no deben esperar que `capitalize` siga las convenciones de título específicas del lenguaje (como lo es en inglés el excluir artículos).

- `uppercase`
  - : Es una palabra clave que fuerza a todos los caracteres a ser convertidos a mayúsculas.
- `lowercase`
  - : Es una palabra clave que fuerza a todos los caracteres a ser convertidos a minúsculas.
- `none`
  - : Es una palabra clave que previene que sea cambiado el tamaño de los caracteres.
- `full-width` {{experimental_inline}}
  - : Es una palabra clave que fuerza que la escritura de un caracter, principalmente ideogramas y del alfabeto latín, abarque el espacio dentro de un cuadro, permitiendo que queden alineados al alfabeto asiático del este (como el chino o japonés).

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### `none`

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong>
</p>
<p>
  text-transform: none
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: none;
}
strong {
  float: right;
}
```

Esto muestra ninguna transformación de texto.

{{ EmbedLiveSample('', '100%', '100px') }}

### `capitalize` (General)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Esto muestra un texto con la primera letra de cada palabra en mayúsculas.

{{ EmbedLiveSample('capitalize_(General)', '100%', '100px') }}

### `capitalize` (Puntuación)

```html
<p>
  Initial String
  <strong
    >(this) “is” [a] –short– -test- «for» *the* _css_ ¿capitalize?
    ?¡transform!</strong
  >
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >(this) “is” [a] –short– -test- «for» *the* _css_ ¿capitalize?
      ?¡transform!</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Esto muestra cómo la puntuación inicial de una palabra es ignorada. La palabra clave busca la primera letra, que es el primer caracter Unicode que forma parte de la categoría general de Letras o Números.

{{ EmbedLiveSample('capitalize_(Punctuation)', '100%', '100px') }}

### `capitalize` (Símbolos)

```html
<p>
  Initial String
  <strong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</strong>
</p>
<p>
  text-transform: capitalize
  <strong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</span></strong>
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Esto muestra cómo los símbolos iniciales son ignorados. La palabra clave busca la primera letra, que es primera caracter Unicode que forma parte de la categoría general de Letras o Números.

{{ EmbedLiveSample('capitalize_(Symbols)', '100%', '100px') }}

### `capitalize` (Dígrafo ij holandés)

```html
<p>
  Initial String
  <strong lang="nl">The Dutch word: "ijsland" starts with a digraph.</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span lang="nl"
      >The Dutch word: "ijsland" starts with a digraph.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Esto muestra cómo el dígrafo holandés _ij_ debe ser manejado como una sola letra.

{{ EmbedLiveSample('capitalize_(Dutch_ij_digraph)', '100%', '100px') }}

### `uppercase` (General)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

Esto muestra la transformación de texto a mayúsculas.

{{ EmbedLiveSample('uppercase_(General)', '100%', '100px') }}

### `uppercase` (Vocales griegas)

```html
<p>
  Initial String
  <strong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</strong>
</p>
<p>
  text-transform: uppercase
  <strong><span>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></strong>
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

Esto muestra cómo las vocales griegas, excepto la disyuntiva _eta_ no deben tener acento, y el acento de la primera vocal en un par de vocales se convierte a diéresis en la segunda vocal.

{{ EmbedLiveSample('uppercase_(Greek_Vowels)', '100%', '100px') }}

### `lowercase` (General)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

Esto muestra la transformación de texto a minúsculas.

{{ EmbedLiveSample('lowercase_(General)', '100%', '100px') }}

### `lowercase` (Σ griega)

```html
<p>
  Initial String
  <strong>Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

Esto muestra cómo el caracter griego sigma (`Σ`) es trsnformado a sigma minúscula regular (`σ`) o a la variante de final de palabra (`ς`), conforme al contexto.

{{ EmbedLiveSample('lowercase_(Greek_Σ)', '100%', '100px') }}

### `full-width` (General)

```html
<p>
  Initial String
  <strong
    >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</strong
  >
</p>
<p>
  text-transform: full-width
  <strong
    ><span
      >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

Algunos caracteres existen en dos formas, de anchura normal y de anchura completa, con diferentes puntos de código en Unicode. La versión de anchura completa es usada para facilitar la mezcla con caracteres ideográficos asiáticos.

{{ EmbedLiveSample('full-width_(General)', '100%', '175px') }}

## Sobre Accesibilidad

Usuarios con discapacidades cognitivas como dislexia pueden encontrar dificultad al leer textos largos cuando se aplica la propiedad `text-transform` con el valor de `uppercase`.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref("font-variant")}}
