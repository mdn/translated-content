---
title: NON logique (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
---

{{jsSidebar("Operators")}}

L'opérateur logique NON (`!`) prend l'opposé logique de la valeur fournie par son opérande. Vrai devient faux et vice versa. Il est généralement utilisé avec les [booléens](/fr/docs/Web/JavaScript/Data_structures#boolean_type). Lorsque cet opérateur est utilisé avec une valeur non-booléenne, il renvoie `false` si son opérande peut être converti en `true` et `true` sinon.

{{InteractiveExample("shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// Expected output: false

```

## Syntaxe

```js
!expr;
```

## Description

Cet opérateur renvoie `false` si son opérande peut être converti en `true` ; sinon il renvoie `true`.

Si une valeur peut être convertie en `true`, on dira en anglais qu'elle est [_truthy_](/fr/docs/Glossary/Truthy). À l'inverse, si elle peut être convertie en `false`, on dira en anglais qu'elle est [_falsy_](/fr/docs/Glossary/Falsy).

Voici des exemples d'expression qui peuvent être converties en `false` :

- `null` ;
- `NaN` ;
- `0` ;
- la chaîne vide (`""` ou `''` ou ` `` `) ;
- `undefined`.

Bien que l'opérateur `!` puisse être utilisé avec des opérandes non booléens, sa valeur de retour sera toujours un [booléen](/fr/docs/Web/JavaScript/Data_structures#boolean_type). Pour convertir une valeur (ou une expression) en sa valeur booléenne correspondante, on pourra utiliser un double NON ou le constructeur [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean).

## Exemples

### Utiliser NON

Le code suivant illustre l'utilisation de l'opérateur `!` pour le NON logique.

```js
let n1 = !true; // !t renvoie false
let n2 = !false; // !f renvoie true
let n3 = !""; // !f renvoie true
let n4 = !"Cat"; // !t renvoie false
```

### Double NON (`!!`)

Il est possible d'utiliser deux opérateurs NON à la suite pour convertir n'importe quelle valeur en booléen selon qu'elle est [_truthy_](/fr/docs/Glossary/Truthy) ou [_falsy_](/fr/docs/Glossary/Falsy).

Une conversion équivalente pourra être obtenue avec le constructeur [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean).

```js
let n1 = !!true; // !!truthy renvoie true
let n2 = !!{}; // !!truthy renvoie true : tout objet est truthy
let n3 = !!new Boolean(false); // Attention, un objet Boolean est toujours truthy !
let n4 = !!false; // !!falsy renvoie false
let n5 = !!""; // !!falsy renvoie false
let n6 = !!Boolean(false); // !!falsy renvoie false
```

### Équivalence booléenne de la double négation

L'expression qui suit, utilisée avec des booléens :

```js
!!bCondition;
```

est toujours égale à :

```js
bCondition;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
