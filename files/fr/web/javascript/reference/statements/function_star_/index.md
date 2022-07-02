---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
tags:
  - ECMAScript 2015
  - Function
  - Generator
  - Instruction
  - Iterator
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/function*
original_slug: Web/JavaScript/Reference/Instructions/function*
---
{{jsSidebar("Statements")}}

La déclaration **`function*`** (le mot-clé `function` suivi par un astérisque) permet de définir un générateur (aussi appelé une fonction génératrice) (un générateur est un objet {{jsxref("Generator")}}).

{{EmbedInteractiveExample("pages/js/statement-functionasterisk.html")}}

Il est également possible de définir un générateur en utilisant le constructeur {{jsxref("GeneratorFunction")}} et une expression {{jsxref("Opérateurs/function*", "function*")}}.

## Syntaxe

```js
function* nom([param1[, param2[, … paramN]]]) {
  instructions
}
```

- `nom`
  - : Le nom de la fonction.
- `paramN`
  - : Le nom d'un paramètre formel passé à la fonction.
- `instructions`
  - : Les instructions qui constituent le corps de la fonction.

## Description

Les générateurs sont des fonctions qu'il est possible de quitter puis de reprendre. Le contexte d'un générateur (les liaisons avec ses variables) est sauvegardé entre les reprises successives.

Les générateurs, combinés avec [les promesses](/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses), sont des outils de programmation asynchrones puissants qui permettent de réduire les inconvénients causés par les _callbacks_ (fonctions de rappel) et [l'inversion de contrôle](https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/).

Lorsqu'on appelle une fonction génératrice, son corps n'est pas exécuté immédiatement, c'est un {{jsxref("Les_protocoles_iteration","itérateur","#Le_protocole_.C2.AB_it.C3.A9rateur_.C2.BB",1)}} qui est renvoyé pour la fonction. Lorsque la méthode `next()` de l'itérateur est appelée, le corps de la fonction génératrice est utilisé jusqu'à ce que la première expression {{jsxref("Opérateurs/yield", "yield")}} soit trouvée. Cette expression définira la valeur à renvoyer pour l'itérateur. Si on utilise {{jsxref("Opérateurs/yield*", "yield*")}}, on pourra déléguer la génération des valeurs à une autre fonction génératrice. La méthode `next()` renvoie un objet dont la propriété `value` contient la valeur générée et une propriété `done` qui indique si le générateur a produit sa dernière valeur ou non. Lorsqu'on appelle la méthode `next()` avec un argument, cela reprendra l'exécution de la fonction génératrice et remplacera la valeur de l'expression `yield` (là où l'exécution avait été interrompue) avec la valeur de l'argument passé à `next()`.

On peut utiliser une instruction `return` dans un générateur. Lorsque cette instruction sera exécutée, le générateur sera terminé (`done` vaudra `true`). La valeur renvoyée par l'instruction `return` sera la valeur de terminaison du générateur. Une fois qu'un générateur est terminé, il ne peut plus produire d'autres valeurs.

À l'instar d'une instruction `return`, une exception levée à l'intérieur du générateur entraînera la terminaison du générateur sauf si cette exception est interceptée. Lorsqu'un générateur est terminé, les appels suivants à `next()` n'exécuteront aucun code provenant du générateur, ils renverront simplement un objet de la forme `{value: undefined, done: true}`.

## Exemples

### Exemple simple

```js
function* creerID(){
  var index = 0;
  while (true) {
    yield index++;
  }
}

var gen = creerID();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

### Exemple utilisant des arguments

```js
function* logGenerator() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}

var gen = logGenerator();

// le premier appel à next exécute la fonction depuis son
// début jusqu'au premier yield rencontré
gen.next();
gen.next('bretzel');    // bretzel
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise
```

### Exemple utilisant `yield*`

```js
function* autreGenerateur(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}
function* generateur(i){
  yield i;
  yield* autreGenerateur(i);
  yield i + 10;
}

