---
title: Pagination
slug: Web/CSS/Layout_cookbook/Pagination
---

{{CSSRef}}

Dans cette recette, nous verrons comment utiliser une méthode de navigation où l'utilisateur peut passer d'une page à une autre pour un ensemble donné via les numéros de ces pages (généralement affichés en bas de page).

![Links to sets of pages in a paged listing](pagination.png)

## Spécifications sommaires

Pour cette méthode de navigation, les éléments sont généralement affichés sur une ligne. Afin de s'assurer que la pagination est compréhensible pour les utilisateurs d'outils d'assistance, on balise les éléments dans une liste avec un élément {{htmlelement("nav")}} et on utilise CSS afin d'organiser visuellement l'ensemble sur une ligne.

Généralement, l'outil de navigation sera centré horizontalement et placé sous le contenu.

## Recette

{{EmbedGHLiveSample("css-examples/css-cookbook/pagination.html", '100%', 720)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/pagination--download.html).

## Choix effectués

Pour obtenir ce résultat, on utilise [les boîtes flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout) avec une conteneur flexible imbriqué dans un autre. L'élément {{htmlelement("nav")}} est utilisé comme conteneur flexible afin de pouvoir en centrer le contenu grâce à la propriété {{cssxref("justify-content")}}.

La liste est elle-même un conteneur flexible qui permet d'organiser ces éléments sur une lignes. Pour espacer les éléments, on utilise la propriété {{cssxref("margin")}} pour espacer les éléments entre eux.

## Méthodes alternatives

Lorsque la propriété {{cssxref("column-gap")}} sera plus largement implémentée par les navigateurs, celle-ci pourra être utilisée à la place des marges pour espacer les éléments flexibles.

```css
.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 2px;
}
```

## Accessibilité

Il est nécessaire qu'une personne utilisant un lecteur d'écran comprenne comment la navigation fonctionne et que cliquer sur un lien envoie vers une autre page. Aussi, on ajoute `aria-label="pagination"` sur l'élément `<nav>`.

On a également ajouté du contenu qui pourra être lu par le lecteur d'écran mais qui est masqué visuellement et on a ajouter l'attribut `aria-hidden` sur les flèches de pagination.

Voir la section « Voir aussi » en fin d'article pour divers liens portants sur l'accessibilité.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{Cssxref("justify-content")}}
- {{Cssxref("column-gap")}}
- _[Know your ARIA: 'Hidden' vs 'None' (en anglais)](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html)_
- [Utiliser le contenu invisible pour les lecteurs d'écran (en anglais)](https://webaim.org/techniques/css/invisiblecontent/#techniques)
- [Écrire du CSS sans oublier l'accessibilité (en anglais)](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939)
- [Guide stylistique d'accessibilité : la pagination](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)
