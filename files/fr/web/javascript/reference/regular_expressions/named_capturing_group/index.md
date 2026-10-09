---
title: "Groupe capturant nommé : (?<name>...)"
slug: Web/JavaScript/Reference/Regular_expressions/Named_capturing_group
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Un **groupe capturant nommé** (<i lang="en">named capturing group</i> en anglais) est un type particulier de [groupe capturant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) qui vous permet de donner un nom au groupe. Le résultat de la correspondance du groupe peut ensuite être identifié par ce nom plutôt que par son index dans le motif.

## Syntaxe

```regex
(?<name>pattern)
```

### Paramètres

- `pattern`
  - : Un motif constitué de tout ce que vous pouvez utiliser dans un littéral d'expression rationnelle, y compris une [disjonction](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).
- `name`
  - : Le nom du groupe. Doit être un [identifiant](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#identifiants) valide.

## Description

Les groupes capturant nommés peuvent être utilisés de la même manière que les groupes capturant — ils ont également leur index de correspondance dans le tableau de résultats, et ils peuvent être référencés par `\1`, `\2`, etc. La seule différence est qu'ils peuvent être _en plus_ référencés par leur nom. Les informations sur la correspondance du groupe capturant peuvent être accessibles avec&nbsp;:

- La propriété `groups` de la valeur retournée par {{JSxRef("RegExp.prototype.exec()")}}, {{JSxRef("String.prototype.match()")}} et {{JSxRef("String.prototype.matchAll()")}}
- Le paramètre `groups` de la fonction de rappel `replacement` des méthodes {{JSxRef("String.prototype.replace()")}} et {{JSxRef("String.prototype.replaceAll()")}}
- Les [rétro-références nommées](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) dans le même motif

Tous les noms doivent être uniques dans un même motif. Plusieurs groupes capturant nommés portant le même nom provoquent une erreur de syntaxe.

```js-nolint example-bad
/(?<name>)(?<name>)/; // SyntaxError: Invalid regular expression: Duplicate capture group name
```

Cette restriction est assouplie si les groupes capturant nommés en double ne figurent pas dans la même [alternative de disjonction](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction), de sorte qu'un seul groupe capturant nommé puisse correspondre pour une même chaîne de caractères en entrée. Cette fonctionnalité est récente; vérifiez la [compatibilité des navigateurs](#compatibilité_des_navigateurs) avant de l'utiliser.

```js
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
// Fonctionne ; "year" peut apparaître avant ou après le trait d'union
```

Tous les groupes capturant nommés figurent dans le résultat. Si un groupe capturant nommé ne correspond pas (par exemple, s'il appartient à une alternative non correspondante dans une [disjonction](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), la propriété correspondante de l'objet `groups` vaut `undefined`.

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").groups; // [Object: null prototype] { ab: undefined, cd: 'cd' }
```

Vous pouvez obtenir les indices de début et de fin de chaque groupe capturant nommé dans la chaîne de caractères d'entrée à l'aide de l'indicateur [`d`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices). Vous pouvez les consulter dans la propriété `indices` du tableau retourné par `exec()`, ainsi que par leurs noms dans `indices.groups`.

Par rapport aux groupes capturant non nommés, les groupes capturant nommés présentent les avantages suivants&nbsp;:

- Ils vous permettent de donner un nom descriptif au résultat de chaque sous-correspondance.
- Ils vous permettent d'accéder aux résultats des sous-correspondances sans devoir mémoriser leur ordre dans le motif.
- Lors de la re-factorisation du code, vous pouvez modifier l'ordre des groupes de capture sans risquer de casser d'autres références.

## Exemples

### Utiliser les groupes capturant nommés

L'exemple suivant extrait un horodatage et le nom d'un auteur·ice d'une entrée de journal Git (produite avec `git log --format=%ct,%an -- filename`)&nbsp;:

```js
function analyserJournaux(entree) {
  const { auteur, chronologie } = /^(?<chronologie>\d+),(?<auteur>.+)$/.exec(
    entree,
  ).groups;
  return `${auteur} committed on ${new Date(
    parseInt(chronologie, 10) * 1000,
  ).toLocaleString()}`;
}

analyserJournaux("1560979912,Caroline"); // "Caroline committed on 6/19/2019, 5:31:52 PM"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation des groupes capturant nommés dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- Le guide [des groupes et rétro-références](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Groupe capturant&nbsp;: `(...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Groupe non capturant&nbsp;: `(?:...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Rétro-référence nommée&nbsp;: `\k<name>`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Règle d'ESLint&nbsp;: `prefer-named-capture-group` <sup>(angl.)</sup>](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
