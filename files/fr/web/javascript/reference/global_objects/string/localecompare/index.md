---
title: "String : méthode localeCompare()"
short-title: localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode **`localeCompare()`** des valeurs {{JSxRef("String")}} retourne un nombre indiquant si cette chaîne de caractères se situe avant, après ou est la même que la chaîne de caractères donnée selon l'ordre de tri. Dans les implémentations prenant en charge l'API [`Intl.Collator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator), cette méthode délègue à `Intl.Collator`.

Lors de la comparaison d'un grand nombre de chaînes de caractères, par exemple pour trier de grands tableaux, il est préférable de créer un objet {{JSxRef("Intl.Collator")}} et d'utiliser la fonction fournie par sa méthode {{JSxRef("Intl/Collator/compare", "compare()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.localeCompare()")}}

```js interactive-example
const a = "réservé"; // Avec accents, en minuscules
const b = "RESERVE"; // Sans accents, en majuscules

console.log(a.localeCompare(b));
// Résultat attendu : 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// Résultat attendu : 0
```

## Syntaxe

```js-nolint
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

### Paramètres

Les paramètres `locales` et `options` permettent d'adapter le comportement de la fonction et de laisser les applications définir la langue dont les conventions de formatage doivent être utilisées.

Dans les implémentations qui prennent en charge l'API [`Intl.Collator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator), ces paramètres correspondent exactement aux paramètres du constructeur [`Intl.Collator()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator). Les implémentations qui ne prennent pas en charge `Intl.Collator` sont invitées à ignorer ces deux paramètres, ce qui rend le résultat de la comparaison entièrement dépendant de l'implémentation — il est seulement requis qu'il soit _cohérent_.

- `compareString`
  - : La chaîne de caractères avec laquelle la chaîne de caractères courante est comparée. Toutes les valeurs sont [converties en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), donc l'omission de ce paramètre ou le passage de `undefined` entraîne la comparaison avec la chaîne de caractères `"undefined"`, ce qui est rarement souhaité.
- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}, ou un tableau de telles chaînes de caractères. Correspond à l'argument [`locales`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#locales) du constructeur `Intl.Collator()`.

    Dans les implémentations qui ne prennent pas en charge `Intl.Collator`, ce paramètre est ignoré et la locale de l'hôte est généralement utilisée.

- `options` {{Optional_Inline}}
  - : Un objet ajustant le format de sortie. Correspond à l'argument [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options) du constructeur `Intl.Collator()`.

    Dans les implémentations qui ne prennent pas en charge `Intl.Collator`, ce paramètre est ignoré.

Voir le [constructeur `Intl.Collator()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) pour plus de détails sur les paramètres `locales` et `options` et sur leur utilisation.

### Valeur de retour

Un nombre **négatif** si `referenceStr` se situe avant `compareString`&nbsp;; **positif** si `referenceStr` se situe après `compareString`&nbsp;; `0` si elles sont équivalentes.

Dans les implémentations qui prennent en charge `Intl.Collator`, cela équivaut à `new Intl.Collator(locales, options).compare(referenceStr, compareString)`.

## Description

Retourne un nombre entier indiquant si la chaîne de caractères `referenceStr` se situe avant, après ou est équivalente à la chaîne de caractères `compareString`.

- Négatif lorsque `referenceStr` se situe avant `compareString`
- Positif lorsque `referenceStr` se situe après `compareString`
- Retourne `0` si elles sont équivalentes

> [!WARNING]
> Ne vous fiez pas aux valeurs de retour exactes `-1` ou `1`&nbsp;!
>
> Les résultats négatifs et positifs varient selon les navigateurs (ainsi que selon les versions des navigateurs), car la spécification ECMAScript ne mandate que des valeurs négatives et positives. Certains navigateurs peuvent retourner `-2` ou `2`, ou même une autre valeur négative ou positive.

## Exemples

### Utiliser la méthode `localeCompare()`

```js
// La lettre « a » précède le « c », ce qui donne une valeur négative
"a".localeCompare("c"); // -2, ou -1, ou toute autre valeur négative

// Dans l'ordre alphabétique, le mot « coucou » vient après « avion »,
// ce qui donne une valeur positive
"coucou".localeCompare("avion")); // 2, ou 1, ou toute autre valeur positive

// « a » et « a » sont équivalents et donnent une valeur neutre égale à zéro
"a".localeCompare("a"); // 0
```

### Trier un tableau

`localeCompare()` permet de trier un tableau sans tenir compte de la casse&nbsp;:

```js
const elements = [
  "réservé",
  "Premier",
  "Cliché",
  "communiqué",
  "café",
  "Adieu",
];
elements.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Vérifier la prise en charge des arguments `locales` et `options`

Les arguments `locales` et `options` ne sont pas pris en charge par tous les navigateurs.

Pour vérifier si une implémentation les prend en charge, utilisez l'argument `"i"` (une exigence selon laquelle les balises de langue illégales sont rejetées) et recherchez une exception {{JSxRef("RangeError")}}&nbsp;:

```js
function localeCompareSupportsLocales() {
  try {
    "toto".localeCompare("truc", "i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Utiliser le paramètre `locales`

Les résultats fournis par la méthode `localeCompare()` peuvent varier selon les locales utilisées. Pour définir la locale à utiliser pour votre application, utilisez l'argument `locales` (éventuellement en incluant des locales de recours)&nbsp;:

```js
console.log("ä".localeCompare("z", "de")); // une valeur négative : en allemand ä est avant z
console.log("ä".localeCompare("z", "sv")); // une valeur positive : en suédois, ä arrive après z
```

### Utiliser le paramètre `options`

Les résultats construits par la méthode `localeCompare()` peuvent être adaptés grâce au paramètre `options`&nbsp;:

```js
// en allemand, ä et a ont la même lettre de base
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// en suédois, ä et a n'ont pas la même lettre de base
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // une valeur positive
```

### Trier des nombres

```js
// Par défaut, "2" > "10"
console.log("2".localeCompare("10")); // 1

// En utilisant un ordre numérique :
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

// En utilisant une balise de locale :
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.Collator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
