---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
---

{{JSRef}}

La propriété **`Math.E`** représente la base du logarithme naturel, e, et vaut environ 2.718.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2.718</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.E")}}

```js interactive-example
function compoundOneYear(interestRate, currentVal) {
  return currentVal * Math.E ** interestRate;
}

console.log(Math.E);
// Expected output: 2.718281828459045

console.log((1 + 1 / 1000000) ** 1000000);
// Expected output: 2.718280469 (approximately)

console.log(compoundOneYear(0.05, 100));
// Expected output: 105.12710963760242
```

{{js_property_attributes(0,0,0)}}

## Description

`E` étant une propriété statique de `Math`, il doit toujours être utilisé avec la syntaxe `Math.E`, et non pas être appelé comme propriété d'un autre objet `Math` qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.E`

La fonction suivante renvoie la valeur de e :

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
