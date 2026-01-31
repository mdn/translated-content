---
title: "BigInt : méthode toLocaleString()"
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`toLocaleString()`** des valeurs {{JSxRef("BigInt")}} retourne une chaîne de caractères avec une représentation de ce `BigInt` adaptée à la langue. Dans les implémentations qui prennent en charge l'API {{JSxRef("Intl.NumberFormat")}}, cette méthode délègue à `Intl.NumberFormat`.

Chaque appel à `toLocaleString` doit effectuer une recherche dans une grande base de données de chaînes de localisation, ce qui peut être inefficace. Lorsque la méthode est appelée plusieurs fois avec les mêmes arguments, il est préférable de créer un objet {{JSxRef("Intl.NumberFormat")}} et d'utiliser sa méthode {{JSxRef("Intl/NumberFormat/format", "format()")}}, car un objet `NumberFormat` mémorise les arguments qui lui sont passés et peut décider de mettre en cache une partie de la base de données, de sorte que les appels suivants à `format` puissent rechercher les chaînes de localisation dans un contexte plus restreint.

{{InteractiveExample("Démonstration JavaScript&nbsp;: BigInt.prototype.toLocaleString()")}}

```js interactive-example
const bigint = 123456789123456789n;

// L'allemand utilise des points pour séparer les milliers
console.log(bigint.toLocaleString("de-DE"));
// Sortie attendue : "123.456.789.123.456.789"

// Demander un format monétaire
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// Sortie attendue : "123.456.789.123.456.789,00 €"
```

## Syntaxe

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Paramètres

Les paramètres `locales` et `options` personnalisent le comportement de la fonction et permettent aux applications de spécifier la langue dont les conventions de formatage doivent être utilisées.

Dans les implémentations qui prennent en charge l'API [`Intl.NumberFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat), ces paramètres correspondent exactement à ceux du constructeur {{JSxRef("Intl.NumberFormat()")}}. Les implémentations sans prise en charge de `Intl.NumberFormat` doivent ignorer ces deux paramètres, rendant la locale utilisée et la forme de la chaîne retournée entièrement dépendantes de l'implémentation.

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "étiquette de langue BCP 47")}}, ou un tableau de telles chaînes. Correspond au paramètre [`locales`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) du constructeur `Intl.NumberFormat()`.

    Dans les implémentations sans prise en charge de `Intl.NumberFormat`, ce paramètre est ignoré et la locale de l'hôte est généralement utilisée.

- `options` {{Optional_Inline}}
  - : Un objet ajustant le format de sortie. Correspond au paramètre [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) du constructeur `Intl.NumberFormat()`.

    Dans les implémentations sans prise en charge de `Intl.NumberFormat`, ce paramètre est ignoré.

Voir le [constructeur `Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) pour plus de détails sur ces paramètres et leur utilisation.

### Valeur de retour

Une chaîne de caractères représentant le `BigInt` donné selon les conventions spécifiques à la langue.

Dans les implémentations avec `Intl.NumberFormat`, cela équivaut à `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> La plupart du temps, le formatage retourné par `toLocaleString()` est cohérent. Cependant, la sortie peut varier entre les implémentations, même au sein de la même locale — ces variations de sortie sont prévues et autorisées par la spécification. Elle peut également ne pas être ce à quoi vous vous attendez. Par exemple, la chaîne peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `toLocaleString()` à des constantes codées en dur.

## Exemples

### Utiliser `toLocaleString()`

L'utilisation basique de cette méthode sans définir de `locale` renvoie une chaîne de caractères formatée dans la locale par défaut et avec les options par défaut.

```js
const bigint = 3500n;

console.log(bigint.toLocaleString());
// Affichera "3500" en français
```

### Vérifier la prise en charge des paramètres `locales` et `options`

Les paramètres `locales` et `options` peuvent ne pas être pris en charge dans toutes les implémentations, car la prise en charge de l'API d'internationalisation est optionnelle et certains systèmes peuvent ne pas disposer des données nécessaires. Pour les implémentations sans prise en charge de l'internationalisation, `toLocaleString()` utilise toujours la locale du système, ce qui peut ne pas correspondre à vos attentes. Toute implémentation qui prend en charge les paramètres `locales` et `options` doit prendre en charge l'API {{JSxRef("Intl")}}, vous pouvez donc vérifier l'existence de cette dernière pour détecter la prise en charge&nbsp;:

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.NumberFormat === "function"
  );
}
```

### Utiliser `locales`

Cet exemple montre certaines des variations dans les formats de nombres localisés. Pour obtenir le format de la langue utilisée dans l'interface utilisateur de votre application, veillez à spécifier cette langue (et éventuellement des langues de secours) à l'aide de l'argument `locales`&nbsp;:

```js
var bigint = 123456789123456789n;

// En allemand, on utilise les points pour séparer
// les milliers
console.log(bigint.toLocaleString("de-DE"));
// 123.456.789.123.456.789

// La plupart des pays arabes utilise
// des chiffres hindoux-arabes
console.log(bigint.toLocaleString("ar-EG"));
// ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// India utilise des séparateurs pour
// les milliers/lakh/crore
console.log(bigint.toLocaleString("en-IN"));
// 1,23,45,67,89,12,34,56,789

// La clé d'extension requiert un système de numérotation
// par exemple, le système décimal chinois
console.log(bigint.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六,七八九,一二三,四五六,七八九

// Lorsqu'on demande une langue qui peut ne pas être prise
// en charge (ici le balinais), on peut ajouter une autre
// locale qui sera utilisée en recours (ici l'indonésien)
console.log(bigint.toLocaleString(["ban", "id"]));
// 123.456.789.123.456.789
```

### Utiliser `options`

Ici, on personnalise le résultat fourni par `toLocaleString()` grâce à l'argument `options`&nbsp;:

```js
var bigint = 123456789123456789n;

// On utilise un format avec une devise
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456.789.123.456.789,00 €

// Le yen japonais n'utilise pas de sous-unité
console.log(
  bigint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,456,789,123,456,789

// On limite l'écriture aux trois premiers chiffres significatifs
console.log(bigint.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,00,00,00,00,00,00,000
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Intl.NumberFormat")}}
- La méthode {{JSxRef("BigInt.prototype.toString()")}}
