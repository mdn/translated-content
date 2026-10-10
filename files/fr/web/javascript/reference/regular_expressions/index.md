---
title: Expressions rationnelles
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: 8f53af45fae665627a95ac50e177b15d0228b920
---

Une **expression rationnelle** (_expression rationnelle_ pour faire court) permet aux développeur·euse·s de faire correspondre des chaînes de caractères à un modèle, d'extraire des informations sur les sous-correspondances ou simplement de tester si la chaîne de caractères respecte ce modèle. Les expressions rationnelles sont utilisées dans de nombreux langages de programmation, et la syntaxe de JavaScript est inspirée de [Perl <sup>(angl.)</sup>](https://www.perl.org/).

Vous êtes encouragé·e·s à lire le [guide des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions) pour avoir un aperçu des syntaxes d'expressions rationnelles disponibles et de leur fonctionnement.

## Description

[_Les expressions rationnelles_ <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Regular_expression) sont un concept important en théorie des langages formels. Elles permettent de décrire un ensemble éventuellement infini de chaînes de caractères (appelé _langage_). Une expression rationnelle, en son cœur, nécessite les fonctionnalités suivantes&nbsp;:

- Un ensemble de _caractères_ pouvant être utilisés dans le langage, appelé _alphabet_.
- _Concaténation_&nbsp;: `ab` signifie «&nbsp;le caractère `a` suivi du caractère `b`&nbsp;».
- _Union_&nbsp;: `a|b` signifie «&nbsp;soit `a`, soit `b`&nbsp;».
- _Étoile de Kleene_&nbsp;: `a*` signifie «&nbsp;zéro ou plusieurs caractères `a`&nbsp;».

