---
title: "Assertion de précédence : (?<=...), (?<!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Une **assertion de précédence** «&nbsp;regard en arrière&nbsp;» (<i lang="en">lookbehind assertion</i> en anglais)&nbsp;: elle tente de faire correspondre l'entrée précédente avec le modèle donné, mais elle ne consomme aucune partie de l'entrée — si la correspondance réussit, la position actuelle dans l'entrée reste la même. Elle fait correspondre chaque atome de son modèle dans l'ordre inverse.

## Syntaxe

```regex
(?<=pattern)
(?<!pattern)
```

### Paramètres

- `pattern`
  - : Un motif constitué de tout ce que vous pouvez utiliser dans un littéral d'expression rationnelle, y compris une [disjonction](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Description

Une expression rationnelle correspond généralement de gauche à droite. C'est pourquoi les assertions [anticipées](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) et de précédence sont appelées ainsi — l'anticipation vérifie ce qui se trouve à droite, et la précédence vérifie ce qui se trouve à gauche.

Pour qu'une assertion `(?<=pattern)` réussisse, le `pattern` doit correspondre à l'entrée immédiatement à gauche de la position actuelle, mais la position actuelle n'est pas modifiée avant de faire correspondre l'entrée suivante. La forme `(?<!pattern)` nie l'assertion — elle réussit si le `pattern` ne correspond pas à l'entrée immédiatement à gauche de la position actuelle.

La précédence a généralement la même sémantique que l'anticipation — cependant, dans une assertion de précédence, l'expression rationnelle correspond _en arrière_. Par exemple,

```js
/(?<=([ab]+)([bc]+))$/.exec("abc"); // ['', 'a', 'bc']
// Pas ['', 'ab', 'c']
```

Si la précédence correspond de gauche à droite, elle doit d'abord correspondre avidement à `[ab]+`, ce qui fait que le premier groupe capture `"ab"`, et le reste `"c"` est capturé par `[bc]+`. Cependant, comme `[bc]+` est d'abord mis en correspondance, il saisit avidement `"bc"`, ne laissant que `"a"` pour `[ab]+`.

Ce comportement est logique — le moteur de correspondance ne sait pas où _commencer_ la correspondance (car la précédence peut ne pas avoir une longueur fixe), mais il sait où _terminer_ (à la position actuelle). Par conséquent, il commence à partir de la position actuelle et travaille en arrière. (Les expressions rationnelles dans certains autres langages interdisent la précédence de longueur non fixe pour éviter ce problème.)

Pour les [groupes capturant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) [quantifiés](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) à l'intérieur de la précédence, la correspondance la plus à gauche de la chaîne de caractères d'entrée — au lieu de celle à droite — est capturée en raison de la correspondance en arrière. Voir la page des groupes capturant pour plus d'informations. Les [rétro-références](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) à l'intérieur de la précédence doivent apparaître sur la _gauche_ du groupe auquel elles se réfèrent, également en raison de la correspondance en arrière. Cependant, les [disjonctions](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) sont toujours tentées de gauche à droite.

## Exemples

### Faire correspondre des chaînes de caractères sans les consommer

De manière similaire aux [assertions anticipées](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#faire_correspondre_des_chaînes_de_caractères_sans_les_consommer), les assertions de précédence peuvent être utilisées pour faire correspondre des chaînes de caractères sans les consommer, de sorte que seules les informations utiles soient extraites. Par exemple, l'expression rationnelle suivante correspond au nombre dans une étiquette de prix&nbsp;:

```js
function obtenirPrix(etiquette) {
  return /(?<=\$)\d+(?:\.\d*)?/.exec(etiquette)?.[0];
}

obtenirPrix("$10.53"); // "10.53"
obtenirPrix("10.53"); // undefined
```

Un effet similaire peut être obtenu en [capturant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) la sous-correspondance qui vous intéresse.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des assertions](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Assertion de limite d'entrée&nbsp;: `^`, `$`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Assertion de limite de mot&nbsp;: `\b`, `\B`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Assertion anticipée&nbsp;: `(?=...)`, `(?!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Groupe capturant&nbsp;: `(...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
