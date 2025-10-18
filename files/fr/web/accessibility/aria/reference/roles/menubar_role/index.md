---
title: "ARIA : rôle menubar"
short-title: menubar
slug: Web/Accessibility/ARIA/Reference/Roles/menubar_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `menubar` est une présentation de `menu` qui reste généralement visible et présenté horizontalement.

## Description

Un menu est un widget qui offre une liste de choix à l'utilisateur·ice, comme un ensemble d'actions ou de fonctions. Le type de menu menubar est généralement présenté sous la forme d'une barre horizontale de commandes toujours visible. Les menubars se comportent comme les menubars natifs des systèmes d'exploitation, tels que les menubars contenant des menus déroulants, que l'on trouve couramment en haut de nombreuses fenêtres d'applications de bureau.

Le rôle `menubar` est utilisé pour créer une barre de menu similaire à celles que l'on trouve près du haut de la fenêtre dans de nombreuses applications de bureau, une barre d'éléments de menu visuellement persistante, généralement horizontale, offrant à l'utilisateur·ice un accès rapide à un ensemble cohérent de commandes.

Un `menubar` contient trois types d'éléments de menu, y compris [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) et [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role). Ces éléments de menu peuvent être optionnellement imbriqués dans un ou plusieurs conteneurs [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role). Les groupes ou les éléments peuvent également être séparés par des éléments [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role). Bien que chaque élément de menu doive être capable de recevoir la sélection, même s'il est désactivé, les éléments `group` et `separator` ne sont pas sélectionnables.

Un exemple de menubar natif est la barre qui peut être présente en haut de l'écran si vous lisez ceci dans un navigateur de bureau. Un exemple de menubar basé sur le web est la barre de menu horizontale qui lit «&nbsp;Fichier Édition Affichage Insertion Format&nbsp;», etc., qui est généralement visible sous le nom du document dans un document Google.

Les interactions avec le menubar doivent être similaires à l'interaction typique de la barre de menu dans une interface graphique de bureau. Dans Google Docs, chacun de ces éléments de menu est un `menuitem` avec un sous-menu contextuel, donc chacun a un attribut `aria-haspopup` défini sur `true`. L'élément `menubar` ne l'est pas.

Le menubar et tous les éléments de menu sont sélectionnables et ont un attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) défini. Lorsque le menubar reçoit la sélection par tabulation, la sélection clavier est placé sur le premier élément de menu. Chaque élément du menu a `tabindex` défini sur `-1`, sauf le premier élément qui a son `tabindex` défini sur `0`.

Si un menubar reçoit la sélection à la suite d'une action contextuelle, telle qu'une touche de raccourci, <kbd>Échap</kbd> ou <kbd>Entrée</kbd> peuvent ramener la sélection au contexte d'invocation. Cela dit, assurez-vous de ne pas créer de touches de raccourci qui interfèrent avec les raccourcis de l'agent utilisateur, du système d'exploitation ou de la technologie d'assistance - tout UA, OS ou AT.

Chaque élément de menu, peu importe à quel point il est imbriqué, est capable de recevoir la sélection, même s'il est désactivé.

Si un `menubar` a une étiquette visible, incluez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) défini sur une valeur qui fait référence à l'élément d'étiquetage. Sinon, fournissez au menubar un nom accessible en incluant un [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) descriptif.

