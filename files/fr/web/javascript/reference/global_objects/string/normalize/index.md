---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
  - Unicode
translation_of: Web/JavaScript/Reference/Global_Objects/String/normalize
original_slug: Web/JavaScript/Reference/Objets_globaux/String/normalize
---
{{JSRef}}

La méthode **`normalize()`** permet de renvoyer la forme normalisée Unicode d'une chaîne de caractères.

{{EmbedInteractiveExample("pages/js/string-normalize.html")}}

## Syntaxe

```js
str.normalize([form]);
```

### Paramètres

- `form`

  - : Paramètre optionnel. Une chaîne parmi "NFC", "NFD", "NFKC", ou "NFKD", définissant la forme de normalisation Unicode à utiliser. Si le paramètre n'est pas précisé ou vaut {{jsxref("undefined")}}, la valeur par défaut utilisée sera "`NFC`".

    - `NFC` - Normalization Form Canonical Composition.
    - `NFD` - Normalization Form Canonical Decomposition.
    - `NFKC` - Normalization Form Compatibility Composition.
    - `NFKD` - Normalization Form Compatibility Decomposition.

### Valeur de retour

Une chaîne de caractères qui est le forme Unicode normalisée de la chaîne appelante.

### Exceptions

- {{jsxref("RangeError")}}
  - : Une exception `RangeError` est envoyée si le paramètre `form` n'est pas une des valeurs définies ci-avant.

## Description

La méthode `normalize()` renvoie la forme normalisée Unicode de la chaîne de caractères. Elle n'affecte pas la valeur de la chaîne.

## Exemples

```js
// Chaîne initiale

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
var str = "\u1E9B\u0323";


// Forme canonique composée (Canonically-composed form) (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize("NFC"); // "\u1E9B\u0323"
str.normalize(); // la même chaîne que précédemment


// Forme canonique décomposée (Canonically-decomposed form) (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFD"); // "\u017F\u0323\u0307"


// Forme composée compatible (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
str.normalize("NFKC"); // "\u1E69"


// Forme décomposée compatible (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFKD"); // "\u0073\u0323\u0307"
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-string.prototype.normalize', 'String.prototype.normalize')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-string.prototype.normalize', 'String.prototype.normalize')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.normalize")}}

## Voir aussi

- [Formes de normalisation Unicode, Annexe n°15 du standard Unicode](https://www.unicode.org/reports/tr15/)
- [Équivalence Unicode](https://en.wikipedia.org/wiki/Unicode_equivalence)
