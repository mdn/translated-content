---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
---

{{JSRef}}

La méthode **`forEach()`** permet d'exécuter une fonction donnée sur chaque élément du tableau.

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## Syntaxe

```js
arr.forEach(callback);
arr.forEach(callback, thisArg);
```

### Paramètres

- `callback`

  - : La fonction à utiliser pour chaque élément du tableau. Elle prend en compte trois arguments :

    - `valeurCourante`
      - : La valeur de l'élément du tableau en cours de traitement.
    - `index` {{optional_inline}}
      - : L'indice de l'élément du tableau en cours de traitement.
    - `array` {{optional_inline}}
      - : Le tableau sur lequel la méthode `forEach` est appliquée.

- `thisArg` {{optional_inline}}
  - : Paramètre optionnel. La valeur à utiliser pour `this` lors de l'exécution de `callback`.

### Valeur de retour

{{jsxref("undefined")}}.

## Description

`forEach()` exécute la fonction `callback` une fois pour chaque élément du tableau, dans l'ordre croissant des indices. Cette fonction n'est pas appelée pour les indices pour lesquels les éléments ont été supprimés ou qui n'ont pas été définis. Attention, en revanche elle est appelée pour les éléments qui sont présents et qui valent {{jsxref("undefined")}}.

`callback` est appelé avec trois arguments :

- la valeur de l'élément
- l'index de l'élément
- le tableau utilisé

Si un paramètre `thisArg` est fourni à la méthode `forEach`, il sera utilisé en tant que valeur `this` pour chaque appel de `callback`. Sinon, ce sera la valeur `undefined` qui sera utilisée comme valeur `this`. La valeur `this` finalement prise en compte par la fonction `callback` est déterminée selon [les règles usuelles pour déterminer la valeur de `this` utilisée dans une fonction](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this).

