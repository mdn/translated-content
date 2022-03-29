---
title: element.insertBefore
slug: Web/API/Node/insertBefore
tags:
  - API
  - DOM
  - Enfant
  - Insertion
  - Méthodes
  - Noeud
translation_of: Web/API/Node/insertBefore
---
{{APIRef("DOM")}}

La méthode **`Node.insertBefore()`** insère un nœud avant un _nœud de référence_ en tant qu'enfant d'un _nœud parent_ spécifié.

Si le nœud donné existe déjà dans le document, `insertBefore()` le déplace de sa position actuelle vers la nouvelle position. (C'est-à-dire qu'il sera automatiquement retiré de son parent existant avant d'être ajouté au nouveau parent spécifié).

Cela signifie qu'un nœud ne peut pas se trouver simultanément à deux endroits du document.

## Syntaxe

    var insertedNode = parentNode.insertBefore(newNode, referenceNode);

- `insertedNode`
  - : Le nœud en cours d'insertion (le même que `newNode`).
- `parentNode`
  - : Le parent du nœud nouvellement inséré.
- `newNode`
  - : Le nœud à insérer.
- `referenceNode`
  - : Le nœud avant lequel `newNode` est inséré. Si c'est `null`, alors `newNode` est inséré à la fin des nœuds enfants de `parentNode`.

> **Note :** _`referenceNode`_ **n'est pas** un paramètre facultatif -- vous devez explicitement transmettre un `Node` ou `null`. Ne pas le fournir ou transmettre des valeurs invalides provoque des [comportements différents](https://code.google.com/p/chromium/issues/detail?id=419780) selon les différentes versions des navigateurs.

### Valeur de retour

Renvoie l'enfant ajouté (sauf si `newNode` est un {{domxref("DocumentFragment")}}, auquel cas le {{domxref("DocumentFragment")}} vide est renvoyé).

## Exemples

### Exemple 1

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
// Crée le nouveau nœud à insérer
let newNode = document.createElement("span")

// Obtient une référence au nœud parent
let parentDiv = document.getElementById("childElement").parentNode

// Commence le cas de test [ 1 ] : Existing childElement (tout fonctionne correctement)
let sp2 = document.getElementById("childElement")
parentDiv.insertBefore(newNode, sp2)
// Fin du cas de test [ 1 ]

// Commence le cas de test [ 2 ] : childElement est de Type undefined
let sp2 = undefined // Noeud non existant de l'id "childElement".
parentDiv.insertBefore(newNode, sp2) // Transfert dynamique implicite vers le type Node
// Fin du cas de test [ 2 ]

// Commence le cas de test [ 3 ] : childElement est de Type "undefined" ( string )
let sp2 = "undefined" // Noeud non existant de l'id "childElement".
parentDiv.insertBefore(newNode, sp2) // Génère "Erreur de type : Argument non valide".
// Fin du cas de test [ 3 ]
</script>
```

### Exemple 2

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
// Crée un nouvel élément simple de type <span>
let sp1 = document.createElement("span")

// Obtient l'élément de référence
let sp2 = document.getElementById("childElement")
// Get the parent element
let parentDiv = sp2.parentNode

// Insert le nouvel élément dans avant sp2
parentDiv.insertBefore(sp1, sp2)
</script>
```

Il n'existe pas de méthode `insertAfter()`. Il peut être émulé avec une combinaison des méthodes `insertBefore()` et [`Node.nextSibling`](/fr/docs/Web/API/Node/nextSibling).

Dans l'exemple ci-dessus, `sp1` pourrait être inséré après `sp2` en utilisant&nbsp;:

```js
parentDiv.insertBefore(sp1, sp2.nextSibling);
```

Si `sp2` n'a pas d'enfant suivant, c'est qu'il est le dernier enfant. Dans ce cas, `sp2.nextSibling` renverra `null` et `sp1` sera donc inséré à la fin de la liste des nœuds enfants (c'est-à-dire immédiatement après `sp2`).

### Exemple 3

Insérer un élément avant le premier élément enfant en utilisant la propriété [firstChild](/fr/docs/Web/API/Node/firstChild).

```js
// Obtient l'élément parent
  let parentElement = document.getElementById('parentElement')
  // Obtient le premier enfant du parent
  let theFirstChild = parentElement.firstChild

  // Crée un nouvel élément
  let newElement = document.createElement("div")

  // Insert le nouvel élément avant le premier enfant
  parentElement.insertBefore(newElement, theFirstChild)

```

Si l'élément n'a pas de premier enfant, alors `firstChild` est `null`. L'élément est toujours ajouté au parent après le dernier enfant. Comme l'élément parent n'avait pas de premier enfant, il n'avait pas non plus de dernier enfant. Par conséquent, le nouvel élément est le seul élément, après l'insertion.

## Spécifications

| Specification                                                                                                | Status                           | Comment                                 |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------- |
| {{SpecName('DOM WHATWG','#dom-node-insertbefore','Node.insertBefore')}}             | {{Spec2('DOM WHATWG')}} | Fixes errors in the insertion algorithm |
| {{SpecName('DOM4','#dom-node-insertbefore','Node.insertBefore')}}                     | {{Spec2('DOM4')}}         | Describes the algorithm in more detail  |
| {{SpecName('DOM3 Core','core.html#ID-952280727','Node.insertBefore')}}                 | {{Spec2('DOM3 Core')}}     | No notable changes                      |
| {{SpecName('DOM2 Core','core.html#ID-952280727','Node.insertBefore')}}                 | {{Spec2('DOM2 Core')}}     | No notable changes                      |
| {{SpecName('DOM1','level-one-core.html#method-insertBefore','Node.insertBefore')}} | {{Spec2('DOM1')}}         | Introduced                              |

## Compatibilité des navigateurs

{{Compat("api.Node.insertBefore")}}
