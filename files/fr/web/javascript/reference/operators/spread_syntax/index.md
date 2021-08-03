---
title: Syntaxe de décomposition
slug: Web/JavaScript/Reference/Operators/Spread_syntax
tags:
  - ECMAScript 2015
  - ECMAScript6
  - JavaScript
  - Reference
  - Syntaxe
translation_of: Web/JavaScript/Reference/Operators/Spread_syntax
original_slug: Web/JavaScript/Reference/Opérateurs/Syntaxe_décomposition
---
{{jsSidebar("Operators")}}

La **syntaxe de décomposition** permet d'étendre un itérable (par exemple une expression de tableau ou une chaîne de caractères) en lieu et place de plusieurs arguments (pour les appels de fonctions) ou de plusieurs éléments (pour les littéraux de tableaux) ou de paires clés-valeurs (pour les littéraux d'objets).

{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## Syntaxe

Pour l'utilisation de la décomposition dans les appels de fonction :

    f(...objetIterable);

Pour les littéraux de tableaux :

    [...objetIterable, 4, 5, 6]

Pour les littéraux objets (nouvelle fonctionnalité pour ECMAScript, actuellement en proposition de niveau 4, finalisée) :

    let objClone = { ...obj };

## Exemples

### Utiliser la décomposition dans les appels de fonction

#### Améliorer la fonction `apply()`

Il arrive souvent qu'on veuille utiliser {{jsxref( "Function.prototype.apply")}} avec un tableau parmi les arguments de la fonction utilisée :

```js
function f(x, y, z) { }
var args = [0, 1, 2];
f.apply(null, args);
```

avec la décomposition, on peut désormais écrire :

```js
function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);
```

Tout argument passé à une fonction peut être décomposé grâce à cette syntaxe et cette syntaxe peut être utilisée pour plusieurs arguments.

```js
function f(v, w, x, y, z) { }
var args = [0, 1];
f(-1, ...args, 2, ...[3]);
```

#### Utiliser `apply()` avec l'opérateur `new`

Avec ES5, il n'est pas possible d'utiliser `new` avec `apply` (selon ES5 `apply` effectue un appel `[[Call]]` et pas un appel `[[Construct]]`). Avec ES2015, la syntaxe de décomposition permet de le faire naturellement :

```js
var champsDate = lireChampsDate(maBaseDeDonnées);
var d = new Date(...champsDate);
```

Afin d'utiliser `new` avec un tableau de paramètres, sans utiliser la décomposition, il faudrait l'employer indirectement grâce à une application partielle :

```js
function applyAndNew(constructor, args) {
   function partial () {
      return constructor.apply(this, args);
   };
   if (typeof constructor.prototype === "object") {
      partial.prototype = Object.create(constructor.prototype);
   }
   return partial;
}


function monConstructeur () {
   console.log("arguments.length: " + arguments.length);
   console.log(arguments);
   this.prop1="val1";
   this.prop2="val2";
};

var mesArguments = ["bi", "bop", "bup", null];
var monConstructeurAvecArguments = applyAndNew(monConstructor, mesArguments);

console.log(new monConstructeurAvecArguments);
// (log fourni par monConstructeur):           arguments.length: 4
// (log fourni par monConstructeur):           ["bi", "bop", "bup", null]
// (log fourni par "new monConstructeurAvecArguments"): {prop1: "val1", prop2: "val2"}
```

### Utiliser la décomposition dans les littéraux de tableau

#### Améliorer les littéraux de tableau

À l'heure actuelle, sans la décomposition, si on a un tableau et qu'on souhaite créer un nouveau tableau composé du premier, on ne peut pas utiliser un littéral de tableau et il faut utiliser des fonctions comme {{jsxref("Array.prototype.push", "push()")}}, {{jsxref("Array.prototype.splice", "splice()")}}, {{jsxref("Array.prototype.concat", "concat()")}}, etc. Avec la syntaxe de décomposition, cela devient plus succinct :

```js
var articulations = ['épaules', 'genoux'];
var corps = ['têtes', ...articulations, 'bras', 'pieds'];
// ["têtes", "épaules", "genoux", "bras", "pieds"]
```

Comme pour les fonctions, la syntaxe peut être utilisé plusieurs fois.

#### Copier un tableau

```js
var arr = [1, 2, 3];
var arr2 = [...arr];
arr2.push(4);

console.log(arr2); // [1, 2, 3, 4]
console.log(arr);  // [1, 2, 3] (inchangé)
```

> **Note :** Lorsqu'on utilise la décomposition pour copier un tableau, celle-ci ne s'applique qu'au premier niveau de profondeur. Par conséquent, il peut ne pas convenir pour la copie des tableaux multidimensionnels (des tableaux imbriqués dans d'autres tableaux) comme le montre l’exemple suivant (il en va de même avec {{jsxref("Object.assign()")}} et la décomposition).

```js
var a = [[1], [2], [3]];
var b = [...a]; // b vaut [[1], [2], [3]]

b.shift().shift(); // *a* vaut désormais [[], [2], [3]];
```

#### Une meilleure façon de concaténer des tableaux

