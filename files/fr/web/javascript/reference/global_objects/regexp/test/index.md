---
title: "RegExp : méthode test()"
short-title: test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`test()`** des instances de {{JSxRef("RegExp")}} exécute une recherche avec cette expression rationnelle pour trouver une correspondance entre l'expression rationnelle et une chaîne de caractères définie. Elle retourne `true` s'il y a une correspondance&nbsp;; `false` dans le cas contraire.

Les objets JavaScript {{JSxRef("RegExp")}} sont **avec état** lorsqu'ils ont les indicateurs {{JSxRef("RegExp/global", "global")}} ou {{JSxRef("RegExp/sticky", "sticky")}} définis (par exemple, `/toto/g` ou `/toto/y`). Ils stockent un {{JSxRef("RegExp/lastIndex", "lastIndex")}} à partir de la correspondance précédente. En utilisant cela en interne, `test()` peut être utilisé pour itérer sur plusieurs correspondances dans une chaîne de caractères de texte (avec des groupes de capture).

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.test()", "taller")}}

```js interactive-example
const str = "table tototball";

const regex = /fo+/;
const globalRegex = /fo+/g;

console.log(regex.test(str));
// Résultat attendu : true

console.log(globalRegex.lastIndex);
// Résultat attendu : 0

console.log(globalRegex.test(str));
// Résultat attendu : true

console.log(globalRegex.lastIndex);
// Résultat attendu : 9

console.log(globalRegex.test(str));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
test(str)
```

### Paramètres

- `str`
  - : La chaîne de caractères contre laquelle comparer l'expression rationnelle. Toutes les valeurs sont [converties en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), donc l'omission de ce paramètre ou le passage de `undefined` entraîne la recherche de la chaîne de caractères `"undefined"` par `test()`, ce qui est rarement souhaité.

### Valeur de retour

`true` si une correspondance est trouvée entre l'expression rationnelle et la chaîne de caractères `str`. Sinon, `false`.

## Description

Utilisez `test()` chaque fois que vous voulez savoir si un motif est trouvé dans une chaîne de caractères. `test()` retourne un booléen, contrairement à la méthode {{JSxRef("String.prototype.search()")}} (qui retourne l'index d'une correspondance, ou `-1` si aucune correspondance n'est trouvée).

Pour obtenir plus d'informations (mais avec une exécution plus lente), utilisez la méthode {{JSxRef("RegExp/exec", "exec()")}}. (Ceci est similaire à la méthode {{JSxRef("String.prototype.match()")}}.)

Comme avec `exec()` (ou en combinaison avec elle), des appels successifs à `test()` sur une même instance d'une expression rationnelle globale permettent de rechercher après la dernière correspondance.

## Exemples

### Utiliser `test()`

Cet exemple teste si `"bonjour"` est contenu au tout début d'une chaîne de caractères, renvoyant un résultat booléen.

```js
const chaine = "bonjour le monde !";
const resultat = /^bonjour/.test(chaine);

console.log(resultat); // true
```

L'exemple suivant affiche un message qui dépend du succès du test&nbsp;:

```js
function testerEntree(re, chaine) {
  const moitieChaine = re.test(chaine) ? "contient" : "ne contient pas";
  console.log(`${chaine} ${moitieChaine} ${re.source}`);
}
```

### Utiliser `test()` avec une expression rationnelle ayant l'indicateur « global »

Lorsqu'une expression rationnelle a [l'indicateur global](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) de défini, `test()` fait avancer la {{JSxRef("RegExp/lastIndex", "lastIndex")}} de l'expression rationnelle. ({{JSxRef("RegExp.prototype.exec()")}} fait également avancer la propriété `lastIndex`.)

Les appels ultérieurs à `test(str)` reprennent la recherche dans `str` à partir de `lastIndex`. La propriété `lastIndex` continuer d'augmenter chaque fois que `test()` retourne `true`.

> [!NOTE]
> Tant que `test()` retourne `true`, `lastIndex` n'est _pas_ réinitialisé — même lors du test d'une chaîne de caractères différente&nbsp;!

Lorsque `test()` retourne `false`, la propriété `lastIndex` de l'expression rationnelle appelante est réinitialisée à `0`.

L'exemple suivant illustre ce comportement&nbsp;:

```js
const regex = /toto/g; // l'indicateur "global" est défini

// regex.lastIndex est à 0
regex.test("toto"); // true

// regex.lastIndex est maintenant à 3
regex.test("toto"); // false

// regex.lastIndex est à 0
regex.test("tructoto"); // true

// regex.lastIndex est à 6
regex.test("tototruc"); // false

// regex.lastIndex est à 0
regex.test("tototructoto"); // true

// regex.lastIndex est à 3
regex.test("tototructoto"); // true

// regex.lastIndex est à 9
regex.test("tototructoto"); // false

// regex.lastIndex est à 0
// (...et ainsi de suite)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- L'objet natif {{JSxRef("RegExp")}}
