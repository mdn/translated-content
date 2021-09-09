---
title: arguments
slug: Web/JavaScript/Reference/Functions/arguments
tags:
  - Fonctions
  - Functions
  - JavaScript
  - Reference
  - arguments
translation_of: Web/JavaScript/Reference/Functions/arguments
original_slug: Web/JavaScript/Reference/Fonctions/arguments
---
{{jsSidebar("Fonctions")}}

L'objet **`arguments`** est un objet, **semblable** à un tableau, correspondant aux arguments passés à une fonction.

> **Note :** Si vous pouvez utiliser les fonctionnalités ECMAScript 2015/ES6, il est préférable de manipuler les arguments avec [les paramètres du reste](/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste).

> **Note :** Par « objet semblable à un tableau », on indique que l'objet `arguments` possède une propriété {{jsxref("Fonctions/arguments.length", "length")}} et que ses propriétés sont indexées à partir de 0 mais qu'il ne possède aucune des méthodes natives de {{jsxref("Array")}} telles que {{jsxref("Array.forEach", "forEach()")}} et {{jsxref("Array.map", "map()")}}.

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}

> **Note :** « Variable ayant la fonction pour portée » correspond à la traduction de « Variable of the function scope » qu'il serait incorrect de traduire par « Variable de la portée de la fonction » car la portée de la fonction est la portée dans laquelle on peut appeler la fonction. Une variable locale de la fonction pourrait quant à elle avoir une portée strictement incluse dans le corps de la fonction (variable définie dans un bloc de la fonction même si cette subtilité n'existe pas en Javascript). Toute suggestion pour éviter cette tournure un peu longue sans altérer le sens est la bienvenue. (variable intrinsèque)

## Syntaxe

    arguments

## Description

L'objet `arguments` est une variable locale (intrinsèque et inhérente aux fonctions) disponible dans toutes les fonctions (qui ne sont pas [des fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)).

Vous pouvez accéder aux arguments d'une fonction à l'intérieur de celle-ci en utilisant l'objet `arguments`. Cet objet contient une entrée pour chaque argument passé à la fonction, l'indice de la première entrée commençant à 0. Par exemple, si une fonction est appelée avec trois arguments, on accède à ceux-ci comme suit :

```js
arguments[0]
arguments[1]
arguments[2]
```

Les arguments peuvent aussi être modifiés :

```js
arguments[1] = 'nouvelle valeur';
```

### Type de l'objet `arguments` et liens avec `Array`

L'objet `arguments` n'est pas un {{jsxref("Array")}}. Il est similaire à un `Array`, mais il n'a pas les propriétés d'un `Array,` exceptée la propriété {{jsxref("Array.length", "length")}}. Par exemple, il n'a pas la méthode {{jsxref("Array.pop", "pop()")}}. Néanmoins, il peut être converti en un vrai objet de type `Array` :

```js
console.log(typeof arguments); // 'object'
var args = Array.prototype.slice.call(arguments);

// Avec ECMAScript 2015 / ES6
var args = Array.from(arguments);
```

### Utilisation de la décomposition avec les arguments

