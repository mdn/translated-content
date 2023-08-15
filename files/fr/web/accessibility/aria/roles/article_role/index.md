---
title: "ARIA : rôle article"
slug: Web/Accessibility/ARIA/Roles/article_role
---

Le rôle `article` indique qu'une section d'une page pourrait tout à fait être autonome sur sa propre page, sur un document ou un site web donné. Il est généralement associé au contenu relatif comme les commentaires, les messages sur un forum, les articles d'un journal ou plus généralement pour des éléments regroupés à plusieurs sur une même page.

```html
<div role="article">
  <h2>Titre du segment</h2>
  <p>Paragraphe du segment.</p>
  <p>Un autre paragraphe.</p>
  … des contrôles pour interagir avec l'article, le partage, etc.
</div>
<div role="article">...</div>
```

Dans l'exemple qui précède, on a deux articles côte à côte sur une même page qui pourraient partager la même structure et être liés l'un à l'autre.

> **Note :** Plutôt qu'un élément `<div>` avec un rôle `article`, on utilisera plutôt un élément [`<article>`](/fr/docs/Web/HTML/Element/article). **On privilégiera toujours les éléments natifs s'ils sont disponibles.**

Pour l'exemple qui précède, mieux vaut ne pas utiliser `role="article"` mais privilégier l'élément `<article>`.

```html
<article>
  <h2>Titre du segment</h2>
  <p>Paragraphe du segment.</p>
  <p>Un autre paragraphe.</p>
  … des contrôles pour interagir avec l'article, le partage, etc.
</article>
<article>...</article>
```

## Description

Le [rôle de structure de document](/fr/docs/Web/Accessibility/ARIA/Roles#document_structure_roles) `article` indique une section d'un document, d'une page ou d'un site qui, pris séparément, pourrait être vu comme un document, une page ou un site à part entière. L'objectif d'une section avec un ensemble d'articles est d'indiquer leur relation.

Les articles ne sont pas considérés comme des repères de navigation, mais de nombreux outils d'assistance qui prennent en charge les repères de navigation permettent également de naviguer entre les articles. Ils peuvent également prendre en charge une indication de la relation d'imbrication entre les articles.

Les articles peuvent être imbriqués au sens où un article imbriqué a une relation directe avec celui dans lequel il est imbriqué mais pas nécessairement avec les autres articles en dehors de cette hiérarchie d'imbrication.

Si un article fait partie d'un flux, il devra posséder les attributs [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) et [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) qui indiquent la position de cet article au sein du flux.

Au sein d'une `application` ou d'un autre widget pour lesquels les outils d'assistance sont en mode passe-plat, un article pourra être utilisé afin d'indiquer que le contenu qu'il contient doit être traité comme du contenu web classique.

Plutôt que d'inclure le rôle `article` sur un élément non-sémantique, on devrait utiliser l'élément HTML [`<article>`](/fr/docs/Web/HTML/Element/article). Les agents utilisateur traduisent les informations d'accessibilité associées à cet élément comme le rôle `article`. Utiliser l'élément [`<article>`](/fr/docs/Web/HTML/Element/article) permet également aux moteurs de recherche de mieux découvrir la structure d'une page. Ce rôle, ou si possible `<article>`, pourra être utilisé pour indiquer des billets de blog, des messages sur un forum, un commentaire dans un blog ou un forum, ou tout élément d'un flux de réseau social.

### Rôles, états et propriétés WAI-ARIA associés

- [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Dans le contexte d'un flux, cet attribut indique la position de l'article courant au sein de ce flux, avec une numérotation qui démarre à 1.
- [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Dans le contexte d'un flux, cet attribut indique le nombre total d'articles au sein de ce flux.

### Interactions au clavier

Ce rôle ne prend pas en charge d'interactions au clavier particulières.

### Fonctionnalités JavaScript nécessaires

- Gestionnaires d'évènements
  - : Ce rôle ne nécessite pas la présence de gestionnaires d'évènements particuliers.
- Modification des valeurs d'attribut
  - : Lors de la construction d'un flux, on définira les attributs `aria-posinset` et `aria-setsize` pour chaque article avec les valeurs appropriées, en se rappelant que la numérotation de `aria-posinset` commence à 1.

> **Note :** **On privilégiera toujours les éléments natifs s'ils sont disponibles.** À la place d'un élément `<div>` avec le rôle `article`, on devrait utiliser un élément `<article>`.

## Exemples

Voir [l'exemple d'affichage de recommandations de restaurants](https://www.w3.org/TR/wai-aria-practices-1.1/examples/feed/feedDisplay.html) ainsi que [la documentation associée (en anglais)](https://www.w3.org/TR/wai-aria-practices-1.1/examples/feed/feed.html), tirés des bonnes pratiques WAI-ARIA 1.1 pour les flux.

## Spécifications

{{Specifications}}

## Ordre de précédence

Ce rôle correspond à l'élément [`<article>`](/fr/docs/Web/HTML/Element/article) en HTML et, si possible, c'est cet élément qui devrait être utilisé. Ce rôle ne requiert pas la présence de rôles spécifiques parmi les éléments enfants. Il s'agit du seul rôle autorisé pour un enfant direct d'un élément ayant le rôle [`feed`](/fr/docs/Web/Accessibility/ARIA/Roles/feed_role).

## Voir aussi

- [Le rôle `feed`](/fr/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [Le rôle `section`](/fr/docs/Web/Accessibility/ARIA/Roles/section_role)
- [L'élément HTML `<article>`](/fr/docs/Web/HTML/Element/article)
- [L'entrée du glossaire pour RSS](/fr/docs/Glossary/RSS)

<section id="Quick_links">

1. [**Rôles WAI-ARIA**](/fr/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/fr/docs/Web/Accessibility/ARIA/Roles")}}

</section>
