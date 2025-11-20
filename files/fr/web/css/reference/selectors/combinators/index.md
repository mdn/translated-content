---
title: Combinateurs CSS
short-title: Combinateurs
slug: Web/CSS/Reference/Selectors/Combinators
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Les **combinateurs CSS** définissent les relations entre les [sélecteurs](/fr/docs/Web/CSS/Reference/Selectors). Ils permettent de sélectionner des éléments en fonction de leur relation avec d'autres éléments dans l'arbre du document.

Par exemple, pour mettre en forme uniquement les éléments de paragraphe qui sont des enfants directs d'un {{HTMLElement("div")}}, vous pouvez utiliser le combinateur d'enfant (`>`)&nbsp;:

```css
/* Définit la marge supérieure sur les éléments <p> qui sont des enfants directs de <div> */
div > p {
  margin-top: 0;
}
```

## Syntaxe

```css
/* Combine des sélecteurs pour exprimer des relations */
selecteur1 combinateur selecteur2 {
  propriete: valeur;
}
```

## Index des combinateurs

- [Combinateur d'enfant (`>`)](/fr/docs/Web/CSS/Reference/Selectors/Child_combinator)
- [Combinateur de colonne (`||`)](/fr/docs/Web/CSS/Reference/Selectors/Column_combinator)
- [Combinateur de descendant (" ")](/fr/docs/Web/CSS/Reference/Selectors/Descendant_combinator)
- [Combinateur de d'élément suivant (`+`)](/fr/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)
- [Combinateur de d'éléments subséquents (`~`)](/fr/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)

## Voir aussi

- Le module des [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- [Sélecteurs et combinateurs](/fr/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
