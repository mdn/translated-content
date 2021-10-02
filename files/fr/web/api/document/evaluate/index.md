---
title: document.evaluate
slug: Web/API/Document/evaluate
tags:
  - API
  - DOM
  - Méthode
  - Reference
  - XPath
translation_of: Web/API/Document/evaluate
---
{{ ApiRef("DOM") }}

La méthode **`evaluate()`** renvoie un {{domxref("XPathResult")}} basé sur une expression [XPath](/fr/docs/XPath) et d'autres paramètres donnés.

## Syntaxe

    var xpathResult = document.evaluate(
     xpathExpression,
     contextNode,
     namespaceResolver,
     resultType,
     result
    );

- `xpathExpression` est une chaîne de caractères représentant le XPath à évaluer.
- `contextNode` spécifie le noeud de contexte pour la requête (voir [XPath specification](http://www.w3.org/TR/xpath)) . Il est courant de transmettre un document en tant que nœud de contexte.
- `namespaceResolver` est une fonction qui recevra tous les préfixes d'espace de noms et devrait renvoyer une chaîne représentant l'URI de l'espace de noms associé à ce préfixe. Il sera utilisé pour résoudre les préfixes dans le XPath lui-même, afin qu'ils puissent être mis en correspondance avec le document. `null` est commun pour les documents HTML ou lorsque aucun préfixe d'espace de noms n'est utilisé.
- `resultType` est un nombre entier qui correspond au type de résultat `XPathResult` à retourner. Utilisez des [propriétés de constantes nommées](#Types_de_resultats), comme `XPathResult.ANY_TYPE`  du constructeur de XPathResult , lequel correspond à un nombre entier compris entre 0 et 9.
- `result` est un `XPathResult` existant à utiliser pour les résultats.  `null` est le plus commun et va créer un nouveau XPathResult

## Exemples

```js
 var  headings  =  document .  evaluate  ( " / html / body //h2", document, null, XPathResult.ANY_TYPE, null);
 /* Cherche le document pour tout élément h2.
 * Le résultat sera probablement un itérateur de noeuds non ordonné. */
 var  thisHeading  =  headings .  iterateNext  (  )  ;
 var  alertText  =   "Level 2 headings in this document are:\n"  ;
 while   ( thisHeading )   {
  alertText  +  =  thisHeading . textContent  +   "\n"  ;
  thisHeading  =  headings .  iterateNext  (  )  ;
 }
 alert  ( alertText )  ;   // Alerte le texte de tout élément h2
```

Note : dans l'exemple ci-dessus, un XPath plus verbeux est préféré aux raccourcis communs tels que `//h2`. Généralement, des sélecteurs XPath plus spécifiques, comme dans l'exemple ci-dessus, améliorent de façon significative les performances, en particulier pour les documents très volumineux. C'est parce que l'évaluation de la requête ne perd pas de temps à visiter des noeuds inutiles. L'utilisation de // est généralement lente car elle visite tous les nœuds de la racine et tous les sous-nœuds à la recherche de correspondances possibles.

Une optimisation supplémentaire peut être obtenue en utilisant soigneusement le paramètre de contexte. Par exemple, si vous savez que le contenu que vous recherchez se trouve quelque part dans la balise body, vous pouvez utiliser ceci :

```js
document .  evaluate  ( " .  //h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Remarquez ci-dessus,  `document.body` a été utilisé comme contexte plutôt que comme document, de sorte que le XPath commence à partir de l'élément body. (Dans cet exemple, le `"."` est important pour indiquer que l'interrogation doit commencer à partir du noeud contextuel, document.body . Si le "." est omis (en quittant `//h2`), la requête démarrera à partir du noeud racine ( `html`) ce qui serait plus inutile.)

Voir [Introduction à l'utilisation de XPath avec JavaScript](/fr/docs/Introduction_%C3%A0_l'utilisation_de_XPath_avec_JavaScript)  pour plus d'informations.

## Notes

- Les expressions XPath peuvent être évaluées sur les documents HTML et XML.
- Lors de l'utilisation de document.evaluate() dans FF2 ; dans FF3, il faut utiliser someXMLDoc.evaluate() si l'on évalue quelque chose d'autre que le document actuel.

## Types de résultats

Ce sont des valeurs prises en charge pour le paramètre `resultType` de la méthode `evaluate` :

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Type de résultat</td>
      <td class="header">Valeur</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>ANY_TYPE</code></td>
      <td>0</td>
      <td>
        Quel que soit le type, résulte naturellement de l'expression donnée.
      </td>
    </tr>
    <tr>
      <td><code>NUMBER_TYPE</code></td>
      <td>1</td>
      <td>
        Un ensemble de résultats contenant un seul nombre. Utile, par exemple,
        dans une expression XPath utilisant la fonction count().
      </td>
    </tr>
    <tr>
      <td><code>STRING_TYPE</code></td>
      <td>2</td>
      <td>
        Un ensemble de résultats contenant une seule chaîne de caractères.
      </td>
    </tr>
    <tr>
      <td><code>BOOLEAN_TYPE</code></td>
      <td>3</td>
      <td>
        Un ensemble de résultats contenant une seule valeur booléenne. Utile
        pour, par exemple, une expression XPath utilisant la fonction not().
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_ITERATOR_TYPE</code></td>
      <td>4</td>
      <td>
        Un ensemble de résultats contenant tous les nœuds correspondant à
        l'expression. Les nœuds de cet ensemble ne sont pas nécessairement dans
        le même ordre que celui de leur apparition dans le document.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_ITERATOR_TYPE</code></td>
      <td>5</td>
      <td>
        Un ensemble de résultats contenant tous les noeuds correspondant à
        l'expression. Les nœuds de cet ensemble sont dans le même ordre que
        celui de leur apparition dans le document .
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td>6</td>
      <td>
        Un ensemble de résultats contenant des instantanés de tous les nœuds
        correspondant à l'expression. Les nœuds de cet ensemble ne sont pas
        nécessairement dans le même ordre que celui de leur apparition dans le
        document .
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td>7</td>
      <td>
        Un ensemble de résultats contenant des instantanés de tous les nœuds
        correspondant à l'expression. Les nœuds de cet ensemble sont dans le
        même ordre que celui de leur apparition dans le document .
      </td>
    </tr>
    <tr>
      <td><code>ANY_UNORDERED_NODE_TYPE</code></td>
      <td>8</td>
      <td>
        Un ensemble de résultats contenant un seul nœud correspondant à
        l'expression. Le noeud n'est pas nécessairement le premier noeud du
        document qui correspond à l'expression.
      </td>
    </tr>
    <tr>
      <td><code>FIRST_ORDERED_NODE_TYPE</code></td>
      <td>9</td>
      <td>
        Un ensemble de résultats contenant le premier nœud du document qui
        correspond à l'expression.
      </td>
    </tr>
  </tbody>
</table>

Les résultats des types `NODE_ITERATOR` contiennent des références aux noeuds du document. La modification d'un nœud invalidera l'itérateur. Après avoir modifié un nœud, tenter de parcourir les résultats entraînera une erreur.

Les résultats des types `NODE_SNAPSHOT` sont des instantanés, qui sont essentiellement des listes de nœuds correspondants. Vous pouvez apporter des modifications au document en modifiant les nœuds de capture instantanée. La modification du document n'invalide pas l'instantané. Toutefois, si le document est modifié, l'instantané peut ne pas correspondre à l'état actuel du document, car les nœuds peuvent avoir été déplacés, modifiés, ajoutés ou supprimés.

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName("DOM3 XPath", "xpath.html#XPathEvaluator-evaluate", "Document.evaluate")}} | {{Spec2("DOM3 XPath")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Document.evaluate")}}

## Voir aussi

- [DOM : document.createExpression](/fr/docs/Web/API/Document/createExpression)
- [XPath Code Snippets](/fr/Add-ons/Code_snippets/XPath)
- [Vérifier le support du navigateur](http://codepen.io/johan/full/ckFgn)
