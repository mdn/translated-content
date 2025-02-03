---
title: L'opérateur this
slug: Web/JavaScript/Reference/Operators/this
---

{{jsSidebar("Operators")}}

En JavaScript, **le mot-clé `this`** se comporte légèrement différemment des autres langages de programmation. Son comportement variera également légèrement selon qu'on utilise le [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) ou le mode non-strict.

Dans la plupart des cas, la valeur de `this` sera déterminée à partir de la façon dont une fonction est appelée. Il n'est pas possible de lui affecter une valeur lors de l'exécution et sa valeur peut être différente à chaque fois que la fonction est appelée. La méthode {{jsxref("Function.prototype.bind()","bind()")}} a été introduite avec ECMAScript 5 pour [définir la valeur de `this` pour une fonction, indépendamment de la façon dont elle est appelée](#bind). ECMAScript 2015 (ES6) a ajouté [les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) dans lesquelles `this` correspond à la valeur du contexte englobant.

{{InteractiveExample}}

```js interactive-example
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// Expected output: 42

```

## Syntaxe

```js
this;
```

### Valeur

L'objet JavaScript représentant le contexte dans lequel le code courant est exécuté.

## Dans le contexte global

Dans le contexte global d'exécution (c'est-à-dire, celui en dehors de toute fonction), `this` fait référence à l'objet global (qu'on utilise ou non le mode strict).

```js
// Si l'environnement de script est un navigateur,
// l'objet window sera l'objet global
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

> [!NOTE]
> Il est également possible d'accéder au contexte global avec la propriété {{jsxref("globalThis")}} quel que soit le contexte utilisé pour l'exécution.

## Dans le contexte d'une fonction

S'il est utilisé dans une fonction, la valeur de `this` dépendra de la façon dont la fonction a été appelée.

### Avec un appel simple

```js
function f1() {
  return this;
}

// Dans un navigateur
f1() === window; // true (objet global)

// Côté serveur (ex. Node)
f1() === global; // true
```

Dans cet exemple, la valeur de `this` n'est pas définie lors de l'appel. Le code n'étant pas en mode strict, `this` doit toujours être un objet et ce sera donc l'objet global (soit {{domxref("Window", "window")}} pour un navigateur).

```js
function f2() {
  "use strict"; // on utilise le mode strict
  return this;
}

f2() === undefined; // true
```

En mode strict, la valeur de `this` est conservée (il reste le même) entre le moment de sa définition et l'entrée dans le contexte d'exécution. S'il n'est pas défini, il reste `undefined`. Il pourrait être défini avec n'importe quelle autre valeur, telle que `null` ou `42` ou `"Je ne suis pas this"`.

> [!NOTE]
> Dans ce deuxième exemple, `this` vaut {{jsxref("undefined")}} car `f2` a été appelé sans « base » (ex. : `window.f2()`). Cette fonctionnalité ne fut pas correctement implémentée dans certains navigateurs aux débuts du mode strict, en effet, certains renvoyaient alors l'objet `window`.

### `call` et `apply`

Pour passer `this` d'un contexte à un autre, on pourra utiliser {{jsxref("Function.prototype.call()", "call()")}} ou {{jsxref("Function.prototype.apply()", "apply()")}} :

```js
// Un objet peut être passé en premier argument
// de call ou de apply
var obj = { a: "Toto" };

// Ici, on déclare une variable et la variable est affectée à l'objet global window comme propriété de celui-ci
var a = "Global";

function whatsThis(arg) {
  // La valeur de this ici dépend de la façon
  // dont la fonction est appelée
  return this.a;
}

