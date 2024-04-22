---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
---

{{JSRef}}

La méthode statique **`Reflect.construct()`** agit comme l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new) sous la forme d'une fonction. Elle est équivalente à `new cible(...args)` et permet d'indiquer un prototype différent.

{{EmbedInteractiveExample("pages/js/reflect-construct.html")}}

## Syntaxe

```js
Reflect.construct(cible, listeArguments[, newCible])
```

### Paramètres

- `cible`
  - : La fonction cible à appeler.
- `listeArguments`
  - : Un objet semblable à un tableau définissant les arguments à passer à `cible` lors de l'appel.
- `newCible` {{optional_inline}}
  - : Le constructeur dont le prototype devrait être utilisé. Voir également l'opérateur [`new.target`](/fr/docs/Web/JavaScript/Reference/Opérateurs/new.target). Si `newCible` n'est pas présent, c'est `cible` qui sera utilisé.

### Valeur de retour

Un nouvelle instance de la cible indiquée, créée en l'appelant comme un constructeur (ou en appelant `newCible` si elle est fournie) avec les arguments fournis.

### Exceptions levées

Une exception {{jsxref("TypeError")}} si `cible` ou `newCible` ne sont pas des constructeurs.

## Description

`Reflect.construct()` permet d'appeler un constructeur avec un nombre d'arguments variable (ce qui peut également être fait avec [l'opérateur de décomposition](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateur_de_décomposition) et l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new)).

```js
var obj = new Toto(...args);
var obj = Reflect.construct(Toto, args);
```

## Exemples

### Utiliser `Reflect.construct()`

```js
var d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

### Utiliser le paramètre `newCible`

Pour plus d'informations sur la création de sous-classes, voir les [classes](/fr/docs/Web/JavaScript/Reference/Classes) et l'opérateur [`new.target`](/fr/docs/Web/JavaScript/Reference/Opérateurs/new.target).

```js
function unConstructeur() {}
var résultat = Reflect.construct(Array, [], unConstructeur);

Reflect.getPrototypeOf(résultat); // unConstructeur.prototype
Array.isArray(résultat); // true
```

### Une comparaison entre `Reflect.construct()` et `Object.create()`

Avant l'apparition de `Reflect`, on pouvait construire des objets avec une combinaison donnée de consttructeur et de prototype grâce à {{jsxref("Object.create()")}}.

```js
function MaClasseA() {
  this.name = "A";
}

function MaClasseB() {
  this.name = "B";
}

// Avec cette instruction :
var obj1 = Reflect.construct(MaClasseA, args, MaClasseB);

// on aura le même résultat qu'avec
var obj2 = Object.create(MaClasseB.prototype);
MaClasseA.apply(obj2, args);

console.log(obj1.name); // 'A'
console.log(obj2.name); // 'A'

console.log(obj1 instanceof MaClasseA); // false
console.log(obj2 instanceof MaClasseA); // false

console.log(obj1 instanceof MaClasseB); // true
console.log(obj2 instanceof MaClasseB); // true
```

Toutefois, si les résultats sont identiques, il y a une différence notable. Lorsqu'on utilise `Object.create()` et `Function.prototype.apply()`, l'opérateur `new.target` pointe vers `undefined` dans la fonction utilisée comme constructeur car le mot-clé `new` n'est pas utilisé à la création de l'objet.

Mais quand on appelle `Reflect.construct()`, `new.target` pointe vers la valeur fournie par `newCible` si ce dernier est fourni ou vers `cible` sinon.

```js
function MaClasseA() {
  console.log("MaClasseA");
  console.log(new.target);
}
function MaClasseB() {
  console.log("MaClasseB");
  console.log(new.target);
}

var obj1 = Reflect.construct(MaClasseA, args);
// Résultat :
//   MaClasseA
//   function MaClasseA { ... }

var obj2 = Reflect.construct(MaClasseA, args, MaClasseB);
// Résultat :
//   MaClasseA
//   function MaClasseB { ... }

var obj3 = Object.create(MaClasseB.prototype);
MaClasseA.apply(obj3, args);
// Résultat :
//     MaClasseA
//     undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Reflect")}}
- [`new`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new)
- [`new.target`](/fr/docs/Web/JavaScript/Reference/Opérateurs/new.target)
