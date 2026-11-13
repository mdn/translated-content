---
title: "Classe de caractères échappés : \\d, \\D, \\w, \\W, \\s, \\S"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class_escape
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Une **classe de caractères échappés** (<i lang="en">character class escape</i> en anglais) est une séquence d'échappement qui représente un ensemble de caractères.

## Syntaxe

```regex
\d, \D
\s, \S
\w, \W
```

> [!NOTE]
> `,` n'est pas une partie de la syntaxe.

## Description

Contrairement aux [séquences d'échappement de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), les classes de caractères échappés représentent un _ensemble_ de caractères prédéfini, un peu comme une [classe de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Les classes de caractères suivantes sont prises en charge&nbsp;:

- `\d`
  - : Correspond à n'importe quel chiffre. Équivaut à `[0-9]`.
- `\w`
  - : Correspond à n'importe quel caractère de mot, où un caractère de mot inclut les lettres (A-Z, a-z), les chiffres (0-9) et le soulignement (\_). Si l'expression rationnelle est [sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode) et que l'indicateur [`i`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) est défini, elle correspond également à d'autres caractères Unicode qui sont canoniquement transformés en l'un des caractères ci-dessus avec la [normalisation de casse <sup>(angl.)</sup>](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).
- `\s`
  - : Correspond à n'importe quel caractère [d'espace blanc](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#espace_blanc) ou [de terminaison de ligne](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#terminaisons_de_ligne).

Les formes majuscules `\D`, `\W` et `\S` créent des classes de caractères complémentaires pour `\d`, `\w` et `\s`, respectivement. Elles correspondent à n'importe quel caractère qui ne fait pas partie de l'ensemble de caractères correspondant à la forme en minuscules.

[Les classes de caractères Unicode échappés](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) commencent par `\p` et `\P`, mais elles ne sont prises en charge qu'en [mode sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode). En mode insensible à l'Unicode, elles sont des [échappements d'identité](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) pour le caractère `p` ou `P`.

Les classes de caractères échappés peuvent être utilisées dans des [classes de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Cependant, elles ne peuvent pas être utilisées comme limites des plages de caractères, ce qui n'est autorisé qu'en tant que [syntaxe obsolète pour la compatibilité web](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), et vous ne devez pas vous y fier.

## Exemples

### Fractionner par les espaces blancs

L'exemple suivant fractionne une chaîne de caractères en un tableau de mots et prend en charge tous les types de séparateurs d'espaces blancs&nbsp;:

```js
function fractionnerMots(str) {
  return str.split(/\s+/);
}

fractionnerMots(`Regarde les étoiles
Regarde  comment elles\tbrillent pour toi`);
// ['Regarde', 'les', 'étoiles', 'Regarde', 'comment', 'elles', 'brillent', 'pour', 'toi']
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Classe de caractères&nbsp;: `[...]`, `[^...]`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Classes de caractères Unicode échappées&nbsp;: `\p{...}`, `\P{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Échappement de caractère&nbsp;: `\n`, `\u{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjonction&nbsp;: `|`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
