---
title: "Document : méthode replaceChildren()"
short-title: replaceChildren()
slug: Web/API/Document/replaceChildren
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

La méthode **`replaceChildren()`** de l'interface {{DOMxRef("Document")}} remplace les enfants existants d'un `Document` par un nouvel ensemble d'enfants défini.

## Syntaxe

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Paramètres

- `param1`, …, `paramN`
  - : Un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères pour remplacer les enfants existants du `Document`. Si aucun objet de remplacement n'est défini, le `Document` est vidé de tous ses nœuds enfants.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Levée si les [contraintes de l'arbre de nœuds <sup>(angl.)</sup>](https://dom.spec.whatwg.org/#concept-node-tree) sont violées.

## Exemples

### Vider un document

`replaceChildren()` offre un mécanisme très pratique pour vider un document de tous ses enfants. Vous l'appelez sur le document sans aucun argument&nbsp;:

```js
document.replaceChildren();
document.children; // HTMLCollection []
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.prepend()")}}
- La méthode {{DOMxRef("Document.append()")}}
