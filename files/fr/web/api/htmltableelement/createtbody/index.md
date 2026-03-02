---
title: "HTMLTableElement : méthode createTBody()"
short-title: createTBody()
slug: Web/API/HTMLTableElement/createTBody
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

La méthode **`createTBody()`** des objets {{DOMxRef("HTMLTableElement")}} crée et retourne un nouvel élément {{HTMLElement("tbody")}} associé à un tableau ({{HTMLElement("table")}}) donné.

> [!NOTE]
> Contrairement à {{DOMxRef("HTMLTableElement.createTHead()")}} et {{DOMxRef("HTMLTableElement.createTFoot()")}}, `createTBody()` crée systématiquement un nouvel élément `<tbody>`, même si le tableau contient déjà un ou plusieurs corps. Dans ce cas, le nouveau est inséré après les existants.

## Syntaxe

```js-nolint
createTBody()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("HTMLTableSectionElement")}}.

## Exemples

```js
let myBody = myTable.createTBody();
// Ceci doit maintenant être vrai : myBody === myTable.tBodies.item(myTable.tBodies.length - 1)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
