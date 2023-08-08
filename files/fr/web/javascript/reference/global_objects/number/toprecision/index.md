---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
---

{{JSRef}}

La méthode **`toPrecision()`** renvoie une chaîne de caractères représentant un nombre avec la précision donnée.

{{EmbedInteractiveExample("pages/js/number-toprecision.html")}}

## Syntaxe

```js
numObj.toPrecision([précision]);
```

### Paramètre

- `précision`
  - : Paramètre optionnel. Un entier spécifiant le nombre de chiffres significatifs.

### Valeur de retour

Cette méthode renvoie une chaîne de caractères représentant l'objet {{jsxref("Number")}} en notation à point fixe ou en notation exponentielle, arrondi avec un nombre de chiffres significatifs égal à `précision`. Le principe utilisé pour les arrondis est celui décrit dans la page de la méthode {{jsxref("Number.prototype.toFixed()")}}.

Si l'argument `précision` n'est pas utilisé, la méthode aura le même effet que {{jsxref("Number.prototype.toString()")}}. Si cet argument n'est pas un nombre entier, on prendra le nombre entier le plus proche.

### Exceptions

- {{jsxref("RangeError")}}
  - : Si `précison` n'est pas compris, au sens large, entre 1 et 100, on aura une exception `RangeError`. Les implémentations peuvent supporter des valeurs supérieures et/ou inférieures. Le standard ECMA-262 ne nécessite qu'une précision allant jusqu'à 21 chiffres significatifs.

## Exemples

```js
var objetNumber = 5.123456;
console.log(objetNumber.toPrecision()); //affiche "5.123456"
console.log(objetNumber.toPrecision(5)); //affiche "5.1235"
console.log(objetNumber.toPrecision(2)); //affiche "5.1"
console.log(objetNumber.toPrecision(1)); //affiche "5"

numObj = 0.000123;

console.log(numObj.toPrecision()); // affiche "0.000123"
console.log(numObj.toPrecision(5)); // affiche "0.00012300"
console.log(numObj.toPrecision(2)); // affiche "0.00012"
console.log(numObj.toPrecision(1)); // affiche "0.0001"

// dans certaines circonstances, on peut avoir une notation exponentielle
console.log((1234.5).toPrecision(2)); // "1.2e+3"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
