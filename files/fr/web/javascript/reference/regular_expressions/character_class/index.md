---
title: "Classe de caractères : [...], [^...]"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class
l10n:
  sourceCommit: 3bc2e3f837716049da9382fa8459c2ceccdf8950
---

Une **classe de caractères** (<i lang="en">character class</i> en anglais) correspond à n'importe quel caractère dans ou en dehors d'un ensemble personnalisé de caractères. Lorsque l'indicateur [`v`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) est activé, il peut également être utilisé pour correspondre à des chaînes de caractères de longueur finie.

## Syntaxe

```regex
[]
[abc]
[A-Z]

[^]
[^abc]
[^A-Z]

// mode `v` seulement
[operand1&&operand2]
[operand1--operand2]
[\q{substring}]
```

### Paramètres

- `operand1`, `operand2`
  - : Peut être un seul caractère, une autre classe de caractères entre crochets, une [échappée de classe de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), une [échappée de classe de caractères Unicode](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape), ou une chaîne de caractères utilisant la syntaxe `\q`.
- `substring`
  - : Une chaîne de caractères littérale.

## Description

Une classe de caractères définit une liste de caractères entre crochets et correspond à n'importe quel caractère de la liste. L'indicateur [`v`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) modifie profondément l'analyse et l'interprétation des classes de caractères. Les syntaxes suivantes sont disponibles en mode `v` comme hors du mode `v`&nbsp;:

