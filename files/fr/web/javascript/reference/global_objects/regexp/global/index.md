---
title: "RegExp : propriété global"
short-title: global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La propriété d'accesseur **`global`** des instances de {{JSxRef("RegExp")}} retourne si l'indicateur `g` est utilisé pour cette expression rationnelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.global")}}

```js interactive-example
const regex1 = /toto/g;

console.log(regex1.global);
// Résultat attendu : true

const regex2 = /truc/i;

console.log(regex2.global);
// Résultat attendu : false
```

## Description

`RegExp.prototype.global` a pour valeur `true` sur l'indicateur `g` est utilisé&nbsp;; sinon, `false`. L'indicateur `g` indique que l'expression rationnelle doit être testée sur toutes les correspondances possibles dans une chaîne de caractères. Chaque appel à {{JSxRef("RegExp/exec", "exec()")}} met à jour sa propriété {{JSxRef("RegExp/lastIndex", "lastIndex")}}, de sorte que l'appel suivant à `exec()` commence au caractère suivant.

Certaines méthodes, telles que {{JSxRef("String.prototype.matchAll()")}} et {{JSxRef("String.prototype.replaceAll()")}}, vérifient que, si le paramètre est une expression rationnelle, elle est globale. Les méthodes [`[Symbol.match]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) et [`[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) de l'expression rationnelle (appelées par {{JSxRef("String.prototype.match()")}} et {{JSxRef("String.prototype.replace()")}}) ont également des comportements différents lorsque l'expression rationnelle est globale.

L'accesseur en écriture de `global` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser `global`

```js
const globalRegex = /toto/g;

const chaine = "totoexempletoto";
console.log(chaine.replace(globalRegex, "")); // exemple

const nonGlobalRegex = /toto/;
console.log(chaine.replace(nonGlobalRegex, "")); // exempletoto
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("RegExp.prototype.lastIndex")}}
- La propriété {{JSxRef("RegExp.prototype.dotAll")}}
- La propriété {{JSxRef("RegExp.prototype.hasIndices")}}
- La propriété {{JSxRef("RegExp.prototype.ignoreCase")}}
- La propriété {{JSxRef("RegExp.prototype.multiline")}}
- La propriété {{JSxRef("RegExp.prototype.source")}}
- La propriété {{JSxRef("RegExp.prototype.sticky")}}
- La propriété {{JSxRef("RegExp.prototype.unicode")}}
