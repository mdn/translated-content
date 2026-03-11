---
title: "Document : propriété implementation"
short-title: implementation
slug: Web/API/Document/implementation
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

La propriété **`implementation`** de l'interface {{DOMxRef("Document")}} retourne un objet {{DOMxRef("DOMImplementation")}} associé au document courant.

## Valeur

Un objet {{DOMxRef("DOMImplementation")}}.

## Exemple

```js
const modName = "HTML";
const modVer = "2.0";
const conformTest = document.implementation.hasFeature(modName, modVer);

alert("DOM " + modName + " " + modVer + " supporté ? : " + conformTest);

// Affiche : "DOM HTML 2.0 supporté ? : true" (hasFeature retourne toujours true)
```

> [!WARNING]
> Ne pas utiliser ceci pour la détection de fonctionnalités. La méthode `hasFeature()` retourne toujours vrai.

## Notes

La recommandation DOM niveau 1 du W3C ne définissait que la méthode `hasFeature`, qui est un moyen de déterminer si un module DOM est supporté par un navigateur (voir l'exemple ci-dessus et [Que prétend supporter votre agent utilisateur&nbsp;? <sup>(angl.)</sup>](https://www.w3.org/2003/02/06-dom-support.html)). Si disponibles, d'autres méthodes `DOMImplementation` fournissent des services pour contrôler des choses en dehors d'un document unique. Par exemple, l'interface `DOMImplementation` inclut une méthode `createDocumentType` avec laquelle des DTD peuvent être créées pour un ou plusieurs documents gérés par l'implémentation.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
