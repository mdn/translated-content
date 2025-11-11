---
title: "Array : méthode forEach()"
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`forEach()`** des instances de {{JSxRef("Array")}} exécute une fonction fournie une fois pour chaque élément du tableau.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.forEach()")}}

```js interactive-example
const array = ["a", "b", "c"];

array.forEach((element) => console.log(element));

// Sortie attendue : "a"
// Sortie attendue : "b"
// Sortie attendue : "c"
```

## Syntaxe

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : La fonction à exécuter pour chaque élément du tableau. Sa valeur de retour est ignorée. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément en cours de traitement dans le tableau.
    - `index`
      - : L'indice de l'élément en cours de traitement dans le tableau.
    - `array`
      - : Le tableau sur lequel la méthode `forEach()` a été appelée.
- `thisArg` {{Optional_Inline}}
  - : La valeur à utiliser comme `this` lors de l'exécution de la fonction `callbackFn`. Voir [les méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives).

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Description

La méthode `forEach()` est une [méthode itérative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives). Elle appelle la fonction `callbackFn` fournie une fois pour chaque élément du tableau, dans l'ordre croissant des indices. Contrairement à {{JSxRef("Array/map", "map()")}}, `forEach()` renvoie toujours {{JSxRef("undefined")}} et n'est pas chaînable. L'usage typique est d'exécuter des effets de bord à la fin d'une chaîne. Consultez la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

La fonction `callbackFn` est appelée uniquement pour les indices du tableau qui ont une valeur attribuée. Elle n'est pas appelée pour les cases vides dans [un tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

La méthode `forEach()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_génériques_sur_les_tableaux). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

Il n'existe aucun moyen d'arrêter ou de sortir d'une boucle `forEach()` autrement qu'en lançant une exception. Si vous avez besoin de ce comportement, la méthode `forEach()` n'est pas adaptée.

L'arrêt anticipé peut être réalisé avec des instructions de boucle comme [`for`](/fr/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of) et [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in). Les méthodes de tableau comme {{JSxRef("Array/every", "every()")}}, {{JSxRef("Array/some", "some()")}}, {{JSxRef("Array/find", "find()")}}, et {{JSxRef("Array/findIndex", "findIndex()")}} arrêtent aussi l'itération dès que ce n'est plus nécessaire.

`forEach()` attend une fonction synchrone — elle n'attend pas les promesses. Veillez à bien comprendre les implications de l'utilisation de promesses (ou de fonctions asynchrones) comme fonctions de rappel de `forEach`.

```js
const notes = [5, 4, 5];
let somme = 0;

const fonctionSommeAsync = async (a, b) => a + b;

notes.forEach(async (note) => {
  somme = await fonctionSommeAsync(somme, note);
});

console.log(somme);
// Sortie attendue : 14
// Sortie réelle : 0
```

Pour exécuter une série d'opérations asynchrones séquentiellement ou en concurrence, voir la section [composition de promesses](/fr/docs/Web/JavaScript/Guide/Using_promises#composition).

## Exemples

### Conversion d'une boucle `for` en `forEach`

```js
const elements = ["élément 1", "élément 2", "élément 3"];
const elementsCopie = [];

// avant
for (let i = 0; i < elements.length; i++) {
  elementsCopie.push(elements[i]);
}

// après
elements.forEach((element) => {
  elementsCopie.push(element);
});
```

### Afficher le contenu d'un tableau

> [!NOTE]
> Pour afficher le contenu d'un tableau dans la console,
> vous pouvez utiliser {{DOMxRef("console/table_static", "console.table()")}}, qui affiche une version mise en forme du tableau.
>
> L'exemple suivant illustre une autre approche, utilisant
> `forEach()`.

Le code suivant affiche une ligne pour chaque élément d'un tableau&nbsp;:

```js
const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};

// Remarquez que l'indice 2 est ignoré, car il n'y a pas d'élément à cette position dans le tableau.
[2, 5, , 9].forEach(logArrayElements);
// Affiche :
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### Utilisation de `thisArg`

L'exemple (artificiel) suivant met à jour les propriétés d'un objet à partir de chaque entrée du tableau&nbsp;:

