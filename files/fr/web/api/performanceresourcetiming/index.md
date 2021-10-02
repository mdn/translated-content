---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
tags:
  - API
  - DOM
  - Interface
  - Reference
  - Performance Web
  - Resource Timing API
translation_of: Web/API/PerformanceResourceTiming
---
{{APIRef("Resource Timing API")}}

L'interface **`PerformanceResourceTiming`** permet de récupérer et d'analyser des données de synchronisation réseau détaillées concernant le chargement des _ressources_ d'une application. Une application peut utiliser les mesures temporelles pour déterminer, par exemple, la durée nécessaire à l'extraction d'une ressource spécifique, telle qu'une [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest), un élément [`<svg>`](/fr/docs/Web/SVG/Element/svg), une image ou un script.

Les propriétés de l'interface créent une _chronologie de chargement des ressources_ avec un [timestamps haute résolution](/fr/docs/Web/API/DOMHighResTimeStamp) pour les événements réseau tels que les heures de début et de fin de redirection, les heures de début de récupération, les heures de début et de fin de recherche DNS, les heures de début et de fin de réponse, etc. En outre, l'interface étend [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) avec d'autres propriétés qui fournissent des données sur la taille de la ressource extraite ainsi que le _type_ de ressource qui a initié l'extraction.

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Propriétés

Cette interface étend les propriétés [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) suivantes pour les types d'entrée de performance des ressources en les restreignant comme suit :

- [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) {{readonlyInline}}
  - : Retourne `"resource"`.
- [`PerformanceEntry.name`](/fr/docs/Web/API/PerformanceEntry/name) {{readonlyInline}}
  - : Retourne l'URL des ressources.
- [`PerformanceEntry.startTime`](/fr/docs/Web/API/PerformanceEntry/startTime) {{readonlyInline}}
  - : Retourne le [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) de l'heure de début de la récupération d'une ressource. Cette valeur est équivalente à [`PerformanceResourceTiming.fetchStart`](/fr/docs/Web/API/PerformanceResourceTiming/fetchStart).
- [`PerformanceEntry.duration`](/fr/docs/Web/API/PerformanceEntry/duration) {{readonlyInline}}
  - : Retourne un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) qui est la différence entre les propriétés [`responseEnd`](/fr/docs/Web/API/PerformanceResourceTiming/responseEnd) et [`startTime`](/fr/docs/Web/API/PerformanceEntry/startTime).

L'interface prend également en charge les propriétés suivantes, qui sont énumérées dans l'ordre temporel selon lequel elles sont enregistrées pour l'extraction d'une seule ressource. Une liste alphabétique est présentée dans la navigation, à gauche.

- [`PerformanceResourceTiming.initiatorType`](/fr/docs/Web/API/PerformanceResourceTiming/initiatorType) {{readonlyInline}}
  - : Une chaîne de caractère [`string`](/fr/docs/Web/API/DOMString) représentant le _type_ de ressource qui a initié l'entrée de performance, comme spécifié dans [`PerformanceResourceTiming.initiatorType`](/fr/docs/Web/API/PerformanceResourceTiming/initiatorType).
- [`PerformanceResourceTiming.nextHopProtocol`](/fr/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{readonlyInline}}
  - : Une chaîne de caractère [`string`](/fr/docs/Web/API/DOMString) représentant le _protocole réseau_ utilisé pour récupérer la ressource, tel qu'identifié par le [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).
- [`PerformanceResourceTiming.workerStart`](/fr/docs/Web/API/PerformanceResourceTiming/workerStart) {{readonlyInline}}
  - : Retourne un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant de transmettre le [`FetchEvent`](/fr/docs/Web/API/FetchEvent) si un processus de Service Worker est déjà en cours, ou immédiatement avant de lancer le processus de Service Worker s'il n'est pas encore en cours. Si la ressource n'est pas interceptée par un Service Worker, la propriété retourne toujours 0.
