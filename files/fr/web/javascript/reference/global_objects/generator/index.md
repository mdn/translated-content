---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
tags:
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Generator
original_slug: Web/JavaScript/Reference/Objets_globaux/Generator
---
{{JSRef}}

L'objet **`Generator`** est renvoyé par une {{jsxref("Instructions/function*","fonction génératrice","",1)}}, c'est à la fois [un itérateur](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_%C2%AB_it%C3%A9rateur_%C2%BB) et [un itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_%C2%AB_it%C3%A9rable_%C2%BB).

## Syntaxe

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
```

## Méthodes

- {{jsxref("Generator.prototype.next()")}}
  - : Renvoie une valeur générée par l'expression {{jsxref("Opérateurs/yield", "yield")}}.
- {{jsxref("Generator.prototype.return()")}}
  - : Renvoie la valeur donnée et termine le générateur.
- {{jsxref("Generator.prototype.throw()")}}
  - : Lève une exception dans un générateur. Cette opération termine le générateur, sauf si l'exception est interceptée dans le générateur.

## Exemple

### Un itérateur infini

```js
function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...
```

## Générateurs historiques

Firefox (SpiderMonkey) implémente également une version antérieure pour les générateurs avec [JavaScript 1.7](/fr/docs/Web/JavaScript/New_in_JavaScript/1.7). Pour cette syntaxe, il n'y a pas besoin d'utiliser l'astérisque dans la déclaration de la fonction, il suffit d'utiliser le mot-clé `yield` dans le corps de la fonction. Les générateurs historiques sont une fonctionnalité dépréciée et seront supprimés à l'avenir ({{bug(1083482)}}), il est fortement déconseillé de les utiliser.

### Méthodes pour les générateurs historiques

- `Generator.prototype.next()` {{non-standard_inline}}
  - : Renvoie une valeur générée par l'expression {{jsxref("Opérateurs/yield", "yield")}}. Cette méthode correspond à `next()` pour les générateurs ES2015.
- `Generator.prototype.close()` {{non-standard_inline}}
  - : Clôture le générateur, tout appel ultérieur à `next()` renverra une exception {{jsxref("StopIteration")}}. Cela correspond à la méthode `return()` pour les générateurs ES2015.
- `Generator.prototype.send()` {{non-standard_inline}}
  - : Utilisée pour envoyer une valeur à un générateur. La valeur est renvoyée avec une expression {{jsxref("Opérateurs/yield", "yield")}} et renvoie une valeur générée par la prochaine expression {{jsxref("Opérateurs/yield", "yield")}}. `send(x)` correspond à `next(x)` pour les générateurs ES2015.
- **`Generator.`**`prototype.`**`throw()`** {{non-standard_inline}}
  - : Lève une exception au sein d'un générateur. Cela correspond à la méthode `throw()` pour les générateurs ES2015.

### Exemple utilisant un générateur historique

```js
function* fibonacci() {
  var a = yield 1;
  yield a * 2;
}

var it = fibonacci();
console.log(it);          // "Generator {  }"
console.log(it.next());   // 1
console.log(it.send(10)); // 20
console.log(it.close());  // undefined
console.log(it.next());   // throws StopIteration (le générateur est clôturé)
```

## Spécifications

| Spécification                                                                                | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-generator-objects', 'Generator objects')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-generator-objects', 'Generator objects')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Generator")}}

## Voir aussi

### Générateurs historiques

- {{jsxref("Instructions/Fonction_génératrice_historique", "Fonction génératrice historique", "", 1)}}
- {{jsxref("Opérateurs/function*", "L'expression d'un générateur historique", "", 1)}}
- {{jsxref("StopIteration")}}
- [Le protocole itérateur historique](/fr/docs/Web/JavaScript/Guide/Le_protocole_itérateur_historique)

### Générateurs ES2015

- {{jsxref("Fonctions", "Fonctions", "", 1)}}
- {{jsxref("Instructions/function", "function")}}
- L'expression {{jsxref("L_opérateur_function", "function")}}
- {{jsxref("Function")}}
- {{jsxref("Instructions/function*", "function*")}}
- L'expression {{jsxref("Opérateurs/function*", "function*")}}
- {{jsxref("GeneratorFunction")}}
- [Le protocole Iterator](/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator)
