---
title: "Assertion de limite de mot : \\b, \\B"
slug: Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Une **assertion de limite de mot** (<i lang="en">word boundary assertion</i> en anglais) vérifie si la position actuelle dans la chaîne de caractères est une limite de mot. Une limite de mot se situe là où le caractère suivant est un caractère de mot et le caractère précédent ne l'est pas, ou inversement.

## Syntaxe

```regex
\b
\B
```

## Description

`\b` vérifie que la position actuelle dans la chaîne de caractères est une limite de mot. `\B` nie l'assertion&nbsp;: elle vérifie que la position actuelle n'est pas une limite de mot. Les deux sont des _assertions_, donc contrairement à d'autres [échappements de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) ou [échappements de classes de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), `\b` et `\B` ne consomment aucun caractère.

Un caractère de mot inclut les éléments suivants&nbsp;:

- Les lettres (A-Z, a-z), les chiffres (0-9) et le caractère de soulignement (\_).
- Si l'expression rationnelle est [sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode) et que le drapeau [`i`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) est défini, d'autres caractères Unicode qui sont canoniquement transformés en l'un des caractères ci-dessus par la [normalisation de casse <sup>(angl.)</sup>](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).

Les caractères de mot sont également reconnus par [_l'échappement de classe de caractères_](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) `\w`.

Les positions d'entrée hors limites sont considérées comme des caractères non-mots. Par exemple, les correspondances suivantes réussissent&nbsp;:

```js
/\ba/.exec("abc");
/c\b/.exec("abc");

/\B /.exec(" abc");
/ \B/.exec("abc ");
```

## Exemples

### Détecter des mots

L'exemple suivant détecte si une chaîne de caractères contient le mot «&nbsp;merci&nbsp;» ou «&nbsp;merci beaucoup&nbsp;»&nbsp;:

```js
function estRemerciement(str) {
  return /\b(merci|merci beaucoup)\b/i.test(str);
}

estRemerciement("Merci ! Vous m'avez beaucoup aidé."); // true
estRemerciement(
  "Je tenais simplement à vous dire merci beaucoup pour tout le travail que vous avez accompli.",
); // true
estRemerciement("La fête de Thanksgiving approche à grands pas."); // false
```

> [!WARNING]
> Les limites de mot ne sont pas clairement définies dans toutes les langues. Si vous travaillez avec des langues comme le chinois ou le thaï, qui n'utilisent pas de séparateurs blancs, utilisez plutôt une bibliothèque plus avancée comme {{JSxRef("Intl.Segmenter")}} pour rechercher des mots.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des assertions](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Assertion de limite d'entrée&nbsp;: `^`, `$`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Assertion anticipée&nbsp;: `(?=...)`, `(?!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Assertion de précédence&nbsp;: `(?<=...)`, `(?<!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Échappement de caractère&nbsp;: `\n`, `\u{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
