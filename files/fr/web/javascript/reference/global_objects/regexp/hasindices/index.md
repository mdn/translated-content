---
title: "RegExp : propriété hasIndices"
short-title: hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété d'accesseur **`hasIndices`** des instances de {{JSxRef("RegExp")}} retourne si l'indicateur `d` est utilisé pour cette expression rationnelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.hasIndices")}}

```js interactive-example
const regex1 = /toto/d;

console.log(regex1.hasIndices);
// Résultat attendu : true

const regex2 = /truc/;

console.log(regex2.hasIndices);
// Résultat attendu : false
```

## Description

`RegExp.prototype.hasIndices` a pour valeur `true` si l'indicateur `d` est utilisé&nbsp;; sinon, `false`. L'indicateur `d` indique que le résultat d'une correspondance d'expression rationnelle doit contenir les indices de début et de fin des sous-chaînes de caractères de chaque groupe capturant. Il ne modifie en rien l'interprétation ou le comportement de correspondance de l'expression rationnelle, mais fournit uniquement des informations supplémentaires dans le résultat de la correspondance.

Cet indicateur affecte principalement la valeur de retour de {{JSxRef("RegExp/exec", "exec()")}}. Si l'indicateur `d` est présent, le tableau retourné par `exec()` possède une propriété supplémentaire `indices` comme décrit dans la [valeur de retour](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#valeur_de_retour) de la méthode `exec()`. Comme toutes les autres méthodes liées aux expressions rationnelles (telles que {{JSxRef("String.prototype.match()")}}) appellent `exec()` en interne, elles retournent également les indices si l'expression rationnelle possède l'indicateur `d`.

L'accesseur en écriture de `hasIndices` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser `hasIndices`

```js
const chaine1 = "toto truc toto";

const regex1 = /toto/dg;

console.log(regex1.hasIndices); // true

console.log(regex1.exec(chaine1).indices[0]); // [0, 3]
console.log(regex1.exec(chaine1).indices[0]); // [8, 11]

const chaine2 = "toto truc toto";

const regex2 = /toto/;

console.log(regex2.hasIndices); // false

console.log(regex2.exec(chaine2).indices); // undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("RegExp.prototype.lastIndex")}}
- La méthode {{JSxRef("RegExp.prototype.exec()")}}
- La propriété {{JSxRef("RegExp.prototype.dotAll")}}
- La propriété {{JSxRef("RegExp.prototype.global")}}
- La propriété {{JSxRef("RegExp.prototype.ignoreCase")}}
- La propriété {{JSxRef("RegExp.prototype.multiline")}}
- La propriété {{JSxRef("RegExp.prototype.source")}}
- La propriété {{JSxRef("RegExp.prototype.sticky")}}
- La propriété {{JSxRef("RegExp.prototype.unicode")}}
