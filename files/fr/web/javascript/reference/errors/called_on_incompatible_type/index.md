---
title: "TypeError: X.prototype.y called on incompatible type"
slug: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
---

{{jsSidebar("Errors")}}

## Message

```
TypeError: 'this' is not a Set object (Edge)
TypeError: Function.prototype.toString called on incompatible object (Firefox)
TypeError: Function.prototype.bind called on incompatible target (Firefox)
TypeError: Method Set.prototype.add called on incompatible receiver undefined (Chrome)
TypeError: Bind must be called on a function (Chrome)
```

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

Lorsque cette erreur est levée, cela signifie qu'une fonction (d'un objet donné) est appelé avec une valeur `this` qui ne correspond pas au type attendu par la fonction.

Cela peut se produire lorsqu'on utilise les méthodes {{jsxref("Function.prototype.call()")}} ou {{jsxref("Function.prototype.apply()")}} et qu'on fournit un argument `this` dont le type n'est pas celui attendu.

Cela peut également se produire quand on fournit une fonction (sous la forme d'un objet) comme argument d'une autre fonction. Dans ce cas, l'objet ne sera pas capturé comme valeur `this` pour la fonction. Pour contourner ce problème, on peut fournir une fonction lambda qui effectue l'appel ou utiliser la fonction {{jsxref("Function.prototype.bind()")}} afin que `this` soit l'objet attendu.

## Exemples

### Exemples invalides

```js example-bad
var monSet = new Set();
["truc", "bidule"].forEach(monSet.add);
// monSet.add est une fonction mais
// "monSet" n'est pas capturé en tant que this.

var maFonction = function () {
  console.log(this);
};
["truc", "bidule"].forEach(maFonction.bind);
// maFonction.bind est une fonction
// mais "maFonction" n'est pas capturé en tant
// que this.
```

### Exemples valides

```js example-good
var monSet = new Set();
["truc", "bidule"].forEach(monSet.add.bind(monSet));
// Cela fonctionne car on lie "monSet" avec this.

var maFonction = function () {
  console.log(this);
};
["truc", "bidule"].forEach((x) => maFonction.bind(x));
// Cela fonctionne car on utilise
// la fonction "bind" ce qui permet de
// créer une fonction lambda qui propage
// l'argument.
```

## Voir aussi

- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.bind()")}}
