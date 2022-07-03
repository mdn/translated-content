---
title: TreeWalker
slug: Web/API/TreeWalker
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Noeuds
translation_of: Web/API/TreeWalker
---
{{ APIRef("DOM") }}

L'objet **`TreeWalker`** représente les noeuds d'un sous-arbre de document et une position à l'intérieur.

Un `TreeWalker` peut être créé en utilisant la méthode {{domxref("Document.createTreeWalker()")}}.

## Propriétés

_Cette interface n'hérite d'aucune propriété._

- {{domxref("TreeWalker.root")}} {{readonlyInline}}
  - : Renvoie un {{domxref("Node")}} (_noeud_) représentant le noeud racine comme spécifié lors de la création du `TreeWalker`.
- {{domxref("TreeWalker.whatToShow")}} {{readonlyInline}}

  - : Renvoie un `unsigned long` (_long non signé_), celui-ci étant un masque constitué de constantes décrivant les types de {{domxref("Node")}} qui doivent être présentés. Les noeuds ne correspondants pas sont ignorés, mais leurs enfants peuvent être inclus, le cas échéant. Les valeurs possibles sont :

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

- {{domxref("TreeWalker.filter")}} {{readonlyInline}}
  - : Renvoie un {{domxref("NodeFilter")}} utilisé pour sélectionner les noeuds pertinents.
- {{domxref("TreeWalker.expandEntityReferences")}} {{readonlyInline}}{{deprecated_inline}}
  - : est un {{domxref("Boolean")}} (_booléen_) indiquant si, lors de la suppression d'une {{domxref("EntityReference")}}, tout son sous-arbre doit être supprimé en même temps.
- {{domxref("TreeWalker.currentNode")}}
  - : est le {{domxref("Node")}} sur lequel le `TreeWalker` pointe actuellement.

## Méthodes

_Cette interface n'hérite d'aucune méthode._

> **Note :** Le TreeWalker considère uniquement les nœuds DOM visibles.

- {{domxref("TreeWalker.parentNode()")}}
  - : Déplace le {{domxref("Node")}} actuel vers le premier noeud ancêtre _visible_ dans l'ordre du document et renvoie le noeud trouvé. Il déplace également le noeud actuel vers celui-ci. Si aucun noeud n'existe ou s'il est antérieur au _noeud racine_ défini lors de la construction de l'objet, renvoie `null` et le noeud courant n'est pas modifié.
- {{domxref("TreeWalker.firstChild()")}}
  - : Déplace le {{domxref("Node")}} courant vers son premier enfant _visible_ et renvoie l'enfant trouvé. Il déplace également le noeud courant vers cet enfant. Si aucun enfant n'existe, renvoie `null` et le noeud courant n'est pas modifié.
- {{domxref("TreeWalker.lastChild()")}}
  - : Déplace le {{domxref("Node")}} courant vers son dernier enfant _visible_ et renvoie l'enfant trouvé. Il déplace également le noeud courant vers l'enfant. Si aucun enfant n'existe, renvoie `null` et le noeud courant n'est pas modifié.
- {{domxref("TreeWalker.previousSibling()")}}
  - : Déplace le {{domxref("Node")}} courant vers son frère précédent, le cas échéant, et renvoie le frère trouvé. Si aucun noeud frère n'existe, renvoie `null` et le noeud courant n'est pas modifié.
- {{domxref("TreeWalker.nextSibling()")}}
  - : Déplace le {{domxref("Node")}} courant vers son frère suivant, le cas échéant, et renvoie le frère trouvé. Si aucun noeud frère n'existe, renvoie `null` et le noeud courant n'est pas modifié.
- {{domxref("TreeWalker.previousNode()")}}
  - : Déplace le {{domxref("Node")}} courant vers le noeud _visible_ précédent dans l'ordre du document et renvoie le noeud trouvé. Il déplace également le noeud courant vers celui-ci. Si aucun noeud n'existe ou s'il est avant le _noeud racine_ défini lors de la construction de l'objet, renvoie `null` et le noeud courant n'est pas modifié.
- {{domxref("TreeWalker.nextNode()")}}
  - : Déplace le {{domxref("Node")}} courant vers le noeud _visible_ suivant dans l'ordre du document et renvoie le noeud trouvé. Il déplace également le noeud courant vers celui-ci. Si aucun noeud n'existe ou s'il est avant le _noeud racine_ défini lors de la construction de l'objet, renvoie `null` et le noeud courant n'est pas modifié.

## Spécifications

| Spécification                                                                                                            | Statut                                       | Commentaire                                           |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ----------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#treeWalker', 'TreeWalker')}}                                                 | {{Spec2('DOM WHATWG')}}             | Suppression de la propriété `expandEntityReferences`. |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker', 'TreeWalker')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                  |

## Compatibilité des navigateurs

{{Compat("api.TreeWalker")}}

## Voir aussi

- La méthode de création : {{domxref("Document.createTreeWalker()")}}.
- Interfaces connexes : {{domxref("NodeFilter")}}, {{domxref("NodeIterator")}}.
