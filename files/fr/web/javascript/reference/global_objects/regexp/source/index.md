---
title: "RegExp : propriété source"
short-title: source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La propriété d'accesseur **`source`** des instances de {{JSxRef("RegExp")}} retourne une chaîne de caractères contenant le texte source de cette expression rationnelle, sans les deux barres obliques de chaque côté ni aucun des indicateurs.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.source")}}

```js interactive-example
const regex = /totoTruc/gi;

console.log(regex.source);
// Résultat attendu : "totoTruc"

console.log(new RegExp().source);
// Résultat attendu : "(?:)"

console.log(new RegExp("\n").source === "\\n");
// Résultat attendu : true (à partir d'ES5)
// En raison de l'échappement
```

## Description

Conceptuellement, la propriété `source` est le texte compris entre les deux barres obliques dans le littéral d'expression rationnelle. Le langage exige que la chaîne de caractères retournée soit correctement échappée, de sorte que lorsque le `source` est concaténé avec une barre oblique de chaque côté, il forme un littéral d'expression rationnelle analysable. Par exemple, pour `new RegExp("/")`, le `source` est `\\/`, car s'il génère `/`, le littéral résultant devient `///`, ce qui est un commentaire de ligne. De même, tous les [terminateurs de ligne](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#terminateurs_de_lignes) sont échappés, car les _caractères_ de terminaison de ligne brisent le littéral d'expression rationnelle. Il n'y a pas d'exigence pour les autres caractères, tant que le résultat est analysable. Pour les expressions rationnelles vides, la chaîne de caractères `(?:)` est retournée.

## Exemples

### Utiliser `source`

```js
const regex = /totoMachin/gi;

console.log(regex.source); // "totoMachin", ne contient pas /.../ et "gi".
```

### Expressions rationnelles vides et échappement

```js
new RegExp().source; // "(?:)"

new RegExp("\n").source === "\\n"; // true, à partir d'ES5
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("RegExp.prototype.flags")}}
