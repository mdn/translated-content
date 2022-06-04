---
title: NodeFilter
slug: >-
  conflicting/Web/API/Document/createNodeIterator_313cb22e529a804ace2f1dbb1e813ada
tags:
  - API
  - Arborescence
  - DOM
  - Filtres
  - Interface
  - Itérateurs
  - Noeuds
translation_of: Web/API/NodeFilter
original_slug: Web/API/NodeFilter
---
{{APIRef("DOM")}}

Une interface **`NodeFilter`** représente un objet utilisé pour filtrer les noeuds dans un {{ domxref("NodeIterator") }} ou {{ domxref("TreeWalker") }}. Ils ne savent rien du DOM ni comment traverser les nœuds ; ils savent juste comment évaluer un seul noeud par rapport au filtre fourni.

> **Note :** Le navigateur ne fournit aucun objet implémentant cette interface. C'est l'utilisateur qui doit en écrire un, en adaptant la méthode `acceptNode()` en fonction des besoins et en l'utilisant avec un objet {{domxref("TreeWalker")}} ou {{domxref("NodeIterator")}}.

## Propriétés

_Cette interface n'implémente ni n'hérite d'aucune propriété._

## Méthodes

_Cette interface n'hérite d'aucune méthode._

- {{domxref("NodeFilter.acceptNode()")}}

  - : Renvoie un `unsigned short` (_non signé court_) qui sera utilisé pour dire si un {{domxref("Node")}} donné peut être accepté ou non par l'algorithme d'itération {{ domxref("NodeIterator") }} ou {{ domxref("TreeWalker") }}. Cette méthode doit être écrite par l'utilisateur du `NodeFilter`. Les valeurs retournées possibles sont :

    <table class="standard-table">
      <tbody>
        <tr>
          <td class="header">Constante</td>
          <td class="header">Description</td>
        </tr>
        <tr>
          <td><code>FILTER_ACCEPT</code></td>
          <td>
            Valeur renvoyée par la méthode
            {{ domxref("NodeFilter.acceptNode()") }} quand un noeud doit
            être accepté.
          </td>
        </tr>
        <tr>
          <td><code>FILTER_REJECT</code></td>
          <td>
            Valeur à retourner par la méthode
            {{ domxref("NodeFilter.acceptNode()") }} quand le noeud doit
            être rejeté. Pour {{ domxref("TreeWalker") }}, les noeuds
            enfants sont aussi rejetés. Pour
            {{ domxref("NodeIterator") }}, cette option est équivalente à
            FILTER_SKIP.
          </td>
        </tr>
        <tr>
          <td><code>FILTER_SKIP</code></td>
          <td>
            Valeur à retourner par
            {{ domxref("NodeFilter.acceptNode()") }} pour que les noeuds
            soient ignorés par {{ domxref("NodeIterator") }} ou
            {{ domxref("TreeWalker") }}. Les enfants des noeuds ignorés
            sont toujours considérés. Cela équivaut à "ignorer ce noeud mais pas ses
            enfants".
          </td>
        </tr>
      </tbody>
    </table>

## Exemple

```js
var nodeIterator = document.createNodeIterator(
  // Noeud à utiliser comme racine
  document.getElementById('someId'),

  // Considérer uniquement les nœuds qui sont des nœuds de texte (nodeType 3)
  NodeFilter.SHOW_TEXT,

  // Objet contenant la fonction à utiliser pour la méthode acceptNode
  // du NodeFilter
    { acceptNode: function(node) {
      // Logique pour déterminer si accepter, rejeter ou ignorer le noeud
      // dans ce cas, n'accepte que les nœuds ayant du contenu
      // autres que les espaces
      if ( ! /^\s*$/.test(node.data) ) {
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  },
  false
);

// Affiche le contenu de tous les noeuds texte non vides qui sont enfants de la racine
var node;

while ((node = nodeIterator.nextNode())) {
  alert(node.data);
}
```

## Spécifications

| Spécification                                                                                                            | Statut                                       | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG', '#interface-nodefilter', 'NodeFilter')}}                                 | {{Spec2('DOM WHATWG')}}             |                      |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-NodeFilter', 'NodeFilter')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.NodeFilter")}}

## Voir aussi

- Interfaces connexes : {{domxref("TreeWalker")}}, {{domxref("NodeIterator")}}.
