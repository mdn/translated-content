---
title: "SyntaxError: missing ] after element list"
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
---

{{jsSidebar("Errors")}}

## Message

```
SyntaxError: missing ] after element list
```

## Type d'erreur

{{jsxref("SyntaxError")}}.

## Quel est le problème ?

Il y a une erreur dans le littéral de tableau qui est uilisé. Il manque un crochet fermant ("`]`") ou une virgule qui sépare les éléments.

## Exemples

### Littéraux de tableaux incomplets

```js example-bad
var liste = [1, 2,

var instruments = [
  "Ukulele",
  "Guitare",
  "Piano"
};

var data = [{toto: "truc"} {titi: "bidule"}];
```

Les versions correctes seraient :

```js example-good
var liste = [1, 2];

var instruments = ["Ukulele", "Guitare", "Piano"];

var data = [{ toto: "truc" }, { titi: "bidule" }];
```

## Voir aussi

- {{jsxref("Array")}}