L'ensemble des éléments traités par `forEach` est défini avant le premier appel à `callback`. Les éléments ajoutés au tableau après que l'appel à `forEach` ait commencé ne seront pas visités par `callback`. Si des éléments déjà présents dans le tableau sont modifiés, leur valeur telle qu'elle est passée au `callback` sera la valeur au moment du passage du `forEach` ; les éléments supprimés ne sont pas parcourus. Voir [l'exemple ci-après](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach#Attention_aux_modifications_en_cours).

`forEach()` exécute la fonction `callback` une fois pour chaque élément. À la différence de {{jsxref("Array.prototype.map()", "map()")}} ou de {{jsxref("Array.prototype.reduce()", "reduce()")}} il renvoie toujours la valeur {{jsxref("undefined")}} et ne peut donc pas être « enchaîné ». Généralement, l'effet voulu est de déclencher des effets de bord en fin de chaîne.

`forEach()` ne modifie pas le tableau sur lequel elle est appelée, en revanche, la fonction de retour (_callback_) utilisée peut modifier le tableau.

> **Note :** Il n'existe aucun moyen d'arrêter une boucle `forEach` en dehors de lever une exception. Si vous avez besoin d'arrêter la boucle, étudiez plutôt :
>
> - Une boucle [`for`](/fr/docs/Web/JavaScript/Reference/Instructions/for) classique
> - Une boucle [`for...in`](/fr/docs/Web/JavaScript/Reference/Instructions/for...in) ou [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of)
> - {{jsxref("Array.prototype.every()")}}
> - {{jsxref("Array.prototype.some()")}}
> - {{jsxref("Array.prototype.find()")}}
> - {{jsxref("Array.prototype.findIndex()")}}
>
> Les autres méthodes associées aux tableaux ({{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.find()")}}, {{jsxref("Array.prototype.findIndex()")}}) utilisent une fonction de texte qui permet de renvoyer une valeur équivalente à `true` si besoin de poursuivre la boucle.

`forEach` exécute la fonction `callback` une fois pour chaque élément ; contrairement à `every` et `some`, cette méthode renvoie toujours `undefined` et ne peut pas être enchaînée.

## Exemples

### Équivalence entre une boucle `for` et une boucle `forEach`

Voici un fragment de code simple qui utilise une boucle `for`

```js
var items = ["item1", "item2", "item3"];
var copie = [];

for (var i = 0; i < items.length; i++) {
  copie.push(items[i]);
}
```

Et voici un fragment de code équivalent qui utilise `forEach` :

```js
var items = ["item1", "item2", "item3"];
var copie = [];

items.forEach(function (item) {
  copie.push(item);
});
```

### Afficher le contenu d'un tableau

> **Note :** Pour afficher le contenu d'un tableau, on pourra utiliser [`console.table()`](/fr/docs/Web/API/Console/table) qui met en forme les éléments du tableau. L'exemple suivant est laissé à titre d'illustration pour `forEach()`.

Le code suivant affiche une ligne pour chaque élément du tableau :

```js
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### Utiliser l'argument pour `this`

Dans l'exemple qui suit, on met à jour les propriétés d'un objet à partir des éléments d'un tableau :

```js
function Compteur() {
  this.somme = 0;
  this.compte = 0;
}

Compteur.prototype.ajouter = function (tableau) {
  tableau.forEach(function (element) {
    this.somme += element;
    ++this.compte;
  }, this);
  // ^---- On a ajouté l'argument this ici.
};

var obj = new Compteur();
obj.ajouter([2, 5, 9]);
console.log(obj.compte); // 3
console.log(obj.somme); // 16
```

> **Note :** Le paramètre pour `this` est passé à la méthode `forEach()`, à chaque appel du callback, celui-ci sera utilisé comme valeur pour `this`.

> **Note :** Si la fonction passée en argument est [une fonction fléchée](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées), il n'est pas nécessaire d'ajouter le paramètre `this` car les fonctions fléchées utilisent le [`this`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this) fourni par le contexte lexical.

### Stopper une boucle

Le code qui suit utilise la méthode {{jsxref("Array.prototype.every")}} pour afficher le contenu d'un tableau et s'arrêter lorsqu'il atteint une valeur supérieure à `SEUIL_MAX`.

```js
var SEUIL_MAX = 12;
var v = [5, 2, 16, 4, 3, 18, 20];
var res;

res = v.every(function (element, index, array) {
  console.log("élément :", element);
  if (element >= SEUIL_MAX) {
    return false;
  }

  return true;
});
console.log("res:", res);
// affiche :
// élément : 5
// élément : 2
// élément : 16
// res : false

res = v.some(function (element, index, array) {
  console.log("élément:", element);
  if (element >= SEUIL_MAX) {
    return true;
  }

  return false;
});
console.log("res:", res);
// affiche :
// élément : 5
// élément : 2
// élément : 16
// res: true
```

### Une fonction de copie d'objet

Le code qui suit permet de créer une copie d'un objet donné. Il existe différentes façons pour créer une copie d'un objet. L'exemple suivant illustre une de ces façons afin d'expliquer le fonctionnement d'`Array.prototype.forEach` et d'utiliser les fonctions ECMAScript 5 `Object.*`.

```js
function copie(obj) {
  var copie = Object.create(Object.getPrototypeOf(obj));
  var propNames = Object.getOwnPropertyNames(obj);

  propNames.forEach(function (nom) {
    var desc = Object.getOwnPropertyDescriptor(obj, nom);
    Object.defineProperty(copie, nom, desc);
  });

  return copie;
}

var obj1 = { a: 1, b: 2 };
var obj2 = copie(obj1); // obj2 ressemble désormais à obj1
```

### Attention aux modifications en cours

Dans l'exemple qui suit, on utilise un tableau qui contient quatre élément : `"un"`, `"deux"`, `"trois"`, `"quatre"`. Lorsque le parcours du tableau arrive à l'élément `"deux"`, on décale le tableau d'un cran vers les premiers éléments. Aussi, l'élément `"quatre"` est décalé à la place de `"trois"` et `"trois"` est déplacé à la place de `"deux"`. Pour cette raison, lorsque `forEach` poursuit son parcours, elle saute la valeur "trois". Autrement dit, `forEach` n'utilise pas une copie du tableau au moment où elle est appelée, elle manipule le tableau directement. On voit aussi dans cet exemple que les éléments non initialisés ne sont pas traités par la fonction de rappel.

```js
var mots = ["un", "deux", "trois", "quatre"];
mots.forEach(function (mot) {
  console.log(mot);
  if (mot === "deux") {
    mots.shift();
  }
});
// un
// deux
// quatre
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
