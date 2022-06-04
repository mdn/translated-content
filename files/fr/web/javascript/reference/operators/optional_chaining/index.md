---
title: Chaînage optionnel (optional chaining)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
tags:
  - Chaînage
  - Chaînage optionnel
  - Coalescence
  - JavaScript
  - Operator
  - Opérateur
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Optional_chaining
original_slug: Web/JavaScript/Reference/Opérateurs/Optional_chaining
---
{{jsSidebar("Operators")}}

L'opérateur de **chaînage optionnel** **`?.`** permet de lire la valeur d'une propriété située profondément dans une chaîne d'objets connectés sans avoir à valider expressément que chaque référence dans la chaîne est valide. L'opérateur `?.` fonctionne de manière similaire à l'opérateur de chaînage `.`, à ceci près qu'au lieu de causer une erreur si une référence est {{jsxref("null")}} ou {{jsxref("undefined")}}, l'expression se court-circuite avec `undefined` pour valeur de retour. Quand il est utilisé avec des appels de fonctions, il retourne `undefined` si la fonction donnée n'existe pas.

Ceci résulte en des expressions plus courtes et plus simples lors de l'accès à des propriétés chaînées quand il est possible qu'une référence soit manquante. Ceci peut aussi être utile lors de l'exploration du contenu d'un objet lorsqu'il n'y a aucune garantie concernant les propriétés qui sont requises.

Le chainage optionnel ne peut pas être utilisé sur un objet initialement inexistant. Il ne remplace les vérifications du type `if (typeof a == "undefined")`.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html")}}

## Syntaxe

```js
obj?.prop
obj?.[expr]
arr?.[index]
func?.(args)
```

## Description

L'opérateur de chaînage optionnel fournit un moyen de simplifier l'accès aux valeurs au sein d'objets connectés quand il est possible qu'une référence ou une fonction soit `undefined` ou `null`.

Par exemple, considérant un objet `obj` qui a une structure imbriquée. Sans chaînage optionnel, chercher une sous-propriété imbriquée en profondeur requiert de valider les références intermédiaires, tel que :

```js
let nestedProp = obj.premier && obj.premier.second;
```

La valeur de `obj.premier` est confirmée comme n'étant pas `null` (ni `undefined`) avant que d'accéder à la valeur de `obj.premier.second`. Ceci prévient l'erreur qui pourrait survenir si vous accédiez simplement `obj.premier.second` directement sans vérifier `obj.premier`.

Avec l'opérateur de chaînage optionnel (`?.`), vous n'avez pas besoin de vérifier explicitement et de court-circuiter la vérification selon l'état de `obj.premier` avant que d'accéder à `obj.premier.second`&nbsp;:

```js
let nestedProp = obj.premier?.second;
```

En utilisant l'opérateur `?.` au lieu de l'opérateur `.`, JavaScript sait implicitement qu'il doit vérifier `obj.premier` pour être certain qu'il ne soit `null` ou `undefined` avant que de tenter d'accéder à `obj.first.second`. Si `obj.premier` est `null` ou `undefined`, l'expression se court-circuite automatiquement et retourne `undefined`.

C'est équivalent à :

```js
let temp = obj.premier;
let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.second);
```

### Chaînage optionnel avec des appels de fonctions

Vous pouvez utiliser le chaînage optionnel lorsque vous tentez d'appeler une méthode qui pourrait ne pas exister. Ceci peut être une aide précieuse, par exemple, lorsque vous utilisez une API dans laquelle une méthode pourrait être indisponible, à cause d'une implantation datée ou à cause d'une fonctionnalité qui n'est pas disponible sur l'appareil de l'utilisateur.

Utiliser le chaînage optionnel avec les appels de fonction entraîne le retour automatique de la valeur `undefined` pour l'expression plutôt que de jeter une exception si la méthode n'est pas trouvée :

```js
let result = uneInterface.uneMéthode?.();
```

