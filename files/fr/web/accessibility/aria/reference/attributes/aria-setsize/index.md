---
title: "ARIA : attribut aria-setsize"
short-title: aria-setsize
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-setsize
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-setsize` définit le nombre d'éléments dans l'ensemble courant d'éléments de liste (`listitem`) ou d'arbre (`treeitem`) lorsque tous les éléments de l'ensemble ne sont pas présents dans le DOM.

## Description

Les navigateurs calculent automatiquement la taille de l'ensemble et la position de chaque élément dans un groupe, comme le nombre de {{HTMLElement('li')}} dans une liste, les boutons dans un groupe de [boutons radio](/fr/docs/Web/HTML/Reference/Elements/input/radio) du même nom, et les {{HTMLElement('option')}} dans un {{HTMLElement('select')}}. Les technologies d'assistance, comme les lecteurs d'écran, utilisent cette gestion d'état pour annoncer la taille des ensembles à l'utilisateur·ice.

Lorsque le DOM n'est pas complet, le calcul du nombre d'éléments dans un ensemble par le navigateur peut être incorrect. Lorsque seule une partie des éléments, comme des éléments de liste, est chargée dans le DOM, le navigateur calcule le nombre d'éléments uniquement sur ceux présents. L'attribut `aria-setsize` doit être utilisé pour remplacer le comptage erroné du navigateur. Il définit le nombre d'éléments dans l'ensemble courant d'éléments de liste ou d'arbre si l'ensemble complet avait été chargé.

L'attribut `aria-setsize` est défini sur chaque élément, et non sur l'élément conteneur. La valeur est la même pour chaque élément&nbsp;: un entier reflétant le nombre d'éléments dans l'ensemble complet, ou `-1` si la taille de l'ensemble est inconnue. Si tous les éléments sont présents dans le DOM, le navigateur peut calculer la taille de l'ensemble et la position de chaque élément, rendant `aria-setsize` et `aria-posinset` inutiles.

Les éléments avec `aria-setsize` incluent généralement aussi l'attribut [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) pour indiquer la position de l'élément dans l'ensemble. La valeur de `aria-posinset` est comprise entre `1` et la valeur positive de `aria-setsize`.

Par exemple, dans la section des commentaires d'une page, lorsque tous les commentaires ne sont pas dans le DOM (pagination), le niveau, le nombre total de commentaires et la position de chaque commentaire doivent être définis avec ARIA. Le niveau hiérarchique des commentaires peut être indiqué avec [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level). Les informations de position dans le groupe sont indiquées avec `aria-posinset` et `aria-setsize`.

Quand un fil d'actualité a un nombre d'articles statique, `aria-setsize` peut être ajouté à chaque élément article avec la valeur correspondant soit au nombre total d'articles chargés, soit au nombre total dans le fil. La valeur choisie dépend de celle qui est la plus utile pour les utilisateur·ice·s. Si le nombre d'articles est très grand, indéfini ou change souvent, utilisez `aria-setsize="-1"` pour indiquer que la taille de l'ensemble est inconnue.

Dans un [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), lorsque l'ensemble complet des options disponibles n'est pas présent dans le DOM à cause d'un chargement dynamique au défilement, `aria-setsize` et `aria-posinset` peuvent être définis sur chaque [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role).

Dans une vue arborescente, si l'ensemble complet des nœuds disponibles n'est pas présent dans le DOM à cause d'un chargement dynamique lors du déplacement du focus ou du défilement, chaque nœud doit avoir `aria-level`, `aria-setsize` et `aria-posinset`.

Dans un menu, `aria-setsize` est défini sur tous les rôles [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) ou [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role), avec la valeur correspondant au nombre total d'éléments du menu, hors séparateurs.

## Exemple

L'exemple suivant montre les éléments 5 à 8 dans un ensemble de 16.

```html
<h2 id="label_fruit">Fruits disponibles</h2>
<ul role="listbox" aria-labelledby="label_fruit">
  <li role="option" aria-setsize="16" aria-posinset="5">pommes</li>
  <li role="option" aria-setsize="16" aria-posinset="6">bananes</li>
  <li role="option" aria-setsize="16" aria-posinset="7">melons</li>
  <li role="option" aria-setsize="16" aria-posinset="8">dattes</li>
</ul>
```

Pour orienter l'utilisateur·ice, les technologies d'assistance annonceraient «&nbsp;élément 6 sur 16&nbsp;» pour les bananes ci-dessus.

## Valeurs

- `<integer>`
  - : Le nombre d'éléments dans l'ensemble complet, ou `-1` si la taille de l'ensemble est inconnue.

## Interfaces associées

- {{DOMxRef("Element.ariaSetSize")}}
  - : La propriété {{DOMxRef("Element.ariaSetSize", "ariaSetSize")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-setsize`.
- {{DOMxRef("ElementInternals.ariaSetSize")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaSetSize", "ariaSetSize")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-setsize`.

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

- L'attribut ARIA [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- W3C WAI-ARIA practices&nbsp;:
  - [Exemple de boîte de réception d'e-mails dans une grille arborescente <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/examples/treegrid-1/)
  - [Exemple de navigation dans une vue arborescente <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)
  - [Exemple d'arborescence de répertoire de fichiers avec propriétés déclarées <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-1b/)
