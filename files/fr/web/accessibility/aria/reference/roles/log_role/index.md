---
title: "ARIA : rôle log"
short-title: log
slug: Web/Accessibility/ARIA/Reference/Roles/log_role
original_slug: Web/Accessibility/ARIA/Roles/log_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `log` est utilisé pour identifier un élément qui crée [une zone dynamique <sup>(angl.)</sup>](https://www.w3.org/WAI/PF/aria/terms#def_liveregion) où de nouvelles informations sont ajoutées dans un ordre significatif et où les anciennes informations peuvent être supprimées.

## Description

Un journal (<i lang="en">log</i> en anglais) est un type de zone en direct où de nouvelles informations sont ajoutées dans un ordre significatif et où les anciennes informations peuvent disparaître. Des exemples incluent les journaux de discussion, l'historique des messages, les journaux de jeu ou un journal d'erreurs. Contrairement à d'autres zones en direct, dans ce rôle, il existe une relation entre l'arrivée de nouveaux éléments dans le journal et l'ordre de lecture. Le journal contient une séquence significative et de nouvelles informations ne sont ajoutées qu'à la fin du journal, et non à des points arbitraires.

Contrairement à d'autres types de zones en direct, un journal est ordonné de manière séquentielle et de nouvelles informations ne sont ajoutées qu'à la fin du journal. Lorsque ce rôle est ajouté à un élément, le navigateur enverra un événement de journal accessible aux produits de technologie d'assistance qui pourront alors notifier l'utilisateur·ice à ce sujet.

Par défaut, les mises à jour ne contiennent que les modifications apportées à la zone en direct et celles-ci sont annoncées lorsque l'utilisateur·ice est inactif·ve. Les éléments ayant le rôle `log` ont une valeur implicite `aria-live` de `polite`. Lorsque l'utilisateur·ice doit entendre l'ensemble de la zone en direct lors d'un changement, `aria-atomic="true"` doit être défini. Pour que les annonces soient faites dès que possible et où l'utilisateur·ice peut être interrompu·e, `aria-live="assertive"` peut être défini pour des mises à jour plus agressives.

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
  - : Définit si les technologies d'assistance doivent présenter l'ensemble ou seulement une partie de la région modifiée. Les éléments ayant le rôle `log` ont une valeur implicite `aria-atomic` de `false`.

- [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
  - : Définit quand la technologie d'assistance doit informer l'utilisateur·ice des mises à jour du contenu. Les éléments ayant le rôle `log` ont une valeur implicite `aria-live` de `polite`, ce qui signifie que les lecteurs d'écran annonceront les changements à l'intérieur du journal lorsque l'utilisateur·ice est inactif·ve.

- `aria-label` et `aria-labelledby`
  - : Le rôle `log` doit avoir un nom accessible. Utilisez `aria-labelledby` si un label visible est présent, sinon utilisez `aria-label`.

## Bonnes pratiques

Avec une zone qui a du texte défilant, comme un téléscripteur boursier, le rôle [`marquee`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role) doit être utilisé à la place.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA&nbsp;: rôle `marquee`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA&nbsp;: rôle `status`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA&nbsp;: rôle `timer`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [Les zones ARIA en direct](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions)
