---
title: Performance.navigation
slug: Web/API/Performance/navigation
l10n:
  sourceCommit: cadd198e75b25e939938c414e46e95aa7f14318b
---

{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

L'ancienne propriété **`Performance.navigation`** en lecture seule renvoie un objet [`PerformanceNavigation`](/fr/docs/Web/API/PerformanceNavigation) représentant le type de navigation qui se produit dans le contexte de navigation donné, comme le nombre de redirections nécessaires pour aller chercher la ressource.

Cette propriété n'est pas disponible pour les <i lang="en">workers</i>.

> [!WARNING]
> Cette propriété est dépréciée dans la [spécification de mesure des durées de navigation (<i lang="en">Navigation Timing</i>)](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

## Valeur

Un objet [`PerformanceNavigation`](/fr/docs/Web/API/PerformanceNavigation).

## Spécifications

Cette fonctionnalité n'est plus en voie de standardisation, car elle est indiquée comme dépréciée dans la [spécification de mesure des durées de navigation (<i lang="en">Navigation Timing</i>)](https://w3c.github.io/navigation-timing/#obsolete). Utilisez à la place l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface qui porte cette propriété, [`Performance`](/fr/docs/Web/API/Performance).
