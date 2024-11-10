---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
---

{{JSRef}}

La méthode **`pop()`** supprime le **dernier** élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.

{{EmbedInteractiveExample("pages/js/array-pop.html")}}

## Syntaxe

```js
arr.pop();
```

### Valeur de retour

L'élément qui a été retiré du tableau. Si le tableau est vide, elle renvoie {{jsxref("undefined")}}.

## Description

La méthode `pop()` supprime le dernier élément d'un tableau et retourne cette valeur.

`pop()` est volontairement générique ; cette méthode peut être {{jsxref("Function.call", "appelée")}} ou {{jsxref("Function.apply", "appliquée")}} pour des objets ressemblant à des tableaux. Les objets qui ne contiennent pas une propriété `length` reflétant la fin d'une série de propriétés consécutives numérotées peuvent se comporter bizarrement.

Si vous appelez `pop()` sur un tableau vide, il renverra la valeur {{jsxref("undefined")}}.

> [!NOTE]
> La méthode {{jsxref("Array.prototype.shift()")}} possède un comportement analogue mais retire le _premier_ élément du tableau.

## Exemples

### Supprimer le dernier élément d'un tableau

Le code suivant crée le tableau `mesPoissons` qui contient quatre éléments puis supprime le dernier élément.

```js
var mesPoissons = ["angel", "clown", "mandarin", "sturgeon"];

var popped = mesPoissons.pop();

console.table(mesPoissons); // angel, clown, madarin
console.log(popped); // sturgeon
```

### Utiliser `apply()` ou `call()` sur les objets semblables aux tableaux

Le code suivant crée un objet `mesPoissons` semblable à un tableau, qui contient 4 propriétés indexées avec des nombres et une propriété `length`. On utilise la méthode {{jsxref("Function.call()")}} pour invoquer `pop()` sur cet objet :

```js
var mesPoissons = {
  0: "angel",
  1: "clown",
  2: "mandarin",
  3: "sturgeon",
  length: 4,
};

var popped = Array.prototype.pop.call(mesPoissons); // on aurait pu utiliser apply()
console.log(mesPoissons); // {0: 'angel', 1: 'clown', 2: 'mandarin', length: 3}
console.log(popped); // 'sturgeon'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
