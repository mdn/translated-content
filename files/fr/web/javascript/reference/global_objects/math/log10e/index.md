---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
---

{{JSRef}}

La propriété **`Math.LOG10E`** fournit la valeur du logarithme en base 10 de e, environ 0.434 :

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0.434</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.log10e()")}}

```js interactive-example
function getLog10e() {
  return Math.LOG10E;
}

console.log(getLog10e());
// Expected output: 0.4342944819032518
```

{{js_property_attributes(0,0,0)}}

## Description

`LOG10E` étant une propriété statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.LOG10E` et ne pas être appelée comme propriété d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.LOG10E`

La fonction suivante renvoie le logarithme en base 10 de e :

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
