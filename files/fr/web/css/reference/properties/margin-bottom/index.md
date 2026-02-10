---
title: margin-bottom
slug: Web/CSS/Reference/Properties/margin-bottom
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`margin-bottom`** définit la [zone de marge](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_marge) en bas d'un élément. Une valeur positive l'éloigne de ses voisins, tandis qu'une valeur négative la rapproche.

{{InteractiveExample("Démonstration CSS&nbsp;: margin-bottom")}}

```css interactive-example-choice
margin-bottom: 1em;
```

```css interactive-example-choice
margin-bottom: 10%;
```

```css interactive-example-choice
margin-bottom: 10px;
```

```css interactive-example-choice
margin-bottom: 0;
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

![Effet de la propriété CSS margin-bottom sur la boîte de l'élément](margin-bottom.svg)

Cette propriété n'a aucun effet sur les éléments en ligne (_inline_) qui ne sont pas remplacés comme {{HTMLElement("tt")}} ou {{HTMLElement("span")}}.

## Syntaxe

```css
/* Valeurs de type <length> */
margin-bottom: 10px; /* Une longueur absolue */
margin-bottom: 1em; /* Une longueur relative à la taille du texte */
margin-bottom: 5%; /* Une longueur relative à la largeur du bloc englobant */
margin-bottom: anchor-size(width);
margin-bottom: calc(anchor-size(--my-anchor self-block, 20px) / 3);

/* Valeurs avec un mot-clé */
margin-bottom: auto;

/* Valeurs globales*/
margin-bottom: inherit;
margin-bottom: initial;
margin-bottom: revert;
margin-bottom: revert-layer;
margin-bottom: unset;
```

La valeur de la propriété `margin-bottom` peut être le mot-clé `auto`, une longueur (`<length>`) ou un pourcentage (`<percentage>`). Cette valeur peut être nulle, positive ou négative.

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

### Définir des marges basses positives et négatives

#### HTML

```html
<div class="container">
  <div class="box0">Boîte 0</div>
  <div class="box1">Boîte 1</div>
  <div class="box2">La marge négative de 1 m'attire vers le haut</div>
</div>
```

#### CSS

CSS pour les div afin de définir `margin-bottom` et la hauteur&nbsp;:

```css
.box0 {
  margin-bottom: 1em;
  height: 3em;
}
.box1 {
  margin-bottom: -1.5em;
  height: 4em;
}
.box2 {
  border: 1px dashed black;
  border-width: 1px 0;
  margin-bottom: 2em;
}
```

On ajoute quelques règles afin de mieux visualiser les effets obtenus&nbsp;:

```css
.container {
  background-color: orange;
  width: 320px;
  border: 1px solid black;
}
div {
  width: 320px;
  background-color: gold;
}
```

#### Résultat

{{EmbedLiveSample("Définir des marges basses positives et négatives", 350, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## See also

- Les propriétés {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}} et {{CSSxRef("margin-left")}}
- La propriété raccourcie {{CSSxRef("margin")}}
- Les propriétés {{CSSxRef("margin-block-start")}}, {{CSSxRef("margin-block-end")}}, {{CSSxRef("margin-inline-start")}} et {{CSSxRef("margin-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("margin-block")}} et {{CSSxRef("margin-inline")}}
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
