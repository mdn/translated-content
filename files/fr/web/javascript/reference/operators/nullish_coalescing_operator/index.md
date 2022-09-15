---
title: Opérateur de coalescence des nuls (Nullish coalescing operator)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
tags:
  - Coalescence
  - JavaScript
  - Opérateur
  - Reference
  - falsy
  - nullish
translation_of: Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
original_slug: Web/JavaScript/Reference/Opérateurs/Nullish_coalescing_operator
---
{{JSSidebar("Operators")}}

L'**opérateur de coalescence des nuls** (`??`), est un opérateur logique qui renvoie son opérande de droite lorsque son opérande de gauche vaut `{{jsxref("null")}}` ou `{{jsxref("undefined")}}` et qui renvoie son opérande de gauche sinon.

Contrairement à [l'opérateur logique OU (`||`)](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_logiques), l'opérande de gauche sera renvoyé s'il s'agit d'une [valeur équivalente à `false`](/fr/docs/Glossaire/Falsy) **qui n'est ni** `null`**, ni** `undefined`. En d'autres termes, si vous utilisez `||` pour fournir une valeur par défaut à une variable `foo`, vous pourriez rencontrer des comportements inattendus si vous considérez certaines valeurs _falsy_ comme utilisables (par exemple une chaine vide `''` ou `0`). Voir ci-dessous pour plus d'exemples.

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## Syntaxe

```js
leftExpr ?? rightExpr
```

## Exemples

### Utilisation de l'opérateur de coalescence des nuls

Dans cet exemple, nous fournirons des valeurs par défaut mais conserverons des valeurs autres que `null` ou `undefined`.

```js
const valeurNulle = null;
const texteVide = ""; // falsy
const unNombre = 42;

const valA = valeurNulle ?? "valeur par défaut pour A";
const valB = texteVide ?? "valeur par défaut pour B";
const valC = unNombre ?? 0;

console.log(valA); // "valeur par défaut pour A"
console.log(valB); // "" (car la chaine vide n'est ni `null` ni `undefined`)
console.log(valC); // 42
```

### Affectation d'une valeur par défaut à une variable

Auparavant, lorsque l'on voulait attribuer une valeur par défaut à une variable, une solution fréquente consistait à utiliser l'opérateur logique OU (`||`) :

```js
let toto;

// toto ne se voit jamais attribuer de valeur, il vaut donc undefined
let unTexteBateau = toto || 'Coucou !';
```

Cependant, parce que `||` est un opérateur logique booléen, l'opérande de gauche a été converti en un booléen pour l'évaluation et aucune valeur _falsy_ (`0`, `''`, `NaN`, `null`, `undefined`) n'a été renvoyée. Ce comportement peut entraîner des conséquences inattendues si on souhaite considérer `0`, `''` ou `NaN` comme des valeurs valides.

```js
let compteur = 0;
let texte = "";

let qté = compteur || 42;
let message = texte || "Coucou !";
console.log(qté);     // 42 et non 0
console.log(message); // "Coucou !" et non ""
```

L'opérateur de coalescence des nuls évite ce risque en ne renvoyant le deuxième opérande que lorsque le premier vaut `null` ou `undefined` (mais pas d'autres valeurs _falsy_) :

```js
let monTexte = ''; // Un chaine vide (qui est donc une valeur falsy)

let notFalsyText = monTexte || 'Hello world';
console.log(notFalsyText); // Hello world

let preservingFalsy = monTexte ?? 'Salut le voisin';
console.log(preservingFalsy); // '' (car monTexte n'est ni null ni undefined)
```

### Court-circuitage

À l'instar des opérateurs logiques OR (`||`) et AND (`&&`), l'expression de droite n'est pas évaluée si celle de gauche ne vaut ni `null` ni `undefined`.

```js
function A() { console.log('A a été appelée'); return undefined; }
function B() { console.log('B a été appelée'); return false; }
function C() { console.log('C a été appelée'); return "toto"; }

console.log( A() ?? C() );
// Inscrit "A a été appelée" puis "C a été appelée" et enfin "toto"
// puisque : A() retourne undefined, les deux expressions sont donc évaluées

console.log( B() ?? C() );
// Inscrit "B a été appelée" puis false
// puisque : B() retourne false (et non null ou undefined) et
// l'opérande de droite n'est pas évaluée
```

### Pas de chaînage possible avec les opérateurs AND ou OR

Il n'est pas possible de combiner les opérateurs AND (`&&`) ou OR (`||`) directement avec l'opérateur de coalescence des nuls (`??`). Un tel cas lèverait une exception [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/SyntaxError).

```js example-bad
null || undefined ?? "toto"; // soulève une SyntaxError
true || undefined ?? "toto"; // soulève une SyntaxError
```

Cependant, fournir des parenthèses pour indiquer explicitement la priorité est correct :

```js example-good
(null || undefined) ?? "toto"; // Renvoie "toto"
```

### Relation avec l'opérateur de chaînage optionnel (`?.`)

Tout comme l'opérateur de coalescence des nuls, l'[opérateur de chaînage optionnel (?.)](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Optional_chaining) traite les valeurs `null` et `undefined` comme des valeurs spécifiques. Ce qui permet d'accéder à une propriété d'un objet qui peut être `null` ou `undefined`.

```js
let toto = { uneProprieteToto: "coucou" };

console.log(toto.uneProprieteToto?.toUpperCase());  // "COUCOU"
console.log(toto.uneProprieteTiti?.toUpperCase()); // undefined
```

## Spécifications

| Spécification                                                                                    |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#prod-Nulli', 'nullish coalescing expression')}} |

## Compatibilité des navigateurs

{{Compat("javascript.operators.nullish_coalescing")}}

## Voir aussi

- [_Falsy values_ (Valeurs équivalentes à `false` dans un contexte booléen)](/fr/docs/Glossaire/Falsy)
- [Opérateur de chaînage optionnel (_optional chaining_)](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Optional_chaining)
- [Opérateur logique OU (`||`)](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_logiques#Logical_OR)
- [Valeurs par défaut des arguments](/fr/docs/Web/JavaScript/Reference/Fonctions/Valeurs_par_d%C3%A9faut_des_arguments)
