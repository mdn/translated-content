---
title: 'TypeError: variable "x" redeclares argument'
slug: Web/JavaScript/Reference/Errors/Var_hides_argument
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Var_hides_argument
original_slug: Web/JavaScript/Reference/Erreurs/Var_hides_argument
---
{{jsSidebar("Errors")}}

## Message

```
TypeError: variable "x" redeclares argument (Firefox)
```

## Type d'erreur

Une erreur {{jsxref("TypeError")}}, uniquement [en mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

## Quel est le problème ?

Le même nom de variable est utilisé comme nom pour un paramètre et comme nom de variable via une affectation [`var`](/fr/docs/Web/JavaScript/Reference/Instructions/var). Cela peut être lié à un conflit de nommage et le moteur envoie un avertissement.

Cette erreur ne se produit qu'en mode strict. Pour du code non-strict, la redéclaration est ignorée silencieusement..

## Exemples

### Exemples invalides

Ici, la variable `arg` redéclare l'argument de la fonction :

```js example-bad
"use strict";

function f(arg) {
  var arg = "foo";
}
```

### Exemples valides

Pour résoudre ce problème, on pourra généralement retirer l'instruction [`var`](/fr/docs/Web/JavaScript/Reference/Instructions/var) car la variable existe déjà et peut être utilisée. Si on ne veut pas utiliser cette même variable, mieux vaudra renommer le paramètre ou la variable interne afin de lever l'ambiguïté.

```js example-good
"use strict";

function f(arg) {
  arg = "foo";
}
```

## Voir aussi

- [Le mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode)