> **Note :** S'il est une propriété qui porte ce nom et qui n'est pas une fonction, utiliser `?.` jètera aussi une exception {{jsxref("TypeError")}} (`x.y is not a function`).

#### Réaliser des fonctions de rappel optionnelles ou des écouteurs d'évènements

Si vous utilisez des fonctions ou des méthodes de recherche depuis un objet avec [une affectation par décomposition](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring), vous pourriez avoir des valeurs inexistantes que vous ne pouvez appeler comme fonction à moins que vous ayez vérifié leur existance. En utilisant `?.`, vous pourriez vous passer de cette vérification supplémentaire :

```js
// ES2019
function doSomething(onContent, onError) {
  try {
    // ... faire quelque chose avec les données
  }
  catch (err) {
    if (onError) { // vérifier que onError existe réellement
      onError(err.message);
    }
  }
}
```

```js
// Utiliser le chaînage optionnel avec les appels de fonctions
function doSomething(onContent, onError) {
  try {
   // ... faire quelque chose avec les données
  }
  catch (err) {
    onError?.(err.message); // pas d'exception si onError n'est pas défini
  }
}
```

### Chaînage optionnel avec les expressions

Vous pouvez aussi utiliser l'opérateur de chaînage optionnel lorsque vous accédez aux propriétés avec une expression en utilisant [la notation avec crochets des accesseurs de propriétés](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Bracket_notation) :

```js
let nestedProp = obj?.['propName'];
```

### Chaînage optionnel invalide depuis le côté gauche d'une affectation

```js
let objet = {};
objet?.propriété = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

### Accès aux éléments de tableau avec le chaînage optionnel

```js
let élément = arr?.[42];
```

## Exemples

### Exemple basique

Cet exemple cherche la valeur de la propriété `name` dans un objet stocké comme propriété de nom `bar` d'un objet Map alors que cet objet `bar` n'existe pas. Le résultat est donc `undefined`.

```js
let monMap = new Map();
monMap.set("foo", {name: "baz", desc: "inga"});

let nameBar = monMap.get("bar")?.name;
```

### Court-circuiter une évaluation

Lorsque vous utilisez le chaînage optionnel avec une expression, si l'opérande gauche est `null` ou `undefined`, l'expression ne sera par évaluée. Par exemple :

```js
let objetPotentiellementNul = null;
let x = 0;
let prop = objetPotentiellementNul?.[x++];

console.log(x); // 0 car x n'a pas été incrémenté
```

### Empiler les opérateurs de chaînage optionnel

Avec les structures imbriquées, il est possible d'utiliser le chaînage optionnel plusieurs fois :

```js
let client = {
  nom: "Carl",
  details: {
    age: 82,
    localisation: "Paradise Falls"
    // adresse détaillée inconnue
  }
};
let villeDuClient = client.details?.adresse?.ville;

// … cela fonctionne aussi avec le chaînage optionnel sur les appels de fonction
let durée = vacations.trip?.getTime?.();
```

### Combinaison avec l'opérateur de coalescence des nuls (Nullish coalescing operator)

L'{{JSxRef("Opérateurs/Nullish_coalescing_operator", "Opérateur de coalescence des nuls (Nullish coalescing operator)", '', 1)}} peut être utilisé après un chaînage optionnel afin de construire une valeur par défaut quand aucune n'a été trouvée :

```js
let client = {
  nom: "Carl",
  details: { age: 82 }
};
const villeDuClient = client?.ville ?? "Ville Inconnue";
console.log(villeDuClient); // Ville inconnue
```

## Spécifications

| Specification                                                                                        |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#prod-OptionalExpression', 'optional expression')}} |

## Compatibilité des navigateurs

{{Compat("javascript.operators.optional_chaining")}}

## Voir aussi

- {{JSxRef("Operators/Nullish_Coalescing_Operator", "Opérateur de coalescence des nuls (Nullish coalescing operator)", '', 1)}}
