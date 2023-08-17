---
title: font-language-override
slug: Web/CSS/font-language-override
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

La propiedad CSS **`font-language-override`** controla el uso de glifos específicos del idioma en un tipo de letra (tipografía).

De forma predeterminada, el atributo `lang` de HTML le dice a los navegadores que muestren glifos diseñados específicamente para ese idioma. Por ejemplo, muchas tipografías tienen un carácter especial para el dígrafo `fi` que fusiona el punto de la "i" con la "f". Sin embargo, si el idioma está configurado en turco, es probable que el tipo de letra sepa que no debe usar el glifo fusionado; El turco tiene dos versiones de la "i", una con un punto (`i`) y otra sin (`ı`), y usar la ligadura transformaría incorrectamente una "i" con punto en una "i" sin punto.

La propiedad `font-language-override` le permite anular el comportamiento del tipo de letra para un idioma específico. Esto es útil, por ejemplo, cuando el tipo de letra que está utilizando carece del soporte adecuado para el idioma. Por ejemplo, si un tipo de letra no tiene las reglas adecuadas para el idioma azerí, puede obligar a la tipografía a usar glifos turcos, que siguen reglas similares.

## Sintaxis

```css
/* Valor de la palabra clave */
font-language-override: normal;

/* Valores <string> */
font-language-override: "ENG"; /* Usa glifos ingleses */
font-language-override: "TRK"; /* Usa glifos turcos */

/* Valores globales */
font-language-override: inherit;
font-language-override: initial;
font-language-override: revert;
font-language-override: revert-layer;
font-language-override: unset;
```

La propiedad `font-language-override` se especifica con la palabra clave `normal` o `<string>`.

### Valores

- `normal`
  - : Le dice al navegador que use glifos de tipografía que sean apropiados para el idioma especificado por el atributo `lang`. Este es el valor predeterminado.
- {{cssxref("string")}}
  - : Le dice al navegador que use glifos de tipografía que sean apropiados para el idioma especificado por la cadena. La cadena debe coincidir con una etiqueta de idioma que se encuentra en el [sistema de idioma OpenType](https://docs.microsoft.com/typography/opentype/spec/languagetags). Por ejemplo, "ENG" es inglés y "KOR" es coreano.

## Definicion formal

{{cssinfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Usando glifos daneses

#### HTML

```html
<p class="para1">Configuración de idioma por defecto.</p>
<p class="para2">
  Esta es una cadena con <code>font-language-override</code> establecido en
  danés.
</p>
```

#### CSS

```css
p.para1 {
  font-language-override: normal;
}

p.para2 {
  font-language-override: "DAN";
}
```

#### Resultado

{{ EmbedLiveSample('Usando glifos daneses') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-kerning")}}.
