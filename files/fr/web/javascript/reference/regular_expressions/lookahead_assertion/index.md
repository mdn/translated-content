---
title: "Assertion anticipée : (?=...), (?!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Une **assertion anticipée** ou «&nbsp;regard en avant&nbsp;» (<i lang="en">lookahead assertion</i> en anglais)&nbsp;: elle tente de faire correspondre l'entrée suivante avec le motif donné, mais elle ne consomme aucune partie de l'entrée — si la correspondance réussit, la position actuelle dans l'entrée reste la même.

## Syntaxe

```regex
(?=pattern)
(?!pattern)
```

### Paramètres

- `pattern`
  - : Un motif constitué de tout ce que vous pouvez utiliser dans un littéral d'expression rationnelle, y compris une [disjonction](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Description

Une expression rationnelle correspond généralement de gauche à droite. C'est pourquoi les assertions anticipées et de [précédences](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) sont appelées ainsi — l'assertion anticipée vérifie ce qui se trouve à droite, et l'assertion de précédence vérifie ce qui se trouve à gauche.

Pour qu'une assertion `(?=pattern)` réussisse, le `pattern` doit correspondre au texte après la position actuelle, mais la position actuelle ne change pas. La forme `(?!pattern)` nie l'assertion — elle réussit si le `pattern` ne correspond pas à la position actuelle.

Le `pattern` peut contenir des [groupes capturant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group). Consultez la page sur les groupes capturant pour plus d'informations sur le comportement dans ce cas.

Contrairement à d'autres opérateurs d'expression rationnelle, il n'y a pas de retour en arrière dans une assertion anticipée — ce comportement est hérité de Perl. Cela n'a d'importance que lorsque le `pattern` contient des [groupes capturant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) et que le motif suivant l'assertion anticipée contient des [rétro-références](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) à ces captures. Par exemple&nbsp;:

```js
/(?=(a+))a*b\1/.exec("baabac"); // ['aba', 'a']
// Pas ['aaba', 'a']
```

La correspondance du motif ci-dessus se déroule comme suit&nbsp;:

1. L'assertion anticipée `(a+)` réussit avant le premier `"a"` dans `"baabac"`, et `"aa"` est capturé parce que le quantificateur est gourmand.
2. `a*b` correspond à `"aab"` dans `"baabac"` parce que les assertions anticipées ne consomment pas les chaînes de caractères qu'elles correspondent.
3. `\1` ne correspond pas à la chaîne de caractères suivante, car cela nécessite 2 `"a"`, mais il n'y en a qu'un de disponible. Le moteur de correspondance revient donc en arrière, mais il n'entre pas dans l'assertion anticipée, donc le groupe capturant ne peut pas être réduit à 1 `"a"`, et la correspondance entière échoue à ce stade.
4. `exec()` tente à nouveau de correspondre à la position suivante — avant le deuxième `"a"`. Cette fois, l'assertion anticipée correspond à `"a"`, et `a*b` correspond à `"ab"`. La rétro-référence `\1` correspond au `"a"` capturé, et la correspondance réussit.

Si l'expression rationnelle est capable de revenir en arrière dans l'assertion anticipée et de réviser le choix fait à cet endroit, alors la correspondance réussit à l'étape 3 avec `(a+)` correspondant au premier `"a"` (au lieu des deux premiers `"a"`) et `a*b` correspondant à `"aab"`, sans même réessayer la position d'entrée suivante.

Les assertions anticipées négatives peuvent également contenir des groupes capturant, mais les rétro-références n'ont de sens que dans le `pattern`, car si la correspondance continue, le `pattern` est nécessairement non correspondant (sinon l'assertion échoue). Cela signifie qu'en dehors du `pattern`, les rétro-références à ces groupes capturant dans les assertions anticipées négatives réussissent toujours. Par exemple:

```js
/(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac"); // ['baaabaac', 'ba', undefined, 'abaac']
```

La correspondance du motif ci-dessus se déroule comme suit&nbsp;:

