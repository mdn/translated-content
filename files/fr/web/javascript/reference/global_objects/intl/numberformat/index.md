---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`Intl.NumberFormat`** permet de formater des nombres en fonction de la locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.NumberFormat")}}

```js interactive-example
const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// Résultat attendu : "123.456,79 €"

// Le yen japonais n'utilise pas d'unité mineure
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// Résultat attendu : "￥123,457"

// Limiter à trois chiffres significatifs
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// Résultat attendu : "1,23,000"
```

## Constructeur

- {{JSxRef("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : Crée un nouvel objet `NumberFormat`.

## Méthodes statiques

- {{JSxRef("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : Retourne un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Propriétés d'instance

Ces propriétés sont définies sur `Intl.NumberFormat.prototype` et partagées par toutes les instances de `Intl.NumberFormat`.

- {{JSxRef("Object/constructor", "Intl.NumberFormat.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'instance de l'objet. Pour les instances de `Intl.NumberFormat`, la valeur initiale est le constructeur {{JSxRef("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat")}}.
- `Intl.NumberFormat.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Intl.NumberFormat"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
  - : La fonction accesseur qui formate un nombre selon la locale et les options de formatage de cet objet `Intl.NumberFormat`.
- {{JSxRef("Intl/NumberFormat/formatRange", "Intl.NumberFormat.prototype.formatRange()")}}
  - : La fonction accesseur qui formate une plage de nombres selon la locale et les options de formatage de l'objet `Intl.NumberFormat` à partir duquel la méthode est appelée.
- {{JSxRef("Intl/NumberFormat/formatRangeToParts", "Intl.NumberFormat.prototype.formatRangeToParts()")}}
  - : Retourne un tableau ({{JSxRef("Array")}}) d'objets représentant la plage de chaînes de caractères de nombres, en parties pouvant être utilisées pour un formatage personnalisé sensible à la locale.
- {{JSxRef("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : Retourne un tableau ({{JSxRef("Array")}}) d'objets représentant la chaîne de caractères du nombre, en parties pouvant être utilisées pour un formatage personnalisé sensible à la locale.
- {{JSxRef("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : Retourne un nouvel objet avec des propriétés reflétant la locale et les options de collation calculées lors de l'initialisation de l'objet.

## Exemples

### Utilisation simple

Sans indiquer de locale ou d'options, le résultat sera une chaîne de caractères avec la locale et les options par défaut&nbsp;:

```js
const nombre = 3500;

console.log(new Intl.NumberFormat().format(nombre));
// "3 500" pour la locale fr
```

### Utiliser `locales`

Cet exemple illustre les variations possibles des formats numériques localisés. Si vous souhaitez que votre application utilise le format de la locale de l'utilisateur, assurez vous de l'indiquer via l'argument `locales` (voire avec d'autres locales de secours)&nbsp;:

```js
const nombre = 123456.789;

// L'allemand utilise la virgule comme séparateur décimal
// et un point pour indiquer les milliers
console.log(new Intl.NumberFormat("de-DE").format(nombre));
// 123.456,789

// Dans la plupart des pays arabophones, on utilise les
// chiffres arabo-hindîs
console.log(new Intl.NumberFormat("ar-EG").format(nombre));
// ١٢٣٤٥٦٫٧٨٩

// L'indien utilise des séparateurs pour les milliers,
//les lakhs et les crores
console.log(new Intl.NumberFormat("en-IN").format(nombre));
// 1,23,456.789

// La clé d'extension nu indique une l'utilisation d'un système numérique
// par exemple le système chinois
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(nombre));
// 一二三,四五六.七八九

// Lorsqu'une locale n'est pas supportée (par exemple le balinais)
// on peut inclure une locale de secours (ici l'indonésien)
console.log(new Intl.NumberFormat(["ban", "id"]).format(nombre));
// 123.456,789
```

### Utiliser `options`

Les résultats fournis peuvent être paramétrés grâce à l'argument [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options)&nbsp;:

```js
const nombre = 123456.789;

// on affiche une devise avec le style "currency"
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    nombre,
  ),
);
// 123.456,79 €

// Le yen japonais n'a pas de centimes
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    nombre,
  ),
);
// ￥123,457

// On se limite ici à trois chiffres significatifs
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    nombre,
  ),
);
// 1,23,000
```

### Utiliser les options `style` et `unit`

```js
console.log(
  new Intl.NumberFormat("pt-PT", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(50),
);
// 50 km/h

console.log(
  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
);
// 16 litres
```

Pour une liste exhaustive des options, voir la page du constructeur [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation pour `Intl.NumberFormat` dans FormatJS <sup>(angl.)</sup>](https://formatjs.github.io/docs/polyfills/intl-numberformat/)
- L'objet {{JSxRef("Intl")}}
- La méthode {{JSxRef("Number.prototype.toLocaleString()")}}
