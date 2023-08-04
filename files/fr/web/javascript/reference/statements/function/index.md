---
title: function
slug: Web/JavaScript/Reference/Statements/function
---

{{jsSidebar("Statements")}}

La déclaration **`function`** (ou l'instruction `function`) permet de définir une fonction et les paramètres que celle-ci utilise.

{{EmbedInteractiveExample("pages/js/statement-function.html")}}

Il est également possible de définir des fonctions en utilisant le constructeur {{jsxref("Function")}} et une {{jsxref("Opérateurs/L_opérateur_function", "expression de fonction","",1)}}.

## Syntaxe

```js
function nom([param1[, param2,[…, paramN]]]) {
  [instructions]
}
```

- `nom`
  - : Le nom de la fonction.
- `paramN`
  - : Le nom d'un argument à passer à la fonction. Une fonction peut avoir jusqu'à 255 arguments (cela peut varier en fonction des moteurs).
- `instructions`
  - : Les instructions qui constituent le corps de la fonction.

## Description

Une fonction créée via une déclaration de fonction est un objet `Function` et possède toutes les caractéristiques (propriétés, méthodes et comportement) d'un objet `Function`. Voir la page {{jsxref("Function")}} pour plus d'informations sur ces caractéristiques.

Une fonction peut également être créée en utilisant une expression (voir {{jsxref("Opérateurs/L_opérateur_function", "les expressions de fonctions","",1)}}).

Par défaut, une fonction renvoie {{jsxref("undefined")}}. Pour renvoyer une autre valeur en résultat, une fonction doit utiliser une instruction {{jsxref("Instructions/return", "return")}} qui définit la valeur à retourner.

### Fonctions créées conditionnellement

Il est possible de déclarer des fonctions de façon conditionnelle (c'est-à-dire qu'on peut placer une instruction de déclaration de fonction au sein d'une instruction `if`). La plupart des navigateurs, autres que ceux basés sur Gecko, traiteront cette déclaration conditionnelle comme si elle était inconditionnelle (que la condition souhaitée soit vérifiée ou non) (voir [cet article](https://kangax.github.io/nfe/#function-statements) (en anglais) pour un aperçu). Pour cette raison, les déclarations de fonctions ne devraient pas être utilisées pour créer des fonctions de façon conditionnelle. Pour ce faire, il faut privilégier les expressions de fonctions.

```js
var remontee = "toto" in this;
console.log(
  `'toto' ${
    remontee ? "est" : "n'est pas"
  } remontée. typeof toto vaut ${typeof toto}`,
);
if (false) {
  function toto() {
    return 1;
  }
}

// Pour Chrome:
// 'toto' est remontée. typeof toto vaut undefined
//
// Pour Firefox:
// 'toto' est remontée. typeof toto vaut undefined
//
// Pour Edge:
// 'toto' n'est pas remontée. typeof toto vaut undefined
//
// Pour Safari:
// 'toto' est remontée. typeof toto vaut function
```

On obtient exactement les mêmes résultats si la condition est vérifiée (ici avec `true`) :

```js
var remontee = "toto" in this;
console.log(
  `'toto' ${
    remontee ? "est" : "n'est pas"
  } remontée. typeof toto vaut ${typeof toto}`,
);
if (true) {
  function toto() {
    return 1;
  }
}

// Pour Chrome:
// 'toto' est remontée. typeof toto vaut undefined
//
// Pour Firefox:
// 'toto' est remontée. typeof toto vaut undefined
//
// Pour Edge:
// 'toto' n'est pas remontée. typeof toto vaut undefined
//
// Pour Safari:
// 'toto' est remontée. typeof toto vaut function
```

### La « remontée » des déclarations de fonction

Lorsqu'on utilise une déclaration de fonction pour créer une fonction, la définition de la fonction est « remontée ». Il devient donc possible d'utiliser la fonction avant de l'avoir déclarée :

```js
remontée(); // affiche "toto" dans la console

function remontée() {
  console.log("toto");
}
```

On notera que les {{jsxref("Opérateurs/L_opérateur_function", "expressions de fonctions","",1)}} ne sont pas remontées :

```js
nonRemontée(); // TypeError: nonRemontée is not a function

var nonRemontée = function () {
  console.log("truc");
};
```

## Exemples

### Utiliser `function`

Dans l'exemple qui suit, on déclare une fonction qui renvoie le total des ventes en fonction des nombres d'unités vendues pour les produits `a`, `b`, et `c`.

```js
function calc_ventes(nb_produits_a, nb_produits_b, nb_produits_c) {
  return nb_produits_a * 79 + nb_produits_b * 129 + nb_produits_c * 699;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Fonctions", "Les fonctions","",1)}}
- {{jsxref("Function")}}
- {{jsxref("Opérateurs/L_opérateur_function", "Les expressions de fonction","",1)}}
- L'instruction {{jsxref("Instructions/function*", "function*")}}
- L'expression {{jsxref("Opérateurs/function*", "function*")}}
- {{jsxref("Fonctions/Fonctions_fléchées", "Les fonctions fléchées","",1)}}
- {{jsxref("GeneratorFunction")}}
- [L'instruction `async function` (les déclarations des fonctions asynchrones)](/fr/docs/Web/JavaScript/Reference/Instructions/async_function)
- [L'opérateur `async function` (les expressions de fonctions asynchrones)](/fr/docs/Web/JavaScript/Reference/Opérateurs/async_function)
