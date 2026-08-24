---
title: "Number : méthode toLocaleString()"
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`toLocaleString()`** de {{JSxRef("Number")}} retourne une chaîne de caractères représentant le nombre en tenant compte de la locale. Dans les implémentations prenant en charge l'API {{JSxRef("Intl.NumberFormat")}}, cette méthode délègue le formatage à `Intl.NumberFormat`.

Chaque fois que `toLocaleString` est appelé, il doit effectuer une recherche dans une grande base de données de chaînes de caractères de localisation, ce qui est potentiellement inefficace. Lorsque la méthode est appelée de nombreuses fois avec les mêmes arguments, il est préférable de créer un objet {{JSxRef("Intl.NumberFormat")}} et d'utiliser sa méthode {{JSxRef("Intl/NumberFormat/format", "format()")}}, car un objet `NumberFormat` se souvient des arguments qui lui ont été passés et peut décider de mettre en cache une partie de la base de données, de sorte que les appels futurs à `format` peuvent rechercher des chaînes de caractères de localisation dans un contexte plus restreint.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.prototype.toLocaleString()")}}

```js interactive-example
function eArabic(x) {
  return x.toLocaleString("ar-EG");
}

console.log(eArabic(123456.789));
// Résultat attendu : "١٢٣٬٤٥٦٫٧٨٩"

console.log(eArabic("123456.789"));
// Résultat attendu : "123456.789"

console.log(eArabic(NaN));
// Résultat attendu : "ليس رقم"
```

## Syntaxe

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Paramètres

Les paramètres `locales` et `options` permettent à l'application de définir les options de formatage selon la langue utilisée.

Dans les implémentations qui prennent en charge [l'API `Intl.NumberFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat), ces paramètres correspondent exactement aux paramètres du constructeur [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). Les implémentations sans prise en charge de `Intl.NumberFormat` sont invitées à ignorer les deux paramètres, ce qui rend la locale utilisée et la forme de la chaîne de caractères retournée entièrement dépendantes de l'implémentation.

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}, ou un tableau de telles chaînes de caractères. Correspond au paramètre [`locales`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) du constructeur `Intl.NumberFormat()`.

    Dans les implémentations sans prise en charge de `Intl.NumberFormat`, ce paramètre est ignoré et la locale de l'hôte est généralement utilisée.

- `options` {{Optional_Inline}}
  - : Un objet ajustant le format de sortie. Correspond au paramètre [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) du constructeur `Intl.NumberFormat()`.

    Dans les implémentations sans prise en charge de `Intl.NumberFormat`, ce paramètre est ignoré.

Voir le [constructeur `Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) pour plus de détails sur ces paramètres et sur la manière de les utiliser.

### Valeur de retour

Une chaîne de caractères représentant le nombre donné en tenant compte des conventions spécifiques à la langue.

Dans les implémentations qui prennent en charge [l'API `Intl.NumberFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat), cela équivaut à `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> La plupart du temps, le formatage retourné par `toLocaleString()` est cohérent. Cependant, la sortie peut varier entre les implémentations, même au sein de la même locale — les variations de sortie sont prévues et autorisées par la spécification. Elle peut également ne pas être ce à quoi vous vous attendez. Par exemple, la chaîne de caractères peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `toLocaleString()` à des constantes codées en dur.

## Exemples

### Utiliser `toLocaleString()`

Une utilisation de cette méthode sans définition de `locale` retourne une chaîne de caractères formatée dans la locale par défaut et avec les options par défaut.

```js
const nombre = 3500;

console.log(nombre.toLocaleString()); // Affiche "3 500" pour la locale française
```

### Vérifier la prise en charge des arguments `locales` et `options`

Les paramètres `locales` et `options` peuvent ne pas être pris en charge dans toutes les implémentations, parce que la prise en charge pour les API d'internationalisation est optionnelle et certains systèmes n'ont pas les données nécessaires. Pour les implémentations sans prise en charge de l'internationalisation, `toLocaleString()` utilise toujours la locale du système, ce qui peut ne pas être ce que vous souhaitez. Comme toute implémentation qui prend en charge les paramètres `locales` et `options` doit prendre en charge l'API {{JSxRef("Intl")}}, vous pouvez vérifier l'existence de cette dernière pour en vérifier la prise en charge&nbsp;:

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

Cet exemple illustre les variations possibles entre les différents formats localisés. Afin que le format de langue utilisé soit celui de la personne qui utilise votre site ou votre application, assurez-vous de fournir la langue utilisée (ainsi que des langues de secours) en utilisant l'argument `locales`&nbsp;:

```js
const nombre = 123456.789;

// Pour la locale allemande, on utilise un point comme séparateur
// pour les milliers et une virgule comme séparateur décimal
console.log(nombre.toLocaleString("de-DE"));
// 123.456,789

// Les locales arabes, dans la plupart des pays arabophones, utilisent
// les chiffres arabes
console.log(nombre.toLocaleString("ar-EG"));
// ١٢٣٤٥٦٫٧٨٩

// En Inde, on utilise des séparateurs de milliers/lakh/crore
console.log(nombre.toLocaleString("en-IN"));
// 1,23,456.789

// La clé d'extension nu indique un système numérique, ici le système chinois décimal
console.log(nombre.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六.七八九

// quand on souhaite utiliser un langage qui n'est pas pris en charge, on peut
// inclure un langage de secours. Exemple ici avec le balinais et l'indonésien
console.log(nombre.toLocaleString(["ban", "id"]));
// 123.456,789
```

### Utiliser `options`

Les résultats fournis par `toLocaleString` peuvent être adaptés en utilisant l'argument `options`&nbsp;:

```js
const nombre = 123456.789;

// on formate selon une devise
console.log(
  nombre.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456,79 €

// le yen japonais ne possède pas de centimes
console.log(
  nombre.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,457

// on se limite à trois chiffres significatifs
console.log(nombre.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,000

// on utilise la langue du système pour la mise en
// forme des nombres
const num = 30000.65;
console.log(
  num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
);
// "30,000.65" quand l'anglais est la langue par défaut
// "30.000,65" quand l'allemand est la langue par défaut
// "30 000,65" quand le français est la langue par défaut
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.NumberFormat")}}
- La méthode {{JSxRef("Number.prototype.toString()")}}
