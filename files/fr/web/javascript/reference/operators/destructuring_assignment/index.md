---
title: Affecter par décomposition
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
---

{{jsSidebar("Operators")}}

L'**affectation par décomposition** (_destructuring_ en anglais) est une expression JavaScript qui permet d'extraire (_unpack_ en anglais) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.

{{EmbedInteractiveExample("pages/js/expressions-destructuringassignment.html")}}

## Syntaxe

```js
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Proposition de syntaxe (niveau 4)
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

> **Note :** `{a, b} = {a:1, b:2}` n'est pas syntaxiquement valide en tant que tel, en effet `{a, b}` est ici considéré comme un bloc et non comme un objet littéral.
>
> Cependant, `({a, b} = {a:1, b:2})` sera valide comme pour la forme `let {a, b} = {a:1, b:2}`.

## Description

Ces expressions utilisant des littéraux pour les [objets](/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_littéraux#Litt.C3.A9raux_objets) ou les [tableaux](/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_littéraux#Litt.C3.A9raux_de_tableaux) permettent de créer simplement des données regroupées. Une fois créées, on peut les utiliser de n'importe quelle façon, y compris comme valeur renvoyée par une fonction.

```js
const x = [1, 2, 3, 4, 5]; // On crée un "paquet" de données
const [y, z] = x; // On utilise l'affectation par décomposition
console.log(y); // 1
console.log(z); // 2
```

L'intérêt de l'assignation par décomposition est de pouvoir lire une structure entière en une seule instruction. Il y a également d'autres choses que vous pouvez faire avec cette expression, comme montré dans les exemples ci-dessous.

Cette syntaxe est semblable aux fonctionnalités offertes par des langages tels que Perl et Python.

## Décomposition d'un tableau

### Exemple simple

```js
const toto = ["un", "deux", "trois"];

// sans utiliser la décomposition
const un = toto[0];
const deux = toto[1];
const trois = toto[2];

// en utilisant la décomposition
const [un, deux, trois] = toto;
```

### Affectation sans déclaration

L'affectation par décomposition peut être effectuée sans qu'il y ait de déclaration directement dans l'instruction d'affectation. Par exemple :

```js
let a, b;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### Valeurs par défaut

On peut définir une valeur par défaut au cas où la valeur extraite du tableau soit {{jsxref("undefined")}}. Par exemple :

```js
let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```

### Échange de variables

Une fois le fragment de code exécuté, on aura _b_ égal à 1 et _a_ égal à 3. S'il n'avait pas été possible d'utiliser l'affectation par décomposition, l'échange des valeurs aurait nécessité une variable temporaire (pour des données binaires, on aurait pu utiliser une [permutation XOR](<https://fr.wikipedia.org/wiki/Permutation_(informatique)#En_utilisant_l.27op.C3.A9ration_XOR>)).

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

### Renvoyer plusieurs valeurs

Grâce à l'affectation par décomposition, les fonctions peuvent renvoyer plusieurs valeurs. Il était déjà possible de renvoyer un tableau mais cela ajoute un nouveau degré de flexibilité.

```js
function f() {
  return [1, 2];
}
```

Les valeurs de retour sont déclarées via une syntaxe semblable à celle utilisée pour déclarer les tableaux, utilisant les crochets. On peut ainsi renvoyer autant de valeurs que souhaité. Dans cet exemple, `f()` renvoie les valeurs `[1, 2]`.

```js
let a, b;
[a, b] = f();
console.log("A vaut " + a + " B vaut " + b);
```

L'instruction `[a, b] = f()` assigne, dans l'ordre, les résultats de la fonction aux variables représentées entre les crochets. Ainsi, ici _a_ vaut 1 et b vaut 2.

On peut également récupérer la valeur de retour comme un tableau :

```js
const x = f();
console.log("X vaut " + x);
```

Et on aura x qui sera égal au tableau contenant 1 et 2.

