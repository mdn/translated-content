---
title: "TypeError: Reduce of empty array with no initial value"
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
---

{{jsSidebar("Errors")}}

## Message

```
TypeError: reduce of empty array with no initial value
```

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

En JavaScript, il existe plusieurs fonctions qui permettent de réduire un tableau :

- {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}} ainsi que
- {{jsxref("TypedArray.prototype.reduce()")}}, {{jsxref("TypedArray.prototype.reduceRight()")}}).

Ces fonctions utilisent un argument optionnel `valeurInitiale` (qui sera utilisée comme premier argument pour le premier appel du `callback`). Toutefois, si aucune valeur initiale explicite est fournie, la méthode utilisera le premier élément de l'objet {{jsxref("Array")}} / {{jsxref("TypedArray")}} comme valeur initiale. Cette exception est déclenchée lorsqu'on souhaite réduire un tableau vide car aucune valeur initiale n'a été fournie.

## Exemples

### Exemples invalides

Ce problème se produit lorsqu'on combine une méthode de filtrage ({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}}) qui retire tous les éléments du tableau. Si on applique ensuite une réduction, il n'y aura pas de valeur initiale.

```js example-bad
var ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // cet appel retire tous les éléments
  .reduce((x, y) => x + y); // aucun ne peut alors être utilisé comme valeur initiale
```

Cela peut également se produire si on utilise un sélecteur avec une coquille ou que la liste contient un nombre d'élément inattendu:

```js example-bad
var names = document.getElementsByClassName("names");
var name_list = Array.prototype.reduce.call(
  names,
  (acc, name) => acc + ", " + name,
);
```

### Exemples valides

On peut résoudre ces problèmes de deux façons.

On peut fournir une valeur initiale qui soit l'élément neutre de la réduction (par exemple 0 si on additionne, 1 si on multiplie ou la chaîne vide si on concatène du texte).

```js example-good
var ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // removes all elements
  .reduce((x, y) => x + y, 0); // the initial value is the neutral element of the addition
```

On peut également gérer le cas où le tableau est vide, avant d'appeler `reduce` ou dans le _callback_ après avoir ajouté une valeur initiale.

```js example-good
var names = document.getElementsByClassName("names");

var nameList1 = "";
if (names1.length >= 1)
  nameList1 = Array.prototype.reduce.call(
    names,
    (acc, name) => acc + ", " + name,
  );
// nameList1 == "" lorsque names est vide

var nameList2 = Array.prototype.reduce.call(
  names,
  (acc, name) => {
    if (acc == "")
      // la valeur initiale
      return name;
    return acc + ", " + name;
  },
  "",
);
// nameList2 == "" lorsque names est vide
```

## Voir aussi

- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array")}}
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
