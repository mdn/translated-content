---
title: Document.createTreeWalker()
slug: Web/API/Document/createTreeWalker
---

{{ApiRef("Document")}}

La méthode de création **`Document.createTreeWalker()`** renvoie un nouvel objet {{domxref("TreeWalker")}}.

## Syntaxe

```js
treeWalker = document.createTreeWalker(root, whatToShow, filter);
```

### Paramètres

- _root_
  - : est le {{domxref("Node")}} (_nœud_) racine du {{domxref("TreeWalker")}} à traverser. Généralement, ce sera un
    élément appartenant au document.
- _whatToShow {{optional_inline}}_
  - : est un `unsigned long` (_long non signé_) facultatif représentant un masque de bits créé par combinaison des
    propriétés de constante de
    [`NodeFilter`](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter). C'est un moyen
    pratique de filtrage pour certains types de nœuds. Par défaut `0xFFFFFFFF` représentant la constante `SHOW_ALL`.

| Constante                                                | Valeur numérique | Description                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NodeFilter.SHOW_ALL`                                    | `0xFFFFFFFF`     | Affiche tous les nœuds.                                                                                                                                                                                                                                                                                                                                                                                                |
| `NodeFilter.SHOW_ATTRIBUTE`                              | `0x2`            | Affiche les nœuds {{domxref("Attr")}}. N'a de sens que lors de la création d'un {{domxref("TreeWalker")}} avec un nœud {{domxref("Attr")}} comme racine ; dans ce cas, cela signifie que le nœud d'attribut apparaîtra dans la première position de l'itération ou de la traversée. Comme les attributs ne sont jamais des enfants d'autres nœuds, ils n'apparaissent pas lors de la traversée de l'arbre du document. |
| `NodeFilter.SHOW_CDATA_SECTION`                          | `0x8`            | Affiche les nœuds {{domxref("CDATASection")}}.                                                                                                                                                                                                                                                                                                                                                                         |
| `NodeFilter.SHOW_COMMENT`                                | `0x80`           | Affiche les nœuds {{domxref("Comment")}}.                                                                                                                                                                                                                                                                                                                                                                              |
| `NodeFilter.SHOW_DOCUMENT`                               | `0x100`          | Affiche les nœuds {{domxref("Document")}}.                                                                                                                                                                                                                                                                                                                                                                             |
| `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `0x400`          | Affiche les nœuds {{domxref("DocumentFragment")}}.                                                                                                                                                                                                                                                                                                                                                                     |
| `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `0x200`          | Affiche les nœuds {{domxref("DocumentType")}}.                                                                                                                                                                                                                                                                                                                                                                         |
| `NodeFilter.SHOW_ELEMENT`                                | `0x1`            | Affiche les nœuds {{domxref("Element")}}.                                                                                                                                                                                                                                                                                                                                                                              |
| `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `0x20`           | Ancien, n'est plus effectif.                                                                                                                                                                                                                                                                                                                                                                                           |
| `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `0x10`           | Ancien, n'est plus effectif.                                                                                                                                                                                                                                                                                                                                                                                           |
| `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `0x800`          | Ancien, n'est plus effectif.                                                                                                                                                                                                                                                                                                                                                                                           |
| `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `0x40`           | Affiche les nœuds {{domxref("ProcessingInstruction")}}.                                                                                                                                                                                                                                                                                                                                                                |
| `NodeFilter.SHOW_TEXT`                                   | `0x4`            | Affiche les nœuds {{domxref("Text")}}.                                                                                                                                                                                                                                                                                                                                                                                 |

- `filter` {{optional_inline}}
  - : est un {{domxref("NodeFilter")}} (_filtre de nœud_) facultatif, c'est-à-dire un objet avec une méthode
    `acceptNode` appelé par {{domxref("TreeWalker")}} pour déterminer s'il doit accepter ou non un nœud qui a passé le
    test `whatToShow`.
- `entityReferenceExpansion` {{optional_inline}} {{deprecated_inline}}a
  - : **ancien paramètre à ne plus utiliser !** Était un {{domxref("Boolean")}} (_booléen_) indiquant si, lors de la
    suppression d'une {{domxref("EntityReference")}}, son sous-arbre doit être supprimé en même temps.

### Return value

A new {{domxref("TreeWalker")}} object.

## Exemples

### Utiliser `whatToShow`

Cet exemple utilise `whatToShow` pour transformer les contenus textuels en majuscules. Notez que les nœuds textuels des
descendants de l'élément `#root` sont également parcourus malgré le fait qu'ils ne soient pas des nœuds enfants de
l'élément `#root`.

#### HTML

```html
<div id="root">
  This is a text node.
  <span>And this is a <code>span</code> element.</span>
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

#### Result

{{EmbedLiveSample("using_whattoshow", "100%", 100)}}

### Utiliser un filtre

Cet exemple utilise un filtre pour échapper les contenus textuels. Pour tout nœud textuel, son contenu sera échappé en
utilisant {{JSXref("encodeURI()")}} s'il est un descendant d'un élément `.escape` mais pas d'un élément `.no-escape`.

#### HTML

```html
<div>
  <div>
    This is not escaped. <span class="escape">But this is escaped.</span>
  </div>
  <div class="escape">This is escaped.</div>
  <div class="no-escape">This is not escaped.</div>
</div>
<hr />
<div class="escape">
  <div>
    This is escaped. <span class="no-escape">But this is not escaped.</span>
  </div>
  <div class="no-escape">This is not escaped.</div>
</div>
<hr />
<div class="no-escape">
  <div>This is not escaped.</div>
  <div class="escape">This is not escaped.</div>
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
  (node) => node.classList.contains("no-escape")
      ? NodeFilter.FILTER_REJECT
      : node.closest(".escape")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP,
);

while (treeWalker.nextNode()) {
  for (const node of treeWalker.currentNode.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.data)) {
      // Exclude whitespace-only text nodes
      node.data = encodeURI(node.data.replace(/\s+/g, " "));
    }
  }
}
```

#### Result

{{EmbedLiveSample("using_filter", "100%", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface de l'objet qu'il crée : {{domxref("TreeWalker")}}.
