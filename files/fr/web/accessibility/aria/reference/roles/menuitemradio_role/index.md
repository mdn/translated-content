---
title: "ARIA : rôle menuitemradio"
short-title: menuitemradio
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Le rôle `menuitemradio` est un élément de menu sélectionnable dans un ensemble d'éléments ayant le même rôle, dont un seul peut être sélectionné à la fois.

## Description

Les éléments dans les menus et les barres de menus sont des éléments de menu. Il existe trois types d'éléments de menu&nbsp;: [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) et `menuitemradio`. Pour limiter le nombre d'éléments sélectionnés à un seul dans un groupe, utilisez le rôle `menuitemradio` sur tous les éléments du groupe.

Un `menuitemradio` est un élément de menu sélectionnable dans un ensemble d'éléments ayant le même rôle, dont un seul peut être sélectionné à la fois.

Les trois types d'éléments de menu ne peuvent être contenus ou possédés que par un élément ayant le rôle [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) ou [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role), éventuellement imbriqués dans un élément de regroupement ayant le rôle [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Être imbriqué ou possédé (voir [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)) dans un `menu` ou une `menubar` identifie les éléments de menu comme des widgets liés.

Lorsque tous les éléments d'un sous-menu sont membres du même groupe radio, le `group` est défini par l'élément menu&nbsp;; l'élément `group` n'est pas nécessaire.

Les éléments de menu ayant le rôle `menuitemradio` doivent inclure l'attribut [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) pour exposer l'état du bouton radio aux technologies d'assistance, sauf si vous utilisez [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox), auquel cas l'attribut [`checked`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox#checked) doit être utilisé.

Comme pour l'attribut `checked` des {{HTMLElement('input')}} de type `radio`, l'attribut `aria-checked` d'un `menuitemradio` indique si l'élément de menu est sélectionné (`true`) ou non (`false`). Il n'existe pas de valeur `mixed` comme pour `menuitemcheckbox`.

Un seul `menuitemradio` dans un groupe peut être sélectionné à la fois. Lorsqu'un élément du groupe est sélectionné, l'attribut `aria-checked` est défini sur `true`, tandis que l'élément `menuitemradio` précédemment sélectionné dans le même groupe, s'il y en avait un, devient non sélectionné, en passant la valeur de l'attribut `aria-checked` à `false`.

Si vous souhaitez que plusieurs éléments d'un groupe soient sélectionnés, ou si vous souhaitez permettre la sélection et la désélection d'un élément, utilisez plutôt `menuitemcheckbox`.

Si un `menu` ou une `menubar` contient plusieurs groupes d'éléments `menuitemradio`, ou si le `menu` contient un groupe d'éléments `menuitemradio` ainsi que d'autres éléments `menuitem` non liés et/ou des éléments `menuitemcheckbox`, regroupez chaque ensemble d'éléments `menuitemradio` liés dans un élément `group` ou séparez le groupe des autres éléments de menu avec un élément `separator` (ou un élément HTML ayant un rôle équivalent comme un regroupement {{HTMLElement('fieldset')}} ou une séparation thématique {{HTMLElement('hr')}}).

Un nom accessible est requis. Idéalement, le nom accessible doit provenir d'un élément {{htmlelement('label')}} associé si vous utilisez `<input type="radio">` ou d'un contenu visible descendant. Sachez que si le label ou le contenu descendant n'est pas suffisant et que, de préférence, [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) est utilisé en référant un contenu non descendant ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) est utilisé, ces deux propriétés ARIA masqueront les autres contenus descendants aux technologies d'assistance.

Si tous les éléments de l'ensemble ne sont pas présents dans le DOM, incluez les propriétés [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) et [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset). Lors de la spécification de `aria-setsize` et `aria-posinset` sur un `menuitemradio`, définissez la valeur en fonction du nombre total d'éléments dans le menu, en excluant les séparateurs.

L'élément `menuitemradio` peut contenir du contenu phrastique, mais ne peut pas avoir de contenu interactif comme descendants ni de descendants avec un attribut `tabindex` spécifié.

### Tous les descendants sont des éléments de présentation

Certaines interfaces utilisateur, lorsqu'elles sont représentées dans une API d'accessibilité de plateforme, ne peuvent contenir que du texte. Les API d'accessibilité ne permettent pas de représenter des éléments sémantiques contenus dans un `menuitemradio`. Pour pallier cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les éléments descendants d'un élément `menuitemradio`, car il s'agit d'un rôle qui ne prend pas en charge les enfants sémantiques.

Par exemple, considérez l'élément `menuitemradio` suivant, qui contient un titre&nbsp;:

```html
<div role="menuitemradio"><h6>Nom de mon bouton radio</h6></div>
```

Comme les descendants de `menuitemradio` sont présentatifs, le code suivant est équivalent&nbsp;:

```html
<div role="menuitemradio">
  <h6 role="presentation">Nom de mon bouton radio</h6>
</div>
```

Du point de vue de l'utilisateur·ice de technologies d'assistance, le titre n'existe pas puisque les extraits de code précédents sont équivalents à ce qui suit dans [l'arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree)&nbsp;:

```html
<div role="menuitemradio">Nom de mon bouton radio</div>
```

### Propriétés, états et rôles WAI-ARIA associés

