---
title: "RegExp : méthode [Symbol.split]()"
short-title: "[Symbol.split]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
l10n:
  sourceCommit: 5b3aa7e4e8cd54f1b662534d8c97074e522b7fc4
---

La méthode **`[Symbol.split]()`** des instances de {{JSxRef("RegExp")}} définit comment [`String.prototype.split()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split) doit se comporter lorsque l'expression rationnelle est passée en tant que séparateur.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype[Symbol.split]()")}}

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => `(${x})`);
  }
}

console.log("2016-01-02".split(new RegExp1("-")));
// Résultat attendu : Array ["(2016)", "(01)", "(02)"]

console.log("2016-01-02".split(/-/));
// Résultat attendu : Array ["2016", "01", "02"]
```

## Syntaxe

```js-nolint
regexp[Symbol.split](str)
regexp[Symbol.split](str, limit)
```

### Paramètres

- `str`
  - : La cible de l'opération de découpe.
- `limit` {{Optional_Inline}}
  - : Un entier définissant une limite sur le nombre de découpes à effectuer. La méthode `[Symbol.split]()` continue de découper à chaque correspondance du motif de l'expression rationnelle `this` (ou, dans la syntaxe ci-dessus, `regexp`), jusqu'à ce que le nombre d'éléments découpés atteigne la `limit` ou que la chaîne de caractères ne contienne plus de correspondances avec le motif `this`.

### Valeur de retour

Un tableau ({{JSxRef("Array")}}) dont les éléments sont les sous-chaînes de caractères. Les groupes capturant sont inclus.

## Description

Cette méthode existe pour personnaliser le comportement de `split()` dans les sous-classes de `RegExp`. Elle est appelée en interne dans {{JSxRef("String.prototype.split()")}} lorsqu'un objet `RegExp` est passé comme séparateur. Par exemple, les deux exemples suivants retournent le même résultat.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Comme [`[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll), `[Symbol.split]()` commence par utiliser [`[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) pour construire une nouvelle expression rationnelle, évitant ainsi de modifier l'expression rationnelle d'origine de quelque manière que ce soit. Le constructeur reçoit `this` et les indicateurs d'origine, ainsi que l'indicateur `y` («&nbsp;adhérent&nbsp;») s'il n'est pas présent à l'origine. L'indicateur `g` («&nbsp;global&nbsp;») n'a aucune incidence sur le comportement de la méthode. Par défaut, en raison du comportement du constructeur `RegExp()`, [`lastIndex`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) commence à 0.

Si la chaîne de caractères cible est vide, et si l'expression rationnelle peut correspondre à des chaînes de caractères vides (par exemple, `/a?/`), un tableau vide est retourné. Sinon, si l'expression rationnelle ne peut pas correspondre à une chaîne de caractères vide, `[""]` est retourné.

La méthode [`exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) de l'expression rationnelle est appelée à plusieurs reprises, en faisant avancer `lastIndex` à chaque appel, jusqu'à ce qu'il atteigne la fin de la chaîne de caractères. Si la correspondance actuelle est une chaîne de caractères vide, ou si l'expression rationnelle ne correspond pas à la position actuelle (car elle est adhérente), `lastIndex` avance tout de même — si l'expression rationnelle est [sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), elle avance d'un point de code Unicode&nbsp;; sinon, elle avance d'une unité de code UTF-16.

```js
console.log("😄".split(/(?:)/g)); // [ '\ud83d', '\ude04' ]
console.log("😄".split(/(?:)/gu)); // [ '😄' ]
```

Pour chaque correspondance, la sous-chaîne de caractères entre la fin de la dernière chaîne de caractères correspondante et le début de la chaîne de caractères correspondante actuelle est d'abord ajoutée au tableau de résultats. Ensuite, les valeurs des groupes de capture sont ajoutées une par une. La longueur du tableau retourné ne dépasse jamais le paramètre `limit`, s'il est fourni, tout en s'en rapprochant autant que possible. Par conséquent, la dernière correspondance et ses groupes de capture peuvent ne pas tous être présents dans le tableau retourné si le tableau est déjà rempli.

Si aucune correspondance ne réussit dans la chaîne de caractères, la chaîne de caractères cible est retournée telle quelle, enveloppée dans un tableau.

## Exemples

### Appel direct

Cette méthode peut être utilisée de manière presque identique à {{JSxRef("String.prototype.split()")}}, à l'exception du `this` différent et de l'ordre des arguments différent.

```js
const re = /-/g;
const chaine = "2016-01-02";
const resultat = re[Symbol.split](chaine);
console.log(resultat); // ["2016", "01", "02"]
```

### Utiliser `[Symbol.split]()` dans les sous-classes

Les sous-classes de {{JSxRef("RegExp")}} peuvent redéfinir la méthode `[Symbol.split]()` pour modifier le comportement par défaut.

```js
class MaRegExp extends RegExp {
  [Symbol.split](chaine, limite) {
    const resultat = RegExp.prototype[Symbol.split].call(this, chaine, limite);
    return resultat.map((x) => `(${x})`);
  }
}

const re = new MaRegExp("-");
const chaine = "2016-01-02";
const resultat = chaine.split(re); // String.prototype.split appelle re[Symbol.split]().
console.log(resultat); // ["(2016)", "(01)", "(02)"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `RegExp.prototype[Symbol.split]` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- La méthode {{JSxRef("String.prototype.split()")}}
- La méthode [`RegExp.prototype[Symbol.match]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- La méthode [`RegExp.prototype[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- La méthode [`RegExp.prototype[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- La méthode [`RegExp.prototype[Symbol.search]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- La méthode {{JSxRef("RegExp.prototype.exec()")}}
- La méthode {{JSxRef("RegExp.prototype.test()")}}
- La méthode statique {{JSxRef("Symbol.split()")}}
