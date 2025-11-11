---
title: Performance.timing
slug: Web/API/Performance/timing
l10n:
  sourceCommit: cadd198e75b25e939938c414e46e95aa7f14318b
---

{{APIRef("Navigation Timing")}}{{deprecated_header}}

L'ancienne propriété **`Performance.timing`** en lecture seule renvoie un objet [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) contenant des informations de performance liées à la latence.

Cette propriété n'est pas disponible pour les <i lang="en">workers</i>.

> [!WARNING]
> Cette propriété est dépréciée dans la [spécification de mesure des durées de navigation (<i lang="en">Navigation Timing</i>)](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

## Valeur

Un objet [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming).

## Spécifications

Cette fonctionnalité n'est plus en voie de standardisation, car elle est indiquée comme dépréciée dans la [spécification de mesure des durées de navigation (<i lang="en">Navigation Timing</i>)](https://w3c.github.io/navigation-timing/#obsolete). Utilisez à la place l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface qui porte cette propriété, [`Performance`](/fr/docs/Web/API/Performance).