- [`PerformanceResourceTiming.redirectStart`](/fr/docs/Web/API/PerformanceResourceTiming/redirectStart) {{readonlyInline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) qui représente l'heure de début de l'extraction qui déclenche la redirection.
- [`PerformanceResourceTiming.redirectEnd`](/fr/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{readonlyInline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement après la réception du dernier octet de la réponse de la dernière redirection.
- [`PerformanceResourceTiming.fetchStart`](/fr/docs/Web/API/PerformanceResourceTiming/fetchStart) {{readonlyInline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant que le navigateur ne commence à récupérer la ressource.
- [`PerformanceResourceTiming.domainLookupStart`](/fr/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{readonlyInline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant que le navigateur ne commence la recherche du nom de domaine pour la ressource.
- [`PerformanceResourceTiming.domainLookupEnd`](/fr/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{readonlyInline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant l'heure immédiatement après la fin de la recherche du nom de domaine de la ressource par le navigateur.
- [`PerformanceResourceTiming.connectStart`](/fr/docs/Web/API/PerformanceResourceTiming/connectStart) {{readonlyInline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant que le navigateur ne commence à établir la connexion avec le serveur pour récupérer la ressource.
- [`PerformanceResourceTiming.connectEnd`](/fr/docs/Web/API/PerformanceResourceTiming/connectEnd) {{readonlyInline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement après que le navigateur ait fini d'établir la connexion avec le serveur pour récupérer la ressource.
- [`PerformanceResourceTiming.secureConnectionStart`](/fr/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{readonlyInline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant que le navigateur ne lance le processus de reconnaissance pour sécuriser la connexion en cours.
- [`PerformanceResourceTiming.requestStart`](/fr/docs/Web/API/PerformanceResourceTiming/requestStart) {{readonlyInline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant que le navigateur ne commence à demander la ressource au serveur.
- [`PerformanceResourceTiming.responseStart`](/fr/docs/Web/API/PerformanceResourceTiming/responseStart) {{readonlyInline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement après que le navigateur ait reçu le premier octet de la réponse du serveur.
- [`PerformanceResourceTiming.responseEnd`](/fr/docs/Web/API/PerformanceResourceTiming/responseEnd) {{readonlyInline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement après la réception par le navigateur du dernier octet de la ressource ou immédiatement avant la fermeture de la connexion de transfert, selon la première éventualité.
- [`PerformanceResourceTiming.transferSize`](/fr/docs/Web/API/PerformanceResourceTiming/transferSize) {{readonlyInline}}
  - : Un nombre représentant la taille (en octets) de la ressource extraite. La taille comprend les champs d'en-tête de la réponse plus le corps des données utiles de la réponse.
- [`PerformanceResourceTiming.encodedBodySize`](/fr/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{readonlyInline}}
  - : Un nombre représentant la taille (en octets) reçue de la récupération (HTTP ou cache), du _corps de la donnée_, avant de supprimer tout codage de contenu appliqué.
- [`PerformanceResourceTiming.decodedBodySize`](/fr/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{readonlyInline}}
  - : Un nombre représentant la taille (en octets) reçue de la récupération (HTTP ou cache) du _message body_, après avoir retiré tout codage de contenu appliqué.
- [`PerformanceResourceTiming.serverTiming`](/fr/docs/Web/API/PerformanceResourceTiming/serverTiming) {{readonlyInline}}
  - : Un tableau d'entrées [`PerformanceServerTiming`](/fr/docs/Web/API/PerformanceServerTiming) contenant des mesures de synchronisation du serveur.

## Méthodes

- [`PerformanceResourceTiming.toJSON()`](/fr/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Renvoie une chaîne de caractère [`DOMString`](/fr/docs/Web/API/DOMString) qui est la représentation JSON de l'objet [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming).

## Exemple

Voir l'exemple dans [Utilisation de Resource Timing API](/fr/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API).

## Spécifications

| Spécification                                                                                                            | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Resource Timing', '#performanceresourcetiming', 'PerformanceResourceTiming')}} | {{Spec2('Resource Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceResourceTiming")}}

## Voir aussi

- [L'API _Resource Timing_](/fr/docs/Web/API/Resource_Timing_API)
- [Utilisation de l'API _Resource Timing_](/fr/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
