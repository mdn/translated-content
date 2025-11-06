---
title: "Array : méthode shift()"
short-title: shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`shift()`** des instances {{JSxRef("Array")}} supprime le **premier** élément d'un tableau et retourne cet élément supprimé. Cette méthode modifie la longueur du tableau.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.shift()")}}

```js interactive-example
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Résultat attendu : Array [2, 3]

console.log(firstElement);
// Résultat attendu : 1
```

## Syntaxe

```js-nolint
shift()
```

### Paramètres

Aucun.

### Valeur de retour

L'élément retiré du tableau ou {{JSxRef("undefined")}} si le tableau est vide.

## Description

La méthode `shift()` décale toutes les valeurs vers la gauche de 1 et décrémente la longueur de 1, résultant en la suppression du premier élément. Si la {{JSxRef("Array/length", "length")}} propriété est 0, {{JSxRef("undefined")}} est retourné.

La méthode {{JSxRef("Array/pop", "pop()")}} a un comportement similaire à `shift()`, mais s'applique au dernier élément d'un tableau.

La méthode `shift()` est une [méthode mutatrice](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_méthodes_de_mutation). Elle modifie la longueur et le contenu de `this`. Si vous souhaitez que la valeur de `this` reste inchangée mais obtenir un nouveau tableau sans le premier élément, vous pouvez utiliser [`arr.slice(1)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) à la place.

La méthode `shift()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend uniquement que la valeur de `this` possède une propriété `length` et des propriétés indexées par des entiers. Bien que les chaînes soient également assimilables à des tableaux, cette méthode ne leur convient pas, car les chaînes sont immuables.

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

La méthode `shift()` peut être utilisée dans une boucle [`while`](/fr/docs/Web/JavaScript/Reference/Statements/while). Dans l'exemple suivant, chaque itération de la boucle retire un élément du tableau et l'affiche dans la console, jusqu'à ce que ce dernier soit vide.

```js
var noms = ["André", "Édouard", "Paul", "Christophe", "Jean"];
while ((i = noms.shift()) !== undefined) {
  console.log(i);
}
// André, Édouard, Paul, Christophe, Jean
```

### Appeler `shift()` sur des objets qui ne sont pas des tableaux

La méthode `shift()` lit la propriété `length` de `this`. Si la [longueur normalisée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#normalisation_de_la_propriété_length) vaut 0, `length` est de nouveau définie à `0` (alors qu'elle peut être négative ou `undefined` auparavant). Sinon, la propriété à `0` est retournée, et le reste des propriétés est décalé d'un indice vers la gauche. La propriété à `length - 1` est [supprimée](/fr/docs/Web/JavaScript/Reference/Operators/delete), et la propriété `length` est décrémentée de 1.

```js
const objetSimilaireTableau = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.shift.call(objetSimilaireTableau));
// undefined, car il s'agit d'une case vide
console.log(objetSimilaireTableau);
// { '1': 4, length: 2, unrelated: 'foo' }

const plainObj = {};
// Il n'y a pas de propriété `length`, donc `length` vaut 0
Array.prototype.shift.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.push()")}}
- La méthode {{JSxRef("Array.prototype.pop()")}}
- La méthode {{JSxRef("Array.prototype.unshift()")}}
- La méthode {{JSxRef("Array.prototype.concat()")}}
- La méthode {{JSxRef("Array.prototype.splice()")}}
