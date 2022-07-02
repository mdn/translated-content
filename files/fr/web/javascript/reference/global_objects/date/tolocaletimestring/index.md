---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toLocaleTimeString
browser-compat: javascript.builtins.Date.toLocaleTimeString
---
{{JSRef}}

La méthode **`toLocaleTimeString()`** renvoie une chaine de caractères correspondant à l'heure dans la date, exprimée selon une localisation. Les arguments `locales` (définissant la localisation) et `options` permettent aux applications de définir le langage utilisé pour les conventions de format et permettent de personnaliser le comportement de la fonction.

Les anciennes implémentations ignorent ces arguments, la locale utilisée et le format de la chaine dépendent uniquement de l'implémentation.

{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}

## Syntaxe

```js
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
```

### Paramètres

Les arguments `locales` et `options` adaptent le comportement de la fonction et permettent aux applications de définir quelles conventions de formatage linguistiques devraient être utilisées. Pour les anciennes implémentations qui ignoraient les arguments `locales` et
`options`, les `locales` et le format de la chaîne renvoyée dépendent uniquement de l'implémentation.

Voir la page du constructeur [`Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Intl/DateTimeFormat/DateTimeFormat) pour plus de détails sur ces paramètres et comment les utiliser.

La valeur par défaut de chacun des composants de date/heure vaut [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), si les propriétés `hour`, `minute`, `second` sont toutes `undefined`, on suppose alors que `hour`, `minute`, et `second` sont "numeric".

### Valeur de retour

Une chaîne de caractères qui représente l'heure de la date indiquée selon des conventions de locales spécifiques.

## Performances

Lorsqu'on formate un grand nombre de dates, mieux vaudra créer un objet
[`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) et utiliser la fonction fournie par sa propriété [`format`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format)
property.

## Exemples

### Utiliser `toLocaleTimeString()`

Voici un usage simple qui ne définit pas de locale : une chaine de caractères dans une locale et avec des options par défaut est renvoyée.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() sans argument, on utilise donc
// les valeurs par défaut (de l'implémentation)
// pour la locale, et le fuseau horaire
console.log(date.toLocaleTimeString());
// → "04:00:00" si exécuté dans une locale fr et le fuseau horaire CEST
```

### Utiliser `locales`

Cet exemple montre quelques variations dues aux formats de dates localisés. Afin d'obtenir le langage utilisé au sein de l'interface utilisateur de votre application, vérifiez de bien fournir ce langage (et éventuellement des locales de recours) en utilisant l'argument `locales` :

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

// l'anglais américain utilise une heure sur 12h avec AM/PM
console.log(date.toLocaleTimeString("en-US"));
// → "4:00:00 AM"

// l'anglais britanique utilise une heure sur 24h
console.log(date.toLocaleTimeString("en-GB"));
// → "04:00:00"

// le coréen utilise une heure sur 12h avec AM/PM
console.log(date.toLocaleTimeString("ko-KR"));
// → "오전 4:00:00"

/ l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(date.toLocaleTimeString("ar-EG"));
// → "٤:٠٠:٠٠ ص"

// quand un langage non support est demandé (ex : le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
console.log(date.toLocaleTimeString(["ban", "id"]));
// → "4.00.00"
```

### Utiliser `options`

Les résultats fournis par `toLocaleTimeString()` peuvent être personnalisés grâce à l'argument `options` :

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// une application peut vouloir utiliser UTC et le montrer
var options = {timeZone: "UTC", timeZoneName: "short"};
console.log(date.toLocaleTimeString("en-US", options));
// → "3:00:00 AM GMT"

// parfois, même les USA ont besoin du format sur 24h
console.log(date.toLocaleTimeString("en-US", {hour12: false}));
// → "19:00:00"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [`Date.prototype.toLocaleDateString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
- [`Date.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
- [`Date.prototype.toTimeString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString)
- [`Date.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)