1. Le motif `(.*?)` est non gourmand et commence donc par ne rien faire correspondre. Toutefois, le caractère suivant est `a`, qui ne correspond pas à `"b"` dans l'entrée.
2. Le motif `(.*?)` correspond à `"b"`, de sorte que le `a` du motif correspond au premier `"a"` de `"baaabaac"`.
3. À cette position, l'assertion anticipée correspond, car si `(a+)` correspond à `"aa"`, alors `(a+)b\2c` correspond à `"aabaac"`. Cela fait échouer l'assertion, et le moteur revient à une branche précédente.
4. Le motif `(.*?)` correspond à `"ba"`, de sorte que le `a` du motif correspond au deuxième `"a"` de `"baaabaac"`.
5. À cette position, l'assertion anticipée ne correspond pas, car le reste de l'entrée ne suit pas le motif «&nbsp;un nombre quelconque de `"a"`, un `"b"`, le même nombre de `"a"`, puis un `c`&nbsp;». Cela fait réussir l'assertion.
6. Toutefois, comme rien ne correspond dans l'assertion, la rétro-référence `\2` n'a aucune valeur et correspond donc à la chaîne de caractères vide. Le `(.*)` final consomme alors le reste de l'entrée.

Normalement, les assertions ne peuvent pas être [quantifiées](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier). Toutefois, en [mode insensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), les assertions anticipées peuvent être quantifiées. Il s'agit d'une [syntaxe obsolète pour la compatibilité du Web](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), et vous ne devez pas vous y fier.

```js
/(?=a)?b/.test("b"); // true; l'assertion anticipée correspond 0 fois
```

## Exemples

### Faire correspondre des chaînes de caractères sans les consommer

Parfois, il est utile de vérifier qu'une chaîne de caractères correspondante est suivie d'un élément sans inclure celui-ci dans le résultat. L'exemple suivant correspond à une chaîne de caractères suivie d'une virgule ou d'un point, mais la ponctuation n'est pas incluse dans le résultat&nbsp;:

```js
function obtenirPremiereSousPhrase(str) {
  return /^.*?(?=[,.])/.exec(str)?.[0];
}

obtenirPremiereSousPhrase("Bonjour, le monde !"); // "Bonjour"
obtenirPremiereSousPhrase("Merci."); // "Merci"
```

Vous pouvez obtenir un effet similaire en [capturant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) la sous-correspondance souhaitée.

### Soustraire et intersecter des motifs

À l'aide d'une assertion anticipée, vous pouvez faire correspondre une chaîne de caractères plusieurs fois avec différents motifs, ce qui permet d'exprimer des relations complexes comme la soustraction (X mais pas Y) et l'intersection (X et Y).

L'exemple suivant correspond à tout [identifiant](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#identifiants) qui n'est pas un [mot réservé](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#mots-clés_réservés_selon_ecmascript_2015) (seuls trois mots réservés sont présentés ici pour rester concis&nbsp;; d'autres mots réservés peuvent être ajoutés à cette disjonction). La syntaxe `[$_\p{ID_Start}][$\p{ID_Continue}]*` décrit exactement l'ensemble des chaînes de caractères utilisables comme identifiants dans la spécification du langage&nbsp;; vous pouvez en savoir plus sur les identifiants dans la [grammaire lexicale](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#identifiants) et sur l'échappement `\p` dans les [classes de caractères Unicode échappées](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape).

```js
function estNomIdentifiantValide(str) {
  const re = /^(?!(?:break|case|catch)$)[$_\p{ID_Start}][$\p{ID_Continue}]*$/u;
  return re.test(str);
}

estNomIdentifiantValide("break"); // false
estNomIdentifiantValide("toto"); // true
estNomIdentifiantValide("cases"); // true
```

L'exemple suivant correspond à une chaîne de caractères ASCII qui peut également être utilisée comme partie d'un identifiant&nbsp;:

```js
function estPartieIdentifiantASCII(caractere) {
  return /^(?=\p{ASCII}$)\p{ID_Start}$/u.test(caractere);
}

estPartieIdentifiantASCII("a"); // true
estPartieIdentifiantASCII("α"); // false
estPartieIdentifiantASCII(":"); // false
```

Si vous effectuez l'intersection et la soustraction sur un ensemble fini de caractères, vous pouvez utiliser la syntaxe [d'intersection d'ensembles de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#classe_de_caractères_du_mode_v) activée par l'indicateur `v`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des assertions](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Assertion de limite d'entrée&nbsp;: `^`, `$`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Assertion de limite de mot&nbsp;: `\b`, `\B`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Assertion de précédence&nbsp;: `(?<=...)`, `(?<!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Groupe capturant&nbsp;: `(...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
