---
title: Constructeur Function()
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
translation_of: Web/JavaScript/Reference/Global_Objects/Function/Function
browser-compat: javascript.builtins.Function.Function
---
{{JSRef}}

Le **constructeur `Function()`** permet de créer un nouvel **objet** `Function`. Appeler le constructeur directement permet de créer des fonctions de façon dynamique, mais souffre des mêmes problèmes de sécurité et de performance, néanmoins dans une moindre mesure, que [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval). Toutefois, à la différence de `eval()`, le constructeur `Function` crée des fonctions qui s'exécutent uniquement dans la portée locale.

{{EmbedInteractiveExample("pages/js/function-constructor.html","shorter")}}

## Syntaxe

```js
new Function(corpsFonction)
new Function(arg1, corpsFonction)
new Function(arg1, … argN, corpsFonction)
```

### Paramètres

- `arg1, … argN`

  - : Les noms à utiliser par la fonction comme noms formels d'arguments. Chacun doit être une chaîne de caractères qui correspond à un paramètre JavaScript valide ([un identifiant](/fr/docs/Glossary/Identifier), [un paramètre du reste](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters), ou [une décomposition en paramètres](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), éventuellement avec une valeur par défaut), ou une liste de telles chaînes, séparées par des virgules.

    Les paramètres étant analysés de la même façon que les déclarations de fonction, les espaces et les commentaires sont acceptés. Ainsi, on pourra écrire `"x", "laValeur = 42", "[a, b] /* nombres */"` — ou `"x, laValeur = 42, [a, b] /* nombres */"` (`"x, laValeur = 42", "[a, b]"` est également correct, mais porte plus à confusion.)

- `corpsFonction`
  - : Une chaîne de caractères contenant les instructions JavaScript qui forment la définition de la fonction.

## Description

Les objets `Function` créés avec le constructeur `Function()` sont analysés lors de la création de la fonction. Cette méthode est moins efficace que de déclarer une fonction en utilisant une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function) ou [une instruction de fonction](/fr/docs/Web/JavaScript/Reference/Statements/function) pour l'appeler ensuite dans le code, car de telles fonctions sont analysées avec le reste du code.

Tous les arguments passés à la fonction sont traités comme les noms des identifiants des paramètres de la fonction à créer, dans l'ordre selon lequel ils sont passés. Omettre un argument fera que la valeur de ce paramètre sera `undefined`.

Appeler le constructeur `Function()` comme une fonction, c'est-à-dire sans utiliser l'opérateur `new`, aura le même effet que de l'utiliser comme un constructeur.

## Exemples

### Définir des arguments avec le constructeur `Function()`

Le code qui suit crée un objet `Function` qui prend deux arguments.

```js
// Crée une fonction qui prend deux arguments et qui en renvoie la somme
const additionneur = new Function('a', 'b', 'return a + b');

// Appeler la fonction
additionneur(2, 6);
// 8
```

Les arguments `"a"` et `"b"` sont les noms formels des arguments utilisés dans le corps de la fonction&nbsp;: `"return a + b"`.

### Créer un objet `Function` avec une déclaration ou une expression de fonction

```js
// Le constructeur Function() peut prendre plusieurs instructions séparées par des points-virgules.
// Une expression de fonction doit contenir une instruction return avec le nom de la fonction.

// On peut voir ici que le résultat de new Function est appelé.
// Ainsi, on peut invoquer juste après la fonction qui vient d'être créée.
const sommeTableau = new Function('const sommeTableau = (arr) => arr.reduce((precedente, courante) => precedente + courante); return sommeTableau')();

// On appelle la fonction
sommeTableau([1, 2, 3, 4]);
// 10

// Si on n'appelle pas new Function au moment de la création,
// on peut toujours utiliser la méthode Function.call() ensuite
const plusGrandNombre = new Function('function plusGrandNombre (arr) { return Math.max(...arr) }; return plusGrandNombre');

// On appelle la fonction
plusGrandNombre.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// Une déclaration de fonction ne nécessite pas d'instruction return
const direCoucou = new Function('return function (nom) { return `Coucou, ${nom}` }')();

// On appelle la fonction
direCoucou('monde');
// Coucou, monde
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Fonctions et portées](/fr/docs/Web/JavaScript/Reference/Functions)
- [Instruction `function`](/fr/docs/Web/JavaScript/Reference/Statements/function)
- [Expression `function`](/fr/docs/Web/JavaScript/Reference/Operators/function)
- [Instruction `function*`](/fr/docs/Web/JavaScript/Reference/Statements/function*)
- [Expression `function*`](/fr/docs/Web/JavaScript/Reference/Operators/function*)
- [`AsyncFunction`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)
- [`GeneratorFunction`](/fr/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)
