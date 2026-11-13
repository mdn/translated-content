---
title: "Document : méthode createNodeIterator()"
short-title: createNodeIterator()
slug: Web/API/Document/createNodeIterator
l10n:
  sourceCommit: 30ae43a0c98ab92f750fd571d7a3a8ee8b15b4c0
---

{{APIRef("DOM")}}

La méthode **`createNodeIterator()`** de l'interface {{DOMxRef("Document")}} retourne un nouvel objet {{DOMxRef("NodeIterator")}}.

## Syntaxe

```js-nolint
createNodeIterator(root)
createNodeIterator(root, whatToShow)
createNodeIterator(root, whatToShow, filter)
```

### Paramètres

- `root`
  - : Le nœud racine à partir duquel commencer le parcours du {{DOMxRef("NodeIterator")}}.

- `whatToShow` {{Optional_Inline}}
  - : Un `unsigned long` optionnel représentant un masque de bits créé en combinant les propriétés constantes de `NodeFilter`.
    C'est un moyen pratique de filtrer certains types de nœuds. Par défaut, il est défini sur
    `0xFFFFFFFF` représentant la constante `SHOW_ALL`.

    | Constante                                                | Valeur numérique | Description                                             |
    | -------------------------------------------------------- | ---------------- | ------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `0xFFFFFFFF`     | Affiche tous les nœuds.                                 |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | `0x2`            | Affiche les nœuds {{DOMxRef("Attr")}}.                  |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | `0x8`            | Affiche les nœuds {{DOMxRef("CDATASection")}}.          |
    | `NodeFilter.SHOW_COMMENT`                                | `0x80`           | Affiche les nœuds {{DOMxRef("Comment")}}.               |
    | `NodeFilter.SHOW_DOCUMENT`                               | `0x100`          | Affiche les nœuds {{DOMxRef("Document")}}.              |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `0x400`          | Affiche les nœuds {{DOMxRef("DocumentFragment")}}.      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `0x200`          | Affiche les nœuds {{DOMxRef("DocumentType")}}.          |
    | `NodeFilter.SHOW_ELEMENT`                                | `0x1`            | Affiche les nœuds {{DOMxRef("Element")}}.               |
    | `NodeFilter.SHOW_ENTITY` {{Deprecated_Inline}}           | `0x20`           | Héritage, plus efficace.                                |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{Deprecated_Inline}} | `0x10`           | Héritage, plus efficace.                                |
    | `NodeFilter.SHOW_NOTATION` {{Deprecated_Inline}}         | `0x800`          | Héritage, plus efficace.                                |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `0x40`           | Affiche les nœuds {{DOMxRef("ProcessingInstruction")}}. |
    | `NodeFilter.SHOW_TEXT`                                   | `0x4`            | Affiche les nœuds {{DOMxRef("Text")}}.                  |

    > [!NOTE]
    > La constante `NodeFilter.SHOW_ATTRIBUTE` n'est efficace que lorsque la racine est un nœud attribut. Comme le parent de tout nœud `Attr` est toujours `null`, {{DOMxRef("TreeWalker.nextNode()")}} et {{DOMxRef("TreeWalker.previousNode()")}} ne retourneront jamais un nœud `Attr`. Pour parcourir les nœuds `Attr`, utilisez {{DOMxRef("Element.attributes")}} à la place.

- `filter` {{Optional_Inline}}
  - : Une fonction de rappel ou un objet avec une méthode `acceptNode()`. La fonction ou la méthode sera appelée pour chaque nœud dans le sous-arbre basé sur la racine qui est accepté comme inclus par le drapeau `whatToShow` pour déterminer s'il faut l'inclure ou non dans la liste des nœuds itérables. La méthode doit renvoyer l'une des valeurs `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT` ou `NodeFilter.FILTER_SKIP`. Voir [l'exemple](#exemples).

    Pour `createNodeIterator`, les valeurs `NodeFilter.FILTER_REJECT` et `NodeFilter.FILTER_SKIP` sont équivalentes. Ce nœud ne sera pas inclus dans la liste des nœuds itérables, mais ses enfants continueront à être parcourus.

### Valeur de retour

Un nouvel objet {{DOMxRef("NodeIterator")}}.

## Exemples

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  (node) =>
    node.nodeName.toLowerCase() === "p"
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_REJECT,
);
const pars = [];
let currentNode;

while ((currentNode = nodeIterator.nextNode())) {
  pars.push(currentNode);
}
```

Le même exemple, mais en utilisant un objet avec une méthode `acceptNode()`&nbsp;:

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return node.nodeName.toLowerCase() === "p"
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  },
);
const pars = [];
let currentNode;

while ((currentNode = nodeIterator.nextNode())) {
  pars.push(currentNode);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
