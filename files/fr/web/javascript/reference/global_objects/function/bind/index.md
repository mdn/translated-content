---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
tags:
  - ECMAScript 2015
  - ECMAScript 5
  - Function
  - JavaScript
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Function/bind
original_slug: Web/JavaScript/Reference/Objets_globaux/Function/bind
---
{{JSRef}}

La méthode **`bind()`** crée une nouvelle fonction qui, lorsqu'elle est appelée, a pour contexte [`this`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this) la valeur passée en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.

{{EmbedInteractiveExample("pages/js/function-bind.html", "taller")}}

## Syntaxe

```js
let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...]]])
```

### Paramètres

- `thisArg`
  - : La valeur que l'on doit passer est le paramètre `this` de la fonction cible _`func`_ quand la fonction est appelée. La valeur est ignorée si la fonction liée est construite en utilisant l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Lorsque vous utilisez `bind` pour créer une fonction (fournie comme un rappel) dans un `setTimeout`, toute valeur primitive passée comme `thisArg` est convertie en objet. Si aucun argument n'est fourni dans `bind`, le `this` de cette fonction est traité comme le `thisArg` de la nouvelle fonction.
- `arg1, arg2, ...` {{optional_inline}}
  - : Arguments à faire précéder aux arguments fournis à la fonction liée lors de l'invocation de _`func`_.

### Valeur de retour

Une copie de la fonction fournie avec la valeur `this` indiquée et les arguments initiaux fournis.

## Description

La fonction `bind()` crée une nouvelle **fonction liée**, qui est un _objet de fonction exotique_ (un terme de l'ECMAScript 2015) qui enveloppe l'objet de fonction original. L'appel de la fonction liée entraîne généralement l'exécution de sa fonction enveloppée.

Une fonction liée possède les propriétés internes suivantes :

- **`[[BoundTargetFunction]]`**
  - : L'objet de fonction enveloppé
- **`[[BoundThis]]`**
  - : La valeur qui est toujours transmise est la valeur `this` lors de l'appel de la fonction enveloppée.
- **`[[BoundArguments]]`**
  - : Une liste de valeurs dont les éléments sont utilisés comme premiers arguments pour tout appel à la fonction enveloppée.
- **`[[Call]]`**
  - : Exécute le code associé à cet objet. Invoqué par une expression d'appel de fonction. Les arguments de la méthode interne sont constitués d'une valeur `this` et d'une liste contenant les arguments passés à la fonction par une expression d'appel.

Lorsqu'une fonction liée est appelée, elle appelle la méthode interne `[[Call]]` dans `[[BoundTargetFunction]]`, avec les arguments suivants `Call(boundThis, ...args)`. _Là où_ `boundThis` est `[[BoundThis]]`, `args` est `[[BoundArguments]]`, suivi des arguments passés par l'appel de fonction.

Une fonction liée peut également être construite à l'aide de l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Ce faisant, on agit comme si la fonction cible avait été construite. La valeur fournie `this` est ignorée, tandis que des arguments préparés sont fournis à la fonction émulée.

## Exemples

### Créer une fonction liée

La façon la plus simple d'utiliser `bind()`est de faire une fonction qui, peu importe la façon dont elle est appellée, le sera avec une certaine valeur `this` donnée.

Une erreur courante lorsqu'on débute en JavaScript est d'extraire une méthode d'un objet, puis plus tard d'appeler cette méthode depuis un objet et de s'attendre à utiliser l'objet original en tant que valeur de `this` (par exemple en utilisant cette méthode dans un _callback_). Sans précaution, cependant, l'objet original est perdu. Créer une fonction liée depuis la méthode, en utilisant l'objet original, résout simplement le problème :

```js
this.x = 9; // en dehors de tout contexte,
            // pour un navigateur, this est
            // l'objet window
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, car ici, this fait référence à l'objet global

// On crée une nouvelle fonction à laquelle on lie module en
// tant que 'this'
var boundGetX = getX.bind(module);
boundGetX(); // 81
```

### Fonctions partiellement appliquées

Dans l'exemple suivant, on utilise `bind()` afin de créer une fonction avec des arguments initiaux prédéfinis. Ces arguments, s'il y en a, suivent le `this` fourni et sont ensuite insérés au début des arguments passés à la fonction cible, suivis par les arguments passés à la fonction liée au moment où celle-ci est appelée.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Créer une fonction avec un argument prédéfini
var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]


function sommeArguments(arg1, arg2){
  return arg1 + arg2;
}

