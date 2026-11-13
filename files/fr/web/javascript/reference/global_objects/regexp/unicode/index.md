---
title: "RegExp : propriété unicode"
short-title: unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: 8f53af45fae665627a95ac50e177b15d0228b920
---

La propriété d'accesseur **`unicode`** des instance de {{JSxRef("RegExp")}} retourne que l'indicateur `u` est utilisée ou non avec cette expression rationnelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.unicode")}}

```js interactive-example
const regex1 = /\u{61}/;
const regex2 = /\u{61}/u;

console.log(regex1.unicode);
// Résultat attendu : false

console.log(regex2.unicode);
// Résultat attendu : true
```

## Description

`RegExp.prototype.unicode` a la valeur `true` si l'indicateur `u` a été utilisé&nbsp;; sinon, `false`. L'indicateur `u` active diverses fonctionnalités liées à Unicode. Avec l'indicateur «&nbsp;u&nbsp;»&nbsp;:

- Toute [échappement de point de code Unicode](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) est interprétée comme telle au lieu d'être un simple échappement d'identité. Par exemple, `/\u{61}/u` correspond à `"a"`, mais `/\u{61}/` (sans l'indicateur `u`) correspond à `"u".repeat(61)`, où le `\u` est équivalent à un simple `u`.
- Les [assertions de limite de tampon](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) (`\A`, `\z`, `\Z`) sont interprétées comme telles au lieu d'être des simples échappements d'identité.
- Les paires de substitution sont interprétées comme des caractères entiers au lieu de deux caractères séparés. Par exemple, `/[😄]/u` ne correspond qu'à `"😄"` mais pas à `"\ud83d"`.
- Lorsque {{JSxRef("RegExp/lastIndex", "lastIndex")}} est automatiquement avancé (comme lors de l'appel de {{JSxRef("RegExp/exec", "exec()")}}), les expressions rationnelles Unicode avancent par points de code Unicode au lieu d'unités de code UTF-16.

Il existe d'autres changements dans le comportement de l'analyse qui empêchent d'éventuelles erreurs de syntaxe (qui sont analogues au [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) pour la syntaxe des expressions rationnelles). Ces syntaxes sont toutes [obsolètes et conservées uniquement pour la compatibilité web](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), et vous ne devez pas vous y fier.

L'accesseur définit `unicode` sur `undefined`. Vous ne pouvez pas modifier cette propriété directement.

### Mode sensible à l'Unicode

Lorsque nous faisons référence au _mode sensible à l'Unicode_, nous entendons que l'expression rationnelle a soit l'indicateur `u`, soit l'indicateur [`v`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets), auquel cas l'expression rationnelle active les fonctionnalités liées à Unicode (telles que [l'échappement de classe de caractères Unicode](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)) et a des règles de syntaxe beaucoup plus strictes. Comme `u` et `v` interprètent la même expression rationnelle de manière incompatible, l'utilisation des deux indicateurs entraîne une {{JSxRef("SyntaxError")}}.

De même, une expression rationnelle est _insensible à l'Unicode_ si elle n'a ni l'indicateur `u` ni l'indicateur `v`. Dans ce cas, l'expression rationnelle est interprétée comme une séquence d'unités de code UTF-16, et il existe de nombreuses syntaxes héritées qui ne deviennent pas des erreurs de syntaxe.

## Exemples

### Utiliser la propriété `unicode`

```js
const regex = /\u{61}/u;

console.log(regex.unicode); // true
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
- La propriété {{JSxRef("RegExp.prototype.multiline")}}
- La propriété {{JSxRef("RegExp.prototype.source")}}
- La propriété {{JSxRef("RegExp.prototype.sticky")}}
