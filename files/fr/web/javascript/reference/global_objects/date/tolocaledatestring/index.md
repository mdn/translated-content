---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
---

{{JSRef}}

La méthode **`toLocaleDateString()`** renvoie une chaine de caractères correspondant à la date (le fragment de l'objet qui correspond à la date&nbsp;: jour, mois, année) exprimée selon une locale donnée et pour le fuseau horaire de l'agent utilisateur.

Les arguments `locales` et `options` permettent aux applications de définir le langage utilisé pour les conventions de format et permettent de personnaliser le comportement de la fonction. Les anciennes implémentations ignoraient ces arguments, la locale utilisée et le format de la chaine dépendaient uniquement de l'implémentation.

{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html")}}

## Syntaxe

```js
toLocaleDateString();
toLocaleDateString(locales);
toLocaleDateString(locales, options);
```

### Paramètres

Les arguments `locales` et `options` permettent d'adapter le comportement de la fonction et aux applications d'indiquer la locale pour laquelle utiliser les conventions de formatage.

Pour les implémentations qui ignorent les arguments `locales` et `options`, la locale utilisée et la forme de la chaîne de caractères résultante dépendent intégralement de l'implémentation.

Voir [la page du constructeur `Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) pour plus de détails sur ces paramètres et leur utilisation.

La valeur par défaut pour chaque propriété composant la date/heure est [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), mais si les propriétés `weekday`, `year`, `month`, `day` valent toutes [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), alors `year`, `month`, et `day` sont considérés comme `"numeric"`.

### Valeur de retour

Une chaîne de caractères qui représente le jour de la date courante (l'objet [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) sur lequel est appelée la méthode), dont le format dépend des options de locale fournies.

## Performance

Lorsqu'on formate une grande quantité de dates, mieux vaudra créer un objet [`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) et utiliser la fonction fournie par sa propriété [`format`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format).

## Exemples

### Utiliser `toLocaleDateString()`

Voici un usage simple qui ne définit pas de locale&nbsp;: une chaine de caractères dans une locale et avec des options par défaut est renvoyée.

```js
let date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() sans argument, on utilise donc
// les valeurs par défaut (de l'implémentation)
// pour la locale, et le fuseau horaire
console.log(date.toLocaleDateString());
// → "12/12/2012" si exécuté dans une locale fr et le fuseau horaire UTC+01:00
```

### Vérifier la prise en charge des arguments `locales` et `options`

Afin de vérifier si l'implémentation prend en charge les arguments `locales` et `options`, vous pouvez utiliser le test suivant qui vérifie si les locales incorrectes sont rejetées avec une exception `RangeError`&nbsp;:

```js
function toLocaleDateStringSupportsLocales() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Utiliser l'argument `locales`

Cet exemple montre quelques variations dues aux formats de dates localisés. Afin d'obtenir le langage utilisé au sein de l'interface utilisateur de votre application, vérifiez de bien fournir ce langage (et éventuellement des locales de recours) en utilisant l'argument `locales`&nbsp;:

```js
let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

// l'anglais américain utilise l'ordre mois-jour-année
console.log(date.toLocaleDateString("en-US"));
// → "12/20/2012"

// l'anglais britannique utilise l'ordre jour-mois-année
console.log(date.toLocaleDateString("en-GB"));
// → "20/12/2012"

// le coréen utilise l'ordre année-mois-jour
console.log(date.toLocaleDateString("ko-KR"));
// → "2012. 12. 20."

// le perse utilise un calendrier solaire
console.log(date.toLocaleDateString("fa-IR"));
// → "۱۳۹۱/۹/۳۰"

// l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(date.toLocaleDateString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢"

// en ce qui concerne le japonais, les applications peuvent
// souhaiter utiliser le calendrier japonais
// pour lequel 2012 était l'année 24 de l'ère Heisei
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// → "24/12/20"

// quand un langage non pris en charge est demandé (par exemple le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
console.log(date.toLocaleDateString(["ban", "id"]));
// → "20/12/2012"
```

### Utiliser l'argument `options`

Les résultats fournis par `toLocaleDateString()` peuvent être personnalisés grâce à l'argument `options`&nbsp;:

```js
let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// fournir le jour de la semaine avec une date longue
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser
// UTC et l'afficher
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleDateString("en-US", options));
// → "Thursday, December 20, 2012, UTC"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [`Date.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
- [`Date.prototype.toLocaleTimeString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)
- [`Date.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)
