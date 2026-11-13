---
title: "Rétro-référence nommée : \\k<name>"
slug: Web/JavaScript/Reference/Regular_expressions/Named_backreference
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Une **rétro-référence nommée** (<i lang="en">named backreference</i> en anglais) fait référence à la sous-correspondance d'un [groupe capturant nommé](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) précédent et correspond au même texte que ce groupe. Pour les [groupes capturant non nommés](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), vous devez utiliser la syntaxe normale de [rétro-référence](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

## Syntaxe

```regex
\k<name>
```

### Paramètres

- `name`
  - : Le nom du groupe. Doit être un [identifiant](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#identifiants) valide et faire référence à un groupe capturant nommé existant.

## Description

Les rétro-références nommées sont très similaires aux rétro-références normales&nbsp;: elles font référence au texte correspondant à un groupe capturant et correspondent au même texte. La différence est que vous faites référence au groupe capturant par son nom plutôt que par son numéro. Cela rend l'expression rationnelle plus lisible et plus facile à re-factoriser et à maintenir.

En [mode non sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), la séquence `\k` ne démarre une rétro-référence nommée que si l'expression rationnelle contient au moins un groupe capturant nommé. Sinon, il s'agit d'une [échappement d'identité](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) et c'est la même chose que le caractère littéral `k`. Il s'agit d'une [syntaxe obsolète pour la compatibilité web](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), et vous ne devez pas vous y fier.

```js
/\k/.test("k"); // true
```

## Exemples

### Faire correspondre les guillemets

La fonction suivante correspond aux motifs `title='xxx'` et `title="xxx"` dans une chaîne de caractères. Pour vérifier que les guillemets correspondent, nous utilisons une rétro-référence au premier guillemet. L'accès au deuxième groupe capturant (`[2]`) retourne la chaîne de caractères comprise entre les guillemets correspondants&nbsp;:

```js
function analyserTitre(chaineDeCaracteresMeta) {
  return chaineDeCaracteresMeta.match(/title=(?<quote>["'])(.*?)\k<quote>/)[2];
}

analyserTitre('title="toto"'); // 'toto'
analyserTitre("title='toto' lang='en'"); // 'toto'
analyserTitre('title="Avantages des groupes capturant nommés"'); // "Avantages des groupes capturant nommés"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des groupes et des rétro-références](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Groupe capturant&nbsp;: `(...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Groupe capturant nommé&nbsp;: `(?<name>...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Rétro-référence&nbsp;: `\1`, `\2`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
