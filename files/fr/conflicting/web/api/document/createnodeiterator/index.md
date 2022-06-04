---
title: NodeFilter.acceptNode()
slug: conflicting/Web/API/Document/createNodeIterator
tags:
  - API
  - DOM
  - Filtre
  - Méthodes
  - NodeFilter
  - Noeuds
translation_of: Web/API/NodeFilter/acceptNode
original_slug: Web/API/NodeFilter/acceptNode
---
{{APIRef("DOM")}}

La méthode **`NodeFilter.acceptNode()`** renvoie un `unsigned short` (_non signé court_) qui sera utilisé pour dire si un {{domxref("Node")}} donné peut être accepté ou non par l'algorithme d'itération {{ domxref("NodeIterator") }} ou {{ domxref("TreeWalker") }}. Cette méthode doit être écrite par l'utilisateur du `NodeFilter`. Les valeurs retournées possibles sont :

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Constante</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>NodeFilter.FILTER_ACCEPT</code></td>
      <td>
        Valeur renvoyée par la méthode
        {{ domxref("NodeFilter.acceptNode()") }} quand un noeud doit
        être accepté .
      </td>
    </tr>
    <tr>
      <td><code>NodeFilter.FILTER_REJECT</code></td>
      <td>
        Valeur à retourner par la méthode
        {{ domxref("NodeFilter.acceptNode()") }} quand le noeud doit
        être rejeté. Les enfants des noeuds rejetés ne sont pas visités par les
        objets {{ domxref("NodeIterator") }} ou
        {{ domxref("TreeWalker") }} ; cette valeur est traitée comme
        "ignorer ce noeud et tous ses enfants".
      </td>
    </tr>
    <tr>
      <td><code>NodeFilter.FILTER_SKIP</code></td>
      <td>
        Valeur à retourner par
        {{ domxref("NodeFilter.acceptNode()") }} pour que les noeuds
        soient ignorés par les objets {{ domxref("NodeIterator") }}
        ou {{ domxref("TreeWalker") }}. Les enfants des noeuds ignorés
        sont toujours considérés. Cela équivaut à "ignorer ce noeud mais pas ses
        enfants".
      </td>
    </tr>
  </tbody>
</table>

La fonction doit renvoyer `NodeFilter.FILTER_ACCEPT` qui pousse le TreeWalker à renvoyer le noeud, `NodeFilter.FILTER_REJECT` qui contraint le TreeWalker à ignorer le sous-arbre entier ou `NodeFilter.FILTER_SKIP`.

Le navigateur ne fournit aucun objet implémentant cette méthode. C'est l'utilisateur qui doit écrire un objet implémentant l'interface {{domxref("NodeFilter")}}, adapter la méthode `acceptNode()` à ses besoins et l'utiliser avec un objet {{domxref("TreeWalker")}} ou {{domxref("NodeIterator")}}.

## Syntaxe

    result = nodeFilter.acceptNode(node)

### Paramètres

- _node_
  - : est un {{domxref("Node")}} (noeud) qui doit être vérifié avec le filtre.

## Exemple

```js
var nodeIterator = document.createNodeIterator(
  // Noeud à utiliser comme racine
  document.getElementById('someId'),

  // Considérer uniquement les nœuds qui sont des nœuds de texte (nodeType 3)
  NodeFilter.SHOW_TEXT,

  // Objet contenant la fonction à utiliser pour la méthode acceptNode du NodeFilter
    { acceptNode: function(node) {
      // Logique pour déterminer si accepter, rejeter ou ignorer le noeud
      // dans ce cas, n'accepte que les noeuds ayant du contenu
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

while ((node = iterator.nextNode())) {
  alert(node.data);
}
```

## Spécifications

| Spécification                                                                                                                            | Statut                                       | Commentaire                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#nodeFilter', 'NodeFilter.acceptNode()')}}                                             | {{Spec2('DOM WHATWG')}}             | Pas de changement depuis {{SpecName('DOM2 Traversal_Range')}} |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-NodeFilter', 'NodeFilter.acceptNode()')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                      |

## Compatibilité des navigateurs

{{Compat("api.NodeFilter.acceptNode")}}

## Voir aussi

- L'interface à laquelle elle appartient : {{domxref("NodeFilter")}}.
