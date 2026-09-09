---
title: "HTMLTableElement : méthode createTHead()"
short-title: createTHead()
slug: Web/API/HTMLTableElement/createTHead
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La méthode **`createTHead()`** de l'interface {{DOMxRef("HTMLTableElement")}} crée un élément {{HTMLElement("thead")}}, l'insère avant le premier enfant élément du tableau ({{HTMLElement("table")}}) donné qui n'est ni un {{HTMLElement("caption")}} ni un {{HTMLElement("colgroup")}}, ou comme dernier enfant si aucun emplacement d'insertion approprié n'est trouvé, et le retourne. Si le tableau contient déjà un enfant `<thead>`, cette méthode retourne le premier enfant de ce type sans en créer un nouveau.

Lorsque la création est nécessaire, cette méthode crée et insère l'élément directement, sans nécessiter d'appels séparés à des méthodes telles que {{DOMxRef("Document.createElement()")}} et {{DOMxRef("Node.insertBefore()")}}.

## Syntaxe

```js-nolint
createTHead()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("HTMLTableSectionElement")}} (qui est toujours un `thead`).

## Exemples

```js
const myHead = myTable.createTHead();
// Ceci doit maintenant être vrai : myHead === myTable.tHead
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTableElement.createCaption()")}}
- La méthode {{DOMxRef("HTMLTableElement.createTBody()")}}
- La méthode {{DOMxRef("HTMLTableElement.createTFoot()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteTHead()")}}
