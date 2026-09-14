---
title: "ARIA : attribut aria-posinset"
short-title: aria-posinset
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-posinset
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-posinset` définit le numéro ou la position d'un élément dans l'ensemble courant des éléments de liste (`listitem`) ou d'arbre (`treeitem`) lorsque tous les éléments ne sont pas présents dans le DOM.

## Description

Abréviation de «&nbsp;position dans l'ensemble&nbsp;», l'attribut `aria-posinset` définit la position de l'élément au sein de l'ensemble complet des éléments de liste (`listitem`) ou d'arbre (`treeitem`) lorsque seul un sous-ensemble des éléments est présent dans le DOM.

Si tous les éléments d'une liste sont présents dans le DOM, le navigateur peut calculer le total et la position de chacun, rendant `aria-posinset` inutile. Lorsque seule une partie de l'ensemble est dans le DOM, il faut inclure `aria-posinset` pour fournir l'information sur la position de l'élément dans l'ensemble, ainsi que [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) pour indiquer à l'utilisateur·ice combien d'éléments composent l'ensemble complet.

L'exemple suivant montre une liste de sélection avec quatre options parmi les 118 éléments du tableau périodique des éléments chimiques.

```html
<h2 id="periodic-table">Tableau périodique des éléments chimiques</h2>
<ul role="listbox" aria-labelledby="periodic-table">
  <li role="option" aria-setsize="118" aria-posinset="1">Hydrogène</li>
  <li role="option" aria-setsize="118" aria-posinset="3">Lithium</li>
  <li role="option" aria-setsize="118" aria-posinset="11">Sodium</li>
  <li role="option" aria-setsize="118" aria-posinset="19">Potassium</li>
</ul>
```

La valeur de chaque `aria-posinset` est un entier supérieur ou égal à `1`, et inférieur ou égal à la taille de l'ensemble lorsque celle-ci est connue.

> [!NOTE]
> Lorsque vous utilisez `aria-posinset`, vous devez également inclure une valeur pour [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize), qui correspond à la taille de l'ensemble complet. Si la taille de l'ensemble complet est inconnue, définissez `aria-setsize="-1"`.

Pour [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) ou [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role), la valeur de `aria-posinset` doit être définie par rapport au nombre total d'éléments du menu, en excluant les séparateurs.

Dans un [`feed`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role), chaque élément {{HTMLElement('article')}} possède un `aria-posinset` dont la valeur représente sa position dans le fil, avec `aria-setsize` défini soit sur le nombre d'articles chargés, soit sur le nombre total dans le fil, selon la valeur la plus utile pour les utilisateur·ice·s.

## Valeurs

- `<integer>`
  - : Entier supérieur ou égal à 1, et inférieur ou égal à la valeur de `aria-setsize`.

## Interfaces associées

- {{DOMxRef("Element.ariaPosInSet")}}
  - : La propriété {{DOMxRef("Element.ariaPosInSet", "ariaPosInSet")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-posinset`.
- {{DOMxRef("ElementInternals.ariaPosInSet")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaPosInSet", "ariaPosInSet")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-posinset`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`article`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [`associationlistitemkey`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`associationlistitemvalue`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`comment`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`listitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

Hérité dans les rôles&nbsp;:

- [`comment`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`treeitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
