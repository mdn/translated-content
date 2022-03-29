---
title: Gouttières
slug: Glossary/Gutters
translation_of: Glossary/Gutters
original_slug: Glossaire/Gutters
---
**Les gouttières** (ou *ruelles*) sont l'espace entre les pistes de contenu. Elles peuvent être créées avec [les grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout) en utilisant les propriétés [`column-gap`](/fr/docs/Web/CSS/column-gap), [`row-gap`](/fr/docs/Web/CSS/row-gap) ou [`gap`](/fr/docs/Web/CSS/gap).

## Exemple

Dans l'exemple ci-dessous, nous avons une grille de 3 colonnes et 2 rangées, avec 20 pixels d'écart entre les pistes de colonnes et `20px` entre les pistes de lignes.

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
  grid-template-columns: repeat(3, 1.2fr);
  grid-auto-rows: 45%;
  column-gap: 20px;
  row-gap: 20px;
}
```

```html
<div class="wrapper">
   <div>Un</div>
   <div>Deux</div>
   <div>Trois</div>
   <div>Quatre</div>
   <div>Cinq</div>
</div>
```

{{EmbedLiveSample('', '300', '280')}}

En termes de dimensionnement de la grille, l'écart agit comme une grille normale, mais rien ne peut y être placé. L'écart agit comme si la ligne de grille à cet endroit avait gagné une taille supplémentaire, de sorte que tout élément de grille placé après cette ligne commence à la fin de l'écart.

Les propriétés de l'écart de grille (par exemple, `row-gap` et `column-gap`) ne sont pas la seule chose qui peut provoquer l'espacement des pistes. Les marges, le remplissage ou l'utilisation des propriétés de distribution d'espace pour [l'alignement des boîtes](/fr/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout) peuvent tous contribuer à l'écart visible — donc, les propriétés de l'écart de grille (`row-gap` et `column-gap`) ne doivent pas être considérées comme égales à la taille de la gouttière, sauf si vous savez que votre conception n'a pas introduit d'espace supplémentaire avec l'une de ces méthodes.

## Voir aussi

### Références de la propriété

- [`column-gap`](/fr/docs/Web/CSS/column-gap)
- [`row-gap`](/fr/docs/Web/CSS/row-gap)
- [`gap`](/fr/docs/Web/CSS/gap)

### En lire plus

- Guide des grilles CSS&nbsp;: *[Les concepts de base des grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)*
- [Définition des gouttières (<i lang="en">gutters</i>) dans la spécification des grilles CSS (en anglais)](https://drafts.csswg.org/css-grid/#gutters)
