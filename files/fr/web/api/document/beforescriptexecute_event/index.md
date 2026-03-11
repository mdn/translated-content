---
title: "Document : évènement beforescriptexecute"
short-title: beforescriptexecute
slug: Web/API/Document/beforescriptexecute_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

L'évènement `beforescriptexecute` de l'interface {{DOMxRef("Document")}} se déclenche lorsqu'un élément HTML {{HTMLElement("script")}} statique est sur le point de commencer à s'exécuter. Il ne se déclenche pas si l'élément est ajouté dynamiquement, par exemple avec {{DOMxRef("Node.appendChild()", "appendChild()")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("beforescriptexecute", (event) => { })

onbeforescriptexecute = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

```js
function starting(e) {
  logMessage("Démarrage du script avec l'ID : " + e.target.id);
}

document.addEventListener("beforescriptexecute", starting);
// ou
document.onbeforescriptexecute = starting;
```

[Voir l'exemple en direct <sup>(angl.)</sup>](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Document.afterscriptexecute_event", "afterscriptexecute")}} de `Document`
- La propriété {{DOMxRef("Document.currentScript")}}
