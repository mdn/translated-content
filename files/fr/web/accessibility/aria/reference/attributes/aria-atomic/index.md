---
title: "ARIA : attribut aria-atomic"
short-title: aria-atomic
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-atomic
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Dans les régions dynamiques ARIA, l'attribut global `aria-atomic` indique si les technologies d'assistance, comme les lecteurs d'écran, présenteront l'ensemble ou seulement une partie de la région modifiée, selon les notifications de changement définies par l'attribut [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant).

## Description

Les régions dynamiques sont des sections d'une page web qui sont mises à jour, que ce soit par une interaction utilisateur·ice ou non, alors que la sélection est ailleurs. Comme elles sont modifiées hors de la sélection, les technologies d'assistance comme les lecteurs d'écran peuvent ne pas «&nbsp;voir&nbsp;» la mise à jour pour la signaler à l'utilisateur·ice. WAI-ARIA propose 4 propriétés permettant à l'auteur·ice d'identifier ces régions dynamiques et d'indiquer aux technologies d'assistance comment les traiter&nbsp;: [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live), [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant), [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) et `aria-atomic`.

Lorsque le contenu d'une région dynamique change, le DOM est parcouru depuis l'élément modifié jusqu'à ses ancêtres pour trouver le premier élément ayant `aria-atomic` défini. Cela détermine le contenu qui doit être présenté à l'utilisateur·ice.

Si aucun ancêtre n'a explicitement défini `aria-atomic`, seul le ou les nœuds de la région dynamique ayant été mis à jour sont lus. La différence entre l'absence totale de `aria-atomic` et le fait de définir explicitement `aria-atomic="false"` sur un ancêtre est que ce dernier empêche le lecteur d'écran de remonter la chaîne des ancêtres. Dans les deux cas, seul le nœud mis à jour est lu. Lorsque `aria-atomic="true"` est défini, l'ensemble de la région modifiée est présenté, y compris le `label` du nœud mis à jour, s'il existe.

## Valeurs

- `false` (valeur par défaut)
  - : présente uniquement le ou les nœuds modifiés.
- `true`
  - : présente l'ensemble de la région modifiée, y compris le label défini par l'auteur·ice s'il existe.

## Rôles associés

Utilisé dans **TOUS** les [rôles](/fr/docs/Web/Accessibility/ARIA/Reference/Roles).

## Spécifications

{{Specifications}}

## Voir aussi

- [Event.ariaAtomic](/fr/docs/Web/API/Element/ariaAtomic)
