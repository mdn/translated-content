---
title: "Array : méthode pop()"
short-title: pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`pop()`** des instances de {{JSxRef("Array")}} supprime le **dernier** élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.pop()")}}

```js interactive-example
const plants = ["brocoli", "chou-fleur", "chou", "chou frisé", "tomate"];

console.log(plants.pop());
// Résultat attendu : "tomate"

console.log(plants);
// Résultat attendu : Array ["brocoli", "chou-fleur", "chou", "chou frisé"]

plants.pop();

console.log(plants);
// Résultat attendu : Array ["brocoli", "chou-fleur", "chou"]
```

## Syntaxe

```js-nolint
pop()
```

### Paramètres

Aucun.

### Valeur de retour

L'élément retiré du tableau&nbsp;; {{JSxRef("undefined")}} si le tableau est vide.

## Description

La méthode `pop()` supprime le dernier élément d'un tableau et retourne cette valeur. Si vous appelez `pop()` sur un tableau vide, elle retourne {{JSxRef("undefined")}}.

La méthode {{JSxRef("Array.prototype.shift()")}} possède un comportement analogue à `pop()`, mais appliqué au premier élément d'un tableau.

La méthode `pop()` est une méthode mutatrice. Elle modifie la longueur et le contenu de `this`. Si vous souhaitez que la valeur de `this` reste identique mais retourner un nouveau tableau sans le dernier élément, vous pouvez utiliser [`arr.slice(0, -1)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

La méthode `pop()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend uniquement que la valeur de `this` possède une propriété `length` et des propriétés indexées par des entiers. Bien que les chaînes de caractères ressemblent aussi à des tableaux, cette méthode ne peut pas leur être appliquée car elles sont immuables.

## Exemples

### Supprimer le dernier élément d'un tableau

Le code suivant crée le tableau `mesPoissons` qui contient quatre éléments puis supprime le dernier élément.

```js
const mesPoissons = ["ange", "clown", "mandarin", "esturgeon"];

const retire = mesPoissons.pop();

console.log(mesPoissons); // ['ange', 'clown', 'mandarin']

console.log(retire); // 'esturgeon'
```

### Appeler `pop()` sur un objet qui n'est pas un tableau

La méthode `pop()` lit la propriété `length` de `this`. Si la [longueur normalisée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#normalisation_de_la_propriété_length) est 0, `length` est à nouveau définie à `0` (elle peut être négative ou `undefined` auparavant). Sinon, la propriété à `length - 1` est retournée et [supprimée](/fr/docs/Web/JavaScript/Reference/Operators/delete).

```js
const objetSimilaireTableau = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.pop.call(objetSimilaireTableau));
// 4
console.log(objetSimilaireTableau);
// { length: 2, unrelated: 'foo' }

const plainObj = {};
// Il n'y a pas de propriété length, donc la longueur est 0
Array.prototype.pop.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

### Utiliser un objet comme un tableau

`push` et `pop` sont volontairement génériques, et nous pouvons en tirer parti — comme le montre l'exemple suivant.

Notez que dans cet exemple, nous ne créons pas de tableau pour stocker une collection d'objets. À la place, nous stockons la collection sur l'objet lui-même et utilisons `call` sur `Array.prototype.push` et `Array.prototype.pop` pour faire croire à ces méthodes que nous manipulons un tableau.

```js
const collection = {
  length: 0,
  ajouterElement(...elements) {
    // obj.length sera incrémenté automatiquement
    // à chaque ajout d'un élément.

    // Retourne ce que push retourne, c'est-à-dire
    // la nouvelle valeur de la propriété length.
    return [].push.call(this, ...elements);
  },
  supprimerElement() {
    // obj.length sera décrémenté automatiquement
    // à chaque suppression d'un élément.

    // Retourne ce que pop retourne, c'est-à-dire
    // l'élément supprimé.
    return [].pop.call(this);
  },
};

collection.ajouterElement(10, 20, 30);
console.log(collection.length); // 3
collection.supprimerElement();
console.log(collection.length); // 2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.push()")}}
- La méthode {{JSxRef("Array.prototype.shift()")}}
- La méthode {{JSxRef("Array.prototype.unshift()")}}
- La méthode {{JSxRef("Array.prototype.concat()")}}
- La méthode {{JSxRef("Array.prototype.splice()")}}
