---
title: 'SyntaxError: Unexpected token'
slug: Web/JavaScript/Reference/Errors/Unexpected_token
tags:
  - Erreurs
  - JavaScript
  - Reference
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Unexpected_token
original_slug: Web/JavaScript/Reference/Erreurs/Unexpected_token
---
{{jsSidebar("Errors")}}

## Message

    SyntaxError: expected expression, got "x"
    SyntaxError: expected property name, got "x"
    SyntaxError: expected target, got "x"
    SyntaxError: expected rest argument name, got "x"
    SyntaxError: expected closing parenthesis, got "x"
    SyntaxError: expected '=>' after argument list, got "x"

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

La syntaxe du langage « attendait » un élément mais quelque chose d'autre est écrit à la place dans le script. Cela peut simplement être dû à une coquille dans le code.

## Exemples

### Expression attendue

Lorsqu'on enchaîne des expressions, par exemple, les virgules ne sont pas autorisées en fin d'expression :

```js example-bad
for (let i = 0; i < 5,; ++i) {
  console.log(i);
}
// SyntaxError: expected expression, got ')'
```

Pour corriger cette erreur, on peut retirer la virgule superflue ou bien ajouter une autre expression :

```js example-good
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
```

### Parenthèses manquantes

Il peut également arriver que des parenthèses manquent autour des instructions `if` :

```js example-bad
function round(n, upperBound, lowerBound){
  if(n > upperBound) || (n < lowerBound){
    throw 'Number ' + String(n) + ' is more than ' + String(upperBound) + ' or less than ' + String(lowerBound);
  }else if(n < ((upperBound + lowerBound)/2)){
    return lowerBound;
  }else{
    return upperBound;
  }
} // SyntaxError: expected expression, got '||'
```

Si on compte les parenthèses ouvrantes et fermantes, c'est correct mais on peut voir que le OU logique (`||`) n'est contenu au sein d'aucune paire de parenthèses.

Pour corriger ce problème, il suffit d'ajouter une paire de parenthèses englobante :

```js example-good
function round(n, upperBound, lowerBound){
  if((n > upperBound) || (n < lowerBound)){
    throw 'Number ' + String(n) + ' is more than ' + String(upperBound) + ' or less than ' + String(lowerBound);
  }else if(n < ((upperBound + lowerBound)/2)){
    return lowerBound;
  }else{
    return upperBound;
  }
}
```
