---
title: Gouttière
slug: Glossary/Gutters
tags:
  - CSS
  - Glossaire
  - Grilles
translation_of: Glossary/Gutters
original_slug: Glossaire/Gutters
---
**Les gouttières (**ou ruelles) sont l'espace entre les pistes de contenu. Elles peuvent être créées en CSS Grid Layout en utilisant les propriétés {{cssxref ("grid-column-gap")}}, {{cssxref ("grid-row-gap")}} ou {{cssxref ("grid-gap" )}}.

Dans l'exemple ci-dessous  nous avons une grille de pistes de 3 colonnes et 2 rangées, avec 20 pixels d'écart entre les pistes de colonnes et `20 px` entre les pistes de lignes.

## Exemple

```css hidden
* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}

.wrapper > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #fff8f8;
    padding: 1em;
    color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3,1.2fr);
  grid-auto-rows: 45%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
```

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

{{ EmbedLiveSample('Exemple', '300', '280') }}

En terme de dimensionnement de la grille, l'écart agit comme une grille régulière, mais rien ne peut y être placé. L'écart agit comme si la ligne de grille à cet endroit avait gagné une taille supplémentaire, de sorte que tout élément de grille placé après cette ligne commence à la fin de l'écart.

Les propriétés de l'écart de grille ne sont pas la seule chose qui peut provoquer l'espacement des pistes. Les marges, le remplissage ou l'utilisation des propriétés de distribution d'espace pour [l'alignement des boîtes](/fr/docs/Web/CSS/CSS_Grid_Layout/Alignement_des_bo%C3%AEtes_avec_les_grilles_CSS) peuvent tous contribuer à l'écart visible - donc les propriétés de l'écart de grille ne doivent pas être considérées comme égales à la taille de la gouttière, sauf si vous savez que votre conception n'a pas introduit d'espace supplémentaire avec l'une de ces méthodes.

## En apprendre plus

### Références de la propriété

- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-row-gap")}}
- {{cssxref("grid-gap")}}

### En lire plus

- Guide des grilles CSS : _[Les concepts de base des grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Les_concepts_de_base)_
- [Définition des gouttières _(gutters)_ dans la spécification des grilles CSS](https://drafts.csswg.org/css-grid/#gutters) (en)
