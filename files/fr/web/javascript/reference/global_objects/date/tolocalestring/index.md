---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
---

{{JSRef}}

La méthode **`toLocaleString()`** renvoie une chaine de caractères représentant la date selon une locale.

Les arguments `locales` et `options` permettent aux applications de définir le langage à utiliser pour les conventions de format et permettent de personnaliser le comportement de la fonction.

Les anciennes implémentations ignoraient ces arguments, la locale et le format de la chaine alors utilisés dépendaient uniquement de l'implémentation.

{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}

## Syntaxe

```js
toLocaleString();
toLocaleString(locales);
toLocaleString(locales, options);
```

### Paramètres

Les arguments `locales` et `options` permettent d'adapter le comportement de la fonction et aux applications d'indiquer la locale pour laquelle utiliser les conventions de formatage.

Pour les implémentations qui ignorent les arguments `locales` et `options`, la locale utilisée et la forme de la chaîne de caractères résultante dépendent intégralement de l'implémentation.

Voir [la page du constructeur `Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) pour plus de détails sur ces paramètres et leur utilisation.

La valeur par défaut de chacun des composants de la date-heure vaut [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), mais si les propriétés `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second` sont toutes [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), alors `weekday`, `year`, `month`, `day`, `hour`, `minute` et `second` sont supposés être `"numeric"`.

### Valeur de retour

Une chaîne de caractères représentant la date indiquée selon des conventions de locales spécifiques.

## Exemples

### Utiliser `toLocaleString()`

Voici un usage simple qui ne définit pas de locale&nbsp;: une chaine de caractères dans une locale et avec des options par défaut est renvoyée.

```js
let date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() sans argument, on utilise donc
// les valeurs par défaut (de l'implémentation)
// pour la locale, et le fuseau horaire
console.log(date.toLocaleString());
// → "12/12/2012, 04:00:00" si exécuté dans une locale fr et le fuseau horaire UTC+01:00
```

### Vérifier la prise en charge des arguments `locales` et `options`

Afin de vérifier si l'implémentation prend en charge les arguments `locales` et `options`, vous pouvez utiliser le test suivant qui vérifie si les locales incorrectes sont rejetées avec une exception `RangeError`&nbsp;:

```js
function toLocaleStringSupportsLocales() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Utiliser `locales`

Cet exemple montre quelques variations dues aux formats de dates localisés. Afin d'obtenir le langage utilisé au sein de l'interface utilisateur de votre application, vérifiez de bien fournir ce langage (et éventuellement des locales de recours) en utilisant l'argument `locales`&nbsp;:

```js
let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

// l'anglais américain utilise l'ordre mois-jour-année
console.log(date.toLocaleString("en-US"));
// → "12/20/2012, 4:00:00 AM"

// l'anglais britannique utilise l'ordre jour-mois-année
console.log(date.toLocaleString("en-GB"));
// → "20/12/2012, 04:00:00"

// le coréen utilise l'ordre année-mois-jour
console.log(date.toLocaleString("ko-KR"));
// → "2012. 12. 20. 오전 4:00:00"

// l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(date.toLocaleString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

// en ce qui concerne le japonais, les applications peuvent
// souhaiter utiliser le calendrier japonais
// pour lequel 2012 était l'année 24 de l'ère Heisei
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// → "H24/12/20 4:00:00"

// quand un langage non pris en charge est demandé (par exemple le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
console.log(date.toLocaleString(["ban", "id"]));
// → "20/12/2012 04.00.00"
```

### Utiliser `options`

Les résultats fournis par `toLocaleString()` peuvent être personnalisés grâce à l'argument `options`&nbsp;:

```js
let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// obtenir le jour de la semaine avec une date longue
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser UTC et le rendre visible
options.timeZone = "UTC";
options.timeZoneName = "short";

console.log(date.toLocaleString("en-US", options));
// → "Thursday, December 20, 2012, UTC"

// parfois, même les USA ont besoin d'avoir une heure sur 24h
console.log(date.toLocaleString("en-US", { hour12: false }));
// → "12/19/2012, 19:00:00"
```

### Éviter de comparer des dates formatées et des valeurs statiques

La plupart du temps, le format renvoyé par `toLocaleString()` est cohérent. Toutefois, cela peut évoluer à l'avenir et n'est pas garanti pour l'ensemble des langues (de telles variations sont souhaitables et permises par la spécification).

Ainsi, IE et Edge ajoutent des caractères de contrôle bidirectionnels autour des dates afin que le texte produit ait une directionalité cohérente avec le texte avec lequel elles seront concaténées.

Aussi, mieux vaut ne pas comparer un résultat fourni par `toLocaleString()` avec une valeur statique&nbsp;:

```js example-bad
"1/1/2019, 01:00:00" ===
  new Date("2019-01-01T00:00:00Z").toLocaleString("en-US");
// true pour Firefox et les autres
// false pour IE et Edge
```

> **Note :** Voir aussi [ce fil StackOverflow](https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results) pour plus de détails et d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [`Date.prototype.toLocaleDateString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
- [`Date.prototype.toLocaleTimeString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)
- [`Date.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)
