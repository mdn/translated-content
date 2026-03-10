---
title: "Date : méthode toLocaleDateString()"
short-title: toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`toLocaleDateString()`** des instances de {{JSxRef("Date")}} retourne une chaîne de caractères représentant la partie date de cette date, adaptée à la langue et au format local. Dans les implémentations prenant en charge [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), cette méthode délègue à `Intl.DateTimeFormat`.

Chaque appel à `toLocaleDateString` effectue une recherche dans une grande base de données de chaînes de localisation, ce qui peut être inefficace. Lorsque la méthode est appelée plusieurs fois avec les mêmes arguments, il est préférable de créer un objet {{JSxRef("Intl.DateTimeFormat")}} et d'utiliser sa méthode {{JSxRef("Intl/DateTimeFormat/format", "format()")}}, car un objet `DateTimeFormat` mémorise les arguments passés et peut décider de mettre en cache une partie de la base de données, afin que les appels futurs à `format` puissent rechercher les chaînes de localisation dans un contexte plus restreint.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.toLocaleDateString()", "taller")}}

```js interactive-example
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(event.toLocaleDateString("de-DE", options));
// Résultat attendu (varie selon le fuseau horaire local) : Donnerstag, 20. Dezember 2012

console.log(event.toLocaleDateString("ar-EG", options));
// Résultat attendu (varie selon le fuseau horaire local) : الخميس، ٢٠ ديسمبر، ٢٠١٢

console.log(event.toLocaleDateString(undefined, options));
// Résultat attendu (varie selon le fuseau horaire local et la locale par défaut) : Thursday, December 20, 2012
```

## Syntaxe

```js-nolint
toLocaleDateString()
toLocaleDateString(locales)
toLocaleDateString(locales, options)
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

Une chaîne de caractères représentant la partie date de la date donnée selon les conventions spécifiques à la langue.

Dans les implémentations avec `Intl.DateTimeFormat`, cela équivaut à `new Intl.DateTimeFormat(locales, options).format(date)`, où `options` a été normalisé comme décrit ci-dessus.

> [!NOTE]
> La plupart du temps, le formatage retourné par `toLocaleDateString()` est cohérent. Cependant, le résultat peut varier selon les implémentations, même au sein d'une même locale — ces variations sont prévues et autorisées par la spécification. Il se peut aussi que le résultat ne soit pas celui attendu. Par exemple, la chaîne peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `toLocaleDateString()` à des constantes codées en dur.

## Exemples

### Utiliser la méthode `toLocaleDateString()`

Une utilisation simple de cette méthode sans définir de `locale` retourne une chaîne de caractères formatée dans la locale par défaut et avec les options par défaut.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() sans argument, on utilise donc
// les valeurs par défaut (de l'implémentation)
// pour la locale, et le fuseau horaire
console.log(date.toLocaleDateString());
// → "12/12/2012" si exécuté dans une locale fr et le fuseau horaire UTC+01:00
```

### Vérifier la prise en charge des arguments `locales` et `options`

Les paramètres `locales` et `options` peuvent ne pas être pris en charge dans toutes les implémentations, car la prise en charge de l'API d'internationalisation est facultative, et certains systèmes peuvent ne pas disposer des données nécessaires. Pour les implémentations sans prise en charge de l'internationalisation, `toLocaleDateString()` utilise toujours la locale du système, ce qui peut ne pas être souhaité. Toute implémentation qui prend en charge les paramètres `locales` et `options` doit prendre en charge l'API {{JSxRef("Intl")}}, vous pouvez vérifier l'existence de cette dernière pour la prise en charge&nbsp;:

```js
function toLocaleDateStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Utiliser l'argument `locales`

Cet exemple montre quelques variations dues aux formats de dates localisés. Afin d'obtenir le langage utilisé au sein de l'interface utilisateur de votre application, vérifiez de bien fournir ce langage (et éventuellement des locales de recours) en utilisant l'argument `locales`&nbsp;:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

// l'anglais américain utilise l'ordre mois-jour-année
console.log(date.toLocaleDateString("en-US"));
// "12/20/2012"

// l'anglais britannique utilise l'ordre jour-mois-année
console.log(date.toLocaleDateString("en-GB"));
// "20/12/2012"

// le coréen utilise l'ordre année-mois-jour
console.log(date.toLocaleDateString("ko-KR"));
// "2012. 12. 20."

// le perse utilise un calendrier solaire
console.log(date.toLocaleDateString("fa-IR"));
// "۱۳۹۱/۹/۳۰"

// l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(date.toLocaleDateString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢"

// en ce qui concerne le japonais, les applications peuvent
// souhaiter utiliser le calendrier japonais
// pour lequel 2012 était l'année 24 de l'ère Heisei
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// "24/12/20"

// quand un langage non pris en charge est demandé (par exemple le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
console.log(date.toLocaleDateString(["ban", "id"]));
// "20/12/2012"
```

### Utiliser l'argument `options`

Les résultats fournis par `toLocaleDateString()` peuvent être personnalisés grâce à l'argument `options`&nbsp;:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// fournir le jour de la semaine avec une date longue
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser
// UTC et l'afficher
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleDateString("en-US", options));
// "Thursday, December 20, 2012, UTC"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DateTimeFormat")}}
- La méthode {{JSxRef("Date.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Date.prototype.toLocaleTimeString()")}}
- La méthode {{JSxRef("Date.prototype.toString()")}}
