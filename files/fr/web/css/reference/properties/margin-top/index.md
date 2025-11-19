---
title: margin-top
slug: Web/CSS/Reference/Properties/margin-top
original_slug: Web/CSS/margin-top
---

{{CSSRef}}

La propriété **`margin-top`** définit l'espace vertical pour la marge appliquée en haut de l'élément. Une valeur négative peut être utilisée.

{{InteractiveExample("CSS Demo: margin-top")}}

```css interactive-example-choice
margin-top: 1em;
```

```css interactive-example-choice
margin-top: 10%;
```

```css interactive-example-choice
margin-top: 10px;
```

```css interactive-example-choice
margin-top: 0;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row"></div>
    <div class="row transition-all" id="example-element"></div>
    <div class="row"></div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

Cette propriété n'a aucun effet sur les éléments non-remplacés en ligne (_inline_) tels que {{HTMLElement("tt")}} ou {{HTMLElement("span")}}.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
margin-top: 10px; /* Une longueur absolue */
margin-top: 1em; /* Une longueur proportionnelle à la taille du texte */
margin-top: 5%; /* Une marge relative à la largeur */
/* du bloc englobant le plus proche */

/* Valeur avec un mot-clé */
margin-top: auto;

/* Valeurs globales */
margin-top: inherit;
margin-top: initial;
margin-top: unset;
```

Le mot-clé `auto` ou une valeur de longueur (`<length>`) ou de pourcentage (`<percentage>`).

### Valeurs

- `<length>`
  - : Cette valeur définit une largeur fixée. Pour les valeurs qui peuvent être utilisées, voir la page sur le type {{cssxref("&lt;length&gt;")}}.
- `<percentage>`
  - : Une valeur en pourcentage (type {{cssxref("&lt;percentage&gt;")}} qui est relative à la **largeur** du bloc englobant.
- `auto`
  - : Voir {{cssxref("margin")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
div {
  background-color: blue;
  background-clip: border-box;
  width: 50px;
  height: 2em;
}
.exemple {
  margin-top: 3em;
  background-color: gold;
  background-clip: border-box;
}
```

### HTML

```html
<div></div>
<p class="exemple">
  C’est ce qui arriva en effet, et bien plus tôt qu’elle ne s’y attendait. Elle
  n’avait pas bu la moitié de la bouteille, que sa tête touchait au plafond et
  qu’elle fut forcée de se baisser pour ne pas se casser le cou.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
