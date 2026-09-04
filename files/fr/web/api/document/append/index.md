---
title: "Document : méthode append()"
short-title: append()
slug: Web/API/Document/append
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

La méthode **`append()`** de l'interface {{DOMxRef("Document")}} insère un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères après le dernier enfant du document. Les chaînes de caractères sont insérées en tant que nœuds {{DOMxRef("Text")}} équivalents.

Cette méthode ajoute un enfant à un `Document`. Pour ajouter à un élément arbitraire dans l'arborescence, voir {{DOMxRef("Element.append()")}}.

## Syntaxe

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### Paramètres

- `param1`, …, `paramN`
  - : Un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères à insérer.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Levée lorsque le nœud ne peut pas être inséré au point défini dans la hiérarchie.

## Exemples

### Ajouter un élément racine à un document

Si vous essayez d'ajouter un élément à un document HTML existant, cela peut provoquer une erreur de type `HierarchyRequestError` de {{DOMxRef("DOMException")}} étant donné qu'un élément {{HTMLElement("html")}} existe déjà.

```js
let html = document.createElement("html");
document.append(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

Si vous créez un nouveau document sans aucun élément existant, vous pouvez ajouter un élément HTML racine (ou un élément SVG racine)&nbsp;:

```js
let doc = new Document();
let html = document.createElement("html");
doc.append(html);

doc.children; // HTMLCollection [<html>]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.prepend()")}}
- La méthode {{DOMxRef("Element.append()")}}
