---
title: PerformanceTiming.domInteractive
slug: Web/API/PerformanceTiming/domInteractive
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Navigation Timing
  - PerformanceTiming
  - Property
  - Propriété
  - Read-only
  - legacy
  - domInteractive
translation_of: Web/API/PerformanceTiming/domInteractive
---
{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser la propriété [`PerformanceNavigationTiming.domInteractive`](/fr/docs/Web/API/PerformanceNavigationTiming/domInteractive) de l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`domInteractive`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où le parseur a terminé son travail sur le document principal, c'est-à-dire lorsque son [`Document.readyState`](/fr/docs/Web/API/Document/readyState) passe à `"interactive"` et que l'événement [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event) correspondant est lancé.

Cette propriété peut être utilisée pour mesurer la vitesse de chargement des sites Web que les utilisateurs _ressentent_. Néanmoins, il y a quelques mises en garde qui se produisent si des scripts bloquent le rendu et ne sont pas chargés de manière asynchrone ou avec des polices Web personnalisées. [Vérifiez si vous êtes dans l'un de ces cas](http://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/) avant d'utiliser cette propriété comme un proxy pour l'expérience utilisateur de la vitesse de chargement d'un site Web.

## Syntaxe

```js
let time = performanceTiming.domInteractive;
```

## Spécifications

| Spécification                                                                                                                                                | Statut                                   | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing', '#dom-performancetiming-dominteractive',
        'PerformanceTiming.domInteractive')}} | {{Spec2('Navigation Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceTiming.domInteractive")}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
- L'article « [domInteractive: is it? really?](http://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/) (en) » explique quand vous pouvez utiliser cette propriété comme un proxy pour l'expérience utilisateur du chargement d'un site Web.
