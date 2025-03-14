---
title: Intl.Locale.prototype.script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
---

{{JSRef}}

La propriété **`Intl.Locale.prototype.script`** est fournie via un accesseur et renvoie le script utilisé pour l'écriture d'une langue donnée pour la locale courante.

## Description

Un script, ou système d'écriture, est l'une des caractéristiques fondamentales d'une locale. Il décrit l'ensemble des symboles (ou glyphes) qui sont utilisés pour écrire dans une langue donnée. Ainsi, le script associé à l'anglais est l'alphabet latin, le script associé au coréen est le Hangul. Dans la plupart des cas, indiquer le script n'est pas strictement nécessaire car une langue ne s'écrit que dans un script donné. Il existe toutefois des exceptions et il est préférable d'indique le script afin d'avoir un identifiant de langue Unicode complet.

## Exemples

### Définir le script via la chaîne de description de la locale

Le script correspond à la deuxième partie d'un identifiant de langue Unicode valide. On peut donc le définir en passant un tel identifiant au constructeur {{jsxref("Locale", "Locale")}}. Toutefois, cette composante n'est pas obligatoire pour créer une instance de `Locale`.

```js
let scriptStr = new Intl.Locale("en-Latn-US");

console.log(scriptStr.script); // Affichera "Latn" dans la console
```

### Définir le script grâce à l'objet de configuration du constructeur

Le constructeur {{jsxref("Locale", "Locale")}} permet d'utiliser un objet de configuration dont les propriétés définiront les caractéristiques de la locale :

```js
let scriptObj = new Intl.Locale("fr-FR", { script: "Latn" });

console.log(scriptObj.script); // Affichera "Latn" dans la console
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
- [Spécification Unicode pour la composante script](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity)
