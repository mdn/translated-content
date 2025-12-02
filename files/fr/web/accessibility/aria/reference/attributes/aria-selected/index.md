---
title: "ARIA : attribut aria-selected"
short-title: aria-selected
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-selected
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-selected` indique l'état «&nbsp;sélectionné&nbsp;» actuel de divers widgets.

## Description

L'attribut `aria-selected` indique l'état «&nbsp;sélectionné&nbsp;» actuel pour les rôles [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) et [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).

Cet attribut sert à indiquer quels éléments d'un widget composite à sélection unique ou multiple sont sélectionnés. Si plusieurs éléments peuvent être sélectionnés en même temps, ajoutez `aria-multiselectable="true"` sur la grille, la liste, le tablist ou tout autre rôle parent, et incluez `aria-selected` uniquement sur les cellules, options et onglets sélectionnables.

Pour d'autres rôles, l'état sélectionné actuel est défini avec [`aria-current`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current), ou éventuellement [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) ou [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed), selon le rôle.

Les widgets qui prennent en charge à la fois `aria-selected` et `aria-current` en même temps leur donnent des significations différentes. Par exemple, `aria-current="page"` peut être utilisé dans un arbre de navigation pour indiquer quelle page est actuellement affichée, tandis que `aria-selected="true"` indique que la page sera sélectionnée et affichée lorsque l'utilisateur·ice activera l'élément `treeitem`.

### Grille

Définir `aria-selected="false"` sur une cellule de grille sélectionnable indique que la cellule peut être sélectionnée. Si la grille permet de sélectionner plusieurs cellules à la fois, définissez `aria-multiselectable="true"` sur l'élément avec le rôle [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Définir `aria-selected` sur une cellule d'en-tête de colonne ou de ligne ne propage pas l'état aux autres cellules de la colonne ou de la ligne.

### Option

`aria-selected` et `aria-checked` sont tous deux valides pour [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role). Certaines interfaces utilisateur indiquent la sélection avec `aria-selected` dans les listes à sélection unique et avec `aria-checked` dans les listes à sélection multiple.

Ne spécifiez pas à la fois `aria-selected` et `aria-checked` sur les éléments `option` contenus dans la même `listbox`, sauf si le sens et l'objectif de `aria-selected` sont différents de ceux de `aria-checked` dans l'interface utilisateur, que le sens et l'objectif de chaque état sont clairs, et que l'UI propose des méthodes distinctes pour contrôler chaque état.

### Ligne

L'attribut `aria-selected` est pris en charge sur `row` mais pas sur `column`. Si une grille prend en charge la sélection, lorsqu'une cellule ou une ligne est sélectionnée, l'élément sélectionné a `aria-selected="true"`.

Si la grille prend en charge la sélection de colonnes et qu'une colonne est sélectionnée, toutes les cellules de la colonne ont `aria-selected` à `true`.

### Onglet

Dans une liste d'onglets (`tablist`), `aria-selected` est utilisé sur un onglet pour indiquer le [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) actuellement affiché.

L'onglet [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) sélectionné dans une [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) doit avoir l'attribut `aria-selected="true"`. Tous les onglets inactifs de la liste doivent avoir `aria-selected="false"`. La définition de l'état n'affecte que l'arbre d'accessibilité&nbsp;: veillez à mettre en forme l'onglet actif de façon à indiquer visuellement son état sélectionné. La valeur par défaut de `aria-selected` sur un rôle `tab` est `false`.

Si plusieurs onglets peuvent être sélectionnés en même temps, ajoutez `aria-multiselectable` sur le `tablist`.

## Exemple

Dans cet exemple de `tablist`, le premier onglet est sélectionné&nbsp;:

```html
<div class="tab-interface">
  <div role="tablist" aria-label="Onglets d'exemple">
    <span
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      Premier onglet
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      Deuxième onglet
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Troisième onglet
    </span>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Contenu du premier panneau</p>
  </div>
  <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
    <p>Contenu du deuxième panneau</p>
  </div>
  <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
    <p>Contenu du troisième panneau</p>
  </div>
</div>
```

> [!NOTE]
> ARIA ne modifie que l'arbre d'accessibilité d'un élément et la façon dont les technologies d'assistance présentent le contenu aux utilisateur·ice·s. ARIA ne change rien à la fonction ou au comportement des éléments.

## Valeurs

- `true`
  - : L'élément sélectionnable est sélectionné.
- `false`
  - : L'élément sélectionnable n'est pas sélectionné. Valeur par défaut implicite pour [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).
- `undefined` (valeur par défaut)
  - : L'élément n'est pas sélectionnable.

## Interfaces associées

- {{DOMxRef("Element.ariaSelected")}}
  - : La propriété {{DOMxRef("Element.ariaSelected", "ariaSelected")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-selected`.
- {{DOMxRef("ElementInternals.ariaSelected")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaSelected", "ariaSelected")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-selected`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

Hérité dans les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`treeitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- L'attribut ARIA [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
