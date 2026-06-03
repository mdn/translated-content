---
title: "Function : méthode bind()"
short-title: bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`bind()`** des instances de {{JSxRef("Function")}} crée une nouvelle fonction qui, lorsqu'elle est appelée, appelle cette fonction avec son mot-clé `this` défini sur la valeur fournie, et une séquence d'arguments donnée précédant ceux fournis lors de l'appel de la nouvelle fonction.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Function.prototype.bind()", "taller")}}

```js interactive-example
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // La fonction est invoquée dans le contexte global
// Résultat attendu : undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Résultat attendu : 42
```

## Syntaxe

```js-nolint
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2, /* …, */ argN)
```

### Paramètres

- `thisArg`
  - : La valeur à transmettre en tant que paramètre `this` à la fonction cible `func` lorsque la fonction liée est appelée. Si la fonction n'est pas en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), {{JSxRef("Operators/null", "null")}} et {{JSxRef("Global_Objects/undefined", "undefined")}} seront remplacées par l'objet global, et les valeurs primitives seront converties en objets. La valeur est ignorée si la fonction liée est construite en utilisant l'opérateur {{JSxRef("Operators/new", "new")}}.
- `arg1`, …, `argN` {{Optional_Inline}}
  - : Arguments à faire précéder aux arguments fournis à la fonction liée lors de l'invocation de `func`.

### Valeur de retour

Une copie de la fonction avec la valeur `this` définie et les arguments initiaux (si fournis).

## Description

La fonction `bind()` crée une nouvelle _fonction liée_. Appeler la fonction liée entraîne généralement l'exécution de la fonction qu'elle enveloppe, appelée aussi _fonction cible_. La fonction liée stocke les paramètres passés — qui incluent la valeur de `this` et les premiers arguments — comme état interne. Ces valeurs sont stockées à l'avance, au lieu d'être passées lors de l'appel. On peut généralement voir `const boundFn = fn.bind(thisArg, arg1, arg2)` comme équivalent à `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` pour l'effet lors de l'appel (mais pas lors de la construction de `boundFn`).

Une fonction liée peut être liée à nouveau en appelant `boundFn.bind(thisArg, /* autres arguments */)`, ce qui crée une autre fonction liée `boundFn2`. La nouvelle valeur liée de `thisArg` est ignorée, car la fonction cible de `boundFn2`, qui est `boundFn`, possède déjà un `this` lié. Quand `boundFn2` est appelée, elle appelle `boundFn`, qui à son tour appelle `fn`. Les arguments que `fn` reçoit finalement sont, dans l'ordre&nbsp;: les arguments liés par `boundFn`, ceux liés par `boundFn2`, puis les arguments reçus par `boundFn2`.

```js
"use strict"; // empêcher `this` d'être encapsulé dans l'objet englobant

function journal(...args) {
  console.log(this, ...args);
}
const journalAttache = journal.bind("cette valeur", 1, 2);
const journalAttache2 = journalAttache.bind("cette nouvelle valeur", 3, 4);
journalAttache2(5, 6); // "cette valeur", 1, 2, 3, 4, 5, 6
```

Une fonction liée peut également être construite à l'aide de l'opérateur {{JSxRef("Operators/new", "new")}} si sa fonction cible est constructible. Cela agit comme si la fonction cible avait été construite à la place. Les arguments préfixés sont transmis à la fonction cible comme d'habitude, tandis que la valeur `this` fournie est ignorée (car la construction prépare son propre `this`, comme le montrent les paramètres de {{JSxRef("Reflect.construct")}}). Si la fonction liée est directement construite, {{JSxRef("Operators/new.target", "new.target")}} sera la fonction cible. (Autrement dit, la fonction liée est transparente pour `new.target`.)

```js
class Base {
  constructor(...args) {
    console.log(new.target === Base);
    console.log(args);
  }
}

const BaseAttachee = Base.bind(null, 1, 2);

new BaseAttachee(3, 4); // true, [1, 2, 3, 4]
```

