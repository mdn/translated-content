---
title: Grille
slug: Glossary/Grid
---

Une grille _CSS_ est définie en utilisant la valeur `grid` de la propriété `display` ; vous pouvez définir les colonnes et les lignes de votre grille en utilisant les propriétés {{cssxref("grid-template-rows")}} et {{cssxref("grid-template-columns")}}.

La grille que vous définissez avec ces propriétés est décrite comme une _grille explicite_.

Si vous placez du contenu en dehors de cette grille explicite, ou si vous comptez sur le placement automatique, l'algorithme de grille doit créer une {{glossary("grid tracks", "piste")}} (_track_) de ligne ou de colonne supplémentaire pour contenir {{glossary("grid item", "éléments de grille")}} (_grid items_), des pistes supplémentaires seront alors créées dans la grille implicite. La grille implicite est la grille créée automatiquement en raison de l'ajout de contenu en dehors des pistes définies.

Dans l'exemple ci-dessous, nous avons créé une grille explicite de 3 colonnes et 2 lignes. La troisième ligne de la grille est une piste de ligne de grille implicite, formée en raison des 2 éléments en plus, par rapport aux 6 qui remplissent les pistes explicites.

## Exemple

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
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{ EmbedLiveSample('Exemple', '500', '330') }}

## Voir aussi

### Références de la propriété

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### En lire plus

- Guide des grilles CSS : _[Les concepts de base des grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Les_concepts_de_base)_
