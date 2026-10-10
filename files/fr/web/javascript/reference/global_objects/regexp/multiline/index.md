---
title: "RegExp : propriété multiline"
short-title: multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
l10n:
  sourceCommit: 8f53af45fae665627a95ac50e177b15d0228b920
---

La propriété d'accesseur **`multiline`** des instances de {{JSxRef("RegExp")}} indique si le drapeau `m` est utilisé avec cette expression rationnelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.multiline", "taller")}}

```js interactive-example
const regex1 = /^football/;
const regex2 = /^football/m;

console.log(regex1.multiline);
// Résultat attendu : false

console.log(regex2.multiline);
// Résultat attendu : true

console.log(regex1.test("rugby\nfootball"));
// Résultat attendu : false

console.log(regex2.test("rugby\nfootball"));
// Résultat attendu : true
```

## Description

`RegExp.prototype.multiline` a une valeur `true` si l'indicateur `m` est utilisé&nbsp;; sinon, `false`. L'indicateur `m` indique qu'une chaîne de caractères sur plusieurs lignes doit être traitée comme plusieurs lignes. Par exemple, si `m` est utilisé, `^` et `$` ne correspondent plus uniquement au début ou à la fin de l'ensemble de la chaîne de caractères, mais au début ou à la fin de chaque ligne de la chaîne de caractères.

> [!NOTE]
> Pour correspondre au début et à la fin de l'ensemble de la chaîne de caractères en mode `m`, utilisez les [assertions de frontière de tampon](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) `\A`, `\z` et `\Z`.

L'accesseur en écriture de `multiline` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser `multiline`

```js
const regex = /^toto/m;

console.log(regex.multiline); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("RegExp.prototype.lastIndex")}}
- La propriété {{JSxRef("RegExp.prototype.dotAll")}}
- La propriété {{JSxRef("RegExp.prototype.global")}}
- La propriété {{JSxRef("RegExp.prototype.hasIndices")}}
- La propriété {{JSxRef("RegExp.prototype.ignoreCase")}}
- La propriété {{JSxRef("RegExp.prototype.source")}}
- La propriété {{JSxRef("RegExp.prototype.sticky")}}
- La propriété {{JSxRef("RegExp.prototype.unicode")}}