Cependant, une fonction liée ne possède pas la propriété [`prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype), elle ne peut donc pas être utilisée comme classe de base pour [`extends`](/fr/docs/Web/JavaScript/Reference/Classes/extends).

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

Lorsqu'une fonction liée est utilisée comme opérande à droite de [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof), `instanceof` va chercher la fonction cible (qui est stockée en interne dans la fonction liée) et lire sa propriété `prototype`.

```js
class Base {}
const BaseAttachee = Base.bind(null, 1, 2);
console.log(new Base() instanceof BaseAttachee); // true
```

La fonction liée possède les propriétés suivantes&nbsp;:

- [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : La longueur (`length`) de la fonction cible moins le nombre d'arguments liés (sans compter le paramètre `thisArg`), 0 étant la valeur minimale.
- [`name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Le nom (`name`) de la fonction cible précédé du préfixe `"bound"`.

La fonction liée hérite également de la [chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) de la fonction cible. Cependant, elle ne possède pas d'autres propriétés propres de la fonction cible (comme les [propriétés statiques](/fr/docs/Web/JavaScript/Reference/Classes/static) si la fonction cible est une classe).

## Exemples

### Créer une fonction liée

La façon la plus simple d'utiliser `bind()` est de faire une fonction qui, peu importe la façon dont elle est appellée, le sera avec une certaine valeur `this` donnée.

Une erreur courante lorsqu'on débute en JavaScript est d'extraire une méthode d'un objet, puis plus tard d'appeler cette méthode depuis un objet et de s'attendre à utiliser l'objet original en tant que valeur de `this` (par exemple en utilisant cette méthode dans un _callback_).

Sans précaution particulière, cependant, l'objet original est généralement perdu. Créer une fonction liée à partir de la fonction, en utilisant l'objet original, résout proprement ce problème&nbsp;:

```js
// Au niveau supérieur, 'this' est lié à 'globalThis' dans les scripts.
this.x = 9;
const module = {
  x: 81,
  getX() {
    return this.x;
  },
};

// Le paramètre 'this' de 'getX' est lié à 'module'.
console.log(module.getX()); // 81

const retrieveX = module.getX;
// Le paramètre 'this' de 'retrieveX' est lié à 'globalThis' en mode non strict.
console.log(retrieveX()); // 9

// On crée une nouvelle fonction à laquelle on lie module en
// tant que 'this'
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81
```

> [!NOTE]
> Si vous exécutez cet exemple en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), le paramètre `this` de `retrieveX` sera lié à `undefined` au lieu de `globalThis`, ce qui fera échouer l'appel à `retrieveX()`.
>
> Si vous exécutez cet exemple dans un module ECMAScript, le `this` de niveau supérieur sera lié à `undefined` au lieu de `globalThis`, ce qui fera échouer l'affectation `this.x = 9`.
>
> Si vous exécutez cet exemple dans un module Node CommonJS, le `this` de niveau supérieur sera lié à `module.exports` au lieu de `globalThis`. Cependant, le paramètre `this` de `retrieveX` sera toujours lié à `globalThis` en mode non strict et à `undefined` en mode strict. Ainsi, en mode non strict (le mode par défaut), l'appel à `retrieveX()` retournera `undefined` car `this.x = 9` écrit dans un objet différent (`module.exports`) de celui que `getX` lit (`globalThis`).

