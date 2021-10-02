---
title: Document.createNodeIterator()
slug: Web/API/Document/createNodeIterator
tags:
  - API
  - DOM
  - Méthodes
translation_of: Web/API/Document/createNodeIterator
---
{{APIRef("DOM")}}

Renvoie un  nouvel objet [`NodeIterator`](/fr/docs/Web/API/NodeIterator).

## Syntaxe

```js
var nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

### Valeurs

- `root`
  - : Le noeud racine à partir duquel commencer la traversée de {{domxref("NodeIterator")}}.
- `whatToShow` {{ optional_inline() }}

  - : Est un `unsigned long` (_long non signé_) facultatif représentant un masque de bits créé par la combinaison des constantes de la propriété [`NodeFilter`](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter). C'est un moyen pratique de filtrage pour certains types de noeuds. Il est par défaut `0xFFFFFFFF` représentant la constante `SHOW_ALL`.

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

- `filter` {{ optional_inline() }}
  - : Un objet implémentant l'interface {{ domxref("NodeFilter") }} ; sa méthode `acceptNode()` sera appelée pour chaque nœud du sous-arbre basé à la racine qui est accepté comme inclus par l'indicateur whatToShow pour déterminer s'il faut ou non l'inclure dans la liste des nœuds iterables (une simple fonction de rappel peut également être utilisée à la place). La méthode devrait retourner l'un des `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT` ou `NodeFilter.FILTER_SKIP`. Voir l'{{anch("Exemple")}}.

> **Note :** Avant Gecko 12.0 {{geckoRelease("12.0")}}, cette méthode acceptait un quatrième paramètre facultatif (`entityReferenceExpansion`). Cela ne faisait pas partie de la spécification DOM4 et a donc été supprimé. Ce paramètre indiquait si les enfants des nœuds de référence d'entité étaient visibles ou non par l'itérateur. Puisque de tels noeuds n'ont jamais été créés dans les navigateurs, ce paramètre n'a eu aucun effet.

## Exemple

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    function(node) {
        return node.nodeName.toLowerCase() === 'p' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
);
var pars = [];
var currentNode;

while (currentNode = nodeIterator.nextNode()) {
  pars.push(currentNode);
}
```

### Compatibilité des navigateurs

Pris en charge dans FF 3.5+, Chrome 1+, Opera 9+, Safari 3+, IE9+, Edge

## Voir aussi

- [createNodeIterator sur MDN](/fr/docs/Web/API/Document/createNodeIterator)

## Spécifications

[DOM Level 2 Traversal : NodeIterator](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeIterator)
