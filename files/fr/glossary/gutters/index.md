---
title: Gouttières
slug: Glossary/Gutters
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Les gouttières** sont l'espace entre {{Glossary("grid_tracks", "les pistes de contenu")}}. Elles peuvent être créées avec [les grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout) en utilisant les propriétés {{CSSxRef("column-gap")}}, {{CSSxRef("row-gap")}} ou {{CSSxRef("gap")}}.

## Exemple

Dans l'exemple ci-dessous, nous avons une grille de 3 colonnes et 2 lignes, avec `20px` d'écart entre les pistes de colonnes et entre les pistes de lignes.

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

{{EmbedLiveSample("Exemple", 300, 280)}}

En ce qui concerne la taille de la grille, les espaces agissent comme s'ils étaient une piste de grille normale, mais rien ne peut y être placé. L'espace agit comme si la ligne de la grille à cet endroit avait gagné en taille, de sorte que tout élément de la grille placé après cette ligne commence à la fin de l'espace.

Les propriétés `row-gap` et `column-gap` ne sont pas les seules à pouvoir entraîner un espacement des pistes. Les marges, le remplissage (<i lang="en">padding</i>) ou l'utilisation des propriétés de distribution d'espace pour [l'alignement des boîtes](/fr/docs/Web/CSS/Guides/Grid_layout/Box_alignment) peuvent tous contribuer à l'écart visible. Par conséquent, les propriétés `row-gap` et `column-gap` ne doivent pas être considérées comme égales à la taille de la gouttière.

## Voir aussi

- [Les grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- Référence CSS pour les propriétés associées&nbsp;:
  - {{CSSxRef("column-gap")}}
  - {{CSSxRef("row-gap")}}
  - {{CSSxRef("gap")}}
- [Définition des gouttières dans la spécification des grilles CSS <sup>(angl.)</sup>](https://drafts.csswg.org/css-grid/#gutters)