whatsThis(); // 'Global' car celui-ci dans la fonction n'est pas défini, il est donc défini par défaut sur l'objet global window
whatsThis.call(obj); // "Toto"
whatsThis.apply(obj); // "Toto"
```

Lorsque le mot-clé `this` est utilisé dans le corps d'une fonction, il est possible d'utiliser les méthodes {{jsxref("Function.prototype.call()", "call()")}} ou {{jsxref("Function.prototype.apply()", "apply()")}} pour lier `this` à un objet donné. Toutes les fonctions héritent de ces méthodes grâce à {{jsxref("Function.prototype")}}.

```js
function ajout(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// Le premier paramètre correspond à l'objet qu'on souhaite
// lier à 'this', les paramètres suivants sont les arguments
// à utiliser dans l'appel de la fonction
ajout.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// Le premier paramètre correspond à l'objet qu'on souhaite
// lier à 'this', le second paramètre est le tableau dont les
// les éléments sont les arguments à passer à la fonction
ajout.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
```

Note : En mode non-strict, si la valeur à lier à `this`, passée à `call` ou `apply`, n'est pas un objet, le moteur JavaScript tentera de la convertir en un objet grâce à l'opération interne `ToObject`. Si la valeur est d'un type primitif autre qu'objet, `7` ou `'toto'` par exemple, elle sera convertie en un objet grâce au constructeur associé. Ainsi, on aura le nombre `7` converti en un objet grâce à `new Number(7)` et la chaîne `'toto'` convertie en objet grâce à `new String('toto')`.

```js
function truc() {
  console.log(Object.prototype.toString.call(this));
}

truc.call(7); // [object Number]
truc.call("foo"); // [object String]
```

### La méthode `bind`

Avec ECMAScript 5, une nouvelle fonction fut introduite : {{jsxref("Function.prototype.bind()")}}. Lorsqu'on appelle `f.bind(unObjet)`, on crée une nouvelle fonction qui possède le même corps et la même portée que `f`, mais où `this` sera lié, de façon permanente, au premier argument passé à `bind`, quelle que soit la façon dont la méthode est utilisée.

```js
function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var h = g.bind({ a: "coucou" }); // bind ne fonctionne qu'une seule fois
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

### Avec les fonctions fléchées

En utilisant [les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions), `this` correspond à la valeur de `this` utilisé dans le contexte englobant. Lorsqu'on utilise une fonction fléchée dans du code global, `this` sera l'objet global :

```js
var objetGlobal = this;
var toto = () => this;
console.log(toto() === objetGlobal); // true
```

Peu importe la façon dont `toto` sera appelée, `this` sera toujours l'objet global. Cela est également valable pour les méthodes d'objet (où généralement `this` correspond à l'objet courant) ou lorsque `call`, `apply` ou `bind` sont utilisés :

```js
// Appelé comme la méthode d'un objet
var obj = { toto: toto };
console.log(obj.toto() === objetGlobal); // true

// Ici on utilise call
console.log(toto.call(obj) === objetGlobal); // true
// Là on utilise bind
toto = toto.bind(obj);
console.log(toto() === objetGlobal); // true
```

Quelle que soit la méthode utilisée le `this` de `toto` sera défini avec la valeur qu'il avait lors de la création (dans l'exemple précédent, il s'agit de l'objet global). Cela vaut également pour les fonctions fléchées créées dans d'autres fonctions : `this` prendra la valeur de `this` dans le contexte englobant.

```js
// On crée un objet obj qui a une méthode truc
// qui renvoie une fonction qui renvoie la
// valeur de this.
// La fonction qui est renvoyée est créée sous
// la forme d'une fonction fléchée. this est
// donc fixé de façon permanente avec la valeur
// de this du contexte englobant.
var obj = {
  truc: function () {
    var x = () => this;
    return x;
  },
};
// On appelle truc comme une méthode d'obj, this
// vaudra donc obj. On récupère la fonction
// renvoyée par truc et on en stocke une référence
// avec la variable fn
var fn = obj.truc();

// On appelle fn sans définir this, par défaut
// en mode strict cela correspondrait à l'objet
// global ou à undefined
console.log(fn() === obj); // true

// Attention à ne pas référence la méthode d'obj
// sans l'appeler
var fn2 = obj.truc;
// Appeler le this de la fonction fléchée dans ce contexte
// renverra window car c'est le this associé à fn2 (qui
// correspond au contexte global)
console.log(fn2()() == window); // true
```

Dans l'exemple précédent, la fonction affectée à `obj.truc` renvoie une autre fonction créée sous la forme d'une fonction fléchée. Par conséquent, `this` vaut toujours `obj.truc` lorsque la fonction est appelée. Lorsque la fonction est renvoyée, `this` continue de correspondre à la valeur initiale. Dans ce code, `this` vaut `obj` et garde cette valeur, même lorsqu'il est appelé plus tard.

### En tant que méthode d'un objet

Lorsqu'une fonction est appelée comme méthode d'un objet, `this` correspondra à l'objet possédant la méthode qu'on appelle.

Ainsi, dans l'exemple suivant, lorsqu'on appelle `o.f()`, le `this` contenu à l'intérieur de la fonction correspond à l'objet `o`.

```js
var o = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};

console.log(o.f()); // 37
```

On notera que ce comportement n'est pas du tout affecté par la façon ou l'endroit de la définition de la fonction. Dans l'exemple précédent, on aurait très bien pu définir la fonction plus tard et la rattacher à une propriété de `o` plutôt que de la déclarer de cette façon. On aura le même résultat en faisant ainsi :

```js
var o = { prop: 37 };

function indépendante() {
  return this.prop;
}

o.f = indépendante;

console.log(o.f()); // 37
```

On voit ici que ce qui importe est la façon dont la fonction est appelée et non pas la façon dont elle est définie. Ici la fonction est appelée comme une propriété (méthode) de `o`.

De la même façon, `this` n'est affecté que par la référence la plus proche. Autrement dit, dans l'exemple suivant quand on appelle la fonction `o.b.g`, on appelle la méthode `g` de l'objet `o.b`. Ainsi, au moment de l'exécution, `this` fera référence à `o.b`. Le fait que cet objet soit une propriété de `o` n'a aucun impact : seule la référence objet la plus proche compte.

```js
o.b = { g: indépendante, prop: 42 };
console.log(o.b.g()); // 42
```

#### `this` sur la chaîne de prototypes de l'objet

Ce qui a été vu ci-avant est également applicable pour les méthodes qui sont présentes sur la chaîne de prototypes de l'objet. Si une méthode se situe sur la chaîne de prototype, `this` fera référence à l'objet appelant (de la même façon que si la méthode était une propriété directe de l'objet).

```js
var o = {
  f: function () {
    return this.a + this.b;
  },
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

Dans cet exemple, l'objet qui est affecté à la variable `p` ne possède pas directement la propriété `f`, il en hérite de par son prototype. Cela n'impacte en rien la détermination de `this` car la recherche de la propriété `f` remonte le long de la chaîne de prototype et s'arrête à `o`. Au début de cette recherche, on a une référence à `p.f`, aussi `this` fera référence à l'objet représenté par `p`. Autrement dit `f` étant appelé comme une méthode de `p`, `this` fera ici référence à `p`. Cette fonctionnalité fait partie des caractéristiques de l'héritage prototypal de JavaScript.

#### `this` dans un _getter_ ou _setter_

Ici aussi, on a le même principe lorsque la fonction est appelée à partir d'un accesseur (_getter_) ou d'un mutateur (_setter_). Une fonction utilisée comme accesseur ou mutateur verra son `this` lié à l'objet à partir duquel on souhaite accéder/changer la propriété.

```js
function moduleRéel() {
  return Math.sqrt(this.re * this.re + this.im * this.im);
}

var o = {
  re: 1,
  im: -1,
  get phase() {
    return Math.atan2(this.im, this.re);
  },
};

Object.defineProperty(o, "moduleRéel", {
  get: moduleRéel,
  enumerable: true,
  configurable: true,
});

console.log(o.phase, o.moduleRéel); // logs -0.78 1.4142
```

### En tant que constructeur

Lorsqu'une fonction est utilisée comme constructeur (c'est-à-dire qu'elle est invoquée avec le mot-clé {{jsxref("Opérateurs/L_opérateur_new","new")}}), le `this` correspondant sera lié au nouvel objet en train d'être construit.

> [!NOTE]
> Par défaut, un constructeur renverra l'objet auquel `this` fait référence. Cependant si la valeur de retour du constructeur est définie et est un objet, ce sera elle qui sera renvoyée (sinon ce sera la valeur de `this`).

```js
/*
 * Les constructeurs fonctionnent de la façon suivante :
 *
 * function MonConstructeur(){
 *   // le corps de la fonction
 *   // on crée des propriétés sur |this|
 *   // par exemple
 *   this.fum = "nom";
 *   // etc.
 *
 *   // Si la fonction utilise une instruction de
 *   // retour (return) et renvoie un objet
 *   // ce sera cet objet qui sera le résultat de
 *   // l'expression |new|.
 *   // Sinon, le résultat sera l'objet
 *   // lié à |this|
 *   // (ce second cas est celui qu'on rencontre
 *   // fréquemment).
 * }
 */

function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // 38
```

Dans le dernier exemple (`C2`), on renvoie un objet lors de la construction. L'objet qui était lié `this` est alors abandonné. (L'instruction "`this.a = 37;`" devient alors totalement inutile, bien qu'elle soit exécutée, elle n'aura aucun effet de bord.)

### En tant que gestionnaire d'événement DOM

Lorsqu'une fonction est utilisée comme gestionnaire d'événement (_event handler_), le `this` correspondant prendra la valeur de l'élément ayant déclenché l'événement (certains navigateurs ne suivent pas cette convention et les gestionnaires sont ajoutés dynamiquement avec d'autres méthodes qu'{{domxref("EventTarget.addEventListener()", "addEventListener()")}}).

```js
// Lorsque cette fonction est appelée
// comme listener, l'élément associé
// sera coloré en bleu
function bluify(e) {
  // Cette proposition est toujours vraie
  console.log(this === e.currentTarget);

  // true lorsque currentTarget et target correspondent
  // au même objet
  console.log(this === e.target);

  this.style.backgroundColor = "#A5D9F3";
}

// On obtient une liste de tous les éléments
// contenus dans le document
var elements = document.getElementsByTagName("*");

// On ajout le listener bluify pour réagier au clic
// Quand on clique sur un élément, il deviendra bleu
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", bluify, false);
}
```

### En tant que gestionnaire d'événements _in-line_

Lorsque le code est appelé depuis un gestionnaire d'événement « en ligne » (_in-line_), la valeur de `this` correspondra à l'élément du DOM sur lequel on a placé le _listener_. Ainsi :

```js
<button onclick="console.log(this.tagName.toLowerCase());">
  Afficher this
</button>
```

montrera le texte `button` lorsqu'on cliquera dessus. Attention, seul le code externe verra la valeur de `this` affectée de cette façon :

```js
<button onclick="console.log((function(){return this})());">
  Afficher le this interne
</button>
```

Ici, on utilise `this` à l'intérieur d'une fonction et il n'est pas défini en amont. Il renvoie donc l'objet global (l'objet `window` pour un navigateur avec du code non-strict).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode)
- [this & les prototypes objet](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes) de Kyle Simpson sur GitHub (en anglais)
- [Un article explicatif sur `this` (en anglais)](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)
- La propriété {{jsxref("globalThis")}} qui permet d'accéder à l'objet global `this`
