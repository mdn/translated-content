---
title: blur()
slug: Web/CSS/filter-function/blur
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

La [fonction](/fr/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) [CSS](/fr/docs/Web/CSS) **`blur()`** permet d'appliquer [un flou gaussien](https://fr.wikipedia.org/wiki/Flou_gaussien) sur l'image d'entrée. Le résultat de cette fonction est une valeur {{cssxref("&lt;filter-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: blur()")}}

```css interactive-example-choice
filter: blur(0);
```

```css interactive-example-choice
filter: blur(4px);
```

```css interactive-example-choice
filter: blur(1.5rem);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## Syntaxe

```css
blur()         /* Aucun effet */
blur(0)        /* Aucun effet */

blur(8px)      /* Flou avec un rayon de 8px */
blur(1.17rem)  /* Flou avec un rayon de 1.17rem */
```

### Paramètres

- {{cssxref("length")}} {{Optional_Inline}}
  - : Définit le rayon du flou. Il correspond à la valeur de l'écart-type de la fonction gaussienne, c'est-à-dire le nombre de pixels de l'écran qui se mélangent entre eux. Plus la valeur est grande, plus le flou sera prononcé. Une valeur de `0` laisse l'entrée inchangée. La valeur initiale pour l'{{Glossary("interpolation")}} est `0`. Les valeurs en pourcentage ne sont pas valides. La valeur par défaut est `0`.

## Filtre SVG

L'élément de filtre SVG {{SVGElement("feGaussianBlur")}} peut aussi être utilisé pour flouter un contenu. L'attribut {{SVGAttr("stdDeviation")}} du filtre accepte jusqu'à deux valeurs, ce qui permet de créer des flous plus complexes. Pour obtenir un flou équivalent, il suffit d'indiquer une seule valeur pour `stdDeviation`. Cet effet SVG peut ensuite être référencé par son identifiant&nbsp;:

```html
<svg role="none">
  <filter id="blur11">
    <feGaussianBlur stdDeviation="1.1" edgeMode="duplicate" />
  </filter>
</svg>
```

Les déclarations suivantes produisent le même effet&nbsp;:

```css
filter: blur(1.1px);
filter: url("#blur11"); /* avec SVG intégré */
filter: url("folder/fileName.svg#blur11"); /* définition de filtre svg externe */
```

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Cet exemple montre trois images&nbsp;: l'image avec une fonction de filtre `blur()` appliquée, l'image avec la fonction de flou SVG équivalente appliquée, et les images originales pour comparaison&nbsp;:

### HTML

```html
<svg role="img" aria-label="Flag">
  <filter id="blur">
    <feGaussianBlur stdDeviation="3.5" edgeMode="duplicate" />
  </filter>
  <image
    href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    filter="url('#blur')" />
</svg>
```

### CSS

```css
.filter {
  filter: blur(3.5px);
}
```

```css hidden
svg:not([height]) {
  display: none;
}
```

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th>Exemple en direct</th>
      <th>Équivalent SVG</th>
      <th>Image d'origine</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <svg id="svg" height="220" width="220" overflow="visible">
          <filter id="svgBlur">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
          <image
            href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            filter="url('#svgBlur')" />
        </svg>
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', '280')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module des [effets de filtre CSS](/fr/docs/Web/CSS/CSS_filter_effects)
- Les autres fonctions de {{cssxref("&lt;filter-function&gt;")}} disponibles pour être utilisées dans les valeurs des propriétés {{cssxref("filter")}} et {{cssxref("backdrop-filter")}} incluent&nbsp;:
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
