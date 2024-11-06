---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
---

{{JSRef}}

Chaque fonction JavaScript est en réalité un objet `Function` (ce qu'on peut vérifier avec l'expression `(function(){}).constructor === Function` qui donne `true`).

## Constructeur

- [`Function()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
  - : Crée un nouvel objet `Function`. Appeler le constructeur directement permet de créer des fonctions dynamiquement, mais ouvre la porte à des problèmes de sécurité et de performances (à l'instar de la fonction [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval)). Toutefois, à la différence de `eval()`, l'impact est bien moindre, car le constructeur `Function` crée des fonctions qui s'exécutent uniquement dans la portée globale.

## Propriétés des instances

- [`Function.prototype.arguments`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) {{Deprecated_Inline}}
  - : Un tableau contenant les arguments passés à la fonction. Cette propriété de `Function` est dépréciée, il faudra à la place utiliser l'objet [`arguments`](/fr/docs/Web/JavaScript/Reference/Functions/arguments) qui est disponible à l'intérieur de la fonction.
- [`Function.prototype.caller`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) {{Deprecated_Inline}}
  - : Indique la fonction qui a appelé la fonction courante qui s'exécute. Cette propriété est dépréciée et ne fonctionne que pour les fonctions non-strictes.
- [`Function.prototype.displayName`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName)
  - : Le nom d'affichage de la fonction.
- [`Function.prototype.length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Indique le nombre d'arguments attendus par la fonction.
- [`Function.prototype.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Le nom de la fonction.

## Méthodes des instances

- [`Function.prototype.apply(<var>thisArg</var> [, <var>argsArray</var>])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
  - : Appelle une fonction et définit sa valeur `this` avec l'argument `thisArg` fourni. Les arguments peuvent être passés via un [tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array).
- [`Function.prototype.bind(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]]])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
  - : Crée une nouvelle fonction qui, lorsqu'elle est appelée, a sa valeur `this` fixée avec l'argument `thisArg` fourni. Une suite d'arguments peut également être fournie afin qu'ils soient passés parmi les premiers arguments de la nouvelle fonction ainsi créée lorsqu'elle est appelée.
- [`Function.prototype.call(<var>thisArg</var>[, <var>arg1</var>, <var>arg2</var>, ...<var>argN</var>])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
  - : Appelle une fonction en fixant sa valeur `this` avec la valeur fournie. Les arguments sont passés tels quels.
- [`Function.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)
  - : Renvoie une chaîne de caractères qui représente le code source de la fonction. Il s'agit d'une surcharge de la méthode [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).

## Exemples

### Différence entre l'utilisation du constructeur `Function()` et les déclarations de fonction

Les fonctions créées avec le constructeur `Function()` ne créent pas de fermetures contenant leur contexte de création&nbsp;; elles sont toujours créées dans la portée globale. Lors de leur exécution, elles ne pourront accéder qu'à leurs propres variables locales et aux variables globales, elles ne pourront pas accéder aux variables de la portée dans laquelle le constructeur `Function()` a été appelé. Il s'agit d'un comportement différent que celui obtenu en utilisant [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval) avec une expression de fonction.

```js
var x = 10;

function creerFonction1() {
  var x = 20;
  return new Function("return x;");
  // ce x fait référence à la variable globale x
}

function creerFonction2() {
  var x = 20;
  function f() {
    return x;
    // ce x fait référence à la variable locale x juste avant
  }
  return f;
}

var f1 = creerFonction1();
console.log(f1()); // 10
var f2 = creerFonction2();
console.log(f2()); // 20
```

Bien que ce code fonctionne dans les navigateurs web, `f1()` déclenchera une erreur `ReferenceError` avec Node.js, car `x` ne sera pas trouvé. En effet, la portée de plus haut niveau de Node n'est pas la portée globale et `x` sera local au module.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Fonctions et portées](/fr/docs/Web/JavaScript/Reference/Functions)
- L'instruction [`function`](/fr/docs/Web/JavaScript/Reference/Statements/function)
- L'expression [`function`](/fr/docs/Web/JavaScript/Reference/Operators/function)
- L'instruction [`function*`](/fr/docs/Web/JavaScript/Reference/Statements/function*)
- L'expression [`function*`](/fr/docs/Web/JavaScript/Reference/Operators/function*)
- [`AsyncFunction`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)
- [`GeneratorFunction`](/fr/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)
