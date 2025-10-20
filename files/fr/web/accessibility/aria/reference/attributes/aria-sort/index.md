---
title: "ARIA : attribut aria-sort"
short-title: aria-sort
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-sort
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-sort` indique si les éléments d'un tableau ou d'une grille sont triés par ordre croissant ou décroissant.

## Description

Si une grille ou un tableau propose une fonctionnalité de tri, l'attribut `aria-sort` doit être défini sur `ascending`, `descending` ou `other` sur la cellule d'en-tête de la colonne ou de la ligne triée.

L'attribut `aria-sort` n'est défini que sur la colonne ou la ligne actuellement triée. Utilisez `aria-sort="ascending"` pour indiquer que les cellules de la colonne ou de la ligne sont triées par ordre croissant. Si l'ordre de tri est inversé, passez la valeur à `aria-sort="descending"`. Quand une autre colonne ou ligne devient triée, l'attribut `aria-sort` unique est déplacé vers la cellule d'en-tête correspondante avec la valeur appropriée.

L'attribut `aria-sort` ne doit être ajouté qu'à un seul en-tête de tableau ou de grille à la fois. Il sert à informer les utilisateur·ice·s de technologies d'assistance de la colonne ou de la ligne triée. Il n'a aucun impact sur l'ordre réel du tri.

## Exemple

Ce tableau se charge avec la colonne «&nbsp;Nom&nbsp;» triée par ordre croissant.

```html
<table>
  <caption>
    Membres du comité de pilotage
  </caption>
  <thead>
    <tr>
      <th>
        <button>Prénom</button>
      </th>
      <th aria-sort="ascending">
        <button>Nom</button>
      </th>
      <th>
        <button>Entreprise</button>
      </th>
      <th>E-mail</th>
    </tr>
  </thead>
  <tbody>
    …
  </tbody>
</table>
```

Si un·e utilisateur·ice clique sur le bouton _Nom_, [`aria-pressed="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) serait ajouté à l'élément HTML {{HTMLElement('button')}} et la valeur de `aria-sort` serait basculée sur "descending" avec JavaScript. Si l'utilisateur·ice clique sur un autre bouton d'en-tête, `aria-sort` serait retiré de l'en-tête _Nom_ pour être placé sur le parent {{HTMLElement('th')}} du bouton cliqué.

Nous avons ajouté des instructions dans la légende pour les technologies d'assistance qui ne voient pas les flèches descendantes ajoutées avec le CSS ciblant les sélecteurs `th[aria-sort="ascending"]` et `th[aria-sort="descending"]`.

## Valeurs

- `ascending`
  - : Les éléments sont triés par ordre croissant selon cette colonne.
- `descending`
  - : Les éléments sont triés par ordre décroissant selon cette colonne.
- `none` (valeur par défaut)
  - : Aucun tri n'est appliqué à la colonne.
- `other`
  - : Un algorithme de tri autre que croissant ou décroissant a été appliqué.

## Interfaces associées

- {{DOMxRef("Element.ariaSort")}}
  - : La propriété {{DOMxRef("Element.ariaSort", "ariaSort")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-sort`.
- {{DOMxRef("ElementInternals.ariaSort")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaSort", "ariaSort")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-sort`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spécifications

{{Specifications}}

## Voir aussi

- [Exemple de tableau triable <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) - Guide de rédaction ARIA (APG)
- L'attribut ARIA [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- L'élément HTML {{HTMLElement('th')}}
