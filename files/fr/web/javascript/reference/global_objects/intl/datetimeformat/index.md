---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/DateTimeFormat
browser-compat: javascript.builtins.Intl.DateTimeFormat
---
{{JSRef}}

L'objet **`Intl.DateTimeFormat`** est un constructeur d'objets permettant de formater des dates et des heures selon une langue.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html")}}

## Constructeur

- [`Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
  - : Crée un nouvel objet `Intl.DateTimeFormat`.

## Méthodes statiques

- [`Intl.DateTimeFormat.supportedLocalesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf)
  - : Renvoie un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Méthodes des instances

- [`Intl.DateTimeFormat.prototype.format()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format)
  - : Une fonction d'accès qui formate une date selon les options de locale et de format fournies par l'objet `DateTimeFormat` courant.
- [`Intl.DateTimeFormat.prototype.formatToParts()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)
  - : Renvoie un [tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) d'objets représentant la date sous forme de plusieurs chaînes de caractères qui peuvent être utilisées pour un formatage selon la locale.
- [`Intl.DateTimeFormat.prototype.resolvedOptions()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions)
  - : Renvoie un nouvel objet dont les propriétés reflètent les options de locale et de collation calculées à l'initialisation de l'objet.
- [`Intl.DateTimeFormat.prototype.formatRange()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)
  - : Cette méthode prend deux [dates](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) comme arguments et formate l'intervalle de temps de la façon la plus concise selon les options de locale et de format fournis à l'instanciation de l'objet `DateTimeFormat`.
- [`Intl.DateTimeFormat.prototype.formatRangeToParts()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts)
  - : Cette méthode prend deux [dates](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) comme arguments et renvoie un tableau d'objets qui sont chacun des fragments de l'intervalle de temps formaté selon la locale.

## Exemples

### Utiliser `DateTimeFormat()`

Dans une utilisation basique sans préciser de locale, `DateTimeFormat()` utilise la locale et les options par défaut.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// DateTimeFormat sans arguments dépend de l'implémentation,
// la locale par défaut, et le fuseau horaire par défaut
console.log(new Intl.DateTimeFormat().format(date));
// → "20/12/2012" avec une locale fr-FR et un fuseau horaire CEST
```

### Utiliser `locales`

Cet exemple montre quelques variations de formatage pour les dates et les heures localisées. Afin d'obtenir la locale utilisée au sein de l'interface utilisateur de votre application, vérifiez de bien fournir cette locale (et éventuellement des locales de recours) en utilisant l'argument `locales`&nbsp;:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

// l'anglais américain utilise l'ordre mois-jour-année
console.log(new Intl.DateTimeFormat('en-US').format(date));
// → "12/20/2012"

// l'anglais britannique utilise l'ordre jour-mois-année
console.log(new Intl.DateTimeFormat('en-GB').format(date));
// → "20/12/2012"

// le coréen utilise l'ordre année-mois-jour
console.log(new Intl.DateTimeFormat('ko-KR').format(date));
// → "2012. 12. 20."

// l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(new Intl.DateTimeFormat('ar-EG').format(date));
// → "٢٠‏/١٢‏/٢٠١٢"

// en ce qui concerne le japonais, les applications peuvent
// souhaiter utiliser le calendrier japonais
// pour lequel 2012 était l'année 24 de l'ère Heisei
console.log(new Intl.DateTimeFormat('ja-JP-u-ca-japanese').format(date));
// → "24/12/20"

// quand une locale non prise en charge est demandée (par exemple le balinais)
// il est possible de fournir une locale de recours (ici l'indonésien)
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// → "20/12/2012"
```

### Utiliser `options`

Les formats de la date et de l'heure peuvent être personnalisés en utilisant l'argument `options`&nbsp;:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// fournir le jour de la semaine avec une date longue
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
console.log(new Intl.DateTimeFormat('de-DE', options).format(date));
// → "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser UTC et le rendre visible
options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log(new Intl.DateTimeFormat('en-US', options).format(date));
// → "Thursday, December 20, 2012, GMT"

// parfois, il faut plus de précision
options = {hour: "numeric", minute: "numeric", second: "numeric",
           timeZoneName: "short"};
console.log(new Intl.DateTimeFormat('en-AU', options).format(date));
// → "2:00:00 pm AEDT"

// voire beaucoup plus de précision
options.fractionalSecondDigits = 3; // le nombre de chiffres décimaux pour les fractions de secondes
console.log(new Intl.DateTimeFormat('en-AU', options).format(date));
// → "2:00:00.200 pm AEDT"

// parfois, même les USA ont besoin d'afficher une heure sur 24h
options = {year: "numeric", month: "numeric", day: "numeric",
           hour: "numeric", minute: "numeric", second: "numeric",
           hour12: false};
console.log(new Intl.DateTimeFormat('en-US', options));
// → "12/19/2012, 19:00:00"

// pour utiliser la locale par défaut du navigateur, on utilise default
console.log(new Intl.DateTimeFormat('default', options).format(date));
// → "12/19/2012, 19:00:00" (peut varier selon la locale du navigateur)

// on peut aussi inclure la période du jour
options = {hour: "numeric", dayPeriod: "short"};
console.log(new Intl.DateTimeFormat('en-US', options).format(date));
// → "4 at night"
```

Le calendrier et la numération utilisés peuvent être choisis indépendamment avec l'argument `options`&nbsp;:

```js
var options = {calendar: 'chinese', numberingSystem: 'arab'};
var dateFormat = new Intl.DateTimeFormat('default', options);
var usedOptions = dateFormat.resolvedOptions();

console.log(usedOptions.calendar);
// → "chinese"

console.log(usedOptions.numberingSystem);
// → "arab"

console.log(usedOptions.timeZone);
// → "Europe/Paris" (le fuseau horaire par défaut)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [Une prothèse d'émulation pour `Intl.DateTimeFormat` avec la bibliothèque FormatJS](https://formatjs.io/docs/polyfills/intl-datetimeformat)
