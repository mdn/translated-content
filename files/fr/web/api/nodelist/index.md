---
title: NodeList
slug: Web/API/NodeList
l10n:
  sourceCommit: 4df1c84eb714ea19f7e5ebaa740d0f00c73d8cb4
---

{{APIRef("DOM")}}

Les objets **`NodeList`** sont des collections de [nœuds](/fr/docs/Web/API/Node), généralement retournés par des propriétés telles que {{DOMxRef("Node.childNodes")}} et des méthodes telles que {{DOMxRef("document.querySelectorAll()")}}.

Cette interface est une [tentative de créer une liste non modifiable <sup>(angl.)</sup>](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) et continue d'être prise en charge uniquement pour ne pas casser le code qui l'utilise déjà. Les API modernes représentent les structures de liste en utilisant des types basés sur les [tableaux](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) JavaScript, rendant ainsi de nombreuses méthodes de tableau disponibles, tout en imposant en même temps des sémantiques supplémentaires sur leur utilisation (comme rendre leurs éléments en lecture seule).

Ces raisons historiques ne signifient pas que vous, en tant que développeur·euse, devez éviter `NodeList`. Vous ne créez pas vous-même des objets `NodeList`, mais vous les obtenez à partir d'API telles que {{DOMxRef("Document.querySelectorAll()")}}, et ces API ne sont pas obsolètes. Cependant, faites attention aux différences sémantiques par rapport à un véritable tableau.

Bien que `NodeList` ne soit pas un tableau (`Array`), il est possible d'itérer dessus avec `forEach()`. Il peut également être converti en un véritable tableau (`Array`) en utilisant {{JSxRef("Array.from()")}}.

## Listes de nœuds dynamiques et statiques

Bien qu'ils soient tous deux considérés comme des objets `NodeList`, il existe 2 types de NodeList&nbsp;: _dynamiques_ et _statiques_.

Dans la plupart des cas, le `NodeList` est _dynamique_, ce qui signifie que les modifications dans le DOM mettent automatiquement à jour la collection.

Par exemple, {{DOMxRef("Node.childNodes")}} est dynamique&nbsp;:

```js
const parent = document.getElementById("parent");
let noeudsEnfants = parent.childNodes;
console.log(noeudsEnfants.length); // suppose "2"
parent.appendChild(document.createElement("div"));
console.log(noeudsEnfants.length); // affiche "3"
```

Dans d'autres cas, le `NodeList` est _statique_, où toute modification dans le DOM n'affecte pas le contenu de la collection. La méthode omniprésente {{DOMxRef("document.querySelectorAll()")}} est la seule API qui retourne un `NodeList` _statique_.

Il est bon de garder cette distinction à l'esprit lorsque vous choisissez comment itérer sur les éléments du `NodeList`, et si vous devez mettre en cache la `length` de la liste.

## Propriétés d'instance

- {{DOMxRef("NodeList.length")}} {{ReadOnlyInline}}
  - : Le nombre de nœud dans `NodeList`.

## Méthodes d'instance

- {{DOMxRef("NodeList.item()")}}
  - : Retourne un élément de la liste par son index, ou `null` si l'index est hors limites.

    Une alternative à l'accès `nodeList[i]` (qui retourne `undefined` lorsque `i` est hors limites). Cela est principalement utile pour les implémentations DOM non JavaScript.

- {{DOMxRef("NodeList.entries()")}}
  - : Retourne un {{JSxRef("Iteration_protocols", "itérateur",,1)}}, permettant au code de parcourir toutes les paires clé/valeur contenues dans la collection. (Dans ce cas, les clés sont des entiers commençant à `0` et les valeurs sont des nœuds.)
- {{DOMxRef("NodeList.forEach()")}}
  - : Exécute une fonction fournie une fois par élément `NodeList`, en passant l'élément en tant qu'argument à la fonction.
- {{DOMxRef("NodeList.keys()")}}
  - : Retourne un {{JSxRef("Iteration_protocols", "itérateur",,1)}}, permettant au code de parcourir toutes les clés des paires clé/valeur contenues dans la collection. (Dans ce cas, les clés sont des entiers commençant à `0`.)
- {{DOMxRef("NodeList.values()")}}
  - : Retourne un {{JSxRef("Iteration_protocols", "itérateur",,1)}} permettant au code de parcourir toutes les valeurs (nœuds) des paires clé/valeur contenues dans la collection.

## Exemples

Il est possible de parcourir les éléments d'un `NodeList` en utilisant une boucle [`for`](/fr/docs/Web/JavaScript/Reference/Statements/for)&nbsp;:

```js
for (let i = 0; i < maListeDeNoeuds.length; i++) {
  let element = maListeDeNoeuds[i];
}
```

**N'utilisez pas [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) pour énumérer les éléments dans les `NodeList`**, car elles énumèrent _également_ ses propriétés `length` et `item` et provoquent des erreurs si votre script suppose qu'il ne doit traiter que des objets {{DOMxRef("element")}}. De plus, `for...in` ne garantit pas de visiter les propriétés dans un ordre particulier.

Les boucles [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of) parcourent correctement les objets `NodeList`&nbsp;:

```js
const liste = document.querySelectorAll("input[type=checkbox]");
for (const caseACocher of liste) {
  caseACocher.checked = true;
}
```

Les navigateurs prennent également en charge la méthode d'itérateur ({{DOMxRef("NodeList.forEach()", "forEach()")}}) ainsi que {{DOMxRef("NodeList.entries()", "entries()")}}, {{DOMxRef("NodeList.values()", "values()")}} et {{DOMxRef("NodeList.keys()", "keys()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
