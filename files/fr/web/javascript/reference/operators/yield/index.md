---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
tags:
  - ECMAScript 2015
  - Générateurs
  - Itérateur
  - JavaScript
  - Opérateur
translation_of: Web/JavaScript/Reference/Operators/yield
original_slug: Web/JavaScript/Reference/Opérateurs/yield
---
{{jsSidebar("Operators")}}

Le mot-clé `yield` est utilisé pour suspendre et reprendre une fonction génératrice ({{jsxref("Statements/function*", "function*")}} ou [une fonction génératrice historique](/fr/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)).

{{EmbedInteractiveExample("pages/js/expressions-yield.html")}}

## Syntaxe

    [[rv =]] yield [[expression]];

- `expression`
  - : Définit la valeur à retourner depuis la fonction génératrice via [le protocole itérateur](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérateur_»). Si omise, `undefined` sera retournée à la place.
- `rv`
  - : Retourne la valeur optionnelle passée à la méthode `next()` pour reprendre son exécution.

## Description

Le mot-clé `yield` suspend une fonction génératrice et la valeur de l'expression suivant le mot-clé `yield` est retournée à l'appelant du générateur. Il peut être vu comme une version générateur du mot-clé `return`.

Le mot-clé `yield` ne peut être appelé qu'à partir de la fonction génératrice qui le contient. Il ne peut pas être utilisé depuis des fonctions imbriquées ou avec des _callbacks_.

Le mot-clé `yield` retourne en fait un objet `IteratorResult` ayant deux propriétés, `value` et `done.` La propriété `value` est le résultat de l'évaluation de l'expression `yield`, et `done` est `false`, indiquant que la fonction génératrice n'est pas complètement terminée.

Une fois suspendue sur une expression `yield`, l'exécution du code du générateur reste suspendue jusqu'à ce que la méthode `next()` du générateur soit appelée. Chaque fois que la méthode `next()` du générateur est appelée, le générateur reprend l'exécution et s'exécute jusqu'à ce qu'elle atteigne l'une des situations suivantes :

- un `yield`, ce qui provoque une nouvelle pause du générateur et retourne la nouvelle valeur du générateur ; la prochaine fois que `next()` sera appelé, l'exécution reprendra à l'instruction immédiatement après le `yield` ;
- {{jsxref ("Statements/throw", "throw")}} est utilisé pour déclencher une exception depuis le générateur ; cela arrête entièrement l'exécution du générateur et l'exécution reprend dans l'appelant, comme c'est normalement le cas lorsqu'une exception est déclenchée ;
- la fin de la fonction génératrice est atteinte ; dans ce cas, l'exécution du générateur se termine et un `IteratorResult` est retourné à l'appelant, dans lequel la valeur est {{jsxref ("undefined")}} et `done` est `true` ;
- une instruction {{jsxref ("Statements/return", "return")}} est atteinte ; dans ce cas, l'exécution du générateur se termine et un `IteratorResult` est retourné à l'appelant dans lequel la `value` est la valeur spécifiée par l'instruction `return` et `done` vaut `true`.

Si une valeur optionnelle est passée à la méthode `next()` du générateur, cette valeur devient la valeur retournée par l'opération `yield` en cours du générateur.

Entre le chemin de code du générateur, ses opérateurs `yield`, et la possibilité de spécifier une nouvelle valeur de départ en la passant à {{jsxref ("Generator.prototype.next()")}}, les générateurs offrent énormément de puissance et de contrôle.

## Exemples

Le code suivant est la déclaration d'un exemple de fonction génératrice :

    function* compteVentesPommes () {
      var listeVentes = [3, 7, 5];
      for (var i = 0; i < listeVentes.length; i++) {
        yield listeVentes[i];
      }
    }

Une fois qu'une fonction génératrice est définie, elle peut être utilisée en construisant un itérateur comme indiqué.

    var magasinPommes = compteVentesPommes(); // Générateur { }
    console.log(magasinPommes.next()); // { value: 3, done: false }
    console.log(magasinPommes.next()); // { value: 7, done: false }
    console.log(magasinPommes.next()); // { value: 5, done: false }
    console.log(magasinPommes.next()); // { value: undefined, done: true }

## Spécifications

| Spécification                                                                | Statut                       | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#prod-YieldExpression', 'Yield')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#prod-YieldExpression', 'Yield')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.operators.yield")}}

## Notes spécifiques à Firefox

- À partir de Gecko 29 {{geckoRelease(29)}}, une fonction génératrice terminée ne déclenche plus une {{jsxref("TypeError")}} "generator has already finished". À la place, elle renvoie un objet `IteratorResult` tel que `{ value: undefined, done: true }` ({{bug(958951)}}).
- À partir de Gecko 33 {{geckoRelease(33)}}, l'analyse de l'expression `yield` a été mise à jour afin d'être conforme aux spécifications ES2015 ({{bug(981599)}}):

  - L'expression après le mot-clé `yield` est optionnelle et l'omettre ne déclenche plus une {{jsxref("SyntaxError")}} : `function* compteVentesPommes() { yield; }`

## Voir aussi

- [Le protocole itérateur](/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator)
- L'instruction {{jsxref("Instructions/function*", "function*")}}
- L'expression {{jsxref("Opérateurs/function*", "function*")}}
- L'opérateur {{jsxref("Opérateurs/yield*", "yield*")}}
