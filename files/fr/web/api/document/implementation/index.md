---
title: document.implementation
slug: Web/API/Document/implementation
---

## Résumé

Retourne un objet {{domxref("DOMImplementation")}} associé avec le document courant.

## Syntaxe

```js
DOMImpObj = document.implementation;
```

## Exemple

```js
var modName = "HTML";
var modVer = "2.0";
var conformTest = document.implementation.hasFeature(modName, modVer);

alert("DOM " + modName + " " + modVer + " supported?: " + conformTest);

// alerte avec : "DOM HTML 2.0 pris en charge ?: true" si le module DOM niveau 2 HTML est pris en charge.
```

Une liste de noms de modules (par exemple, Core, HTML, XML, etc.) est disponible dans la [Conformance Section](http://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance-h2) DOM niveau 2.

## Notes

La recommandation DOM niveau 1 du W3C ne spécifiait que la méthode `hasFeature`, qui est un moyen de déterminer si un module DOM est supporté par un navigateur (voir l'exemple ci-dessus et ce que votre agent utilisateur prétend prendre en charge ?). Si disponibles, d'autres méthodes `DOMImplementation` fournissent des services pour contrôler des choses en dehors d'un document unique. Par exemple, l'interface `DOMImplementation` inclut une méthode `createDocumentType` avec laquelle des DTD peuvent être créées pour un ou plusieurs documents gérés par l'implémentation.

## Spécifications

- [DOM Level 2 Core: implementation](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490)
- [DOM Level 3 Core: implementation](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490)

## Notes propres à Gecko

- À partir de Gecko 19.0, la méthode {{domxref ("DOMImplementation.hasFeature", "hasFeature")}} retournera toujours true.
