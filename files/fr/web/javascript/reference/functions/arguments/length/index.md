---
title: length
slug: Web/JavaScript/Reference/Functions/arguments/length
---

{{jsSideBar("Functions")}}

La propriété **`arguments.length`** contient le nombre d'arguments passés à la fonction.

## Syntaxe

```js
arguments.length;
```

## Description

La propriété `arguments.length` fournit le nombre d'arguments qui ont été passés à la fonction. Cette quantité peut être inférieure ou supérieure au nombre de paramètres explicitement déclarés dans la définition de la fonction (voir également {{jsxref("Function.length")}}).

## Exemple

### Utiliser `arguments.length`

Dans cet exemple, on définit une fonction qui permet d'additionner plusieurs nombres.

```js
function somme(x /*, y, z, ...*/) {
  x = Number(x);
  for (var i = 1; i < arguments.length; i++) {
    x += Number(arguments[i]);
  }
  return x;
}
```

```js
résultat = somme(3, 4, 5); // renvoie 12
résultat = somme(3, 4); // renvoie 7
résultat = somme(103, 104, 105); // renvoie 312
```

> **Note :** `arguments.length` ne doit pas être confondu avec {{jsxref("Function.length")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Function")}}
- {{jsxref("Function.length")}}
