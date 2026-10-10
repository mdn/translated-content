---
title: "RegExp : propriété sticky"
short-title: sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La propriété d'accesseur **`sticky`** des instances de {{JSxRef("RegExp")}} retourne que l'indicateur `y` est utilisé ou non avec cette expression rationnelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.sticky", "taller")}}

```js interactive-example
const str = "table football";
const regex = /foo/y;

regex.lastIndex = 6;

console.log(regex.sticky);
// Résultat attendu : true

console.log(regex.test(str));
// Résultat attendu : true

console.log(regex.test(str));
// Résultat attendu : false
```

## Description

`RegExp.prototype.sticky` a pour valeur `true` si le drapeau `y` a été utilisé&nbsp;; sinon, `false`. Le drapeau `y` indique que l'expression rationnelle tente de correspondre à la chaîne de caractères cible uniquement à partir de l'index indiqué par la propriété {{JSxRef("RegExp/lastIndex", "lastIndex")}} (et contrairement à une expression rationnelle globale, elle ne tente pas de correspondre à partir d'index ultérieurs).

L'accesseur de définition de `sticky` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

Pour les expressions rationnelles à la fois adhérentes et [globales](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)&nbsp;:

- Elles commencent la correspondance à `lastIndex`.
- Lorsque la correspondance réussit, `lastIndex` est avancé jusqu'à la fin de la correspondance.
- Lorsque `lastIndex` est hors des limites de la chaîne de caractères actuellement correspondante, `lastIndex` est réinitialisé à 0.

Cependant, pour la méthode {{JSxRef("RegExp/exec", "exec()")}}, le comportement lorsque la correspondance échoue est différent&nbsp;:

- Lorsque la méthode {{JSxRef("RegExp/exec", "exec()")}} est appelée sur une expression rationnelle adhérente, si l'expression rationnelle ne parvient pas à correspondre à `lastIndex`, elle retourne immédiatement `null` et réinitialise `lastIndex` à 0.
- Lorsque la méthode {{JSxRef("RegExp/exec", "exec()")}} est appelée sur une expression rationnelle globale, si l'expression rationnelle ne parvient pas à correspondre à `lastIndex`, elle tente de correspondre à partir du caractère suivant, et ainsi de suite jusqu'à ce qu'une correspondance soit trouvée ou que la fin de la chaîne de caractères soit atteinte.

Pour la méthode {{JSxRef("RegExp/exec", "exec()")}}, une expression rationnelle à la fois adhérente et globale se comporte de la même manière qu'une expression rationnelle adhérente et non globale. Comme {{JSxRef("RegExp/test", "test()")}} est un simple wrapper autour de `exec()`, `test()` ignore l'indicateur global et effectue également des correspondances adhérentes. Cependant, en raison de nombreuses autres méthodes qui traitent spécialement le comportement des expressions rationnelles globales, l'indicateur global est, en général, orthogonal à l'indicateur adhérent.

- {{JSxRef("String.prototype.matchAll()")}} (avec lequel appelle [`RegExp.prototype[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll))&nbsp;: `y`, `g` et `gy` sont tous différents.
  - Pour `y` des expressions rationnelles&nbsp;: `matchAll()` lève une exception&nbsp;; `[Symbol.matchAll]()` rend le résultat de `exec()` restitué exactement une fois, sans mettre à jour la propriété `lastIndex` de l'expression rationnelle.
  - Pour `g` ou `gy` des expressions rationnelles&nbsp;: retourner un itérateur qui produit une séquence de résultats de `exec()`.
- {{JSxRef("String.prototype.match()")}} (avec lequel appelle [`RegExp.prototype[Symbol.match]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match))&nbsp;: `y`, `g` et `gy` sont tous différents.
  - Pour `y` des expressions rationnelles&nbsp;: retourner le résultat de `exec()` et met à jour la propriété `lastIndex` de l'expression rationnelle.
  - Pour `g` ou `gy` des expressions rationnelles&nbsp;: retourner un tableau de tous les résultats de `exec()`.
- {{JSxRef("String.prototype.search()")}} (avec lequel appelle [`RegExp.prototype[Symbol.search]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search))&nbsp;: le drapeau `g` est toujours sans importance.
  - Pour `y` ou `gy` des expressions rationnelles&nbsp;: toujours retourner `0` (si le tout début de la chaîne de caractères correspond) ou `-1` (si le début ne correspond pas), sans mettre à jour la propriété `lastIndex` de l'expression rationnelle lorsqu'elle se termine.
  - Pour `g` des expressions rationnelles&nbsp;: retourner l'index de la première correspondance dans la chaîne de caractères, ou `-1` si aucune correspondance n'est trouvée.
- {{JSxRef("String.prototype.split()")}} (avec lequel appelle [`RegExp.prototype[Symbol.split]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split))&nbsp;: `y`, `g` et `gy` ont tous le même comportement.
- {{JSxRef("String.prototype.replace()")}} (avec lequel appelle [`RegExp.prototype[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace))&nbsp;: `y`, `g` et `gy` sont tous différents.
  - Pour `y` des expressions rationnelles&nbsp;: remplace une fois à `lastIndex` actuel et met à jour `lastIndex`.
  - Pour `g` et `gy` des expressions rationnelles&nbsp;: remplace toutes les occurrences correspondant à `exec()`.
- {{JSxRef("String.prototype.replaceAll()")}} (avec lequel appelle [`RegExp.prototype[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace))&nbsp;: `y`, `g` et `gy` sont tous différents.
  - Pour `y` des expressions rationnelles&nbsp;: `replaceAll()` lève une exception.
  - Pour `g` et `gy` des expressions rationnelles&nbsp;: remplace toutes les occurrences correspondant à `exec()`.

## Exemples

### Utiliser une expression rationnelle avec l'indicateur d'adhérence

```js
const chaine = "#toto#";
const regex = /toto/y;

regex.lastIndex = 1;
regex.test(chaine); // true
regex.lastIndex = 5;
regex.test(chaine); // false (lastIndex est pris en compte avec l'indicateur d'adhérence)
regex.lastIndex; // 0 (se réinitialise après un échec de correspondance)
```

### Indicateur d'adhérence ancré

Pendant plusieurs versions, le moteur JavaScript de Firefox, SpiderMonkey, avait un [bogue <sup>(angl.)</sup>](https://bugzil.la/773687) concernant l'assertion `^` et l'indicateur d'adhérence, qui permettait aux expressions commençant par l'assertion `^` et utilisant l'indicateur d'adhérence de correspondre alors qu'elles ne doivent pas. Le bogue est apparu peu après Firefox 3.6 (qui avait l'indicateur d'adhérence mais pas le bogue) et a été corrigé en 2015. Peut-être à cause de ce bogue, la spécification [indique spécifiquement <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion) le fait que&nbsp;:

> Même lorsque l'indicateur `y` est utilisé avec un motif, `^` correspond toujours uniquement au début de _l'entrée_, ou (si _rer_.[[Multiline]] est `true`) au début d'une ligne.

Exemples de comportement correct&nbsp;:

```js
const regex1 = /^toto/y;
regex1.lastIndex = 2;
regex1.test("..toto"); // false - index 2 n'est pas le début de la chaîne de caractères

const regex2 = /^toto/my;
regex2.lastIndex = 2;
regex2.test("..toto"); // false - index 2 n'est pas le début de la chaîne de caractères ou de la ligne
regex2.lastIndex = 2;
regex2.test(".\ntoto"); // true - index 2 est le début d'une ligne
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de l'indicateur `sticky` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- La propriété {{JSxRef("RegExp.prototype.lastIndex")}}
- La propriété {{JSxRef("RegExp.prototype.dotAll")}}
- La propriété {{JSxRef("RegExp.prototype.global")}}
- La propriété {{JSxRef("RegExp.prototype.hasIndices")}}
- La propriété {{JSxRef("RegExp.prototype.ignoreCase")}}
- La propriété {{JSxRef("RegExp.prototype.multiline")}}
- La propriété {{JSxRef("RegExp.prototype.source")}}
- La propriété {{JSxRef("RegExp.prototype.unicode")}}
