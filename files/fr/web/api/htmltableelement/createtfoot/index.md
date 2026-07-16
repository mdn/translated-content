---
title: "HTMLTableElement : méthode createTFoot()"
short-title: createTFoot()
slug: Web/API/HTMLTableElement/createTFoot
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

La méthode **`createTFoot()`** de l'interface {{DOMxRef("HTMLTableElement")}} retourne l'élément HTML {{HTMLElement("tfoot")}} associé à un tableau ({{HTMLElement("table")}}) donné. Si aucun pied n'existe dans le tableau, cette méthode le crée, puis le retourne.

> [!NOTE]
> Si aucun pied n'existe, `createTFoot()` insère un nouveau pied directement dans le tableau. Il n'est pas nécessaire d'ajouter le pied séparément comme cela serait le cas si {{DOMxRef("Document.createElement()")}} avait été utilisé pour créer le nouvel élément `<tfoot>`.

## Syntaxe

```js-nolint
createTFoot()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("HTMLTableSectionElement")}}.

## Exemples

```js
let myFoot = myTable.createTFoot();
// Ceci doit maintenant être vrai : myFoot === myTable.tFoot
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