Un élément `menuitem` dans le `menubar` peut contenir un sous-menu d'éléments de menu. Les sous-menus peuvent être imbriqués plusieurs niveaux. En général, le `menubar` extérieur est horizontal et tous les sous-menus sont verticaux. Si ce n'est pas le cas, si votre menubar est vertical, incluez [`aria-orientation="vertical"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) sur l'élément `menubar`. Sinon, cet attribut n'est pas nécessaire, car la valeur par défaut est horizontale.

### Propriétés, états et rôles WAI-ARIA associés

- le rôle [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Identifie un ensemble d'éléments de menu.
- le rôle [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
  - : Une option dans un ensemble de choix contenus par un `menubar`. Peut avoir un sous-menu.
- le rôle [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
  - : Un élément de menu sélectionnable dans un ensemble d'éléments ayant le même rôle, dont un seul peut être sélectionné à la fois.
- le rôle [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
  - : Un élément de menu avec un état sélectionnable dont les valeurs possibles sont `true`, `false` ou `mixed`.
- [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Inclure `aria-orientation="vertical"` sur l'élément `menubar` si celui-ci est vertical. L'orientation par défaut est `horizontal`.

### Interactions au clavier

Lorsque la sélection est dans un `menubar`, il est toujours sur un élément de menu à l'intérieur de la barre de menu. Lorsque la sélection est sur un `menuitem` de premier niveau dans une barre de menu, les interactions au clavier suivantes doivent être prises en charge&nbsp;:

- <kbd>Flèche vers le bas</kbd>
  - : Si le `menuitem` actuellement sélectionné a un sous-menu, ouvre le sous-menu et place la sélection sur le premier élément du sous-menu.
- <kbd>Flèche vers le haut</kbd>
  - : (Optionnel) Si le `menuitem` actuellement sélectionné a un sous-menu, ouvre le sous-menu et place la sélection sur le _dernier_ élément du sous-menu.
- <kbd>Flèche vers la droite</kbd>
  - : Déplace la sélection vers l'élément suivant, en s'enroulant éventuellement du dernier au premier.
- <kbd>Flèche vers la gauche</kbd>
  - : Déplace la sélection vers l'élément précédent, en s'enroulant éventuellement du premier au dernier.
- <kbd>Début</kbd>
  - : Si l'enroulement des touches fléchées n'est pas pris en charge, déplace la sélection vers le premier élément du `menubar`.
- <kbd>Fin</kbd>
  - : Si l'enroulement des touches fléchées n'est pas pris en charge, déplace la sélection vers le dernier élément du `menubar`.
- <kbd>Tab</kbd>
  - : Déplace la sélection vers le prochain élément dans la séquence de tabulation. Si cela fait sortir la sélection du `menubar`, tous les sous-menus du `menubar` sont fermés.
- <kbd>Maj + Tab</kbd>
  - : Déplace la sélection vers l'élément précédent dans la séquence de tabulation. Si cela fait sortir la sélection du `menubar`, tous les sous-menus du `menubar` sont fermés.

Voir [les interactions au clavier des `menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role#interactions_au_clavier), [`menuitemradio` interactions au clavier](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role#interactions_au_clavier), et [`menuitemcheckbox` interactions au clavier](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role#interactions_au_clavier) pour plus d'informations sur les interactions au clavier lorsque la sélection est sur un `menuitem` dans une `menubar` (ce qui est toujours le cas).

Note&nbsp;: Les interactions ci-dessus supposent que la `menubar` est horizontale. Si la `menubar` est verticale, incluez `aria-orientation="vertical"` et modifiez les touches de clavier suivantes en conséquence&nbsp;:

- <kbd>Flèche vers le bas</kbd>
  - : Fonctionne comme la <kbd>Flèche vers la droite</kbd> comme décrit ci-dessus.
- <kbd>Flèche vers le haut</kbd>
  - : Fonctionne comme la <kbd>Flèche vers la gauche</kbd> comme décrit ci-dessus.
- <kbd>Flèche vers la droite</kbd>
  - : Fonctionne comme la <kbd>Flèche vers le bas</kbd> comme décrit ci-dessus.
- <kbd>Flèche vers la gauche</kbd>
  - : Fonctionne comme la <kbd>Flèche vers le haut</kbd> comme décrit ci-dessus.

## Exemples

- [W3C Pratique WAI-ARIA&nbsp;: exemple de `menubar` de navigation <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/)
- [W3C Pratique WAI-ARIA&nbsp;: exemple de `menubar` d'éditeur <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `toolbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
