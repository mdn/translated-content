---
title: "Temporal.ZonedDateTime : méthode toLocaleString()"
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toLocaleString()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} renvoie une chaîne de caractères représentant cette date et heure de manière sensible à la langue. Dans les implémentations avec le support de [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), cette méthode délègue à `Intl.DateTimeFormat` et passe cette date et heure convertie en {{JSxRef("Temporal.Instant")}} (car `Intl.DateTimeFormat` ne peut pas formater directement un `Temporal.ZonedDateTime`).

Chaque fois que `toLocaleString` est appelé, il doit effectuer une recherche dans une grande base de données de chaînes de caractères de localisation, ce qui peut être inefficace. Lorsque la méthode est appelée plusieurs fois avec les mêmes arguments, il est préférable de créer un objet {{JSxRef("Intl.DateTimeFormat")}} et d'utiliser sa méthode {{JSxRef("Intl/DateTimeFormat/format", "format()")}}, car un objet `DateTimeFormat` se souvient des arguments qui lui ont été passés et peut décider de mettre en cache une partie de la base de données, de sorte que les appels futurs à `format` peuvent rechercher des chaînes de caractères de localisation dans un contexte plus restreint. Cependant, actuellement, `Intl.DateTimeFormat` ne prend pas en charge le formatage des objets `Temporal.ZonedDateTime`, vous devez donc les convertir en objets `Temporal.Instant` avant de les passer à `format()`.

## Syntaxe

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Paramètres

Les paramètres `locales` et `options` personnalisent le comportement de la fonction et permettent aux applications de définir la langue dont les conventions de formatage doivent être utilisées.

Dans les implémentations qui prennent en charge [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), ces paramètres correspondent exactement aux paramètres du constructeur [`Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Les implémentations sans support de `Intl.DateTimeFormat` retournent exactement la même chaîne de caractères que {{JSxRef("Temporal/ZonedDateTime/toString", "toString()")}}, en ignorant les deux paramètres.

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}, ou un tableau de telles chaînes de caractères. Correspond au paramètre [`locales`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) du constructeur `Intl.DateTimeFormat()`.
- `options` {{Optional_Inline}}
  - : Un objet permettant de régler le format de sortie. Correspond au paramètre [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) du constructeur `Intl.DateTimeFormat()`. Si le calendrier de cette une date et heure est `"iso8601"`, l'option `calendar` doit être fournie avec la même valeur&nbsp;; sinon, si le calendrier de cette date et heure est `"iso8601"`, l'option `calendar` peut être n'importe quelle valeur. L'option `timeZone` ne doit pas être fournie, car elle est automatiquement définie sur le {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} de la date et heure. En ce qui concerne les [options des composants de date et heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options_des_composants_de_date_et_dheure) et les raccourcis de style (`dateStyle` et `timeStyle`), les options doivent suivre l'une de ces formes&nbsp;:
    - Ne fournir aucune d'entre elles&nbsp;: `year`, `month`, `day`, `hour`, `minute` et `second` seront définis par défaut sur `"numeric"`.
    - Fournir au moins l'une des options `dateStyle` ou `timeStyle`&nbsp;: les composants de date et heure seront définis selon le style défini et la locale.
    - Fournir certaines options des composants de date et heure. Seuls les composants de date et heure définis seront inclus dans la sortie.

Voir le [constructeur `Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) pour plus de détails sur ces paramètres et comment les utiliser.

### Valeur de retour

Une chaîne de caractères représentant la date et l'heure données selon les conventions spécifiques à la langue.

Dans les implémentations avec `Intl.DateTimeFormat`, cela équivaut à `new Intl.DateTimeFormat(locales, { ...options, timeZone: dateTime.timeZoneId }).format(dateTime.toInstant())`, où `options` a été normalisé comme décrit ci-dessus.

> [!NOTE]
> La plupart du temps, le formatage retourné par `toLocaleString()` est cohérent. Cependant, la sortie peut varier entre les implémentations, même au sein du même locale — les variations de sortie sont prévues par la conception et autorisées par la spécification. Elle peut également ne pas être ce à quoi vous vous attendez. Par exemple, la chaîne de caractères peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `toLocaleString()` à des constantes codées en dur.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si l'une des options n'est pas du type attendu.

## Exemples

### Utiliser la méthode `toLocaleString()`

L'utilisation de base de cette méthode sans définir de `locale` retourne une chaîne de caractères formatée dans le locale par défaut et avec les options par défaut.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56-04:00[America/New_York]",
);

console.log(zdt.toLocaleString()); // 8/1/2021, 12:34:56 PM EDT (en supposant le locale en-US)
```

Si le calendrier de la date ne correspond pas au calendrier par défaut du locale, et que le calendrier de la date n'est pas `iso8601`, une option `calendar` explicite doit être fournie avec la même valeur.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56+09:00[Asia/Tokyo][u-ca=japanese]",
);
// Le locale ja-JP utilise le calendrier grégorien par défaut
zdt.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1 12:34:56 JST
```

### Utiliser `toLocaleString()` avec des options

Vous pouvez personnaliser les parties de la date incluses dans la sortie en fournissant le paramètre `options`.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56+09:00[Asia/Tokyo][u-ca=japanese]",
);
zdt.toLocaleString("ja-JP", {
  calendar: "japanese",
  dateStyle: "full",
  timeStyle: "full",
}); // 令和3年8月1日日曜日 12時34分56秒 日本標準時
zdt.toLocaleString("ja-JP", {
  calendar: "japanese",
  year: "numeric",
  month: "long",
  hour: "numeric",
  timeZoneName: "shortGeneric",
}); // 令和3年8月 12時 JST
zdt.toLocaleString("ja-JP", {
  calendar: "japanese",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
}); // 令和3年 12:34
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- L'objet {{JSxRef("Intl.DateTimeFormat")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
