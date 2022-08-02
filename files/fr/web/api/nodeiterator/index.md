---
title: NodeIterator
slug: Web/API/NodeIterator
tags:
  - API
  - DOM
  - Itérateur
  - Noeuds
translation_of: Web/API/NodeIterator
---
{{APIRef("DOM")}}

L'interface **`NodeIterator`** représente un itérateur pour les membres d'une liste des nœuds dans un sous-arbre du DOM. Les nœuds seront renvoyés dans l'ordre du document.

Un `NodeIterator` peut être créé en utilisant la méthode {{domxref("Document.createNodeIterator()")}}, comme suit :

```js
var nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

## Propriétés

_L'interface n'hérite d'aucune propriété._

- {{domxref("NodeIterator.root")}} {{readonlyInline}}
  - : Renvoie un {{domxref("Node")}} (_noeud_) représentant le noeud racine comme spécifié lors de la création du `NodeIterator`.
- {{domxref("NodeIterator.whatToShow")}} {{readonlyInline}}

  - : Renvoie un `unsigned long` (_long non signé_), celui-ci étant un masque constitué de constantes décrivant les types de {{domxref("Node")}} (_noeud_) et devant être présenté. Les nœuds non correspondants sont ignorés, mais leurs enfants peuvent être inclus, le cas échéant. Les valeurs possibles sont :

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
          <td><code>NodeFilter.SHOW_ATTRIBUTE</code> {{deprecated_inline}}</td>
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
            <code>NodeFilter.SHOW_ENTITY_REFERENCE</code> {{deprecated_inline}}
          </td>
          <td><code>16</code></td>
          <td>Affiche les noeuds {{domxref("EntityReference")}}.</td>
        </tr>
        <tr>
          <td><code>NodeFilter.SHOW_NOTATION</code> {{deprecated_inline}}</td>
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

- {{domxref("NodeIterator.filter")}} {{readonlyInline}}
  - : Renvoie un {{domxref("NodeFilter")}} utilisé pour sélectionner les noeuds pertinents.
- {{domxref("NodeIterator.expandEntityReferences")}} {{readonlyInline}} {{deprecated_inline}}
  - : est un {{domxref("Boolean")}} (_booléen_) indiquant si, lors de la suppression d'une {{domxref("EntityReference")}}, tout son sous-arbre doit être supprimé en même temps.
- {{domxref("NodeIterator.referenceNode")}} {{readonlyInline}} {{experimental_inline() }}
  - : Renvoie le {{domxref("Node")}} (noeud) auquel l'itérateur est ancré.
- {{domxref("NodeIterator.pointerBeforeReferenceNode")}} {{readonlyInline}} {{ experimental_inline() }}
  - : Renvoie un {{domxref("Boolean")}} (_booléen_) qui indique si le {{domxref("NodeIterator")}} est ancré avant (`true` (_vrai_)) ou après (`false` (_faux_)) le noeud d'ancrage.

## Méthodes

_Cette interface n'hérite d'aucune méthode._

- {{domxref("NodeIterator.detach()")}} {{deprecated_inline}}
  - : Cette opération est une non opération. Elle ne fait rien. Auparavant, elle disait au moteur que le `NodeIterator` n'était plus utilisé, mais c'est maintenant inutile.
- {{domxref("NodeIterator.previousNode()")}}
  - : Renvoie le noeud {{domxref("Node")}} précédent dans le document ou `null` s'il n'y en a aucun.
- {{domxref("NodeIterator.nextNode()")}}
  - : Renvoie le noeud {{domxref("Node")}} suivant dans le document ou `null` s'il n'y en a aucun.

## Spécifications

| Spécification                                                                                                        | Statut                                       | Commentaire                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#nodeiterator', 'NodeIterator')}}                                     | {{Spec2('DOM WHATWG')}}             | Ajout des propriétés `referenceNode` et `pointerBeforeReferenceNode`. Suppression de la propriété `expandEntityReferences`. La méthode `detach()` a été modifiée pour être une non opération. Les méthodes `previousNode()` et `nextNode()` ne déclenchent plus d'exceptions. |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Iterator-overview', 'NodeIterator')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                                                                                                                                                                                                                          |

## Compatibilité des navigateurs

{{Compat("api.NodeIterator")}}

## Voir aussi

- La méthode de création : {{domxref("Document.createNodeIterator()")}}.
- Interfaces connexes : {{domxref("NodeFilter")}}, {{domxref("TreeWalker")}}.
