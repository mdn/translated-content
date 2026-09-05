---
title: "Math : propriété statique E"
short-title: E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété statique **`Math.E`** représente le nombre d'Euler, la base des logarithmes naturels, e, qui est approximativement 2.718.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.E")}}

```js interactive-example
function compoundOneYear(interestRate, currentVal) {
  return currentVal * Math.E ** interestRate;
}

console.log(Math.E);
// Résultat attendu : 2.718281828459045

console.log((1 + 1 / 1000000) ** 1000000);
// Résultat attendu : 2.718280469 (approximativement)

console.log(compoundOneYear(0.05, 100));
// Résultat attendu : 105.12710963760242
```

## Valeur

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙴</mi><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{Math.E} = e \approx 2.718</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Description

`E` étant une propriété statique de `Math`, il doit toujours être utilisé avec la syntaxe `Math.E`, et non pas être appelé comme propriété d'un autre objet `Math` qui a été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.E`

La fonction suivante retourne la valeur de e&nbsp;:

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

- La méthode statique {{JSxRef("Math.exp()")}}
- La méthode statique {{JSxRef("Math.log()")}}
- La méthode statique {{JSxRef("Math.log1p()")}}
