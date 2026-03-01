---
title: "Intl.DateTimeFormat : méthode formatToParts()"
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`formatToParts()`** des instances de {{JSxRef("Intl.DateTimeFormat")}} retourne un tableau d'objets représentant chaque partie de la chaîne de caractères formatée qui serait retournée par {{JSxRef("Intl/DatetimeFormat/format", "format()")}}. Elle est utile pour construire des chaînes de caractères personnalisées à partir des jetons spécifiques à la locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.DateTimeFormat.prototype.formatToParts()", "taller")}}

```js interactive-example
const date = new Date(2012, 5);
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);

const parts = dateTimeFormat.formatToParts(date);
const partValues = parts.map((p) => p.value);

console.log(partValues);
// Résultat attendu : "["Friday", ", ", "June", " ", "1", ", ", "2012"]"
```

## Syntaxe

```js-nolint
formatToParts(date)
```

### Paramètres

- `date` {{Optional_Inline}}
  - : La date à formater. Peut être un objet {{JSxRef("Date")}} ou {{JSxRef("Temporal.PlainDateTime")}}. Il peut également s'agir d'un objet {{JSxRef("Temporal.PlainTime")}}, {{JSxRef("Temporal.PlainDate")}}, {{JSxRef("Temporal.PlainYearMonth")}} ou {{JSxRef("Temporal.PlainMonthDay")}} si l'objet `DateTimeFormat` a été configuré pour afficher au moins une partie pertinente de la date.

    > [!NOTE]
    > Un objet {{JSxRef("Temporal.ZonedDateTime")}} provoquera toujours une exception `TypeError`&nbsp;; utilisez {{JSxRef("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} ou convertissez-le en objet {{JSxRef("Temporal.PlainDateTime")}} à la place.

    Si ce paramètre est omis, la date courante (telle que retournée par {{JSxRef("Date.now()")}}) sera formatée, ce qui peut prêter à confusion, il est donc conseillé de toujours passer explicitement une date.

### Valeur de retour

Un {{JSxRef("Array")}} d'objets contenant la date formatée en parties. Chaque objet possède deux propriétés, `type` et `value`, chacune contenant une chaîne de caractères. La concaténation des chaînes de caractères `value`, dans l'ordre fourni, donnera la même chaîne de caractères que {{JSxRef("Intl/DateTimeFormat/format", "format()")}}. La propriété `type` peut être l'un des [composants de date et d'heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options_des_composants_de_date_et_dheure)&nbsp;:

- `weekday`
  - : Par exemple `"M"`, `"Monday"` ou `"Montag"`.
- `era`
  - : Par exemple `"BC"` ou `"AD"`.
- `year`
  - : Par exemple `"2012"` ou `"96"`.
- `month`
  - : Par exemple `"12"` ou `"January"`.
- `day`
  - : Par exemple `"17"`.
- `dayPeriod`
  - : Par exemple `"AM"`, `"PM"`, `"in the morning"` ou `"noon"`.
- `hour`
  - : Par exemple `"3"` ou `"03"`.
- `minute`
  - : Par exemple `"00"`.
- `second`
  - : Par exemple `"07"` ou `"42"`.
- `fractionalSecond`
  - : Par exemple `"0"`, `"00"` ou `"000"`.
- `timeZoneName`
  - : Par exemple `"UTC"`, `"CET"` ou `"Central European Time"`.

La propriété `type` peut aussi être l'une des suivantes&nbsp;:

- `literal`
  - : Toute chaîne de caractères qui fait partie du modèle de format et qui n'est pas influencée par la `date`&nbsp;; par exemple `"/"`, `", "`, `"o'clock"`, `"de"`, `" "`, etc.
- `relatedYear`
  - : Une année grégorienne à 4 chiffres, dans le cas où la représentation du calendrier serait un `yearName` au lieu d'une année&nbsp;; par exemple `"2019"`. Voir [années nommées](#named_years) pour plus de détails.
- `yearName`
  - : Le nom donné à l'année, généralement dans les calendriers sans le concept d'années continues&nbsp;; par exemple `"geng-zi"`.
- `unknown`
  - : Réservé à tout jeton qui n'est reconnu comme aucun des précédents&nbsp;; cela devrait être rarement rencontré.

## Exemples

### Utiliser la méthode `formatToParts()`

La méthode `format()` retourne des chaînes de caractères localisées et opaques qui ne peuvent pas être manipulées directement&nbsp;:

```js
const date = Date.UTC(2012, 11, 17, 3, 0, 42);

const formatter = new Intl.DateTimeFormat("en-us", {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
  timeZone: "UTC",
});

formatter.format(date);
// "Monday, 12/17/2012, 3:00:42 AM"
```

Cependant, pour de nombreuses interfaces utilisateur, on peut vouloir personnaliser la mise en forme de cette chaîne de caractères. La méthode `formatToParts()` permet une mise en forme dans le souci de la locale en manipulant les différentes composantes&nbsp;:

```js
formatter.formatToParts(date);

// return value:
[
  { type: "weekday", value: "Monday" },
  { type: "literal", value: ", " },
  { type: "month", value: "12" },
  { type: "literal", value: "/" },
  { type: "day", value: "17" },
  { type: "literal", value: "/" },
  { type: "year", value: "2012" },
  { type: "literal", value: ", " },
  { type: "hour", value: "3" },
  { type: "literal", value: ":" },
  { type: "minute", value: "00" },
  { type: "literal", value: ":" },
  { type: "second", value: "42" },
  { type: "fractionalSecond", value: "000" },
  { type: "literal", value: " " },
  { type: "dayPeriod", value: "AM" },
];
```

L'information est maintenant disponible séparément et peut être mise en forme et concaténée à nouveau de façon personnalisée. Par exemple en utilisant {{JSxRef("Array.prototype.map()")}}, [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions), une [instruction switch](/fr/docs/Web/JavaScript/Reference/Statements/switch), [littéraux de gabarit](/fr/docs/Web/JavaScript/Reference/Template_literals), et {{JSxRef("Array.prototype.join()")}}, pour insérer du balisage supplémentaire pour certains composants.

```js
const dateString = formatter
  .formatToParts(date)
  .map(({ type, value }) => {
    switch (type) {
      case "dayPeriod":
        return `<em>${value}</em>`;
      default:
        return value;
    }
  })
  .join("");

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42 <em>AM</em>"
```

### Années nommées

Certains calendriers utilisent des années nommées&nbsp;; par exemple, les calendriers chinois et tibétains utilisent un [cycle sexagésimal](https://fr.wikipedia.org/wiki/Cycle_sexag%C3%A9simal_chinois) de 60 ans. Ces calendriers n'ont pas de moyen universel de numéroter de manière univoque chaque année, donc les années sont désambiguïsées par rapport aux années correspondantes du calendrier grégorien. Dans ce cas, lorsque le `DateTimeFormat` est configuré pour afficher le composant année, un jeton pour `relatedYear` est renvoyé au lieu de `year`.

```js
const df = new Intl.DateTimeFormat("zh-u-ca-chinese");
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// valeur de retour :
[
  { type: "relatedYear", value: "2012" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

Parfois, la combinaison des options de composant date-heure correspond à un format qui inclut également un `yearName`. Il n'existe pas d'option distincte qui contrôle si `yearName` est affiché ou non. Par exemple, les options ci-dessous définissent `month` sur `"long"` et entraînent un jeton `yearName`, bien que `year` soit toujours `"numeric"`&nbsp;:

```js
const opts = { year: "numeric", month: "long", day: "numeric" };
const df = new Intl.DateTimeFormat("zh-u-ca-chinese", opts);
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// valeur de retour :
[
  { type: "relatedYear", value: "2012" },
  { type: "yearName", value: "壬辰" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

Parce que `format()` concatène simplement toutes les chaînes `value`, vous verrez l'année grégorienne et le nom de l'année ensemble dans la sortie dans ce cas.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DateTimeFormat")}}
- La méthode {{JSxRef("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
