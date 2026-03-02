---
title: contrast()
slug: Web/CSS/Reference/Values/filter-function/contrast
original_slug: Web/CSS/filter-function/contrast
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`contrast()`** permet d'ajuster le contraste d'une image. Le résultat de cette fonction est une valeur {{CSSxRef("&lt;filter-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: contrast()")}}

```css interactive-example-choice
filter: contrast(1);
```

```css interactive-example-choice
filter: contrast(1.75);
```

```css interactive-example-choice
filter: contrast(50%);
```

```css interactive-example-choice
filter: contrast(0);
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
contrast(amount)
```

### Valeurs

- `amount` {{Optional_Inline}}
  - : Contraste du résultat, indiqué sous la forme d'un nombre ({{CSSxRef("&lt;number&gt;")}}) ou d'un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}). Une valeur inférieure à `100%` diminue le contraste, tandis qu'une valeur supérieure à `100%` l'augmente. Une valeur de `0` ou `0%` rend l'image complètement grise, tandis qu'une valeur de `1` ou `100%` laisse l'entrée inchangée. Les valeurs négatives ne sont pas autorisées. La valeur initiale pour l'{{Glossary("interpolation")}} est `1`. La valeur par défaut est `1`.

Voici des paires de valeurs équivalentes&nbsp;:

```css
contrast(0)    /* Complètement gris */
contrast(0%)

contrast(0.65) /* 65% de contraste */
contrast(65%)

contrast()     /* Aucun effet */
contrast(1)
contrast(100%)

contrast(2)    /* Double le contraste */
contrast(200%)
```

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Avec la propriété `backdrop-filter`

Cet exemple applique un filtre `contrast()` via la propriété CSS {{CSSxRef("backdrop-filter")}} au paragraphe et au texte à chasse fixe, modifiant les couleurs de la zone derrière les éléments `<p>` et `<code>`.

```css
.container {
  background: url("unity_for_the_people.jpg") no-repeat center / contain #333399;
}
p {
  backdrop-filter: contrast(0.5);
}
code {
  backdrop-filter: contrast(0.15);
}
```

```css hidden
.container {
  padding: 3rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: white;
  font-family: sans-serif;
}
```

```html hidden
<div class="container">
  <p>
    Veillez toujours à ce qu'il y ait suffisamment de contraste entre le texte
    et toutes les couleurs d'arrière-plan. Si vous pensez que votre texte peut
    se retrouver au-dessus d'une image de fond, ajoutez un
    <code>backdrop-filter</code>. Réduire le contraste des couleurs
    d'arrière-plan avec le filtre <code>contrast()</code> peut améliorer la
    lisibilité mais ne garantit pas l'accessibilité.
  </p>
</div>
```

{{EmbedLiveSample('Avec la propriété `backdrop-filter`','100%','260')}}

### Avec la propriété `filter`

Cet exemple applique un filtre `contrast()` via la propriété CSS {{CSSxRef("filter")}}, modifiant le contraste en ajustant les couleurs de l'ensemble de l'élément, y compris le contenu, la bordure, l'arrière-plan et les ombres.

```css
p:first-of-type {
  filter: contrast(30%);
}
p:last-of-type {
  filter: contrast(300%);
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
<p>Ce paragraphe a un contraste réduit.</p>
<p>Ce paragraphe a un contraste normal.</p>
<p>Ce paragraphe a un contraste augmenté.</p>
```

{{EmbedLiveSample('Avec la propriété `filter`','100%','320')}}

### Avec `url()` et un filtre SVG `contrast`

L'élément SVG {{SVGElement("filter")}} permet de définir des effets de filtre personnalisés qui peuvent ensuite être référencés par [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id). La primitive {{SVGElement("feComponentTransfer")}} du filtre permet un remappage des couleurs au niveau du pixel. Exemple&nbsp;:

```html live-sample___svg_filter
<svg
  xmlns="http://www.w3.org/2000/svg"
  id="svg"
  viewBox="0 0 240 151"
  height="0"
  width="0"
  overflow="visible"
  color-interpolation-filters="sRGB">
  <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2" intercept="-0.5" />
      <feFuncG type="linear" slope="2" intercept="-0.5" />
      <feFuncB type="linear" slope="2" intercept="-0.5" />
    </feComponentTransfer>
  </filter>
</svg>
```

Ces valeurs produisent le même résultat&nbsp;:

```css
filter: contrast(200%);
filter: url("#contrast"); /* avec SVG intégré */
filter: url("folder/fileName.svg#contrast"); /* définition du filtre SVG externe */
```

Cet exemple montre trois images&nbsp;: l'image avec la fonction de filtre `contrast()` appliquée, l'image avec un filtre `url()` équivalent, et l'image originale pour comparaison&nbsp;:

```html hidden live-sample___svg_filter
<table cellpadding="5">
  <thead>
    <tr>
      <th><code>contrast()</code></th>
      <th><code>url()</code></th>
      <th>Image d'origine</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="css-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          class="svg-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
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
  filter: contrast(200%);
}
.svg-filter {
  filter: url("#contrast");
}
svg:not(:root) {
  display: none;
}
```

{{EmbedLiveSample('svg_filter','100%','280')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module des [effets de filtre CSS](/fr/docs/Web/CSS/Guides/Filter_effects)
- Les autres fonctions {{CSSxRef("&lt;filter-function&gt;")}} disponibles pour être utilisées dans les valeurs des propriétés {{CSSxRef("filter")}} et {{CSSxRef("backdrop-filter")}} incluent&nbsp;:
  - {{CSSxRef("filter-function/blur", "blur()")}}
  - {{CSSxRef("filter-function/brightness", "brightness()")}}
  - {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - {{CSSxRef("filter-function/invert", "invert()")}}
  - {{CSSxRef("filter-function/opacity", "opacity()")}}
  - {{CSSxRef("filter-function/saturate", "saturate()")}}
  - {{CSSxRef("filter-function/sepia", "sepia()")}}
