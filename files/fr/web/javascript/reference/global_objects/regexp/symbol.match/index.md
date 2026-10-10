---
title: "RegExp : méthode [Symbol.match]()"
short-title: "[Symbol.match]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match
l10n:
  sourceCommit: 07758d01509695fe45ccc3f7687f6597dc3d9e2a
---

La méthode **`[Symbol.match]()`** des instances de {{JSxRef("RegExp")}} définit comment [`String.prototype.match()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match) doit se comporter. De plus, sa présence (ou son absence) peut influencer la manière dont un objet est considéré comme une expression rationnelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype[Symbol.match]()")}}

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);
    if (result) {
      return "VALIDE";
    }
    return "INVALIDE";
  }
}

console.log("2012-07-02".match(new RegExp1("(\\d+)-(\\d+)-(\\d+)")));
// Résultat attendu : "VALIDE"
```

## Syntaxe

```js-nolint
regexp[Symbol.match](str)
```

### Paramètres

- `str`
  - : Une chaîne de caractères ({{JSxRef("String")}}) qui est la cible de la correspondance.

### Valeur de retour

Un tableau ({{JSxRef("Array")}}) dont le contenu dépend de la présence ou de l'absence du drapeau global (`g`), ou {{JSxRef("null")}} si aucune correspondance n'est trouvée.

- Si l'indicateur `g` est utilisé, tous les résultats correspondant à l'expression rationnelle complète sont retournés, mais les groupes capturés ne sont pas inclus.
- Si l'indicateur `g` n'est pas utilisé, seule la première correspondance complète et ses groupes capturés associés sont retournés. Dans ce cas, `match()` retourne le même résultat que {{JSxRef("RegExp.prototype.exec()")}} (un tableau avec quelques propriétés supplémentaires).

## Description

Cette méthode existe pour permettre d'adapter le comportement de la recherche des correspondances pour les sous-classes de `RegExp`. Elle est appelée de façon interne lorsqu'on utilise {{JSxRef("String.prototype.match()")}}. Ainsi, les deux exemples qui suivent sont équivalents et le second est la version interne du premier&nbsp;:

```js
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

Si l'expression rationnelle est globale (avec l'indicateur `g`), son {{JSxRef("RegExp/lastIndex", "lastIndex")}} est d'abord défini sur 0, de sorte que la correspondance commence toujours au début de la chaîne de caractères, et la méthode {{JSxRef("RegExp/exec", "exec()")}} de l'expression rationnelle est appelée de manière répétée jusqu'à ce que `exec()` retourne `null`. Si la correspondance actuelle est une chaîne de caractères vide, le `lastIndex` est quand même avancé — si l'expression rationnelle est [sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), il avance d'un point de code Unicode&nbsp;; sinon, il avance d'une unité UTF-16.

```js
console.log("😄".match(/(?:)/g)); // [ '', '', '' ]
console.log("😄".match(/(?:)/gu)); // [ '', '' ]
```

Si l'expression rationnelle n'est pas globale, `exec()` n'est appelée qu'une seule fois et son résultat devient la valeur de retour de `[Symbol.match]()`.

La méthode `exec()` réinitialise automatiquement `lastIndex` à 0 lorsque la dernière correspondance échoue. Ainsi, pour les expressions rationnelles globales avec `lastIndex` commençant à 0, `[Symbol.match]()` ne produit généralement aucun effet secondaire. Cependant, lorsque l'expression rationnelle est [adhérente](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) mais pas globale, `exec()` n'est appelée qu'une seule fois et ne réinitialise donc pas `lastIndex` si la correspondance a réussi. Dans ce cas, chaque appel à `match()` peut retourner un résultat différent.

```js
const re = /[abc]/y;
for (let i = 0; i < 5; i++) {
  console.log("abc".match(re), re.lastIndex);
}
// [ 'a' ] 1
// [ 'b' ] 2
// [ 'c' ] 3
// null 0
// [ 'a' ] 1
```

Lorsque l'expression rationnelle est adhérente et globale, elle effectue toujours des correspondances adhérentes — c'est-à-dire qu'elle ne parvient pas à correspondre à des occurrences au-delà de `lastIndex`.

```js
console.log("ab-c".match(/[abc]/gy)); // [ 'a', 'b' ]
```

De plus, la propriété `[Symbol.match]` est utilisée pour vérifier [si un objet est une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles).

## Exemples

### Appel direct

Cette méthode peut être utilisée de manière _presque_ identique à {{JSxRef("String.prototype.match()")}}, sauf que l'objet `this` est différent et que l'ordre des arguments est également différent.

```js
const re = /\d+/g;
const chaine = "2016-01-02";
const resultat = re[Symbol.match](chaine);
console.log(resultat); // ["2016", "01", "02"]
```

### Utiliser `[Symbol.match]()` dans les sous-classes

Les sous-classes de {{JSxRef("RegExp")}} peuvent surcharger la méthode `[Symbol.match]()` afin de modifier le comportement par défaut.

```js
class MaRegExp extends RegExp {
  [Symbol.match](chaine) {
    const resultat = RegExp.prototype[Symbol.match].call(this, chaine);
    if (!resultat) return null;
    return {
      group(n) {
        return resultat[n];
      },
    };
  }
}

const re = new MaRegExp("(\\d+)-(\\d+)-(\\d+)");
const chaine = "2016-01-02";
const resultat = chaine.match(re); // String.prototype.match appelle re[Symbol.match]().
console.log(resultat.group(1)); // 2016
console.log(resultat.group(2)); // 01
console.log(resultat.group(3)); // 02
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `RegExp.prototype[Symbol.match]` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- La méthode {{JSxRef("String.prototype.match()")}}
- La méthode [`RegExp.prototype[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- La méthode [`RegExp.prototype[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- La méthode [`RegExp.prototype[Symbol.search]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- La méthode [`RegExp.prototype[Symbol.split]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- La méthode {{JSxRef("RegExp.prototype.exec()")}}
- La méthode {{JSxRef("RegExp.prototype.test()")}}
- La méthode statique {{JSxRef("Symbol.match()")}}
