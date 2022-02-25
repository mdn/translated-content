---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
tags:
  - Date
  - Internationalisation
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toLocaleString
---
{{JSRef}}

La méthode **`toLocaleString()`** renvoie une chaine de caractères représentant la date selon une locale. Les arguments `locales` et `options` permettent aux applications de définir le langage à utiliser pour les conventions de format et permettent de personnaliser le comportement de la fonction. Les anciennes implémentations ignorent ces arguments, la locale utilisée et le format de la chaine dépendent uniquement de l'implémentation.

{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}

## Syntaxe

    dateObj.toLocaleString([locales [, options]])

### Paramètres

Voir le tableau de [compatibilité des navigateurs](#compat "#Compatibilit.C3.A9_des_navigateurs") afin de déterminer quels navigateurs respectent les arguments `locales` et `options` ainsi que l'exemple [Vérifier le support des arguments `locales` et `options`](#check) qui permet de détecter cette fonctionnalité.

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/DateTimeFormat','Paramètres')}}

La valeur par défaut de chacun des composants de la date-heure vaut {{jsxref("undefined")}}, mais si les propriétés `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second` sont toutes {{jsxref("undefined")}},  alors  `weekday`, `year`, `month`, `day`, `hour`, `minute` et `second` sont supposés être "numeric".

### Valeur de retour

Une chaîne de caractères représentant la date indiquée selon des conventions de locales spécifiques.

## Exemples

### Utiliser `toLocaleString()`

Voici un usage simple qui ne définit pas de locale : une chaine de caractères dans une locale et avec des options par défaut est renvoyée.

```js
var date = new Date(Date.UTC(2014, 11, 21, 3, 0, 0));

// toLocaleString() sans argument, on utilise donc
// les valeurs par défaut (de l'implémentation)
// pour la locale, et le fuseau horaire
date.toLocaleString();
// → "21/12/2014 04:00:00" si exécuté dans une locale fr et le fuseau horaire CEST
```

### Vérifier le support des arguments `locales` et `options`

Les arguments `locales` et `options` ne sont pas encore supportés par tous les navigateurs. Afin de vérifier si l'implementation utilisée les supporte, vous pouvez utiliser le pré-requis suivant : les locales incorrectes sont rejetées avec une exception {{jsxref("RangeError")}} :

```js
function toLocaleStringSupportsLocales() {
    try {
        new Date().toLocaleString("i");
    } catch (e) {
        return e instanceof RangeError;
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

l'anglais américain utilise l'ordre mois-jour-année
console.log(date.toLocaleString("en-US"));
// → "12/20/2012, 4:00:00 AM"

// l'anglais britannique utilise l'ordre jour-mois-année
console.log(date.toLocaleString("en-GB"));
// → "20/12/2012 04:00:00"

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
// → "24/12/20 4:00:00"

// quand un langage non support est demandé (ex : le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
console.log(date.toLocaleString(["ban", "id"]));
// → "20/12/2012 04.00.00"
```

### Utiliser `options`

Les résultats fournis par `toLocaleString()` peuvent être personnalisés grâce à l'argument `options` :

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// obtenir le jour de la semaine avec une date longue
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
console.log(date.toLocaleString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser UTC et le rendre visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleString("en-US", options));
// → "Thursday, December 20, 2012, GMT"

// parfois, même les USA ont besoin d'avoir une heure sur 24h
console.log(date.toLocaleString("en-US", {hour12: false}));
// → "12/19/2012, 19:00:00"
```

### Comparaison des dates formatées et des valeurs statiques

La plupart du temps, le format renvoyé par `toLocaleString()` est cohérent. Toutefois, cela peut évoluer à l'avenir et n'est pas garanti pour l'ensemble des langues (de telles variations sont souhaitables et permises par la spécification). Ainsi, IE et Edge ajoutent des caractères de contrôle bidirectionnels autour des dates afin que le texte produit ait une directionalité cohérente avec le texte avec lequel elles seront concaténées.

Aussi, mieux vaut ne pas comparer un résultat fourni par `format()` avec une valeur statique :

```js example-bad
"1.1.2019, 01:00:00" === new Date("2019-01-01T00:00:00.000000Z").toLocaleString();
// true pour Firefox et les autres
// false pour IE et Edge
```

> **Note :** Voir aussi ce fil [StackOverflow](https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results) pour plus de détails et d'exemples.

## Performance

Quand vous formatez d'importants volumes de dates, il est préférable de créer un objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} et d'utiliser la fonction fournie via la propriété {{jsxref("DateTimeFormat.prototype.format", "format")}}.

## Spécifications

| Spécification                                                                                                                        | État                             | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                             | {{Spec2('ES1')}}             | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.5', 'Date.prototype.toLocaleString')}}                                     | {{Spec2('ES5.1')}}         |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleString')}}             | {{Spec2('ES6')}}             |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleString')}}         | {{Spec2('ESDraft')}}     |                                                       |
| {{SpecName('ES Int 1.0', '#sec-13.3.1', 'Date.prototype.toLocaleString')}}                                 | {{Spec2('ES Int 1.0')}} | Définition des arguments `locales` et `options`.      |
| {{SpecName('ES Int 2.0', '#sec-13.3.1', 'Date.prototype.toLocaleString')}}                                 | {{Spec2('ES Int 2.0')}} |                                                       |
| {{SpecName('ES Int Draft', '#sec-Date.prototype.toLocaleString', 'Date.prototype.toLocaleString')}} | {{Spec2('ES Int Draft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.toLocaleString")}}

## Voir aussi

- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
