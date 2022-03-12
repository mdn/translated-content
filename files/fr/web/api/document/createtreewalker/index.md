---
title: Document.createTreeWalker()
slug: Web/API/Document/createTreeWalker
tags:
  - API
  - Arborescence
  - DOM
  - Document
  - Filtre
  - Méthodes
  - Noeuds
translation_of: Web/API/Document/createTreeWalker
---
{{ApiRef("Document")}}

La méthode de création **`Document.createTreeWalker()`** renvoie un nouvel objet {{domxref("TreeWalker")}}.

## Syntaxe

    treeWalker = document.createTreeWalker(root, whatToShow, filter, entityReferenceExpansion);

### Paramètres

- _root_
  - : est le {{domxref("Node")}} (_noeud_) racine du {{domxref("TreeWalker")}} à traverser. Généralement, ce sera un élément appartenant au document.
- _whatToShow {{optional_inline}}_

  - : est un `unsigned long` (_long non signé_) facultatif représentant un masque de bits créé par combinaison des propriétés de constante de [`NodeFilter`](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter). C'est un moyen pratique de filtrage pour certains types de nœuds. Par défaut `0xFFFFFFFF` représentant la constante `SHOW_ALL`.

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

- `filter` {{optional_inline}}
  - : est un {{domxref("NodeFilter")}} (_filtre de noeud_) facultatif, c'est à dire un objet avec une méthode `acceptNode` appelé par {{domxref("TreeWalker")}} pour déterminer s'il doit accepter ou non un nœud qui a passé le test `whatToShow`.
- `entityReferenceExpansion` {{optional_inline}} {{deprecated_inline}}
  - : est un {{domxref("Boolean")}} (_booléen_) indiquant si, lors de la suppression d'une {{domxref("EntityReference")}}, son sous-arbre doit être supprimé en même temps.

## Exemple

L'exemple suivant passe à travers tous les noeuds du "body" (_corps du document_), réduit l'ensemble des noeuds aux éléments, passe simplement à travers chaque noeud acceptable (à la place, il pourrait réduire l'ensemble dans la méthode `acceptNode()`), puis utilise l'itérateur de traversée de l'arbre créé pour avancer à travers les nœuds (maintenant tous les éléments) et les écrire dans un tableau.

```js
var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
  false
);

var nodeList = [];

while(treeWalker.nextNode()) nodeList.push(treeWalker.currentNode);
```

## Spécifications

| Spécification                                                                                                                                                    | Statut                                       | Commentaire                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-document-createtreewalker', 'Document.createTreeWalker')}}                                         | {{Spec2('DOM WHATWG')}}             | Suppression du paramètre `expandEntityReferences`. Les paramètres facultatifs  `whatToShow` et `filter` . |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#NodeIteratorFactory-createTreeWalker', 'Document.createTreeWalker')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                                                      |

## Compatibilité des navigateurs

{{Compat("api.Document.createTreeWalker")}}

## Voir aussi

- L'interface de l'objet qu'il crée : {{domxref("TreeWalker")}}.
