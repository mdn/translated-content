---
title: "Array : méthode toLocaleString()"
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode **`toLocaleString()`** des instances de {{JSxRef("Array")}} retourne une chaîne de caractères représentant les éléments du tableau. Les éléments sont convertis en chaînes de caractères via leur méthode `toLocaleString` et ces chaînes sont séparées par une chaîne spécifique à la locale (comme une virgule `,`).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.toLocaleString()", "shorter")}}

```js interactive-example
const array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
// Résultat attendu : "1,a,12/21/1997, 2:12:00 PM",
// Ceci suppose la locale "en" et le fuseau horaire UTC : votre résultat peut différer
```

## Syntaxe

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Paramètres

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "étiquette de langue BCP 47")}}, ou un tableau de telles chaînes. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de Intl](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).
- `options` {{Optional_Inline}}
  - : Un objet avec des propriétés de configuration. Ce que vous pouvez passer ici dépend des éléments à convertir. Par exemple, pour les nombres, voir {{JSxRef("Number.prototype.toLocaleString()")}}.

### Valeur de retour

Une chaîne de caractères qui représente les éléments du tableau.

## Description

La méthode `Array.prototype.toLocaleString` parcourt le contenu du tableau, appelle la méthode `toLocaleString` de chaque élément avec les paramètres `locales` et `options` fournis, puis concatène les résultats avec un séparateur défini par l'implémentation (par exemple une virgule `,`).

> [!NOTE]
> Les arguments `locales` ou `options` ne contrôlent pas le séparateur utilisé entre les éléments du tableau&nbsp;; ils sont simplement transmis à la méthode `toLocaleString()` de chaque élément. Le séparateur effectif (généralement une virgule) dépend uniquement de la locale de l'environnement d'exécution. Si vous souhaitez une mise en forme localisée de liste, utilisez plutôt {{JSxRef("Intl.ListFormat")}}.

Si un élément vaut `undefined` ou `null`, il est converti en chaîne de caractères vide au lieu de la chaîne de caractères `"null"` ou `"undefined"`.

Lorsqu'elle est utilisée sur un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableau_creux), la méthode `toLocaleString()` parcourt les cases vides comme si elles avaient la valeur `undefined`.

La méthode `toLocaleString()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

## Exemples

### Utiliser les arguments `locales` et `options`

Chaque élément du tableau est converti en chaîne de caractères via sa méthode `toLocaleString()`. Par exemple, cet extrait appelle implicitement la méthode {{JSxRef("Number.prototype.toLocaleString()")}} pour afficher la devise pour les chaînes de caractères et les nombres du tableau `prix`&nbsp;:

```js
const prix = ["￥7", 500, 8123, 12];
prix.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

### Séparateur de liste

Le séparateur de liste n'est pas affecté par le paramètre `locales`. Pour le configurer, utilisez plutôt {{JSxRef("Intl.ListFormat")}}.

```js
const nums = [8888, 9999];
console.log(nums.toLocaleString("zh")); // "8,888,9,999"

const formateur = new Intl.ListFormat("zh", {
  type: "conjunction",
  style: "narrow",
});
console.log(formateur.format(nums.map((x) => x.toLocaleString("zh"))));
// "8,888、9,999"
```

### Tableau creux et méthode `toLocaleString()`

`toLocaleString()` traite les cases vides comme `undefined` et produit un séparateur supplémentaire&nbsp;:

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### Objet non tableau et méthode `toLocaleString()`

La méthode `toLocaleString()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // ignoré par toLocaleString() car length vaut 3
};
console.log(Array.prototype.toLocaleString.call(objetSimilaireTableau));
// 1,2,3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.toString()")}}
- La méthode {{JSxRef("TypedArray.prototype.toLocaleString()")}}
- L'objet global {{JSxRef("Intl")}}
- La propriété {{JSxRef("Intl.ListFormat")}}
- La méthode {{JSxRef("Object.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Number.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
