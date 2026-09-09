---
title: "HTMLTableElement : méthode createTBody()"
short-title: createTBody()
slug: Web/API/HTMLTableElement/createTBody
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La méthode **`createTBody()`** des objets {{DOMxRef("HTMLTableElement")}} crée un élément {{HTMLElement("tbody")}}, l'insère immédiatement après le dernier élément {{HTMLElement("tbody")}} enfant du tableau ({{HTMLElement("table")}}) donné, ou comme dernier enfant s'il n'existe pas, et le retourne.

Cette méthode crée et insère l'élément directement, sans nécessiter d'appels séparés à des méthodes telles que {{DOMxRef("Document.createElement()")}}, {{DOMxRef("Node.insertBefore()")}}, et {{DOMxRef("Node.appendChild()")}}.

> [!NOTE]
> Contrairement à {{DOMxRef("HTMLTableElement.createTHead()")}} et {{DOMxRef("HTMLTableElement.createTFoot()")}}, `createTBody()` crée systématiquement un nouvel élément `<tbody>`, même si le tableau contient déjà un ou plusieurs corps.

## Syntaxe

```js-nolint
createTBody()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("HTMLTableSectionElement")}} (qui est toujours un `tbody`).

## Exemples

```js
const myBody = myTable.createTBody();
// Ceci doit maintenant être vrai : myBody === myTable.tBodies.item(myTable.tBodies.length - 1)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTableElement.createCaption()")}}
- La méthode {{DOMxRef("HTMLTableElement.createTFoot()")}}
- La méthode {{DOMxRef("HTMLTableElement.createTHead()")}}
