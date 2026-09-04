---
title: "ARIA : attribut aria-rowcount"
short-title: aria-rowcount
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-rowcount` définit le nombre total de lignes dans un tableau, une grille ou une arborescence de grille.

## Description

Certains tableaux comportent des centaines, voire des millions de lignes. Même pour des tableaux avec moins de lignes, charger uniquement une sous-partie des lignes peut être un choix de conception, améliorer les performances ou l'expérience utilisateur·ice. Lorsque seule une partie des lignes est chargée, il faut indiquer à tou·te·s les utilisateur·ice·s que seule une partie des données est affichée. L'attribut `aria-rowcount` sert à définir le nombre total de lignes dans un tableau, une grille ou une arborescence de grille.

Ajouté sur l'élément {{HTMLElement('table')}} ou sur un élément avec le rôle [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), la valeur correspond au nombre de lignes du tableau complet, sous forme d'entier. Si le nombre total de lignes n'est pas connu, utilisez `aria-rowcount="-1"` pour indiquer au navigateur de ne pas compter le nombre total de lignes.

Si toutes les lignes sont chargées et présentes dans le DOM, il n'est pas nécessaire d'ajouter `aria-rowcount` car les navigateurs comptent automatiquement le nombre total de lignes. Cependant, si toutes les lignes ne sont pas présentes dans le DOM à un instant donné, cet attribut est nécessaire pour fournir le nombre de lignes lorsque la taille totale du tableau est connue, ou pour indiquer au navigateur de ne pas compter automatiquement les lignes si le nombre total n'est pas connu.

## Exemple

L'exemple suivant montre une grille de 24 lignes, dont la première et les lignes 7 à 9 sont affichées à l'utilisateur·ice.

```html
<div role="grid" aria-rowcount="24">
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <span role="columnheader">Prénom</span>
      <span role="columnheader">Nom</span>
      <span role="columnheader">Poste</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="7">
      <span role="gridcell">Morgan</span>
      <span role="gridcell">Brian</span>
      <span role="gridcell">Milieu de terrain</span>
    </div>
    <div role="row" aria-rowindex="8">
      <span role="gridcell">Abby</span>
      <span role="gridcell">Dahlkemper</span>
      <span role="gridcell">Défenseure</span>
    </div>
    <div role="row" aria-rowindex="9">
      <span role="gridcell">Ashlyn</span>
      <span role="gridcell">Harris</span>
      <span role="gridcell">Gardienne de but</span>
    </div>
  </div>
</div>
```

## Valeurs

- `<integer>`
  - : Le nombre de lignes du tableau complet, ou `-1` si la taille du tableau est inconnue.

## Interfaces associées

- {{DOMxRef("Element.ariaRowCount")}}
  - : La propriété {{DOMxRef("Element.ariaRowCount", "ariaRowCount")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-rowcount`.
- {{DOMxRef("ElementInternals.ariaRowCount")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaRowCount", "ariaRowCount")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-rowcount`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Hérité dans les rôles&nbsp;:

- [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- L'attribut ARIA [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
