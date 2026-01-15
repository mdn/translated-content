---
title: "ARIA : rôle tablist"
short-title: tablist
slug: Web/Accessibility/ARIA/Reference/Roles/tablist_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `tablist` identifie l'élément qui sert de conteneur pour un ensemble d'onglets (`tabs`). Le contenu des onglets est appelé éléments `tabpanel`.

## Description

Vous interagissez peut-être avec une interface à onglets en lisant ceci&nbsp;! Les onglets du navigateur permettent à un·e utilisateur·ice d'avoir plusieurs pages Web ouvertes dans une seule fenêtre. En cliquant sur un onglet dans la liste d'onglets en haut de la fenêtre du navigateur, l'utilisateur·ice peut afficher le contenu associé dans la zone de contenu principal, le tabpanel, un site à la fois. Cela s'appelle un «&nbsp;modèle de conception d'onglets&nbsp;».

Lors de la mise en œuvre d'un modèle d'onglets, on utilise les rôles [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), `tablist` et [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role).

Les onglets sont un ensemble de sections superposées de contenu, appelées panneaux d'onglet (<i lang="en">tab panels</i> en anglais), qui affichent un panneau à la fois. Chaque panneau d'onglet est associé à un élément `tab` qui, lorsqu'il est activé, affiche le panneau correspondant. La liste des onglets est généralement disposée le long d'un bord du panneau affiché, le plus souvent en haut, et est imbriquée dans un élément `tablist`.

Chaque `tab` dans une `tablist` sert d'étiquette pour un `tabpanel` et peut être activé pour afficher ce panneau. La `tablist` est l'élément conteneur de l'ensemble des onglets.

Lorsqu'une interface à onglets est initialisée, un panneau d'onglet est affiché et son onglet associé est stylisé pour indiquer qu'il est actif. Quand l'utilisateur·ice active un autre onglet, le panneau précédemment affiché est masqué, le panneau associé à l'onglet activé devient visible, et l'onglet est considéré comme «&nbsp;actif&nbsp;».

Pour une liste d'onglets à sélection unique, les éléments `tabpanel` non actifs doivent être masqués jusqu'à ce que l'utilisateur·ice sélectionne l'onglet associé.

Pour créer une liste d'onglets à sélection multiple, ajoutez [`aria-multiselectable="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) sur l'élément `tablist`.

Ce sont les éléments `tab` (et non la `tablist`) qui portent l'attribut [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Mettez `aria-selected="true"` pour les onglets associés à chaque panneau visible. Les onglets associés à des panneaux masqués ont `aria-selected="false"`.

Si la liste d'onglets possède une étiquette visible, utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) avec l'id de l'élément d'étiquetage. Sinon, utilisez [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) pour fournir une étiquette.

Pour garantir l'accessibilité au clavier, la gestion de la sélection doit être assurée pour les descendants de ce rôle.

Les éléments avec le rôle `tablist` ont une valeur implicite [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) de `horizontal`.

### Propriétés, états et rôles WAI-ARIA associés

- le rôle [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
  - : Élément enfant requis. Chaque tablist doit contenir au moins un onglet `tab`.
- [`aria-multiselectable`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Si la valeur est `true`, cela indique que l'utilisateur·ice peut sélectionner plusieurs onglets parmi les descendants du tablist.
- [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Si l'élément tablist est orienté verticalement, définissez `aria-orientation="vertical"`. La valeur par défaut est `horizontal`.

### Interactions au clavier

Pour la liste d'onglets&nbsp;:

- <kbd>Tab</kbd>
  - : Lorsque la sélection entre dans la liste d'onglets, elle se place sur l'onglet actif.<br/><br/>Quand la liste d'onglets contient la sélection, celle-ci passe à l'élément suivant dans l'ordre de tabulation de la page, en dehors de la tablist, généralement le tabpanel, sauf si le premier élément contenant du contenu significatif dans le tabpanel est sélectionnable.

Quand la sélection est sur un onglet dans une liste horizontale&nbsp;:

- <kbd>Flèche vers la gauche</kbd>
  - : Déplace la sélection vers l'onglet précédent. Si la sélection est sur le premier onglet, elle passe au dernier onglet. Optionnellement, active le nouvel onglet sélectionné.
- <kbd>Flèche vers la droite</kbd>
  - : Déplace la sélection vers l'onglet suivant. Si la sélection est sur le dernier onglet, elle passe au premier onglet. Optionnellement, active le nouvel onglet sélectionné.

Quand la sélection est sur un onglet dans une liste verticale&nbsp;:

- <kbd>Flèche vers le haut</kbd>
  - : Déplace la sélection vers l'onglet précédent. Si la sélection est sur le premier onglet, elle passe au dernier onglet. Optionnellement, active le nouvel onglet sélectionné.
- <kbd>Flèche vers le bas</kbd>
  - : Déplace la sélection vers l'onglet suivant. Si la sélection est sur le dernier onglet, elle passe au premier onglet. Optionnellement, active le nouvel onglet sélectionné.

Si la liste d'onglets est horizontale, elle n'écoute pas <kbd>Flèche vers le bas</kbd> ou <kbd>Flèche vers le haut</kbd> afin que ces touches conservent leur fonction de défilement dans le navigateur, même lorsque la sélection est dans la liste d'onglets.

Quand la sélection est sur un onglet dans une liste d'onglets, qu'elle soit horizontale ou verticale&nbsp;:

- <kbd>Espace</kbd> ou <kbd>Entrée</kbd>
  - : Active l'onglet si celui-ci n'a pas été activé automatiquement lors de la sélection.
- <kbd>Début</kbd> (optionnel)
  - : Déplace la sélection vers le premier onglet. Optionnellement, active le nouvel onglet sélectionné.
- <kbd>Fin</kbd> (optionnel)
  - : Déplace la sélection vers le dernier onglet. Optionnellement, active le nouvel onglet sélectionné.
- <kbd>Maj + F10</kbd>
  - : Si l'onglet possède un menu contextuel associé, ouvre le menu.
- <kbd>Retour arrière</kbd> (optionnel)
  - : Si la suppression est autorisée, supprime (ferme) l'onglet courant et son panneau associé, place la sélection sur l'onglet suivant et optionnellement l'active. Si aucun onglet ne suit celui supprimé (par exemple, si l'onglet supprimé était le dernier à droite dans une liste horizontale de gauche à droite), place la sélection et optionnellement active l'onglet précédent. Si l'application permet de supprimer tous les onglets et que l'utilisateur·ice supprime le dernier onglet restant, l'application place la sélection sur un autre élément pour assurer la continuité du flux de travail. En alternative à Retour arrière, ou en plus, la fonction de suppression peut être disponible dans le menu contextuel.

## Exemples

Voir l'exemple [`tabpanel`, `tab` et `tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#exemple) dans la définition du rôle [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [ARIA&nbsp;: rôle `tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