On peut utiliser la méthode {{jsxref("Array.from()")}} ou encore [l'opérateur de décomposition](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateur_de_d%C3%A9composition) afin de convertir cet objet en un _vrai_ `Array` :

```js
var args = Array.from(arguments);
var args = [...arguments];
```

> **Attention :** Il est déconseillé d'utiliser `slice` sur les arguments car cela peut empêcher certaines optimisations des moteurs JavaScript. Pour ce scénario, on peut par exemple construire un nouveau tableau en parcourant l'objet arguments (à ce sujet, voir [cette page](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments) sur les contraintes d'optimisations liées à V8). Pour cet exemple, on pourra utiliser `Array.apply` :
>
> ```js
> var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
> ```

L'objet `arguments` est disponible uniquement dans le corps d'une fonction. Tenter d'accéder à l'objet `arguments` en dehors de la déclaration d'une fonction renvoie une erreur.

Vous pouvez utiliser l'objet `arguments` si vous appelez une fonction avec plus de paramètres que ceux déclarés dans sa signature. Cette technique est utile pour les fonctions qui acceptent un nombre variable d'arguments. Vous pouvez utiliser  {{jsxref("Fonctions/arguments/length", "arguments.length")}} pour déterminer le nombre de paramètres passés à la fonction, puis utiliser chaque argument en utilisant l'objet `arguments`. (Pour déterminer le nombre d'arguments déclarés à la définition de la fonction, il faut utiliser la propriété {{jsxref("Function.length", "length")}}.)

### Utiliser `typeof` sur `arguments`

L'opérateur {{jsxref("Opérateurs/L_opérateur_typeof","typeof")}} renvoie `"object"` lorsqu'on l'utilise sur `arguments`

```js
console.log(typeof arguments); // "object"
```

On peut tout à fait utiliser `typeof` sur chacun des arguments afin de connaître leur type respectif

```js
console.log(typeof arguments[0]); // renvoie le type du premier argument
```

## Propriétés

- {{jsxref("Fonctions/arguments/callee", "arguments.callee")}} {{Deprecated_inline}}
  - : Référence à la fonction en cours d'exécution.
- {{jsxref("Fonctions/arguments/caller", "arguments.caller")}} {{Obsolete_inline}}
  - : Référence à la fonction appelante.
- {{jsxref("Fonctions/arguments/length", "arguments.length")}}
  - : Référence au nombre d'arguments passés à la fonction.
- {{jsxref("Fonctions/arguments/@@iterator", "arguments[@@iterator]")}}
  - : Renvoie un nouvel [itérateur](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs#Itérateurs) qui contient les valeurs pour chaque indice d'`arguments`.

## Exemples

### Définir une fonction de concaténation d'un nombre variable de chaînes

Cet exemple définit une fonction qui concatène un nombre variable de chaînes. Le seul argument formel de la fonction est une chaîne spécifiant un séparateur inséré entre les chaînes concaténées. La fonction est définie comme suit :

```js
function myConcat(separateur) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separateur);
}
```

Vous pouvez passer n'importe quel nombre d'arguments à cette fonction ; elle créera une liste en utilisant chaque argument comme un élément de la liste.

```js
// renvoie "rouge, orange, bleu"
myConcat(", ", "rouge", "orange", "bleu");

// renvoie "éléphant ; giraffe ; lion ; guépard"
myConcat(" ; ", "elephant", "giraffe", "lion", "guépard");
```

### Définir une fonction de création de listes HTML

Cet exemple définit une fonction qui crée des chaînes définissant des listes HTML. Le seul argument formel de la fonction est une chaîne pouvant valoir "`u`" (unordered), si la liste doit être sans numérotation (avec des puces), ou "`o`" (ordered), si la liste doit être numérotée. La fonction est définie comme suit :

```js
function liste(type) {
  var resultat = "<" + type + "l><li>";
  var args = Array.prototype.slice.call(arguments, 1);
  resultat += args.join("</li><li>");
  resultat += "</li></" + type + "l>"; // end list

  return resultat;
}
```

Vous pouvez passer n'importe quel nombre d'arguments à cette fonction ; elle créera une liste du type indiqué en ajoutant chaque argument comme élément dans la liste. Exemple :

```js
var listeHTML = liste("u", "Un", "Deux", "Trois");

/* listeHTML vaut  :

"<ul><li>Un</li><li>Deux</li><li>Trois</li></ul>"

*/
```

### Paramètres du reste, paramètres par défaut et décomposition

L'objet `arguments` peut être utilisé en combinaison avec [les paramètres du reste](/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste), [les paramètres par défaut](/fr/docs/Web/JavaScript/Reference/Fonctions/Valeurs_par_défaut_des_arguments) ou [les paramètres décomposés](/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition).

```js
function toto(...args) {
  return args;
}
toto(1, 2, 3); // [1, 2, 3]
```

Toutefois, pour les fonctions utilisées en mode non-strict, un **objet `arguments`** n'est fourni à l'intérieur de la fonction uniquement si celle-ci n'utilise pas de [paramètres du reste](/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste), pas de [paramètres par défaut](/fr/docs/Web/JavaScript/Reference/Fonctions/Valeurs_par_défaut_des_arguments) ou de [paramètre décomposé](/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition). Par exemple, dans la fonction suivante, qui utilise un paramètre par défaut, ce sera 10 qui sera renvoyé (et non 100) :

```js
function truc(a=1) {
  arguments[0] = 100;
  return a;
}
truc(10); // 10
```

Si l'objet `arguments` est modifié dans la fonction, cela modifiera la valeur du paramètre passé. Dans cet exemple où il n'y a ni [paramètres du reste](/fr/docs/Web/JavaScript/Reference/Fonctions/param%C3%A8tres_du_reste), ni [paramètres par défaut](/fr/docs/Web/JavaScript/Reference/Fonctions/Valeurs_par_défaut_des_arguments), ni [décomposition](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateur_de_d%C3%A9composition), le résultat sera 100 :

```js
fonction truc(a) {
  arguments[0] = 100;
  return a;
}
truc(10); // 100
```

En fait, lorsqu'il n'y a aucun paramètre du reste, paramètre par défaut ou aucune décomposition, les arguments formels feront références aux valeurs de l'objet `arguments`. Lorsqu'on aura besoin d'accéder à ces valeurs, on accèdera aux valeurs contenues dans `arguments` et à l'inverse, lorsqu'on modifiera ces valeurs, cela modifiera le contenu d'`arguments`. Par exemple

```js
function func(a, b) {
  arguments[0] = 99;
  arguments[1] = 99;
  console.log(a + " " +b);
}

func(1, 2); // 99 99
```

ou encore :

```js
function func(a, b) {
  a = 9;
  b = 99;
  console.log(arguments[0] + " " + arguments[1]);
}

func(3, 4); // 9 99
```

En revanche, dès qu'on utilise des paramètres du reste, des paramètres par défaut ou la décomposition, c'est le comportement normal qui sera appliqué :

```js
function func(a, b, c = 9) {
  arguments[0] = 99;
  arguments[1] = 98;
  console.log(a + " " + b);
}

func(3, 4); // 3 4
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires                                        |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Définition initiale. Implémentée par JavaScript 1.1 |
| {{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}                                         | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES2015', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}} | {{Spec2('ES2015')}}     |                                                     |
| {{SpecName('ESDraft', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}} | {{Spec2('ESDraft')}} |                                                     |

## Compatibilité des navigateurs

{{Compat("javascript.functions.arguments")}}

## Voir aussi

- {{jsxref("Function")}}
- [Les paramètres du reste](/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste)
- [Contraintes d'optimisations sous V8 en relation avec `arguments`](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)
