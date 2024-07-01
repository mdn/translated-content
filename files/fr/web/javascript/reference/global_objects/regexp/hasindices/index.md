---
title: RegExp.prototype.hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
---

{{JSRef}}

La propriété **`hasIndices`** indique si le marqueur "`d`" a été utilisé ou non avec l'expression rationnelle. `hasIndices` est une propriété en lecture seule, rattachée à une instance d'expression rationnelle.

{{EmbedInteractiveExample("pages/js/regexp-prototype-hasindices.html")}}

{{JS_Property_Attributes(0, 0, 1)}}

## Description

La valeur de `hasIndices` est un [`booléen`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean) qui vaut `true` si le marqueur "`d`" a été utilisé et `false` sinon. Le marqueur "`d`" indique que le résultat des correspondances d'une expression rationnelle devrait contenir les indices de début et fin des fragments de chaîne pour chaque groupe capturant.

Cette propriété ne peut être modifiée directement.

## Exemples

### Utiliser `hasIndices`

```js
const str1 = "toto truc toto";

const regex1 = new RegExp("toto", "gd");

console.log(regex1.hasIndices); // Affiche : true

console.log(regex1.exec(str1).indices[0]); // Affiche : Array [0, 3]
console.log(regex1.exec(str1).indices[0]); // Affiche : Array [8, 11]

const str2 = "toto truc toto";

const regex2 = new RegExp("toto");

console.log(regex2.hasIndices); // Affiche : false

console.log(regex2.exec(str2).indices); // Affiche : undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`RegExp.lastIndex`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)
- [`RegExp.prototype.exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
- [`RegExp.prototype.dotAll`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
- [`RegExp.prototype.global`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
- [`RegExp.prototype.ignoreCase`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
- [`RegExp.prototype.multiline`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
- [`RegExp.prototype.source`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)
- [`RegExp.prototype.sticky`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
- [`RegExp.prototype.unicode`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
