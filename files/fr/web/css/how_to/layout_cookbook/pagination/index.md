---
title: Pagination
slug: Web/CSS/How_to/Layout_cookbook/Pagination
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Ce motif de recette présente le modèle de navigation utilisé pour afficher une pagination, permettant à l'utilisateur·ice de naviguer entre différentes pages de contenu, comme des résultats de recherche.

![Liens vers des ensembles de pages dans une liste paginée](pagination.png)

## Exigences

Le motif de pagination affiche généralement les éléments sur une ligne. Pour garantir que la pagination soit compréhensible par les personnes utilisant un lecteur d'écran, on marque les éléments comme une liste à l'intérieur d'un élément HTML {{HTMLElement("nav")}}, puis on utilise le CSS pour présenter la disposition visuellement en ligne.

En général, le composant de pagination est centré horizontalement sous le contenu.

## Recette

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html live-sample___pagination-example
<nav aria-label="pagination">
  <ul class="pagination">
    <li>
      <a href="">
        <span aria-hidden="true">&laquo;</span>
        <span class="visuallyhidden">ensemble de pages précédent</span>
      </a>
    </li>
    <li>
      <a href=""><span class="visuallyhidden">page </span>1</a>
    </li>
    <li>
      <a href="" aria-current="page">
        <span class="visuallyhidden">page </span>2
      </a>
    </li>
    <li>
      <a href=""> <span class="visuallyhidden">page </span>3 </a>
    </li>
    <li>
      <a href=""> <span class="visuallyhidden">page </span>4 </a>
    </li>
    <li>
      <a href="">
        <span class="visuallyhidden">ensemble de pages suivant</span
        ><span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

```css live-sample___pagination-example
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}

nav {
  border-top: 1px solid #eeeeee;
  margin-top: 1em;
  padding-top: 0.5em;
  font: 1.2em sans-serif;

  display: flex;
  justify-content: center;
}

.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.pagination li {
  margin: 0 1px;
}

.pagination a {
  display: block;
  padding: 0.5em 1em;
  border: 1px solid #999999;
  border-radius: 0.2em;
  text-decoration: none;
}

.pagination a[aria-current="page"] {
  background-color: #333333;
  color: white;
}
```

{{EmbedLiveSample("pagination-example")}}

## Choix effectués

Ce motif utilise la [mise en page flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout) — un conteneur flexible imbriqué dans un autre. L'élément {{HTMLElement("nav")}} est défini comme conteneur flexible afin de pouvoir centrer la liste à l'intérieur grâce à la propriété {{CSSxRef("justify-content")}}.

La liste elle-même devient aussi un conteneur flexible pour disposer les éléments sur une ligne. Pour espacer les éléments, on peut soit utiliser un {{CSSxRef("margin")}} sur les éléments flexibles, soit ajouter un {{CSSxRef("gap")}} sur le conteneur flexible.

```css
.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2px;
}
```

## Problèmes d'accessibilité

Nous voulons nous assurer qu'une personne utilisant un lecteur d'écran comprenne le rôle de cette navigation et où elle mènera en cliquant sur un lien. Pour cela, nous avons ajouté [`aria-label="pagination"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) sur l'élément `<nav>`.

Nous avons également ajouté du contenu supplémentaire qui sera lu par un lecteur d'écran mais caché visuellement, et appliqué l'attribut [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) sur les flèches de pagination.

La section «&nbsp;Voir aussi&nbsp;» à la fin de ce document propose des liens vers des sujets d'accessibilité connexes.

## Voir aussi

- {{CSSxRef("justify-content")}}, {{CSSxRef("gap")}}
- [Bien comprendre ARIA&nbsp;: «&nbsp;hidden&nbsp;» contre «&nbsp;none&nbsp;» <sup>(angl.)</sup>](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) (2018)
- [Contenu invisible uniquement pour les utilisateur·ice·s de lecteurs d'écran <sup>(angl.)</sup>](https://webaim.org/techniques/css/invisiblecontent/#techniques) via WebAIM.org (2020)
- [Écrire du CSS en pensant à l'accessibilité <sup>(angl.)</sup>](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939) (2017)
- [Guide a11y&nbsp;: pagination <sup>(angl.)</sup>](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)
