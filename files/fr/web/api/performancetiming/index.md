---
title: PerformanceTiming
slug: Web/API/PerformanceTiming
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'interface **`PerformanceTiming`** est une interface héritée conservée pour la rétrocompatibilité et contient des propriétés qui offrent des informations sur la chronologie des performances pour divers événements qui se produisent pendant le chargement et l'utilisation de la page actuelle. Vous obtenez un objet `PerformanceTiming` décrivant votre page en utilisant la propriété [`window.performance.timing`](/fr/docs/Web/API/Performance/timing).

## Propriétés

_L'interface `PerformanceTiming` n'hérite d'aucune propriété._

Ces propriétés décrivent chacune l'heure à laquelle un point particulier du processus de chargement de la page a été atteint. Certaines correspondent à des événements DOM, d'autres décrivent l'heure à laquelle les opérations internes du navigateur ont eu lieu.

Chaque heure est fournie sous la forme d'une [heure Unix](https://fr.wikipedia.org/wiki/Heure_Unix) (`unsigned long long`) représentant le moment, en millisecondes depuis l'époque UNIX.

Ces propriétés sont énumérées dans l'ordre dans lequel elles apparaissent au cours du processus de navigation.

- [`PerformanceTiming.navigationStart`](/fr/docs/Web/API/PerformanceTiming/navigationStart) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque le prompt de déchargement se termine sur le document précédent dans le même contexte de navigation. S'il n'y a pas de document précédent, cette valeur sera la même que `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.unloadEventStart`](/fr/docs/Web/API/PerformanceTiming/unloadEventStart) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque l'événement [`unload`](/fr/docs/Web/API/Window/unload_event) a été lancé, indiquant l'heure à laquelle le document précédent dans la fenêtre a commencé à se décharger. S'il n'y a pas de document précédent, ou si le document précédent ou l'une des redirections nécessaires n'est pas de la même origine, la valeur retournée est `0`.
- [`PerformanceTiming.unloadEventEnd`](/fr/docs/Web/API/PerformanceTiming/unloadEventEnd) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque le gestionnaire d'événement [`unload`](/fr/docs/Web/API/Window/unload_event) se termine. S'il n'y a pas de document précédent, ou si le document précédent, ou l'une des redirections nécessaires, n'est pas de la même origine, la valeur retournée est `0`.
- [`PerformanceTiming.redirectStart`](/fr/docs/Web/API/PerformanceTiming/redirectStart) {{readonlyInline}} {{deprecated_inline}}
  - : Quand la première redirection HTTP commence. S'il n'y a pas de redirection, ou si l'une des redirections n'est pas de la même origine, la valeur retournée est `0`.
