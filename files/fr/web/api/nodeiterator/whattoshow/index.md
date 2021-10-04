---
title: NodeIterator.whatToShow
slug: Web/API/NodeIterator/whatToShow
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Noeuds
  - Propriétés
translation_of: Web/API/NodeIterator/whatToShow
---
{{APIRef("DOM")}}

La propriété en lecture seule **`NodeIterator.whatToShow`** est un `unsigned integer` (_entier non signé_) représentant un masque de bits désignant le type de noeuds qui doit être renvoyé par le {{domxref("NodeIterator")}}.

## Syntaxe

    var nodeTypes = nodeIterator.whatToShow;

Les valeurs pouvant être combinées pour former le masque de bits sont :

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Constante</td>
      <td class="header">Valeur numérique</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_ALL</code></td>
      <td>
        <code>-1</code> (c'est la valeur numérique maximale du
        <code>unsigned long</code> (<em>non signé long</em>))
      </td>
      <td>Affiche tous les noeuds.</td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_ATTRIBUTE</code> {{deprecated_inline}}
      </td>
      <td><code>2</code></td>
      <td>
        Affiche l'attribut {{domxref("Attr")}} des noeuds. Cela n'a de sens
        que lors de la création d'un {{domxref("TreeWalker")}} avec un
        noeud {{domxref("Attr")}} comme racine ; dans ce cas, cela signifie
        que le nœud d'attribut apparaîtra dans la première position de
        l'itération ou de la traversée. Comme les attributs ne sont jamais des
        enfants d'autres nœuds, ils n'apparaissent pas lors de la traversée de
        l'arbre du document.
      </td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_CDATA_SECTION</code> {{deprecated_inline}}
      </td>
      <td><code>8</code></td>
      <td>Affiche les noeuds {{domxref("CDATASection")}}.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_COMMENT</code></td>
      <td><code>128</code></td>
      <td>Affiche les noeuds {{domxref("Comment")}}.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT</code></td>
      <td><code>256</code></td>
      <td>Affiche les noeuds {{domxref("Document")}}.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT_FRAGMENT</code></td>
      <td><code>1024</code></td>
      <td>Affiche les noeuds {{domxref("DocumentFragment")}}.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT_TYPE</code></td>
      <td><code>512</code></td>
      <td>Affiche les noeuds {{domxref("DocumentType")}}.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_ELEMENT</code></td>
      <td><code>1</code></td>
      <td>Affiche les noeuds {{domxref("Element")}}.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_ENTITY</code> {{deprecated_inline}}</td>
      <td><code>32</code></td>
      <td>
        Affiche les noeuds {{domxref("Entity")}}. Cela n'a de sens que
        lors de la création d'un {{domxref("TreeWalker")}} avec un noeud
        {{ domxref("Entity") }} comme racine ; dans ce cas, il signifie
        que le noeud d'entité {{domxref("Entity") }} apparaîtra à la
        première position de la traversée. Étant donné que les entités ne font
        pas partie de l'arborescence du document, elles n'apparaissent pas lors
        de la traversée de l'arborescence du document.
      </td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_ENTITY_REFERENCE</code>
        {{deprecated_inline}}
      </td>
      <td><code>16</code></td>
      <td>Affiche les noeuds {{domxref("EntityReference")}}.</td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_NOTATION</code> {{deprecated_inline}}
      </td>
      <td><code>2048</code></td>
      <td>
        Affiche les noeuds {{domxref("Notation")}}. Cela n'a de sens
        que lors de la création d'un {{domxref("TreeWalker")}} avec un
        noeud {{domxref("Notation")}} comme racine ; dans ce cas, il
        signifie que le noeud {{domxref("Notation")}} apparaîtra à la
        première position de la traversée. Étant donné que les entités ne font
        pas partie de l'arborescence du document, elles n'apparaissent pas lors
        de la traversée de l'arborescence du document.
      </td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_PROCESSING_INSTRUCTION</code></td>
      <td><code>64</code></td>
      <td>
        Affiche les noeuds {{domxref("ProcessingInstruction")}}.
      </td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_TEXT</code></td>
      <td><code>4</code></td>
      <td>Affiche les noeuds {{domxref("Text")}}.</td>
    </tr>
  </tbody>
</table>

## Exemple

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_COMMENT + NodeFilter.SHOW_TEXT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
if( (nodeIterator.whatToShow == NodeFilter.SHOW_ALL) ||
    (nodeIterator.whatToShow % (NodeFilter.SHOW_COMMENT*2)) >= NodeFilter.SHOW_COMMENT) {
    // nodeIterator affichera les commentaires
}
```

## Spécifications

| Spécification                                                                                                                                            | Statut                                       | Commentaire                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-nodeiterator-whattoshow', 'NodeIterator.whatToShow')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement depuis {{SpecName('DOM2 Traversal_Range')}}. |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-NodeIterator-whatToShow', 'NodeIterator.whatToShow')}} | {{Spec2('DOM2 Traversal_Range')}} | Définitioni initiale.                                                      |

## Compatibilité des navigateurs

{{Compat("api.NodeIterator.whatToShow")}}

## Voir aussi

- L'interface à laquelle cette propriété appartient : {{domxref("NodeIterator")}}.
