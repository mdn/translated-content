---
title: Math.LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
---

{{JSRef}}

La propriété **`Math.LN2`** représente le logarithme naturel de 2, environ 0.693:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN2</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0.693</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN2}} = \ln(2) \approx 0.693</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.LN2")}}

```js interactive-example
function getNatLog2() {
  return Math.LN2;
}

console.log(getNatLog2());
// Expected output: 0.6931471805599453
```

{{js_property_attributes(0,0,0)}}

## Description

`LN2` est une propriété statique de l'objet `Math`, il doit toujours être utilisé avec la syntaxe `Math.LN2`, et non pas être utilisé comme la propriété d'un objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.LN2`

La fonction suivante renvoie le logarithme en base 2 d'un nombre en utilisant la valeur de `Math.LN2` :

```js
function getLog2(x) {
  return Math.log(x) / Math.LN2;
}

getLog2(256); // 8
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
