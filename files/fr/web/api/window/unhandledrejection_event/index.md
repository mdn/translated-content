---
title: "Window : évènement unhandledrejection"
short-title: unhandledrejection
slug: Web/API/Window/unhandledrejection_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("HTML DOM")}}

L'évènement **`unhandledrejection`** est envoyé à la portée globale d'un script lorsqu'une {{JSxRef("Promise")}} JavaScript qui n'a pas de gestionnaire de rupture est rompue&nbsp;; typiquement, il s'agit de la {{DOMxRef("window")}}, mais cela peut également être un {{DOMxRef("Worker")}}.

Ceci est utile pour le débogage et pour fournir une gestion des erreurs de secours dans des situations inattendues.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("unhandledrejection", (event) => { })

onunhandledrejection = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PromiseRejectionEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Alias des gestionnaires d'évènements

En plus de l'interface `Window`, la propriété de gestionnaire d'évènement `onunhandledrejection` est également disponible sur les cibles suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## Notes d'utilisation

Permettre à l'évènement `unhandledrejection` de se propager entraîne éventuellement l'affichage d'un message d'erreur dans la console. Vous pouvez empêcher cela en appelant {{DOMxRef("Event.preventDefault", "preventDefault()")}} sur le {{DOMxRef("PromiseRejectionEvent")}}&nbsp;; voir [Empêcher de la gestion par défaut](#empêcher_la_gestion_par_défaut) ci-dessous pour un exemple.

Parce que cet évènement peut divulguer des données, les promesses ({{JSxRef("Promise")}}) rompues qui proviennent d'un script inter-origine ne déclenchent pas cet évènement.

## Exemples

### Journaliser simplement les erreurs

Cet exemple journalise des informations sur la promesse rompue non gérée dans la console.

```js
window.addEventListener("unhandledrejection", (event) => {
  console.warn(`PROMESSE ROMPUE NON GÉRÉE : ${event.reason}`);
});
```

Vous pouvez également utiliser la propriété de gestionnaire d'évènement `onunhandledrejection` pour configurer l'écouteur d'évènements&nbsp;:

```js
window.onunhandledrejection = (event) => {
  console.warn(`PROMESSE ROMPUE NON GÉRÉE : ${event.reason}`);
};
```

### Empêcher la gestion par défaut

De nombreux environnements (tels que {{Glossary("Node.js")}}) signalent par défaut les promesses rompues non gérées dans la console. Vous pouvez empêcher cela en ajoutant un gestionnaire pour les évènements `unhandledrejection` qui—en plus de toute autre tâche que vous souhaitez effectuer — appelez {{DOMxRef("Event.preventDefault()", "preventDefault()")}} pour annuler l'évènement, l'empêchant de remonter pour être traité par le code de journalisation de l'environnement d'exécution. Cela fonctionne parce que `unhandledrejection` est annulable.

```js
window.addEventListener("unhandledrejection", (event) => {
  // code pour gérer la promesse rompue non gérée
  // …

  // Empêche la gestion par défaut (comme l'affichage de
  // l'erreur dans la console)

  event.preventDefault();
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les évènements liés à la rupture d'une promesse](/fr/docs/Web/JavaScript/Guide/Using_promises#évènements_liés_à_la_rupture_dune_promesse)
- L'évènement {{DOMxRef("Window/rejectionhandled_event", "rejectionhandled")}}
- L'objet natif {{JSxRef("Promise")}}
