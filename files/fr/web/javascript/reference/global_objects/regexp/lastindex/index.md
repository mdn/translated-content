---
title: "RegExp : propriété lastIndex"
short-title: lastIndex
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La propriété de données **`lastIndex`** des instances de {{JSxRef("RegExp")}} définit l'indice à partir duquel commencer la prochaine correspondance.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp: lastIndex")}}

```js interactive-example
const regex = /foo/g;
const str = "table football, foosball";

regex.test(str);

console.log(regex.lastIndex);
// Résultat attendu : 9

regex.test(str);

console.log(regex.lastIndex);
// Résultat attendu : 19
```

## Valeur

Un entier positif.

{{js_property_attributes(1, 0, 0)}}

## Description

Cette propriété est définie seulement si l'instance de l'expression rationnelle utilise l'indicateur `g` pour indiquer une recherche globale, ou l'indicateur `y` pour indiquer une recherche adhérente. Les règles suivantes s'appliquent lorsque {{JSxRef("RegExp/exec", "exec()")}} est appelée sur une entrée donnée&nbsp;:

- Si `lastIndex` est supérieur à la longueur de l'entrée, `exec()` ne trouve pas de correspondance et `lastIndex` est défini à 0.
- Si `lastIndex` est égal à la longueur de l'entrée ou inférieur, `exec()` tente de faire correspondre l'entrée à partir de `lastIndex`.
  - Si `exec()` trouve une correspondance, `lastIndex` est défini à la position de la fin de la chaîne de caractères correspondante dans l'entrée.
  - Si `exec()` ne trouve pas de correspondance, `lastIndex` est défini à 0.

D'autres méthodes liées aux expressions rationnelles, telles que {{JSxRef("RegExp.prototype.test()")}}, {{JSxRef("String.prototype.match()")}}, {{JSxRef("String.prototype.replace()")}}, etc., appellent `exec()` en interne, elles ont donc des effets différents sur `lastIndex`. Consultez leurs pages respectives pour plus de détails.

## Exemples

### Utiliser `lastIndex`

Considérons la séquence d'instructions suivante&nbsp;:

```js
const re = /(salut)?/g;
```

Correspond à la chaîne de caractères vide.

```js
console.log(re.exec("salut"));
console.log(re.lastIndex);
```

Retourne `["salut", "salut"]` avec `lastIndex` égal à 6.

```js
console.log(re.exec("salut"));
console.log(re.lastIndex);
```

