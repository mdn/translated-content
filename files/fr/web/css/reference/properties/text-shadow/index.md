---
title: Propriété CSS `text-shadow`
short-title: text-shadow
slug: Web/CSS/Reference/Properties/text-shadow
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-shadow`** ajoute des ombres au texte. Elle accepte une liste d'ombres à appliquer au texte et aux {{CSSxRef("text-decoration")}} de l'élément. Chaque ombre est décrite par une certaine combinaison de décalages X et Y de l'élément, de rayon de flou et de couleur.

{{InteractiveExample("Démonstration CSS&nbsp;: text-shadow")}}

```css interactive-example-choice
text-shadow: 1px 1px 2px pink;
```

```css interactive-example-choice
text-shadow: #ffcc00 1px 0 10px;
```

```css interactive-example-choice
text-shadow: 5px 5px #558abb;
```

```css interactive-example-choice
text-shadow: red 2px 5px;
```

```css interactive-example-choice
text-shadow: 5px 10px;
```

```css interactive-example-choice
text-shadow:
  1px 1px 2px red,
  0 0 1em blue,
  0 0 0.2em blue;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Loin, dans les zones reculées et inexplorées de l'extrémité démodée du bras
    spiral occidental de la Galaxie…
  </p>
</section>
```

```css interactive-example
p {
  font:
    1.5em "Georgia",
    serif;
}
```

## Syntaxe

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #ffcc00 1px 0 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Utiliser les défauts pour la couleur et le rayon de flou */
text-shadow: 5px 10px;

/* Valeurs globales */
text-shadow: inherit;
text-shadow: initial;
text-shadow: revert;
text-shadow: revert-layer;
text-shadow: unset;
```

Cette propriété est définie comme une liste d'ombres séparées par des virgules.

Chaque ombre est définie par deux ou trois valeurs `<length>`, suivies d'une valeur `<color>`. Les deux premières valeurs `<length>` sont les valeurs de décalage `<offset-x>` et `<offset-y>`. La troisième valeur `<length>`, facultative, est le rayon de flou `<blur-radius>`. La valeur `<color>` est la couleur de l'ombre.

Lorsque plus d'une ombre est indiquée, les ombres sont appliquées d'avant en arrière, avec la première ombre définie sur le dessus.

Cette propriété s'applique aux deux [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) {{CSSxRef("::first-line")}} et {{CSSxRef("::first-letter")}}.

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : Optionnelle. La couleur de l'ombre. Elle peut être définie avant ou après les valeurs de décalage. Si non définie, la valeur de la couleur est laissée à l'agent utilisateur, donc quand une cohérence entre les navigateurs est désirée, vous devriez la définir explicitement.
- `<offset-x> <offset-y>`
  - : Obligatoires. Ces valeurs {{CSSxRef("&lt;length&gt;")}} définissent la distance de l'ombre par rapport au texte. `<offset-x>` définit la distance horizontale ; une valeur négative place l'ombre à gauche du texte. `<offset-y>` définit la distance verticale&nbsp;; une valeur négative place l'ombre au-dessus du texte. Si les deux valeurs sont à `0`, l'ombre sera placée exactement derrière le texte, bien qu'elle puisse être partiellement visible du fait de l'effet du `<blur-radius>`.
- `<blur-radius>`
  - : Optionnelle. C'est une valeur {{CSSxRef("&lt;length&gt;")}}. Plus la valeur sera élevée, plus le flou sera important&nbsp;; l'ombre deviendra plus large et plus légère. Si non définie, elle a pour défaut `0`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ombre simple

```css
.red-text-shadow {
  text-shadow: red 0 -2px;
}
```

```html
<p class="red-text-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
</p>
```

{{EmbedLiveSample("Ombre simple", 660, 90)}}

### Ombres multiples

```css
.white-text-with-blue-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
  color: white;
  font:
    1.5em "Georgia",
    serif;
}
```

```html
<p class="white-text-with-blue-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
</p>
```

{{EmbedLiveSample("Ombres multiples", 660, 170)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Introduction aux ombres de texte](/fr/docs/Web/CSS/Guides/Text_decoration/Text_shadows)
- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- La propriété {{CSSxRef("box-shadow")}}
- La fonction {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
- Le module [de décoration de texte CSS](/fr/docs/Web/CSS/Guides/Text_decoration)
