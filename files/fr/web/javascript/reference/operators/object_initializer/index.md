---
title: Initialisateur d'objet
slug: Web/JavaScript/Reference/Operators/Object_initializer
---

{{JsSidebar("Operators")}}

Il est possible d'initialiser un objet en utilisant les notations [`new Object()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object), `Object.create()`, ou grâce à un littéral (appelée initialisateur). Un initialisateur d'objet est une liste contenant plusieurs (éventuellement 0) propriétés, séparées par des virgules, et leurs valeurs associées, cette liste étant entourée d'accolades (`{}`).

{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html")}}

## Syntaxe

```js
var o = {};
var o = { a: "toto", b: 42, c: {} };

var a = "toto",
  b = 42,
  c = {};
var o = { a: a, b: b, c: c };

var o = {
  property: function (paramètres) {},
  get property() {},
  set property(valeur) {},
};
```

### Nouvelles notations ECMAScript 2015 (ES6)

ECMAScript 2015 (ES6) introduit de nouvelles notations. Pour plus d'informations sur la compatibilité de ces notations avec les différents environnements, se référer au tableau de compatibilité ci-après.

```js
// Raccourcis pour les noms de propriétés (ES2015)
var a = "toto",
  b = 42,
  c = {};
var o = { a, b, c };

// Raccourcis pour les noms de méthodes(ES2015)
var o = {
  property(paramètres) {},
};

// Noms calculés pour les propriétés (ES2015)
var prop = "toto";
var o = {
  [prop]: "hey",
  ["tr" + "uc"]: "ho",
};
```

## Description

Un initialisateur d'objet est une expression qui permet de décrire l'initialisation d'un {{jsxref("Object")}}. Les objets sont constitués de propriétés qui permettent de les décrire. Les valeurs des propriétés d'un objet peuvent être construites à partir de [types de données primitifs](/fr/docs/Web/JavaScript/Structures_de_données#Les_valeurs_primitives) ou à partir d'autres objets.

### Créer des objets

On peut créer un objet sans aucune propriété grâce à l'expression suivante :

```js
var objet = {};
```

Cependant, en utilisant un littéral ou un initialisateur, on peut créer des objets disposant de propriétés rapidement. Il suffit d'inscrire une liste de clés-valeurs séparées par des virgules. Le fragment de code qui suit permet de créer un objet avec trois propriétés identifiées par les clés `"toto"`, `"âge"` et `"machin"`. Les valeurs respectives de ces différentes propriétés sont : la chaîne de caractères `"truc"`, le nombre `42` et un autre objet.

```js
var object = {
  toto: "truc",
  âge: 42,
  machin: { maProp: 12 },
};
```

### Accéder à des propriétés

Après la création d'un objet, vous pourrez avoir besoin de consulter ou de modifier ses propriétés. Il est possible d'accéder aux propriétés d'un objet en utilisant un point ou des crochets. Voir la page sur les [accesseurs de propriétés](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres) pour plus d'information.

```js
object.toto; // "truc"
object["âge"]; // 42

object.toto = "machin";
```

### Définir des propriétés

On a déjà vu comment on pouvait utiliser la syntaxe de l'initialisateur pour définir des propriétés. Il arrive souvent de vouloir utiliser des variables comme propriétés d'un objet. C'est pourquoi on peut trouver le code suivant :

```js
var a = "toto",
  b = 42,
  c = {};

var o = {
  a: a,
  b: b,
  c: c,
};
```

Avec ECMAScript 2015 (ES6), on peut utiliser une notation plus courte pour un résultat égal :

```js
var a = "toto",
  b = 42,
  c = {};

// Raccourcis sur les noms de propriétés (ES2015)
var o = { a, b, c };

// Autrement dit
console.log(o.a === { a }.a); // true
```

#### Les duplicatas et les noms de propriétés

Si le même nom est utilisé plusieurs fois pour différentes propriétés, ce sera la dernière propriété qui sera prise en compte :

```js
var a = { x: 1, x: 2 };
console.log(a); // { x: 2}
```

Le mode strict d'ECMAScript 5 renvoyait une exception {{jsxref("SyntaxError")}} lorsque plusieurs propriétés avaient le même nom. ECMAScript 2015 (ES6) permettant de créer des propriétés avec des noms qui sont calculés à l'exécution, cette restriction a été retirée.

```js
function vérifierSémantiqueES2015() {
  "use strict";
  try {
    ({ prop: 1, prop: 2 });

    // Aucune erreur, la sémantique en cours consiste à accepter les propriétés dupliquées
    return true;
  } catch (e) {
    // Une erreur est renvoyée : les duplicatas sont interdits en mode strict
    return false;
  }
}
```

### Définitions de méthodes

Une propriété d'un objet peut être une [function](/fr/docs/Web/JavaScript/Reference/Functions), un [accesseur](/fr/docs/Web/JavaScript/Reference/Functions/get) ou un [mutateur](/fr/docs/Web/JavaScript/Reference/Functions/set) :

```js
var o = {
  property: function (paramètres) {},
  get property() {},
  set property(valeur) {},
};
```

Avec ECMAScript 2015 (ES6), une notation raccourcie permet de ne plus utiliser le mot-clé "`function`".

```js
// Raccourci pour les noms de méthodes (ES2015)
var o = {
  property(paramètres) {},
  *generator() {},
};
```

Ou encore :

```js
var o = {
  *generator() {
    ...
  }
};
```

En utilisant uniquement ECMAScript 5, on aurait écrit :

_(Il n'y a pas de function génératrice en ECMAScript5, mais l'exemple permet de comprendre l'évolution de la syntaxe) :_

```js
var o = {
  generator: function* () {},
};
```

Pour plus d'informations et d'exemples sur les méthodes, voir la page concernant les [définitions de méthode](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Noms de propriétés calculés

Avec ECMAScript 2015 (ES6), on peut utiliser un initialisateur et avoir des noms de propriétés qui soient calculés lors de l'exécution. Ainsi, en plaçant une expression entre crochets `[]`, celle-ci sera calculée pour déterminer le nom de la propriété. Cette notation est la symétrique des crochets utilisés pour accéder aux propriétés. Il est désormais possible d'utiliser cette notation dans les littéraux objets :

```js
// Calcul des noms de propriétés (ES2015)
var i = 0;
var a = {
  ["toto" + ++i]: i,
  ["toto" + ++i]: i,
  ["toto" + ++i]: i,
};

console.log(a.toto1); // 1
console.log(a.toto2); // 2
console.log(a.toto3); // 3

var param = "taille";
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};

console.log(config); // { taille: 12, mobileTaille: 4 }
```

### Décomposition des propriétés

La proposition de la décomposition des propriétés à ECMAScript (au niveau 4, finalisée) vise à permettre la décomposition des propriétés dans les littéraux objets. Cela permet de copier les propriétés énumérables directes à partir d'un objet source vers un nouvel objet.

Le clonage superficiel (sans rattacher le prototype) ou la fusion d'objets pourra désormais être écrite de façon plus concise qu'avec {{jsxref("Object.assign()")}}.

```js
var obj1 = { toto: "truc", x: 42 };
var obj2 = { toto: "bidule", y: 13 };

var clone = { ...obj1 };
// Object { toto: 'truc', x: 42 }

var fusion = { ...obj1, ...obj2 };
// Object { toto: 'bidule', x: 42, y: 13 };
```

On notera que la méthode {{jsxref("Object.assign()")}} déclenche [les mutateurs](/fr/docs/Web/JavaScript/Reference/Fonctions/set), ce qui n'est pas le cas de l'opérateur de décomposition.

### Changement de prototype

Définir une propriété avec la syntaxe `__proto__: valeur` ou `"__proto__": valeur` ne permet pas de créer une propriété avec le nom `__proto__`. Si la valeur fournie est un objet ou est [`null`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/null), cela modifie le `[[Prototype]]` de l'objet. (Si la valeur fournie n'est pas un objet ou n'est pas null, l'objet ne sera pas modifié.)

```js
var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { __proto__: protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: "not an object or null" };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty("__proto__"));
```

On ne peut modifier le prototype qu'une seule fois pour une même notation littérale. Toute tentative pour modifier le prototype plusieurs fois renverra une erreur de syntaxe.

Les définitions de propriétés qui n'utilisent pas les deux points ne permettent pas de modifier le prototype, elles définieront une propriété de façon classique.

```js
var __proto__ = "variable";

var obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty("__proto__"));
assert(obj1.__proto__ === "variable");

var obj2 = {
  __proto__() {
    return "hello";
  },
};
assert(obj2.__proto__() === "hello");

var obj3 = { ["__prot" + "o__"]: 17 };
assert(obj3.__proto__ === 17);
```

## Notation littérale et JSON

La notation utilisant un littéral objet n'est pas identique à celle utilisée par la **J**ava**S**cript **O**bject **N**otation ([JSON](/fr/docs/JSON)). Bien que ces notations se ressemblent, il existe certaines différences :

- JSON ne permet de définir des propriétés qu'en utilisant la syntaxe `"propriété": valeur`. Le nom de la propriété doit être entouré de double-quotes et la définition de la propriété ne peut pas être raccourcie.
- En JSON les valeurs ne peuvent être uniquement que des chaînes de caractères, des nombres, des tableaux, `true`, `false`, `null`, ou tout autre objet (JSON).
- Une valeur de fonction (voir le paragraphe "Méthodes" ci-avant) ne peut pas être affectée comme valeur en JSON.
- Les objets {{jsxref("Date")}} seront convertis en chaînes de caractères avec {{jsxref("JSON.parse()")}}.
- {{jsxref("JSON.parse()")}} rejètera les noms de propriétés calculés et renverra une erreur dans ce cas.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Accesseurs de propriétés](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres)
- [`get`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_get) / [`set`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_set)
- [Définitions de méthode](/fr/docs/Web/JavaScript/Reference/Fonctions/Définition_de_méthode)
- [Grammaire lexicale](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale) de JavaScript