var ajouter37 = sommeArguments.bind(null, 37);

var resultat = ajouter37(5); // 37 + 5 = 42
```

### Utiliser `bind` avec `setTimeout`

Par défaut à l'intérieur de {{domxref("window.setTimeout()")}}, le mot-clé `this` sera attribué à l'objet {{domxref("window")}} (ou l'objet `global`). Lorsqu'on travaille avec des méthodes de classe utilisant `this` qui se réfère à l'instance, on peut lier `this` de façon explicite afin d'être certain de manipuler l'instance.

```js
function Fleur() {
  this.nbPétales = Math.floor( Math.random() * 12 ) + 1;
}

// On déclare floraison après un délai d'une seconde
Fleur.prototype.floraison = function() {
  window.setTimeout( this.declare.bind( this ), 1000 );
};

Fleur.prototype.declare = function() {
  console.log('Je suis une fleur avec ' +
     this.nbPétales + ' pétales !');
};

var fleur = new Fleur();
fleur.floraison();
// Après environ 1 seconde, on déclenche la méthode declare
```

### Les fonctions liées utilisées en tant que constructeurs

> **Attention :** Cette section illustre des capacités marginales et des cas aux limites concernant l'usage de la méthode bind(). Les méthodes montrées ci-après ne sont pas les façons les plus propres de faire les choses et ne devraient pas être utilisées en production.

Les fonctions liées sont automatiquement disponibles à l'usage pour toutes les instances initialisées avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}} sur la fonction cible. Quand une fonction liée est utilisée pour construire une valeur, le `this` fourni est ignoré. Cependant, les arguments fournis sont toujours préremplis lors de l'appel au constructeur :

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + "," + this.y;
};

var p = new Point(1, 2);
p.toString(); // "1,2"


var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0 /* x */);
// non supporté dans le polyfill ci dessous,
// fonctionne avec le bind natif :
var YAxisPoint = Point.bind(null,0 /* x */);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); //  "0,5"

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // false
```

On notera qu'il n'y a rien à faire de particulier pour pouvoir utiliser {{jsxref("Opérateurs/L_opérateur_new", "new")}} sur votre fonction liée. Le corollaire est qu'il n'y a rien à faire de plus pour créer une fonction liée qui soit appelée sans préfixe, même s'il est préférable d'appeler une fonction liée uniquement avec le mot-clé {{jsxref("Opérateurs/L_opérateur_new", "new")}}.

```js
// Cet exemple fonctionne dans votre console JavaScript
// ...(sous réserve d'avoir utilisé le code précédent)

// Peut toujours être appelé comme une fonction normale
// (même si ce n'est généralement pas l'effet )
YAxisPoint(13);

emptyObj.x + "," + emptyObj.y; // "0,13"
```

Si on souhaite supporter le cas où la fonction liée d'une fonction liée en utilisant seulement `new`, ou juste en l'appellant, la fonction cible doit outrepasser cette restriction.

### Créer des raccourcis

`bind()` est également utile dans les cas où on souhaite créer un raccourci vers une fonction qui requiert un `this` ayant une certaine valeur.

Si, par exemple, on considère la fonction {{jsxref("Array.prototype.slice")}} et qu'on souhaite l'utiliser pour convertir un objet semblable à un tableau en un objet `array`, on peut créer un raccourci de cette façon :

```js
var slice = Array.prototype.slice;

// ... un peu plus loin

slice.apply(arguments);
```

Avec `bind()`, il est possible de simplifier cela. Dans l'exemple qui suit `slice` est une fonction liée à la fonction {{jsxref("Function.prototype.apply()", "apply()")}} de `Function.prototype`, et `this` défini en tant que fonction {{jsxref("Array.prototype.slice()", "slice()")}} de {{jsxref("Array.prototype")}}. Cela signifie que les appels à la méthode `apply()` peuvent être éliminés :

```js
// pareil que "slice" dans l'exemple précédent
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                           |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------ |
| {{SpecName('ES5.1', '#sec-15.3.4.5', 'Function.prototype.bind')}}                     | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.8.5 |
| {{SpecName('ES2015', '#sec-function.prototype.apply', 'Function.prototype.bind')}} | {{Spec2('ES2015')}}     |                                                        |
| {{SpecName('ESDraft', '#sec-function.prototype.bind', 'Function.prototype.bind')}} | {{Spec2('ESDraft')}} |                                                        |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Function.bind")}}

## Voir aussi

- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Fonctions", "Fonctions et portées de fonctions", "", 1)}}
