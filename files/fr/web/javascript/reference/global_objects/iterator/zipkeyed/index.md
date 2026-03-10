---
title: "Iterator : méthode statique zipKeyed()"
short-title: zipKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zipKeyed
l10n:
  sourceCommit: c534ba0cb925657de5e99ab8c540eae31afd9382
---

{{JSRef}}{{SeeCompatTable}}

La méthode statique **`Iterator.zipKeyed()`** crée un nouvel objet {{JSxRef("Iterator")}} qui agrège des éléments à partir de plusieurs objets itérables en produisant des objets contenant les éléments à la même position, avec des clés définies par l'entrée. Elle permet essentiellement de «&nbsp;zipper&nbsp;» les itérables d'entrée, autorisant une itération simultanée sur eux.

La méthode {{JSxRef("Iterator.zip()")}} est similaire, mais produit des tableaux au lieu d'objets.

## Syntaxe

```js-nolint
Iterator.zipKeyed(iterables)
Iterator.zipKeyed(iterables, options)
```

### Paramètres

- `iterables`
  - : Un objet. La clé de chaque propriété est utilisée comme clé dans les objets résultants. La valeur de la propriété doit implémenter soit le protocole [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»), soit, à défaut, le protocole [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérateur_»). Ces itérables peuvent être infinis. Les chaînes de caractères sont rejetées&nbsp;: pour zipper des chaînes, convertissez-les explicitement en itérateurs en utilisant {{JSxRef("Iterator.from()")}}.
- `options` {{Optional_Inline}}
  - : Un objet définissant le comportement en cas de longueurs d'entrée incohérentes. Il peut avoir les propriétés suivantes&nbsp;:
    - `mode` {{Optional_Inline}}
      - : L'une des valeurs suivantes&nbsp;:
        - `"shortest"` (valeur par défaut)&nbsp;: L'itérateur résultant s'arrête lorsqu'un itérable d'entrée est épuisé.
        - `"longest"`&nbsp;: L'itérateur résultant s'arrête lorsque tous les itérables d'entrée sont épuisés. Les valeurs manquantes des itérables plus courts sont remplies selon l'option `padding`.
        - `"strict"`&nbsp;: Une erreur de typage ({{JSxRef("TypeError")}}) est levée si tous les itérables d'entrée ne se terminent pas en même temps.
    - `padding` {{Optional_Inline}}
      - : Un objet. Il n'est récupéré et validé que lorsque `mode` vaut `"longest"`. Si `undefined` ou absent, les valeurs manquantes des itérables plus courts sont remplies par `undefined` (équivalent à passer un objet vide). Si un objet est fourni, chaque clé de l'argument `iterables` est récupérée _dès que `Iterator.zipKeyed()` est appelé_. `padding[key]` est utilisé pour les valeurs manquantes de `iterables[key]`. Si l'objet `padding` ne contient pas certaines clés, ces clés sont remplies par `undefined`.

### Valeur de retour

Un nouvel objet {{JSxRef("Iterator")}}. Chacun de ses éléments est un objet ayant les mêmes clés que l'argument `iterables`, contenant les éléments de chaque itérable d'entrée à la position correspondante.

## Description

La fonction `Iterator.zipKeyed()` se comporte comme {{JSxRef("Iterator.zip()")}}&nbsp;: la seule différence est que vous pouvez définir les clés utilisées dans les objets résultants, tandis que `Iterator.zip()` utilise toujours des indices numériques (en retournant des tableaux).

Si l'on représente les itérables sous forme de tableaux, l'entrée peut ressembler à ceci&nbsp;:

```js
({
  a: [a1, a2, a3, a4],
  b: [b1, b2, b3],
  c: [c1, c2, c3, c4, c5],
});
```

L'itérateur résultant, quelle que soit l'option, commencera par produire les objets suivants&nbsp;:

```js
({ a: a1, b: b1, c: c1 });
({ a: a2, b: b2, c: c2 });
({ a: a3, b: b3, c: c3 });
```

Après que les trois premiers objets ont été produits, l'itérable d'entrée `b` est épuisé au quatrième appel à `next()`&nbsp;: il retourne `{ done: true }`. Ce qui se passe ensuite dépend de l'option `mode`. Si `mode` vaut `"shortest"` (valeur par défaut), l'itérateur résultant s'arrête ici&nbsp;: les deux autres itérateurs d'entrée sont [fermés](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration). Si `mode` vaut `"strict"`, une erreur est levée car les deux autres itérables ne sont _pas_ terminés lorsque le second retourne `{ done: true }`. Si `mode` vaut `"longest"`, l'itérateur résultant continue de produire des objets en comblant les valeurs manquantes. Par exemple, si `padding` n'est pas fourni, il vaut `undefined`&nbsp;:

```js
({ a: a4, b: undefined, c: c4 });
({ a: undefined, b: undefined, c: c5 });
```

Si `padding` est fourni comme objet et ressemble à `{ a: p1, b: p2, c: p3 }`, alors `p2` est utilisé pour combler la valeur manquante de l'itérable `b`, et `p1` pour celle de l'itérable `a`&nbsp;:

```js
({ a: a4, b: p2, c: c4 });
({ a: p1, b: p2, c: c5 });
```

## Exemples

### Transposer des données tabulaires

Il existe deux manières courantes de représenter des données tabulaires&nbsp;: comme un objet où chaque propriété est une colonne, ou comme un tableau d'objets où chaque objet est une ligne. Cet exemple montre comment itérer la représentation par colonnes en itérant par lignes avec `Iterator.zipKeyed()`.

```js
const tableau = {
  nom: ["Caroline", "Danielle", "Evelyn"],
  age: [30, 25, 35],
  ville: ["New York", "Londres", "Hong Kong"],
};

for (const { nom, age, ville } of Iterator.zipKeyed(tableau)) {
  console.log(`${nom}, âgé de ${age}, habite à ${ville}.`);
}

// Sortie :
// Caroline, âgé de 30, vit à New York.
// Danielle, âgé de 25, vit à Londres.
// Evelyn, âgé de 35, vit à Hong Kong.
```

La plupart des cas d'utilisation de `Iterator.zipKeyed()` sont identiques à ceux de {{JSxRef("Iterator.zip()")}}. Le choix dépend du fait que vous disposiez déjà d'un objet d'itérables (utilisez `zipKeyed()`) ou d'un tableau d'itérables (utilisez `zip()`). Nous recommandons d'utiliser `zipKeyed()` lorsque possible, car définir des clés explicites réduit le risque de mélanger l'ordre des itérables.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.zipKeyed` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/proposals/joint-iteration)
- [Prothèse d'émulation es-shims de `Iterator.zipKeyed` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode statique {{JSxRef("Iterator.zip()")}}
- La méthode statique {{JSxRef("Iterator.from()")}}
- La méthode statique {{JSxRef("Iterator.concat()")}}
