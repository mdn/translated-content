---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
---

{{JSRef}}

La méthode **`toString()`** renvoie une chaîne de caractères représentant le code source de la fonction.

{{EmbedInteractiveExample("pages/js/function-tostring.html")}}

## Syntaxe

```js
function.toString(indentation)
```

### Valeur de retour

Une chaîne de caractères qui représente le code source de la fonction.

## Description

L'objet {{jsxref("Function")}} redéfinit la méthode {{jsxref("Object.prototype.toString", "toString")}} de l'objet {{jsxref("Object")}} ; il n'hérite donc pas de {{jsxref("Object.prototype.toString")}}. Pour les objets {{jsxref("Function")}}, la méthode `toString` renvoie une chaîne de caractères représentant l'objet sous la forme d'une déclaration de fonction. Pour ce faire, `toString` décompile la fonction pour renvoyer une chaîne qui contient le mot-clé `function`, la liste des arguments, les accolades et la source correspondant au corps de la fonction.

Le moteur JavaScript appelle la méthode `toString` automatiquement lorsqu'un objet {{jsxref("Function")}} doit être représenté textuellement (par exemple lorsqu'une fonction doit être concaténée avec une chaîne de caractères).

La méthode `toString()` lèvera une exception {{jsxref("TypeError")}} (« Function.prototype.toString called on incompatible object ») si la valeur this n'est pas un objet `Function`.

```js example-bad
Function.prototype.toString.call("toto"); // TypeError
```

Si la méthode `toString()` est appelée sur des fonctions natives qui ne sont pas définies dans le script, `toString()` renvoie une chaîne de caractères indiquant le caractère natif :

```js
Math.abs.toString();

"function abs() {
    [native code]
}"
```

Si la méthode `toString()` est appelée sur une fonction créée avec le constructeur `Function`, `toString()` renverra le code source d'une fonction intitulée `anonymous` et utilisera les paramètres et le corps de la fonction fournis.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.toString()")}}