### Ignorer certaines valeurs

On peut également ignorer certaines des valeurs renvoyées qu'on ne souhaiterait pas traiter :

```js
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log("A vaut " + a + " B vaut " + b);
```

Après avoir exécuté ce code, on aura a égal à 1 et b égal à 3. La valeur 2 est ignorée. On peut ignorer n'importe laquelle des valeurs (voire toutes). Par exemple :

```js
[, ,] = f();
```

### Exploiter les résultats d'une expression rationnelle

Lorsque la méthode [`exec()`](/fr/docs/JavaScript/Reference/Objets_globaux/Object/RegExp/Exec), liées aux expressions rationnelles, trouve une correspondance, elle renvoie un tableau qui contient d'abord la partie complète de la chaîne qui correspond puis ensuite les différentes portions correspondant aux différents groupes. L'affectation par décomposition permet de filtrer simplement les valeurs qu'on souhaite exploiter. Ici, on ignore le premier élément qui est la correspondance complète :

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL); // ["https://developer.mozilla.org/fr/Web/JavaScript", "https", "developer.mozilla.org", "fr/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/en-US/Web/JavaScript"),
); // "https"
```

### Affecter le reste d'un tableau à une variable

On peut également utiliser la décomposition d'un tableau afin d'en affecter une partie à une variable :

```js
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

Un exception {{jsxref("SyntaxError")}} sera levée si une virgule est laissée à la fin de l'élément du reste du tableau de gauche :

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];
// SyntaxError : un élément du reste ne peut pas avoir
//               de virgule à la fin
```

## Décomposer un objet

### Exemple simple

```js
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true

// Assign new variable names
const { p: toto, q: truc } = o;

console.log(toto); // 42
console.log(truc); // true
```

### Affectation sans déclaration

Il est possible d'effectuer une affectation par décomposition même si aucune déclaration n'est directement utilisée dans l'instruction d'affectation. Par exemple :

```js
let a, b;
({ a, b } = { a: 1, b: 2 });
```

> **Note :** Les parenthèses `( ... )` utilisées autour de l'instruction sont nécessaires pour que la partie gauche soit bien interprétée comme un objet littéral et non comme un bloc. Il est également nécessaire d'avoir un point-virgule avant les parenthèses de l'instruction car sinon, ces parenthèses peuvent être interprétées comme un appel de fonction.

### Affecter avec un nom différent

Lorsqu'on décompose un objet, on peut affecter la variable obtenue sur une variable qui possède un autre nom (que celui de la propriété) :

```js
const o = { p: 42, q: true };
const { p: toto, q: truc } = o;

console.log(toto); // 42
console.log(truc); // true
```

Ici, par exemple, `const {p: toto} = o` prend la propriété `p` de l'objet `o` pour l'affecter à une variable locale intitulée `toto`.

### Valeurs par défaut

Une variable peut recevoir une valeur par défaut lors de la décomposition si la propriété correspondante de l'objet vaut `undefined`.

```js
const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
```

### Affecter de nouveaux noms aux variables et fournir des valeurs par défaut

Il est possible d'extraitre une valeur d'un objet pour lui affecter un nouveau nom et lui affecter une valeur par défaut au cas où la valeur extraite vaut `undefined`.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

### Arguments par défaut d'une fonction

#### Version ES5

```js
function dessinGrapheES5(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? "big" : options.size;
  var coords = options.coords === undefined ? { x: 0, y: 0 } : options.coords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, coords, radius);
  // seulement ensuite on dessine le graphe
}

