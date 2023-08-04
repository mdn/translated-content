---
title: NodeList
slug: Web/API/NodeList
---

{{APIRef("DOM")}}

Les objets **`NodeList`** sont des collections de nœuds comme celles retournées par {{domxref("Node.childNodes")}} et la méthode {{domxref("document.querySelectorAll()")}}.

> **Note :** Bien que `NodeList` ne soit pas un tableau (`Array`), il est possible d'itérer dessus en utilisant `forEach()`. Il peut également être converti en tableau (`Array`) en utilisant {{jsxref("Array.from()")}}.
>
> Néanmoins certains vieux navigateurs n'ont pas encore implémenté `NodeList.forEach()` ni `Array.from()`. Mais ces limitations peuvent être contournées en utilisant {{jsxref("Array.forEach()", "Array.prototype.forEach()")}} (plus dans ce document).

Dans certains cas, la `NodeList` est une collection en direct, ce qui signifie que les changements dans le DOM sont reflétés dans la collection. Par exemple, {{domxref("Node.childNodes")}} est en direct :

```js
var parent = document.getElementById("parent");
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // supposons "2"
parent.appendChild(document.createElement("div"));
console.log(child_nodes.length); // devrait afficher "3"
```

Dans d'autres cas, la `NodeList` est une collection statique, ce qui signifie que tout changement dans le DOM n'affectera pas le contenu de la collection. {{domxref("document.querySelectorAll()")}} renvoie une `NodeList` statique.

Il est bon de garder cette distinction à l'esprit pour choisir la façon de parcourir les éléments de la liste des nœuds et, en particulier, pour mettre en cache la longueur de la liste.

## Propriétés

- {{domxref("NodeList.length")}}
  - : Le nombre de nœuds dans la `NodeList`.

## Méthodes

- {{domxref("NodeList.item()")}}
  - : Retourne un élément de la liste par son index ou `null` si l'index est en dehors des limites. Équivalent à `nodeList[idx]` (qui renvoie à la place `undefined` quand `idx` est hors des limites).
- {{domxref("NodeList.entries()")}}
  - : renvoie un {{jsxref("Les_protocoles_iteration","itérateur")}} permettant de parcourir toutes les paires clé / valeur contenues dans cet objet.
- {{domxref("NodeList.forEach()")}}
  - : exécute une fonction fournie une fois par élément `NodeList`.
- {{domxref("NodeList.keys()")}}
  - : renvoie un {{jsxref("Les_protocoles_iteration","itérateur")}} permettant de parcourir toutes les clés des paires clé / valeur contenues dans cet objet.
- {{domxref("NodeList.values()")}}
  - : renvoie un {{jsxref("Les_protocoles_iteration","itérateur")}} permettant de parcourir toutes les valeurs des paires clé / valeur contenues dans cet objet.

## Exemple

Il est possible de boucler sur les éléments d'une `NodeList` en utilisant&nbsp;:

```js
for (var i = 0; i < myNodeList.length; ++i) {
  var item = myNodeList[i]; // L'appel de myNodeList.item(i) n'est pas nécessaire en JavaScript
}
```

Ne soyez pas tenté d'utiliser [`for… in`](/fr/docs/JavaScript/Reference/Instructions/for...in) ou [`for each… in`](/fr/docs/JavaScript/Reference/Instructions/for_each…in) pour énumérer les éléments de la liste, car cela énumère également la taille (`length`) et les propriétés du `NodeList` et cause des erreurs si votre script ne gère que les objets de type {{domxref("element")}}. De plus, `for… in` ne garantit pas de visiter les propriétés dans un ordre particulier.

Les boucles [`for… of`](/fr/docs/JavaScript/Référence_JavaScript/Instructions/for...of) boucleront correctement sur les objets `NodeList` :

```js
var list = document.querySelectorAll("input[type=checkbox]");
for (var item of list) {
  item.checked = true;
}
```

Les navigateurs récents prennent également en charge les méthodes d'itérateur {{domxref("NodeList.forEach()", "forEach()")}}, aussi bien que {{domxref("NodeList.entries()", "entries()")}}, {{domxref("NodeList.values()", "values()")}} et {{domxref("NodeList.keys()", "keys()")}}.

Il y a aussi dans Internet Explorer une façon compatible d'utiliser {{jsxref("Array.forEach()", "Array.prototype.forEach")}} pour l'itération.

```js
var list = document.querySelectorAll("input[type=checkbox]");
Array.prototype.forEach.call(list, function (item) {
  item.checked = true;
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
