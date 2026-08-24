---
title: "Number : méthode statique parseFloat()"
short-title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Number.parseFloat()`** analyse un argument et retourne un nombre à virgule flottante. Si un nombre ne peut pas être analysé à partir de l'argument, elle retourne {{JSxRef("NaN")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.parseFloat()")}}

```js interactive-example
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference("4.567abcdefgh"));
// Résultat attendu : 28.695307297889173

console.log(circumference("abcdefgh"));
// Résultat attendu : 0
```

## Syntaxe

```js-nolint
Number.parseFloat(string)
```

### Paramètres

- `string`
  - : La valeur à analyser, [convertie en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#convertion_en_chaîne_de_caractères). Les {{Glossary("whitespace", "espaces blancs")}} initiaux dans cet argument sont ignorés.

### Valeur de retour

Un nombre flottant obtenu à partir de l'analyse de la chaîne de caractères passée en argument.

Ou {{JSxRef("NaN")}} si le premier caractère non blanc ne peut pas être converti en nombre.

## Exemples

### `Number.parseFloat()` et `parseFloat()`

Cette méthode possède les mêmes fonctionnalités que la fonction native {{JSxRef("parseFloat()")}}&nbsp;:

```js
Number.parseFloat === parseFloat; // true
```

Son objectif est la modularisation des objets globaux.

Voir {{JSxRef("parseFloat()")}} pour plus de détails et d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Number.parseFloat` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- [La prothèse d'émulation es-shims de `Number.parseFloat` <sup>(angl.)</sup>](https://www.npmjs.com/package/number.parsefloat)
- L'objet {{JSxRef("Number")}}
- La fonction native {{JSxRef("parseFloat()")}}
