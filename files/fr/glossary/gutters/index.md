---
title: Gouttières
slug: Glossary/Gutters
l10n:
  sourceCommit: 8d83c05362120cbba32c165a6b1f76e73ccc9674
---

{{GlossarySidebar}}

**Les gouttières** sont l'espace entre [les pistes de contenu](/fr/docs/Glossary/Grid_Tracks). Elles peuvent être créées avec [les grilles CSS](/fr/docs/Web/CSS/CSS_grid_layout) en utilisant les propriétés [`column-gap`](/fr/docs/Web/CSS/column-gap), [`row-gap`](/fr/docs/Web/CSS/row-gap) ou [`gap`](/fr/docs/Web/CSS/gap).

## Exemple

Dans l'exemple ci-dessous, nous avons une grille de 3 colonnes et 2 rangées, avec 20 pixels d'écart entre les pistes de colonnes et entre les pistes de lignes.

```css hidden
* {
  box-sizing: border-box;
}

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

En ce qui concerne la taille de la grille, les espaces agissent comme s'ils étaient une piste de grille normale, mais rien ne peut y être placé. L'espace agit comme si la ligne de la grille à cet endroit avait gagné en taille, de sorte que tout élément de la grille placé après cette ligne commence à la fin de l'espace.

Les propriétés `row-gap` et `column-gap` ne sont pas les seules à pouvoir entraîner un espacement des pistes. Les marges, le remplissage (<i lang="en">padding</i>) ou l'utilisation des propriétés de distribution d'espace pour [l'alignement des boîtes](/fr/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) peuvent tous contribuer à l'écart visible. Par conséquent, les propriétés `row-gap` et `column-gap` ne doivent pas être considérées comme égales à la taille de la gouttière.

## Voir aussi

- [Les grilles CSS&nbsp;: concept de base](/fr/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Les pages de la référence CSS pour les propriétés associées
  - [`column-gap`](/fr/docs/Web/CSS/column-gap)
  - [`row-gap`](/fr/docs/Web/CSS/row-gap)
  - [`gap`](/fr/docs/Web/CSS/gap)
- [Définition des gouttières dans la spécification des grilles CSS (en anglais)](https://drafts.csswg.org/css-grid/#gutters)
