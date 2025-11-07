---
title: invert()
slug: Web/CSS/Reference/Values/filter-function/invert
original_slug: Web/CSS/filter-function/invert
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

La [fonction](/fr/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) [CSS](/fr/docs/Web/CSS) **`invert()`** permet d'inverser les couleurs de l'image. Le résultat de cette fonction est une valeur {{cssxref("&lt;filter-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: invert()")}}

```css interactive-example-choice
filter: invert(0);
```

```css interactive-example-choice
filter: invert(0.3);
```

```css interactive-example-choice
filter: invert(50%);
```

```css interactive-example-choice
filter: invert(70%);
```

```css interactive-example-choice
filter: invert(1);
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
/* Aucune inversion */
invert(0)

/* Inversion complète */
invert()
invert(1)
invert(100%)

/* Inversion à 60% */
invert(.6)
invert(60%)
```

### Paramètres

- {{cssxref("&lt;number&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Définit le niveau d'inversion. Une valeur de `100%` inverse complètement l'image, tandis qu'une valeur de `0%` laisse l'image inchangée. Les valeurs comprises entre `0%` et `100%` appliquent un effet proportionnel. La valeur initiale utilisée pour {{Glossary("interpolation", "l'interpolation")}} est `0`. La valeur par défaut est `1`.

## Syntaxe formelle

{{CSSSyntax}}

## Filtre SVG

L'élément de filtre SVG {{SVGElement("feComponentTransfer")}} peut aussi être utilisé pour inverser le contenu en appliquant une inversion équivalente sur les éléments imbriqués {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}} et {{SVGElement("feFuncB")}} de type table. En définissant la même valeur `tableValue` pour les primitives de filtre rouge, vert et bleu, on peut ensuite référencer l'effet SVG par l'identifiant de l'élément {{SVGElement("filter")}}&nbsp;:

```html
<svg role="none">
  <filter id="invert90">
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0.1 0" />
      <feFuncG type="table" tableValues="0.1 0" />
      <feFuncB type="table" tableValues="0.1 0" />
    </feComponentTransfer>
  </filter>
</svg>
```

Les déclarations suivantes produisent le même effet&nbsp;:

```css
filter: invert(0.9);
filter: invert(90%);
filter: url("#invert90"); /* avec SVG intégré */
filter: url("fileName.svg#invert90"); /* SVG externe */
```

## Exemples

Cet exemple montre trois images à titre de comparaison&nbsp;: une image avec la fonction de filtre `invert()` appliquée, une image avec la fonction SVG équivalente, et l'image d'origine&nbsp;:

### SVG

On crée un filtre SVG qui inverse le contenu auquel il est appliqué à 70&nbsp;%&nbsp;:

```html
<svg height="0">
  <filter id="invert">
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0.3 0" />
      <feFuncG type="table" tableValues="0.3 0" />
      <feFuncB type="table" tableValues="0.3 0" />
    </feComponentTransfer>
  </filter>
</svg>
```

### CSS

On ajoute du CSS qui inverse les éléments selon leur classe `filter` ou `svgFilter`&nbsp;:

```css
.filter {
  filter: invert(70%);
}

.svgFilter {
  filter: url("#invert");
}
```

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th>Filtre <code>invert()</code></th>
      <th>Équivalent SVG</th>
      <th>Image d'origine</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="svgFilter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <svg id="svg" height="220" width="220" overflow="visible">
          <filter id="svgInvert">
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.3 0" />
              <feFuncG type="table" tableValues="0.3 0" />
              <feFuncB type="table" tableValues="0.3 0" />
            </feComponentTransfer>
          </filter>
          <image
            href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            filter="url('#svgInvert')" />
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

{{EmbedLiveSample("Exemples", "100%", 280)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

Les autres fonctions {{cssxref("&lt;filter-function&gt;")}} pouvant être utilisées dans les valeurs des propriétés {{cssxref("filter")}} et {{cssxref("backdrop-filter")}} sont&nbsp;:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
