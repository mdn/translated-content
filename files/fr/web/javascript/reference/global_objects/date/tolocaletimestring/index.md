---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
tags:
  - Date
  - Internationalisation
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toLocaleTimeString
---
{{JSRef}}

La méthode **`toLocaleTimeString()`** renvoie une chaine de caractères correspondant à l'heure dans la date, exprimée selon une locale. Les arguments `locales` et `options` permettent aux applications de définir le langage utilisé pour les conventions de format et permettent de personnaliser le comportement de la fonction. Les anciennes implémentations ignorent ces arguments, la locale utilisée et le format de la chaine dépendent uniquement de l'implémentation.

{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}

## Syntaxe

    dateObj.toLocaleTimeString([locales [, options]])

### Paramètres

Voir le tableau de [compatibilité des navigateurs](#compat "#Compatibilit.C3.A9_des_navigateurs") afin de déterminer quels navigateurs respectent les arguments `locales` et `options` ainsi que l'exemple [Vérifier le support des arguments `locales` et `options`](#check) qui permet de détecter cette fonctionnalité.

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/DateTimeFormat','Param.C3.A8tres')}}

La valeur par défaut de chacun des composants de la date vaut {{jsxref("undefined")}}, si les propriétés `hour`, `minute`, `second` sont toutes `undefined`, on suppose alors que `hour`, `minute`, et `second` sont "numeric".

### Valeur de retour

Une chaîne de caractères qui représente l'heure de la date indiquée selon des conventions de locales spécifiques.

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

### Vérifier le support des arguments `locales` et `options`

Les arguments `locales` et `options` ne sont pas encore supportés par tous les navigateurs. Afin de vérifier si l'implementation utilisée les supporte, vous pouvez utiliser le pré-requis suivant : les locales incorrectes sont rejetées avec une exception` RangeError` :

```js
function toLocaleTimeStringSupportsLocales() {
    try {
        new Date().toLocaleTimeString("i");
    } catch (e) {
        return e​.name === "RangeError";
    }
    return false;
}
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

// le coréen  utilise une heure sur 12h avec AM/PM
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

## Performance

Pour formater de nombreuses dates, il est préférable de créer un objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} et d'utiliser la fonction fournie par sa propriété {{jsxref("DateTimeFormat.prototype.format", "format")}}.

## Spécifications

| Spécification                                                                                                                                    | État                             | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                                         | {{Spec2('ES3')}}             | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.7', 'Date.prototype.toLocaleTimeString')}}                                             | {{Spec2('ES5.1')}}         |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleTimeString')}}                     | {{Spec2('ES6')}}             |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleTimeString')}}             | {{Spec2('ESDraft')}}     |                                                       |
| {{SpecName('ES Int 1.0', '#sec-13.3.3', 'Date.prototype.toLocaleTimeString')}}                                         | {{Spec2('ES Int 1.0')}} | Définition des arguments `locales` et `options`.      |
| {{SpecName('ES Int 2.0', '#sec-13.3.3', 'Date.prototype.toLocaleTimeString')}}                                         | {{Spec2('ES Int 2.0')}} |                                                       |
| {{SpecName('ES Int Draft', '#sec-Date.prototype.toLocaleTimeString', 'Date.prototype.toLocaleTimeString')}} | {{Spec2('ES Int Draft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.toLocaleTimeString")}}

## Voir aussi

- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
