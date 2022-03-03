---
title: callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
tags:
  - Déprécié
  - Fonctions
  - JavaScript
  - Propriété
  - Reference
  - arguments
translation_of: Web/JavaScript/Reference/Functions/arguments/callee
original_slug: Web/JavaScript/Reference/Fonctions/arguments/callee
---
{{jsSidebar("Functions")}}{{deprecated_header}}

La propriété **`arguments.callee`** contient la fonction en cours d'exécution.

## Description

`callee` est une propriété de l'objet `arguments`. Elle peut être utilisée afin de faire référence à la fonction en cours d'exécution à l'intérieur de cette fonction. Cette propriété peut etre utile lorsqu'on ne connait pas le nom de la fonction (fonction anonyme par exemple).

> **Attention :** En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), ECMAScript 5 interdit la fonction `arguments.callee()`. Éviter de l'utiliser en utilisant un nom de fonction dans les expressions ou en utilisant une déclaration de fonction où la fonction s'appelle elle-même.

### Pourquoi `arguments.callee` a-t-il été retiré du mode strict ES5 ?

(adapté d'une réponse [Stack Overflow par olliej](http://stackoverflow.com/a/235760/578288 "http://stackoverflow.com/a/235760/578288"))

Aux débuts de JavaScript, il n'était pas possible d'utiliser des expressions de fonction avec des noms. Il était donc impossible de faire une expression de fonction récursive.

Cette syntaxe produisait le résultat escompté :

```js
function factorielle (n) {
    return !(n > 1) ? 1 : factorielle(n - 1) * n;
}

[1,2,3,4,5].map(factorielle);
```

mais :

```js
[1,2,3,4,5].map(function (n) {
    return !(n > 1) ? 1 : /* que met-on ici ? */ (n - 1) * n;
});
```

ne fonctionnait pas. Pour que cela puisse fonctionner, on ajouta `arguments.callee` :

```js
[1,2,3,4,5].map(function (n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```

Cependant, ce fut une mauvaise solution (avec `caller` également) car elle rendit impossible l'[extension inline](https://fr.wikipedia.org/wiki/Extension_inline) et la [récursion terminale](https://fr.wikipedia.org/wiki/R%C3%A9cursion_terminale) de façon générale (il est possible d'y arriver de certaines façons mais cela entraînerait nécessairement un code moins efficace). Le second problème que cela entraîne est que l'appel récursif aura une autre valeur `this` :

```js
var global = this;

var fonctionTruc = function (recursed) {
    if (!recursed) { return arguments.callee(true); }
    if (this !== global) {
        console.log("this est : " + this);
    } else {
        console.log("this est la variable globale");
    }
}

fonctionTruc();
```

ECMAScript 3 a introduit les expressions de fonctions nommées pour résoudre le problème. On peut désormais utiliser :

```js
[1,2,3,4,5].map(function factorielle (n) {
    return !(n > 1) ? 1 : factorielle(n - 1)*n;
});
```

Cette méthode possède plusieurs avantages :

- La fonction peut être appelée comme n'importe quelle autre fonction nommée dans le code
- Cela ne crée pas une variable dans la portée extérieure ([sauf pour IE 8 et les versions antérieures](http://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
- Cela entraîne de meilleures performances que d'accéder aux propriétés de l'objet `arguments`

Une autre fonctionnalité qui a été déprécié est : `arguments.callee.caller`, ou plus précisément `Function.caller`. Pourquoi cela ? Parce que ça permet d'avoir accès à tout moment à la fonction appelante la plus loin dans la pile d'appels. Or, comme évoqué ci-avant, cela a un effet de bord considérable : ça rend beaucoup plus complexes voire impossibles certaines optimisations. Ainsi, on ne peut pas garantir qu'une fonction `f` n'appellera pas une autre fonction inconnue, ce qui signifie qu'on ne peut pas utiliser l'extension inline. En résumé, cela signifie que n'importe quel site d'appel de fonction (_call site_) qui aurait pu être développé inline très simplement devra subir de nombreux tests :

```js
function f (a, b, c, d, e) { return a ? b * c : d * e; }
```

Si l'interpréteur JavaScript ne peut pas garantir que l'ensemble des arguments fournis ici sont des nombres à l'instant de l'appel de la fonction, il devra insérer des vérifications pour chaque argument avant le code inline, sinon il ne pourra pas développer la fonction inline. On notera que, dans ce cas, un interpréteur intelligent devrait pouvoir réarranger les vérifications à faire afin qu'elles soient optimales et de se débarrasser des valeurs inutiles. Malgré tout, une telle optimisation ne sera pas possible dans d'autres cas, ce qui signifie que le développement inline n'est pas possible.

## Exemples

### Utiliser `arguments.callee` pour une fonction anonyme récursive

Une fonction récursive, par définition, s'appelle elle-même. Elle fait donc généralement référence à elle-même grâce à son nom. Cependant, une fonction anonyme (créée grâce ) une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_function) ou au constructeur {{jsxref("Function")}}) n'a pas de nom et la seule façon d'y faire référence est donc d'utiliser `arguments.callee`.

L'exemple qui suit illustre une fonction qui définit et renvoie une fonction factorielle. Cet exemple n'a qu'un but démonstratif et ne correspond certainement pas à ce qui serait utilisé en pratique (les expressions de fonctions pouvant être [nommées](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_function)).

```js
function créer() {
   return function(n) {
      if (n <= 1)
         return 1;
      return n * arguments.callee(n - 1);
   };
}

var résultat = create()(5); // renvoie 120 (5 * 4 * 3 * 2 * 1)
```

### Une utilisation d'`arguments.callee` qui ne possède pas de solution de remplacement

Malgré tout, dans un cas comme le suivant, il n'existe pas d'équivalent pour `arguments.callee`, c'est pourquoi sa déprécation pourrait être un bug (voir {{Bug("725398")}}):

```js
function créerPersonne (sIdentité) {
    var oPersonne = new Function("alert(arguments.callee.identité);");
    oPersonne.identité = sIdentité;
    return oPersonne;
}

var jean = créerPersonne("Jean Biche");

jean();
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires                                         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}                                         | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilité des navigateurs

{{Compat("javascript.functions.arguments.callee")}}

## Voir aussi

- {{jsxref("Function")}}
