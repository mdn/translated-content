---
title: Document.createTreeWalker()
slug: Web/API/Document/createTreeWalker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ApiRef("Document")}}

La méthode de création **`Document.createTreeWalker()`** renvoie un nouvel objet {{domxref("TreeWalker")}}.

## Syntaxe

```js-nolint
createTreeWalker(root)
createTreeWalker(root, whatToShow)
createTreeWalker(root, whatToShow, filter)
```

### Paramètres

- `root`
  - : Un {{domxref("Node")}} (_noeud_) racine de l'objet `TreeWalker`, qui est la valeur initiale de {{domxref("TreeWalker.currentNode")}}.

- `whatToShow` {{optional_inline}}
  - : Un `unsigned long` représentant un masque de bits créé par combinaison des propriétés de constante de [`NodeFilter`](https://dom.spec.whatwg.org/#interface-nodefilter). C'est un moyen pratique de filtrer pour certains types de noeuds. Il est par défaut `0xFFFFFFFF`, représentant la constante `NodeFilter.SHOW_ALL`.

    | Constante                                                | Valeur numérique | Description                                              |
    | -------------------------------------------------------- | ---------------- | -------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | ` 0xFFFFFFFF`    | Affiche tous les noeuds.                                 |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | ` 0x2`           | Affiche les noeuds {{domxref("Attr")}}.                  |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | ` 0x8`           | Affiche les noeuds {{domxref("CDATASection")}}.          |
    | `NodeFilter.SHOW_COMMENT`                                | ` 0x80`          | Affiche les noeuds {{domxref("Comment")}}.               |
    | `NodeFilter.SHOW_DOCUMENT`                               | ` 0x100`         | Affiche les noeuds {{domxref("Document")}}.              |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | ` 0x400`         | Affiche les noeuds {{domxref("DocumentFragment")}}.      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | ` 0x200`         | Affiche les noeuds {{domxref("DocumentType")}}.          |
    | `NodeFilter.SHOW_ELEMENT`                                | ` 0x1`           | Affiche les noeuds {{domxref("Element")}}.               |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `0x20`           | Héritage, qui n'est plus en vigueur.                     |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | ` 0x10`          | Héritage, qui n'est plus en vigueur.                     |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `0x800`          | Héritage, qui n'est plus en vigueur.                     |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | ` 0x40`          | Affiche les noeuds {{domxref("ProcessingInstruction")}}. |
    | `NodeFilter.SHOW_TEXT`                                   | ` 0x4`           | Affiche les noeuds {{domxref("Text")}}.                  |

    > [!NOTE]
    > Étant donné que le parent de tout noeud `Attr` est toujours `null`, {{DOMXref("TreeWalker.nextNode()")}} et {{DOMXref("TreeWalker.previousNode()")}} ne renverront jamais un noeud `Attr`. Pour parcourir les noeuds `Attr`, utilisez plutôt {{DOMXref("Element.attributes")}}.

- `filter` {{optional_inline}}
  - : Une fonction de rappel ou un objet avec une méthode `acceptNode()`, qui retourne `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT`, ou `NodeFilter.FILTER_SKIP`. La fonction ou la méthode sera appelée pour chaque noeud de la sous-arborescence basée sur `root` qui est accepté comme incluse par l'indicateur `whatToShow` pour déterminer s'il faut ou non l'inclure dans la liste des noeuds itérables&nbsp;:
    - Si la valeur retournée est `NodeFilter.FILTER_ACCEPT`, ce noeud est inclus.
    - Si la valeur retournée est `NodeFilter.FILTER_REJECT`, aucun noeud de la sous-arborescence basée sur ce noeud n'est inclus.
    - Si la valeur retournée est `NodeFilter.FILTER_SKIP`, ce noeud n'est pas inclus.

### Valeur de retour

Un nouvel objet {{domxref("TreeWalker")}}.

## Exemples

### Utiliser `whatToShow`

Cet exemple utilise `whatToShow` pour transformer les contenus textuels en majuscules. Notez que les noeuds textuels des descendants de l'élément `#root` sont également parcourus malgré le fait qu'ils ne soient pas des noeuds enfants de l'élément `#root`.

#### HTML

```html
<div id="root">
  Ceci est un noeud textuel.
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

{{EmbedLiveSample("utiliser_whattoshow", "100%", 100)}}

### Utilisation du filtre

Cet exemple utilise un filtre pour échapper les contenus textuels. Pour tout noeud textuel, son contenu sera échappé en utilisant {{JSXref("encodeURI()")}} s'il est un descendant d'un élément `.escape` mais pas d'un élément `.no-escape`.

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
      // Exclure les noeuds textuels ne contenant que des espaces
      node.data = encodeURI(node.data.replace(/\s+/g, " "));
    }
  }
}
```

#### Résultat

{{EmbedLiveSample("utilisation_du_filtre", "100%", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface de l'objet qu'il crée&nbsp;: {{domxref("TreeWalker")}}.
