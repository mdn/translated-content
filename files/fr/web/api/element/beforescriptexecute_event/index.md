---
title: "Element : évènement beforescriptexecute"
short-title: beforescriptexecute
slug: Web/API/Element/beforescriptexecute_event
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{APIRef("DOM")}}{{Non-standard_Header}}

> [!WARNING]
> Cet évènement était une proposition dans une première version de la spécification. Ne vous y fiez pas.

L'évènement **`beforescriptexecute`** est déclenché lorsqu'un script est sur le point d'être exécuté. Annuler l'évènement empêche l'exécution du script.

C'est un évènement propriétaire spécifique à Gecko (Firefox).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("beforescriptexecute", (event) => { })

onbeforescriptexecute = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`afterscriptexecute`](/fr/docs/Web/API/Element/afterscriptexecute_event)
