---
title: "Iterator : méthode statique zip()"
short-title: zip()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zip
l10n:
  sourceCommit: 38c09bffe4654e74bfd225d28575afe42d4fe344
---

{{JSRef}}{{SeeCompatTable}}

La méthode statique **`Iterator.zip()`** crée un nouvel objet {{JSxRef("Iterator")}} qui agrège plusieurs éléments à partir de plusieurs objets itérables en retournant des tableaux contenant les éléments à la même position. Elle permet essentiellement de "zipper" les itérables d'entrée, permettant une itération simultanée sur eux.

La méthode {{JSxRef("Iterator.zipKeyed()")}} est similaire, mais retourne des objets au lieu de tableaux, avec des clés que vous pouvez définir.

## Syntaxe

```js-nolint
Iterator.zip(iterables)
Iterator.zip(iterables, options)
```

### Paramètres

- `iterables`
  - : Un itérable d'itérables dont les éléments sont agrégés. Il doit être [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») et ne peut pas être un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérateur_»). Il doit être fini, bien que ses éléments puissent être des itérables infinis. Chaque élément doit implémenter soit le protocole [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»), soit, à défaut, le protocole [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérateur_»). Les chaînes de caractères sont rejetées&nbsp;: pour zipper des chaînes de caractères, convertissez-les explicitement en itérateurs en utilisant {{JSxRef("Iterator.from()")}}.
