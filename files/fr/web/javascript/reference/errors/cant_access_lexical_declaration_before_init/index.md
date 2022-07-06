---
title: 'ReferenceError: can''t access lexical declaration`X'' before initialization'
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
tags:
  - Erreur
  - JavaScript
  - Reference
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
original_slug: Web/JavaScript/Reference/Erreurs/Cant_access_lexical_declaration_before_init
---
{{jsSidebar("Errors")}}

## Message

```
ReferenceError: Use before delaration (Edge)
ReferenceError: can't access lexical declaration `X' before initialization (Firefox)
ReferenceError: 'x' is not defined (Chrome)
```

## Type d'erreur

{{jsxref("ReferenceError")}}

## Quel est le problème ?

Il y a eu un accès à une variable déclarée avec `let` ou `const` avant que celle-ci ait été initialisée. Cela peut se produire dans n'importe quelle instruction de bloc avec une variable déclarée avec `let` ou `const` et qui est utilisée avant son initialisation.

## Exemple

### Exemples invalides

Dans l'exemple qui suit, la variable `toto` est redéclarée dans le bloc avec un second `let` et elle n'est donc pas initialisée.

```js example-bad
function test(){
   let toto = 33;
   if (true) {
      let toto = (toto + 55);
      // ReferenceError: can't access lexical
      // declaration `toto` before initialization
   }
}
test();
```

### Exemples valides

Afin que `toto` puisse être modifiée au sein de l'instruction `if`, on enlèvera la redéclaration dans ce bloc :

```js example-good
function test(){
   let toto = 33;
   if (true) {
      toto = (toto + 55);
   }
}
test();
```

## Voir aussi

- [La « zone morte temporelle » (ou TDZ pour « _Temporal Dead Zone_ ») et les erreurs avec `let`](</fr/docs/Web/JavaScript/Reference/Instructions/let#Zone_morte_temporaire_(Temporal_Dead_Zone_TDZ)_et_les_erreurs_liées_à_let>)
