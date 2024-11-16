---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
---

{{JSRef}}

La méthode **`shift()`** permet de retirer le **premier** élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la longueur du tableau.

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## Syntaxe

```js
arr.shift();
```

### Valeur de retour

L'élément retiré du tableau ou {{jsxref("undefined")}} si le tableau est vide.

## Description

La méthode `shift` retire l'élément situé à l'index zéro et décrémente l'index des éléments suivant avant de retourner l'élément supprimé. Si la propriété {{jsxref("Array.length", "length")}} vaut 0, {{jsxref("undefined")}} est retourné.

Cette méthode est générique et peut être {{jsxref("Function.call", "appelée","",1)}} ou {{jsxref("Function.apply", "appliquée","",1)}} sur des objets similaires à des tableaux.

Cette méthode n'est pas exploitable pour les objets dont la propriété `length` ne reflète pas la taille du contenu, ou pour lesquels la propriété `length` n'est pas définie.

> [!NOTE]
> La méthode {{jsxref("Array.prototype.pop()")}} possède un comportement similaire mais retire le dernier élément du tableau (et non le premier).

## Exemples

### Supprimer un élément d'un tableau

Le code suivant affiche le tableau `mesPoissons` avant et après avoir enlevé le premier élément. Il affiche aussi l'élément supprimé&nbsp;:

```js
var mesPoissons = ["ange", "clown", "mandarin", "chirurgien"];

console.log("mesPoissons avant : " + JSON.stringify(mesPoissons));
// mesPoissons avant : ["ange","clown","mandarin","chirurgien"]

var premierÉlément = mesPoissons.shift();

console.log("mesPoissons après :", mesPoissons);
// mesPoissons après : ["clown", "mandarin", "chirurgien"]

console.log("Cet élément a été enlevé :", premierÉlément);
// "Cet élément a été enlevé : ange"
```

### Utiliser `shift()` dans une boucle `while`

La méthode `shift()` peut être utilisée dans une boucle [`while`](/fr/docs/Web/JavaScript/Reference/Instructions/while). Dans l'exemple suivant, chaque itération de la boucle retire un élément du tableau et l'affiche dans la console, jusqu'à ce que ce dernier soit vide.

```js
var noms = ["André", "Édouard", "Paul", "Christophe", "Jean"];
while ((i = noms.shift()) !== undefined) {
  console.log(i);
}
// André, Édouard, Paul, Christophe, Jean
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
