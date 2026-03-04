---
title: Activation persistante
slug: Glossary/Sticky_activation
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**Activation persistante** (ou «&nbsp;activation utilisateur persistante&nbsp;») est un état de la fenêtre qui indique qu'un·e utilisateur·ice a interagi de manière significative et directe avec la fenêtre depuis le chargement de la page.
Une fois active, cet état persiste pendant toute la session.

L'état est activé à la suite de toute interaction utilisateur, lorsque la fenêtre a le focus, qui entraîne la génération par le navigateur d'un ou plusieurs des évènements suivants&nbsp;:

- Un évènement `mousedown` ou `pointerdown` pour une souris.
- Un évènement `pointerup` pour tout autre type de pointeur.
- Un évènement `touchend`.
- Un évènement `keydown`, sauf pour la touche <kbd>Échap</kbd> ou les raccourcis du navigateur.

La fenêtre n'est pas activée par des évènements qui ne sont pas nécessairement causés par une interaction intentionnelle avec la fenêtre, comme les évènements de déplacement de la souris ou les évènements `wheel`.

L'activation persistante sert à contrôler l'accès à certaines fonctionnalités, en les bloquant si l'utilisateur·ice n'a pas interagi avec la page.
Par exemple, cela permet de s'assurer que les fonctionnalités contrôlées dans des cadres inter-origines n'exécutent pas de code au chargement de la page.
Voir [Fonctionnalités soumises à l'activation utilisateur](/fr/docs/Web/Security/Defenses/User_activation) pour plus d'informations.

La propriété {{DOMxRef("UserActivation.hasBeenActive")}} permet de vérifier par programmation l'état d'activation persistante de la fenêtre courante.

## Voir aussi

- [Comparaison entre activation transitoire et activation persistante](/fr/docs/Web/Security/Defenses/User_activation#comparaison_entre_lactivation_transitoire_et_persistante) dans _Fonctionnalités soumises à l'activation utilisateur_
- Terme associé du glossaire&nbsp;:
  - {{Glossary("Transient activation", "Activation transitoire")}}
- La propriété API {{DOMxRef("UserActivation.hasBeenActive")}}
- [HTML Living Standard > Activation persistante <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
