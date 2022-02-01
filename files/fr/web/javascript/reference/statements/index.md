---
title: Instructions
slug: Web/JavaScript/Reference/Statements
tags:
  - JavaScript
  - Reference
  - statements
translation_of: Web/JavaScript/Reference/Statements
original_slug: Web/JavaScript/Reference/Instructions
---
{{jsSidebar("Statements")}}

Les applications JavaScript sont composées de plusieurs instructions organisées grâce à une syntaxe. Une instruction peut s'étaler sur plusieurs lignes et on peut avoir plusieurs instructions sur une seule ligne si chaque instruction est séparée de la suivante par un point-virgule.

## Instructions et déclarations, par catégorie

Pour une liste alphabétique, voir le volet de navigation situé à gauche sur cette page.

### Contrôle du flux

- {{jsxref("Instructions/bloc", "Bloc")}}
  - : Une instruction de bloc est utilisée pour regrouper zéro ou plusieurs instructions. Un bloc est délimité par une paire d'accolades.
- {{jsxref("Instructions/break", "break")}}
  - : Cette instruction termine la boucle ou l'instruction `switch` ou l'instruction `label` en cours et continue l'exécution sur l'instruction suivant l'instruction terminée.
- {{jsxref("Instructions/continue", "continue")}}
  - : Cette instruction termine l'exécution des instructions dans la boucle courante, ou la boucle avec une étiquette correspondante, et continue l'exécution de la boucle dans l'itération suivante.
- {{jsxref("Instructions/vide", "Vide")}}
  - : Une instruction vide est utilisée pour ne fournir aucune instruction là où JavaScript en attendrait une.
- {{jsxref("Instructions/if...else","if...else")}}
  - : Cette instruction exécute une instruction si une condition donnée est vérifiée. Si la condition n'est pas vérifiée une autre instruction pourra être exécutée.
- {{jsxref("Instructions/switch", "switch")}}
  - : Cette instruction permet d'évaluer une expression et de faire correspondre le résultat de cette expression avec différents cas et d'exécuter les instructions associées aux cas qui ont chacun un identifiant.
- {{jsxref("Instructions/throw", "throw")}}
  - : Cette instruction lève une exception.
- {{jsxref("Instructions/try...catch","try...catch")}}
  - : Cette instruction permet de spécifier un ensemble d'instructions à tenter, et de préciser le traitement à effectuer dans le cas où une exception est produite.

### Déclarations

- {{jsxref("Instructions/var", "var")}}
  - : Cette instruction permet de déclarer une variable, éventuellement en fournissant une valeur pour permettant de l'initialiser.
- {{jsxref("Instructions/let", "let")}}
  - : Cette instruction permet de déclarer une variable locale dans une portée d'un bloc et éventuellement d'initialiser sa valeur.
- {{jsxref("Instructions/const", "const")}}
  - : Cette instruction déclare une constante en lecture seule.

### Fonctions et classes

- {{jsxref("Instructions/function", "function")}}
  - : Cette instruction déclare une fonction avec les paramètres donnés.
- {{jsxref("Instructions/function*", "function*")}}
  - : Les fonctions génératrices permettent de créer des [itérateurs](/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator) plus simplement.
- {{experimental_inline}} {{jsxref("Instructions/async_function", "async function")}}
  - : Cette instruction déclare une fonction asynchrone avec les paramètres associés.
- {{jsxref("Instructions/return", "return")}}
  - : Cette instruction spécifie la valeur de retour renvoyée par une fonction.
- {{jsxref("Instructions/class", "class")}}
  - : Déclare une classe.

### Itérations

- {{jsxref("Instructions/do...while", "do...while")}}
  - : Cette instruction crée une boucle qui s'exécute tant que la condition est vraie. La condition est évaluée après avoir exécuté une itération de boucle, ce qui fait que cette boucle sera exécutée au moins une fois.