Retourne `["", undefined]`, un tableau vide dont le premier élément est la chaîne de caractères correspondant à la correspondance. Dans ce cas, la chaîne de caractères vide parce que `lastIndex` est 6 (et l'est toujours) et que `salut` a une longueur de 5.

### Utiliser `lastIndex` avec des expressions rationnelles adhérentes

La propriété `lastIndex` est modifiable. Vous pouvez la définir pour que l'expression rationnelle commence sa prochaine recherche à un indice donné.

L'indicateur `y` nécessite presque toujours de définir `lastIndex`. Il correspond toujours strictement à `lastIndex` et n'essaie pas de positions ultérieures. Cela est généralement utile pour écrire des analyseurs, lorsque vous souhaitez ne faire correspondre les jetons qu'à la position actuelle.

```js
const motifDeChaine = /"[^"]*"/y;
const entree = `const message = "Bonjour le monde";`;

motifDeChaine.lastIndex = 6;
console.log(motifDeChaine.exec(entree)); // null

motifDeChaine.lastIndex = 16;
console.log(motifDeChaine.exec(entree)); // ['"Bonjour le monde"']
```

### Reculer `lastIndex`

L'indicateur `g` bénéficie également de la définition de `lastIndex`. Un cas d'utilisation courant est lorsque la chaîne de caractères est modifiée au milieu d'une recherche globale. Dans ce cas, nous pouvons manquer une correspondance particulière si la chaîne de caractères est raccourcie. Nous pouvons éviter cela en reculant `lastIndex`.

```js
const motifLienMD = /\[[^[\]]+\]\((?<link>[^()\s]+)\)/dg;

function recupererLienMD(ligne) {
  let correspondance;
  let ligneModifiee = ligne;
  while ((correspondance = motifLienMD.exec(ligneModifiee))) {
    const lienOriginal = correspondance.groups.link;
    const lienRecupere = lienOriginal.replaceAll(/^files|\/index\.md$/g, "");
    ligneModifiee =
      ligneModifiee.slice(0, correspondance.indices.groups.link[0]) +
      lienRecupere +
      ligneModifiee.slice(correspondance.indices.groups.link[1]);
    // Reculer le motif jusqu'à la fin du lien résolu
    motifLienMD.lastIndex += lienRecupere.length - lienOriginal.length;
  }
  return ligneModifiee;
}

console.log(
  recupererLienMD(
    "[`lastIndex`](files/fr/web/javascript/reference/global_objects/regexp/lastindex/index.md)",
  ),
); // [`lastIndex`](/fr/web/javascript/reference/global_objects/regexp/lastindex)
console.log(
  recupererLienMD(
    "[`ServiceWorker`](files/fr/web/api/serviceworker/index.md) et [`SharedWorker`](files/fr/web/api/sharedworker/index.md)",
  ),
); // [`ServiceWorker`](/fr/web/api/serviceworker) et [`SharedWorker`](/fr/web/api/sharedworker)
```

Essayez de supprimer la ligne `motifLienMD.lastIndex += lienRecupere.length - lienOriginal.length` et d'exécuter le deuxième exemple. Vous constatez que le deuxième lien n'est pas remplacé correctement, car `lastIndex` est déjà passé à l'indice du lien après que la chaîne de caractères a été raccourcie.

> [!WARNING]
> Cet exemple est donné à titre indicatif uniquement. Pour traiter le Markdown, il est préférable d'utiliser une bibliothèque d'analyse syntaxique plutôt que des expressions rationnelles.

### Optimiser la recherche

Vous pouvez optimiser la recherche en définissant `lastIndex` à un point permettant d'ignorer les occurrences précédentes éventuelles. Par exemple, au lieu de ceci&nbsp;:

```js
const motifChaine = /"[^"]*"/g;
const entree = `const message = "Bonjour " + "le monde";`;

// Imaginons que nous ayons déjà traité les parties précédentes de la chaîne de caractères
let decalage = 26;
const resteEntree = entree.slice(decalage);
const prochaineChaine = motifChaine.exec(resteEntree);
console.log(prochaineChaine[0]); // "le monde"
decalage += prochaineChaine.index + prochaineChaine.length;
```

Considérons ceci&nbsp;:

```js
motifChaine.lastIndex = decalage;
const prochaineChaine = motifChaine.exec(resteEntree);
console.log(prochaineChaine[0]); // "le monde"
decalage = motifChaine.lastIndex;
```

Ceci est potentiellement plus performant, car nous évitons la découpe de chaînes de caractères.

### Éviter les effets de bord

Les effets de bord causés par `exec()` peuvent prêter à confusion, surtout si l'entrée est différente pour chaque `exec()`.

```js
const re = /toto/g;
console.log(re.test("toto truc")); // true
console.log(re.test("toto machin")); // false, car lastIndex n'est pas nul
```

Ceci est encore plus déroutant lorsque vous modifiez manuellement `lastIndex`. Pour contenir les effets de bord, n'oubliez pas de réinitialiser `lastIndex` après que chaque entrée a été complètement traitée.

```js
const re = /toto/g;
console.log(re.test("toto truc")); // true
re.lastIndex = 0;
console.log(re.test("toto machin")); // true
```

Avec un peu d'abstraction, vous pouvez exiger que `lastIndex` soit défini sur une valeur particulière avant chaque appel à `exec()`.

```js
function creerCorrespondance(motif) {
  // Crée une copie, afin que l'expression rationnelle originale ne soit jamais mise à jour
  const regex = new RegExp(motif, "g");
  return (entree, decalage) => {
    regex.lastIndex = decalage;
    return regex.exec(entree);
  };
}

const chercherToto = creerCorrespondance(/toto/);
console.log(chercherToto("toto truc", 0)[0]); // "toto"
console.log(chercherToto("toto machin", 0)[0]); // "toto"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("RegExp.prototype.dotAll")}}
- La propriété {{JSxRef("RegExp.prototype.global")}}
- La propriété {{JSxRef("RegExp.prototype.hasIndices")}}
- La propriété {{JSxRef("RegExp.prototype.ignoreCase")}}
- La propriété {{JSxRef("RegExp.prototype.multiline")}}
- La propriété {{JSxRef("RegExp.prototype.source")}}
- La propriété {{JSxRef("RegExp.prototype.sticky")}}
- La propriété {{JSxRef("RegExp.prototype.unicode")}}
