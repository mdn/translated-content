---
title: "Document : méthode prepend()"
short-title: prepend()
slug: Web/API/Document/prepend
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{APIRef("DOM")}}

La méthode **`prepend()`** de l'interface {{DOMxRef("Document")}} insère un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères avant le premier enfant du document. Les chaînes de caractères sont insérées comme des nœuds {{DOMxRef("Text")}} équivalents.

Cette méthode ajoute un enfant au début d'un `Document`. Pour ajouter au début d'un élément quelconque dans l'arbre, voir {{DOMxRef("Element.prepend()")}}.

## Syntaxe

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
```

### Paramètres

- `param1`, …, `paramN`
  - : Un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères à insérer.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Levée lorsque le nœud ne peut pas être inséré à l'endroit spécifié dans la hiérarchie.

## Exemples

### Ajouter un élément racine à un document

Si vous essayez d'ajouter un élément au début d'un document HTML existant, cela peut lever une exception `HierarchyRequestError` de {{DOMxRef("DOMException")}} si un élément {{HTMLElement("html")}} existe déjà.

```js
let html = document.createElement("html");
document.prepend(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

Si vous créez un nouveau document sans aucun élément existant, vous pouvez ajouter un élément racine HTML (ou un élément racine SVG)&nbsp;:

```js
let doc = new Document();
let html = document.createElement("html");
doc.prepend(html);

doc.children; // HTMLCollection [<html>]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.append()")}}
- La méthode {{DOMxRef("Element.prepend()")}}