dessinGrapheES5({
  coords: { x: 18, y: 30 },
  radius: 30,
});
```

#### Version ES2015

```js
function dessinGrapheES2015({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // on dessine le graphe
}

dessinGrapheES2015({
  coords: { x: 18, y: 30 },
  radius: 30,
});
```

> **Note :** Dans la signature de la fonction `dessinGrapheES2015` ci avant, la valeur décomposée à gauche utilise un objet vide comme opérande droit (`{size = 'big', coords = { x: 0, y: 0 }, radius = 25} = {}`). On aurait également pu écrire la fonction sans cet objet vide mais, dans ce cas, il aurait fallu au moins un argument pour utiliser la fonction. Avec cette « forme », `dessinGrapheES2015()` pourra être appelée sans paramètre.

### Décomposition imbriquée avec objets et tableaux

```js
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/fr/docs/Tools/Scratchpad",
};

let {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

### Décomposition et utilisation de [for of](/fr/docs/JavaScript/Référence_JavaScript/Instructions/for...of)

```js
const personnes = [
  {
    nom: "Alain Dupont",
    famille: {
      mere: "Isabelle Dupont",
      pere: "Jean Dupont",
      soeur: "Laure Dupont",
    },
    age: 35,
  },
  {
    nom: "Luc Marchetoile",
    famille: {
      mere: "Patricia Marchetoile",
      pere: "Antonin Marchetoile",
      frere: "Yann Marchetoile",
    },
    age: 25,
  },
];

for (const {
  nom: n,
  famille: { pere: f },
} of personnes) {
  console.log("Nom : " + n + ", Père : " + f);
}

// "Nom : Alain Dupont, Père : Jean Dupont"
// "Nom : Luc Marchetoile, Père : Antonin Marchetoile"
```

### Décomposer les propriétés d'objets passés en arguments

```js
const user = {
  id: 42,
  displayName: "jbiche",
  fullName: {
    firstName: "Jean",
    lastName: "Biche",
  },
};

function userId({ id }) {
  return id;
}

function whois({ displayName: displayName, fullName: { firstName: name } }) {
  console.log(displayName + " est " + name);
}

console.log("userId: " + userId(user));
w; // "userId: 42"
whois(user); // "jbiche est Jean"
```

Cela permet d'accéder directement à `id`, `displayName` et `firstName` depuis l'objet `user`.

### Les noms de propriétés calculés et la décomposition

Il est possible d'utiliser des noms de propriétés calculés, comme avec les [littéraux objets](/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet#Noms_de_propri.C3.A9t.C3.A9s_calcul.C3.A9s), avec la décomposition.

```js
let clef = "z";
let { [clef]: toto } = { z: "truc" };

console.log(toto); // "truc"
```

### Syntaxe du « reste » et décomposition d'un objet

[La proposition de décomposition des propriétés et de la syntaxe du reste dans ECMAScript](https://github.com/tc39/proposal-object-rest-spread) ajoute [la syntaxe du reste](/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste) pour la décomposition. La propriété du reste permet de collecter les propriétés énumérables restantes qui n'auraient pas été extraites par la décomposition :

```js
let { a, b, ...reste } = { a: 10, b: 20, c: 30, d: 40 };
a; // 10
b; // 20
reste; // { c: 30, d: 40 }
```

### Gestion des identifiants invalides comme noms de propriétés

Si besoin, on peut également utiliser la décomposition pour fournir un alias à des noms de propriétés qui ne seraient pas des identifiants valides. Par exemple :

```js
const toto = { "truc-bidule": true };
const { "truc-bidule": trucBidule } = toto;

console.log(trucBidule); // "true"
```

### Combiner la décomposition de tableaux et d'objets

Il est possible de décomposer un tableau et un objet simultanément. Dans l'exemple qui suit, on accède ainsi à la propriété `nom` du troisième élément du tableau `props`:

```js
const props = [
  { id: 1, nom: "Toto" },
  { id: 2, nom: "Truc" },
  { id: 3, nom: "Bidule" },
];

const [, , { nom }] = props;
console.log(nom); // Bidule
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Opérateurs d'affectation](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation)
- [ES6 en détails : La décomposition sur tech.mozfr.org](https://tech.mozfr.org/post/2015/06/05/ES6-en-details-%3A-la-decomposition)
