---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
l10n:
  sourceCommit: 488e1953f44909cbeb419f0e2133cc28ca069f84
---

{{JSRef}}

La méthode statique **`Reflect.construct()`** agit comme l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new) sous la forme d'une fonction. Elle est équivalente à `new cible(...args)` et permet d'indiquer une valeur différente pour [`new.target`](/fr/docs/Web/JavaScript/Reference/Operators/new.target).

{{InteractiveExample("JavaScript Demo: Reflect.construct()", "taller")}}

```js interactive-example
function func1(a, b, c) {
  this.sum = a + b + c;
}

const args = [1, 2, 3];
const object1 = new func1(...args);
const object2 = Reflect.construct(func1, args);

console.log(object2.sum);
// Expected output: 6

console.log(object1.sum);
// Expected output: 6
```

## Syntaxe

```js-nolint
Reflect.construct(cible, listeArguments)
Reflect.construct(cible, listeArguments, nouvelleCible)
```

### Paramètres

- `cible`
  - : La fonction cible à appeler.
- `listeArguments`
  - : Un objet [semblable à un tableau](/fr/docs/Web/JavaScript/Guide/Indexed_collections#manipuler_des_objets_semblables_à_des_tableaux) définissant les arguments à passer à `cible` lors de l'appel.
- `nouvelleCible` {{optional_inline}}
  - : La valeur de l'expression [`new.target`](/fr/docs/Web/JavaScript/Reference/Operators/new.target) pour `cible`. `cible` indique la _logique_ d'initialisation de l'objet, tandis que `nouvelleCible.prototype` indique le _prototype_ de l'objet construit.

### Valeur de retour

Une nouvelle instance de la cible indiquée, créée en l'appelant comme un constructeur (ou en appelant `nouvelleCible` si elle est fournie) avec les arguments fournis.

### Exceptions levées

- [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Levée si `cible` ou `nouvelleCible` ne sont pas des constructeurs, ou si `listeArguments` n'est pas un objet.

## Description

`Reflect.construct()` fournit la sémantique réflective d'un appel à un constructeur. Autrement dit, `Reflect.construct(cible, listeArguments, nouvelleCible)` est sémantiquement équivalent à&nbsp;:

```js
new cible(...listeArguments);
```

Quand on utilise l'opérateur `new`, `cible`et `nouvelleCible` sont toujours les mêmes constructeurs. `Reflect.construct()` permet quant à elle de passer une valeur différente pour [`new.target`](/fr/docs/Web/JavaScript/Reference/Operators/new.target). Conceptuellement, `nouvelleCible` est la fonction sur laquelle `new` est appelé et `nouvelleCible.prototype` devient le prototype de l'objet construit, tandis que `cible` est le constructeur effectivement exécuté pour l'initialisation de l'objet. On peut par exemple avoir une valeur `new.target` différente du constructeur exécuté pour l'héritage de classe&nbsp;:

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {}

new B(); // "B"
```

`Reflect.construct()` permet d'invoquer un constructeur avec un nombre variable d'arguments (ce qui est également possible lors d'un appel à un constructeur normal grâce à [la syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax)).

```js
const obj = new Toto(...args);
const obj = Reflect.construct(Toto, args);
```

`Reflect.construct()` invoque [la méthode interne](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy#méthodes_internes) `[[Construct]]` de `cible`.

## Exemples

### Utiliser `Reflect.construct()`

```js
const d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

### Utiliser le paramètre `nouvelleCible`

Si le paramètre `nouvelleCible` est utilisé, il modifiera la valeur de `new.target` dans le constructeur. L'objet ainsi construit sera une instance de `nouvelleCible`, pas de `cible`.

```js
function ClasseUne() {
  console.log("ClasseUne exécutée");
  console.log(`new.target vaut ${new.target.name}`);
}

function AutreClasse() {
  console.log("AutreClasse exécutée");
  console.log(`new.target vaut ${new.target.name}`);
}

const obj1 = Reflect.construct(ClasseUne, []);
// Affiche dans la console :
// ClasseUne exécutée
// new.target vaut ClasseUne
console.log(obj1 instanceof ClasseUne); // true

const obj2 = Reflect.construct(ClasseUne, [], AutreClasse);
// Affiche dans la console :
// ClasseUne exécutée
// new.target vaut AutreClasse
console.log(obj2 instanceof AutreClasse); // true
console.log(obj2 instanceof ClasseUne); // false
```

Il n'y a pas de garantie forte quant à la chaîne de prototypes de l'objet construit, car celle-ci dépend de l'implémentation du constructeur. Par exemple, si le constructeur `cible` renvoie un objet, c'est cet objet qui sera l'objet construit, quelle que soit la valeur de `nouvelleCible`. Si `cible` est un proxy avec une trappe pour `construct`, ce sera la trappe qui contrôlera complètement le processus de construction.

```js
function ClasseUne() {
  return { name: "un" };
}

function AutreClasse() {
  return { name: "autre" };
}

const obj1 = Reflect.construct(ClasseUne, [], AutreClasse);
console.log(obj1.name); // 'un'
console.log(obj1 instanceof ClasseUne); // false
console.log(obj1 instanceof AutreClasse); // false
```

Pour être tout à fait valide, `new.target` devrait être une fonction constructrice avec une propriété [`prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function), mais cette règle n'est pas imposée. Si la valeur de la propriété `prototype` n'est pas un objet, l'objet initialisé héritera de `Object.prototype`.

```js
function ClasseUne() {
  console.log("ClasseUne exécutée");
  console.log(`new.target vaut ${new.target.name}`);
}

function AutreClasse() {
  console.log("AutreClasse exécutée");
  console.log(`new.target vaut ${new.target.name}`);
}

AutreClasse.prototype = null;

const obj = Reflect.construct(ClasseUne, [], AutreClasse);
// Affiche dans la console :
// ClasseUne exécutée
// new.target vaut AutreClasse
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

### Une comparaison entre `Reflect.construct()` et `Object.create()`

Avant l'apparition de `Reflect`, on pouvait construire des objets avec une combinaison donnée de consttructeur et de prototype grâce à [`Object.create()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create).

```js
function MaClasseA() {
  this.name = "A";
}

function MaClasseB() {
  this.name = "B";
}

const args = [];
const obj1 = Reflect.construct(MaClasseA, args, MaClasseB);
const obj2 = Object.create(MaClasseB.prototype);
MaClasseA.apply(obj2, args);

console.log(obj1.name); // 'A'
console.log(obj2.name); // 'A'

console.log(obj1 instanceof MaClasseA); // false
console.log(obj2 instanceof MaClasseA); // false

console.log(obj1 instanceof MaClasseB); // true
console.log(obj2 instanceof MaClasseB); // true
```

Toutefois, si les résultats sont identiques, il y a une différence notable. Lorsqu'on utilise `Object.create()` et [`Function.prototype.apply()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), l'opérateur `new.target` pointe vers `undefined` dans la fonction utilisée comme constructeur, car le mot-clé `new` n'est pas utilisé à la création de l'objet (dans cette situation, c'est la même sémantique que [`apply()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply) qui s'applique, pas celle de `construct()`, même si les fonctions normales se comportent presque identiquement).

En revanche, quand on appelle `Reflect.construct()`, `new.target` pointe vers la valeur fournie par `nouvelleCible` si elle indiquée ou vers `cible` sinon.

```js
function MaClasseA() {
  console.log("MaClasseA");
  console.log(new.target);
}
function MaClasseB() {
  console.log("MaClasseB");
  console.log(new.target);
}

const obj1 = Reflect.construct(MaClasseA, args);
// Affiche dans la console :
//   MaClasseA
//   function MaClasseA { ... }

const obj2 = Reflect.construct(MaClasseA, args, MaClasseB);
// Affiche dans la console :
//   MaClasseA
//   function MaClasseB { ... }

const obj3 = Object.create(MaClasseB.prototype);
MaClasseA.apply(obj3, args);
// Affiche dans la console :
//     MaClasseA
//     undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation (<i lang="en">polyfill</i>) pour `Reflect.construct` dans la bibliothèque tierce `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- [`Reflect`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new)
- [`new.target`](/fr/docs/Web/JavaScript/Reference/Operators/new.target)
- [`handler.construct()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct)
