---
title: Performance
slug: Web/API/Performance
---

{{APIRef("High Resolution Time")}}

L'interface **`Performance`** donne accès à des informations liées aux performances pour la page actuelle. Elle fait partie de l'API « High Resolution Time », mais est complétée par les APIs [Performance Timeline](/fr/docs/Web/API/Performance_Timeline), [Navigation Timing](/fr/docs/Web/API/Navigation_timing_API), [User Timing](/fr/docs/Web/API/User_Timing_API), et [Resource Timing](/fr/docs/Web/API/Resource_Timing_API).

Un objet de ce type peut être obtenu en appelant l'attribut en lecture seule {{domxref("window.performance")}}.

> **Note :** Cette interface et ses attributs sont accessibles aux [Web Workers](/fr/docs/Web/API/Web_Workers_API) via [`WorkerGlobalScope.performance`](/fr/docs/Web/API/WorkerGlobalScope/performance) sauf dans les cas cités ci-dessous. Notez également que les marqueurs et les mesures de performance sont définis par contexte. Si vous créez un marqueur dans le processus principal (ou un autre Web Worker), vous ne pourrez pas le voir dans le processus du Web Worker, et réciproquement.

## Propriétés

_L'interface `Performance` n'hérite d'aucune propriété._

- {{domxref("performance.navigation")}} {{readonlyInline}} {{deprecated_inline}}

  - : {{domxref("PerformanceNavigation")}} est un objet qui fournit des informations contextuelles sur les opérations incluses dans les indicateurs de `timing`, notamment si la page a été chargée ou actualisée, combien de redirections ont été effectuées, etc…

    > **Note :** Indisponible dans les Web Workers.

- {{domxref("performance.timing")}} {{readonlyInline}} {{deprecated_inline}}

  - : {{domxref("PerformanceTiming")}} est un objet contenant des informations de performance liées à la latence.

    > **Note :** Indisponible dans les Web Workers.

- {{domxref("performance.memory")}} {{readonlyInline}} {{Non-standard_inline}}
  - : Une extension _non standard_ ajoutée dans Chrome, cette propriété fournit à un objet des informations de base sur l'utilisation de la mémoire. _Vous **ne devriez pas utiliser** cette API non standard._
- {{domxref("Performance.timeOrigin")}} {{readonlyInline}} {{Experimental_inline}}
  - : Fournit un horodatage haute résolution de l'heure de début de la mesure de performance.

## Méthodes

_L'interface `Performance` n'hérite d'aucune méthode_.

- {{domxref("performance.clearMarks()")}}
  - : Supprime le _marqueur_ indiqué des données de performances du navigateur mises en mémoire tampon.
- {{domxref("performance.clearMeasures()")}}
  - : Supprime la _mesure_ indiquée des données de performances du navigateur mises en mémoire tampon.
- {{domxref("performance.clearResourceTimings()")}}
  - : Supprime toutes les {{domxref("PerformanceEntry","entrées de performance","",1)}} avec un {{domxref("PerformanceEntry.entryType","entryType")}} "`resource`" des données de performances du navigateur mises en mémoire tampon.
- {{domxref("performance.getEntries()")}}
  - : Retourne une liste d'objets {{domxref("PerformanceEntry")}} basée sur le _filtre_ indiqué.
- {{domxref("performance.getEntriesByName()")}}
  - : Retourne une liste d'objets {{domxref("PerformanceEntry")}} basée sur le _nom_ indiqué.
- {{domxref("performance.getEntriesByType()")}}
  - : Retourne une liste d'objets {{domxref("PerformanceEntry")}} basée sur le _type_ indiqué.
- {{domxref("performance.mark()")}}
  - : Crée un {{domxref("DOMHighResTimeStamp","timestamp")}} avec le nom indiqué, dans la mémoire tampon du navigateur dédiée aux performances.
- {{domxref("performance.measure()")}}
  - : Crée un {{domxref("DOMHighResTimeStamp","timestamp")}} nommé, dans la mémoire tampon du navigateur dédiée aux performances, entre deux marqueurs spécifiques (connus comme le _marqueur de début_ et le _marqueur de fin_, respectivement).
- {{domxref("Performance.now()")}}
  - : Retourne un objet {{domxref("DOMHighResTimeStamp")}} représentant le nombre de millisecondes écoulées depuis un instant donné.
- {{domxref("performance.setResourceTimingBufferSize()")}}
  - : Configure la taille de la mémoire tampon pour le chronométrage des ressources du navigateur. La valeur passée en argument indiquera le nombre maximal d'objets {{domxref("PerformanceEntry")}} ayant le {{domxref("PerformanceEntry.entryType","type")}} "`resource`" qu'il sera possible d'y stocker.
- {{domxref("Performance.toJSON()")}}
  - : Retourne un objet JSON représentant l'objet `Performance`.

## Événements

On pourra écouter ces événements en utilisant `addEventListener()` ou en assignant un gestionnaire d'événement à la propriété `on<EventName>` de cette interface.

- {{DOMxRef("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
  - : Déclenché lorsque le [tampon de synchronisation des ressources](/fr/docs/Web/API/Performance/setResourceTimingBufferSize) du navigateur est plein. Également disponible via la propriété {{DOMxRef("Performance.onresourcetimingbufferfull", "onresourcetimingbufferfull")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Performance Timeline](/fr/docs/Web/API/Performance_Timeline)
- [Navigation Timing API](/fr/docs/Web/API/Navigation_timing_API)
- [User Timing API](/fr/docs/Web/API/User_Timing_API)
- [Resource Timing API](/fr/docs/Web/API/Resource_Timing_API)