- Rôle [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
  - : Widget qui propose une liste d'actions ou de fonctions courantes que l'utilisateur·ice peut invoquer.
- Rôle [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
  - : Similaire à `menu` pour un ensemble cohérent de commandes fréquemment utilisées, restant visible et généralement présenté horizontalement.
- Rôle [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Conteneur pour un groupe d'éléments `menuitem`, y compris les éléments `menuitemradio` dans un `menu` ou une `menubar`.
- [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) (Obligatoire)
  - : Défini sur `true` ou `false`, indique l'état actuel «&nbsp;sélectionné&nbsp;» du menuitemradio

### Interactions au clavier

Lorsqu'un `menu` s'ouvre ou qu'une `menubar` reçoit le focus, le focus clavier est placé sur le premier élément. Tous les éléments dans les deux sont sélectionnables, y compris tous les éléments `menuitemradio`.

Si le `menuitemradio` se trouve dans un sous-menu d'une `menubar` ou d'un menu ouvert avec un bouton de menu, les interactions clavier suivantes doivent être programmées&nbsp;:

- <kbd>Entrée</kbd>
  - : Si non sélectionné, sélectionne le `menuitemradio` focalisé et désélectionne tout autre élément `menuitemradio` sélectionné dans le même groupe. Ferme également le menu.
- <kbd>Espace</kbd>
  - : Si non sélectionné, sélectionne le `menuitemradio` focalisé et désélectionne tout autre élément `menuitemradio` sélectionné dans le même groupe sans fermer le menu.
- <kbd>Échap</kbd>
  - : Ferme le menu. Dans une menubar, déplace le focus vers l'élément parent de la menubar.
- <kbd>Flèche vers la droite</kbd>
  - : Ferme le sous-menu. Dans une menubar, déplace le focus vers l'élément suivant de la menubar, en ouvrant le sous-menu s'il y en a un.
- <kbd>Flèche vers la gauche</kbd>
  - : Ferme le menu. Dans une menubar, déplace le focus vers l'élément précédent de la menubar, en ouvrant le sous-menu s'il y en a un.
- <kbd>Flèche vers le bas</kbd>
  - : Déplace le focus vers l'élément suivant du menu. Si le focus est sur le dernier élément, le focus passe au premier élément.
- <kbd>Flèche vers le haut</kbd>
  - : Déplace le focus vers l'élément précédent du menu. Si le focus est sur le premier élément, le focus passe au dernier élément.
- <kbd>Début</kbd>
  - : Déplace le focus vers le premier élément du menu.
- <kbd>Fin</kbd>
  - : Déplace le focus vers le dernier élément du menu.
- <kbd>Caractère</kbd>
  - : Déplace le focus vers le prochain élément dont le nom commence par le caractère saisi. Si aucun élément ne commence par ce caractère, le focus ne bouge pas.

### Requis en JavaScript

#### Gestionnaires d'événements requis

- `onclick`
  - : Gère les clics de souris sur le bouton radio et le label associé, ce qui modifie l'état du bouton radio en changeant la valeur de l'attribut `aria-checked` et l'apparence du bouton radio pour qu'il apparaisse comme sélectionné ou non sélectionné pour l'utilisateur·ice voyant·e.
- `onKeyDown`
  - : Gère le cas où l'utilisateur·ice appuie sur la touche <kbd>Espace</kbd> pour changer l'état du bouton radio en modifiant la valeur de l'attribut `aria-checked` et l'apparence du bouton radio pour qu'il apparaisse comme sélectionné ou non sélectionné pour l'utilisateur·ice voyant·e. Gère également toutes les touches listées dans la section navigation au clavier ci-dessus.

## Exemples

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Violet</li>
```

Le [`tabindex="-1"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) rend le `menuitemradio` sélectionnable au clavier mais ne l'intègre pas dans la séquence de tabulation de la page. Si nous avions inclus `aria-checked="true"`, cela aurait indiqué que le `menuitemradio` était sélectionné, et nous aurions stylisé visuellement l'état sélectionné pour qu'il apparaisse comme coché en utilisant le sélecteur d'attribut `[role='menuitemradio'][aria-checked='true']`. Au contraire, la présence de `aria-checked="false"` indique aux technologies d'assistance que le `menuitemradio` est sélectionnable mais pas actuellement sélectionné. Le nom accessible «&nbsp;Violet&nbsp;» provient du contenu.

L'apparence visuelle de l'état sélectionné est celle d'un bouton radio coché que l'on peut créer avec du [contenu généré](/fr/docs/Web/CSS/Guides/Generated_content), en le rendant visible et de la même couleur que le contenu en synchronisant avec la valeur de `aria-checked` grâce aux [sélecteurs d'attributs](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) et en modifiant la propriété [`background-color`](/fr/docs/Web/CSS/Reference/Properties/background-color).

```css
[role="menuitemradio"]::before {
  display: inline-block;
  content: "";
  width: 1em;
  height: 1em;
  padding: 0.1em;
  border: 2px solid #333333;
  border-radius: 50%;
  box-sizing: border-box;
  background-clip: content-box;
  margin-inline-end: 2px;
}
[role="menuitemradio"][aria-checked="true"]::before {
  background-color: purple;
}
```

N'utilisez pas la propriété raccourcie [`background`](/fr/docs/Web/CSS/Reference/Properties/background), car cela écraserait la propriété [`background-clip`](/fr/docs/Web/CSS/Reference/Properties/background-clip) utilisée pour créer l'effet bouton radio.

### Préférez HTML

La première règle d'ARIA est&nbsp;: si un élément ou un attribut HTML natif possède la sémantique et le comportement dont vous avez besoin, utilisez-le plutôt que de réutiliser un élément et d'ajouter un rôle, un état ou une propriété ARIA pour le rendre accessible. Il est donc recommandé d'utiliser le contrôle natif [bouton radio HTML](/fr/docs/Web/HTML/Reference/Elements/input/radio) plutôt que de recréer la fonctionnalité d'un bouton radio avec JavaScript et ARIA.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio)
