---
title: "RegExp : propriété dotAll"
short-title: dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété d'accesseur **`dotAll`** des instances de {{JSxRef("RegExp")}} indique si le marqueur "`s`" est utilisé pour cette expression rationnelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.dotAll")}}

```js interactive-example
const regex1 = /f.o/s;

console.log(regex1.dotAll);
// Résultat attendu : true

const regex2 = /truc/;

console.log(regex2.dotAll);
// Résultat attendu : false
```

## Description

`RegExp.prototype.dotAll` a une valeur `true` si l'indicateur `s` est utilisé&nbsp;; sinon, `false`. L'indicateur `s` indique que le caractère spécial point (`.`) doit également correspondre aux caractères de saut de ligne («&nbsp;newline&nbsp;») dans une chaîne de caractères, pour lesquels il ne correspond pas autrement&nbsp;:

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

Cela signifie ainsi que le point peut correspondre à n'importe quel caractère UTF-16. Cependant, il ne correspond _pas_ aux caractères situés en dehors du plan multilingue de base Unicode (BMP), également appelés caractères astraux, qui sont représentés sous forme de [paires de substitution](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_Unicode_et_groupes_de_graphèmes) et nécessitent une correspondance avec deux motifs `.` au lieu d'un seul.

```js
"😄".match(/(.)(.)/s);
// Array(3) [ "😄", "\ud83d", "\ude04" ]
```

L'indicateur [`u`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) (unicode) peut être utilisé pour permettre au point de correspondre aux caractères astraux en tant que caractère unique.

```js
"😄".match(/./su);
// Array [ "😄" ]
```

Notez qu'un motif tel que `.*` est toujours capable de _consommer_ des caractères astraux dans le cadre d'un contexte plus large, même sans l'indicateur `u`.

```js
"😄".match(/.*/s);
// Array [ "😄" ]
```

L'utilisation conjointe des indicateurs `s` et `u` permet au point de correspondre à n'importe quel caractère Unicode de manière plus intuitive.

L'accesseur en écriture de `dotAll` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser `dotAll`

```js
const str1 = "truc\nexemple toto exemple";

const regex1 = /truc.exemple/s;

console.log(regex1.dotAll); // true

console.log(str1.replace(regex1, "")); // toto exemple

const str2 = "truc\nexemple toto exemple";

const regex2 = /truc.exemple/;

console.log(regex2.dotAll); // false

console.log(str2.replace(regex2, ""));
// truc
// exemple toto exemple
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de l'indicateur `dotAll` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- La propriété {{JSxRef("RegExp.prototype.lastIndex")}}
- La propriété {{JSxRef("RegExp.prototype.global")}}
- La propriété {{JSxRef("RegExp.prototype.hasIndices")}}
- La propriété {{JSxRef("RegExp.prototype.ignoreCase")}}
- La propriété {{JSxRef("RegExp.prototype.multiline")}}
- La propriété {{JSxRef("RegExp.prototype.source")}}
- La propriété {{JSxRef("RegExp.prototype.sticky")}}
- La propriété {{JSxRef("RegExp.prototype.unicode")}}