- `options` {{Optional_Inline}}
  - : Un objet qui définit le comportement en cas de longueurs d'entrée incohérentes. Il peut avoir les propriétés suivantes&nbsp;:
    - `mode` {{Optional_Inline}}
      - : L'une des valeurs suivantes&nbsp;:
        - `"shortest"` (par défaut)&nbsp;: L'itérateur résultant s'arrête lorsqu'un itérable d'entrée est épuisé.
        - `"longest"`&nbsp;: L'itérateur résultant s'arrête lorsque tous les itérables d'entrée sont épuisés. Les valeurs manquantes des itérables plus courts sont remplies selon l'option `padding`.
        - `"strict"`&nbsp;: Une erreur de typage ({{JSxRef("TypeError")}}) est levée si tous les itérables d'entrée ne se terminent pas en même temps.
    - `padding` {{Optional_Inline}}
      - : Un objet itérable (pas un itérateur). Il n'est récupéré et validé que lorsque `mode` est `"longest"`. Si `undefined` ou absent, les valeurs manquantes des itérables plus courts sont remplies avec `undefined` (ce qui équivaut à passer un itérable vide). Si un itérable est fourni, il est itéré pour le nombre de fois égal au nombre d'éléments dans `iterables` _dès que `Iterator.zip()` est appelé_. `padding[i]` est utilisé pour les valeurs manquantes de `iterables[i]` (en supposant que `padding` et `iterables` sont fournis sous forme de tableaux&nbsp;; ce n'est pas obligatoire). Si `padding` est plus court que `iterables`, `undefined` est utilisé pour les itérables restants.

### Valeur de retour

Un nouvel objet {{JSxRef("Iterator")}}. Chacun de ses éléments est un tableau dont la longueur est égale au nombre d'itérables d'entrée, contenant les éléments de chaque itérable d'entrée à la position correspondante. Si l'objet `iterables` est vide, l'itérateur résultant est créé comme terminé.

## Description

La fonction `Iterator.zip()` se comporte comme une opération de [transposition](https://fr.wikipedia.org/wiki/Matrice_transpos%C3%A9e), produisant des tableaux contenant les éléments aux positions correspondantes dans chacun des entrées. Si nous représentons les itérables sous forme de tableaux, l'entrée peut ressembler à ceci&nbsp;:

```js
[
  [a1, a2, a3, a4], // Itérable a
  [b1, b2, b3], // Itérable b
  [c1, c2, c3, c4, c5], // Itérable c
];
```

L'itérateur résultant, quel que soit le mode, commencera par produire les tableaux suivants&nbsp;:

```js
[a1, b1, c1];
[a2, b2, c2];
[a3, b3, c3];
```

Après les trois premiers tableaux produits, l'itérable d'entrée `b` est épuisé lors du quatrième appel à `next()` — il retourne `{ fait: true }`. Ce qui se passe ensuite dépend de l'option `mode`. Si `mode` est `"shortest"` (par défaut), l'itérateur résultant s'arrête ici&nbsp;: les deux autres itérables d'entrée sont [fermés](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration). Si le `mode` est `"strict"`, une erreur est levée parce que les deux autres itérables ne sont pas terminés lorsque le deuxième retourne le résultat `{ fait: true }`. Si `mode` est `"longest"`, l'itérateur résultant continue à produire des tableaux, en remplissant les valeurs manquantes. Par exemple, si `padding` n'est pas fourni, il est par défaut `undefined`&nbsp;:

```js
[a4, undefined, c4];
[undefined, undefined, c5];
```

Si `padding` est fourni comme un itérable, et qu'il y a trois itérables d'entrée, les trois premières valeurs de l'itérable `padding` sont utilisées pour combler les valeurs manquantes. Supposons que `padding` soit un tableau `[p1, p2, p3]`. Alors `p2` est utilisé pour combler la valeur manquante de l'itérable `b`, et `p1` pour celle de l'itérable `a`&nbsp;:

```js
[a4, p2, c4];
[p1, p2, c5];
```

Si l'itérable `padding` contient moins de trois valeurs, les valeurs manquantes restantes sont remplies par `undefined`.

## Exemples

### Itération sur une map avec des indices

En utilisant `Iterator.zip()`, vous pouvez itérer sur n'importe quel objet itérable (les chaînes de caractères ne sont pas prises en charge par défaut) tout en ayant accès à un compteur incrémental&nbsp;:

```js
const ages = new Map([
  ["Caroline", 30],
  ["Danielle", 25],
  ["Evelyn", 35],
]);

const nombres = (function* () {
  let n = 0;
  while (true) {
    yield n++;
  }
})();
for (const [index, [name, age]] of Iterator.zip([nombres, ages])) {
  console.log(`${index}: ${name} a ${age} ans.`);
}

// Sortie :
// 0: Caroline a 30 ans.
// 1: Danielle a 25 ans.
// 2: Evelyn a 35 ans.
```

`nombres` est un itérateur infini qui génère des nombres croissants à partir de `0`. Comme `Iterator.zip()` s'arrête par défaut lorsque l'itérable d'entrée le plus court est épuisé, la boucle s'exécute exactement trois fois. L'itérateur `nombres` est correctement fermé après la fin de la boucle&nbsp;; il ne provoque pas de boucle infinie.

### Créer une Map à partir de listes de clés et de valeurs

Supposons que vous ayez deux tableaux&nbsp;: l'un avec des clés et l'autre avec des valeurs. Vous pouvez utiliser `Iterator.zip()` pour les combiner en une {{JSxRef("Map")}}&nbsp;:

```js
const jours = ["Lun", "Mar", "Mer", "Jeu", "Ven"];
const temperatures = [22, 21, 23, 20, 19];

const jourTemperatureMap = new Map(Iterator.zip([jours, temperatures]));
console.log(jourTemperatureMap);
// Map(5) { 'Lun' => 22, 'Mar' => 21, 'Mer' => 23, 'Jeu' => 20, 'Ven' => 19 }
```

### Itération conjointe sur plusieurs sources de données

Supposons que vous ayez des données provenant de plusieurs sources, telles que plusieurs microservices ou bases de données. Vous savez que chaque source fournit des données liées dans le même ordre, et vous souhaitez les traiter ensemble. Vous pouvez utiliser `Iterator.zip()` pour y parvenir&nbsp;:

```js
const noms = fetchNames(); // par exemple ["Caroline", "Danielle", "Evelyn"]
const ages = fetchAges(); // par exemple [30, 25, 35]
const villes = fetchCities(); // par exemple ["New York", "London", "Hong Kong"]

for (const [nom, age, ville] of Iterator.zip([noms, ages, villes])) {
  console.log(`${nom}, âgé de ${age} ans, vit à ${ville}.`);
}

// Sortie :
// Caroline, âgé de 30 ans, vit à New York.
// Danielle, âgé de 25 ans, vit à London.
// Evelyn, âgé de 35 ans, vit à Hong Kong.
```

### Fournir un remplissage pour les itérables de longueurs inégales

Lorsque vous combinez des itérables de longueurs différentes avec `mode` défini sur `"longest"`, vous pouvez fournir un itérable `padding` pour spécifier les valeurs utilisées pour remplir les entrées manquantes&nbsp;:

```js
const lettres = ["a", "b", "c", "d", "e"];
const nombres = [1, 2, 3];

// Une valeur de remplissage par itérable
const padding = ["[Lettre manquante]", "[Nombre manquant]"];
const it = Iterator.zip([lettres, nombres], { mode: "longest", padding });
for (const [lettre, nombre] of it) {
  console.log(`${lettre}: ${nombre}`);
}
// Sortie :
// a: 1
// b: 2
// c: 3
// d: [Nombre manquant]
// e: [Nombre manquant]
```

### Combiner des chaînes de caractères

Les chaînes de caractères ne sont pas acceptées comme itérables d'entrée pour `Iterator.zip()`, car il est désormais considéré comme une erreur de rendre les chaînes implicitement itérables. Pour combiner des chaînes, convertissez-les explicitement en itérateurs en utilisant {{JSxRef("Iterator.from()")}}&nbsp;:

```js
const str1 = "abc";
const str2 = "1234";
const it = Iterator.zip([Iterator.from(str1), Iterator.from(str2)]);
for (const [char1, char2] of it) {
  console.log(`${char1} - ${char2}`);
}
// Sortie :
// a - 1
// b - 2
// c - 3
```

Dans certains cas, vous souhaiterez peut-être découper par [groupes de graphèmes](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) plutôt que par unités de code. Dans ce cas, vous pouvez utiliser l'API {{JSxRef("Intl.Segmenter")}}&nbsp;:

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
const str1 = "🤷‍♂️🤷‍♀️🤷";
const str2 = "123";
const it = Iterator.zip([
  segmenter.segment(str1).map(({ segment }) => segment),
  segmenter.segment(str2).map(({ segment }) => segment),
]);
for (const [char1, char2] of it) {
  console.log(`${char1} - ${char2}`);
}
// Sortie :
// 🤷‍♂️ - 1
// 🤷‍♀️ - 2
// 🤷 - 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.zip` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/proposals/joint-iteration)
- [Prothèse d'émulation es-shims de `Iterator.zip` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode statique {{JSxRef("Iterator.zipKeyed()")}}
- La méthode statique {{JSxRef("Iterator.from()")}}
- La méthode statique {{JSxRef("Iterator.concat()")}}
