---
title: "RegExp : méthode [Symbol.search]()"
short-title: "[Symbol.search]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search
l10n:
  sourceCommit: 5b3aa7e4e8cd54f1b662534d8c97074e522b7fc4
---

La méthode **`[Symbol.search]()`** des instances de {{JSxRef("RegExp")}} définit comment [`String.prototype.search()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/search) doit se comporter.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype[Symbol.search]()")}}

```js interactive-example
class RegExp1 extends RegExp {
  constructor(str) {
    super(str);
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

console.log("table football".search(new RegExp1("foo")));
// Résultat attendu : 6
```

## Syntaxe

```js-nolint
regexp[Symbol.search](str)
```

### Paramètres

- `str`
  - : Une chaîne de caractères ({{JSxRef("String")}}) sur laquelle on veut rechercher une correspondance.

### Valeur de retour

L'index de la première correspondance entre l'expression rationnelle et la chaîne de caractères donnée, ou `-1` si aucune correspondance n'a été trouvée.

## Description

Cette méthode existe pour personnaliser le comportement de la recherche dans les sous-classes de `RegExp`. Elle est appelée en interne dans {{JSxRef("String.prototype.search()")}}. Par exemple, les deux exemples suivants retournent le même résultat.

```js
"abc".search(/a/);

/a/[Symbol.search]("abc");
```

`[Symbol.search]()` appelle toujours exactement une fois la méthode [`exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) de l'expression rationnelle, et retourne la propriété `index` du résultat, ou `-1` si le résultat est `null`. L'indicateur `g` n'a aucun effet avec cette méthode.

Cette méthode ne copie pas l'expression rationnelle, contrairement à [`[Symbol.split]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) ou [`[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll). Cependant, contrairement à [`[Symbol.match]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) ou [`[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), elle définit toujours [`lastIndex`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) à 0 au début de l'exécution et le restaure à la valeur précédente à la fin, évitant ainsi généralement les effets secondaires. Cela signifie qu'elle retourne toujours la première correspondance dans la chaîne de caractères même lorsque `lastIndex` est non nul, et que les expressions rationnelles adhérentes recherchent toujours strictement au début de la chaîne de caractères.

```js
const re = /[abc]/g;
re.lastIndex = 2;
console.log("abc".search(re)); // 0

const re2 = /[bc]/y;
re2.lastIndex = 1;
console.log("abc".search(re2)); // -1
console.log("abc".match(re2)); // [ 'b' ]
```

## Exemples

### Appel direct

Cette méthode peut être utilisée de manière presque identique à {{JSxRef("String.prototype.search()")}}, à l'exception du `this` différent et de l'ordre des arguments différent.

```js
const re = /-/g;
const chaine = "2016-01-02";
const resultat = re[Symbol.search](chaine);
console.log(resultat); // 4
```

### Utiliser `[Symbol.search]()` dans les sous-classes

Les sous-classes de {{JSxRef("RegExp")}} peuvent redéfinir la méthode `[Symbol.search]()` pour modifier le comportement.

```js
class MaRegExp extends RegExp {
  constructor(chaine) {
    super(chaine);
    this.pattern = chaine;
  }
  [Symbol.search](chaine) {
    return chaine.indexOf(this.pattern);
  }
}

const re = new MaRegExp("a+b");
const chaine = "ab a+b";
const resultat = chaine.search(re); // String.prototype.search appelle re[Symbol.search]().
console.log(resultat); // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `RegExp.prototype[Symbol.search]` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- La méthode {{JSxRef("String.prototype.search()")}}
- La méthode [`RegExp.prototype[Symbol.match]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- La méthode [`RegExp.prototype[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- La méthode [`RegExp.prototype[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- La méthode [`RegExp.prototype[Symbol.split]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- La méthode {{JSxRef("RegExp.prototype.exec()")}}
- La méthode {{JSxRef("RegExp.prototype.test()")}}
- La méthode statique {{JSxRef("Symbol.search()")}}
