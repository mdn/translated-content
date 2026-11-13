---
title: "RegExp : propriété flags"
short-title: flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La propriété d'accesseur **`flags`** des instances de {{JSxRef("RegExp")}} retourne les [indicateurs](/fr/docs/Web/JavaScript/Guide/Regular_expressions#recherche_avancée_avec_indicateurs) de cette expression rationnelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.flags")}}

```js interactive-example
// Les sorties des indicateurs RegExp sont dans l'ordre alphabétique

console.log(/toto/gi.flags);
// Résultat attendu : "gi"

console.log(/^truc/muy.flags);
// Résultat attendu : "muy"
```

## Description

La propriété `RegExp.prototype.flags` a pour valeur une chaîne de caractères. Les indicateurs de la propriété `flags` sont triés par ordre alphabétique (de gauche à droite, par exemple `"dgimsuvy"`). Elle invoque en réalité les autres accesseurs d'indicateurs ({{JSxRef("RegExp/hasIndices", "hasIndices")}}, {{JSxRef("RegExp/global", "global")}}, etc.) un par un et concatène les résultats.

Toutes les fonctions intégrées lisent la propriété `flags` au lieu de lire les accesseurs d'indicateurs individuels.

L'accesseur en écriture de `flags` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser la propriété `flags`

```js-nolint
/toto/ig.flags; // "gi"
/^truc/myu.flags; // "muy"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `RegExp.prototype.flags` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `RegExp.prototype.flags` <sup>(angl.)</sup>](https://www.npmjs.com/package/regexp.prototype.flags)
- [La recherche avancée avec des indicateurs](/fr/docs/Web/JavaScript/Guide/Regular_expressions#recherche_avancée_avec_indicateurs) dans le guide des expressions rationnelles
- La propriété {{JSxRef("RegExp.prototype.source")}}
