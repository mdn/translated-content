---
title: "ARIA : rôle menuitem"
short-title: menuitem
slug: Web/Accessibility/ARIA/Reference/Roles/menuitem_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `menuitem` indique que l'élément est une option dans un ensemble de choix contenus par un `menu` ou `menubar`.

## Description

Un `menuitem` est l'un des trois types d'options dans un ensemble de choix contenus par un [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) ou [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)&nbsp;; les deux autres étant [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) et [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). Le `menuitem` ne se trouve qu'en tant que descendant ou possédé par des éléments ayant le rôle `menu` ou `menubar`, éventuellement imbriqué dans un élément ayant le rôle [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) qui est contenu dans, ou possédé par, un menu.

Si le `menuitem` n'est pas un descendant d'un menu dans le DOM, incluez l'attribut [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) sur le menu pour indiquer la relation. Si `aria-owns` est défini sur le conteneur de menu pour inclure des éléments qui ne sont pas des enfants DOM du conteneur, ces éléments apparaîtront dans l'ordre de lecture dans la séquence dans laquelle ils sont référencés et après tout élément qui est un enfant DOM dans les technologies d'assistance. Assurez-vous que l'ordre de sélection visuel correspond à l'ordre de lecture de la technologie d'assistance.

Chaque `menuitem` dans un menu est sélectionnable, qu'il soit désactivé ou non. Indiquez qu'un `menuitem` est désactivé en définissant [`aria-disabled="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) sur l'élément avec le rôle.

Si un `menuitem` a un sous-menu, programmez-le pour afficher un nouveau sous-menu lorsque l'élément de menu est activé et incluez [`aria-haspopup="menu"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) ou la valeur `true` pour indiquer aux technologies d'assistance que l'élément de menu est utilisé pour ouvrir un sous-menu.

Une convention courante pour indiquer qu'un `menuitem` lance une boîte de dialogue consiste à ajouter «&nbsp;…&nbsp;» (points de suspension) à l'étiquette de l'élément de menu, par exemple, «&nbsp;Enregistrer sous …&nbsp;».