var gen = generateur(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### Utilisation de `return`

```js
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "inaccessible";
}

var gen = yieldAndReturn();

console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### Utiliser un générateur comme propriété

```js
const monObj = {
  *generator () {
    yield "a";
    yield "b";
  }
}

const gen = monObj.generator();

console.log(gen.next()); // { value: "a", done: false }
console.log(gen.next()); // { value: "b", done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Utiliser un générateur comme propriété calculée

```js
class Toto {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
  }
}

const monObj = {
  *[Symbol.iterator] () {
    yield "a";
    yield "b";
  }
}

console.log(Array.from(new Toto)); // [1, 2]
console.log(Array.from(monObj));   // [ "a", "b"]
```

### Les générateurs ne sont pas constructibles

```js example-bad
function* f() {}
var obj = new f; // lève une TypeError: f n'est pas un constructeur
```

### Générateur défini avec une expression

```js
const toto = function* () {
  yield 10;
  yield 20;
};
const truc = toto();
console.log(truc.next()); // {value: 10, done: false}
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires                                                                                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ES2015', '#sec-generator-function-definitions', 'function*')}} | {{Spec2('ES2015')}}     | Définition initiale                                                                                                      |
| {{SpecName('ES2016', '#sec-generator-function-definitions', 'function*')}} | {{Spec2('ES2016')}}     | Les générateurs ne doivent pas gérer la trappe [[Construct]] et déclencher une exception s'ils sont utilisés avec `new`. |
| {{SpecName('ESDraft', '#sec-generator-function-definitions', 'function*')}} | {{Spec2('ESDraft')}} |                                                                                                                          |

## Compatibilité des navigateurs

{{Compat("javascript.statements.generator_function")}}

## Notes spécifiques à Firefox

### Les générateurs et itérateurs dans Firefox pour les versions antérieures à Firefox 26

Les anciennes versions de Firefox implémentaient une ancienne version de la proposition pour les générateurs. Dans cette version, les générateurs étaient définis avec le mot-clé `function` (sans astérisque) et étaient différents selon d'autres aspects. Voir [la page sur les générateurs historiques](/fr/docs/Web/JavaScript/Reference/Instructions/Fonction_génératrice_historique) pour plus d'informations.

### `IteratorResult` au lieu d'une exception

À partir de Gecko 29 {{geckoRelease(29)}}, lorsqu'un générateur est terminé, il ne renvoie plus une exception {{jsxref("TypeError")}} « generator has already finished ». Il renvoie désormais un objet `IteratorResult` comme `{ value: undefined, done: true }` ({{bug(958951)}}).

## Voir aussi

- L'expression {{jsxref("Opérateurs/function*", "function*")}}
- L'objet {{jsxref("GeneratorFunction")}}
- {{jsxref("Les_protocoles_iteration","itérateur","#Le_protocole_.C2.AB_it.C3.A9rateur_.C2.BB",1)}}
- {{jsxref("Opérateurs/yield", "yield")}}
- {{jsxref("Opérateurs/yield*", "yield*")}}
- L'objet {{jsxref("Function")}}
- {{jsxref("Instructions/function", "Les déclarations de fonction","",1)}}
- {{jsxref("Opérateurs/L_opérateur_function", "Les expressions de fonction","",1)}}
- {{jsxref("Fonctions", "Les fonctions","",1)}}
- D'autres ressources disponibles sur le Web :

  - [Regenerator](https://facebook.github.io/regenerator/) un compilateur permettant de traduire des générateurs ES2015 en du code JavaScript basé sur ES5
  - [Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013](https://www.youtube.com/watch?v=qbKWsbJ76-s) (vidéo en anglais)
  - [Task.js](https://github.com/mozilla/task.js)
  - [Itérer de façon asynchrone sur des générateurs](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md#iterating-generators-asynchronously)
