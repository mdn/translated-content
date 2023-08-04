---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
---

{{jsSidebar("Errors")}}

## Message

```
SyntaxError: Let/Const redeclaration (Edge)
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Identifier "x" has already been declared (Chrome)
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Le même nom de variable est présent comme paramètre de la fonction et dans une affectation [`let`](/fr/docs/Web/JavaScript/Reference/Instructions/let) au sein du corps de cette fonction et il n'est pas possible de redéclarer la même variable dans la même fonction ou dans le même bloc avec `let`.

## Exemples

Dans le fragment de code qui suit, la variable `arg` redéclare l'argument passé à la fonction.

```js example-bad
function f(arg) {
  let arg = "toto";
}

// SyntaxError: redeclaration of formal parameter "arg"
```

Si on souhaite changer la valeur de `arg` dans le corps de la fonction, c'est possible mais il ne faut pas la redéclarer. Autrement dit, on peut retirer le mot-clé `let`. Si on souhaite plutôt créer une nouvelle variable, mieux vaudra utiliser un autre nom afin d'éviter les conflits avec les noms des paramètres existants.

```js example-good
function f(arg) {
  arg = "toto";
}

function f(arg) {
  let truc = "toto";
}
```

## Notes de compatibilité

- Avant Firefox 49, cela provoquait une exception {{jsxref("TypeError")}} ([bug Firefox 1275240](https://bugzil.la/1275240)).

## Voir aussi

- [`let`](/fr/docs/Web/JavaScript/Reference/Instructions/let)
- [`const`](/fr/docs/Web/JavaScript/Reference/Instructions/const)
- [`var`](/fr/docs/Web/JavaScript/Reference/Instructions/var)
- [Déclarer des variables](/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Déclarations) dans le [guide JavaScript](/fr/docs/Web/JavaScript/Guide)