En supposant un alphabet fini (comme les 26 lettres de l'alphabet anglais, ou l'ensemble des caractères Unicode), tous les langages réguliers peuvent être générés par les fonctionnalités ci-dessus. Bien sûr, de nombreux modèles sont très fastidieux à exprimer de cette manière (comme «&nbsp;10 chiffres&nbsp;» ou «&nbsp;un caractère qui n'est pas un espace&nbsp;»), donc les expressions rationnelles JavaScript incluent de nombreux raccourcis, présentés ci-dessous.

> [!NOTE]
> Les expressions rationnelles JavaScript ne sont en fait pas régulières, en raison de l'existence des [rétro-références](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) (les expressions rationnelles doivent avoir des états finis). Cependant, elles restent une fonctionnalité très utile.

### Créer des expressions rationnelles

Une expression rationnelle est généralement créée comme un littéral en encadrant un motif avec des barres obliques (`/`)&nbsp;:

```js
const regex1 = /ab+c/g;
```

Les expressions rationnelles peuvent également être créées avec le constructeur {{JSxRef("RegExp/RegExp", "RegExp()")}}&nbsp;:

```js
const regex2 = new RegExp("ab+c", "g");
```

Elles n'ont pas de différences à l'exécution, bien qu'elles puissent avoir des implications sur les performances, la capacité d'analyse statique et l'ergonomie de l'écriture avec l'échappement des caractères. Pour plus d'informations, voir la référence [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#notation_littérale_et_constructeur).

### Indicateurs d'expressions rationnelles

Les indicateurs sont des paramètres spéciaux qui peuvent modifier la façon dont une expression rationnelle est interprétée ou la façon dont elle interagit avec le texte d'entrée. Chaque indicateur correspond à une propriété d'accès sur l'objet `RegExp`.

| Indicateur | Description                                                                                                                               | Propriété correspondante                        |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`        | Génère des indices pour les correspondances de sous-chaînes de caractères.                                                                | {{JSxRef("RegExp/hasIndices", "hasIndices")}}   |
| `g`        | Recherche globale.                                                                                                                        | {{JSxRef("RegExp/global", "global")}}           |
| `i`        | Recherche insensible à la casse.                                                                                                          | {{JSxRef("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`        | Fait en sorte que `^` et `$` correspondent au début et à la fin de chaque ligne au lieu de ceux de l'ensemble de la chaîne de caractères. | {{JSxRef("RegExp/multiline", "multiline")}}     |
| `s`        | Permet à `.` de correspondre aux caractères de nouvelle ligne.                                                                            | {{JSxRef("RegExp/dotAll", "dotAll")}}           |
| `u`        | «&nbsp;Unicode&nbsp;»&nbsp;; traite un motif comme une séquence de points de code Unicode.                                                | {{JSxRef("RegExp/unicode", "unicode")}}         |
| `v`        | Une amélioration du mode `u` avec plus de fonctionnalités Unicode.                                                                        | {{JSxRef("RegExp/unicodeSets", "unicodeSets")}} |
| `y`        | Effectue une recherche «&nbsp;collante&nbsp;» qui correspond à partir de la position actuelle dans la chaîne de caractères cible.         | {{JSxRef("RegExp/sticky", "sticky")}}           |

Les indicateurs `i`, `m` et `s` peuvent être activés ou désactivés pour des parties spécifiques d'une expression rationnelle en utilisant la syntaxe [de modificateur](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Modifier).

Les sections ci-dessous répertorient toutes les syntaxes d'expressions rationnelles disponibles, regroupées par leur nature syntaxique.

### Assertions

Les assertions sont des constructions qui vérifient si la chaîne de caractères satisfait une certaine condition à la position définie, sans consommer de caractères. Les assertions ne peuvent pas être [quantifiées](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier).

- [Assertion de limite de tampon&nbsp;: `\A`, `\z`, `\Z`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion)
  - : Assure que la position actuelle dans la chaîne de caractères se trouve strictement au début ou à la fin de la chaîne de caractères entière (`\Z` autorise également un retour à la ligne en fin de chaîne de caractères), quelle que soit la présence de l'indicateur `m`.
- [Assertion de limite d'entrée&nbsp;: `^`, `$`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : Assure que la position actuelle est le début ou la fin de l'entrée, ou le début ou la fin d'une ligne si l'indicateur `m` est activé.
- [Assertion anticipée&nbsp;: `(?=...)`, `(?!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : Assure que la position actuelle est suivie ou non suivie par un certain motif.
- [Assertion de précédence&nbsp;: `(?<=...)`, `(?<!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : Assure que la position actuelle est précédée ou non précédée par un certain motif.
- [Assertion de limite de mot&nbsp;: `\b`, `\B`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : Assure que la position actuelle est une limite de mot.

### Atomes

Les atomes sont les unités les plus élémentaires d'une expression régulière. Chaque atome _consomme_ un ou plusieurs caractères dans la chaîne de caractères, et échoue soit la correspondance, soit permet au motif de continuer à correspondre avec l'atome suivant.

- [Rétro-référence&nbsp;: `\1`, `\2`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : Correspond à un sous-motif précédemment capturé avec un groupe capturant.
- [Groupe capturant&nbsp;: `(...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : Correspond à un sous-motif et mémorise des informations sur la correspondance.
- [Classe de caractères&nbsp;: `[...]`, `[^...]`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : Correspond à n'importe quel caractère faisant partie ou non d'un ensemble de caractères. Lorsque l'indicateur [`v`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) est activé, il peut également être utilisé pour correspondre à des chaînes de caractères de longueur finie.
- [Classes de caractères échappés&nbsp;: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : Correspond à n'importe quel caractère faisant partie ou non d'un ensemble de caractères prédéfini.
- [Séquence de caractère échappé&nbsp;: `\n`, `\u{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : Correspond à un caractère qui peut ne pas pouvoir être représenté de manière pratique sous sa forme littérale.
- [Caractère littéral&nbsp;: `a`, `b`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : Correspond à un caractère spécifique.
- [Modificateur&nbsp;: `(?ims-ims:...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
  - : Remplace les paramètres d'indicateur dans une partie spécifique d'une expression régulière.
- [Rétro-référence nommée&nbsp;: `\k<name>`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : Correspond à un sous-motif précédemment capturé avec un groupe capturant nommé.
- [Groupe capturant nommé&nbsp;: `(?<name>...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : Correspond à un sous-motif et mémorise des informations sur la correspondance. Le groupe peut ensuite être identifié par un nom personnalisé au lieu de son index dans le motif.
- [Groupe non capturant&nbsp;: `(?:...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : Correspond à un sous-motif sans mémoriser d'informations sur la correspondance.
- [Séquence de classe de caractères Unicode échappé&nbsp;: `\p{...}`, `\P{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Correspond à un ensemble de caractères défini par une propriété Unicode. Lorsque l'indicateur [`v`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) est activé, il peut également être utilisé pour correspondre à des chaînes de caractères de longueur finie.
- [Joker&nbsp;: `.`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : Correspond à tout caractère sauf les terminateurs de ligne, à moins que l'indicateur `s` soit défini.

### Autres fonctionnalités

Ces fonctionnalités ne définissent aucun motif à elles seules, mais servent à composer des motifs.

- [Disjonction&nbsp;: `|`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : Correspond à l'une des alternatives séparées par le caractère `|`.
- [Quantificateur&nbsp;: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : Correspond à un atome un certain nombre de fois.

### Séquences d'échappement

Les _séquences d'échappement_ des expressions rationnelles désignent toute syntaxe formée de `\` suivi d'un ou plusieurs caractères. Elles peuvent avoir des fonctions très différentes selon ce qui suit `\`. Voici la liste de toutes les «&nbsp;séquences d'échappement&nbsp;» valides&nbsp;:

| Séquence d'échappement | Suivie de                                                                       | Signification                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `\A`                   | Aucun                                                                           | [Assertion de limite de tampon][BBA]                                                                                                      |
| `\B`                   | Aucun                                                                           | [Assertion négative de limite de mot][WBA]                                                                                                |
| `\D`                   | Aucun                                                                           | [Séquence de classe de caractères échappé][CCE] représentant les caractères non numériques                                                |
| `\P`                   | `{`, une propriété et/ou une valeur Unicode, puis `}`                           | [Séquence de classe de caractères Unicode échappé][UCCE] représentant les caractères sans la propriété Unicode indiquée                   |
| `\S`                   | Aucun                                                                           | [Séquence de classe de caractères échappé][CCE] représentant les caractères qui ne sont pas des espaces                                   |
| `\W`                   | Aucun                                                                           | [Séquence de classe de caractères échappé][CCE] représentant les caractères qui ne sont pas des caractères de mot                         |
| `\Z`                   | Aucun                                                                           | [Assertion de limite de tampon][BBA]                                                                                                      |
| `\b`                   | Aucun                                                                           | [Assertion de limite de mot][WBA]&nbsp;; dans les [classes de caractères][CC], représente U+0008 (RETOUR ARRIÈRE)                         |
| `\c`                   | Une lettre de `A` à `Z` ou de `a` à `z`                                         | Une [séquence de caractère échappé][CE] représentant le caractère de contrôle dont la valeur correspond à celle de la lettre modulo 32    |
| `\d`                   | Aucun                                                                           | [Séquence de classe de caractères échappé][CCE] représentant les chiffres (`0` à `9`)                                                     |
| `\f`                   | Aucun                                                                           | [Séquence de caractère échappé][CE] représentant U+000C (SAUT DE PAGE)                                                                    |
| `\k`                   | `<`, un identifiant, puis `>`                                                   | Une [rétro-référence nommée][NBR]                                                                                                         |
| `\n`                   | Aucun                                                                           | [Séquence de caractère échappé][CE] représentant U+000A (SAUT DE LIGNE)                                                                   |
| `\p`                   | `{`, une propriété et/ou une valeur Unicode, puis `}`                           | [Séquence de classe de caractères Unicode échappé][UCCE] représentant les caractères associés à la propriété Unicode indiquée             |
| `\q`                   | `{`, une chaîne de caractères, puis `}`                                         | Valide uniquement dans les [classes de caractères du mode `v`][VCC]&nbsp;; représente littéralement la chaîne de caractères à reconnaître |
| `\r`                   | Aucun                                                                           | [Séquence de caractère échappé][CE] représentant U+000D (RETOUR CHARIOT)                                                                  |
| `\s`                   | Aucun                                                                           | [Séquence de classe de caractères échappé][CCE] représentant les caractères d'espacement                                                  |
| `\t`                   | Aucun                                                                           | [Séquence de caractère échappé][CE] représentant U+0009 (TABULATION)                                                                      |
| `\u`                   | 4 chiffres hexadécimaux&nbsp;; ou `{`, de 1 à 6 chiffres hexadécimaux, puis `}` | [Séquence de caractère échappé][CE] représentant le caractère associé au point de code indiqué                                            |
| `\v`                   | Aucun                                                                           | [Séquence de caractère échappé][CE] représentant U+000B (TABULATION VERTICALE)                                                            |
| `\w`                   | Aucun                                                                           | [Séquence de classe de caractères échappé][CCE] représentant les caractères de mot (`A` à `Z`, `a` à `z`, `0` à `9`, `_`)                 |
| `\x`                   | 2 chiffres hexadécimaux                                                         | [Séquence de caractère échappé][CE] représentant le caractère associé à la valeur indiquée                                                |
| `\z`                   | Aucun                                                                           | [Assertion de limite de tampon][BBA]                                                                                                      |
| `\0`                   | Aucun                                                                           | [Séquence de caractère échappé][CE] représentant U+0000 (NUL)                                                                             |

[BBA]: /fr/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion
[CC]: /fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#classe_de_caractères_du_mode_v
[WBA]: /fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

`\` suivi de `0` et d'un autre chiffre forme une [séquence d'échappement octale historique](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#séquences_déchappement), interdite en [mode sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode). `\` suivi de toute autre séquence de chiffres forme une [rétro-référence](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

En outre, `\` peut être suivi de certains caractères qui ne sont ni des lettres ni des chiffres, auquel cas la séquence d'échappement est toujours une [séquence de caractère échappé](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) représentant le caractère échappé lui-même&nbsp;:

- `\$`, `\(`, `\)`, `\*`, `\+`, `\.`, `\/`, `\?`, `\[`, `\\`, `\]`, `\^`, `\\{`, `\|`, `\\}`&nbsp;: valides partout
- `\-`&nbsp;: valide uniquement dans les [classes de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- `\!`, `\#`, `\%`, `\&`, `\,`, `\:`, `\;`, `\<`, `\=`, `\>`, `\@`, `` \` ``, `\~`&nbsp;: valides uniquement dans les [classes de caractères du mode `v`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#classe_de_caractères_du_mode_v)

Les autres caractères {{Glossary("ASCII")}}, à savoir l'espace, `"`, `'`, `_` et toute lettre non mentionnée ci-dessus, ne constituent pas des séquences d'échappement valides. En [mode non sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode), les séquences d'échappement qui ne figurent pas ci-dessus deviennent des _échappements d'identité_&nbsp;: elles représentent le caractère qui suit la barre oblique inverse. Par exemple, `\a` représente le caractère `a`. Ce comportement limite la possibilité d'introduire de nouvelles séquences d'échappement sans provoquer de problèmes de compatibilité ascendante, et interdit donc ces séquences en mode sensible à Unicode.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- L'objet natif {{JSxRef("RegExp")}}
