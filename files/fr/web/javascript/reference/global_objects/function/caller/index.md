---
title: Function.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
---

{{JSRef}} {{non-standard_header}}

La propriété **`function.caller`** renvoie la fonction qui a appelé la fonction donnée. Cette propriété est interdite en mode strict.

## Description

Si la fonction `f` a été invoquée par du code situé au plus haut niveau, la valeur de `f.caller` sera {{jsxref("null")}}, sinon, ce sera la fonction qui a appelé `f`.

Cette propriété remplace la propriété obsolète {{jsxref("Fonctions/arguments/caller", "arguments.caller")}} de l'objet {{jsxref("Fonctions/arguments", "arguments")}}.

La propriété spéciale `__caller__` qui renvoyait l'objet qui dans lequel était fait l'appel a été supprimée pour des raisons de sécurités.

### Notes

Dans une fonction récursive, cette propriété ne peut pas être utilisée pour reconstituer la pile d'appels (_call stack_). Par exemple, si on a :

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
  } else {
    stop();
  }
}
f(2);
```

Au moment où `stop()` est appelé, la pile sera :

```js
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Et ceci est vrai :

```js
stop.caller === g && f.caller === g && g.caller === f;
```

Donc si on essaie d'obtenir la pile de cette façon :

```js
var f = stop;
var stack = "Stack trace:";
while (f) {
  stack += "\n" + f.name;
  f = f.caller;
}
```

la boucle ne s'arrêterait jamais.

## Exemples

### Vérifier la valeur de la propriété `caller`

Dans l'exemple suivant, on verifie la propriété `caller` de la fonction.

```js
function maFonction() {
  if (maFonction.caller == null) {
    return "Fonction appelée au plus haut niveau !";
  } else {
    return "Fonction appelée par " + maFonction.caller;
  }
}
```

## Spécifications

Ne fait partie d'aucune spécification. Implémentée avec JavaScript 1.5.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le bug d'implémentation pour SpiderMonkey [bug Firefox 65683](https://bugzil.la/65683)
