---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
tags:
  - Date
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/parse
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/parse
---
{{JSRef}}

La méthode **`Date.parse()`** analyse la représentation textuelle d'une date, et renvoie le nombre de millisecondes depuis le 1er janvier 1970, 00:00:00 UTC jusqu'à cette date ou `NaN` si la chaîne n'est pas reconnue ou décrit une date invalide (par exemple 2015-02-31).

> **Note :** Pour les anciennes implémentations (avant ES5), le résultat de ` Date.``parse ` variait d'une implémentation à l'autre. Attention donc à la compatibilité avec ces anciennes versions.

{{EmbedInteractiveExample("pages/js/date-parse.html")}}

## Syntaxe

Appel direct :

```js
Date.parse(dateString)
```

Appel implicite :

```js
new Date(dateString)
```

### Paramètres

- `dateString`
  - : Une chaine de caractères représentant une date dans une version simplifiéee d'ISO 8601 (d'autres formats peuvent être utilisés mais les résultats ne sont pas garantis).

### Valeur de retour

Un nombre correspondant au nombre de millisecondes écoulées entre le premier janvier 1970 à minuit UTC et la date indiquée en argument sous la forme d'une chaîne de caractères. Si l'argument ne permet pas de décrire une date valide, c'est {{jsxref("NaN")}} qui sera renvoyé.

## Description

La méthode `parse` prend en argument une chaine de caractères contenant une date en paramètre (comme "`Dec 25, 1995`") et renvoie le nombre de millièmes de secondes depuis le 1er janvier 1970, 00:00:00 UTC. Cette fonction est utile pour définir des valeurs de dates à partir de représentations textuelles, par exemple en conjonction avec la méthode {{jsxref("Objets_globaux/Date/setTime", "setTime()")}} et l'objet {{jsxref("Objets_globaux/Date", "Date")}}.

### Format de la chaîne de caractères

À partir d'une chaine de caractères représentant une date, `parse` renvoie une valeur de temps. La syntaxe acceptée est un format simplifié de la norme ISO 8601. On pourra par exemple utiliser `"2011-10-10"` (date uniquement), `"2011-10-10T14:48:00"` (date et heure) ou `"2011-10-10T14:48:00.000+09:00"` (date, heure, millisecondes et fuseau horaire).

Si aucun fuseau horaire n'est spécifié, les chaînes représentant uniquement des dates seront considérées comme UTC et les dates / heures seront considérées comme locales.

Lorsque des indicateurs de fuseau horaire sont utilisés, la valeur renvoyée correspondra toujours au nombre de millisecondes écoulées entre l'argument et le premier janvier 1970 à minuit UTC.

`parse()` est une méthode statique de {{jsxref("Date")}} et on invoquera ainsi `Date.parse()` plutôt que `parse()` sur une instance d'un objet `Date`.

### Différences entre les fuseaux horaires supposés

Avec une chaîne comme `"March 7, 2014"`, `parse()` supposera un fuseau horaire local, avec une chaîne au format ISO comme `"2014-03-07"`, la méthode supposera un fuseau horaire UTC en ES5 et un fuseau horaire local pour ECMAScript 2015. Ainsi les objets {{jsxref("Date")}} construits avec ces chaînes représenteront des instants différents, sauf si le fuseau horaire local du système utilisé correspond à UTC. Cela signifie que deux dates représentées de façon textuelles semblables peuvent donner des dates différentes (ce comportement doit être corrigé avec ECMAScript 6 afin que les deux dates soient traitées de façon locale).

### Traitement laissé libre à l'implémentation

Le standard ECMAScript dicte que si la chaîne utilisée n'est pas conforme au format standard, alors la fonction peut utiliser une heuristique et/ou un algorithme d'analyse de texte propre à l'implémentation. Les chaînes impossibles à décoder et/ou qui contiennent des éléments non-conformes aux formats ISO doivent renvoyer {{jsxref("NaN")}} lors de l'appel à `Date.parse()`.

Cependant, les valeurs invalides qui ne sont pas reconnues dans un format ISO pris en charge par ECMA-262 peuvent ou non engendrer la valeur {{jsxref("NaN")}} selon le navigateur et les valeurs utilisées. Par exemple :

```js
// Chaîne non ISO avec des valeurs invalides
new Date('23/25/2014');
```

sera traitée comme la date locale du 25 novembre 2015 avec Firefox 30 et comme invalide avec Safari 7. Cependant, si la chaîne est reconnue dans un format ISO mais contient des valeurs invalides, la méthode renverra {{jsxref("NaN")}} pour tous les navigateurs conformes à ES5 (ou aux versions ultérieures) :

```js
// Chaîne ISO avec des valeurs invalides new
Date('2014-25-23').toISOString();
// renvoie "RangeError: invalid date" pour les navigateurs ES5
```

