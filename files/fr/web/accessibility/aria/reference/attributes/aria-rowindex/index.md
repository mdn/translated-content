---
title: "ARIA : attribut aria-rowindex"
short-title: aria-rowindex
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-rowindex` définit la position d'un élément par rapport au nombre total de lignes dans un tableau, une grille ou une arborescence de grille.

## Description

Certains tableaux comportent de très nombreuses lignes. Charger uniquement une sous-partie des lignes peut être un choix de conception, améliorer les performances ou l'expérience utilisateur·ice.

Lorsque seulement une partie des lignes est chargée, il faut indiquer à tou·te·s les utilisateur·ice·s quelles sous-parties de lignes sont affichées. L'attribut `aria-rowindex` sert à définir l'index ou la position de la cellule ou de la ligne par rapport au nombre total de lignes dans un tableau, une grille ou une arborescence de grille.

Ajouté sur l'élément {{HTMLElement('tr')}} ou sur un élément avec le rôle [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role), ou directement sur {{HTMLElement('td')}}, {{HTMLElement('th')}} ou un élément avec le rôle [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) ou [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), la valeur correspond à la position de la ligne dans le tableau complet.

La valeur de `aria-rowindex` est un entier supérieur ou égal à `1`, supérieur à la valeur de `aria-rowindex` de toute ligne précédente, et inférieur ou égal au nombre de lignes du tableau complet.

Si toutes les lignes sont chargées et présentes dans le DOM, il n'est pas nécessaire d'ajouter `aria-rowindex` car les navigateurs calculent automatiquement l'index de chaque ligne. Cependant, lorsque seule une partie des lignes est présente dans le DOM, `aria-rowindex` est nécessaire pour indiquer la position de chaque ligne dans le tableau complet. Si seule une partie des lignes est chargée, il faut aussi inclure [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) sur l'ancêtre tableau, même si le nombre total de lignes n'est pas connu.

Si le tableau avec une sous-partie de lignes possède une cellule qui s'étend sur plusieurs lignes, la ligne et la cellule doivent toutes deux avoir l'attribut `aria-rowindex`. Si une cellule s'étend sur plusieurs lignes (quand le rôle de la cellule inclut l'attribut `aria-rowspan` ou que la cellule HTML possède l'attribut `rowspan` supérieur à 1), incluez la valeur de `aria-rowindex` de la ligne de départ sur la cellule en plus de l'attribut d'étendue de ligne approprié. La valeur doit être l'index de la ligne où commence l'étendue.

> [!NOTE]
> L'attribut `aria-rowindex` doit être ajouté à chaque ligne, mais il est optionnel sur les cellules, sauf pour les cellules qui s'étendent sur plusieurs lignes&nbsp;: l'attribut `aria-rowindex` est requis sur toutes les cellules étendues.

## Exemple

L'exemple suivant montre une grille de 24 lignes, dont la première et les lignes 7 à 10 sont affichées à l'utilisateur·ice. La dernière cellule «&nbsp;Poste&nbsp;» s'étend sur les colonnes 9 et 10.

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
      <span role="gridcell" aria-rowspan="2" aria-rowindex="9"
        >Gardienne de but</span
      >
    </div>
    <div role="row" aria-rowindex="10">
      <span role="gridcell">Alyssa</span>
      <span role="gridcell">Naeher</span>
    </div>
  </div>
</div>
```

Notez que `aria-rowspan` et `aria-rowindex` sont présents sur la cellule «&nbsp;Gardienne de but&nbsp;», qui s'étend sur deux lignes.

## Valeurs

- `<integer>`
  - : Un entier supérieur ou égal à 1, supérieur à la valeur de `aria-rowindex` de la ligne précédente (si elle existe), et inférieur ou égal à la valeur de [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount).

## Interfaces associées

- {{DOMxRef("Element.ariaRowIndex")}}
  - : La propriété {{DOMxRef("Element.ariaRowIndex", "ariaRowIndex")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-rowindex`.
- {{DOMxRef("ElementInternals.ariaRowIndex")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaRowIndex", "ariaRowIndex")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-rowindex`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

Hérité dans les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-rowindextext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)
- L'attribut ARIA [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- L'attribut ARIA [`aria-rowspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- L'attribut ARIA [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- L'attribut HTML [`rowspan`](/fr/docs/Web/HTML/Reference/Elements/td#rowspan) sur {{HTMLElement('td')}}