Chaque `menuitem` doit avoir un nom accessible. Ce nom provient par défaut du contenu de l'élément. Si le contenu ne permet pas de fournir un nom accessible utile, [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) peut être utilisé pour référencer une étiquette visible. Si aucun contenu visible n'est disponible pour fournir le nom accessible, un nom accessible peut être fourni avec [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Propriétés, états et rôles WAI-ARIA associés

- le rôle [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
  - : Un widget fournissant une liste de choix. Rôle de contexte requis (ou `menubar`).
- le rôle [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
  - : Une présentation d'un `menu` qui reste généralement visible et est généralement présentée horizontalement. Rôle de contexte requis (ou `menu`).
- le rôle [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Peut être utilisé pour identifier un ensemble de `menuitem`s connexes dans ou possédés par un `menu` ou `menubar`.
- [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Indique que l'élément est perceptible mais désactivé, donc il n'est pas utilisable.
- [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Indique la disponibilité et le type de popup interactif qui peut être déclenché par le `menuitem`

### Interactions au clavier

- <kbd>Entrée</kbd> et <kbd>Espace</kbd>
  - : Si le `menuitem` a un sous-menu, ouvre le sous-menu et place le focus sur son premier élément. Sinon, active l'élément et ferme le menu.
- <kbd>Flèche vers le bas</kbd>
  - : Sur un `menuitem` qui a un sous-menu dans un `menubar`, ouvre le sous-menu et place le focus sur le premier élément du sous-menu. Sinon, déplace le focus sur l'élément suivant, en option de wrapping du dernier au premier.
- <kbd>Flèche vers le haut</kbd>
  - : Déplace le focus vers l'élément précédent, en option de wrapping du premier au dernier. En option, si le `menuitem` est dans un menubar et a un sous-menu, ouvre le sous-menu et place le focus sur le dernier élément du sous-menu.
- <kbd>Flèche vers la droite</kbd>
  - : Si dans un `menu` ouvert avec un menubutton et pas dans un `menubar`, si le menuitem n'a pas de sous-menu, ne fait rien. Lorsque le focus est dans un `menubar`, déplace le focus vers l'élément suivant, en option de wrapping du dernier au premier. Lorsque le focus est dans un `menu` et sur un `menuitem` qui a un sous-menu, ouvre le sous-menu et place le focus sur son premier élément. Lorsque le focus est dans un `menu` et sur un élément qui n'a pas de sous-menu, ferme le sous-menu et tous les menus parents, déplace le focus vers l'élément suivant dans le `menubar`, et, si le focus est maintenant sur un `menuitem` avec un sous-menu, ouvre soit le sous-menu de ce `menuitem` sans déplacer le focus dans le sous-menu, soit ouvre le sous-menu de ce `menuitem` et place le focus sur le premier élément du sous-menu.
- <kbd>Flèche vers la gauche</kbd>
  - : Lorsque le focus est dans un `menubar`, déplace le focus vers l'élément précédent, en option de wrapping du premier au dernier. Lorsque le focus est dans un sous-menu d'un élément dans un menu, ferme le sous-menu et renvoie le focus au `menuitem` parent. Lorsque le focus est dans un sous-menu d'un élément dans un `menubar`, ferme le sous-menu, déplace le focus vers l'élément précédent dans le `menubar`, et, si le focus est maintenant sur un `menuitem` avec un sous-menu, ouvre soit le sous-menu de ce `menuitem` sans déplacer le focus dans le sous-menu, soit ouvre le sous-menu de ce `menuitem` et place le focus sur le premier élément du sous-menu.
- <kbd>Début</kbd>
  - : Si le wrapping des touches fléchées n'est pas pris en charge, déplace le focus vers le premier élément du `menu` ou du `menubar` actuel.
- <kbd>Fin</kbd>
  - : Si le wrapping des touches fléchées n'est pas pris en charge, déplace le focus vers le dernier élément du `menu` ou du `menubar` actuel.
- Toute touche correspondant à un caractère imprimable (Optionnel)
  - : Déplace le focus vers l'élément suivant dans le menu actuel dont l'étiquette commence par ce caractère imprimable.
- <kbd>Échap</kbd>
  - : Ferme le menu qui contient le focus et renvoie le focus à l'élément ou au contexte, par exemple, le bouton de menu ou le `menuitem` parent, à partir duquel le menu a été ouvert.
- <kbd>Tab</kbd>
  - : Déplace le focus vers l'élément suivant dans la séquence de tabulation, et si l'élément qui avait le focus n'est pas dans un menubar, ferme son menu et tous les conteneurs de menu parents ouverts.
- <kbd>Maj + Tab</kbd>
  - : Déplace le focus vers l'élément précédent dans la séquence de tabulation, et si l'élément qui avait le focus n'est pas dans un menubar, ferme son menu et tous les conteneurs de menu parents ouverts.

Si un menu est ouvert ou qu'une barre de menu reçoit le focus à la suite d'une action contextuelle, <kbd>Échap</kbd> ou <kbd>Entrée</kbd> peut renvoyer le focus au contexte d'invocation.

Certaines implémentations de barres de menus de navigation peuvent avoir des éléments de menu qui effectuent à la fois une fonction et ouvrent un sous-menu. Dans de telles implémentations, <kbd>Entrée</kbd> et <kbd>Espace</kbd> effectuent une fonction de navigation tandis que <kbd>Flèche vers le bas</kbd>, dans une barre de menus horizontale, ouvre le sous-menu associé à ce même élément de menu.

Lorsque les éléments d'une `menubar` sont disposés verticalement et que les éléments des conteneurs de menu sont disposés horizontalement, la <kbd>Flèche vers le bas</kbd> fonctionne comme la <kbd>Flèche vers la droite</kbd> décrite ci-dessus, la <kbd>Flèche vers le haut</kbd> fonctionne comme la <kbd>Flèche vers la gauche</kbd> décrite ci-dessus, et vice versa.

## Exemples

```html
<div>
  <button id="menubutton" aria-haspopup="true" aria-controls="menu">
    <img src="hamburger.svg" alt="Sections de la page" />
  </button>
  <ul id="menu" role="menu" aria-labelledby="menubutton">
    <li role="presentation">
      <a role="menuitem" href="#description">Description</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#propriétés_états_et_rôles_wai-aria_associés">
        Propriétés, états et rôles WAI-ARIA associés
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#interactions_au_clavier">
        Interactions au clavier
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#exemples">Exemples</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#spécifications">Spécifications</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#voir_ausi">Voir aussi</a>
    </li>
  </ul>
</div>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA&nbsp;: rôle `menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA&nbsp;: rôle `listitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA&nbsp;: rôle `option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
