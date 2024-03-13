---
title: element.cloneNode
slug: Web/API/Node/cloneNode
---

{{APIRef("DOM")}}

La méthode **`Node.cloneNode()`** renvoie une copie du nœud sur lequel elle a été appelée.

## Syntaxe

```js
var dupNode = node.cloneNode([deep]);
```

- node
  - : Le noeud à dupliquer.
- dupNode
  - : Le nouveau noeud qui sera un clone du `node`.
- deep _{{optional_inline}} (profondeur)_
  - : `true` (_vrai_) si les enfants du noeud doivent aussi être clonés ou `false` (_faux_) si seul le noeud spécifié doit l'être.

> **Note :** Dans la spécification DOM4 (telle qu'implémentée dans Gecko 13.0), `deep` est un argument facultatif. S'il est omis, la méthode agit comme si la valeur de `deep` était **`true`** par défaut, elle utilise le clonage profond comme comportement par défaut. Pour créer un clone superficiel, `deep` doit être défini sur `false`.
>
> Le comportement a été modifié dans la dernière spécification et, s'il est omis, la méthode doit agir comme si la valeur de `deep` était **`false`**. Bien que ce soit toujours facultatif, vous devriez toujours fournir l'argument `deep` pour la compatibilité amont et aval. Avec Gecko 28.0, la console a averti les développeurs de ne pas omettre l'argument. À partir de Gecko 29.0, un clone superficiel est défini par défaut au lieu d'un clone profond.

## Exemple

```js
p = document.getElementById("para1");
p_prime = p.cloneNode(true);
```

## Notes

Cloner un nœud copie tous ses attributs ainsi que leurs valeurs, y compris les auditeurs intrinsèques (en ligne). Il ne copie pas les auditeurs d'évènement ajoutés avec [`addEventListener()`](/fr/docs/DOM/element.addEventListener) ou ceux assignés au propriétés d'éléments (par exemple `node.onclick = fn`). De plus, pour un élément {{HTMLElement("canvas")}} l'image peinte n'est pas copiée.

Le nœud dupliqué renvoyé par `cloneNode` ne fera pas partie du document tant qu'il n'y est pas ajouté via la méthode {{domxref("Node.appendChild()")}} ou une méthode similaire. De même, il n'a pas de parent tant qu'il n'a pas été ajouté à un autre nœud.

Si `deep` est défini à `false`, aucun des nœuds enfants n'est copié.
*T*out texte contenu dans le nœud n'est pas copié non plus , car il fait partie d'un ou plusieurs nœuds {{domxref("Text")}} enfants.

Si `deep` est évalué à `true`, le sous-arbre entier est copié également (y compris le texte qui peut être contenu dans des nœuds {{domxref("Text")}} enfants). Pour les nœuds vides (par exemple les éléments {{HTMLElement("img")}} et {{HTMLElement("input")}} ) le fait de mettre `deep` à `true` ou `false` n'a aucune incidence sur la copie, mais il est tout de même nécessaire de fournir une valeur.

> **Attention :** `cloneNode()` peut conduire à dupliquer des ID (_identifiant_) d'éléments dans un document.

Si le noeud d'origine a un identifiant et que le clone doit être placé dans le même document, l'identifiant du clone peut être modifié pour être unique. Les attributs du nom peuvent devoir être modifiés également, selon que les noms en double sont attendus.

Pour cloner un noeud à ajouter dans un document différent, utilisez {{domxref("Document.importNode()")}} à la place.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
