---
title: Itérateurs et générateurs
slug: Web/JavaScript/Guide/Iterators_and_generators
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Utiliser_les_promesses", "Web/JavaScript/Guide/Métaprogrammation")}}

Effectuer des traitements sur chacun des éléments d'une collection est une opération très fréquente. Il existe plusieurs outils natifs dans JavaScript pour parcourir une collection, les boucles [`for`](/fr/docs/Web/JavaScript/Reference/Instructions/for), [`map()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map), [`filter()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter). Les itérateurs et les générateurs font de ce concept d'itération une fonctionnalité principale du langage et permettent d'adapter et de personnaliser le comportement des boucles [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of).

Pour plus de détails sur les mécanismes d'itération, voir les pages suivantes :

- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration)
- {{jsxref("Instructions/for...of","for...of")}}
- {{jsxref("Instructions/function*","function*")}} et {{jsxref("Generator")}}
- {{jsxref("Opérateurs/yield","yield")}} et {{jsxref("Opérateurs/yield*","yield*")}}

## Itérateurs

Un itérateur est un objet sachant comment accéder aux éléments d'une collection un par un et qui connait leur position dans la collection. En JavaScript, un itérateur expose une méthode `next()` qui retourne l'élément suivant dans la séquence. Cette méthode renvoie un objet possédant deux propriétés : `done` et `value`.

Un itérateur est "terminé" lorsque l'appel à la méthode `next()` renvoie un objet dont la propriété `done` vaut `true`.

Une fois créé, un itérateur peut être utilisé explicitement en appelant sa méthode `next()`, ou implicitement en utilisant la boucle [`for...in`](/fr/docs/Web/JavaScript/Reference/Instructions/for...in).

Voici un exemple d'une fonction créant un itérateur qui parcourt l'intervalle défini par ses arguments (depuis `debut` (inclus) jusqu'à `end` (exclus) et avec `pas` comme incrément. La valeur finale qui est renvoyée correspond à la taille de la séquence créée

```js
function creerIterateurIntervalle(debut = 0, fin = Infinity, pas = 1) {
  let prochainIndex = debut;
  let nbIterations = 0;

  const rangeIterator = {
    next: function () {
      let resultat;
      if (prochainIndex < fin) {
        resultat = { value: prochainIndex, done: false };
        prochainIndex += pas;
        nbIterations++;
        return resultat;
      }
      return { value: nbIterations, done: true };
    },
  };
  return rangeIterator;
}
```

On pourra alors utiliser cette fonction et l'itérateur de la façon suivante :

```js
let it = creerIterateurIntervalle(1, 10, 2);

let resultat = it.next();
while (!resultat.done) {
  console.log(resultat.value); // 1 3 5 7 9
  resultat = it.next();
}

console.log("La séquence parcourue contenait ", result.value, " éléments.");
```

## Itérables

Un objet est considéré comme **itérable** s'il définit le comportement qu'il aura lors de l'itération (par exemple les valeurs qui seront utilisées dans une boucle {{jsxref("Instructions/for...of", "for...of")}}). Certains types natifs, tels qu'{{jsxref("Array")}} ou {{jsxref("Map")}}, possède un comportement par défaut pour les itérations, cependant d'autres types comme les Objets, ne possèdent pas ce comportement.

Pour qu'un objet soit **itérable**, un objet doit implémenter la méthode **@@iterator**, cela signifie que l'objet (ou un des objets de la [chaîne de prototypes](/fr/docs/Web/JavaScript/Héritage_et_chaîne_de_prototypes)) doit avoir une propriété avec la clé {{jsxref("Symbol.iterator")}}. Cette fonction doit également, même si ce n'est pas une obligation, renvoyer une nouvel opérateur à chaque appel.

### Itérables personnalisés

Il est possible de définir ses propres itérables de cette façon :

```js
var monItérable = {};
monItérable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...monItérable]; // [1, 2, 3]
```

### Itérables natifs

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} et {{jsxref("Set")}} sont des itérables natifs car les prototypes de chacun ont tous une méthode {{jsxref("Symbol.iterator")}}.

### Les éléments de syntaxe utilisant des itérables

Certaines instructions ou expressions utilisent des itérables, par exemple les boucles {{jsxref("Instructions/for...of","for...of")}} et {{jsxref("Opérateurs/yield*","yield*")}}.

```js
for (let value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next()[(a, b, c)] = // { value:"a", done:false }
  new Set(["a", "b", "c"]);
a; // "a"
```

## Générateurs

Les itérateurs personnalisés sont un outil utile mais leur création peut s'avérer complexe et il faut maintenir leur état interne. Avec les générateurs, on peut définir une seule fonction qui est un algorithme itératif et qui peut maintenir son état.

Un générateur est un type de fonction spécial qui fonctionne comme une fabrique (_factory_) d'itérateurs. Une fonction devient un générateur lorsqu'elle contient une ou plusieurs expressions `yield` et qu'elle utilise la syntaxe `function*`.

```js
function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...
```

## Générateurs avancés

Les générateurs calculent les valeurs à fournir à la demande, ce qui leur permet de représenter efficacement des suites complexes à calculer, voire des séries infinies (comme vu dans l'exemple précédent).

La méthode `next()` accepte également un argument qui pourra être utilisé pour modifier l'état interne du générateur. Une valeur passée à `next()` sera traitée comme le résultat de la dernière expression `yield` qui a interrompu le générateur. Une valeur passée au premier appel de `next()` sera toujours ignorée.

Par exemple, on peut avoir un générateur pour la suite de Fibonnaci et utiliser `next(x)` pour redémarrer la série :

```js
function* fibonacci() {
  var fn1 = 0;
  var fn2 = 1;
  while (true) {
    var current = fn1;
    fn1 = fn2;
    fn2 = fn1 + current;
    var reset = yield current;
    if (reset) {
      fn1 = 0;
      fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
```

Il est possible de forcer un générateur à lever une exception en utilisant la méthode `throw()` en lui passant la valeur de l'exception en argument. Cette exception sera levée depuis l'état actuel du générateur, comme si le `yield` qui était en attente avait été une instruction `throw valeur`.

Si le mot-clé `yield` n'est pas trouvé lors de la levée de l'exception, l'exception sera propagée jusqu'à l'appel de `throw()`, les appels à `next()` qui suivent renverront une valeur dont la propriété `done` sera `true`.

Si l'exception n'est pas interceptée dans le générateur, elle se propagera jusqu'à l'appel de `throw()` et les appels suivants de `next()` renverront un objet dont la propriété `done` vaut `true`.

Les générateurs possèdent une méthode `return(valeur)` qui permet de renvoyer une valeur donnée et de terminer le générateur.

{{PreviousNext("Web/JavaScript/Guide/Utiliser_les_promesses", "Web/JavaScript/Guide/Métaprogrammation")}}
