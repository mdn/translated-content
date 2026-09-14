---
title: Activation transitoire
slug: Glossary/Transient_activation
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**Activation transitoire** (ou «&nbsp;activation transitoire de l'utilisateur·ice&nbsp;») décrit un état d'une fenêtre indiquant que l'utilisateur·ice a récemment interagi directement et de manière significative avec la fenêtre.

L'état s'active après toute interaction de l'utilisateur·ice, lorsque la fenêtre a le focus, et que le navigateur génère un ou plusieurs des évènements suivants&nbsp;:

- un `mousedown` ou `pointerdown` pour une souris&nbsp;;
- un `pointerup` pour tout autre type de pointeur&nbsp;;
- un `touchend`&nbsp;;
- un `keydown`, à l'exception des touches Échap ou des raccourcis du navigateur.

La fenêtre n'est pas considérée comme activée par l'utilisateur·ice pour des évènements qui ne résultent pas nécessairement d'une interaction intentionnelle avec la fenêtre, tels que les mouvements de souris ou les évènements `wheel`.

L'activation transitoire expire après un délai (si elle n'est pas renouvelée par d'autres interactions), et peut aussi être consommée/désactivée après l'utilisation de certaines fonctionnalités protégées (par exemple {{DOMxRef("Window.open()")}}).

L'activation transitoire est couramment utilisée comme mécanisme garantissant qu'une API Web ne fonctionne que si elle est déclenchée par une interaction utilisateur.
Par exemple, les scripts ne peuvent pas lancer arbitrairement une fenêtre contextuelle nécessitant une _activation transitoire_ — elle doit être déclenchée depuis le gestionnaire d'évènements d'un élément de l'interface utilisateur.
Voir [Fonctionnalités soumises à l'activation utilisateur](/fr/docs/Web/Security/Defenses/User_activation) pour des informations sur les API qui exigent une _activation transitoire_.

La propriété {{DOMxRef("UserActivation.isActive")}} permet de vérifier par programme l'état d'activation transitoire de la fenêtre courante.

## Voir aussi

- [Comparaison entre activation transitoire et activation persistante](/fr/docs/Web/Security/Defenses/User_activation#comparison_between_transient_and_sticky_activation) dans _Fonctionnalités soumises à l'activation utilisateur_
- Terme du glossaire&nbsp;:
  - {{Glossary("Sticky activation", "Activation persistante")}}
- La propriété API {{DOMxRef("UserActivation.isActive")}}
- [HTML Living Standard > Transient activation <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
