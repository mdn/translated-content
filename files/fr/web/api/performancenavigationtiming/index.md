---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
---

{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

L'interface **`PerformanceNavigationTiming`** fournit des méthodes et des propriétés pour stocker et récupérer des métriques concernant les événements de navigation de document du navigateur. Par exemple, cette interface peut être utilisée pour déterminer le temps nécessaire au chargement ou au déchargement d'un document.

{{InheritanceDiagram}}

## Propriétés

Cette interface étend les propriétés de [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) suivantes pour les types d'entrée de performance de navigation en les qualifiant et en les contraignant comme suit :

- [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) {{readonlyInline}}
  - : Retourne « `navigation` ».
- [`PerformanceEntry.name`](/fr/docs/Web/API/PerformanceEntry/name) {{readonlyInline}}
  - : Retourne l'adresse du [document](https://dom.spec.whatwg.org/#concept-document-url).
- [`PerformanceEntry.startTime`](/fr/docs/Web/API/PerformanceEntry/startTime) {{readonlyInline}}
  - : Retourne un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) avec une valeur de « `0` ».
- [`PerformanceEntry.duration`](/fr/docs/Web/API/PerformanceEntry/duration) {{readonlyInline}}
  - : Retourne un [timestamp](/fr/docs/Web/API/DOMHighResTimeStamp) qui est la différence entre les propriétés [`PerformanceNavigationTiming.loadEventEnd`](/fr/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) et [`PerformanceEntry.startTime`](/fr/docs/Web/API/PerformanceEntry/startTime).

Cette interface étend également les propriétés [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming) suivantes pour les types d'entrée de performance de navigation en les qualifiant et en les contraignant comme suit :

- [`PerformanceResourceTiming.initiatorType`](/fr/docs/Web/API/PerformanceResourceTiming/initiatorType) {{readonlyInline}}
  - : Retourne « `navigation` ».

L'interface prend également en charge les propriétés suivantes :

- [`PerformanceNavigationTiming.domComplete`](/fr/docs/Web/API/PerformanceNavigationTiming/domComplete) {{readonlyInline}} {{Experimental_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant une valeur temporelle égale au temps immédiatement avant que le navigateur ne définisse la disponibilité du document actuel à _[complete](https://html.spec.whatwg.org/multipage/syntax.html#the-end)_.
- [`PerformanceNavigationTiming.domContentLoadedEventEnd`](/fr/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd) {{readonlyInline}} {{Experimental_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle égale au temps immédiatement après la fin de l'événement [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end) du document actuel.
- [`PerformanceNavigationTiming.domContentLoadedEventStart`](/fr/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) {{readonlyInline}} {{Experimental_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle égale au temps immédiatement avant que l'agent utilisateur ne déclenche l'événement [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end) sur le document actuel.
- [`PerformanceNavigationTiming.domInteractive`](/fr/docs/Web/API/PerformanceNavigationTiming/domInteractive) {{readonlyInline}} {{Experimental_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant une valeur [temporelle](/fr/docs/Web/API/DOMHighResTimeStamp) égale qui précède immédiatement le moment où l'agent utilisateur règle l'état de préparation du document actuel sur [interactif](https://html.spec.whatwg.org/multipage/syntax.html#the-end).
- [`PerformanceNavigationTiming.loadEventEnd`](/fr/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) {{readonlyInline}} {{Experimental_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant le moment où l'événement de chargement du document actuel est terminé.
- [`PerformanceNavigationTiming.loadEventStart`](/fr/docs/Web/API/PerformanceNavigationTiming/loadEventStart) {{readonlyInline}} {{Experimental_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle égale à l'heure précédant immédiatement l'événement de chargement du document actuel.
- [`PerformanceNavigationTiming.redirectCount`](/fr/docs/Web/API/PerformanceNavigationTiming/redirectCount) {{readonlyInline}} {{Experimental_Inline}}
  - : Un nombre représentant le nombre de redirections, depuis la dernière navigation sans redirection, dans le contexte de navigation actuel. S'il n'y a pas eu de redirection, ou si la redirection provenait d'une autre origine, et que cette origine ne permet pas que ses informations temporelles soient exposées à l'origine actuelle, la valeur sera 0.
- [`PerformanceNavigationTiming.requestStart`](/fr/docs/Web/API/PerformanceNavigationTiming/requestStart) {{readonlyInline}} {{Experimental_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant le moment immédiatement avant que l'agent utilisateur ne commence à demander la ressource au serveur, ou aux caches d'application pertinents ou aux ressources locales.
- [`PerformanceNavigationTiming.responseStart`](/fr/docs/Web/API/PerformanceNavigationTiming/responseStart) {{readonlyInline}} {{Experimental_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant l'heure immédiatement après que l'analyseur HTTP de l'agent utilisateur ait reçu le premier octet de la réponse des caches d'application pertinents, ou des ressources locales ou du serveur.
- [`PerformanceNavigationTiming.type`](/fr/docs/Web/API/PerformanceNavigationTiming/type) {{readonlyInline}} {{Experimental_Inline}}
  - : Une chaîne de caractère [DOMString](/fr/docs/Web/API/DOMString) représentant le type de navigation. Doit être : « `navigate` », « `reload` », « `back_forward` » ou « `prerender` ».
- [`PerformanceNavigationTiming.unloadEventEnd`](/fr/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd) {{readonlyInline}} {{Experimental_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle égale au temps immédiatement après que l'agent utilisateur ait terminé l'événement de déchargement du document précédent.
- [`PerformanceNavigationTiming.unloadEventStart`](/fr/docs/Web/API/PerformanceNavigationTiming/unloadEventStart) {{readonlyInline}} {{Experimental_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle égale au temps immédiatement avant que l'agent utilisateur ne lance l'événement de déchargement du document précédent.

## Méthodes

- [`PerformanceNavigationTiming.toJSON()`](/fr/docs/Web/API/PerformanceNavigationTiming/toJSON) {{Experimental_Inline}}
  - : Retourne une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) qui est la représentation JSON de l'objet [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Performance.navigation`](/fr/docs/Web/API/Performance/navigation)
- [`PerformanceNavigation`](/fr/docs/Web/API/PerformanceNavigation)
