---
title: "Document : évènement afterscriptexecute"
short-title: afterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

L'évènement `afterscriptexecute` de l'interface {{DOMxRef("Document")}} est déclenché lorsqu'un élément HTML {{HTMLElement("script")}} statique termine l'exécution de son script. Il n'est pas déclenché si l'élément est ajouté dynamiquement, par exemple avec la méthode {{DOMxRef("Node.appendChild()", "appendChild()")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("afterscriptexecute", (event) => { })

onafterscriptexecute = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemple

```js
function finished(e) {
  logMessage(`Script terminé avec l'ID : ${e.target.id}`);
}

document.addEventListener("afterscriptexecute", finished);
// or
document.onafterscriptexecute = finished;
```

[Voir l'exemple en direct <sup>(angl.)</sup>](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spécification

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Document.beforescriptexecute_event", "beforescriptexecute")}} de `Document`
- La propriété {{DOMxRef("Document.currentScript")}}
