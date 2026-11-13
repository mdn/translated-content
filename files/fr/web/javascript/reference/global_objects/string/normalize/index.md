---
title: "String : méthode normalize()"
short-title: normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`normalize()`** des valeurs {{JSxRef("String")}} vaut pour les chaînes de caractères et retourne la forme normalisée Unicode de cette chaîne de caractères.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.normalize()", "taller")}}

```js interactive-example
const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

console.log(`${name1}, ${name2}`);
// Résultat attendu : "Amélie, Amélie"
console.log(name1 === name2);
// Résultat attendu : false
console.log(name1.length === name2.length);
// Résultat attendu : false

const name1NFC = name1.normalize("NFC");
const name2NFC = name2.normalize("NFC");

console.log(`${name1NFC}, ${name2NFC}`);
// Résultat attendu : "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Résultat attendu : true
console.log(name1NFC.length === name2NFC.length);
// Résultat attendu : true
```

## Syntaxe

```js-nolint
normalize()
normalize(form)
```

### Paramètres

- `form` {{Optional_Inline}}
  - : Une valeur parmi `"NFC"`, `"NFD"`, `"NFKC"`, ou
    `"NFKD"`, définissant la forme de normalisation Unicode à utiliser. Si le paramètre est omis ou vaut {{JSxRef("undefined")}}, `"NFC"` est utilisé.

    Ces valeurs ont les significations suivantes&nbsp;:
    - `"NFC"`
      - : Décomposition canonique, suivie d'une composition canonique.
    - `"NFD"`
      - : Décomposition canonique.
    - `"NFKC"`
      - : Décomposition de compatibilité, suivie d'une composition canonique.
    - `"NFKD"`
      - : Décomposition de compatibilité.

### Valeur de retour

Une chaîne de caractères contenant la forme de normalisation Unicode de la chaîne de caractères donnée.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `form` n'est pas une des valeurs définies ci-dessus.

## Description

Unicode attribue une valeur numérique unique, appelée _point de code_, à chaque caractère. Par exemple, le point de code pour `"A"` est donné comme U+0041. Cependant, parfois plus d'un point de code, ou une séquence de points de code, peut représenter le même caractère abstrait — le caractère `"ñ"` par exemple peut être représenté par l'une des options suivantes&nbsp;:

- Le point de code unique U+00F1.
- Le point de code pour `"n"` (U+006E) suivi du point de code pour le tilde combiné (U+0303).

```js
const chaineCaracteres1 = "\u00F1";
const chaineCaracteres2 = "\u006E\u0303";

console.log(chaineCaracteres1); // ñ
console.log(chaineCaracteres2); // ñ
```

Cependant, comme les points de code sont différents, la comparaison des chaînes de caractères ne les considère pas comme égaux. Et comme le nombre de points de code diffère dans chaque version, leurs longueurs diffèrent également.

```js
const chaineCaracteres1 = "\u00F1"; // ñ
const chaineCaracteres2 = "\u006E\u0303"; // ñ

console.log(chaineCaracteres1 === chaineCaracteres2); // false
console.log(chaineCaracteres1.length); // 1
console.log(chaineCaracteres2.length); // 2
```

La méthode `normalize()` aide à résoudre ce problème en convertissant une chaîne de caractères en une forme normalisée commune à toutes les séquences de points de code représentant les mêmes caractères. Il existe deux formes principales de normalisation&nbsp;: l'une repose sur **l'équivalence canonique**, l'autre sur **la compatibilité**.

### Normaliser par équivalence canonique

En Unicode, deux séquences de points de code sont en équivalence canonique si elles représentent les mêmes caractères abstraits et doivent toujours avoir la même apparence visuelle et le même comportement (par exemple, elles doivent toujours être triées de la même façon).

Vous pouvez utiliser `normalize()` avec les arguments `"NFD"` ou `"NFC"` pour produire une forme de la chaîne de caractères qui est identique pour toutes les chaînes de caractères canoniquement équivalentes. Dans l'exemple ci-dessous, vous normalisez deux représentations du caractère `"ñ"`&nbsp;:

```js
let chaineCaracteres1 = "\u00F1"; // ñ
let chaineCaracteres2 = "\u006E\u0303"; // ñ

chaineCaracteres1 = chaineCaracteres1.normalize("NFD");
chaineCaracteres2 = chaineCaracteres2.normalize("NFD");

console.log(chaineCaracteres1 === chaineCaracteres2); // true
console.log(chaineCaracteres1.length); // 2
console.log(chaineCaracteres2.length); // 2
```

#### Obtenir les formes composées et décomposées