```js
class Compteur {
  constructor() {
    this.somme = 0;
    this.compte = 0;
  }
  ajouter(tableau) {
    // Seules les expressions de fonction possèdent leur propre liaison this.
    tableau.forEach(function compterEntree(entree) {
      this.somme += entree;
      ++this.compte;
    }, this);
  }
}

const obj = new Compteur();
obj.ajouter([2, 5, 9]);
console.log(obj.compte); // 3
console.log(obj.somme); // 16
```

Puisque le paramètre `thisArg` (`this`) est fourni à
`forEach()`, il est transmis à `callback` à chaque appel.
La fonction de rappel l'utilise comme valeur de `this`.

> [!NOTE]
> Si la fonction de rappel passée était une
> [fonction fléchée](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
> le paramètre `thisArg` pourrait être omis,
> car toutes les fonctions fléchées lient lexicalement la valeur de {{JSxRef("Operators/this", "this")}}.

### Fonction de copie d'objet

Le code suivant crée une copie d'un objet donné.

Il existe différentes manières de copier un objet. Ce qui suit n'est qu'une façon de faire et est présenté pour expliquer le fonctionnement de `Array.prototype.forEach()` en utilisant les fonctions utilitaires `Object.*`.

```js
const copie = (objet) => {
  const copie = Object.create(Object.getPrototypeOf(objet));
  const nomsProp = Object.getOwnPropertyNames(objet);
  nomsProp.forEach((nom) => {
    const desc = Object.getOwnPropertyDescriptor(objet, nom);
    Object.defineProperty(copie, nom, desc);
  });
  return copie;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copie(obj1); // obj2 est identique à obj1 maintenant
```

### Aplatir un tableau

L'exemple suivant est uniquement présent à des fins d'apprentissage. Si vous souhaitez aplatir un tableau en utilisant des méthodes intégrées, vous pouvez utiliser {{JSxRef("Array.prototype.flat()")}}.

```js
const aplatir = (arr) => {
  const resultat = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      resultat.push(...aplatir(item));
    } else {
      resultat.push(item);
    }
  });
  return resultat;
};

// Utilisation
const imbrique = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(aplatir(imbrique)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Utilisation du troisième argument de `callbackFn`

L'argument `array` est utile si vous souhaitez accéder à un autre élément du tableau, en particulier lorsque vous n'avez pas de variable existante qui fait référence au tableau. L'exemple suivant utilise d'abord `filter()` pour extraire les valeurs positives, puis utilise `forEach()` pour afficher ses voisins.

```js
const nombres = [3, -1, 1, 4, 1, 5];
nombres
  .filter((num) => num > 0)
  .forEach((num, idx, arr) => {
    // Sans l'argument arr, il n'y a aucun moyen d'accéder facilement au tableau intermédiaire sans le stocker dans une variable.
    console.log(arr[idx - 1], num, arr[idx + 1]);
  });
// undefined 3 1
// 3 1 4
// 1 4 1
// 4 1 5
// 1 5 undefined
```

### Utilisation de `forEach()` sur les tableaux creux

```js-nolint
const tableauCreux = [1, 3, /* vide */, 7];
let nombreAppelsCallback = 0;

tableauCreux.forEach((element) => {
  console.log({ element });
  nombreAppelsCallback++;
});

console.log({ nombreAppelsCallback });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { nombreAppelsCallback: 3 }
```

La fonction de rappel n'est pas appelée pour la valeur manquante à l'indice 2.

### Appel de `forEach()` sur des objets ressemblant à des tableaux

La méthode `forEach()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignoré par forEach() car length vaut 3
};
Array.prototype.forEach.call(objetSimilaireTableau, (x) => console.log(x));
// 2
// 3
// 4
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.find()")}}
- La méthode {{JSxRef("Array.prototype.map()")}}
- La méthode {{JSxRef("Array.prototype.filter()")}}
- La méthode {{JSxRef("Array.prototype.every()")}}
- La méthode {{JSxRef("Array.prototype.some()")}}
- La méthode {{JSxRef("TypedArray.prototype.forEach()")}}
- La méthode {{JSxRef("Map.prototype.forEach()")}}
- La méthode {{JSxRef("Set.prototype.forEach()")}}
- [Prothèse d'émulation de `Array.prototype.forEach` dans core-js <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.forEach` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.foreach)
