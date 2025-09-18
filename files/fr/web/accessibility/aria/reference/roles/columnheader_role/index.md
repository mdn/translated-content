---
title: "ARIA : rôle columnheader"
short-title: columnheader
slug: Web/Accessibility/ARIA/Reference/Roles/columnheader_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `columnheader` identifie un élément comme étant une cellule dans une ligne contenant des informations d'en-tête pour une colonne, similaire à l'élément HTML natif {{HTMLElement('th')}} avec une portée de colonne.

## Description

Un élément avec `role="columnheader"` imbriqué en tant que descendant d'un élément avec `role="row"` est une structure tabulaire statique d'une cellule d'en-tête de colonne dans un conteneur tabulaire, soit un tableau, une grille ou un autre graphique qui doit montrer des relations de données. Pour être pris en charge, le columnheader doit être imbriqué dans un élément avec le [rôle `row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role).

### Rôles, états et propriétés WAI-ARIA associés

Tous les en-têtes de colonne doivent être imbriqués dans une [ligne](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role). Chaque ligne, à son tour, doit être imbriquée dans une [grille](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), un [tableau](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) ou [l'arbre d'une grille](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role), alternativement dans un [groupe de lignes](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) imbriqué dans l'un des éléments ci-dessus.

- [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
  - : Appliqué uniquement à un en-tête de colonne à la fois, le `aria-sort` indique si une colonne est triée dans l'un des trois ordres `ascending` ou `descending`, ou `none` si elle n'est pas triée.

### Interactions au clavier

Ce rôle ne prend pas en charge d'interaction spécifique au clavier.

### Fonctionnalités JavaScript requises

JavaScript est uniquement requis si l'attribut `aria-sort` est utilisé.

## Exemples

```html
<table>
  <thead>
    <tr role="row">
      <th role="columnheader" scope="col">
        <button>Prénom</button>
      </th>
      <th role="columnheader" scope="col">
        <button>Nom</button>
      </th>
      <th role="columnheader" scope="col" aria-sort="ascending">
        <button>Nom de l'entreprise</button>
      </th>
      <th role="columnheader" scope="col">
        <button>Intitulé du poste</button>
      </th>
    </tr>
  </thead>
  <tbody>
    …
  </tbody>
</table>
```

## Bonnes pratiques

Les en-têtes de colonne doivent contenir un titre ou des informations d'en-tête pour la colonne.

La première règle de l'ARIA est la suivante&nbsp;: si un élément ou un attribut HTML natif a la sémantique et le comportement requis, utilisez-le au lieu de réutiliser un élément et d'ajouter un rôle, un état ou une propriété ARIA pour le rendre accessible. Il est recommandé d'utiliser l'élément HTML natif `<th>` avec l'attribut `scope` défini sur `<th scope="col">` au lieu d'un `<div>` ou d'un autre élément. Si vous utilisez le `<th scope="col">` de HTML sémantique, l'attribut de rôle n'est pas requis, mais peut être inclus en tant que sauvegarde pour garantir que le tableau conserve sa sémantique si la sémantique par défaut est supprimée avec une valeur de propriété d'affichage CSS.

L'attribut `aria-sort` peut être ajouté à un `<th scope="col">` même lorsque l'attribut de rôle ARIA n'est pas spécifié.

### Préférer HTML

Le rôle de columnheader a la même sémantique que `<th scope="col">`.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [ARIA&nbsp;: rôle `grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [ARIA&nbsp;: rôle `treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA&nbsp;: rôle `row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA&nbsp;: rôle `rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- L'élément HTML {{HTMLElement('th')}}
- L'élément HTML {{HTMLElement('table')}}
- L'élément HTML {{HTMLElement('tr')}}
- L'élément HTML {{HTMLElement('td')}}
