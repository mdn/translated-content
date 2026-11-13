---
title: "Assertion de limite de tampon : \\A, \\z, \\Z"
slug: Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{SeeCompatTable}}

Une **assertion de limite de tampon** (<i lang="en">buffer boundary assertion</i> en anglais) vérifie si la position actuelle dans la chaîne de caractères se trouve strictement au début ou à la fin de la chaîne de caractères entière (`\Z` autorise également un retour à la ligne final), indépendamment de la présence de l'indicateur [`m`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) (qui modifie la signification des assertions `^` et `$` de [limite d'entrée](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)). Elle n'est prise en charge qu'en [mode sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode).

## Syntaxe

```regex
\A
\z
\Z
```

## Description

`\A` affirme que la position actuelle se trouve au début de la chaîne de caractères entière. `\z` affirme que la position actuelle se trouve à la fin de la chaîne de caractères entière. `\Z` fonctionne comme `\z`, mais correspond aussi avant un [terminateur de ligne](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#terminateurs_de_ligne) ou une séquence `\r\n` (CRLF) à la fin de la chaîne de caractères. Ce sont toutes des _assertions_, elles ne consomment donc aucun caractère.

Plus précisément, `\A` affirme que le caractère à gauche se trouve hors des limites de la chaîne de caractères&nbsp;; `\z` affirme que le caractère à droite se trouve hors des limites de la chaîne de caractères&nbsp;; `\Z` équivaut à `(?=(?:\r?\n?|[\u{2028}\u{2029}]?)\z)`.

Ces assertions n'ont de sens que lorsqu'aucun caractère n'est attendu à leur gauche ou à leur droite. Par exemple, `f\Ao` ne correspond jamais, car `\A` ne peut pas se trouver à la fois au début de la chaîne de caractères et avoir un caractère à sa gauche.

Les assertions `\A` et `\z` ne sont utiles que lorsque l'indicateur `m` est utilisé. Sans `m`, elles se comportent comme `^` et `$`. Si votre motif doit uniquement correspondre au début ou à la fin de la chaîne de caractères entière ou d'une ligne (et jamais aux deux à la fois), l'approche recommandée consiste à utiliser tout de même les assertions `^` et `$` et à définir l'indicateur `m` si nécessaire, car elles sont plus largement prises en charge que les assertions de limite de tampon. Si vous devez faire correspondre les deux types de limites dans le même motif, vous pouvez techniquement utiliser des [modificateurs](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) pour activer ou désactiver l'indicateur `m` dans différentes parties du motif, mais l'utilisation de ces séquences d'échappement rend le code beaucoup plus lisible.

## Exemples

### Combiner les assertions de limite de tampon et d'entrée

Supposons que vous ayez un motif qui doit correspondre soit au début de la chaîne de caractères entière, soit au début d'une ligne. Vous pouvez activer `m` afin d'utiliser `^` pour désigner ce dernier cas, puis utiliser `\A` pour désigner le premier (vous devez également activer `u` pour utiliser `\A`).

Cet exemple correspond aux commentaires de ligne isolés, qui peuvent être un [commentaire d'environnement](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#commentaire_denvironnement) au début d'un fichier ou un commentaire de ligne sur n'importe quelle ligne. Il ne correspond pas aux commentaires de ligne à la fin d'une ligne contenant du code.

```js
function trouverCommentairesLigne(code) {
  // Commentaire d'environnement : #!... (valide uniquement au début du fichier)
  // Commentaire de ligne : //... (valide partout)
  const motif = /\A#!.*|^\s*\/\/.*/gmu;
  return code.match(motif);
}

const programme = `#!/usr/env/node

function trouverCommentairesLigne(code) {
  // Commentaire d'environnement : #!... (valide uniquement au début du fichier)
  // Commentaire de ligne : //... (valide partout)
  const motif = /\\A#!.*|^\\/\\/.*/gmu;
  return code.match(motif);
}
`;

console.log(trouverCommentairesLigne(programme));
// [
//   '#!/usr/env/node',
//   '  // Commentaire d\'environnement : #!... (valide uniquement au début du fichier)',
//   '  // Commentaire de ligne : //... (valide partout)'
// ]
```

Un autre cas d'utilisation majeur des assertions de limite de tampon est lorsque vous ne pouvez pas modifier les indicateurs, comme la recherche par expression rationnelle dans les éditeurs de texte. Ces cas activent généralement `m` par défaut, donc vous devez utiliser `\A` et `\z` pour «&nbsp;vous désinscrire&nbsp;».

### Faire correspondre la fin du fichier tout en autorisant un retour à la ligne final facultatif

Les formats de fichier autorisent souvent un retour à la ligne facultatif à la fin du fichier. Si vous voulez faire correspondre un motif de fin de fichier qui autorise ce retour à la ligne final, vous pouvez utiliser `\Z`. Cette fonctionnalité est utile avec ou sans l'indicateur `m`.

```js
const finDuPDF = /%%EOF\Z/u;

console.log(finDuPDF.test("%%EOF")); // true
console.log(finDuPDF.test("%%EOF\n")); // true
console.log(finDuPDF.test("%%EOF\r\n")); // true
console.log(finDuPDF.test("%%EOF\n\n")); // false
console.log(finDuPDF.test("%%EOF\nautre chose")); // false
```

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
- [Assertion de précédence&nbsp;: `(?<=...)`, `(?<!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
