---
title: "Caractère échappé : \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
l10n:
  sourceCommit: e9cb9feda05ce0f1dc08aada71c0a2265baeeaff
---

Un **caractère échappé** (<i lang="en">character escape</i> en anglais) représente un caractère qui ne peut pas être représenté de manière pratique sous sa forme littérale.

## Syntaxe

```regex
\f, \n, \r, \t, \v
\cA, \cB, …, \cz
\0
\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \\{, \\}, \|, \/

\xHH
\uHHHH
\u{H…H}
```

> [!NOTE]
> `,` ne fait pas partie de la syntaxe.

### Paramètres

- `H…H`
  - : Un nombre hexadécimal représentant le point de code Unicode du caractère. La forme `\xHH` doit avoir deux chiffres hexadécimaux&nbsp;; la forme `\uHHHH` doit en avoir quatre&nbsp;; la forme `\u{H…H}` peut en avoir de 1 à 6.

## Description

Les caractères échappés suivants sont reconnus dans les expressions rationnelles&nbsp;:

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : Identiques à ceux des [littéraux de chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#séquences_échappées), sauf `\b`, qui représente une [limite de mot](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) dans les expressions rationnelles, sauf dans une [classe de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\c` suivie d'une lettre de `A` à `Z` ou de `a` à `z`
  - : Représente le caractère de contrôle dont la valeur est égale à la valeur du caractère de la lettre modulo 32. Par exemple, `\cJ` représente un saut de ligne (`\n`), car le point de code de `J` est 74, et 74 modulo 32 est 10, ce qui est le point de code du saut de ligne. Comme une lettre majuscule et sa forme minuscule diffèrent de 32, `\cJ` et `\cj` sont équivalents. Vous pouvez représenter les caractères de contrôle de 1 à 26 sous cette forme.
- `\0`
  - : Représente le caractère NUL U+0000. Il ne peut pas être suivi d'un chiffre (ce qui en fait une [séquence d'échappement octal historique](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#séquences_déchappement)).
- `\^`, `\$`, `\\`, `\.`, `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\\{`, `\\}`, `\|`, `\/`
  - : Représentent le caractère lui-même. Par exemple, `\\` représente une barre oblique inversée, et `\(` représente une parenthèse ouvrante. Ce sont des [caractères syntaxiques](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) dans les expressions rationnelles (`/` délimite un littéral d'expression rationnelle), ils doivent donc être échappés sauf dans une [classe de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\xHH`
  - : Représente le caractère correspondant au point de code Unicode hexadécimal indiqué. Le nombre hexadécimal doit comporter exactement deux chiffres.
- `\uHHHH`
  - : Représente le caractère correspondant au point de code Unicode hexadécimal indiqué. Le nombre hexadécimal doit comporter exactement quatre chiffres. Deux séquences d'échappement de ce type permettent de représenter une paire de substituts en [mode sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode). (En mode insensible à l'Unicode, elles représentent toujours deux caractères distincts.)
- `\u{H…H}`
  - : (uniquement en [mode sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode)) Représente le caractère correspondant au point de code Unicode hexadécimal indiqué. Le nombre hexadécimal peut comporter de 1 à 6 chiffres.

En [mode insensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), les séquences d'échappement qui ne figurent pas ci-dessus deviennent des _échappements d'identité_&nbsp;: elles représentent le caractère qui suit la barre oblique inversée. Par exemple, `\a` représente le caractère `a`. Ce comportement limite la possibilité d'introduire de nouvelles séquences d'échappement sans provoquer de problèmes de compatibilité ascendante, il est donc interdit en mode sensible à l'Unicode.

En mode insensible à l'Unicode, `]`, `{`, et `}` peuvent apparaître [littéralement](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) s'il est impossible de les analyser comme la fin d'une classe de caractères ou comme des délimiteurs de quantificateur. Il s'agit d'une [syntaxe obsolète pour la compatibilité du Web](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), et vous ne devez pas vous y fier.

En mode insensible à l'Unicode, les séquences d'échappement de la forme `\cX` dans les [classes de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class), où `X` est un chiffre ou `_`, sont décodées comme celles contenant des lettres {{Glossary("ASCII")}}&nbsp;: `\c0` équivaut à `\cP` modulo 32. De plus, si la forme `\cX` apparaît à un endroit où `X` n'est pas un caractère reconnu, la barre oblique inversée est traitée comme un caractère littéral. Ces syntaxes sont également obsolètes.

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true (la syntaxe \c0 n'est prise en charge que dans les classes de caractères)
```

## Exemples

### Utiliser les caractères échappés

Les caractères échappés sont utiles lorsque vous souhaitez faire correspondre un caractère qui n'est pas facilement représentable sous sa forme littérale. Par exemple, vous ne pouvez pas utiliser un saut de ligne littéralement dans un littéral d'expression rationnelle, vous devez donc utiliser un caractère échappé&nbsp;:

```js
const motif = /a\nb/;
const chaineDeCaracteres = `a
b`;
console.log(motif.test(chaineDeCaracteres)); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Classe de caractères&nbsp;: `[...]`, `[^...]`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Classe de caractères échappés&nbsp;: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Caractère littéral&nbsp;: `a`, `b`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Classe de caractères Unicode échappés&nbsp;: `\p{...}`, `\P{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Rétro-référence&nbsp;: `\1`, `\2`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Rétro-référence nommée&nbsp;: `\k<name>`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Assertion de limite de mot&nbsp;: `\b`, `\B`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
