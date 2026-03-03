---
title: "HTMLTableElement : méthode createTHead()"
short-title: createTHead()
slug: Web/API/HTMLTableElement/createTHead
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

La méthode **`createTHead()`** de l'interface {{DOMxRef("HTMLTableElement")}} retourne l'élément HTML {{HTMLElement("thead")}} associé à un {{HTMLElement("table")}} donné. Si aucun en-tête n'existe dans le tableau, cette méthode le crée, puis le retourne.

> [!NOTE]
> Si aucun en-tête n'existe, `createTHead()` insère un nouvel en-tête directement dans le tableau. Il n'est pas nécessaire d'ajouter l'en-tête séparément comme cela serait le cas si {{DOMxRef("Document.createElement()")}} avait été utilisé pour créer le nouvel élément `<thead>`.

## Syntaxe

```js-nolint
createTHead()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("HTMLTableSectionElement")}}.

## Exemples

```js
let myHead = myTable.createTHead();
// Ceci doit maintenant être vrai : myHead === myTable.tHead
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
