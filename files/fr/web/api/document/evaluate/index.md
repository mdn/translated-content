---
title: "Document : méthode evaluate()"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: 8ea63a911eed0b22c74e2c3f0c41ae1e98abc314
---

{{APIRef("DOM")}}

La méthode **`evaluate()`** de l'interface {{DOMxRef("Document")}} sélectionne des éléments en fonction de l'expression [XPath](/fr/docs/Web/XML/XPath) donnée en paramètres.

Les expressions XPath peuvent être évaluées sur des documents HTML et XML.

## Syntaxe

```js-nolint
evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result)
```

### Paramètres

- `xpathExpression`
  - : Une chaîne de caractères représentant le _xpath_ à évaluer.
- `contextNode`
  - : Le _nœud de contexte_ pour la requête.
    Il est courant de passer `document` comme nœud de contexte.
- `namespaceResolver`
  - : Une fonction qui sera appelée pour chaque préfixe de nom d'espace et doit retourner une chaîne de caractères représentant l'URI de l'espace de noms associé à ce préfixe.
    Elle sera utilisée pour résoudre les préfixes dans le _xpath_ lui-même, afin qu'ils puissent être associés au document.
    La valeur `null` est courante pour les documents HTML ou lorsque aucun préfixe de nom d'espace n'est utilisé.
- `resultType`
  - : Un entier qui correspond au type de résultat `XPathResult` à retourner.
    Les valeurs suivantes sont possibles&nbsp;:
    - `ANY_TYPE` (`0`)
      - : Quel que soit le type, résulte naturellement de l'expression donnée.
    - `NUMBER_TYPE` (`1`)
      - : Un ensemble de résultats contenant un seul nombre. Utile, par exemple, dans une expression _xpath_ utilisant la fonction `count()`.
    - `STRING_TYPE` (`2`)
      - : Un ensemble de résultats contenant une seule chaîne de caractères.
    - `BOOLEAN_TYPE` (`3`)
      - : Un ensemble de résultats contenant une seule valeur booléenne. Utile, par exemple, dans une expression _xpath_ utilisant la fonction `not()`.
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : Un ensemble de résultats contenant tous les nœuds correspondant à l'expression. Les nœuds de l'ensemble ne sont pas nécessairement dans le même ordre que celui de leur apparition dans le document.
        > [!NOTE]
        > Les résultats de ce type contiennent des références aux nœuds du document.
        > La modification d'un nœud invalidera l'itérateur.
        > Après avoir modifié un nœud, tenter de parcourir les résultats entraînera une erreur.
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : Un ensemble de résultats contenant tous les nœuds correspondant à l'expression. Les nœuds de l'ensemble sont dans le même ordre que celui de leur apparition dans le document.
        > [!NOTE]
        > Les résultats de ce type contiennent des références aux nœuds du document.
        > La modification d'un nœud invalidera l'itérateur.
        > Après avoir modifié un nœud, tenter de parcourir les résultats entraînera une erreur.
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : Un ensemble de résultats contenant des instantanés de tous les nœuds correspondant à l'expression. Les nœuds de l'ensemble ne sont pas nécessairement dans le même ordre que celui de leur apparition dans le document.
        > [!NOTE]
        > Les résultats de ce type sont des instantanés, qui sont essentiellement des listes de nœuds correspondants.
        > Vous pouvez apporter des modifications au document en modifiant les nœuds de capture instantanée.
        > La modification du document n'invalide pas l'instantané&nbsp;; cependant, si le document est modifié, l'instantané peut ne pas correspondre à l'état actuel du document, car les nœuds peuvent avoir été déplacés, modifiés, ajoutés ou supprimés.
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : Un ensemble de résultats contenant des instantanés de tous les nœuds correspondant à l'expression. Les nœuds de l'ensemble sont dans le même ordre que celui de leur apparition dans le document.
        > [!NOTE]
        > Les résultats de ce type sont des instantanés, qui sont essentiellement des listes de nœuds correspondants.
        > Vous pouvez apporter des modifications au document en modifiant les nœuds de capture instantanée.
        > La modification du document n'invalide pas l'instantané&nbsp;; cependant, si le document est modifié, l'instantané peut ne pas correspondre à l'état actuel du document, car les nœuds peuvent avoir été déplacés, modifiés, ajoutés ou supprimés.
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : Un ensemble de résultats contenant un seul nœud correspondant à l'expression. Le nœud n'est pas nécessairement le premier nœud du document qui correspond à l'expression.
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : Un ensemble de résultats contenant le premier nœud du document qui correspond à l'expression.

- `result`
  - : Un `XPathResult` existant à utiliser pour les résultats. Si la valeur est `null`, la méthode créera et retournera un nouveau `XPathResult`.

### Valeur de retour

Un objet {{DOMxRef("XPathResult")}} qui lie les nœuds sélectionnés. Si `result` était `null`, il s'agit d'un nouvel objet, sinon, il s'agit du même objet que celui passé en paramètre `result`.

## Exemples

### Trouver tous les titres H2 avec XPath

```js
const headings = document.evaluate(
  "/html/body//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
/* Recherche dans le document tous les éléments h2.
 * Le résultat sera probablement un itérateur de nœuds non ordonné. */
let thisHeading = headings.iterateNext();
let alertText = "Les titres de niveau 2 dans ce document sont :\n";
while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
alert(alertText); // Alerte le texte de tous les éléments h2
```

On notera que, dans l'exemple ci-dessus, un _xpath_ plus verbeux est préféré aux raccourcis courants tels que `//h2`. En général, des sélecteurs _xpath_ plus spécifiques, comme dans l'exemple ci-dessus, offrent généralement une amélioration significative des performances, en particulier sur des documents très volumineux. Cela s'explique par le fait que l'évaluation de la requête ne perd pas de temps à visiter des nœuds inutiles. L'utilisation de // est généralement lente car elle visite _tous_ les nœuds depuis la racine et tous les sous-nœuds à la recherche de correspondances possibles.

Une optimisation supplémentaire peut être obtenue en utilisant soigneusement le paramètre de contexte. Par exemple, si vous savez que le contenu que vous recherchez se trouve quelque part dans la balise body, vous pouvez utiliser ceci&nbsp;:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Remarquez ci-dessus, `document.body` a été utilisé comme contexte plutôt que `document` de sorte que le _xpath_ commence à partir de l'élément `body`. (Dans cet exemple, le `"."` est important pour indiquer que l'interrogation doit commencer à partir du nœud contextuel, `document.body`. Si le «&nbsp;.&nbsp;» était omis (en quittant `//h2`), la requête démarrerait à partir du nœud racine (`html`) ce qui serait plus inutile.)

Voir [Introduction à l'utilisation de XPath avec JavaScript](/fr/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript) pour plus d'informations.

### Obtenir un élément par `xml:id`

Cette fonction est un remplacement de {{DOMxRef("Document.getElementById()")}} lorsque vous devez rechercher par `xml:id`.

```js
function getElementByIdWrapper(xmlDoc, id) {
  return xmlDoc.evaluate(
    `//*[@xml:id="${id}"]`,
    xmlDoc,
    () => "http://www.w3.org/XML/1998/namespace",
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createExpression()")}}
- L'interface {{DOMxRef("XPathResult")}}
