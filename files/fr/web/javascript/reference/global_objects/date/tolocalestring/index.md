---
title: "Date : méthode toLocaleString()"
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`toLocaleString()`** des instances de {{JSxRef("Date")}} retourne une chaîne de caractères représentant cette date, adaptée à la langue et au fuseau horaire local. Dans les implémentations prenant en charge [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), cette méthode délègue à `Intl.DateTimeFormat`.

Chaque appel à `toLocaleString` effectue une recherche dans une grande base de données de chaînes de localisation, ce qui peut être inefficace. Lorsque la méthode est appelée plusieurs fois avec les mêmes arguments, il est préférable de créer un objet {{JSxRef("Intl.DateTimeFormat")}} et d'utiliser sa méthode {{JSxRef("Intl/DateTimeFormat/format", "format()")}}, car un objet `DateTimeFormat` mémorise les arguments passés et peut décider de mettre en cache une partie de la base de données, afin que les appels futurs à `format` puissent rechercher les chaînes de localisation dans un contexte plus restreint.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.toLocaleString()")}}

```js interactive-example
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// L'anglais britannique utilise l'ordre jour-mois-année et l'heure sur 24 heures sans AM/PM
console.log(event.toLocaleString("en-GB", { timeZone: "UTC" }));
// Résultat attendu : "20/12/2012, 03:00:00"

// Le coréen utilise l'ordre année-mois-jour et l'heure sur 12 heures avec AM/PM
console.log(event.toLocaleString("ko-KR", { timeZone: "UTC" }));
// Résultat attendu : "2012. 12. 20. 오전 3:00:00"
```

## Syntaxe

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Paramètres

Les paramètres `locales` et `options` personnalisent le comportement de la fonction et permettent aux applications d'indiquer la langue dont les conventions de formatage doivent être utilisées.

Dans les implémentations prenant en charge [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), ces paramètres correspondent exactement à ceux du constructeur [`Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Les implémentations sans prise en charge de `Intl.DateTimeFormat` doivent ignorer ces deux paramètres, rendant la locale utilisée et la forme de la chaîne retournée entièrement dépendantes de l'implémentation.

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec un {{Glossary("BCP 47 language tag", "identifiant de langue BCP 47")}}, ou un tableau de telles chaînes. Correspond au paramètre [`locales`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) du constructeur `Intl.DateTimeFormat()`.

    Dans les implémentations sans prise en charge de `Intl.DateTimeFormat`, ce paramètre est ignoré et la locale de l'hôte est généralement utilisée.

- `options` {{Optional_Inline}}
  - : Un objet ajustant le format de sortie. Correspond au paramètre [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) du constructeur `Intl.DateTimeFormat()`. L'option `timeStyle` doit être indéfinie, sinon une {{JSxRef("TypeError")}} sera levée. Si `weekday`, `year`, `month` et `day` sont toutes indéfinies, alors `year`, `month` et `day` seront définies sur `"numeric"`.

    Dans les implémentations sans prise en charge de `Intl.DateTimeFormat`, ce paramètre est ignoré.

Voir [le constructeur `Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) pour plus de détails sur ces paramètres et leur utilisation.

### Valeur de retour

Une chaîne de caractères représentant la date indiquée selon des conventions de locales spécifiques.

Dans les implémentations prenant en charge `Intl.DateTimeFormat`, cela équivaut à `new Intl.DateTimeFormat(locales, options).format(date)`.

> [!NOTE]
> La plupart du temps, le format renvoyé par `toLocaleString()` est cohérent. Toutefois, le résultat peut varier selon les implémentations, même au sein d'une même locale — ces variations sont voulues et permises par la spécification. Il se peut aussi que le résultat ne soit pas celui attendu. Par exemple, la chaîne peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Il ne faut pas comparer les résultats de `toLocaleString()` à des constantes codées en dur.

## Exemples

### Utiliser la méthode `toLocaleString()`

Voici un usage simple qui ne définit pas de `locale` ou de `options` — cela dépend de l'implémentation et retourne une chaîne de caractères formatée selon la locale et le fuseau horaire par défaut, avec les options par défaut.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

console.log(date.toLocaleString());
// "12/11/2012, 7:00:00 PM" si exécuté dans une locale en-US avec le fuseau horaire America/Los_Angeles
```

### Vérifier la prise en charge des arguments `locales` et `options`

Les paramètres `locales` et `options` peuvent ne pas être pris en charge dans toutes les implémentations, car la prise en charge de l'API d'internationalisation est facultative, et certains systèmes peuvent ne pas disposer des données nécessaires. Pour les implémentations sans prise en charge de l'internationalisation, `toLocaleString()` utilise toujours la locale du système, ce qui peut ne pas être souhaité. Toute implémentation qui prend en charge les paramètres `locales` et `options` doit prendre en charge l'API {{JSxRef("Intl")}}, vous pouvez vérifier l'existence de cette dernière pour la prise en charge&nbsp;:

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Utiliser `locales`

Cet exemple montre quelques variations dues aux formats de dates localisés. Afin d'obtenir le langage utilisé au sein de l'interface utilisateur de votre application, vérifiez de bien fournir ce langage (et éventuellement des locales de recours) en utilisant l'argument `locales`&nbsp;:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

// l'anglais américain utilise l'ordre mois-jour-année
console.log(date.toLocaleString("en-US"));
// "12/20/2012, 4:00:00 AM"

// l'anglais britannique utilise l'ordre jour-mois-année
console.log(date.toLocaleString("en-GB"));
// "20/12/2012, 04:00:00"

// le coréen utilise l'ordre année-mois-jour
console.log(date.toLocaleString("ko-KR"));
// "2012. 12. 20. 오전 4:00:00"

// l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(date.toLocaleString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

// en ce qui concerne le japonais, les applications peuvent
// souhaiter utiliser le calendrier japonais
// pour lequel 2012 était l'année 24 de l'ère Heisei
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// "H24/12/20 4:00:00"

// quand un langage non pris en charge est demandé (par exemple le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
console.log(date.toLocaleString(["ban", "id"]));
// "20/12/2012 04.00.00"
```

### Utiliser `options`

Les résultats fournis par `toLocaleString()` peuvent être personnalisés grâce à l'argument `options`&nbsp;:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// obtenir le jour de la semaine avec une date longue
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser UTC et le rendre visible
options.timeZone = "UTC";
options.timeZoneName = "short";

console.log(date.toLocaleString("en-US", options));
// "Thursday, December 20, 2012, UTC"

// parfois, même les USA ont besoin d'avoir une heure sur 24h
console.log(date.toLocaleString("en-US", { hour12: false }));
// "12/19/2012, 19:00:00"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DateTimeFormat")}}
- La méthode {{JSxRef("Date.prototype.toLocaleDateString()")}}
- La méthode {{JSxRef("Date.prototype.toLocaleTimeString()")}}
- La méthode {{JSxRef("Date.prototype.toString()")}}