En fait, certaines «&nbsp;médodes&nbsp;» intégrées sont aussi des accesseurs qui retournent des fonctions liées — un exemple notable est [`Intl.NumberFormat.prototype.format()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#utiliser_format_avec_map), qui, lorsqu'on y accède, retourne une fonction liée que vous pouvez directement transmettre comme fonction de rappel.

### Fonctions partiellement appliquées

Une autre utilisation de `bind()` consiste à créer une fonction avec des arguments initiaux prédéfinis.

Ces arguments (le cas échéant) suivent la valeur `this` fournie et sont ensuite insérés au début des arguments transmis à la fonction cible, suivis par les arguments transmis à la fonction liée au moment où elle est appelée.

```js
function list(...args) {
  return args;
}

function sommeArguments(arg1, arg2) {
  return arg1 + arg2;
}

console.log(list(1, 2, 3)); // [1, 2, 3]

console.log(sommeArguments(1, 2)); // 3

// Créer une fonction avec un argument prédéfini
const trenteSeptEnTeteDeListe = list.bind(null, 37);

// Créer une fonction avec un argument prédéfini.
const ajoutertrenteSept = sommeArguments.bind(null, 37);

console.log(trenteSeptEnTeteDeListe()); // [37]
console.log(trenteSeptEnTeteDeListe(1, 2, 3)); // [37, 1, 2, 3]
console.log(ajoutertrenteSept(5)); // 42
console.log(ajoutertrenteSept(5, 10)); // 42
// (le dernier argument 10 est ignoré)
```

### Avec `setTimeout()`

Par défaut, à l'intérieur de {{DOMxRef("Window.setTimeout", "setTimeout()")}}, le mot-clé `this` sera défini sur [`globalThis`](/fr/docs/Web/JavaScript/Reference/Global_Objects/globalThis), qui correspond à {{DOMxRef("window")}} dans les navigateurs. Lorsque vous travaillez avec des méthodes de classe qui nécessitent que `this` fasse référence à des instances de classe, vous pouvez lier explicitement `this` à la fonction de rappel afin de conserver l'instance.

```js
class FleuraisonTardive {
  constructor() {
    this.nbPétales = Math.floor(Math.random() * 12) + 1;
  }
  floraison() {
    // Déclare la floraison après un délai d'une seconde
    setTimeout(this.declare.bind(this), 1000);
  }
  declare() {
    console.log(`Je suis une belle fleur avec ${this.nbPétales} pétales !`);
  }
}

const fleur = new FleuraisonTardive();
fleur.floraison();
// Après environ 1 seconde, on déclenche la méthode declare
```

Vous pouvez également utiliser des [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) à cet effet.

```js
class FleuraisonTardive {
  floraison() {
    // éclare la floraison après un délai d'une seconde
    setTimeout(() => this.declare(), 1000);
  }
}
```

### Les fonctions liées utilisées en tant que constructeurs

Les fonctions liées sont automatiquement disponibles à l'usage pour toutes les instances initialisées avec l'opérateur {{JSxRef("Operators/new", "new")}} sur la fonction cible. Quand une fonction liée est utilisée pour construire une valeur, le `this` fourni est ignoré. Cependant, les arguments fournis sont toujours préremplis lors de l'appel au constructeur&nbsp;:

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'

// Cette version montre que la valeur de thisArg n'a pas d'importance car elle est ignorée
const YAxisPoint = Point.bind(null, 0 /* x */);

const axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true
```

Notez qu'il n'est pas nécessaire de faire quoi que ce soit de particulier pour créer une fonction liée à utiliser avec {{JSxRef("Operators/new", "new")}}. {{JSxRef("Operators/new.target", "new.target")}}, {{JSxRef("Operators/instanceof", "instanceof")}}, {{JSxRef("Operators/this", "this")}} etc. fonctionnent tous comme prévu, comme si le constructeur n'avait jamais été lié. La seule différence est qu'elle ne peut plus être utilisée pour {{JSxRef("Classes/extends", "extends")}}.

Le corollaire est qu'il n'est pas nécessaire de faire quoi que ce soit de particulier pour créer une fonction liée à appeler simplement, même si vous préféreriez que la fonction liée ne soit appelée qu'avec {{JSxRef("Operators/new", "new")}}. Si vous l'appelez sans `new`, le `this` lié n'est soudainement plus ignoré.

```js
const objetVide = {};
const YAxisPoint = Point.bind(objetVide, 0 /* x */);

// Peut toujours être appelé comme une fonction normale
// (même si ce n'est généralement pas souhaitable)
YAxisPoint(13);

// Les modifications apportées à `this` sont maintenant observables de l'extérieur
console.log(objetVide); // { x: 0, y: 13 }
```

Si vous souhaitez restreindre une fonction liée à être appelée uniquement avec {{JSxRef("Operators/new", "new")}}, ou uniquement sans `new`, la fonction cible doit appliquer cette restriction, par exemple en vérifiant que `new.target !== undefined` ou en utilisant une [classe](/fr/docs/Web/JavaScript/Reference/Classes) à la place.

### Lier des classes

L'utilisation de `bind()` sur des classes préserve la plupart des sémantiques de la classe, à l'exception de toutes les propriétés statiques propres à la classe courante qui sont perdues. Cependant, comme la chaîne de prototypes est préservée, vous pouvez toujours accéder aux propriétés statiques héritées de la classe parente.

```js
class Base {
  static baseProp = "base";
}

class Derived extends Base {
  static derivedProp = "derived";
}

const BoundDerived = Derived.bind(null);
console.log(BoundDerived.baseProp); // "base"
console.log(BoundDerived.derivedProp); // undefined
console.log(new BoundDerived() instanceof Derived); // true
```

### Transformer des méthodes en fonctions utilitaires

`bind()` est également utile dans les cas où vous souhaitez transformer une méthode qui nécessite une valeur `this` spécifique en une fonction utilitaire simple qui accepte l'ancien paramètre `this` comme paramètre normal. Cela ressemble à la façon dont fonctionnent les fonctions utilitaires généralistes&nbsp;: au lieu d'appeler `array.map(callback)`, vous utilisez `map(array, callback)`, ce qui vous permet d'utiliser `map` avec des objets ressemblant à des tableaux qui ne sont pas des tableaux (par exemple, [`arguments`](/fr/docs/Web/JavaScript/Reference/Functions/arguments)) sans modifier `Object.prototype`.

Prenons {{JSxRef("Array.prototype.slice()")}}, par exemple, que vous souhaitez utiliser pour convertir un objet ressemblant à un tableau en un vrai tableau. Vous pourriez créer un raccourci comme ceci&nbsp;:

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

Notez que vous ne pouvez pas sauvegarder `slice.call` et l'appeler comme une fonction simple, car la méthode `call()` lit également sa valeur `this`, qui est la fonction qu'elle doit appeler. Dans ce cas, vous pouvez utiliser `bind()` pour lier la valeur de `this` pour `call()`. Dans le code suivant, `slice()` est une version liée de {{JSxRef("Function.prototype.call()")}}, avec la valeur `this` liée à {{JSxRef("Array.prototype.slice()")}}. Cela signifie que les appels supplémentaires à `call()` peuvent être éliminés&nbsp;:

```js
// Identique à "slice" dans l'exemple précédent
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// …

slice(arguments);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Function.prototype.bind` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-function)
- La méthode {{JSxRef("Function.prototype.apply()")}}
- La méthode {{JSxRef("Function.prototype.call()")}}
- {{JSxRef("Functions", "Les fonctions", "", 1)}}
