---
title: "Intl.DateTimeFormat : méthode format()"
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`format()`** des instances de {{JSxRef("Intl.DateTimeFormat")}} formate une date selon la locale et les options de format de cet objet `Intl.DateTimeFormat`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.DateTimeFormat.prototype.format()", "taller")}}

```js interactive-example
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date = new Date(2012, 5);

const dateTimeFormat1 = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat1.format(date));
// Résultat attendu : "петак, 1. јун 2012."

const dateTimeFormat2 = new Intl.DateTimeFormat("en-GB", options);
console.log(dateTimeFormat2.format(date));
// Résultat attendu : "Friday, 1 June 2012"

const dateTimeFormat3 = new Intl.DateTimeFormat("en-US", options);
console.log(dateTimeFormat3.format(date));
// Résultat attendu : "Friday, June 1, 2012"
```

## Syntaxe

```js-nolint
format(date)
```

### Paramètres

- `date`
  - : La date à formater. Peut être un objet {{JSxRef("Date")}} ou {{JSxRef("Temporal.PlainDateTime")}}. Il peut également s'agir d'un objet {{JSxRef("Temporal.PlainTime")}}, {{JSxRef("Temporal.PlainDate")}}, {{JSxRef("Temporal.PlainYearMonth")}} ou {{JSxRef("Temporal.PlainMonthDay")}} si l'objet `DateTimeFormat` a été configuré pour afficher au moins une partie pertinente de la date.

    > [!NOTE]
    > Un objet {{JSxRef("Temporal.ZonedDateTime")}} provoquera toujours une exception `TypeError`&nbsp;; utilisez {{JSxRef("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} ou convertissez-le en objet {{JSxRef("Temporal.PlainDateTime")}} à la place.

    Omettre ce paramètre entraîne le formatage de la date courante (telle que retournée par {{JSxRef("Date.now()")}}), ce qui peut prêter à confusion, il est donc conseillé de toujours passer explicitement une date.

### Valeur de retour

Une chaîne de caractères représentant la `date` donnée, formatée selon la locale et les options de format de cet objet {{JSxRef("Intl.DateTimeFormat")}}.

> [!NOTE]
> La plupart du temps, le format retourné par `format()` est cohérent. Toutefois, le résultat peut varier selon les implémentations, même au sein d'une même locale — ces variations de sortie sont prévues et permises par la spécification. Il se peut aussi que le résultat ne soit pas celui attendu. Par exemple, la chaîne de caractères peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `format()` à des constantes codées en dur.

## Exemples

### Utiliser la méthode `format()`

Utilisez la fonction accesseur `format` pour formater une seule date, ici pour la Serbie&nbsp;:

```js
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateTimeFormat = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat.format(new Date()));
// → "недеља, 7. април 2013."
```

### Utiliser `format()` avec `map()`

Utilisez la fonction accesseur `format` pour formater toutes les dates d'un tableau. Notez que la fonction est liée à l'objet {{JSxRef("Intl.DateTimeFormat")}} dont elle provient, vous pouvez donc la passer directement à {{JSxRef("Array.prototype.map()")}}.

```js
const a = [new Date(2012, 8), new Date(2012, 11), new Date(2012, 3)];
const options = { year: "numeric", month: "long" };
const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", options);
const formatted = a.map(dateTimeFormat.format);
console.log(formatted.join("; "));
// → "setembro de 2012; dezembro de 2012; abril de 2012"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DateTimeFormat")}}
