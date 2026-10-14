---
title: "RegExp : méthode [Symbol.matchAll]()"
short-title: "[Symbol.matchAll]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll
l10n:
  sourceCommit: 5b3aa7e4e8cd54f1b662534d8c97074e522b7fc4
---

La méthode **`[Symbol.matchAll]()`** des instances de {{JSxRef("RegExp")}} définit comment {{JSxRef("String.prototype.matchAll()")}} doit se comporter.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype[Symbol.matchAll]()", "taller")}}

```js interactive-example
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    }
    return Array.from(result);
  }
}

const re = new MyRegExp("-\\d+", "g");
console.log("2016-01-02|2019-03-07".matchAll(re));
// Résultat attendu : Array [Array ["-01"], Array ["-02"], Array ["-03"], Array ["-07"]]
```

## Syntaxe

```js-nolint
regexp[Symbol.matchAll](str)
```

### Paramètres

- `str`
  - : Une chaîne de caractères ({{JSxRef("String")}}) dont on souhaite trouver les correspondances.

### Valeur de retour

Un [objet d'itérateur itérable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator) (qui n'est pas possible de redémarrer) de correspondances. Chaque correspondance est un tableau ayant la même structure que la valeur de retour de {{JSxRef("RegExp.prototype.exec()")}}.

## Description

Cette méthode permet de personnaliser le comportement de `matchAll()` dans les sous-classes de {{JSxRef("RegExp")}}. Elle est appelée en interne dans {{JSxRef("String.prototype.matchAll()")}}. Par exemple, les deux exemples suivants retournent le même résultat.

```js
"abc".matchAll(/a/g);

/a/g[Symbol.matchAll]("abc");
```

Comme [`[Symbol.split]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split), `[Symbol.matchAll]()` commence par utiliser [`[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) pour construire une nouvelle expression rationnelle, évitant ainsi de modifier l'expression rationnelle d'origine de quelque manière que ce soit. Le constructeur reçoit `this` et les indicateurs d'origine. [`lastIndex`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) prend la valeur de l'expression rationnelle d'origine.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const chaine = "abc";
Array.from(chaine.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Si l'expression rationnelle est globale (avec l'indicateur `g`), chaque appel à la méthode `next()` de l'itérateur retourné appelle [`exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) de l'expression rationnelle et produit le résultat. Si la correspondance actuelle est une chaîne de caractères vide, [`lastIndex`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) avance tout de même. Si l'expression rationnelle possède l'indicateur [`u`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode), elle avance d'un point de code Unicode&nbsp;; sinon, elle avance d'un point de code UTF-16.

```js
console.log(Array.from("😄".matchAll(/(?:)/g)));
// [ [ "" ], [ "" ], [ "" ] ]

console.log(Array.from("😄".matchAll(/(?:)/gu)));
// [ [ "" ], [ "" ] ]
```

Si l'expression rationnelle n'est pas globale, l'itérateur retourné produit le résultat de [`exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) une seule fois, puis se termine. (La validation qui vérifie que l'entrée est une expression rationnelle globale a lieu dans [`String.prototype.matchAll()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll). `[Symbol.matchAll]()` ne valide pas les indicateurs de `this`.)

Lorsque l'expression rationnelle est adhérente et globale, elle effectue toujours des correspondances adhérentes — c'est-à-dire qu'elle ne trouve aucune occurrence au-delà de `lastIndex`.

```js
console.log(Array.from("ab-c".matchAll(/[abc]/gy)));
// [ [ "a" ], [ "b" ] ]
```

## Exemples

### Appel direct

Cette méthode peut être utilisée de manière _presque_ identique à {{JSxRef("String.prototype.matchAll()")}}, sauf que l'objet `this` est différent et que l'ordre des arguments est également différent.

```js
const re = /\d+/g;
const chaine = "2016-01-02";
const resultat = re[Symbol.matchAll](chaine);

console.log(Array.from(resultat, (x) => x[0]));
// [ "2016", "01", "02" ]
```

### Utiliser `[Symbol.matchAll]()` dans les sous-classes

Les sous-classes de {{JSxRef("RegExp")}} peuvent remplacer la méthode `[Symbol.matchAll]()` pour modifier le comportement par défaut.

Par exemple, pour retourner un tableau ({{JSxRef("Array")}}) plutôt qu'un [itérateur](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators)&nbsp;:

```js
class MaRegExp extends RegExp {
  [Symbol.matchAll](chaine) {
    const resultat = RegExp.prototype[Symbol.matchAll].call(this, chaine);
    return resultat ? Array.from(resultat) : null;
  }
}

const re = new MaRegExp("(\\d+)-(\\d+)-(\\d+)", "g");
const chaine = "2016-01-02|2019-03-07";
const resultat = chaine.matchAll(re);

console.log(resultat[0]);
// [ "2016-01-02", "2016", "01", "02" ]

console.log(resultat[1]);
// [ "2019-03-07", "2019", "03", "07" ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `RegExp.prototype[Symbol.matchAll]` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [La prothèse d'émulation es-shims de `RegExp.prototype[Symbol.matchAll]` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.prototype.matchall)
- La méthode {{JSxRef("String.prototype.matchAll()")}}
- La méthode [`RegExp.prototype[Symbol.match]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- La méthode [`RegExp.prototype[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- La méthode [`RegExp.prototype[Symbol.search]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- La méthode [`RegExp.prototype[Symbol.split]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- La méthode statique {{JSxRef("Symbol.matchAll()")}}
