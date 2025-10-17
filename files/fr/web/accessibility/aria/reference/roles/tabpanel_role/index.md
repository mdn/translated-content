---
title: "ARIA : rôle tabpanel"
short-title: tabpanel
slug: Web/Accessibility/ARIA/Reference/Roles/tabpanel_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `tabpanel` est un conteneur pour les ressources du contenu superposé associé à un onglet (`tab`).

## Description

Le rôle `tabpanel` indique que l'élément est un conteneur pour les ressources associées à un rôle [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), où chaque onglet (`tab`) est contenu dans une [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role).

Un `tabpanel` fait partie d'une interface à onglets, un modèle d'expérience utilisateur·ice courant où un groupe d'onglets visuels permet de basculer rapidement entre plusieurs vues superposées. Chaque onglet est défini avec le rôle `tab`, et ces onglets sont contenus dans un élément avec le rôle `tablist`. Le `tablist` est souvent positionné visuellement au-dessus ou sur le côté d'une zone de contenu, contenant les `tabpanel` associés. Le rôle `tabpanel` est attribué au conteneur de chaque panneau de contenu associé à un onglet correspondant dans la `tablist` de l'interface à onglets.

Dans de nombreuses interfaces à onglets, un seul `tabpanel` est visible à la fois. Cependant, certaines interfaces peuvent nécessiter l'affichage de plusieurs panneaux simultanément. Dans ce cas, la `tablist` doit porter l'attribut [`aria-multiselectable`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable), et les éléments `tab` utilisent alors l'attribut [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) pour indiquer si leur `tabpanel` associé est visible ou non. L'état sélectionné de l'onglet sert à indiquer quel panneau est actuellement «&nbsp;actif&nbsp;». Par exemple, cela peut indiquer vers quel `tabpanel` la sélection clavier se déplacerait si quelqu'un appuyait sur la touche <kbd>Tab</kbd> alors qu'un onglet est sélectionné dans une `tablist` à sélection multiple.

Dans les interfaces à sélection unique, seul le `tabpanel` associé à l'onglet sélectionné est affiché. Tous les autres éléments `tabpanel` associés aux onglets non sélectionnés doivent être masqués pour les utilisateur·ice·s. Ainsi, lorsque la sélection d'onglet change, le panneau affiché change également, tandis que le panneau précédemment affiché devient masqué.

Dans les interfaces à sélection multiple, plusieurs éléments `tabpanel` peuvent être affichés, selon l'état développé de leurs onglets associés.

Les onglets ne servent pas de liens d'ancrage vers des panneaux individuels&nbsp;: lors de l'activation, la sélection clavier doit rester sur l'onglet courant et ne pas se déplacer automatiquement vers le `tabpanel` nouvellement affiché. Bien qu'une interface à onglets puisse être améliorée progressivement à partir d'un modèle de balisage sous-jacent avec des liens internes pointant vers les sections de contenu associées, lorsque JavaScript est utilisé pour transformer ces éléments en interface à onglets, le comportement par défaut des liens doit être empêché. Idéalement, cela peut être fait en supprimant ou modifiant l'attribut `href`, ce qui a l'avantage de retirer les options spécifiques aux liens du menu contextuel du navigateur.

Lorsque la sélection clavier est sur une `tablist` ou un onglet dans la `tablist`, la touche <kbd>Tab</kbd> doit être programmée pour déplacer la sélection du tab sélectionné (qui peut ou non être l'onglet actif) vers le `tabpanel` qui représente l'onglet actuellement sélectionné.

Chaque onglet (`tab`) dans une `tablist` peut servir d'étiquette à son `tabpanel` correspondant. Indiquez l'id de chaque onglet comme valeur de l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) de chaque `tabpanel`.

Vous pouvez aussi associer chaque `tabpanel` à son onglet en incluant l'id du `tabpanel` comme valeur de l'attribut [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) de l'onglet.

Lorsqu'une interface à onglets est initialisée, un `tabpanel` est affiché et son onglet associé est stylisé pour indiquer qu'il est actif, reflétant son état programmatique. Tous les éléments `tabpanel` inactifs doivent être masqués pour tous les utilisateur·ice·s, le plus souvent via la propriété CSS `display: none`.

Voir l'article sur le rôle [ARIA `tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) pour plus d'informations spécifiques à l'utilisation de ce rôle.

Ajoutez [`tabindex="-1"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour permettre à un `tabpanel` de recevoir la sélection sans l'inclure dans l'ordre de tabulation de la page.

Veillez à définir des styles pour un `tabpanel` lorsqu'il reçoit la sélection, idéalement avec la pseudo-classe CSS {{CSSXref(':focus')}}, afin que les utilisateur·ice·s au clavier sachent qu'il y a eu un changement de sélection et soient informé·e·s du contenu actuellement sélectionné.

Les carrousels peuvent être créés avec ce modèle d'onglets&nbsp;: les contrôles de sélection de diapositive peuvent être balisés comme des onglets (`tabs`) dans une `tablist`, la diapositive étant représentée par un élément `tabpanel`.

### Propriétés, états et rôles associés

- [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
  - : Contrôle la visibilité du `tabpanel` associé.
- [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
  - : Groupe d'éléments `tab`.
- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Fournit un nom accessible. Référence l'onglet qui contrôle le panneau.
- [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Doit être utilisé sur les onglets nécessaires si une `tablist` à sélection multiple est utilisée.

### Interactions au clavier

Voir les [interactions clavier de tablist](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role#interactions_au_clavier) dans la définition du rôle [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role).

## Exemple

Voir l'exemple [`tabpanel`, `tab` et `tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#exemple) dans la définition du rôle [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [ARIA&nbsp;: rôle `tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [Exemple&nbsp;: onglets à activation automatique <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Exemple&nbsp;: onglets à activation manuelle <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) - W3C