- [`PerformanceTiming.redirectEnd`](/fr/docs/Web/API/PerformanceTiming/redirectEnd) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque la dernière redirection HTTP est terminée, c'est-à-dire lorsque le dernier octet de la réponse HTTP a été reçu. S'il n'y a pas de redirection, ou si l'une des redirections n'a pas la même origine, la valeur retournée est `0`.
- [`PerformanceTiming.fetchStart`](/fr/docs/Web/API/PerformanceTiming/fetchStart) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque le navigateur est prêt à récupérer le document à l'aide d'une requête HTTP. Ce moment est _avant_ la vérification de tout cache d'application.
- [`PerformanceTiming.domainLookupStart`](/fr/docs/Web/API/PerformanceTiming/domainLookupStart) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque la recherche du domaine commence. Si une connexion persistante est utilisée, ou si les informations sont stockées dans un cache ou une ressource locale, la valeur sera la même que `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.domainLookupEnd`](/fr/docs/Web/API/PerformanceTiming/domainLookupEnd) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque la recherche du domaine est terminée. Si une connexion persistante est utilisée, ou si les informations sont stockées dans un cache ou une ressource locale, la valeur sera la même que `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.connectStart`](/fr/docs/Web/API/PerformanceTiming/connectStart) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque la demande d'ouverture d'une connexion est envoyée au réseau. Si la couche de transport signale une erreur et que l'établissement de la connexion est relancé, la dernière heure de début d'établissement de la connexion est donnée. Si une connexion persistante est utilisée, la valeur sera la même que `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.connectEnd`](/fr/docs/Web/API/PerformanceTiming/connectEnd) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque la connexion est ouverte sur le réseau. Si la couche transport signale une erreur et que l'établissement de la connexion est relancé, l'heure de fin du dernier établissement de la connexion est donnée. Si une connexion persistante est utilisée, la valeur sera la même que `PerformanceTiming.fetchStart`. Une connexion est considérée comme ouverte lorsque toute poignée de main de connexion sécurisée, ou authentification SOCKS, est terminée.
- [`PerformanceTiming.secureConnectionStart`](/fr/docs/Web/API/PerformanceTiming/secureConnectionStart) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque le handshake de connexion sécurisée commence. Si aucune connexion de ce type n'est demandée, il retourne `0`.
- [`PerformanceTiming.requestStart`](/fr/docs/Web/API/PerformanceTiming/requestStart) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque le navigateur a envoyé la requête pour obtenir le document réel, depuis le serveur ou depuis un cache. Si la couche de transport échoue après le début de la demande et que la connexion est rouverte, cette propriété sera définie sur l'heure correspondant à la nouvelle demande.
- [`PerformanceTiming.responseStart`](/fr/docs/Web/API/PerformanceTiming/responseStart) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque le navigateur a reçu le premier octet de la réponse, du serveur ou d'un cache, ou d'une ressource locale.
- [`PerformanceTiming.responseEnd`](/fr/docs/Web/API/PerformanceTiming/responseEnd) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque le navigateur a reçu le dernier octet de la réponse, ou lorsque la connexion est fermée si cela s'est produit en premier, depuis le serveur, le cache ou une ressource locale.
- [`PerformanceTiming.domLoading`](/fr/docs/Web/API/PerformanceTiming/domLoading) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque l'analyseur syntaxique a commencé son travail, c'est-à-dire lorsque son [`Document.readyState`](/fr/docs/Web/API/Document/readyState) passe à `'loading'` et que l'événement [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event) correspondant est déclenché.
- [`PerformanceTiming.domInteractive`](/fr/docs/Web/API/PerformanceTiming/domInteractive) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque l'analyseur syntaxique a terminé son travail sur le document principal, c'est à ce moment que son [`Document.readyState`](/fr/docs/Web/API/Document/readyState) passe à `'interactive'` et que l'événement [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event) correspondant est lancé.
- [`PerformanceTiming.domContentLoadedEventStart`](/fr/docs/Web/API/PerformanceTiming/domContentLoadedEventStart) {{readonlyInline}} {{deprecated_inline}}
  - : Juste avant que l'analyseur syntaxique envoie l'événement [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event), c'est-à-dire juste après que tous les scripts qui doivent être exécutés juste après l'analyse syntaxique aient été exécutés.
- [`PerformanceTiming.domContentLoadedEventEnd`](/fr/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd) {{readonlyInline}} {{deprecated_inline}}
  - : C'est-à-dire juste après que tous les scripts qui doivent être exécutés dès que possible, dans l'ordre ou non, aient été exécutés.
- [`PerformanceTiming.domComplete`](/fr/docs/Web/API/PerformanceTiming/domComplete) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque l'analyseur syntaxique a terminé son travail sur le document principal, c'est-à-dire lorsque son [`Document.readyState`](/fr/docs/Web/API/Document/readyState) passe à `'complete'` et que l'événement [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event) correspondant est lancé.
- [`PerformanceTiming.loadEventStart`](/fr/docs/Web/API/PerformanceTiming/loadEventStart) {{readonlyInline}} {{deprecated_inline}}
  - : Quand l'événement [`load`](/fr/docs/Web/API/Window/load_event) a été envoyé pour le document actuel. Si cet événement n'a pas encore été envoyé, il retourne `0`.
- [`PerformanceTiming.loadEventEnd`](/fr/docs/Web/API/PerformanceTiming/loadEventEnd) {{readonlyInline}} {{deprecated_inline}}
  - : Lorsque le gestionnaire d'événement [`load`](/fr/docs/Web/API/Window/load_event) s'est terminé, c'est-à-dire lorsque l'événement de chargement est terminé. Si cet événement n'a pas encore été envoyé, ou n'est pas encore terminé, il retourne `0`.

## Méthodes

_L'interface `PerformanceTiming` n'hérite d'aucune méthode._

- [`PerformanceTiming.toJSON()`](/fr/docs/Web/API/PerformanceTiming/toJSON) {{non-Standard_Inline}} {{deprecated_inline}}
  - : Retourne un [objet JSON](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON) représentant cet objet `PerformanceTiming`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété [`Performance.timing`](/fr/docs/Web/API/Performance/timing) qui crée un tel objet.