- Un seul caractère&nbsp;: correspond au caractère lui-même.
- Une plage de caractères&nbsp;: correspond à n'importe quel caractère compris dans la plage indiquée. La plage est définie par deux caractères séparés par un tiret (`-`). La valeur du premier caractère doit être inférieure à celle du second. La _valeur du caractère_ correspond au point de code Unicode du caractère. Les points de code Unicode étant généralement attribués aux alphabets par ordre alphabétique, `[a-z]` définit tous les caractères latins minuscules, tandis que `[α-ω]` définit tous les caractères grecs minuscules. En [mode insensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), les expressions rationnelles sont interprétées comme une suite de caractères BMP. Par conséquent, les paires de substituts dans les classes de caractères représentent deux caractères au lieu d'un&nbsp;; voir ci-dessous pour plus de détails.
- Séquences d'échappement&nbsp;: `\b`, `\-`, [séquences d'échappement de classe de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), [séquences d'échappement de classe de caractères Unicode](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape), et autres [séquences d'échappement de caractère](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

Ces syntaxes peuvent apparaître autant de fois que nécessaire, et les ensembles de caractères qu'elles représentent sont réunis. Par exemple, `/[a-zA-Z0-9]/` correspond à toute lettre ou tout chiffre.

Le préfixe `^` dans une classe de caractères crée une _classe complémentaire_. Par exemple, `[^abc]` correspond à tout caractère sauf `a`, `b`, ou `c`. Le caractère `^` est un caractère littéral lorsqu'il apparaît au milieu d'une classe de caractères — par exemple, `[a^b]` correspond aux caractères `a`, `^`, et `b`.

La [grammaire lexicale](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#littéraux_dexpressions_rationnelles) analyse les littéraux d'expression rationnelle de façon très approximative, de sorte qu'elle ne termine pas le littéral d'expression rationnelle au caractère `/` qui apparaît dans une classe de caractères. Cela signifie que `/[/]/` est valide sans avoir à échapper `/`.

Les limites d'un intervalle de caractères ne doivent pas définir plus d'un caractère, ce qui se produit si vous utilisez un [échappement de classe de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape). Par exemple&nbsp;:

```js-nolint example-bad
/[\s-9]/u; // SyntaxError: Invalid regular expression: Invalid character class
```

En [mode insensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), les plages de caractères dont une limite est une classe de caractères rendent `-` littéral. Il s'agit d'une [syntaxe obsolète pour la compatibilité du Web](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), et vous ne devez pas vous y fier.

```js
/[\s-9]/.test("-"); // true
```

En [mode insensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), les expressions rationnelles sont interprétées comme une suite de caractères BMP. Par conséquent, les paires de substituts dans les classes de caractères représentent deux caractères au lieu d'un.

```js
/[😄]/.test("\ud83d"); // true
/[😄]/u.test("\ud83d"); // false

/[😄-😛]/.test("😑"); // SyntaxError: Invalid regular expression: /[😄-😛]/: Range out of order in character class
/[😄-😛]/u.test("😑"); // true
```

Même si le motif [ignore la casse](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), la casse des deux extrémités d'une plage est importante pour déterminer quels caractères appartiennent à la plage. Par exemple, le motif `/[E-F]/i` correspond uniquement à `E`, `F`, `e`, et `f`, tandis que le motif `/[E-f]/i` correspond à toutes les lettres {{Glossary("ASCII")}} majuscules et minuscules (car il s'étend sur `E-Z` et `a-f`), ainsi qu'à `[`, `\`, `]`, `^`, `_`, et `` ` ``.

### Classe de caractères hors du mode `v`

Les classes de caractères hors du mode `v` interprètent la plupart des caractères [littéralement](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) et imposent moins de restrictions sur les caractères qu'elles peuvent contenir. Par exemple, `.` est le caractère point littéral, et non le [joker](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). Les seuls caractères qui ne peuvent pas apparaître littéralement sont `\`, `]`, et `-`.

- Dans les classes de caractères, la plupart des séquences d'échappement sont prises en charge, à l'exception de `\b`, `\B`, et des [rétro-références](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference). `\b` indique un caractère de retour arrière au lieu d'une [limite de mot](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion), tandis que les deux autres provoquent des erreurs de syntaxe. Pour utiliser `\` littéralement, échappez-le avec `\\`.
- Le caractère `]` indique la fin de la classe de caractères. Pour l'utiliser littéralement, échappez-le avec `\]`.
- Le caractère tiret (`-`), lorsqu'il est utilisé entre deux caractères, indique une plage. Lorsqu'il apparaît au début ou à la fin d'une classe de caractères, c'est un caractère littéral. C'est également un caractère littéral lorsqu'il est utilisé comme limite d'une plage. Par exemple, `[a-]` correspond aux caractères `a` et `-`, `[!--]` correspond aux caractères `!` à `-`, et `[--9]` correspond aux caractères `-` à `9`. Vous pouvez aussi l'échapper avec `\-` si vous voulez l'utiliser littéralement n'importe où.

### Classe de caractères du mode `v`

L'idée de départ des classes de caractères en mode `v` reste la même&nbsp;: vous pouvez toujours utiliser la plupart des caractères tels quels, utiliser `-` pour désigner des plages de caractères et recourir à des séquences d'échappement. L'une des fonctionnalités les plus importantes du drapeau `v` est la _notation ensembliste_ au sein des classes de caractères. Comme mentionné précédemment, les classes de caractères normales peuvent exprimer des unions en concaténant deux plages, par exemple en utilisant `[A-Z0-9]` pour signifier «&nbsp;l'union de l'ensemble `[A-Z]` et de l'ensemble `[0-9]`&nbsp;». Cependant, il n'existe pas de moyen simple de représenter d'autres opérations sur les ensembles de caractères, telles que l'intersection et la différence.

Avec l'indicateur `v`, l'intersection s'exprime avec `&&`, et la soustraction avec `--`. L'absence des deux implique une union. Les deux opérandes de `&&` ou `--` peuvent être un caractère, une séquence d'échappement de caractère, une séquence d'échappement de classe de caractères, ou même une autre classe de caractères. Par exemple, pour exprimer «&nbsp;un caractère de mot qui n'est pas un trait de soulignement&nbsp;», vous pouvez utiliser `[\w--_]`. Vous ne pouvez pas mélanger les opérateurs au même niveau. Par exemple, `[\w&&[A-z]--_]` est une erreur de syntaxe. Toutefois, comme vous pouvez imbriquer des classes de caractères, vous pouvez l'exprimer explicitement en écrivant `[\w&&[[A-z]--_]]` ou `[[\w&&[A-z]]--_]` (qui signifient toutes deux `[A-Za-z]`). De même, `[AB--C]` n'est pas valide et vous devez écrire `[A[B--C]]` (qui signifie simplement `[AB]`).

En mode `v`, [l'échappement de classe de caractères Unicode](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) `\p` peut correspondre à des chaînes de caractères de longueur finie, telles que des emojis. Par souci de symétrie, les classes de caractères classiques peuvent également correspondre à plusieurs caractères. Pour écrire une «&nbsp;chaîne de caractères littérale&nbsp;» dans une classe de caractères, vous devez encadrer la chaîne de caractères avec `\q{...}`. La seule syntaxe d'expression rationnelle prise en charge ici est la [disjonction](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) — en dehors de cela, `\q` doit entièrement encadrer les littéraux (y compris les caractères échappés). Cela garantit que les classes de caractères ne peuvent correspondre qu'à des chaînes de caractères de longueur finie offrant un nombre fini de possibilités.

Contrairement à une disjonction ordinaire, l'ordre des alternatives dans `\q` n'a pas d'importance, pas plus que la position de l'échappement `\q` par rapport aux autres opérandes réunis. Lors de la correspondance, toutes les alternatives indiquées dans une classe de caractères sont toujours essayées par longueur décroissante, de sorte que la correspondance est avide. Par exemple, `[\q{a|ab}]`, `[\q{ab|a}]`, `[\q{ab}a]` et `[a\q{ab}]` appliqués à `"ab"` correspondent tous à `"ab"`.

Les classes de caractères complémentaires `[^...]` ne peuvent en aucun cas correspondre à des chaînes de caractères de plus d'un caractère. Par exemple, `[\q{ab|c}]` est valide et correspond à la chaîne de caractères `"ab"`, mais `[^\q{ab|c}]` n'est pas valide, car on ne sait pas exactement combien de caractères doivent être consommés. La vérification consiste à s'assurer que tous les `\q` contiennent des caractères uniques et que tous les `\p` définissent des propriétés de caractères — pour les unions, tous les opérandes doivent être composés exclusivement de caractères&nbsp;; pour les intersections, au moins un opérande doit être composé exclusivement de caractères&nbsp;; pour les soustractions, l'opérande le plus à gauche doit être composé exclusivement de caractères. La vérification est syntaxique et ne tient pas compte du jeu de caractères effectivement défini, ce qui signifie que bien que `/[^\q{ab|c}--\q{ab}]/v` soit équivalent à `/[^c]/v`, il est tout de même rejeté.

Comme la syntaxe des classes de caractères est maintenant plus sophistiquée, davantage de caractères sont réservés et ne peuvent pas apparaître littéralement.

- En plus de `]` et de `\`, les caractères suivants doivent être échappés dans les classes de caractères s'ils représentent des caractères littéraux&nbsp;: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Cette liste ressemble quelque peu à celle des [caractères syntaxiques](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character), sauf que `^`, `$`, `*`, `+`, et `?` ne sont pas réservés dans les classes de caractères, tandis que `/` et `-` ne sont pas réservés hors des classes de caractères (bien que `/` puisse délimiter un littéral d'expression rationnelle et doive donc toujours être échappé). Tous ces caractères peuvent aussi être facultativement échappés dans les classes de caractères en mode `u`.
- Les séquences de «&nbsp;doubles signes de ponctuation&nbsp;» suivantes doivent aussi être échappées (mais elles ont peu de sens sans l'indicateur `v`)&nbsp;: `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. En mode `u`, certains de ces caractères peuvent apparaître littéralement uniquement dans les classes de caractères et provoquent une erreur de syntaxe lorsqu'ils sont échappés. En mode `v`, ils doivent être échappés lorsqu'ils apparaissent par paires, mais peuvent être facultativement échappés lorsqu'ils apparaissent seuls. Par exemple, `/[\!]/u` n'est pas valide car il s'agit d'un [échappement d'identité](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), mais `/[\!]/v` et `/[!]/v` sont valides, tandis que `/[!!]/v` n'est pas valide. La référence du [caractère littéral](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) présente un tableau détaillé des caractères qui peuvent apparaître échappés ou non échappés.

### Classes complémentaires et correspondance insensible à la casse

[La correspondance insensible à la casse](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) fonctionne en appliquant un pliage de casse à l'ensemble de caractères attendu et à la chaîne de caractères comparée. Lors de la spécification des classes complémentaires, l'ordre dans lequel JavaScript applique le pliage de casse et le complément est important. En bref, `[^...]` en mode `u` correspond à `allCharacters - caseFold(original)`, tandis qu'en mode `v` il correspond à `caseFold(allCharacters) - caseFold(original)`. Cela garantit que toutes les syntaxes de classe complémentaire, y compris `[^...]`, `\P`, `\W`, etc., s'annulent mutuellement.

Considérez les deux expressions rationnelles suivantes (pour simplifier les choses, supposons que les caractères Unicode relèvent de trois catégories&nbsp;: minuscules, majuscules, et sans casse, et que chaque lettre majuscule a une unique minuscule correspondante, et inversement)&nbsp;:

```js
const r1 = /\p{Lowercase_Letter}/iu;
const r2 = /[^\P{Lowercase_Letter}]/iu;
```

`r2` est une double négation et semble équivalente à `r1`. Mais en fait, `r1` correspond à toutes les lettres ASCII minuscules et majuscules, tandis que `r2` ne correspond à aucune. Voici l'explication étape par étape&nbsp;:

- Dans `r1`, `\p{Lowercase_Letter}` construit un ensemble de toutes les minuscules. Les caractères de cet ensemble sont ensuite convertis en minuscules, et restent donc identiques. La chaîne de caractères d'entrée est également convertie en minuscules. Par conséquent, `"A"` et `"a"` sont tous deux convertis en `"a"` et correspondent à `r1`.
- Dans `r2`, `\P{Lowercase_Letter}` construit d'abord un ensemble de tous les caractères qui ne sont pas des minuscules, c'est-à-dire les lettres majuscules et les caractères sans casse. Les caractères de cet ensemble sont ensuite convertis en minuscules, de sorte que l'ensemble contient toutes les minuscules et les caractères sans casse. `[^...]` nie la correspondance, ce qui lui fait correspondre tout ce qui n'appartient _pas_ à cet ensemble, c'est-à-dire une lettre majuscule. Toutefois, l'entrée est toujours convertie en minuscules, donc `"A"` devient `"a"` et ne correspond pas à `r2`.

L'observation principale est qu'après que `[^...]` nie la correspondance, l'ensemble de caractères attendu peut ne pas être un sous-ensemble des caractères Unicode convertis selon leur casse, ce qui empêche l'entrée convertie de faire partie de l'ensemble attendu. En mode `v`, l'ensemble de tous les caractères est également converti selon la casse. La classe de caractères `\P` fonctionne aussi légèrement différemment en mode `v` (voir la [séquence d'échappement de classe de caractères Unicode](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)). Tout cela garantit que `[^^P{Lowercase_Letter}]` et `\p{Lowercase_Letter}` sont strictement équivalents.

## Exemples

### Faire correspondre les chiffres hexadécimaux

La fonction suivante détermine si une chaîne de caractères contient un nombre hexadécimal valide&nbsp;:

```js
function estHexadecimal(str) {
  return /^[0-9A-F]+$/i.test(str);
}

estHexadecimal("2F3"); // true
estHexadecimal("beef"); // true
estHexadecimal("undefined"); // false
```

### Utiliser l'intersection

La fonction suivante correspond aux lettres grecques.

```js
function lettresGrecs(str) {
  return str.match(/[\p{Script_Extensions=Greek}&&\p{Letter}]/gv);
}

// 𐆊 est le signe zéro grec U+1018A
lettresGrecs("π𐆊P0零αAΣ"); // [ 'π', 'α', 'Σ' ]
```

### Utiliser la soustraction

La fonction suivante correspond à tous les nombres non ASCII.

```js
function nombresNonASCII(str) {
  return str.match(/[\p{Decimal_Number}--\d]/gv);
}

// 𑜹 est le chiffre neuf Ahom U+11739
nombresNonASCII("𐆊0零1𝟜𑜹a"); // [ '𝟜', '𑜹' ]
```

### Faire correspondre des chaînes de caractères

La fonction suivante correspond à toutes les séquences de terminateur de ligne, y compris les [caractères terminateurs de ligne](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#terminateurs_de_ligne) et la séquence `\r\n` (CRLF). L'ordre dans lequel les alternatives sont définies n'a pas d'importance, car l'alternative la plus longue, `\r\n`, est toujours prioritaire.

```js
function obtenirSequencesTerminateursDeLigne(str) {
  return str.match(/[\r\n\u2028\u2029\q{\r\n}]/gv);
}

obtenirSequencesTerminateursDeLigne(`
Un poème\r
Est séparé\rEn de nombreux
strophes
`); // ['\n', '\r\n', '\r', '\n', '\n']
```

Cette expression rationnelle équivaut exactement à `/(?:\r\n|\r|\n|\u2028|\u2029)/gu` ou à `/(?:\r\n|[\r\n\u2028\u2029])/gu`. Toutefois, dans une disjonction ordinaire, l'ordre des alternatives compte, donc `\r\n` doit être défini en premier pour être prioritaire. Une classe de caractères est plus courte et évite aussi ce piège.

Le cas d'utilisation le plus pratique de `\q{}` concerne la soustraction et l'intersection. Ce résultat s'obtient également avec plusieurs [assertions anticipées](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection). La fonction suivante correspond aux drapeaux qui ne sont ni américain, ni chinois, ni russe, ni britannique, ni français.

```js
function nonMembrePermanentUNSC(flag) {
  return /^[\p{RGI_Emoji_Flag_Sequence}--\q{🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷}]$/v.test(flag);
}

nonMembrePermanentUNSC("🇺🇸"); // false
nonMembrePermanentUNSC("🇩🇪"); // true
```

Cet exemple équivaut en grande partie à `/^(?!🇺🇸|🇨🇳|🇷🇺|🇬🇧|🇫🇷)\p{RGI_Emoji_Flag_Sequence}$/v`, mais cette expression est peut-être plus performante.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Classes de caractères échappés&nbsp;: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Séquence d'échappement de classe de caractères Unicode&nbsp;: `\p{...}`, `\P{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Caractère littéral&nbsp;: `a`, `b`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Échappement de caractère&nbsp;: `\n`, `\u{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjonction&nbsp;: `|`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Indicateur `v` de RegExp avec notation ensembliste et propriétés des chaînes de caractères <sup>(angl.)</sup>](https://v8.dev/features/regexp-v-flag) sur v8.dev (2022)
