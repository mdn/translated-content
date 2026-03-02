---
title: margin-top
slug: Web/CSS/Reference/Properties/margin-top
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`margin-top`** définit la [zone de marge](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_marge) en haut d'un élément. Une valeur positive l'éloigne de ses voisins, tandis qu'une valeur négative la rapproche.

{{InteractiveExample("Démonstration CSS&nbsp;: margin-top")}}

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

Cette propriété n'a aucun effet sur les éléments en ligne _non [remplacés](/fr/docs/Glossary/Replaced_elements)_, tels que {{HTMLElement("span")}} ou {{HTMLElement("code")}}.

## Syntaxe

```css
/* Valeurs de type <length> */
margin-top: 10px; /* Une longueur absolue */
margin-top: 1em; /* Une longueur proportionnelle à la taille du texte */
margin-top: 5%; /* Une marge relative à la largeur du bloc englobant le plus proche */
margin-top: anchor-size(height);
margin-top: calc(anchor-size(--my-anchor self-inline, 25px) / 4);

/* Valeur avec un mot-clé */
margin-top: auto;

/* Valeurs globales */
margin-top: inherit;
margin-top: initial;
margin-top: revert;
margin-top: revert-layer;
margin-top: unset;
```

La propriété `margin-top` peut être définie avec le mot-clé `auto`, une valeur de type longueur (`<length>`) ou pourcentage (`<percentage>`). Sa valeur peut être positive, nulle ou négative.

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille de la marge en valeur fixe.
    - Pour les éléments positionnés par ancre, la fonction {{CSSxRef("anchor-size()")}} donne une valeur {{CSSxRef("&lt;length&gt;")}} relative à la largeur ou la hauteur de l'élément ancre associé (voir [Définir la marge d'un élément selon la taille de l'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#définir_la_marge_dun_élément_selon_la_taille_de_lancre)).

- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille de la marge en pourcentage, relative à la taille en ligne (_largeur_ dans une langue horizontale, définie par {{CSSxRef("writing-mode")}}) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : Le navigateur choisit une valeur adaptée. Voir {{CSSxRef("margin")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir des marges hautes positives et négatives

```css
.content {
  margin-top: 5%;
}
.side-box {
  margin-top: 10px;
}
.logo {
  margin-top: -5px;
}
#footer {
  margin-top: 1em;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} et {{CSSxRef("margin-left")}}
- La propriété raccourcie {{CSSxRef("margin")}}
- Les propriétés {{CSSxRef("margin-block-start")}}, {{CSSxRef("margin-block-end")}}, {{CSSxRef("margin-inline-start")}} et {{CSSxRef("margin-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("margin-block")}} et {{CSSxRef("margin-inline")}}
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
