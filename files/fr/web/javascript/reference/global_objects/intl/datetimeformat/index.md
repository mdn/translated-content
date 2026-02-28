---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`Intl.DateTimeFormat`** permet le formatage des dates et heures sensible à la langue.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.DateTimeFormat", "taller")}}

```js interactive-example
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Résultats ci-dessous supposent le fuseau horaire UTC - vos résultats peuvent varier

// Définir le format de date par défaut pour la langue (locale)
console.log(new Intl.DateTimeFormat("en-US").format(date));
// Résultat attendu : "12/20/2020"

// Définir le format de date par défaut pour la langue avec une langue de secours (dans ce cas l'indonésien)
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// Résultat attendu : "20/12/2020"

// Définir le format de date et d'heure en utilisant les options de "style" (c'est-à-dire full, long, medium, short)
console.log(
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(date),
);
// Résultat attendu : "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```

## Constructeur

- {{JSxRef("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : Crée un nouvel objet `Intl.DateTimeFormat`.

## Méthodes statiques

- {{JSxRef("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : Retourne un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Propriétés d'instance

Ces propriétés sont définies sur `Intl.DateTimeFormat.prototype` et partagées par toutes les instances de `Intl.DateTimeFormat`.

- {{JSxRef("Object/constructor", "Intl.DateTimeFormat.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Intl.DateTimeFormat`, la valeur initiale est le constructeur {{JSxRef("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat")}}.
- `Intl.DateTimeFormat.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Intl.DateTimeFormat"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
  - : Fonction d'accès qui formate une date selon la locale et les options de format de cet objet `DateTimeFormat`.
- {{JSxRef("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
  - : Cette méthode prend deux [dates](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) et formate l'intervalle de temps de la façon la plus concise selon la locale et les options fournies lors de l'instanciation de `DateTimeFormat`.
- {{JSxRef("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
  - : Cette méthode prend deux [dates](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) et retourne un tableau d'objets contenant les fragments spécifiques à la locale représentant chaque partie de l'intervalle de temps formaté.
- {{JSxRef("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
  - : Retourne un {{JSxRef("Array")}} d'objets représentant la chaîne de caractères de la date en parties pouvant être utilisées pour un formatage personnalisé selon la locale.
- {{JSxRef("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
  - : Retourne un nouvel objet dont les propriétés reflètent la locale et les options de format calculées lors de l'initialisation de l'objet.

## Exemples

### Utiliser `DateTimeFormat()`

Dans une utilisation basique sans préciser de locale, `DateTimeFormat()` utilise la locale et les options par défaut.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// DateTimeFormat sans arguments dépend de l'implémentation,
// la locale par défaut, et le fuseau horaire par défaut
console.log(new Intl.DateTimeFormat().format(date));
// → "20/12/2012" avec une locale fr-FR et un fuseau horaire CEST
```

### Utiliser l'argument `locales`

Cet exemple montre quelques variations de formatage pour les dates et les heures localisées. Afin d'obtenir la locale utilisée au sein de l'interface utilisateur de votre application, vérifiez de bien fournir cette locale (et éventuellement des locales de recours) en utilisant l'argument `locales`&nbsp;:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Les résultats ci-dessous utilisent le fuseau horaire America/Los_Angeles (UTC-0800, heure normale du Pacifique)

// L'anglais américain utilise l'ordre mois-jour-année
console.log(new Intl.DateTimeFormat("en-US").format(date));
// "12/20/2012"

// L'anglais britannique utilise l'ordre jour-mois-année
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// "20/12/2012"

// Le coréen utilise l'ordre année-mois-jour
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// "2012. 12. 20."

// L'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// "٢٠‏/١٢‏/٢٠١٢"

// Pour le japonais, les applications peuvent souhaiter utiliser le calendrier japonais,
// pour lequel 2012 était l'année 24 de l'ère Heisei
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// "H24/12/20"

// Lorsqu'une langue demandée peut ne pas être prise en charge, comme
// le balinais, inclure une langue de secours, dans ce cas l'indonésien
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// "20/12/2012"
```

### Utiliser l'argument `options`

Les formats de la date et de l'heure peuvent être personnalisés en utilisant l'argument `options`&nbsp;:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

// fournir le jour de la semaine avec une date longue
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser UTC et le rendre visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "Thursday, December 20, 2012, GMT"

// parfois, il faut plus de précision
options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00 pm AEDT"

// voire beaucoup plus de précision
options.fractionalSecondDigits = 3; // le nombre de chiffres décimaux pour les fractions de secondes
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// → "2:00:00.200 pm AEDT"

// parfois, même les USA ont besoin d'afficher une heure sur 24h
options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};
console.log(new Intl.DateTimeFormat("en-US", options));
// "2:00:00.200 pm AEDT"

// pour définir des options tout en utilisant la locale par défaut du navigateur, utilisez undefined
console.log(new Intl.DateTimeFormat(undefined, options).format(date));
// "12/19/2012, 19:00:00"

// on peut aussi inclure la période du jour
options = { hour: "numeric", dayPeriod: "short" };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// 10 at night
```

Le calendrier et la numération utilisés peuvent être choisis indépendamment avec l'argument `options`&nbsp;:

```js
const options = { calendar: "chinese", numberingSystem: "arab" };
const dateFormat = new Intl.DateTimeFormat(undefined, options);
const usedOptions = dateFormat.resolvedOptions();

console.log(usedOptions.calendar);
// "chinese"

console.log(usedOptions.numberingSystem);
// "arab"

console.log(usedOptions.timeZone);
// "America/New_York" (the users default timezone)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation pour `Intl.DateTimeFormat` avec la bibliothèque FormatJS <sup>(angl.)</sup>](https://formatjs.github.io/docs/polyfills/intl-datetimeformat/)
- L'objet {{JSxRef("Intl")}}
- La méthode {{JSxRef("Date.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Date.prototype.toLocaleDateString()")}}
- La méthode {{JSxRef("Date.prototype.toLocaleTimeString()")}}
- La méthode {{JSxRef("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