{{jsxref("Array.prototype.concat", "concat")}} est souvent utilisé afin de concaténer un tableau à la suite d'une autre. Avec ES5, on aurait le code suivant :

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// On ajoute les éléments de arr2 après ceux de arr1
var nouveauTableau = arr1.concat(arr2);
```

Avec ES2015 et la décomposition, on peut écrire :

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2]; // arr1 vaut [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift", "unshift")}} est souvent utilisé afin d'insérer des valeurs d'un tableau au début d'un autre tableau. Avec ES5, on peut écrire :

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// On ajoute tous les éléments
// de arr2 au début de arr1
Array.prototype.unshift.apply(arr1, arr2) // arr1 vaut [3, 4, 5, 0, 1, 2]
```

Avec ES2015 et la décomposition, on peut écrire :

```js
var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];
arr1 = [...arr2, ...arr1];
// arr1 vaut désormais [1, 2, 3, 4, 5, 6]
```

> **Note :** Il y a une différence avec `unshift()` : ici, on crée un nouveau tableau qui est affecté à `arr1`, le tableau original de `arr1` n'est pas modifié "sur place".

### Utiliser la décomposition avec les littéraux objet

[La proposition relative à la décomposition des propriétés (actuellement au stade de proposition de niveau 4)](https://github.com/tc39/proposal-object-rest-spread) vise à ajouter la décomposition des propriétés pour [les littéraux objets](/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet). Cela permet de copier les propriétés énumérables directement rattachées à un objet source sur un nouvel objet.

Le clonage superficiel (qui ne rattache pas le prototype) ou la fusion d'objets peut donc être obtenue avec une syntaxe plus concise que celle utilisant {{jsxref("Object.assign()")}}.

```js
var profil = { prenom: 'Sarah', profilComplet: false };
var profilMisAJour = { nom: 'Dupont', profilComplet: true };

var clone = { ...profil };
// Object { prenom: 'Sarah', profilComplet: false }

var fusion = { ...profil, ...profilMisAJour };
// Object { prenom: 'Sarah', nom: 'Dupont', profilComplet: true };
```

On notera que {{jsxref("Object.assign()")}} déclenche [les mutateurs](/fr/docs/Web/JavaScript/Reference/Fonctions/set), ce qui n'est pas le cas pour la syntaxe de décomposition.

Il n'est pas possible de remplacer ou de recopier le comportement de la fonction {{jsxref("Object.assign()")}} :

```js
var profil = { prenom: 'Sarah', profilComplet: false };
var profilMisAJour = { nom: 'Dupont', profilComplet: true };

const fusionner = ( ...objets) => {...objets};
var nouveauProfil = fusionner(profil, profilMisAJour);
// Object { 0: { prenom: 'Sarah', profilComplet: false }, 1: { nom: 'Dupont', profilComplet: true } }

var autreNouveauProfil = fusion({}, obj1, obj2);
// Object { 0: {}, 1: { prenom: 'Sarah', profilComplet: false }, 2: { nom: 'Dupont', profilComplet: true } }
```

Dans l'exemple précédent, la syntaxe de décomposition ne fonctionne pas comme on pourrait s'y attendre : il décompose les arguments en un tableau grâce au paramètre du reste.

### La décomposition ne s'applique qu'aux itérables

Pour rappel : la syntaxe de décomposition ne s'applique qu'[aux objets itérables](/fr/docs/Web/JavaScript/Guide/iterable) :

```js
var obj = {"clé1" : "valeur1"};
function maFonction(x) {
  console.log(x); // undefined
}
maFonction(...obj);
var args = [...obj];
console.log(args, args.length) //[] 0
```

### Utiliser la décomposition avec de nombreuses valeurs

Lorsqu'on utilise la décomposition (comme dans les exemples précédents), il faut faire attention à ne pas dépasser le nombre maximal d'arguments du moteur JavaScript. En effet, la décomposition place toutes les valeurs sources dans la pile. Pour plus d'informations, consulter {{jsxref( "Function.prototype.apply")}}.

## Les paramètres du reste

La syntaxe des paramètres du reste ressemble à la syntaxe de décomposition mais est utilisée afin de destructurer des tableaux et des objets. D'une certaine façon, la syntaxe du reste est l'opposée de la décomposition : la première collecte plusieurs éléments et les condense en un seul élément tandis que la seconde explose les éléments. Pour plus d'informations, voir la page sur [les paramètres du reste](/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste).

## Spécifications

| Spécification                                                        | État                         | Commentaires                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES2015', '#sec-array-initializer')}}     | {{Spec2('ES2015')}}     | Définie dans plusieurs sections de la spécification : [initialisateur de tableau](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer), [listes d'argument](http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists). |
| {{SpecName('ES2018', '#sec-object-initializer')}}     | {{Spec2('ES2018')}}     | Définie dans la section sur les [initialisateurs d'objet.](http://www.ecma-international.org/ecma-262/9.0/#sec-object-initializer)                                                                                                                 |
| {{SpecName('ESDraft', '#sec-array-initializer')}}     | {{Spec2('ESDraft')}} | Aucune modification.                                                                                                                                                                                                                               |
| {{SpecName('ESDraft', '#sec-object-initializer')}} | {{Spec2('ESDraft')}} | Aucune modification.                                                                                                                                                                                                                               |

## Compatibilité des navigateurs

{{Compat("javascript.operators.spread")}}

## Voir aussi

- [Paramètres du reste](/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste)
- [Le billet de ES6 en détails sur la décomposition](https://tech.mozfr.org/post/2015/06/05/ES6-en-details-%3A-la-decomposition)
- {{jsxref("Function.prototype.apply()")}}
