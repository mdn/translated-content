---
title: Document.onafterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
---

{{ ApiRef("DOM") }} {{non-standard_header}}

## Résumé

Lancé lorsqu'un élément {{HTMLElement("script")}} statique achève l'exécution de son script. N'est pas lancé si l'élément est ajouté dynamiquement, par exemple avec appendChild().

## Syntaxe

```js
document.onafterscriptexecute = funcRef;
```

_funcRef_ est une référence de fonction appelée lorsqu'un évènement est lancé. L'attribut de la `target` (cible) d'évènement est défini sur l'{{domxref("Element")}} script dont l'exécution vient de s'achever.

## Exemple

```js
function finished(e) {
  logMessage("Finished script with ID: " + e.target.id);
}

document.addEventListener("afterscriptexecute", finished, true);
```

[Voir l'exemple sur une page](/samples/html/currentScript.html)

## Spécification

- [HTML5](http://www.whatwg.org/specs/web-apps/current-work/#the-script-element)

## Voir aussi

- {{domxref("Document.onbeforescriptexecute")}}
- {{domxref("Document.currentScript")}}
