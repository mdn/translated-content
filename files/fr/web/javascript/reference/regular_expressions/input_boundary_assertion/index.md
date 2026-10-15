---
title: "Assertion de limite d'entrée : ^, $"
slug: Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
l10n:
  sourceCommit: 8f53af45fae665627a95ac50e177b15d0228b920
---

Une **assertion de limite d'entrée** (<i lang="en">input boundary assertion</i> en anglais) vérifie si la position actuelle dans la chaîne de caractères est une limite d'entrée. Une limite d'entrée est le début ou la fin de la chaîne de caractères&nbsp;; ou, si l'indicateur `m` est défini, le début ou la fin d'une ligne.

> [!NOTE]
> Pour faire correspondre le début et la fin de l'ensemble de la chaîne de caractères en mode `m`, utilisez les [assertions de limite de tampon](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) `\A`, `\z` et `\Z`.

## Syntaxe

```regex
^
$
```

## Description

`^` vérifie que la position actuelle est le début de l'entrée. `$` vérifie que la position actuelle est la fin de l'entrée. Les deux sont des _assertions_, donc elles ne consomment aucun caractère.

Plus précisément, `^` vérifie que le caractère à gauche est en dehors des limites de la chaîne de caractères&nbsp;; `$` vérifie que le caractère à droite est en dehors des limites de la chaîne de caractères. Si l'indicateur [`m`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) est défini, `^` correspond également si le caractère à gauche est un [terminateur de ligne](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#terminateurs_de_ligne), et `$` correspond également si le caractère à droite est un terminateur de ligne.

Sauf si l'indicateur `m` est défini, ces assertions n'ont de sens que lorsqu'aucun caractère n'est attendu à gauche ou à droite d'elles. Par exemple, `f^o` ne correspond jamais, car il n'est pas possible que `^` soit à la fois au début de la chaîne de caractères et qu'il y ait un caractère à sa gauche.

Ces assertions ne modifient pas les emplacements de correspondance lorsque le marqueur `y` est utilisé — voir également [l'indicateur d'adhérence ancré](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#indicateur_dadhérence_ancré).

## Exemples

### Supprimer les barres obliques finales

L'exemple suivant supprime les barres obliques finales d'une chaîne de caractères d'URL&nbsp;:

```js
function supprimerBarreObliqueFinale(url) {
  return url.replace(/\/$/, "");
}

supprimerBarreObliqueFinale("https://example.com/"); // "https://example.com"
supprimerBarreObliqueFinale("https://example.com/docs/"); // "https://example.com/docs"
```

### Faire correspondre les extensions de fichiers

L'exemple suivant vérifie les types de fichiers en faisant correspondre l'extension de fichier, qui se trouve toujours à la fin de la chaîne de caractères&nbsp;:

```js
function estUneImage(nomDeFichier) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(nomDeFichier);
}

estUneImage("image.png"); // true
estUneImage("image.jpg"); // true
estUneImage("image.pdf"); // false
```

### Faire correspondre l'ensemble de l'entrée

Parfois, vous voulez vous assurer que votre expression rationnelle correspond à l'ensemble de l'entrée, et pas seulement à une sous-chaîne de caractères de l'entrée. Par exemple, si vous déterminez si une chaîne de caractères est un [identifiant](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#identifiants) valide, vous pouvez ajouter des assertions de limites d'entrée aux deux extrémités du motif&nbsp;:

```js
function estUnIdentifiantValide(str) {
  return /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u.test(str);
}

estUnIdentifiantValide("toto"); // true
estUnIdentifiantValide("$1"); // true
estUnIdentifiantValide("1toto"); // false
estUnIdentifiantValide("  toto  "); // false
```

Cette fonction est utile lors de la génération de code (générer du code en utilisant du code), car vous pouvez utiliser des identifiants valides différemment des autres propriétés de chaînes de caractères, telles que la [notation par point](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors#notation_par_point) au lieu de la [notation entre crochets](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors#notation_entre_crochets)&nbsp;:

```js
const variables = ["toto", "toto:truc", "  toto  "];

function pourAssignement(cle) {
  if (estUnIdentifiantValide(cle)) {
    return `globalThis.${cle} = undefined;`;
  }
  // JSON.stringify() échappe les guillemets et autres caractères spéciaux
  return `globalThis[${JSON.stringify(cle)}] = undefined;`;
}

const instructions = variables.map(pourAssignement).join("\n");

console.log(instructions);
// globalThis.toto = undefined;
// globalThis["toto:truc"] = undefined;
// globalThis["  toto  "] = undefined;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des assertions](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Assertion de limite de tampon&nbsp;: `\A`, `\z`, `\Z`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion)
- [Assertion de limite de mot&nbsp;: `\b`, `\B`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Assertion anticipée&nbsp;: `(?=...)`, `(?!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Assertion de précédence&nbsp;: `(?<=...)`, `(?<!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