Notez que la longueur de la forme normalisée avec `"NFD"` est `2`. C'est parce que `"NFD"` vous donne la version **décomposée** de la forme canonique, dans laquelle chaque point de code unique se décompose en plusieurs points de code combinatoires. La forme canonique décomposée de `"ñ"` est `"\u006E\u0303"`.

Définissez `"NFC"` pour obtenir la forme canonique **composée**, qui remplace, lorsque c'est possible, plusieurs points de code par un point de code unique. La forme canonique composée de `"ñ"` est `"\u00F1"`&nbsp;:

```js
let chaineCaracteres1 = "\u00F1"; // ñ
let chaineCaracteres2 = "\u006E\u0303"; // ñ

chaineCaracteres1 = chaineCaracteres1.normalize("NFC");
chaineCaracteres2 = chaineCaracteres2.normalize("NFC");

console.log(chaineCaracteres1 === chaineCaracteres2); // true
console.log(chaineCaracteres1.length); // 1
console.log(chaineCaracteres2.length); // 1
console.log(chaineCaracteres2.codePointAt(0).toString(16)); // f1
```

### Normaliser par compatibilité

En Unicode, deux séquences de points de code sont compatibles si elles représentent les mêmes caractères abstraits et si vous les traitez de la même façon dans certaines applications, mais pas nécessairement dans toutes.

Toutes les séquences canoniquement équivalentes sont également compatibles, mais la réciproque n'est pas vraie.

Par exemple&nbsp;:

- le point de code U+FB00 représente la [ligature](/fr/docs/Glossary/Ligature) `"ﬀ"`. Il est compatible avec deux points de code U+0066 consécutifs (`"ff"`).
- le point de code U+24B9 représente le symbole `"Ⓓ"`.
  Il est compatible avec le point de code U+0044 (`"D"`).

À certains égards (comme le tri), vous devez les traiter comme équivalentes — et à d'autres (comme l'apparence visuelle), vous ne le devez pas, elles ne sont donc pas en équivalence canonique.

Vous pouvez utiliser `normalize()` en utilisant les arguments `"NFKD"` ou `"NFKC"` pour produire une forme de la chaîne de caractères qui est la même pour toutes les chaînes de caractères compatibles&nbsp;:

```js
let chaineCaracteres1 = "\uFB00";
let chaineCaracteres2 = "\u0066\u0066";

console.log(chaineCaracteres1); // ﬀ
console.log(chaineCaracteres2); // ff
console.log(chaineCaracteres1 === chaineCaracteres2); // false
console.log(chaineCaracteres1.length); // 1
console.log(chaineCaracteres2.length); // 2

chaineCaracteres1 = chaineCaracteres1.normalize("NFKD");
chaineCaracteres2 = chaineCaracteres2.normalize("NFKD");

console.log(chaineCaracteres1); // ff <- aspect visuel modifié
console.log(chaineCaracteres2); // ff
console.log(chaineCaracteres1 === chaineCaracteres2); // true
console.log(chaineCaracteres1.length); // 2
console.log(chaineCaracteres2.length); // 2
```

Lorsque vous appliquez une normalisation par compatibilité, il est important de prendre en compte l'usage que vous prévoyez pour les chaînes de caractères, car la forme normalisée peut ne pas convenir à toutes les applications. Dans l'exemple ci-dessus, la normalisation convient à la recherche, car elle permet à l'utilisateur·ice de trouver la chaîne de caractères en recherchant `"f"`. Mais elle peut ne pas convenir à l'affichage, car la représentation visuelle est différente.

Comme pour la normalisation canonique, demandez une forme compatible décomposée ou composée en transmettant respectivement `"NFKD"` ou `"NFKC"`.

## Exemples

```js
// Chaîne de caractères initiale

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
const chaine = "\u1E9B\u0323";

// Forme canonique composée (Canonically-composed form) (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
chaine.normalize("NFC"); // "\u1E9B\u0323"
chaine.normalize(); // la même chaîne de caractères que précédemment

// Forme canonique décomposée (Canonically-decomposed form) (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
chaine.normalize("NFD"); // "\u017F\u0323\u0307"

// Forme composée compatible (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
chaine.normalize("NFKC"); // "\u1E69"

// Forme décomposée compatible (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
chaine.normalize("NFKD"); // "\u0073\u0323\u0307"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Formes de normalisation Unicode, Annexe n°15 du standard Unicode <sup>(angl.)</sup>](https://www.unicode.org/reports/tr15/)
- [Équivalence Unicode <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Unicode_equivalence) sur Wikipedia
