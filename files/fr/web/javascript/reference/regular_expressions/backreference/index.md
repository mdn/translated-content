---
title: "Rétro-référence : \\1, \\2"
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Une **rétro-référence** (<i lang="en">backreference</i> en anglais) fait référence à la sous-correspondance d'un [groupe capturant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) précédent et correspond au même texte que ce groupe. Pour les [groupes capturant nommés](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group), vous pouvez préférer utiliser la syntaxe de [rétro-référence nommée](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference).

## Syntaxe

```regex
\N
```

> [!NOTE]
> `N` n'est pas un caractère littéral.

### Paramètres

- `N`
  - : Un entier positif faisant référence au numéro d'un groupe capturant.

## Description

Une rétro-référence permet de faire correspondre le même texte que celui précédemment reconnu par un groupe capturant. La numérotation des groupes commence à 1, donc le résultat du premier groupe capturant peut être référencé avec `\1`, celui du deuxième avec `\2`, et ainsi de suite. `\0` est une [séquence d'échappement de caractère](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) pour le caractère nul.

Lors d'une correspondance [insensible à la casse](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), la rétro-référence peut correspondre à un texte dont la casse diffère de celle du texte d'origine.

```js
/(b)\1/i.test("bB"); // true
```

La rétro-référence doit faire référence à un groupe capturant existant. Si le nombre qu'elle définit est supérieur au nombre total de groupes de capture, une erreur de syntaxe est levée.

```js-nolint example-bad
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

En [mode non sensible à Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), les rétro-références invalides deviennent des [séquences d'échappement octales historiques](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#séquences_déchappements). Il s'agit d'une [syntaxe obsolète pour la compatibilité du Web](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), et vous ne devez pas vous y fier.

```js
/(a)\2/.test("a\x02"); // true
```

Si le groupe capturant référencé ne correspond pas (par exemple, parce qu'il appartient à une alternative qui ne correspond pas dans une [alternance](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), ou si le groupe n'a pas encore correspondu (par exemple, parce qu'il se trouve à droite de la rétro-référence), la rétro-référence réussit toujours (comme si elle correspond à la chaîne de caractères vide).

```js
/(?:a|(b))\1c/.test("ac"); // true
/\1(a)/.test("a"); // true
```

## Examples

### Associer des guillemets

La fonction suivante correspond aux motifs `title='xxx'` et `title="xxx"` dans une chaîne de caractères. Pour garantir que les guillemets correspondent, nous utilisons une rétro-référence pour faire référence au premier guillemet. L'accès au deuxième groupe capturant (`[2]`) retourne la chaîne de caractères entre les guillemets correspondants&nbsp;:

```js
function analyserTitre(chaineDeCaracteresMeta) {
  return chaineDeCaracteresMeta.match(/title=(["'])(.*?)\1/)[2];
}

analyserTitre('title="toto"'); // 'toto'
analyserTitre("title='toto' lang='en'"); // 'toto'
analyserTitre('title="Avantages des groupes capturant nommés"'); // "Avantages des groupes capturant nommés"
```

### Repérer les mots répétés

La fonction suivante trouve les mots répétés dans une chaîne de caractères (qui sont généralement des fautes de frappe). Notez qu'elle utilise la [séquence d'échappement de classe de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) `\w`, qui correspond uniquement aux lettres de l'alphabet anglais, mais à aucune lettre accentuée ni à aucun autre alphabet. Pour une correspondance plus générique, vous pouvez [diviser](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split) la chaîne de caractères à l'aide des espaces et parcourir le tableau obtenu.

```js
function trouverDoublons(text) {
  return text.match(/\b(\w+)\s+\1\b/i)?.[1];
}

trouverDoublons("toto toto bar"); // 'toto'
trouverDoublons("toto bar toto"); // undefined
trouverDoublons("Bonjour bonjour"); // 'Bonjour'
trouverDoublons("Bonjour bonjours"); // undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des groupes et rétro-références](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Les expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Groupe capturant&nbsp;: `(...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Groupe capturant nommé&nbsp;: `(?<name>...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Rétro-référence nommée&nbsp;: `\k<name>`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
