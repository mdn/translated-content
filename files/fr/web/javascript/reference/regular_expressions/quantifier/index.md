---
title: "Quantificateur : *, +, ?, {n}, {n,}, {n,m}"
slug: Web/JavaScript/Reference/Regular_expressions/Quantifier
l10n:
  sourceCommit: 0f6daa30cf89c66d37700c51b8a12e660fee29d9
---

Un **quantificateur** (<i lang="en">quantifier</i> en anglais) répète un [atome](/fr/docs/Web/JavaScript/Reference/Regular_expressions#atomes) un certain nombre de fois. Le quantificateur est placé après l'atome auquel il s'applique.

## Syntaxe

```regex
// Gourmand
atom?
atom*
atom+
atom{count}
atom{min,}
atom{min,max}

// Non-gourmand
atom??
atom*?
atom+?
atom{count}?
atom{min,}?
atom{min,max}?
```

> [!NOTE]
> Ajouter `?` après `{count}` est syntaxiquement valide mais pratiquement inutile. Comme `{count}` correspond toujours exactement `count` fois, `atom{count}?` se comporte de la même manière que `atom{count}`.

### Paramètres

- `atom`
  - : Un seul [atome](/fr/docs/Web/JavaScript/Reference/Regular_expressions#atomes).
- `count`
  - : Un entier positif ou nul. Le nombre de fois que l'atome doit être répété.
- `min`
  - : Un entier positif ou nul. Le nombre minimum de fois que l'atome peut être répété.
- `max` {{Optional_Inline}}
  - : Un entier positif ou nul. Le nombre maximum de fois que l'atome peut être répété. S'il est omis, l'atome peut être répété autant de fois que nécessaire.

## Description

Un quantificateur est placé après un [atome](/fr/docs/Web/JavaScript/Reference/Regular_expressions#atomes) pour le répéter un certain nombre de fois. Il ne peut pas apparaître seul. Chaque quantificateur peut définir un nombre minimum et maximum de fois qu'un motif doit être répété.

| Quantificateur | Minimum | Maximum |
| -------------- | ------- | ------- |
| `?`            | 0       | 1       |
| `*`            | 0       | Infini  |
| `+`            | 1       | Infini  |
| `{count}`      | `count` | `count` |
| `{min,}`       | `min`   | Infini  |
| `{min,max}`    | `min`   | `max`   |

Pour les syntaxes `{count}`, `{min,}` et `{min,max}`, il ne peut pas y avoir d'espaces autour des nombres — sinon, cela devient un motif [littéral](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character).

```js example-bad
const re = /a{1, 3}/;
re.test("aa"); // false
re.test("a{1, 3}"); // true
```

Ce comportement est corrigé en [mode sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), où les accolades ne peuvent pas apparaître littéralement sans [échappement](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape). La possibilité d'utiliser `{` et `}` littéralement sans les échapper est une [syntaxe obsolète pour la compatibilité du Web](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), et vous ne devez pas vous y fier.

```js-nolint example-bad
/a{1, 3}/u; // SyntaxError: Invalid regular expression: Incomplete quantifier
```

Une erreur de syntaxe se produit si le minimum est supérieur au maximum.

```js-nolint example-bad
/a{3,2}/; // SyntaxError: Invalid regular expression: numbers out of order in {} quantifier
```

Les quantificateurs peuvent faire correspondre plusieurs fois les [groupes capturant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group). Consultez la page sur les groupes de capture pour en savoir plus sur leur comportement dans ce cas.

Chaque correspondance répétée ne doit pas nécessairement être la même chaîne de caractères.

```js
/[ab]*/.exec("aba"); // ['aba']
```

Par défaut, les quantificateurs sont _gourmands_, c'est-à-dire qu'ils tentent de correspondre autant de fois que possible jusqu'à atteindre le maximum ou jusqu'à ce qu'aucune autre correspondance ne soit possible. Vous pouvez rendre un quantificateur _non gourmand_ en ajoutant `?` après celui-ci. Dans ce cas, le quantificateur tente de correspondre le moins de fois possible et ne correspond davantage que s'il est impossible de faire correspondre le reste du motif avec ce nombre de répétitions.

```js
/a*/.exec("aaa"); // ['aaa']; toute l'entrée est consommée
/a*?/.exec("aaa"); // ['']; il est possible de ne consommer aucun caractère tout en réussissant la correspondance
/^a*?$/.exec("aaa"); // ['aaa']; il est impossible de consommer moins de caractères tout en réussissant la correspondance
```

Cependant, dès que l'expression rationnelle correspond à la chaîne de caractères à un indice, elle n'essaie pas les indices suivants, même si cela peut consommer moins de caractères.

```js
/a*?$/.exec("aaa"); // ['aaa']; la correspondance réussit déjà au premier caractère, donc l'expression rationnelle ne tente jamais de commencer la correspondance au deuxième caractère
```

Les quantificateurs gourmands peuvent essayer moins de répétitions s'il est autrement impossible de faire correspondre le reste du motif.

```js
/[ab]+[abc]c/.exec("abbc"); // ['abbc']
```

Dans cet exemple, `[ab]+` correspond d'abord de manière avide à `"abb"`, mais `[abc]c` ne peut pas correspondre au reste du motif (`"c"`), donc le quantificateur est réduit pour ne correspondre qu'à `"ab"`.

Les quantificateurs gourmands évitent de faire correspondre une infinité de chaînes de caractères vides. Si le nombre minimum de correspondances est atteint et que l'atome ne consomme plus de caractères à cette position, le quantificateur cesse de correspondre. C'est pourquoi `/(a*)*/.exec("b")` ne provoque pas de boucle infinie.

Les quantificateurs gourmands tentent de correspondre autant de _fois_ que possible&nbsp;; ils ne maximisent pas la _longueur_ de la correspondance. Par exemple, `/(aa|aabaac|ba)*/.exec("aabaac")` correspond à `"aa"` puis à `"ba"` au lieu de `"aabaac"`.

Les quantificateurs s'appliquent à un seul atome. Si vous souhaitez quantifier un motif plus long ou une disjonction, vous devez le [grouper](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group). Les quantificateurs ne peuvent pas s'appliquer aux [assertions](/fr/docs/Web/JavaScript/Reference/Regular_expressions#assertions).

```js-nolint example-bad
/^*/; // SyntaxError: Invalid regular expression: nothing to repeat
```

En [mode sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), les [assertions anticipées](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) peuvent être quantifiées. Il s'agit d'une [syntaxe obsolète pour la compatibilité du Web](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), et vous ne devez pas vous y fier.

```js
/(?=a)?b/.test("b"); // true ; l'assertion anticipée correspond 0 fois
```

## Exemples

### Supprimer les balises HTML

L'exemple suivant supprime les balises HTML encadrées par des chevrons. Notez l'utilisation de `?` pour éviter de consommer trop de caractères à la fois.

```js
function retirerBalises(str) {
  return str.replace(/<.+?>/g, "");
}

retirerBalises("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

Vous pouvez obtenir le même résultat avec une correspondance gourmande, sans permettre au motif répété de correspondre à `>`.

```js
function retirerBalises(str) {
  return str.replace(/<[^>]+>/g, "");
}

retirerBalises("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

> [!WARNING]
> Ceci est uniquement à des fins de démonstration — cela ne gère pas `>` dans les valeurs des attributs. Utilisez un assainisseur HTML approprié comme [l'API HTML Sanitizer](/fr/docs/Web/API/HTML_Sanitizer_API) à la place.

### Repérer les paragraphes Markdown

En Markdown, les paragraphes sont séparés par une ou plusieurs lignes vides. L'exemple suivant compte tous les paragraphes d'une chaîne de caractères en faisant correspondre au moins deux sauts de ligne.

```js
function compterParagraphes(str) {
  return str.match(/(?:\r?\n){2,}/g).length + 1;
}

compterParagraphes(`
Paragraphe 1

Paragraphe 2
Contient quelques sauts de ligne, mais reste le même paragraphe

Un autre paragraphe
`); // 3
```

> [!WARNING]
> Cet exemple sert uniquement à la démonstration — il ne gère pas les sauts de ligne dans les blocs de code ni dans les autres éléments de bloc Markdown comme les titres. Utilisez plutôt un analyseur Markdown approprié.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des quantificateurs](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Disjonction&nbsp;: `|`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Classe de caractères&nbsp;: `[...]`, `[^...]`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
