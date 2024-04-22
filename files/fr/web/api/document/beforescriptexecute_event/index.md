---
title: Document.onbeforescriptexecute
slug: Web/API/Document/beforescriptexecute_event
---

{{ApiRef("DOM")}} {{non-standard_header }}

## Résumé

Lancé lorsque le code dans un élément {{HTMLElement("script")}} déclaré dans un document HTML est sur le point de s'exécuter. N'est pas déclenché si l'élément est ajouté dynamiquement, par exemple avec appendChild().

## Syntaxe

```js
document.onbeforescriptexecute = funcRef;
```

_funcRef_ est une référence de fonction appelée lorsque l'évènement est lancé. L'attribut de la `target` (_cible_) d'évènement est défini dans l'{{domxref("Element")}} script qui est sur le point d'être exécuté.

## Exemple

```js
function starting(e) {
  logMessage("Starting script with ID: " + e.target.id);
}

document.addEventListener("beforescriptexecute", starting, true);
```

[Voir l'exemple sur une page](/samples/html/currentScript.html)

## Spécification

- [HTML5](http://www.whatwg.org/specs/web-apps/current-work/#the-script-element)

## Voir aussi

- {{domxref("Document.onafterscriptexecute")}}
- {{domxref("Document.currentScript")}}
