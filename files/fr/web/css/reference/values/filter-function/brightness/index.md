---
title: brightness()
slug: Web/CSS/Reference/Values/filter-function/brightness
original_slug: Web/CSS/filter-function/brightness
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`brightness()`** applique un coefficient multiplicateur linéaire sur un élément ou une image en entrée, rendant l'image plus claire ou plus sombre. Le résultat de cette fonction est une valeur {{CSSxRef("&lt;filter-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: brightness()")}}

```css interactive-example-choice
filter: brightness(1);
```

```css interactive-example-choice
filter: brightness(1.75);
```

```css interactive-example-choice
filter: brightness(50%);
```

```css interactive-example-choice
filter: brightness(0);
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
brightness(amount)
```

### Valeurs

- `amount` {{Optional_Inline}}
  - : La clarté indiquée sous la forme d'un nombre ({{CSSxRef("&lt;number&gt;")}}) ou d'un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}). Une valeur inférieure à `100%` assombrit l'image ou l'élément, tandis qu'une valeur supérieure à `100%` l'éclaircit. Une valeur de `0%` rend l'image ou l'élément complètement noir, tandis qu'une valeur de `100%` laisse l'entrée inchangée. Les autres valeurs entre `0%` et `100%` appliquent un effet multiplicateur linéaire. Les valeurs supérieures à `100%` sont autorisées et donnent un résultat plus clair. La valeur initiale pour l'{{Glossary("interpolation")}} est `1`. Les valeurs négatives ne sont pas autorisées. La valeur par défaut est `1`.

Voici des paires de valeurs équivalentes&nbsp;:

```css
brightness(0)   /* Clarté réduite à zéro, l'entrée devient noire */
brightness(0%)

brightness(0.4) /* Clarté réduite à 40%, l'entrée est 60% plus sombre */
brightness(40%)

brightness()     /* Clarté inchangée */
brightness(1)
brightness(100%)

brightness(2)   /* Clarté doublée */
brightness(200%)
```

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser `brightness()` avec la propriété `backdrop-filter`

Cet exemple montre comment appliquer le filtre `brightness()` à un paragraphe via la propriété CSS {{CSSxRef("backdrop-filter")}}.

#### CSS

```css
.container {
  background: url("be_fierce.jpg") no-repeat right / contain #d4d5b2;
}
p {
  backdrop-filter: brightness(150%);
  text-shadow: 2px 2px white;
}
```

```css hidden
.container {
  padding: 5rem 3rem 1rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: black;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div class="container">
  <p>
    Text on images can be illegible and inaccessible even with a drop shadow.
  </p>
</div>
```

#### Résultat

{{EmbedLiveSample('Utiliser `brightness()` avec la propriété `backdrop-filter`', '100%', '280')}}

Dans cet exemple, les couleurs de la zone derrière l'élément HTML `<p>` sont modifiées linéairement. Si la propriété CSS `backdrop-filter` était définie à `brightness(0%)`, la zone `<div>` contenant le paragraphe `<p>` serait noire et masquerait l'image en arrière-plan. Avec `brightness(100%)`, la couleur de la zone `<div>` serait identique à la valeur d'entrée `#d4d5b2` et l'image derrière serait totalement transparente. Avec la luminosité réglée à `150%` comme dans cet exemple, les couleurs de l'image en arrière-plan sont masquées par la luminosité de l'élément `<div>`.

### Utiliser `brightness()` avec la propriété `filter`

Dans cet exemple, un filtre `brightness()` est appliqué à l'ensemble de l'élément, y compris le contenu, la bordure et l'image de fond, via la propriété CSS {{CSSxRef("filter")}}. Le résultat montre trois variantes avec différentes valeurs de clarté.

```css
p:first-of-type {
  filter: brightness(50%);
}
p:last-of-type {
  filter: brightness(200%);
}
```

```css hidden
p {
  text-shadow: 2px 2px blue;
  background-color: magenta;
  color: palegoldenrod;
  border: 1em solid rebeccapurple;
  box-shadow:
    inset -5px -5px red,
    5px 5px yellow;
  padding: 0.25rem;
  font-size: 1.25rem;
  font-family: sans-serif;
  width: 85vw;
}
```

```html hidden
<p>Ce paragraphe a une luminosité réduite.</p>
<p>Ce paragraphe a une luminosité normale.</p>
<p>Ce paragraphe a une luminosité accrue.</p>
```

{{EmbedLiveSample('Utiliser `brightness()` avec la propriété `filter`','100%','280')}}

### Utiliser `brightness()` avec un filtre SVG via `url()`

L'élément SVG {{SVGElement("filter")}} permet de définir des effets de filtre personnalisés qui peuvent ensuite être référencés par [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id). Le filtre utilise la primitive {{SVGElement("feComponentTransfer")}} pour permettre un remappage des couleurs au niveau du pixel.

Dans cet exemple, pour créer un filtre qui assombrit le contenu de 25&nbsp;% (c'est-à-dire 75&nbsp;% de la clarté d'origine), l'attribut `slope` est fixé à `0.75`. On peut alors référencer ce filtre par son identifiant.

Exemple&nbsp;:

```html live-sample___svg_filter
<svg role="none">
  <filter id="darken25" color-interpolation-filters="sRGB">
    <feComponentTransfer>
      <feFuncR type="linear" slope="0.75" />
      <feFuncG type="linear" slope="0.75" />
      <feFuncB type="linear" slope="0.75" />
    </feComponentTransfer>
  </filter>
</svg>
```

Les déclarations suivantes produisent un effet similaire&nbsp;:

```css
filter: brightness(75%);
filter: url("#darken25"); /* avec SVG intégré */
filter: url("folder/fileName.svg#darken25"); /* définition de filtre svg externe */
```

Dans les images ci-dessous, la première applique la fonction de filtre CSS `brightness()`, la seconde applique un filtre SVG équivalent, et la troisième est l'image originale pour comparaison.

```html hidden live-sample___svg_filter
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
          class="css-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="darkened pride flag" />
      </td>
      <td>
        <img
          class="svg-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="darkened pride flag" />
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

```css hidden live-sample___svg_filter
.css-filter {
  filter: brightness(0.75);
}
.svg-filter {
  filter: url("#darken25");
}
svg:not(:root) {
  display: none;
}
```

{{EmbedLiveSample('svg_filter', '100%', '280')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module des [effets de filtre CSS](/fr/docs/Web/CSS/Guides/Filter_effects)
- Les autres fonctions de {{CSSxRef("&lt;filter-function&gt;")}} disponibles pour être utilisées dans les valeurs des propriétés {{CSSxRef("filter")}} et {{CSSxRef("backdrop-filter")}} incluent&nbsp;:
  - {{CSSxRef("filter-function/blur", "blur()")}}
  - {{CSSxRef("filter-function/contrast", "contrast()")}}
  - {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - {{CSSxRef("filter-function/invert", "invert()")}}
  - {{CSSxRef("filter-function/opacity", "opacity()")}}
  - {{CSSxRef("filter-function/saturate", "saturate()")}}
  - {{CSSxRef("filter-function/sepia", "sepia()")}}
