---
title: "ARIA : rôle menuitemcheckbox"
short-title: menuitemcheckbox
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `menuitemcheckbox` est un `menuitem` avec un état vérifiable dont les valeurs possibles sont `true`, `false` ou `mixed`.

## Description

Les éléments dans les menus et les barres de menus sont des éléments de menu. Il existe trois types d'éléments de menu&nbsp;: [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) et `menuitemcheckbox`.

Ces trois éléments ne peuvent être contenus que dans, ou possédés par, un élément avec le rôle [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) ou [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role), éventuellement imbriqués dans un élément de regroupement avec le rôle de [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Être imbriqué ou autrement possédé (voir [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) dans un `menu` ou `menubar` identifie les éléments de menu comme étant des widgets liés.

Les éléments de menu, y compris les éléments `menuitemcheckbox`, peuvent être regroupés au sein d'éléments `group` ou séparés par des éléments avec le rôle [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) ou d'autres rôles natifs équivalents tels que {{HTMLElement("fieldset")}} et {{HTMLElement("hr")}}.

Les éléments de menu contenant le rôle de `menuitemcheckbox` doivent inclure l'attribut [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) pour exposer l'état de la case à cocher à la technologie d'assistance, sauf s'ils utilisent [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox), auquel cas l'attribut [`checked`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox#checked) doit être utilisé.

Similaire à l'attribut `checked` des {{HTMLElement("input")}} de type `checkbox`, l'attribut `aria-checked` d'un `menuitemcheckbox` indique si l'élément de menu est coché (`true`), non coché (`false`), ou représente un sous-niveau de menu d'autres éléments de menu qui ont un mélange de valeurs cochées et non cochées (`mixed`). La valeur `mixed` est similaire à l'attribut [`indeterminate`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) de la case à cocher, qui donne l'apparence d'un troisième état, ni coché ni non coché.

Un nom accessible est requis. Idéalement, le nom accessible devrait provenir d'un élément {{htmlelement("label")}} associé s'il utilise `<input type="checkbox">` ou d'un contenu descendant visible. Réalisez si le label ou le contenu descendant n'est pas suffisant et, de préférence, utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) faisant référence à un contenu non descendant ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) est utilisé, ces deux propriétés ARIA masqueront d'autres contenus descendants des technologies d'assistance.

Si tous les éléments de l'ensemble ne sont pas présents dans le DOM, incluez les propriétés [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) et [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset). Lors de la spécification de `aria-setsize` et `aria-posinset` sur un `menuitemcheckbox`, définissez la valeur par rapport au nombre total d'éléments dans le menu, en excluant les séparateurs.

L'élément `menuitemcheckbox` peut avoir un contenu de phrasé, mais ne peut pas avoir de contenu interactif comme descendants et aucun descendant avec un attribut `tabindex` spécifié.

### Tous les descendants sont des éléments de présentation

Il existe certains types de composants d'interface utilisateur qui, lorsqu'ils sont représentés dans une API d'accessibilité de plateforme, ne peuvent contenir que du texte. Les API d'accessibilité n'ont pas de moyen de représenter des éléments sémantiques contenus dans un `menuitemcheckbox`. Pour faire face à cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les éléments descendants de tout élément `menuitemcheckbox`, car il s'agit d'un rôle qui ne prend pas en charge les enfants sémantiques.

Par exemple, considérons le suivant élément `menuitemcheckbox`, qui contient un en-tête.

```html
<div role="menuitemcheckbox"><h6>Nom de ma case à cocher</h6></div>
```

Parce que les descendants de `menuitemcheckbox` sont des éléments de présentation, le code suivant est équivalent&nbsp;:

```html
<div role="menuitemcheckbox">
  <h6 role="presentation">Nom de ma case à cocher</h6>
</div>
```

Dans la perception de l'utilisateur·ice de la technologie d'assistance, l'en-tête n'existe pas puisque les extraits de code précédents sont équivalents à ce qui suit dans l'{{Glossary("Accessibility_tree", "arbre d'accessibilité")}}&nbsp;:

```html
<div role="menuitemcheckbox">Nom de ma case à cocher</div>
```

### Propriétés, états et rôles WAI-ARIA associés

