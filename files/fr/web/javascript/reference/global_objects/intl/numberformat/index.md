---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
---

{{JSRef}}

L'objet **`Intl.NumberFormat`** permet de formater des nombres en fonction de la locale.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

## Constructeur

- [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
  - : Crée un nouvel objet `NumberFormat`.

## Méthodes statiques

- [`Intl.NumberFormat.supportedLocalesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/supportedLocalesOf)
  - : Renvoie un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Méthodes des instances

- [`Intl.NumberFormat.prototype.format()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format)
  - : Un accesseur qui formate un nombre en fonction des options de locale et de formatage fournies par l'objet `Intl.NumberFormat` courant.
- [`Intl.NumberFormat.prototype.formatToParts()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)
  - : Renvoie un [tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) d'objets représentant les fragments de la chaîne de caractères représentant le nombre et qui peuvent être utilisés pour un formatage spécifique en fonction de la locale.
- [`Intl.NumberFormat.prototype.formatRange()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)
  - : Un accesseur qui formate un intervalle de nombres en fonction des options de locale et de formatage fournies par l'objet `Intl.NumberFormat` courant.
- [`Intl.NumberFormat.prototype.formatRangeToParts()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts)
  - : Renvoie un [tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) d'objets représentant les fragments de la chaîne de caractères représentant l'intervalle numérique et qui peuvent être utilisés pour un formatage spécifique en fonction de la locale.
- [`Intl.NumberFormat.prototype.resolvedOptions()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions)
  - : Renvoie un nouvel objet dont les propriétés reflètent les options de locale et de collation calculées à l'initialisation de l'objet.

## Exemples

### Utilisation simple

Sans indiquer de locale ou d'options, le résultat sera une chaîne de caractères avec la locale et les options par défaut&nbsp;:

```js
var nombre = 3500;

console.log(new Intl.NumberFormat().format(nombre));
// → "3 500" pour la locale fr
```

### Utiliser `locales`

Cet exemple illustre les variations possibles des formats numériques localisés. Si vous souhaitez que votre application utilise le format de la locale de l'utilisateur, assurez vous de l'indiquer via l'argument `locales` (voire avec d'autres locales de secours)&nbsp;:

```js
var nombre = 123456.789;

// L'allemand utilise la virgule comme séparateur décimal
// et un point pour indiquer les milliers
console.log(new Intl.NumberFormat("de-DE").format(nombre));
// → 123.456,789

// Dans la plupart des pays arabophones, on utilise les
// chiffres arabo-hindîs
console.log(new Intl.NumberFormat("ar-EG").format(nombre));
// → ١٢٣٤٥٦٫٧٨٩

// L'indien utilise des séparateurs pour les milliers,
//les lakhs et les crores
console.log(new Intl.NumberFormat("en-IN").format(nombre));
// → 1,23,456.789

// La clé d'extension nu indique une l'utilisation d'un système numérique
// par exemple le système chinois
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(nombre));
// → 一二三,四五六.七八九

// Lorsqu'une locale n'est pas supportée (par exemple le balinais)
// on peut inclure une locale de secours (ici l'indonésien)
console.log(new Intl.NumberFormat(["ban", "id"]).format(nombre));
// → 123.456,789
```

### Utiliser `options`

Les résultats fournis peuvent être paramétrés grâce à l'argument `options`&nbsp;:

```js
var nombre = 123456.789;

// on affiche une devise avec le style "currency"
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    nombre,
  ),
);
// → 123.456,79 €

// Le yen japonais n'a pas de centimes
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    nombre,
  ),
);
// → ￥123,457

// On se limite ici à trois chiffres significatifs
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    nombre,
  ),
);
// → 1,23,000
```

### Utiliser les options `style` et `unit`

```js
console.log(
  new Intl.NumberFormat("pt-PT", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(50),
);
// → 50 km/h

console.log(
  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
);
// → 16 litres
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [Une prothèse d'émulation pour `Intl.ListFormat` avec la bibliothèque FormatJS](https://formatjs.io/docs/polyfills/intl-numberformat)
