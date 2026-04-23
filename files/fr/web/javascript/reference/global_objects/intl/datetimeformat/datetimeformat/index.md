---
title: Constructeur Intl.DateTimeFormat()
short-title: Intl.DateTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 5e0388c53dfc75003e83f79181797c3f66455971
---

Le constructeur **`Intl.DateTimeFormat()`** crée des objets {{JSxRef("Intl.DateTimeFormat")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur Intl.DateTimeFormat()", "taller")}}

```js interactive-example
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Résultats ci-dessous supposent le fuseau horaire UTC - vos résultats peuvent varier

// Définir le format de date par défaut pour la langue (locale)
console.log(new Intl.DateTimeFormat("en-US").format(date));
// Résultat attendu : "12/20/2020"

// Définir le format de date par défaut pour la langue avec une langue de secours (dans ce cas indonésien)
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// Résultat attendu : "20/12/2020"

// Définir le format de date et d'heure en utilisant les options "style" (c'est-à-dire full, long, medium, short)
console.log(
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(date),
);
// Résultat attendu : "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```

## Syntaxe

```js-nolint
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)

Intl.DateTimeFormat()
Intl.DateTimeFormat(locales)
Intl.DateTimeFormat(locales, options)
```

> [!NOTE]
> `Intl.DateTimeFormat()` peut être appelé avec ou sans {{JSxRef("Operators/new", "new")}}. Les deux créent une nouvelle instance de `Intl.DateTimeFormat`. Cependant, il existe un comportement spécial lorsque la fonction est appelée sans `new` et que la valeur de `this` est une autre instance de `Intl.DateTimeFormat`&nbsp;; voir [Valeur de retour](#valeur_de_retour).

### Paramètres

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} ou une instance {{JSxRef("Intl.Locale")}}, ou un tableau de tels identifiants de locale. La locale par défaut de l'environnement d'exécution est utilisée lorsque `undefined` est passé ou lorsqu'aucun des identifiants de locale spécifiés n'est pris en charge. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).

    The following Unicode extension keys are allowed:
    - `nu`
      - : Voir [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Voir [`calendar`](#calendar).
    - `hc`
      - : Voir [`hourCycle`](#hourcycle).

- `options` {{Optional_Inline}}
  - : Un objet. Pour faciliter la lecture, la liste des propriétés est divisée en sections en fonction de leur objectif, y compris [options de locale](#options_de_locale), [options des composants de date et d'heure](#options_des_composants_de_date_et_dheure) et [raccourcis de style](#raccourcis_de_style).

#### Options de locale

- `localeMatcher`
  - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'information sur cette option, voir [Identification et négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale).
- `calendar`
  - : Le calendrier à utiliser, tel que `"chinese"`, `"gregory"`, `"persian"`, etc. Pour une liste des types de calendriers pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge)&nbsp;; la valeur par défaut dépend de la locale. Cette option peut aussi être définie via la clé d'extension Unicode `ca`&nbsp;; si les deux sont fournies, cette propriété d'`options` prévaut.
- `numberingSystem`
  - : Le système de numération à utiliser pour le formatage des nombres, tel que `"arab"`, `"hans"`, `"mathsans"`, etc. Pour une liste des types de systèmes de numération pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_systèmes_de_numérotation_pris_en_charge)&nbsp;; la valeur par défaut dépend de la locale. Cette option peut aussi être définie via la clé d'extension Unicode `nu`&nbsp;; si les deux sont fournies, cette propriété de `options` prévaut.
- `hour12`
  - : Indique s'il faut utiliser une horloge sur 12 heures (par opposition à 24 heures). Les valeurs possibles sont `true` et `false`&nbsp;; la valeur par défaut dépend de la locale. Lorsque `true`, cette option définit `hourCycle` sur `"h11"` ou `"h12"`, selon la locale. Lorsque `false`, elle définit `hourCycle` sur `"h23"`. `hour12` surcharge à la fois la balise d'extension de locale `hc` et l'option `hourCycle`, si l'une ou l'autre ou les deux sont présentes.
- `hourCycle`
  - : Le cycle horaire à utiliser. Les valeurs possibles sont `"h11"`, `"h12"`, `"h23"`, et `"h24"`&nbsp;; la valeur par défaut est déduite de `hour12` et de la locale. Cette option peut aussi être définie via la clé d'extension Unicode `hc`&nbsp;; si les deux sont fournies, cette propriété de `options` prévaut.
- `timeZone`
  - : Le fuseau horaire à utiliser. Peut être n'importe quel [nom de fuseau horaire IANA](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages), y compris des identifiants nommés comme `"UTC"`, `"America/New_York"`, et `"Etc/GMT+8"`, et des identifiants d'offset comme `"+01:00"`, `"-2359"`, et `"+23"`. La valeur par défaut est le fuseau horaire de l'environnement d'exécution, le même fuseau horaire utilisé par {{JSxRef("Date.prototype.toString()")}}.

#### Options des composants de date et d'heure

- `weekday`
  - : La représentation du jour de la semaine. Les valeurs possibles sont&nbsp;:
    - `"long"`
      - : Par exemple, `Thursday`
    - `"short"`
      - : Par exemple, `Thu`
    - `"narrow"`
      - : Par exemple, `T`. Deux jours différents de la semaine peuvent avoir la même représentation avec ce style dans certaines locales (par exemple, les styles étroits de `Tuesday` et `Thursday` sont tous deux `T` dans la locale `en-US`).
- `era`
  - : La représentation d'une ère. Les valeurs possibles sont&nbsp;:
    - `"long"`
      - : Par exemple, `Anno Domini`
    - `"short"`
      - : Par exemple, `AD`
    - `"narrow"`
      - : Par exemple, `A`
- `year`
  - : La représentation de l'année. Les valeurs possibles sont `"numeric"` et `"2-digit"`.
- `month`
  - : La représentation du mois. Les valeurs possibles sont&nbsp;:
    - `"numeric"`
      - : Par exemple, `3`
    - `"2-digit"`
      - : Par exemple, `03`
    - `"long"`
      - : Par exemple, `March`
    - `"short"`
      - : Par exemple, `Mar`
    - `"narrow"`
      - : Par exemple, `M`. Deux mois différents peuvent avoir la même représentation avec ce style dans certaines locales (par exemple, les styles étroits de `March` et `May` sont tous deux `M` dans la locale `en-US`).
- `day`
  - : La représentation du jour. Les valeurs possibles sont `"numeric"` et `"2-digit"`.
- `dayPeriod`
  - : Le style de formatage utilisé pour les périodes du jour comme «&nbsp;in the morning&nbsp;», «&nbsp;am&nbsp;», «&nbsp;noon&nbsp;», «&nbsp;n&nbsp;», etc. Les valeurs possibles sont
    `"narrow"`, `"short"` et `"long"`.

    > [!NOTE]
    > Cette option applique un effet uniquement si une horloge sur 12 heures (`hourCycle: "h12"` ou `hourCycle: "h11"`) est utilisée. De nombreuses locales utilisent la même chaîne de caractères quelle que soit la longueur indiquée.

- `hour`
  - : La représentation de l'heure. Les valeurs possibles sont `"numeric"` et `"2-digit"`.
- `minute`
  - : La représentation des minutes. Les valeurs possibles sont `"numeric"` et `"2-digit"`.
- `second`
  - : La représentation des secondes. Les valeurs possibles sont `"numeric"` et `"2-digit"`.
- `fractionalSecondDigits`
  - : Le nombre de chiffres utilisés pour représenter la partie décimale des secondes (tout chiffre supplémentaire sera tronqué). Les valeurs possibles sont de `1` à `3`.
- `timeZoneName`
  - : La représentation localisée du nom du fuseau horaire. Les valeurs possibles sont&nbsp;:
    - `"long"`
      - : Forme localisée longue (par exemple, `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Forme localisée courte (par exemple&nbsp;: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Format GMT localisé court (par exemple, `GMT-8`)
    - `"longOffset"`
      - : Format GMT localisé long (par exemple, `GMT-08:00`)
    - `"shortGeneric"`
      - : Format générique court sans localisation (par exemple&nbsp;: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Format générique long sans localisation (par exemple&nbsp;: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > L'affichage du fuseau horaire pourra basculer sur un autre format si la chaîne de caractères nécessaire n'est pas disponible. Ainsi, les formats non-localisés devraient afficher le fuseau horaire sans indication de pays/ville, à la manière de «&nbsp;Pacific Time&nbsp;». Si ce n'est pas possible, le moteur pourra utiliser un nom de fuseau horaire localisé comme «&nbsp;Los Angeles Time&nbsp;».

##### Valeurs par défaut des composants de date et d'heure

Si l'une des options des composants de date et d'heure est spécifiée, alors `dateStyle` et `timeStyle` doivent être à `undefined`. Si toutes les options des composants de date et d'heure ainsi que `dateStyle`/`timeStyle` sont à `undefined`, certaines options par défaut pour les composants de date et d'heure sont définies, et dépendent de l'objet avec lequel la méthode de formatage a été appelée&nbsp;:

- Lors du formatage de {{JSxRef("Temporal.PlainDate")}} et {{JSxRef("Date")}}, `year`, `month` et `day` ont pour valeur par défaut `"numeric"`.
- Lors du formatage de {{JSxRef("Temporal.PlainTime")}}, `hour`, `minute` et `second` ont pour valeur par défaut `"numeric"`.
- Lors du formatage de {{JSxRef("Temporal.PlainYearMonth")}}, `year` et `month` ont pour valeur par défaut `"numeric"`.
- Lors du formatage de {{JSxRef("Temporal.PlainMonthDay")}}, `month` et `day` ont pour valeur par défaut `"numeric"`.
- Lors du formatage de {{JSxRef("Temporal.PlainDateTime")}} et {{JSxRef("Temporal.Instant")}}, `year`, `month`, `day`, `hour`, `minute` et `second` ont pour valeur par défaut `"numeric"`.

##### Correspondance de format

Les implémentations doivent prendre en charge l'affichage d'au moins les sous-ensembles suivants de composants de date et d'heure&nbsp;:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Les styles de composants de date et d'heure demandés peuvent ne pas correspondre directement à un format valide pris en charge par la locale, donc la correspondance de format permet de définir comment rapprocher les styles demandés du format pris en charge le plus proche.

- `formatMatcher`
  - : L'algorithme de correspondance de format à utiliser. Les valeurs possibles sont `"basic"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. L'algorithme pour `"best fit"` est défini par l'implémentation, et `"basic"` est [défini par la spécification <sup>(angl.)</sup>](https://tc39.es/ecma402/#sec-basicformatmatcher). Cette option n'est utilisée que lorsque `dateStyle` et `timeStyle` sont à `undefined` (ainsi chaque format de composant de date et d'heure peut être personnalisé individuellement).

#### Raccourcis de style

- `dateStyle`
  - : Le [style de formatage de date <sup>(angl.)</sup>](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh) à utiliser. Les valeurs possibles sont `"full"`, `"long"`, `"medium"`, et `"short"`. Il s'étend à des styles pour `weekday`, `day`, `month`, `year`, et `era`, avec la combinaison exacte de valeurs dépendant de la locale. Lors du formatage d'objets tels que {{JSxRef("Temporal.PlainDate")}}, {{JSxRef("Temporal.PlainYearMonth")}}, et {{JSxRef("Temporal.PlainMonthDay")}}, `dateStyle` ne résoudra que les champs pertinents pour l'objet.
- `timeStyle`
  - : Le [style de formatage de l'heure <sup>(angl.)</sup>](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu) à utiliser. Les valeurs possibles sont `"full"`, `"long"`, `"medium"`, et `"short"`. Il s'étend à des styles pour `hour`, `minute`, `second`, et `timeZoneName`, avec la combinaison exacte de valeurs dépendant de la locale.

> [!NOTE]
> `dateStyle` et `timeStyle` peuvent être utilisés ensemble, mais pas avec d'autres options de composants de date et d'heure (par exemple, `weekday`, `hour`, `month`, etc.).

Vous pouvez formater différents types d'objets selon les raccourcis de style inclus&nbsp;:

- Si `dateStyle` est défini, vous pouvez formater des objets {{JSxRef("Temporal.PlainDate")}}, {{JSxRef("Temporal.PlainYearMonth")}}, et {{JSxRef("Temporal.PlainMonthDay")}}.
- Si `timeStyle` est défini, vous pouvez formater des objets {{JSxRef("Temporal.PlainTime")}}.
- Si `dateStyle` ou `timeStyle` est défini, vous pouvez formater des objets {{JSxRef("Temporal.PlainDateTime")}} et {{JSxRef("Date")}}.

### Valeur de retour

Un nouvel objet `Intl.DateTimeFormat`.

> [!NOTE]
> Le texte ci-dessous décrit un comportement marqué comme «&nbsp;optionnel&nbsp;» par la spécification. Il se peut qu'il ne fonctionne pas dans tous les environnements. Consultez le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs).

Normalement, `Intl.DateTimeFormat()` peut être appelé avec ou sans {{JSxRef("Operators/new", "new")}}, et une nouvelle instance `Intl.DateTimeFormat` est retournée dans les deux cas. Cependant, si la valeur de {{JSxRef("Operators/this", "this")}} est un objet qui est {{JSxRef("Operators/instanceOf", "instanceOf")}} de `Intl.DateTimeFormat` (cela ne signifie pas nécessairement qu'il a été créé via `new Intl.DateTimeFormat`&nbsp;; cela signifie simplement qu'il possède `Intl.DateTimeFormat.prototype` dans sa chaîne de prototypes), alors la valeur de `this` est retournée à la place, avec le nouvel objet `Intl.DateTimeFormat` caché dans une propriété `[Symbol(IntlLegacyConstructedSymbol)]` (un symbole unique réutilisé entre les instances).

```js
const formateur = Intl.DateTimeFormat.call(
  { __proto__: Intl.DateTimeFormat.prototype },
  "en-US",
  { dateStyle: "full" },
);
console.log(Object.getOwnPropertyDescriptors(formateur));
// {
//   [Symbol(IntlLegacyConstructedSymbol)]: {
//     value: DateTimeFormat [Intl.DateTimeFormat] {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }
```

Notez qu'il n'y a qu'une seule véritable instance `Intl.DateTimeFormat` ici&nbsp;: celle cachée dans `[Symbol(IntlLegacyConstructedSymbol)]`. Appeler les méthodes [`format()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) et [`resolvedOptions()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) sur `formatter` utilisera correctement les options stockées dans cette instance, mais appeler toutes les autres méthodes (par exemple, [`formatRange()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) échouera&nbsp;: «&nbsp;TypeError: formatRange method called on incompatible Object&nbsp;», car ces méthodes ne consultent pas les options de l'instance cachée.

Ce comportement, appelé `ChainDateTimeFormat`, ne se produit pas lorsque `Intl.DateTimeFormat()` est appelé sans `new` mais avec `this` défini sur autre chose qui n'est pas un `instanceof Intl.DateTimeFormat`. Si vous l'appelez directement comme `Intl.DateTimeFormat()`, la valeur de `this` est [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl), et une nouvelle instance `Intl.DateTimeFormat` est créée normalement.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `locales` ou `options` contient des valeurs invalides.

## Exemples

### Utiliser `DateTimeFormat()`

Voici une utilisation simple du constructeur sans indiquer de locale. `DateTimeFormat` utilise alors la locale par défaut et les options par défaut.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString sans arguments dépend de l'implémentation,
// de la locale par défaut et du fuseau horaire par défaut
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" si exécuté avec la locale (langue) en-US et le fuseau horaire America/Los_Angeles (UTC-0800)
```

### Utiliser `timeStyle` et `dateStyle`

```js
const tempsCourt = new Intl.DateTimeFormat("fr", {
  timeStyle: "short",
});
console.log(tempsCourt.format(Date.now())); // "09:45"

const dateCourte = new Intl.DateTimeFormat("fr", {
  dateStyle: "short",
});
console.log(dateCourte.format(Date.now())); // "29/12/2021"

const tempsMoyen = new Intl.DateTimeFormat("fr", {
  timeStyle: "medium",
  dateStyle: "short",
});
console.log(tempsMoyen.format(Date.now())); // "29/12/2021 09:46:55"
```

Cependant, les styles exacts des composants (dépendants de la locale) auxquels ils aboutissent ne sont pas inclus dans les [options résolues](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions). Cela garantit que le résultat de `resolvedOptions()` peut être passé directement au constructeur `Intl.DateTimeFormat()` (car un objet `options` contenant à la fois `dateStyle` ou `timeStyle` et des styles individuels de composants de date ou d'heure n'est pas valide).

```js
console.log(dateCourte.resolvedOptions().year); // undefined
```

### Utiliser `dayPeriod`

Utilisez l'option `dayPeriod` pour produire une chaîne de caractères pour les moments de la journée («&nbsp;in the morning&nbsp;», «&nbsp;at night&nbsp;», «&nbsp;noon&nbsp;», etc.). Notez que cela fonctionne uniquement lors du formatage pour une horloge sur 12 heures (`hourCycle: 'h12'` ou `hourCycle: 'h11'`) et que pour de nombreuses locales, les chaînes sont identiques quelle que soit la valeur passée pour `dayPeriod`.

```js
const date = Date.UTC(2012, 11, 17, 4, 0, 42);

console.log(
  new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "short",
    timeZone: "UTC",
  }).format(date),
);
// > 4 at night"  (même formatage pour en-GB quelle que soit la valeur de dayPeriod)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "narrow",
    timeZone: "UTC",
  }).format(date),
);
// > "4 mat."  (même formatage pour fr avec narrow ou short)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "long",
    timeZone: "UTC",
  }).format(date),
);
// > "4 du matin"
```

### Utiliser `timeZoneName`

On utilise l'option `timeZoneName` pour produire une chaîne de caractères représentant le fuseau horaire ("GMT", "Pacific Time", etc.).

```js
const date = Date.UTC(2021, 11, 17, 3, 0, 42);
const nomsZoneTemps = [
  "short",
  "long",
  "shortOffset",
  "longOffset",
  "shortGeneric",
  "longGeneric",
];

for (const nomZone of nomsZoneTemps) {
  // Faire quelque chose avec currentValue
  const formateur = new Intl.DateTimeFormat("fr", {
    timeZone: "Europe/Paris",
    timeZoneName: nomZone,
  });
  console.log(`${nomZone}: ${formateur.format(date)}`);
}

// Résultat attendu :
// short : 17/12/2021, UTC+1
// long : 17/12/2021, heure normale d'Europe centrale
// shortOffset : 17/12/2021, UTC+1
// longOffset : 17/12/2021, UTC+01:00
// shortGeneric : 17/12/2021, heure : France
// longGeneric : 17/12/2021, heure d'Europe centrale
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DateTimeFormat")}}
- La méthode {{JSxRef("Intl.supportedValuesOf()")}}
- L'objet {{JSxRef("Intl")}}
