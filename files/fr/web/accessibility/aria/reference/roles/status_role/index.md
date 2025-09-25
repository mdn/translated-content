---
title: "ARIA : rôle status"
short-title: status
slug: Web/Accessibility/ARIA/Reference/Roles/status_role
original_slug: Web/Accessibility/ARIA/Roles/status_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `status` définit une [région dynamique](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions) contenant des informations de conseil pour l'utilisateur·ice qui ne sont pas assez importantes pour être une [`alerte`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

## Description

Un `status` est un type de [région dynamique](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions) fournissant des informations de conseil qui ne sont pas assez importantes pour justifier une alerte, laquelle interromprait immédiatement l'annonce de l'activité courante de l'utilisateur·ice. Il est souvent, mais pas nécessairement, présenté sous forme de barre d'état.

Ne donnez pas de ciblage au status lorsque son contenu est mis à jour. Les régions dynamiques sont conçues pour informer les utilisateur·ice·s des mises à jour dynamiques survenues dans d'autres zones de la page web courante, mais qui ne nécessitent pas d'interrompre l'activité courante de l'utilisateur·ice par un changement de contexte. Si la situation exige de déplacer la sélection, alors l'utilisation d'un `status` ou d'une autre région dynamique n'est probablement pas appropriée.

Les éléments avec le rôle status ont une valeur implicite de [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) à `polite` et une valeur implicite de [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) à `true`.

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
  - : Définit si les technologies d'assistance doivent présenter toute la région modifiée ou seulement une partie. Les éléments avec le rôle `status` ont une valeur implicite de `aria-atomic` à `true`.

- [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
  - : Définit quand la technologie d'assistance doit informer l'utilisateur·ice des mises à jour du contenu. Les éléments avec le rôle `status` ont une valeur implicite de `aria-live` à `polite`, ce qui signifie que les lecteurs d'écran annoncent les changements dans le log lorsque l'utilisateur·ice est inactif·ve.

- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Certains lecteurs d'écran annoncent le nom d'un élément status avant d'annoncer son contenu. Si un nom est visible, référencez-le avec `aria-labelledby`. Inclure un `aria-label` permet de faire précéder le contenu visible d'un élément status par un texte qui n'est pas affiché lorsque le lecteur d'écran lit le contenu. Nommer un status n'est pas obligatoire&nbsp;: si rien n'est approprié, ces deux attributs peuvent être omis.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA&nbsp;: rôle `log`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA&nbsp;: rôle `marquee`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA&nbsp;: rôle `timer`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [Régions dynamiques ARIA](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions)
