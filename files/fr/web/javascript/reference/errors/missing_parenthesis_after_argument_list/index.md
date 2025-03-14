---
title: "SyntaxError: missing ) after argument list"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
---

{{jsSidebar("Errors")}}

## Message

```
SyntaxError: Expected ')' (Edge)
SyntaxError: missing ) after argument list (Firefox)
```

## Type d'erreur

{{jsxref("SyntaxError")}}.

## Quel est le problème ?

Il y a une erreur avec la façon dont une fonction est appelée . Cela peut être une faute de frappe, un opérateur manquant, ou une chaîne non-échappée, par exemple .

## Exemple

Parce qu'il n'y a pas d'opérateur "+" pour concaténer la chaîne de caractères, JavaScript s'attend à trouver une parenthèse après "PI : ", qu'il considère comme l'argument de la fonction `log`.

```js example-bad
console.log("PI: " Math.PI);
// SyntaxError: missing ) after argument list
```

La fonction `log` peut être corrigée en ajoutant un opérateur "+".

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

### Chaînes non terminées

```js example-bad
console.log('"Java" + "Script" = \"' + 'Java' + 'Script\");
// SyntaxError: missing ) after argument list
```

Dans cet exemple, le moteur JavaScript considère qu'on souhaitait avoir `);` dans la chaîne de caractères et l'ignore. Aussi, le moteur considère que l'appelle à `console.log` n'est pas terminé et qu'il manque une parenthèse fermante. Pour corriger ce problème, on peut rajouter une quote `'` après la chaîne de caractères `"Script"` :

```js example-good
console.log('"Java" + "Script" = "' + "Java" + 'Script"');
// '"Java" + "Script" = "JavaScript"'
```

## Voir aussi

- [Functions](/fr/docs/Web/JavaScript/Guide/Functions)
