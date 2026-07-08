---
title: "Node : méthode insertBefore()"
short-title: insertBefore()
slug: Web/API/Node/insertBefore
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

La méthode **`insertBefore()`** de l'interface {{DOMxRef("Node")}} insère un nœud avant un _nœud de référence_ en tant qu'enfant d'un _nœud parent_ défini.

Si le nœud donné existe déjà dans le document, `insertBefore()` le déplace de sa position actuelle vers la nouvelle position. (Autrement dit, il est automatiquement retiré de son parent existant avant d'être ajouté au nouveau parent défini.)

Cela signifie qu'un nœud ne peut pas se trouver à deux endroits du document simultanément.

> [!NOTE]
> La méthode {{DOMxRef("Node.cloneNode()")}} peut être utilisée pour créer une copie du nœud avant de l'ajouter sous le nouveau parent. Notez que les copies créées avec `cloneNode()` ne sont pas automatiquement synchronisées.

Si l'enfant donné est un {{DOMxRef("DocumentFragment")}}, l'intégralité du contenu du `DocumentFragment` est déplacée dans la liste des enfants du nœud parent défini.

## Syntaxe

```js-nolint
insertBefore(newNode, referenceNode)
```

### Paramètres

- `newNode`
  - : Le nœud à insérer.
- `referenceNode`
  - : Le nœud avant lequel `newNode` est inséré. Si c'est `null`, alors `newNode` est inséré à la fin des nœuds enfants de `parentNode`.
    > [!NOTE]
    > `referenceNode` **n'est pas** un paramètre facultatif.
    > Vous devez explicitement passer un {{DOMxRef("Node")}} ou `null`.
    > Ne pas le fournir ou passer des valeurs invalides peut entraîner des [comportements différents <sup>(angl.)</sup>](https://crbug.com/419780) selon les versions des navigateurs.

### Valeur de retour

Retourne l'enfant ajouté (sauf si `newNode` est un {{DOMxRef("DocumentFragment")}}, auquel cas le {{DOMxRef("DocumentFragment")}} vide est retourné).

### Exceptions

Validité pré-insertion.

## Exemples

### Exemple 1

```html
<div id="elementParent">
  <span id="elementEnfant">toto truc</span>
</div>
```

```js
// Crée le nouveau nœud à insérer
const nouveauNoeud = document.createElement("span");

// Obtient une référence au nœud parent
const divParent = document.getElementById("elementEnfant").parentNode;

// Commence le cas de test [ 1 ] : elementEnfant existant (tout fonctionne correctement)
let sp2 = document.getElementById("elementEnfant");
divParent.insertBefore(nouveauNoeud, sp2);
// Fin du cas de test [ 1 ]

// Commence le cas de test [ 2 ] : elementEnfant est de Type undefined
sp2 = undefined; // œud inexistant avec l'id "elementEnfant"
divParent.insertBefore(nouveauNoeud, sp2); // Conversion dynamique implicite en type Node
// Fin du cas de test [ 2 ]

// Commence le cas de test [ 3 ] : elementEnfant est de Type "undefined" (chaîne de caractères)
sp2 = "undefined"; // œud inexistant avec l'id "elementEnfant"
divParent.insertBefore(nouveauNoeud, sp2); // Génère "Type Error: Invalid Argument"
// Fin du cas de test [ 3 ]
```

### Exemple 2

```html
<div id="elementParent">
  <span id="elementEnfant">toto truc</span>
</div>
```

```js
// Crée un nouvel élément simple de type <span>
const sp1 = document.createElement("span");

// Obtient l'élément de référence
const sp2 = document.getElementById("elementEnfant");
// Obtient l'élément parent
const divParent = sp2.parentNode;

// Insert le nouvel élément avant sp2
divParent.insertBefore(sp1, sp2);
```

> [!NOTE]
> Il n'existe pas de méthode `insertAfter()`.
> Elle peut être simulée en combinant la méthode `insertBefore` avec {{DOMxRef("Node.nextSibling")}}.
>
> Dans l'exemple précédent, `sp1` peut être inséré après `sp2` en utilisant&nbsp;:
>
> ```js
> parentDiv.insertBefore(sp1, sp2.nextSibling);
> ```
>
> Si `sp2` n'a pas de voisin suivant, alors il doit être le dernier enfant — `sp2.nextSibling` retourne `null`, et `sp1` est inséré à la fin de la liste des nœuds enfants (immédiatement après `sp2`).

### Exemple 3

Insérer un élément avant le premier élément enfant en utilisant la propriété [firstChild](/fr/docs/Web/API/Node/firstChild).

```js
// Obtient l'élément parent
const elementParent = document.getElementById("elementParent");
// Obtient le premier enfant du parent
const lePremierEnfant = elementParent.firstChild;

// Crée un nouvel élément
const nouvelElement = document.createElement("div");

// Insère le nouvel élément avant le premier enfant
elementParent.insertBefore(nouvelElement, lePremierEnfant);
```

Lorsque l'élément n'a pas de premier enfant, alors `firstChild` est `null`. L'élément est toujours ajouté au parent, après le dernier enfant.

Puisque l'élément parent n'avait pas de premier enfant, il n'avait pas non plus de dernier enfant. Par conséquent, l'élément nouvellement inséré est le _seul_ élément.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Node.removeChild()")}}
- La méthode {{DOMxRef("Node.replaceChild()")}}
- La méthode {{DOMxRef("Node.appendChild()")}}
- La méthode {{DOMxRef("Node.hasChildNodes()")}}
- La méthode {{DOMxRef("Element.insertAdjacentElement()")}}
- La méthode {{DOMxRef("Element.prepend()")}}
- La méthode {{DOMxRef("Element.before()")}}
- La méthode {{DOMxRef("Element.after()")}}
