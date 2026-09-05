---
title: "HTMLTableElement : méthode createTFoot()"
short-title: createTFoot()
slug: Web/API/HTMLTableElement/createTFoot
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La méthode **`createTFoot()`** de l'interface {{DOMxRef("HTMLTableElement")}} crée un élément HTML {{HTMLElement("tfoot")}}, l'insère comme dernier enfant du tableau ({{HTMLElement("table")}}) donné, et le retourne. Si le tableau a déjà un enfant `<tfoot>`, cette méthode retourne le premier enfant de ce type sans en créer un nouveau.

Lorsque la création est nécessaire, cette méthode crée et insère l'élément directement, sans nécessiter d'appels séparés à des méthodes telles que {{DOMxRef("Document.createElement()")}} et {{DOMxRef("Node.appendChild()")}}.

## Syntaxe

```js-nolint
createTFoot()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("HTMLTableSectionElement")}} (qui est toujours un `tfoot`).

## Exemples

```js
const myFoot = myTable.createTFoot();
// Ceci doit maintenant être vrai : myFoot === myTable.tFoot
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTableElement.createCaption()")}}
- La méthode {{DOMxRef("HTMLTableElement.createTBody()")}}
- La méthode {{DOMxRef("HTMLTableElement.createTHead()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
