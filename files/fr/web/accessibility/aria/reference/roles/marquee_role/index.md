---
title: "ARIA : rôle marquee"
short-title: marquee
slug: Web/Accessibility/ARIA/Reference/Roles/marquee_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `marquee` désigne un type de [région dynamique](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions) contenant des informations non essentielles qui changent fréquemment.

## Description

Le rôle `marquee` définit une zone comme un type de région dynamique qui présente des informations non essentielles qui changent fréquemment. Les exemples de marquages incluent les tickers boursiers et les bannières publicitaires&nbsp;; des informations qui ne sont pas nécessairement recherchées par l'utilisateur·ice et qui peuvent être présentées dans n'importe quel ordre. La principale différence entre un `marquee` et un [`log`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/log_role) est que les informations de journal sont présentées dans un ordre significatif, comme par date.

Les éléments avec le rôle `marquee` ont une valeur implicite de [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions) de `off`.

Le rôle `marquee` doit avoir un nom accessible. Utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) si un label visible est présent, sinon utilisez [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
  - : Définit quand la technologie d'assistance doit informer l'utilisateur·ice des mises à jour du contenu. Les éléments avec le rôle `marquee` ont une valeur implicite de `aria-live` de `off`, ce qui signifie que les lecteurs d'écran n'annonceront pas les changements à l'intérieur du marquage, même lorsque l'utilisateur·ice est inactif·ve.

- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Le rôle `marquee` doit avoir un nom accessible. Utilisez `aria-labelledby` si un label visible est présent, sinon utilisez `aria-label`.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA&nbsp;: rôle `log`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA&nbsp;: rôle `status`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA&nbsp;: rôle `timer`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [Les zones ARIA en direct](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions)
