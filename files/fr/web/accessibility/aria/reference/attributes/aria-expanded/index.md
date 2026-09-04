---
title: "ARIA : attribut aria-expanded"
short-title: aria-expanded
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-expanded
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

L'attribut `aria-expanded` est défini sur un élément pour indiquer si un contrôle est développé ou réduit, et si les éléments contrôlés sont affichés ou masqués.

## Description

Plusieurs widgets peuvent être développés ou réduits, notamment les menus, boîtes de dialogue et panneaux d'accordéon. Chacun de ces objets possède un élément interactif qui contrôle leur ouverture et fermeture. L'attribut `aria-expanded` s'applique à ce contrôle interactif pouvant recevoir la sélection, qui bascule la visibilité de l'objet.

Par exemple, `aria-expanded` est appliqué à l'élément parent dans un arbre DOM pour indiquer si sa branche enfant est affichée. Le parent contrôle également la visibilité de la branche enfant associée.

Deux déclarations peuvent être appliquées aux objets qui contrôlent la visibilité d'un autre objet&nbsp;: [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) ou [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) combiné avec `aria-expanded`. `aria-controls` et `aria-owns` indiquent la relation entre l'élément contrôleur et l'élément contrôlé. `aria-expanded` indique aux technologies d'assistance si l'élément contrôlé est développé ou réduit.

Utilisez la propriété `aria-owns` sur les éléments qui possèdent des conteneurs de regroupement extensibles. Si le conteneur extensible/réductible n'est pas possédé par l'élément ayant l'attribut `aria-expanded`, utilisez la propriété `aria-controls` pour référencer le conteneur de regroupement.

### Boutons

Un bouton qui bascule un widget doit avoir `aria-controls` défini sur l'[`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) du widget basculé et `aria-expanded` défini sur l'état actuel du widget.

```html
<button aria-expanded="false" aria-controls="widget1">
  Afficher/masquer le widget
</button>
```

Lorsque le widget est visible, l'objet de contrôle transmet cette information via `aria-expanded="true"`. Le nom accessible de l'objet de contrôle doit refléter ce changement.

```html
<button aria-expanded="true" aria-controls="widget1">
  Afficher/masquer le widget
</button>
```

### Menu

Lorsqu'un [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) est affiché, le bouton qui bascule la visibilité de ce menu a comme valeur `aria-expanded="true"`. Lorsque le menu est masqué, aria-expanded peut être omis. S'il est spécifié lorsque le menu est masqué, il doit être défini à `aria-expanded="false"`. Quand un sous-menu n'est pas visible, son parent [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) possède `aria-expanded`. Il doit être défini à `true` lorsque le sous-menu est visible.

### Zone de liste déroulante (Combobox)

Par défaut, certains rôles sont masqués ou réduits et d'autres sont ouverts ou développés. Les éléments avec le rôle [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ont une valeur par défaut de `aria-expanded` à `false`. Quand la zone de liste déroulante n'est pas visible, l'élément avec le rôle `combobox` a `aria-expanded` à `false`. C'est l'état par défaut. Quand l'élément contextuel est visible, `aria-expanded` doit être défini à `true`.

```html
<label for="username">Nom d'utilisateur</label>
<input id="username" name="username" aria-describedby="username-desc" />
<button
  aria-expanded="false"
  aria-controls="username-desc"
  aria-label="Aide sur le nom d'utilisateur"
  type="button">
  <span aria-hidden="true">?</span>
</button>
<p id="username-desc" hidden>
  Votre nom d'utilisateur est celui que vous utilisez pour vous connecter à ce
  service.
</p>
```

> [!NOTE]
> La présence de l'attribut `aria-expanded` indique un contrôle. Évitez de l'inclure sur des éléments qui ne contrôlent pas l'état développé d'autres éléments.

### Éléments d'arbre (Treeitems)

Chaque élément avec le rôle [`treeitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role) servant de nœud parent a `aria-expanded="false"` lorsque le nœud est fermé et `aria-expanded="true"` lorsqu'il est ouvert. Les nœuds finaux, sans nœuds descendants, ne doivent pas avoir l'attribut `aria-expanded` car, s'ils l'avaient, ils seraient incorrectement décrits comme nœuds parents aux technologies d'assistance.

### Lignes

Une ligne parente dans une [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) est une ligne pouvant être développée — ou réduite — pour afficher ou masquer un ensemble de lignes enfants dans un tableau ou une grille. Chaque ligne parente a l'état `aria-expanded` défini soit sur l'élément de ligne, soit sur une cellule contenue dans la ligne. Quand les lignes enfants sont masquées, `aria-expanded="false"` est défini. `aria-expanded="true"` est défini lorsque les lignes enfants sont affichées. Les lignes qui ne contrôlent pas l'affichage de lignes enfants ne doivent pas inclure l'attribut `aria-expanded` car cela les définirait comme lignes parentes.

## Valeurs

- `false`
  - : L'élément de regroupement que cet élément possède ou contrôle est réduit.

- `true`
  - : L'élément de regroupement que cet élément possède ou contrôle est développé.

- `undefined` (par défaut)
  - : L'élément ne possède ni ne contrôle un élément de regroupement extensible.

## Interfaces associées

- {{domxref("Element.ariaExpanded")}}
  - : La propriété [`ariaExpanded`](/fr/docs/Web/API/Element/ariaExpanded), partie de l'interface {{domxref("Element")}}, reflète la valeur de l'attribut `aria-expanded`.
- {{domxref("ElementInternals.ariaExpanded")}}
  - : La propriété [`ariaExpanded`](/fr/docs/Web/API/Element/ariaExpanded), partie de l'interface {{domxref("ElementInternals")}}, reflète la valeur de l'attribut `aria-expanded`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`link`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`treeitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

Hérité dans les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- L'attribut ARIA [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- L'attribut ARIA [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- L'attribut HTML [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden)
