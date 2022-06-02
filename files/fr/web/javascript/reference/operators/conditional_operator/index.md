---
title: L'opérateur conditionnel
slug: Web/JavaScript/Reference/Operators/Conditional_Operator
tags:
  - JavaScript
  - Opérateur
translation_of: Web/JavaScript/Reference/Operators/Conditional_Operator
original_slug: Web/JavaScript/Reference/Opérateurs/L_opérateur_conditionnel
---
{{jsSidebar("Operators")}}

L'**opérateur (ternaire) conditionnel** est le seul opérateur JavaScript qui comporte trois opérandes. Cet opérateur est fréquemment utilisé comme raccourci pour la déclaration de {{jsxref("Instructions/if...else")}}.

{{EmbedInteractiveExample("pages/js/expressions-conditionaloperators.html")}}

## Syntaxe

```js
condition ? exprSiVrai : exprSiFaux
```

### Paramètres

- `condition`
  - : Une expression qui est évaluée en un booléen (`true` ou `false`).
- `exprSiVrai`
  - : Une expression qui est évaluée si la condition est équivalente à `true` (_truthy_)
- `exprSiFaux`
  - : Une expression qui est évaluée si la condition est équivalente à `false` (_falsy_).

## Description

SI `condition` vaut `true`, l'opérateur renverra la valeur d'`exprSiVrai;` dans le cas contraire, il renverra la valeur de `exprSiFaux`. Par exemple, on peut afficher un message différent en fonction d'une variable `estMembre` avec cette déclaration :

```js
"Le prix est : " + (estMembre ? "15 €" : "30 €")
```

On peut également affecter des variables dont la valeur dépendra du test :

```js
var elvisLives = Math.PI > 4 ? "Yep" : "Nope";
```

On peut enchaîner plusieurs évaluations ternaires l'une à la suite de l'autre (cet opérateur se propage de la gauche vers la droite) :

```js
var premierControle = false,
    secondControle = false,
    acces = premierControle ? "Accès refusé" : secondControle ? "Accès refusé" : "Accès autorisé";

console.log(acces); // "Accès autorisé"
```

Il est également possible d'utiliser cet opérateur pour effectuer l'une ou l'autre expression selon le cas de figure qui se présente :

```js
var stop = false, age = 16;

age > 18 ? location.assign("continue.html") : stop = true;
```

en utilisant l'{{jsxref("Opérateurs/L_opérateur_virgule","opérateur virgule")}}, on peut même y placer plusieurs instructions (attention toutefois à la lisibilité et à se demander si un {{jsxref("Instructions/if...else","if...else")}} n'est pas plus approprié).

```js
var stop = false, age = 23;

age > 18 ? (
    console.log("OK, accès autorisé."),
    location.assign("continue.html")
) : (
    stop = true,
    console.log("Accès refusé !")
);
```

De la même façon, on peut effectuer plusieurs opérations, encadrées par des parenthèses, avant d'affecter le résultat de l'opérateur à une variable. Conformément à l'opérateur virgule, ce sera **_la dernière valeur qui sera affectée_**. Ici aussi, attention à la lisibilité du code relativement à un `if...else`.

```js
var age = 16;

var url = age > 18 ? (
    console.log("Accès autorisé."),
    // console.log renvoie "undefined", mais cela importe peu car
    // ce n'est pas le dernier élément de l'expression
    "continue.html" // la valeur à affecter si âge > 18
) : (
    console.log("Accès refusé !"),
    // etc.
    "stop.html" // la valeur à affecter si âge <= 18
);

location.assign(url); // "stop.html"
```

### Utiliser l'opérateur ternaire dans la valeur de retour

On peut utiliser l'opérateur ternaire (voire une imbrication de celui-ci) pour remplacer certaines formulations avec `if...else` où `return` est la seule instruction utilisée :

```js
var func1 = function( .. ) {
  if (condition1) { return valeur1 }
  else if (condition2) { return valeur2 }
  else if (condition3) { return valeur3 }
  else { return value4 }
}

var func2 = function( .. ) {
  return condition1 ? valeur1
       : condition2 ? valeur2
       : condition3 ? valeur3
       :              valeur4
}
```

## Spécifications

| Spécification                                                                                        | Statut                       | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-conditional-operator', 'Conditional Operator')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-conditional-operator', 'Conditional Operator')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.12', 'The conditional operator')}}                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES1', '#sec-11.12', 'The conditional operator')}}                     | {{Spec2('ES1')}}         | Définition initiale, implémentée avec JavaScript 1.0. |

## Compatibilité des navigateurs

{{Compat("javascript.operators.conditional")}}

## Voir aussi

- L'instruction {{jsxref("Instructions/if...else","if...else")}}
- [Le chaînage optionnel](/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
