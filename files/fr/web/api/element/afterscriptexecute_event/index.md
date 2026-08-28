---
title: "Element : évènement afterscriptexecute"
short-title: afterscriptexecute
slug: Web/API/Element/afterscriptexecute_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef}}{{Non-standard_Header}}

> [!WARNING]
> Cet évènement était une proposition dans une première version de la spécification. Ne vous y fiez pas.

L'évènement **`afterscriptexecute`** est déclenché après l'exécution d'un script.

C'est un évènement propriétaire spécifique à Gecko (Firefox).

Cet évènement ne peut pas être annulé.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("afterscriptexecute", (event) => { })

onafterscriptexecute = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Element.beforescriptexecute_event", "beforescriptexecute")}}