- {{jsxref("Instructions/for", "for")}}
  - : Cette instruction crée une boucle qui se base sur trois expressions facultatives. Ces expressions sont entre parenthèses, séparées par des points virgules et suivies par l'instruction à exécuter dans la boucle.
- {{jsxref("Instructions/for_each...in", "for each...in")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Cette instruction itère une variable donnée sur toutes les propriétés d'un objet. Pour chaque propriété distincte, une instruction spécifique est exécutée.
- {{jsxref("Instructions/for...in", "for...in")}}
  - : Cette instruction effectue, dans un ordre arbitraire, une boucle sur les propriétés énumérables d'un objet. Pour chacune des différentes propriétés, des instructions peuvent être exécutées.
- {{jsxref("Instructions/for...of", "for...of")}}
  - : Cette instruction parcourt les objets sur lesquels on peut itérer (comme les tableaux, les [itérateurs et générateurs](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs)). Pour ce faire, elle utilise un mécanisme d'itération sur mesure utilisant des instructions à exécuter pour chacune des différentes propriétés.
- {{jsxref("Instructions/for-await...of","for await...of")}}
  - : Cette instruction parcourt les objets itérables asynchrones tels que les tableaux, les [itérateurs et générateurs](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs). Elle utilise un mécanisme d'itération spécifique et des instructions sont exécutées pour la valeur de chaque propriété.
- {{jsxref("Instructions/while", "while")}}
  - : Cette instruction permet de créer une boucle qui s'exécute tant qu'une condition de test est vérifiée. La condition est évaluée avant d'exécuter l'instruction contenue dans la boucle.

### Autres

- {{jsxref("Instructions/debugger", "debugger")}}
  - : Cette instruction appelle une fonctionnalité de débogage. Si aucune fonctionnalité de débogage n'est disponible, l'instruction n'a aucun effet.
- {{jsxref("Instructions/export", "export")}}
  - : Cette instruction permet à un script signé de fournir des propriétés, fonctions et des objets à d'autres scripts (signés ou non).
- {{jsxref("Instructions/import", "import")}}
  - : Cette instruction permet à un script d'importer des propriétés, fonctions ou objets depuis un script qui les exporte.
- [`import.meta`](/fr/docs/Web/JavaScript/Reference/Instructions/import.meta)
  - : Une méta propriété qui expose des métadonnées à propos du module JavaScript.
- {{jsxref("Instructions/label", "label")}}
  - : Cette instruction fournit un identifiant auquel il est possible de se référer en utilisant une instruction `break` ou `continue`.
- {{jsxref("Instructions/with", "with")}} {{deprecated_inline}}
  - : Cette instruction permet d'étendre la portée chaînée d'une instruction.

## Spécifications

| Spécification                                                                                                                                                                    | Statut                       | Commentaires                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------- |
| {{SpecName('ES1', '#sec-12', 'Statements')}}                                                                                                                     | {{Spec2('ES1')}}         | Définition initiale.                                                 |
| {{SpecName('ES3', '#sec-12', 'Statements')}}                                                                                                                     | {{Spec2('ES3')}}         |                                                                      |
| {{SpecName('ES5.1', '#sec-12', 'Statements')}}                                                                                                                     | {{Spec2('ES5.1')}}     |                                                                      |
| {{SpecName('ES6', '#sec-ecmascript-language-statements-and-declarations', 'ECMAScript Language: Statements and Declarations')}}         | {{Spec2('ES6')}}         | Nouveaux éléments : `function*`, `let`, `for...of`, `yield`, `class` |
| {{SpecName('ESDraft', '#sec-ecmascript-language-statements-and-declarations', 'ECMAScript Language: Statements and Declarations')}} | {{Spec2('ESDraft')}} |                                                                      |

## Compatibilité des navigateurs

{{Compat("javascript.statements")}}

## Voir aussi

- Le chapitre de cette référence sur les [opérateurs JavaScript](/fr/docs/JavaScript/Reference/Op%C3%A9rateurs).
