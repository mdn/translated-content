---
title: "Document : méthode createTreeWalker()"
short-title: createTreeWalker()
slug: Web/API/Document/createTreeWalker
l10n:
  sourceCommit: 30ae43a0c98ab92f750fd571d7a3a8ee8b15b4c0
---

{{APIRef("Document")}}

La méthode **`createTreeWalker()`** de l'interface {{DOMxRef("Document")}} crée et retourne un nouvel objet {{DOMxRef("TreeWalker")}}.

## Syntaxe

```js-nolint
createTreeWalker(root)
createTreeWalker(root, whatToShow)
createTreeWalker(root, whatToShow, filter)
```

### Paramètres

- `root`
  - : Un nœud ({{DOMxRef("Node")}}) racine de l'objet `TreeWalker`, qui est la valeur initiale de {{DOMxRef("TreeWalker.currentNode")}}.

- `whatToShow` {{Optional_Inline}}
  - : Un `unsigned long` représentant un masque de bits créé par combinaison des propriétés de constante de [`NodeFilter` <sup>(angl.)</sup>](https://dom.spec.whatwg.org/#interface-nodefilter). C'est un moyen pratique de filtrer pour certains types de nœuds. Il est par défaut `0xFFFFFFFF`, représentant la constante `NodeFilter.SHOW_ALL`.

    | Constante                                                | Valeur numérique | Description                                             |
    | -------------------------------------------------------- | ---------------- | ------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | ` 0xFFFFFFFF`    | Affiche tous les nœuds.                                 |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | ` 0x2`           | Affiche les nœuds {{DOMxRef("Attr")}}.                  |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | ` 0x8`           | Affiche les nœuds {{DOMxRef("CDATASection")}}.          |
    | `NodeFilter.SHOW_COMMENT`                                | ` 0x80`          | Affiche les nœuds {{DOMxRef("Comment")}}.               |
    | `NodeFilter.SHOW_DOCUMENT`                               | ` 0x100`         | Affiche les nœuds {{DOMxRef("Document")}}.              |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | ` 0x400`         | Affiche les nœuds {{DOMxRef("DocumentFragment")}}.      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | ` 0x200`         | Affiche les nœuds {{DOMxRef("DocumentType")}}.          |
    | `NodeFilter.SHOW_ELEMENT`                                | ` 0x1`           | Affiche les nœuds {{DOMxRef("Element")}}.               |
    | `NodeFilter.SHOW_ENTITY` {{Deprecated_Inline}}           | `0x20`           | Héritage, qui n'est plus en vigueur.                    |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{Deprecated_Inline}} | ` 0x10`          | Héritage, qui n'est plus en vigueur.                    |
    | `NodeFilter.SHOW_NOTATION` {{Deprecated_Inline}}         | `0x800`          | Héritage, qui n'est plus en vigueur.                    |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | ` 0x40`          | Affiche les nœuds {{DOMxRef("ProcessingInstruction")}}. |
    | `NodeFilter.SHOW_TEXT`                                   | ` 0x4`           | Affiche les nœuds {{DOMxRef("Text")}}.                  |

    > [!NOTE]
    > La constante `NodeFilter.SHOW_ATTRIBUTE` n'est efficace que lorsque la racine est un nœud d'attribut. Étant donné que le parent de tout nœud `Attr` est toujours `null`, {{DOMxRef("TreeWalker.nextNode()")}} et {{DOMxRef("TreeWalker.previousNode()")}} ne retournent jamais un nœud `Attr`. Pour parcourir les nœuds `Attr`, utilisez plutôt {{DOMxRef("Element.attributes")}}.

- `filter` {{Optional_Inline}}
  - : Une fonction de rappel ou un objet avec une méthode `acceptNode()`, qui retourne `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT`, ou `NodeFilter.FILTER_SKIP`. La fonction ou la méthode sera appelée pour chaque nœud de la sous-arborescence basée sur `root` qui est accepté comme incluse par l'indicateur `whatToShow` pour déterminer s'il faut ou non l'inclure dans la liste des nœuds itérables&nbsp;:
    - Si la valeur retournée est `NodeFilter.FILTER_ACCEPT`, ce nœud est inclus.
    - Si la valeur retournée est `NodeFilter.FILTER_REJECT`, aucun nœud de la sous-arborescence basée sur ce nœud n'est inclus.
    - Si la valeur retournée est `NodeFilter.FILTER_SKIP`, ce nœud n'est pas inclus.

### Valeur de retour

Un nouvel objet {{DOMxRef("TreeWalker")}}.

## Exemples

### Utiliser `whatToShow`

Cet exemple utilise `whatToShow` pour transformer les contenus textuels en majuscules. Notez que les nœuds textuels des descendants de l'élément `#root` sont également parcourus malgré le fait qu'ils ne soient pas des nœuds enfants de l'élément `#root`.

#### HTML

```html
<div id="root">
  Ceci est un nœud textuel.
  <span>Et ceci est un élément <code>span</code>.</span>
</div>
```

#### CSS

```css
span {
  background-color: aqua;
}
```

#### JavaScript

```js
const treeWalker = document.createTreeWalker(
  document.querySelector("#root"),
  NodeFilter.SHOW_TEXT,
);

while (treeWalker.nextNode()) {
  const node = treeWalker.currentNode;
  node.data = node.data.toUpperCase();
}
```

#### Résultat

{{EmbedLiveSample("Utiliser `whatToShow`", "100%", 100)}}

### Utiliser `filter`

Cet exemple utilise `filter` pour échapper les contenus textuels. Pour tout nœud textuel, son contenu sera échappé en utilisant {{JSxRef("encodeURI()")}} s'il est un descendant d'un élément `.escape` mais pas d'un élément `.no-escape`.

#### HTML

```html
<div>
  <div>
    Ceci n'est pas échappé. <span class="escape">Mais ceci est échappé.</span>
  </div>
  <div class="escape">Ceci est échappé.</div>
  <div class="no-escape">Ceci n'est pas échappé.</div>
</div>
<hr />
<div class="escape">
  <div>
    Ceci est échappé.
    <span class="no-escape">Mais ceci n'est pas échappé.</span>
  </div>
  <div class="no-escape">Ceci n'est pas échappé.</div>
</div>
<hr />
<div class="no-escape">
  <div>Ceci n'est pas échappé.</div>
  <div class="escape">Ceci n'est pas échappé.</div>
</div>
```

#### CSS

```css hidden
div {
  margin: 0.25em 0;
  padding: 0.25em;
}
span {
  display: inline-block;
}
```

```css
.escape {
  border: dashed;
}
.no-escape {
  border: solid;
}
```

#### JavaScript

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  (node) =>
    node.classList.contains("no-escape")
      ? NodeFilter.FILTER_REJECT
      : node.closest(".escape")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP,
);

while (treeWalker.nextNode()) {
  for (const node of treeWalker.currentNode.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.data)) {
      // Exclure les nœuds textuels ne contenant que des espaces
      node.data = encodeURI(node.data.replace(/\s+/g, " "));
    }
  }
}
```

#### Résultat

{{EmbedLiveSample("Utiliser `filter`", "100%", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface associée&nbsp;: {{DOMxRef("TreeWalker")}}