L'implémentation spécifique de SpiderMonkey peut être trouvée dans le fichier [`jsdate.cpp`](https://dxr.mozilla.org/mozilla-central/source/js/src/jsdate.cpp?rev=64553c483cd1#889). La chaîne `"10 06 2014"` est un exemple de chaîne non ISO, utiliser parse() sur cette chaîne entraînera le moteur JavaScript à utiliser son implémentation de recours. Voir ce [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1023155#c6) pour une explication rapide de la façon dont est faite l'analyse de la chaîne.

```js
new Date('10 06 2014');
```

sera traitée comme la date locale du 6 octobre 2014 et non comme le 10 juin 2014. D'autres exemples :

```js
new Date('toto-truc 2014').toString();
// renvoie : "Invalid Date"
Date.parse('toto-truc 2014');
// renvoie : NaN
```

## Exemples

### Utiliser `Date.parse()`

Les appels suivants renvoient tous `1546300800000`. Dans le premier appel, on indique uniquement la date (et donc le fuseau UTC implicite). Les chaînes qui suivent utilisent une indication de fuseau horaire selon la norme ISO (`Z` et `+00:00`)

```js
Date.parse("2019-01-01")
Date.parse("2019-01-01T00:00:00.000Z")
Date.parse("2019-01-01T00:00:00.000+00:00")
```

L'appel suivant, qui ne précise pas le fuseau horaire, fournira le nombre de millisecondes écoulées entre le premier janvier 1970 minuit UTC et le premier janvier 2019 à minuit selon l'heure locale du système utilisé.

```js
Date.parse("2019-01-01T00:00:00")
```

### Chaînes de caractères non-standard

> **Note :** Cette section contient des exemples qui reposent sur des comportements spécifiques aux implémentations et on peut donc avoir des incohérences entre les moteurs utilisés.

Si `IPOdate` est un objet {{jsxref("Date")}}, on peut définir sa valeur au 9 août 1995 (heure locale), de la façon suivante :

```js
IPOdate.setTime(Date.parse('Aug 9, 1995'));
```

Voici un autre exemple avec une chaîne qui ne suit pas le format standard.

```js
Date.parse('Aug 9, 1995');
```

Cette méthode renverra `807937200000` pour le fuseau horaire GMT-0300 et d'autres valeurs pour d'autres fuseaux car la chaîne n'indique pas le fuseau horaire et ne respecte pas le format ISO (le fuseau considéré par défaut est donc le fuseau local).

```js
Date.parse('Wed, 09 Aug 1995 00:00:00 GMT');
```

Renvoie `807926400000` quel que soit le fuseau local car on indique GMT.

```js
Date.parse('Wed, 09 Aug 1995 00:00:00');
```

Renvoie `807937200000` dans le fuseau GMT-0300 et d'autres valeurs pour d'autres fuseaux car aucune indication de fuseau n'est fournie et que la chaîne n'est pas au format ISO, elle est donc traitée comme un temps local.

```js
Date.parse('Thu, 01 Jan 1970 00:00:00 GMT');
```

Renvoie `0` quel que soit le fuseau local car l'indicateur GMT est fourni.

```js
Date.parse('Thu, 01 Jan 1970 00:00:00');
```

Renvoie `14400000` pour le fuseau GMT-0400 et d'autres valeurs dans d'autres fuseaux car aucune indication de fuseau n'est fournie et la chaîne n'est pas au format ISO, elle est donc traitée comme un temps local.

```js
Date.parse('Thu, 01 Jan 1970 00:00:00 GMT-0400');
```

Renvoie `14400000` quel que soit le fuseau car l'indicateur GMT est fourni.

## Spécifications

| Spécification                                                                | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.4.2', 'Date.parse')}}         | {{Spec2('ES5.1')}}     | Ajout du format ISO 8601 simplifié.                   |
| {{SpecName('ES6', '#sec-date.parse', 'Date.parse')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.parse', 'Date.parse')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.parse")}}

## Notes de compatibilité

- À partir de Firefox 49 ({{geckoRelease(49)}}, l'interprétation des années exprimées sur deux chiffres est alignée avec Google Chrome (et non plus avec Internet Explorer). Désormais, les années exprimées sur deux chiffres et strictement inférieures à 50 seront considérées comme des années du XXIe siècle. Ainsi, `04/16/17` correspondait avant au 16 avril 1917 et correspond désormais au 16 avril 2017. Cela évite des problèmes d'interopérabilité et d'ambiguïté et cette méthode est recommandée par le format ISO 8601 (cf. {{bug(1265136)}}).
- Google Chrome acceptera une chaîne de caractères avec un nombre pour le paramètre `dateString`. Ainsi, si on exécute `!!Date.parse("42")` dans Firefox, on obtiendra `false` tandis que que Google Chrome donnera `true` car `"42"` sera interprété comme la date du premier janvier 2042.

## Voir aussi

- {{jsxref("Date.UTC()")}}
