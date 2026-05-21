---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`Function`** fournit des méthodes pour les [fonctions](/fr/docs/Web/JavaScript/Reference/Functions). En JavaScript, chaque fonction est en réalité un objet `Function`.

## Constructeur

- {{JSxRef("Function/Function", "Function()")}}
  - : Crée un nouvel objet `Function`. Appeler le constructeur directement permet de créer des fonctions dynamiquement, mais cela présente des problèmes de sécurité et de performances similaires (mais bien moindres) à {{JSxRef("Global_Objects/eval", "eval()")}}. Cependant, contrairement à `eval()`, le constructeur `Function` crée des fonctions qui s'exécutent uniquement dans la portée globale.

## Propriétés d'instance

Ces propriétés sont définies sur `Function.prototype` et partagées par toutes les instances de `Function`.

- {{JSxRef("Function.prototype.arguments")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Représente les arguments passés à cette fonction. Pour les fonctions [strictes](/fr/docs/Web/JavaScript/Reference/Strict_mode), fléchées, asynchrones et génératrices, accéder à la propriété `arguments` déclenche une {{JSxRef("TypeError")}}. Utilisez plutôt l'objet {{JSxRef("Functions/arguments", "arguments")}} à l'intérieur des fermetures de fonction.
- {{JSxRef("Function.prototype.caller")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Représente la fonction qui a appelé cette fonction. Pour les fonctions [strictes](/fr/docs/Web/JavaScript/Reference/Strict_mode), fléchées, asynchrones et génératrices, accéder à la propriété `caller` déclenche une erreur de typage ({{JSxRef("TypeError")}}).
- {{JSxRef("Object/constructor", "Function.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Function`, la valeur initiale est le constructeur {{JSxRef("Function/Function", "Function")}}.

Ces propriétés sont propres à chaque instance de `Function`.

- {{JSxRef("Function/displayName", "displayName")}} {{Non-standard_Inline}} {{Optional_Inline}}
  - : Le nom d'affichage de la fonction.
- {{JSxRef("Function/length", "length")}}
  - : Indique le nombre d'arguments attendus par la fonction.
- {{JSxRef("Function/name", "name")}}
  - : Le nom de la fonction.
- {{JSxRef("Function/prototype", "prototype")}}
  - : Utilisé lorsque la fonction est utilisée comme constructeur avec l'opérateur {{JSxRef("Operators/new", "new")}}. Cela deviendra le prototype du nouvel objet.

## Méthodes d'instance

- {{JSxRef("Function.prototype.apply()")}}
  - : Appelle une fonction avec une valeur `this` donnée et des arguments optionnels fournis sous forme de tableau (ou [d'objet semblable à un tableau](/fr/docs/Web/JavaScript/Guide/Indexed_collections#travailler_avec_des_objets_sembables_à_un_tableau)).
- {{JSxRef("Function.prototype.bind()")}}
  - : Crée une nouvelle fonction qui, lorsqu'elle est appelée, a son mot-clé `this` fixé à une valeur donnée, éventuellement avec une séquence d'arguments précédant ceux fournis lors de l'appel de la nouvelle fonction.
- {{JSxRef("Function.prototype.call()")}}
  - : Appelle une fonction avec une valeur `this` donnée et des arguments optionnels.
- {{JSxRef("Function.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant le code source de la fonction.
    Surcharge la méthode {{JSxRef("Object.prototype.toString")}}.
- [`Function.prototype[Symbol.hasInstance]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)
  - : Définit la procédure par défaut pour déterminer si une fonction constructeur reconnaît un objet comme étant une de ses instances. Appelée par l'opérateur {{JSxRef("Operators/instanceof", "instanceof")}}.

## Exemples

### Différence entre l'utilisation du constructeur `Function()` et les déclarations de fonction

Les fonctions créées avec le constructeur `Function()` ne créent pas de fermetures contenant leur contexte de création&nbsp;; elles sont toujours créées dans la portée globale. Lors de leur exécution, elles ne pourront accéder qu'à leurs propres variables locales et aux variables globales, elles ne pourront pas accéder aux variables de la portée dans laquelle le constructeur `Function()` a été appelé. Il s'agit d'un comportement différent que celui obtenu en utilisant {{JSxRef("Global_Objects/eval", "eval()")}} avec une expression de fonction.

```js
// Crée une propriété globale avec `var`
var x = 10;

function creerFonction1() {
  var x = 20;
  return new Function("return x;"); // ce `x` fait référence au `x` global
}

function creerFonction2() {
  var x = 20;
  function f() {
    return x; // ce `x` fait référence au `x` local ci-dessus
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

- La déclaration {{JSxRef("Statements/function", "function")}}
- Le mot-clé {{JSxRef("Operators/function", "function")}}
- L'objet {{JSxRef("AsyncFunction")}}
- L'objet {{JSxRef("AsyncGeneratorFunction")}}
- L'objet {{JSxRef("GeneratorFunction")}}
- {{JSxRef("Functions", "Les fonctions", "", 1)}}