- le rôle [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
  - : Widget qui offre une liste d'actions ou de fonctions courantes que l'utilisateur·ice peut invoquer.
- le rôle [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
  - : Semblable à `menu` pour un ensemble cohérent de commandes fréquemment utilisées restant visibles et généralement présentées horizontalement.
- le rôle [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Conteneur pour un groupe d'éléments `menuitem`, y compris des éléments `menuitemcheckbox` au sein d'un `menu` ou d'une `menubar`.
- [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Requis)
  - : Défini sur `true`, `false` ou `mixed`, il indique l'état «&nbsp;coché&nbsp;» actuel du menuitemcheckbox.

### Interactions au clavier

Lorsque un `menu` s'ouvre, ou lorsque une `menubar` reçoit le focus, le focus clavier est placé sur le premier élément. Tous les éléments des deux sont focusables, y compris tous les éléments `menuitemcheckbox`.

Si le `menuitemcheckbox` se trouve dans un sous-menu dans une `menubar` ou un menu ouvert avec un bouton de menu, les interactions clavier suivantes doivent être programmées&nbsp;:

- <kbd>Entrée</kbd>
  - : Bascule l'état `aria-checked` du `menuitemcheckbox` et ferme le menu.
- <kbd>Espace</kbd>
  - : Bascule l'état `aria-checked` du `menuitemcheckbox`. Ne ferme pas le menu.
- <kbd>Échap</kbd>
  - : Ferme le menu. Dans la `menubar`, déplace le focus vers l'élément parent de la `menubar`.
- <kbd>Flèche droite</kbd>
  - : Ferme le sous-menu. Dans la `menubar`, déplace le focus vers l'élément suivant dans la `menubar`, ouvrant tout sous-menu s'il y en a un.
- <kbd>Flèche gauche</kbd>
  - : Ferme le menu. Dans la `menubar`, déplace le focus vers l'élément précédent dans la `menubar`, ouvrant tout sous-menu s'il y en a un.
- <kbd>Flèche bas</kbd>
  - : Déplace le focus vers l'élément suivant dans le menu. Si le focus est sur le dernier élément, déplace le focus vers le premier élément.
- <kbd>Flèche haut</kbd>
  - : Déplace le focus vers l'élément précédent dans le menu. Si le focus est sur le premier élément, déplace le focus vers le dernier élément.
- <kbd>Début</kbd>
  - : Déplace le focus vers le premier élément dans le menu.
- <kbd>Fin</kbd>
  - : Déplace le focus vers le dernier élément dans le menu.
- <kbd>Caractère</kbd>
  - : Déplace le focus vers le prochain élément ayant un nom commençant par le caractère tapé. Si aucun des éléments n'a un nom commençant par le caractère tapé, le focus ne se déplace pas.

### Requis en JavaScript

#### Gestionnaires d'événements requis

- `onclick`
  - : Gérer les clics de souris sur la case à cocher et l'étiquette associée qui changeront l'état de la case à cocher en modifiant la valeur de l'attribut `aria-checked` et l'apparence de la case à cocher afin qu'elle apparaisse cochée ou décochée pour l'utilisateur·ice voyant·e.
- `onKeyDown`
  - : Gérer le cas où l'utilisateur·ice appuie sur la touche <kbd>Espace</kbd> pour changer l'état de la case à cocher en modifiant la valeur de l'attribut `aria-checked` et l'apparence de la case à cocher afin qu'elle apparaisse cochée ou décochée pour l'utilisateur·ice voyant·e. Gère également toutes les touches énumérées dans la section de navigation au clavier ci-dessus.

## Exemples

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Violet</li>
```

[`tabindex="-1"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) rend le `menuitemcheckbox` sélectionnable mais pas partie de la séquence de tabulation de la page. Si nous avions inclus `aria-checked="true"` cela aurait indiqué que le `menuitemcheckbox` était coché, et nous aurions stylisé visuellement l'état sélectionné pour qu'il ressemble à un état coché en utilisant le sélecteur d'attribut `[role='menuitemcheckbox'][aria-checked='true']`. Au lieu de cela, la présence de `aria-checked="false"` indique aux technologies d'assistance que le `menuitemcheckbox` est sélectionnable mais pas actuellement coché. Le nom accessible «&nbsp;violet&nbsp;» provient du contenu.

L'apparence visuelle de l'état sélectionné est une case à cocher cochée que nous pouvons créer en utilisant [le contenu généré](/fr/docs/Web/CSS/Guides/Generated_content), la rendant visible et de la même couleur que le contenu en synchronisant avec la valeur `aria-checked` en utilisant les [sélecteurs d'attributs CSS](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) et en [héritant](/fr/docs/Web/CSS/Reference/Values/inherit) la couleur.

```css
[role="menuitemcheckbox"]::before {
  display: inline-block;
  content: "";
  color: transparent;
  width: 1em;
  text-align: center;
  outline: 1px solid;
  margin-inline-end: 2px;
  font-family: sans-serif;
}
[role="menuitemcheckbox"][aria-checked="true"]::before {
  color: inherit;
  content: "X";
}
```

### Préférer HTML

La première règle de l'ARIA est la suivante&nbsp;: si un élément ou un attribut HTML natif possède la sémantique et le comportement dont vous avez besoin, utilisez-le plutôt que de réutiliser un élément et d'ajouter un rôle, un état ou une propriété ARIA pour le rendre accessible. En tant que tel, il est recommandé d'utiliser le contrôle de formulaire natif [HTML checkbox](/fr/docs/Web/HTML/Reference/Elements/input/checkbox) au lieu de recréer la fonctionnalité d'une case à cocher avec JavaScript et ARIA.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA&nbsp;: rôle `checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox)
