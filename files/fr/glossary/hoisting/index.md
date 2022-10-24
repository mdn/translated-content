---
title: Hoisting (remontée)
slug: Glossary/Hoisting
l10n:
  sourceCommit: 3db79652f43f0d5b4bd3bc0f233ed7670d91cbdf
---

En JavaScript, l'anglicisme **<i lang="en">hoisting</i>**, qu'on peut traduire en «&nbsp;remontée&nbsp;» (voire plus littéralement en «&nbsp;hissage&nbsp;») correspond au processus suivi par l'interpréteur qui déplace la _déclaration_ de fonctions, variables ou classes en haut de leur portée avant l'exécution du code.

Cette remontée du code permet aux fonctions d'être utilisées sans problème avant qu'elles soient déclarées.

Les _déclarations_ des variables et des classes sont également remontées et on peut donc y faire référence avant leur déclaration. Toutefois, cela peut mener à des erreurs inattendues et n'est donc pas recommandé.

> **Note :** Le terme «&nbsp;<i lang="en">hoisting</i>&nbsp;» n'est pas utilisé directement dans la spécification avant [ECMAScript® 2015](https://262.ecma-international.org/6.0/). Auparavant, ce terme décrivait une représentation générale du fonctionnement des contextes d'exécution (et notamment des phases de création et d'exécution) en JavaScript.

## Remontée des déclarations de fonction

Un avantage de la remontée est qu'on peut utiliser une fonction avant de l'avoir déclarée.

```js
nomChat("Tigrou");

function nomChat(nom) {
  console.log(`Mon chat s'appelle ${nom}`);
}
/*
Avec le fragment de code ci-avant, on affichera 
  "Mon chat s'appelle Tigrou"
dans la console
*/
```

Sans cette remontée, il aurait fallu écrire de cette façon&nbsp;:

```js
function nomChat(nom) {
  console.log(`Mon chat s'appelle ${nom}`);
}

nomChat("Tigrou");
/*
Avec le fragment de code ci-avant, le résultat est
le même et affichera 
  "Mon chat s'appelle Tigrou"
dans la console
*/
```

## Remontée des déclarations de variable

La remontée fonctionne également avec les déclarations de variables et il est donc possible d'utiliser une variable dans du code avant qu'elle soit déclarée ou initialisée.

Toutefois, seules les déclarations sont remontées en JavaScript, pas les initialisations&nbsp;!
Cela signifie que l'initialisation ne se produit pas tant que la ligne de code associée est exécutée, même si la variable était au départ initialisée puis déclarée (ou déclarée et initialisée) sur la même ligne.

Jusqu'à ce que l'exécution atteigne la ligne d'initialisation, la variable est initialisée avec sa _valeur par défaut_ (à savoir `undefined` pour une variable déclarée avec `var`, ou rien sinon).

> **Note :** Conceptuellement, on représente souvent la remontée des déclarations de variables comme un découpage effectué par l'interpréteur, qui prend la déclaration (uniquement, pas l'initialisation) et la déplace en haut du code.

Voici quelques exemples qui illustrent ce qui se produit si on utilise une variable avant qu'elle soit déclarée.

### Remontée des déclarations avec `var`

Ici, on déclare puis on initialise la valeur d'une variable déclarée avec `var` après l'avoir utilisée. La valeur par défaut pour l'initialisation d'une variable déclarée avec `var` est `undefined`.

```js
console.log(num); // Renvoie 'undefined' en raison de la déclaration remontée (et pas 6)
var num; // Déclaration
num = 6; // Initialisation
console.log(num); // Affiche 6, car la ligne d'initialisation a été exécutée.
```

La même chose se produit si on déclare et initialise la variable sur la même ligne.

```js
console.log(num); // Renvoie 'undefined' en raison de la déclaration remontée (et pas 6)
var num = 6; // Initialisation et déclaration.
console.log(num); // Affiche 6, car la ligne d'initialisation a été exécutée.
```

Si on oublie la déclaration et qu'on ne fait qu'initialiser la valeur, il n'y a pas de déclaration implicite qui est remontée et toute tentative d'accès à la variable déclenche une exception `ReferenceError`.

```js
console.log(num); // Lève une exception ReferenceError - l'interpréteur ne connaît pas`num`.
num = 6; // Initialisation
```

On notera toutefois qu'une initialisation déclenche une déclaration (si la variable n'est pas déclarée). Aussi, le fragment de code qui suit fonctionnera, car même s'il n'y a pas de remontée, les variables sont bien initialisées avant d'être utilisées.

```js
a = "Canne"; // Initialisation de a
b = "berge"; // Initialisation de b

console.log(`${a}${b}`); // 'Canneberge'
```

### Remontée des déclarations avec `let` et `const`

Les déclarations avec `let` et `const` sont également remontées. À la différence de `var`, il n'y a pas de valeur par défaut et une exception est donc déclenchée si on tente d'accéder à une variable déclarée avec `let` ou `const` avant son initialisation.

```js
console.log(num); // Lève une exception ReferenceError, car la valeur n'est pas initialisée
let num = 6; // Initialisation
```

C'est l'ordre d'_exécution_ qui importe, et pas l'ordre d'écriture dans le fichier source. Le code fonctionnera si la ligne qui initialise la variable est exécutée avant celle qui tente d'accéder à la variable.

Pour plus d'informations et d'autres exemples, voir [la zone morte temporaire de `let`](/fr/docs/Web/JavaScript/Reference/Statements/let#zone_morte_temporaire_temporal_dead_zone_tdz_et_les_erreurs_liées_à_let).

## Remontée des déclarations avec `class`

[Les déclarations de classe](/fr/docs/Web/JavaScript/Reference/Classes#les_déclarations_de_classes) sont remontées, ce qui signifie que le moteur JavaScript possède une référence envers la classe. Toutefois, à l'instar des déclarations avec `let` ou `const`, la classe n'est pas initialisée par défaut et tout code qui tente d'accéder à la classe avant qu'elle soit explicitement initialisée causera une exception `ReferenceError`.

## Pas de remontée pour les expressions de fonction et de classe

[Les expressions de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function) et [les expressions de classe](/fr/docs/Web/JavaScript/Reference/Classes#les_expressions_de_classes) ne sont pas remontées.

Les expressions permettent l'évaluation d'une fonction ou d'une classe. Le résultat de cette évaluation est généralement affecté à une variable ou passé à une autre fonction. Dans ce cas, la déclaration de la variable est remontée et l'expression correspond à l'étape d'initialisation. Aussi, les expressions ne sont pas évaluées tant que la ligne correspondante n'est pas exécutée.

## Voir aussi

- [La section du guide JavaScript sur les remontées de déclaration](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#remont%C3%A9e_de_variables_hoisting)
- [L'instruction `var`](/fr/docs/Web/JavaScript/Reference/Statements/var)
- [L'instruction `let`](/fr/docs/Web/JavaScript/Reference/Statements/let)
- [L'instruction `const`](/fr/docs/Web/JavaScript/Reference/Statements/const)
- [L'instruction `function`](/fr/docs/Web/JavaScript/Reference/Statements/function)
