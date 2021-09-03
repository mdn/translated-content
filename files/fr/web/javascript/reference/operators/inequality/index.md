---
title: Inégalité (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.inequality
---
{{jsSidebar("Operators")}}

L'opérateur d'inégalité (`!=`) vérifie si ses deux opérandes ne sont pas égaux et renvoie un booléen correspondant au résultat. À la différence de l'opérateur [d'inégalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality), l'opérateur d'inégalité tente une conversion de ses opérandes avant la comparaison si ceux-ci sont de types différents.

{{EmbedInteractiveExample("pages/js/expressions-inequality.html")}}

## Syntaxe

```js
x != y
```

## Description

L'opérateur d'inégalité vérifie si ses deux opérandes ne sont pas égaux. Il s'agit de la négation de [l'opérateur d'égalité](/fr/docs/Web/JavaScript/Reference/Operators/Equality) et les deux lignes suivantes fourniront donc toujours le même résultat :

```js
x != y
!(x == y)
```

Pour plus de détails sur l'algorithme de comparaison utilisé, voir [la page relative à l'opérateur d'égalité](/fr/docs/Web/JavaScript/Reference/Operators/Equality).

À l'instar de l'opérateur d'égalité, l'opérateur d'inégalité tentera une conversion des opérandes si ceux-ci ne sont pas de même type :

```js
3 != "3"; // false
```

Si cette conversion implicite n'est pas souhaitable et qu'on souhaite considérer des valeurs de types différents comme étant différentes, on privilégiera [l'opérateur d'inégalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality) à la place :

```js
3 !== "3"; // true
```

## Exemples

### Comparaison sans conversion de types

```js
1 != 2;              // true
"hello" != "hola";   // true

1 != 1;              // false
"hello" != "hello";  // false
```

### Comparaison avec conversion de types

```js
"1" !=  1;            // false
1 != "1";             // false
0 != false;           // false
0 != null;            // true
0 != undefined;       // true
0 != !!null;          // false, voir la documentation pour !!
0 != !!undefined;     // false, voir la documentation pour !!
null != undefined;    // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3;         // false
number1 != number2;   // true
```

### Comparaison d'objets

```js
const objet1 = {"clé": "valeur"}
const objet2 = {"clé": "valeur"};

objet1 != objet2 // true
objet2 != objet2 // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'opérateur d'égalité](/fr/docs/Web/JavaScript/Reference/Operators/Equality)
- [L'opérateur d'égalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [L'opérateur d'inégalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
