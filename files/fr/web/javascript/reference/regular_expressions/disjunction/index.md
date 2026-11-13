---
title: "Disjonction : |"
slug: Web/JavaScript/Reference/Regular_expressions/Disjunction
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Une **disjonction** (<i lang="en">disjunction</i> en anglais) définit plusieurs alternatives. Toute alternative correspondant à l'entrée entraîne la correspondance de l'ensemble de la disjonction.

## Syntaxe

```regex
alternative1|alternative2
alternative1|alternative2|alternative3|…
```

### Paramètres

- `alternativeN`
  - : Un motif alternatif, composé d'une séquence de [atomes et d'assertions](/fr/docs/Web/JavaScript/Reference/Regular_expressions#assertions). La correspondance réussie d'une alternative entraîne la correspondance de l'ensemble de la disjonction.

## Description

L'opérateur `|` des expressions rationnelles sépare deux ou plusieurs _alternatives_. Le motif essaie d'abord de faire correspondre la première alternative&nbsp;; si cela échoue, il essaie de faire correspondre la deuxième, et ainsi de suite. Par exemple, ce qui suit correspond à `"a"` au lieu de `"ab"`, car la première alternative correspond déjà avec succès&nbsp;:

```js
/a|ab/.exec("abc"); // ['a']
```

L'opérateur `|` a la plus basse priorité dans une expression rationnelle. Si vous souhaitez utiliser une disjonction comme partie d'un motif plus grand, vous devez la [grouper](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group).

Lorsqu'une disjonction groupée a d'autres expressions après elle, la correspondance commence par la sélection de la première alternative et la tentative de correspondre au reste de l'expression rationnelle. Si le reste de l'expression rationnelle ne correspond pas, le moteur essaie plutôt l'alternative suivante. Par exemple,

```js
/(?:(a)|(ab))(?:(c)|(bc))/.exec("abc"); // ['abc', 'a', undefined, undefined, 'bc']
// Pas ['abc', undefined, 'ab', 'c', undefined]
```

Cela s'explique par le fait qu'en choisissant `a` dans la première alternative, vous pouvez choisir `bc` dans la deuxième alternative et obtenir une correspondance réussie. Ce processus s'appelle le _retour sur trace_, car le moteur dépasse d'abord la disjonction puis y revient lorsque la correspondance suivante échoue.

Notez aussi que toutes les parenthèses de capture à l'intérieur d'une alternative qui ne correspond pas produisent `undefined` dans le tableau obtenu.

Une alternative peut être vide, auquel cas elle correspond à une séquence vide (autrement dit, elle correspond toujours).

Les alternatives sont toujours essayées de gauche à droite, quelle que soit la direction de la correspondance (qui s'inverse dans une [précédence](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)).

## Exemples

### Faire correspondre les extensions de fichiers

L'exemple suivant correspond aux extensions de fichiers et utilise le même code que l'article sur les [assertions de limite d'entrée](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#faire_correspondre_les_extensions_de_fichiers)&nbsp;:

```js
function estUneImage(nomFichier) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(nomFichier);
}

estUneImage("image.png"); // true
estUneImage("image.jpg"); // true
estUneImage("image.pdf"); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Quantificateur&nbsp;: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [Classe de caractères&nbsp;: `[...]`, `[^...]`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
