---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
tags:
  - Date
  - Internationalisation
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toLocaleDateString
---
{{JSRef}}

La méthode **`toLocaleDateString()`** renvoie une chaine de caractères correspondant à la date (le fragment de l'objet qui correspond à la date : jour, mois, année) exprimée selon une locale. Les arguments `locales` et `options` permettent aux applications de définir le langage utilisé pour les conventions de format et permettent de personnaliser le comportement de la fonction. Les anciennes implémentations ignorent ces arguments, la locale utilisée et le format de la chaine dépendent uniquement de l'implémentation.

{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html")}}

## Syntaxe

    dateObj.toLocaleDateString([locales [, options]])

### Paramètres

Voir le tableau de [compatibilité des navigateurs](#compat) afin de déterminer quels navigateurs respectent les arguments `locales` et `options` ainsi que l'exemple [Vérifier le support des arguments locales et options](#check) qui permet de détecter cette fonctionnalité.

{{page('fr/docs/JavaScript/Reference/Objets_globaux/DateTimeFormat','Paramètres')}}

La valeur par défaut de chacun des composants de la date vaut {{jsxref("undefined")}}, si les propriétés `weekday`, `year`, `month`, `day` sont toutes `undefined`, on suppose alors que `year`, `month`, et `day` sont « numériques ».

### Valeur de retour

Une chaîne de caractères qui représente le jour de la date indiquée selon des options de locales.

## Exemples

### Utiliser `toLocaleDateString()`

Voici un usage simple qui ne définit pas de locale : une chaine de caractères dans une locale et avec des options par défaut est renvoyée.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() sans argument, on utilise donc
// les valeurs par défaut (de l'implémentation)
// pour la locale, et le fuseau horaire
date.toLocaleDateString();
// → "12/12/2012" si exécuté dans une locale fr et le fuseau horaire CEST
```

### Vérifier le support des arguments `locales` et `options`

Les arguments `locales` et `options` ne sont pas encore supportés par tous les navigateurs. Afin de vérifier si l'implementation utilisée les supporte, vous pouvez utiliser le pré-requis suivant : les locales incorrectes sont rejetées avec une exception` RangeError` :

```js
function toLocaleDateStringSupportsLocales() {
    try {
        new Date().toLocaleDateString("i");
    } catch (e) {
        return e​.name === "RangeError";
    }
    return false;
}
```

### Utiliser l'argument `locales`

Cet exemple montre quelques variations dues aux formats de dates localisés. Afin d'obtenir le langage utilisé au sein de l'interface utilisateur de votre application, vérifiez de bien fournir ce langage (et éventuellement des locales de recours) en utilisant l'argument `locales` :

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

// l'anglais américain utilise l'ordre mois-jour-année
alert(date.toLocaleDateString("en-US"));
// → "12/20/2012"

// l'anglais britannique utilise l'ordre jour-mois-année
alert(date.toLocaleDateString("en-GB"));
// → "20/12/2012"

// le coréen utilise l'ordre année-mois-jour
alert(date.toLocaleDateString("ko-KR"));
// → "2012. 12. 20."

// l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
alert(date.toLocaleDateString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢"

// en ce qui concerne le japonais, les applications peuvent
// souhaiter utiliser le calendrier japonais
// pour lequel 2012 était l'année 24 de l'ère Heisei
alert(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// → "24/12/20"

// quand un langage non support est demandé (ex : le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
alert(date.toLocaleDateString(["ban", "id"]));
// → "20/12/2012"
```

### Utiliser l'argument `options`

Les résultats fournis par `toLocaleDateString()` peuvent être personnalisés grâce à l'argument `options` :

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// fournir le jour de la semaine avec une date longe
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
alert(date.toLocaleDateString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser
// UTC et l'afficher
options.timeZone = "UTC";
options.timeZoneName = "short";
alert(date.toLocaleDateString("en-US", options));
// → "Thursday, December 20, 2012, GMT"
```

## Performance

Lorsque des grands nombres ou de grandes dates sont formatés, il est préférable de créer un objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} et d'utiliser la fonction fournie par sa propriété {{jsxref("DateTimeFormat.prototype.format", "format")}}.

## Spécifications

| Spécification                                                                                                                                    | État                             | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                                         | {{Spec2('ES3')}}             | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', 'sec-15.9.5.6', 'Date.prototype.toLocaleDateString')}}                                             | {{Spec2('ES5.1')}}         |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.tolocaledatestring', 'Date.prototype.toLocaleDateString')}}             | {{Spec2('ES6')}}             |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.tolocaledatestring', 'Date.prototype.toLocaleDateString')}}         | {{Spec2('ESDraft')}}     |                                                       |
| {{SpecName('ES Int 1.0', '#sec-13.3.2', 'Date.prototype.toLocaleDateString')}}                                         | {{Spec2('ES Int 1.0')}} | Définition des arguments `locales` et `options`.      |
| {{SpecName('ES Int 2.0', '#sec-13.3.2', 'Date.prototype.toLocaleDateString')}}                                         | {{Spec2('ES Int 2.0')}} |                                                       |
| {{SpecName('ES Int Draft', '#sec-Date.prototype.toLocaleDateString', 'Date.prototype.toLocaleDateString')}} | {{Spec2('ES Int Draft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.toLocaleDateString")}}

## Voir aussi

- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
