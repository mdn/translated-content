---
title: "Date : méthode toLocaleTimeString()"
short-title: toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`toLocaleTimeString()`** des instances de {{JSxRef("Date")}} retourne une chaîne de caractères représentant cette heure, adaptée à la langue et au fuseau horaire local. Dans les implémentations prenant en charge [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), cette méthode délègue à `Intl.DateTimeFormat`.

Chaque appel à `toLocaleTimeString` effectue une recherche dans une grande base de données de chaînes de localisation, ce qui peut être inefficace. Lorsque la méthode est appelée plusieurs fois avec les mêmes arguments, il est préférable de créer un objet {{JSxRef("Intl.DateTimeFormat")}} et d'utiliser sa méthode {{JSxRef("Intl/DateTimeFormat/format", "format()")}}, car un objet `DateTimeFormat` mémorise les arguments passés et peut décider de mettre en cache une partie de la base de données, afin que les appels futurs à `format` puissent rechercher les chaînes de localisation dans un contexte plus restreint.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.toLocaleTimeString()")}}

```js interactive-example
// Selon le fuseau horaire, vos résultats peuvent varier
const event = new Date("August 19, 1975 23:15:30 GMT+00:00");

console.log(event.toLocaleTimeString("en-US"));
// Résultat attendu : "1:15:30 AM"

console.log(event.toLocaleTimeString("it-IT"));
// Résultat attendu : "01:15:30"

console.log(event.toLocaleTimeString("ar-EG"));
// Résultat attendu : "١٢:١٥:٣٠ ص"
```

## Syntaxe

```js-nolint
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
```

### Paramètres

Les paramètres `locales` et `options` personnalisent le comportement de la fonction et permettent aux applications d'indiquer la langue dont les conventions de formatage doivent être utilisées.

Dans les implémentations prenant en charge [l'API `Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), ces paramètres correspondent exactement à ceux du constructeur [`Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Les implémentations sans prise en charge de `Intl.DateTimeFormat` doivent ignorer ces deux paramètres, rendant la locale utilisée et la forme de la chaîne retournée entièrement dépendantes de l'implémentation.

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec un {{Glossary("BCP 47 language tag", "identifiant de langue BCP 47")}}, ou un tableau de telles chaînes. Correspond au paramètre [`locales`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) du constructeur `Intl.DateTimeFormat()`.

    Dans les implémentations sans prise en charge de `Intl.DateTimeFormat`, ce paramètre est ignoré et la locale de l'hôte est généralement utilisée.

- `options` {{Optional_Inline}}
  - : Un objet ajustant le format de sortie. Correspond au paramètre [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) du constructeur `Intl.DateTimeFormat()`. L'option `timeStyle` doit être indéfinie, sinon une {{JSxRef("TypeError")}} sera levée. Si `dayPeriod`, `hour`, `minute`, `second`, et `fractionalSecondDigits` sont tous indéfinis, alors `hour`, `minute` et `second` seront définis sur `"numeric"`.

    Dans les implémentations sans prise en charge de `Intl.DateTimeFormat`, ce paramètre est ignoré.

Voir [le constructeur `Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) pour plus de détails sur ces paramètres et leur utilisation.

### Valeur de retour

Une chaîne de caractères représentant la portion temporelle de la date indiquée selon des conventions propres à la langue.

Dans les implémentations prenant en charge `Intl.DateTimeFormat`, cela équivaut à `new Intl.DateTimeFormat(locales, options).format(date)`, où `options` a été normalisé comme décrit ci‑dessus.

> [!NOTE]
> La plupart du temps, le format renvoyé par `toLocaleTimeString()` est cohérent. Toutefois, le résultat peut varier selon les implémentations, même au sein d'une même locale — ces variations sont voulues et permises par la spécification. Il se peut aussi que le résultat ne soit pas celui attendu. Par exemple, la chaîne de caractères peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Il ne faut pas comparer les résultats de `toLocaleTimeString()` à des constantes codées en dur.

## Exemples

### Utiliser la méthode `toLocaleTimeString()`

L'utilisation basique de cette méthode sans définir de `locale` retourne une chaîne de caractères formatée selon la locale par défaut et avec les options par défaut.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() sans argument, on utilise donc
// les valeurs par défaut (de l'implémentation)
// pour la locale, et le fuseau horaire
console.log(date.toLocaleTimeString());
// "04:00:00" si exécuté dans une locale fr et le fuseau horaire CEST
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

// l'anglais américain utilise une heure sur 12h avec AM/PM
console.log(date.toLocaleTimeString("en-US"));
// "4:00:00 AM"

// l'anglais britanique utilise une heure sur 24h
console.log(date.toLocaleTimeString("en-GB"));
// "04:00:00"

// le coréen utilise une heure sur 12h avec AM/PM
console.log(date.toLocaleTimeString("ko-KR"));
// "오전 4:00:00"

/ l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(date.toLocaleTimeString("ar-EG"));
// "٤:٠٠:٠٠ ص"

// quand un langage non support est demandé (ex : le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
console.log(date.toLocaleTimeString(["ban", "id"]));
// "4.00.00"
```

### Utiliser `options`

Les résultats fournis par `toLocaleTimeString()` peuvent être personnalisés grâce à l'argument `options`&nbsp;:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// une application peut vouloir utiliser UTC et le montrer
const options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// "3:00:00 AM GMT"

// parfois, même les USA ont besoin du format sur 24h
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// "19:00:00"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DateTimeFormat")}}
- La méthode {{JSxRef("Date.prototype.toLocaleDateString()")}}
- La méthode {{JSxRef("Date.prototype.toLocaleString()")}}
- La méthode {{JSxRef("Date.prototype.toTimeString()")}}
- La méthode {{JSxRef("Date.prototype.toString()")}}
