---
title: "Modificateur : (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Un **modificateur** (<i lang="en">modifier</i> en anglais) remplace les paramètres [d'indicateur](/fr/docs/Web/JavaScript/Reference/Regular_expressions#indicateurs_dexpressions_rationnelles) dans une partie spécifique d'une expression régulière. Il peut être utilisé pour activer ou désactiver des indicateurs qui modifient la signification de certains éléments de syntaxe des expressions régulières. Ces indicateurs sont [`i`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), [`m`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline), et [`s`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll).

## Syntaxe

```regex
(?flags1:pattern)
(?flags1-flags2:pattern)
```

> [!NOTE]
> JavaScript possède uniquement la forme «&nbsp;délimitée&nbsp;» du modificateur, où le motif se trouve dans le groupe du modificateur. La plupart des autres langages prenant en charge les modificateurs proposent une forme «&nbsp;non délimitée&nbsp;», où le modificateur s'applique jusqu'à la fin du groupe englobant le plus proche.

### Paramètres

- `flags1` {{Optional_Inline}}
  - : Une chaîne de caractères contenant les indicateurs à activer. Elle peut contenir n'importe quelle combinaison de `i`, `m` et `s`.
- `flags2` {{Optional_Inline}}
  - : Une chaîne de caractères contenant les indicateurs à désactiver. Elle peut contenir n'importe quelle combinaison de `i`, `m` et `s`, mais aucun indicateur déjà présent dans `flags1`.
- `pattern`
  - : Un motif constitué de tout ce que vous pouvez utiliser dans un littéral d'expression rationnelle, y compris une [disjonction](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Description

Certains indicateurs modifient le sens des éléments de syntaxe des expressions rationnelles&nbsp;:

- L'indicateur [`i`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) rend l'expression rationnelle insensible à la casse en faisant correspondre sans distinction de casse tous les [caractères littéraux](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) et les [classes de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- L'indicateur [`m`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) modifie le comportement des [assertions de limite d'entrée](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) `^` et `$` pour qu'elles correspondent au début et à la fin de chaque ligne, en plus du début et de la fin de l'entrée.
- L'indicateur [`s`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) modifie le comportement du [joker](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) `.` afin qu'il corresponde à n'importe quel caractère, y compris les terminateurs de ligne.

Parfois, vous souhaitez que ces changements ne prennent effet que dans une partie précise d'un motif d'expression rationnelle. Pour cela, vous pouvez encadrer cette partie avec un modificateur. Par exemple&nbsp;:

```js
/(?i:Bonjour) le monde/;
```

Dans cette expression rationnelle, l'indicateur `i` est activé uniquement pour la partie `Bonjour` du motif. La partie `le monde` distingue les majuscules des minuscules. L'expression correspond donc à Bonjour le monde, bonjour le monde et BONJOUR le monde, mais pas à BONJOUR LE MONDE. L'expression suivante est équivalente, car elle active globalement l'indicateur `i`, puis le désactive pour la partie `le monde`&nbsp;:

```js
/Bonjour (?-i:le monde)/i;
```

Les paramètres `flags1` et `flags2` peuvent contenir n'importe quelle combinaison de `i`, `m` et `s`. Toutefois, chaque indicateur doit être unique entre `flags1` et `flags2` — vous ne pouvez ni activer ou désactiver deux fois un indicateur, ni l'activer puis le désactiver immédiatement.

Les paramètres `flags1` et `flags2` sont facultatifs, mais au moins l'un d'eux ne doit pas être vide. `(?flags1-:pattern)` est un modificateur qui active uniquement des indicateurs (équivalent à `(?flags1:pattern)`). `(?-flags2:pattern)` est un modificateur qui désactive uniquement des indicateurs. `(?:pattern)` est simplement un [groupe non capturant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), et `(?-:pattern)` est une erreur de syntaxe.

Les autres indicateurs ne sont pas pertinents dans un modificateur et provoquent donc une erreur de syntaxe s'ils sont inclus&nbsp;:

- Les indicateurs [`g`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) et [`y`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) déterminent le comportement de plusieurs appels à [`exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) et influent sur la correspondance de l'expression rationnelle entière.
- L'indicateur [`d`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) ajoute des informations au résultat de [`exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) et influe sur la correspondance de l'expression rationnelle entière.
- Les indicateurs [`u`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) et [`v`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) modifient le comportement du moteur d'expressions rationnelles d'une manière trop complexe pour être modifiée localement. Ils ont également des effets globaux sur l'expression rationnelle, par exemple sur l'incrémentation de [`lastIndex`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex).

## Exemples

### Faire correspondre un format sur plusieurs lignes uniquement au début de la chaîne de caractères

L'expression rationnelle suivante définit un format pour une chaîne de caractères sur plusieurs lignes. Le premier `^` représente le début de l'entrée entière, car il se trouve dans un modificateur `(?-m:)`, tandis que tous les autres `^` représentent le début d'une ligne&nbsp;:

```js
const motif = /(?-m:^)---\n^title:.*^slug:.*^---/ms;

const entree = `---
title: "Modifier: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
---`;

motif.test(entree); // true

// Saut de ligne supplémentaire au début de la chaîne de caractères
const entree2 = `\n${entree}`;

motif.test(entree2); // false
```

### Faire correspondre certains mots sans distinction de casse

Imaginez que vous recherchiez toutes les déclarations de variables nommées `toto` ou `truc` (car ce sont de mauvais noms). Le mot peut apparaître avec n'importe quelle casse, mais vous savez que le mot-clé est toujours en minuscules, vous pouvez donc procéder ainsi&nbsp;:

```js
const motif = /(?:var|let|const) (?i:toto|truc)\b/;

motif.test("let toto;"); // true
motif.test("const TRUC = 1;"); // true
motif.test("Let toto est un nombre"); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des groupes et des rétro-références](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Groupe non capturant&nbsp;: `(?:...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
