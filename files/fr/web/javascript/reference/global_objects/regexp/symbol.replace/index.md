---
title: "RegExp : méthode [Symbol.replace]()"
short-title: "[Symbol.replace]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
l10n:
  sourceCommit: 5b3aa7e4e8cd54f1b662534d8c97074e522b7fc4
---

La méthode **`[Symbol.replace]()`** des instances de {{JSxRef("RegExp")}} définit comment [`String.prototype.replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace) et [`String.prototype.replaceAll()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) doivent se comporter lorsque l'expression rationnelle est passée en tant que motif.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype[Symbol.replace]()")}}

<!-- cSpell:ignore tototruc -->

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.replace](str) {
    return RegExp.prototype[Symbol.replace].call(this, str, "#!@?");
  }
}

console.log("tototruc".replace(new RegExp1("toto")));
// Résultat attendu : "#!@?truc"
```

## Syntaxe

```js-nolint
regexp[Symbol.replace](str, replacement)
```

### Paramètres

- `str`
  - : Une chaîne de caractères ({{JSxRef("String")}}) qui est la cible du remplacement.
- `replacement`
  - : Peut être une chaîne de caractères ou une fonction.
    - Si c'est une chaîne de caractères, elle remplace la sous-chaîne de caractère correspondant à l'expression rationnelle actuelle. Un certain nombre de modèles de remplacement spéciaux sont pris en charge&nbsp;; voir la section [Définir une chaîne de caractères comme remplacement](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace#définir_une_chaîne_de_caractères_comme_remplacement) de `String.prototype.replace`.
    - Si c'est une fonction, elle est invoquée pour chaque correspondance et la valeur de retour est utilisée comme texte de remplacement. Les arguments fournis à cette fonction sont décrits dans la section [Définir une fonction comme remplacement](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace#définir_une_fonction_comme_remplacement) de `String.prototype.replace`.

### Valeur de retour

Une nouvelle chaîne de caractères, avec une, plusieurs ou toutes les correspondances du motif remplacées par le remplacement défini.

## Description

Cette méthode existe pour personnaliser le comportement du remplacement dans les sous-classes de `RegExp`. Elle est appelée en interne dans {{JSxRef("String.prototype.replace()")}} et {{JSxRef("String.prototype.replaceAll()")}} si l'argument `pattern` est un objet {{JSxRef("RegExp")}}. Par exemple, les deux exemples suivants retournent le même résultat.

```js
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

Si l'expression rationnelle est globale (avec l'indicateur `g`), son [`lastIndex`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) est d'abord défini à 0, de sorte que la recherche commence toujours au début de la chaîne de caractères, et sa méthode [`exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) est appelée à plusieurs reprises jusqu'à ce que `exec()` retourne `null`. Si la correspondance actuelle est une chaîne de caractères vide, `lastIndex` avance tout de même — si l'expression rationnelle est [compatible avec Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#sensible_à_lunicode), elle avance d'un point de code Unicode&nbsp;; sinon, elle avance d'une unité de code UTF-16.

```js
console.log("😄".replace(/(?:)/g, " ")); // " \ud83d \ude04 "
console.log("😄".replace(/(?:)/gu, " ")); // " 😄 "
```

Si l'expression rationnelle n'est pas globale, `exec()` ne serait appelée qu'une seule fois.

La substitution a lieu après que toutes les sous-chaînes de caractères correspondantes ont été identifiées. Pour chaque résultat réussi de `exec()`, une chaîne de caractères de substitution est créée à partir de l'argument `replacement`, le processus est décrit dans [`String.prototype.replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace#description).

La méthode `exec()` réinitialise automatiquement `lastIndex` à 0 lorsque la dernière correspondance échoue, ainsi, pour les expressions rationnelles globales dont `lastIndex` commence à 0, `[Symbol.replace]()` ne produit généralement aucun effet secondaire. Cependant, lorsque l'expression rationnelle est [adhérente](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) mais n'est pas globale, `exec()` n'est appelée qu'une seule fois et ne réinitialise donc pas `lastIndex` si la correspondance a réussi. Dans ce cas, chaque appel à `replace()` peut retourner un résultat différent.

```js
const re = /a/y;

for (let i = 0; i < 5; i++) {
  console.log("aaa".replace(re, "b"), re.lastIndex);
}

// baa 1
// aba 2
// aab 3
// aaa 0
// baa 1
```

Lorsque l'expression rationnelle est adhérente et globale, elle effectue toujours des correspondances adhérentes — c'est-à-dire qu'elle ne trouve aucune occurrence au-delà de `lastIndex`.

```js
console.log("aa-a".replace(/a/gy, "b")); // "bb-a"
```

## Exemples

### Appel direct

Cette méthode peut être utilisée de manière presque identique à {{JSxRef("String.prototype.replace()")}}, à l'exception du `this` différent et de l'ordre des arguments différent.

```js
const re = /-/g;
const chaine = "2016-01-01";
const nouvelleChaine = re[Symbol.replace](chaine, ".");
console.log(nouvelleChaine); // 2016.01.01
```

### Utiliser `[Symbol.replace]()` dans les sous-classes

Les sous-classes de {{JSxRef("RegExp")}} peuvent redéfinir la méthode `[Symbol.replace]()` pour modifier le comportement par défaut.

```js
class MaRegExp extends RegExp {
  constructor(motif, indicateurs, compte) {
    super(motif, indicateurs);
    this.count = compte;
  }
  [Symbol.replace](chaine, remplacement) {
    // Effectue [Symbol.replace]() `count` fois.
    let resultat = chaine;
    for (let i = 0; i < this.count; i++) {
      resultat = RegExp.prototype[Symbol.replace].call(
        this,
        resultat,
        remplacement,
      );
    }
    return resultat;
  }
}

const re = new MaRegExp("\\d", "", 3);
const chaine = "01234567";
const nouvelleChaine = chaine.replace(re, "#"); // String.prototype.replace appelle re[Symbol.replace]().
console.log(nouvelleChaine); // ###34567
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `RegExp.prototype[Symbol.replace]` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- La méthode {{JSxRef("String.prototype.replace()")}}
- La méthode {{JSxRef("String.prototype.replaceAll()")}}
- La méthode [`RegExp.prototype[Symbol.match]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- La méthode [`RegExp.prototype[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- La méthode [`RegExp.prototype[Symbol.search]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- La méthode [`RegExp.prototype[Symbol.split]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- La méthode {{JSxRef("RegExp.prototype.exec()")}}
- La méthode {{JSxRef("RegExp.prototype.test()")}}
- La méthode statique {{JSxRef("Symbol.replace()")}}
