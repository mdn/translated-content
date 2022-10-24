---
title: Passer au mode strict
slug: conflicting/Web/JavaScript/Reference/Strict_mode
tags:
  - Avancé
  - JavaScript
translation_of: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
original_slug: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
---
{{jsSidebar("More")}}

Le [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) fut introduit avec ECMAScript 5 et est désormais présent dans les principaux navigateurs. Pour indiquer au navigateur l'utilisation de ce mode, il suffit d'ajouter `"use strict";` au début du code source. En revanche, il faut un peu plus de travail afin de migrer une base de code existante afin qu'elle utilise intégralement le mode strict.

Cet article a pour but de guider les développeurs qui souhaitent effectuer cette migration.

## Transition progressive

Le mode strict a été conçu afin que la transition puisse être effectuée de façon progressive. Il est possible de modifier chaque fichier individuellement voire, éventuellement, de descendre cette granularité aux fonctions.

## Différences entre strict et non-strict

### Erreurs de syntaxe

En utilisant `"use strict";`, certaines instructions ou fragments de code lanceront une exception {{jsxref("SyntaxError")}} avant l'exécution du script :

- La syntaxe pour la base octale : `var n = 023;`
- L'instruction {{jsxref("Instructions/with","with")}}
- L'instruction {{jsxref("Instructions/delete","delete")}} pour un nom de variable `delete maVariable`;
- L'utilisation de {{jsxref("Objets_globaux/eval","eval()")}} ou {{jsxref("Fonctions/arguments","arguments")}} comme un nom de variable ou un nom d'argument
- L'utilisation d'un des nouveaux mots-clés réservés (en prévision d'ECMAScript 2015 (ES6)) : `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, et `yield`
- La déclaration de fonctions dans des blocs `if(a<b){ function f(){} }`
- Les erreurs évidentes

  - Déclarer deux fois le nom d'une propriété dans un littéral objet `{a: 1, b: 3, a: 7}`. Ceci n'est plus le cas pour ECMAScript 2015 (ES6) : {{bug(1041128)}}
  - Déclarer deux arguments de fonction avec le même nom `function f(a, b, b){}`

Ces erreurs sont bienvenues car elles révèlent des mauvaises pratiques et certaines erreurs claires. Elles apparaissent avant l'exécution du code.

### Erreurs à l'exécution

JavaScript échoue silencieusement dans certains contextes où une erreur se produit. Le mode strict lance une exception dans ces cas. Si votre code contient certains de ces cas, il sera nécessaire de faire des tests afin de vous assurer que rien n'est cassé. Encore une fois, il est possible d'utiliser le mode strict à la granularité des fonctions.

#### Attribuer une valeur à une variable non déclarée

```js
function f(x){
  "use strict";
  var a = 12;
  b = a + x*35; // erreur !
}
f(42);
```

Cela a pour effet de changer une valeur de l'objet global, ce qui est rarement voulu. Si vous souhaitez définir une valeur pour l'objet global, utilisez le comme argument et assignez la propriété de façon explicite :

```js
// au niveau le plus haut "this" fait toujours référence
// à l'objet global
var global = this;

function f(x){
  "use strict";
  var a = 12;
  global.b = a + x*35;
}
f(42);
```

#### Essayer de supprimer une propriété non-configurable

```js
"use strict";
delete Object.prototype; // erreur !
```

En mode non-strict, cela serait passé sous silence (contrairement à ce à quoi l'utilisateur pourrait s'attendre).

#### Utiliser les mauvaises propriétés d'arguments et function

Utiliser `arguments.callee`, `arguments.caller`, `anyFunction.caller` ou encore `anyFunction.arguments` renverra une erreur en mode strict. Le seul cas légitime pour les utiliser serait :

```js
// exemple tiré de vanillajs: http://vanilla-js.com/
var s = document.getElementById('truc').style;
s.opacity = 1;
(function(){
  if((s.opacity-=.1) < 0)
    s.display="none";
  else
    setTimeout(arguments.callee, 40);
})();
```

qu'on peut réécrire en :

```js
"use strict";
var s = document.getElementById('truc').style;
s.opacity = 1;
(function fadeOut(){ // on nomme la fonction
  if((s.opacity-=.1) < 0)
    s.display="none";
  else
    setTimeout(fadeOut, 40); // on utilise ce nom
})();
```

### Les différences sémantiques

Ces différences sont très subtiles et il est possible qu'un ensemble de tests ne détecte pas ces différences. Il peut être alors nécessaire d'analyser votre code avec précaution afin de vérifier que la signification du code n'ait pas changé. Encore une fois, cela peut être fait fonction par fonction.

#### Le sens de `this` dans les appels de fonction

Lors de l'appel à une fonction comme `f()`, la valeur de `this` correspondait à l'objet global. En mode strict, cette valeur devient `undefined`. Lorsqu'une fonction était appelée avec {{jsxref("Function.prototype.call","call()")}} ou {{jsxref("Function.prototype.apply","apply()")}}, si la valeur était une valeur primitive, elle était placée dans un objet (ou dans l'objet global pour `undefined` et `null`). En mode strict, la valeur est passée directement, sans conversion ni remplacement.

#### `arguments` ne crée pas d'alias pour les arguments nommés d'une fonction

En mode non-strict, la modification d'une valeur de l'objet `arguments` entraînait la modification de l'argument correspondant. Cela complexifie les optimisations des moteurs JavaScript et et la lecture du code. En mode strict, l'objet `arguments` est créé et initialisé avec les mêmes valeurs que les arguments nommés. En revanche, les changements apportés à l'objet `arguments` ou aux arguments nommés ne sont pas reproduit de l'un vers l'autre et réciproquement.

#### Changements apportés à `eval`

En mode strict, `eval` ne crée pas de nouvelle variable dans la portée depuis laquelle il a été appelé. Bien entendu, la chaîne évaluée est évaluée selon les règles du mode strict. Pour s'assurer du bon fonctionnement de cette évaluation, il faut s'assurer des cas de figures qui s'y présentent pour les tester. Rappel : il ne faut utiliser `eval` que si cela est nécessaire (les dangers liés à cette fonction font qu'on observe de mauvaises pratiques).

## La neutralité du code quant au mode strict

Un des aspects négatifs de cette migration est la sémantique : le sens du code pourrait être différent dans les navigateurs historiques qui n'implémentent pas le mode strict. Dans quelques rares cas (une mauvaise concaténation ou minification), votre code pourrait ne pas fonctionner dans le mode que vous avez testé. Voici quelques règles pour que le code soit le plus neutre possible quant au mode choisi (strict ou non-strict) :

1. Écrivez votre code « strictement » et assurez vous de lancer des exceptions dans le cadre d'erreurs liées au mode non-strict (voir la section « Erreurs à l'exécution » ci-avant)
2. Minimisez l'utilisation des éléments dont la sémantique pourrait changer :

    1. `eval`&nbsp;: n'utilisez cette fonction uniquement si vous êtes certains que c'est l'unique solution
    2. `arguments`&nbsp;: utilisez les arguments d'une fonction via leur nom ou faites une copie de l'objet en utilisant&nbsp;:
        `var args = Array.prototype.slice.call(arguments)`
        au tout début de votre fonction
    3. `this`&nbsp;: n'utilisez `this` que pour faire référence à un objet que vous avez créé

## Voir aussi

- [Le mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode)
