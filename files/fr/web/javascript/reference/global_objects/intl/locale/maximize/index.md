---
title: Intl.Locale.prototype.maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/maximize
---
{{JSRef}}

La méthode **`Intl.Locale.prototype.maximize()`** permet d'obtenir les valeurs les plus vraisemblantes pour la langue, le script et la région de la locale en fonction des valeurs existantes.

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-maximize.html")}}

## Syntaxe

    locale.maximize()

### Valeur de retour

Une instance {{jsxref("Locale", "Locale")}} dont la propriété `baseName` renvoie le résultat de l'algorithme de [vraisemblance des composantes](https://www.unicode.org/reports/tr35/#Likely_Subtags) lancé sur `{{jsxref("Locale/baseName", "locale.baseName")}}`.

## Description

Il est parfois utile d'identifier les composantes les plus probables d'une locale en fonction d'un identifiant incomplet. Cette méthode utilise un algorithme qui permet de déduire les composantes restantes les plus probables. Par exemple, si on fournit la langue `"en"`, l'algorithme renverra `"en-Latn-US"`, car l'anglais ne s'écrit qu'avec l'alphabet latin et est le plus largement parlé aux États-Unis. La méthode `maximize()` n'opère que sur les composantes principales (langue, script, région) et pas sur les extensions éventuellement indiquées après `"-u"` (dont [`Locale.hourCycle`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale/hourCycle "The Intl.Locale.prototype.hourCycle property is an accessor property that returns the time keeping format convention used by the locale."), [`Locale.calendar`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale/calendar "The Intl.Locale.prototype.calendar property is an accessor property which returns the type of calendar used in the Locale.") et [`Locale.numeric`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale/numeric "The Intl.Locale.prototype.numeric property is an accessor property that returns whether the locale has special collation handling for numeric characters.") entre autres).

## Exemples

```js
let maLocale = new Intl.Locale("fr", {hourCycle: "h24", calendar: "gregory"});
console.log(maLocale.baseName); // Affiche "fr"
console.log(maLocale.toString()); // Affiche "fr-u-ca-gregory-hc-h24"
let maLocMaximized = maLocale.maximize();

// Affiche "fr-Latn-FR". Les composantes "Latn" et "FR" ont été ajoutées
// car le français ne s'écrit qu'avec l'alphabet latin et est plus probablement parlé en France.
console.log(maLocMaximized.baseName);

// Affiche "fr-Latn-FR-u-ca-gregory-hc-h24".
// On notera que les extensions (après "-u") restent inchangées.
console.log(myLocMaximized.toString()); 
```

## Spécifications

| Spécification                                                                                                                          | État | Commentaires |
| -------------------------------------------------------------------------------------------------------------------------------------- | ---- | ------------ |
| [Proposition pour `Intl.Locale.prototype.maximize()`](https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.maximize) |      |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.Locale.maximize")}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
- {{jsxref("Locale/baseName", "Locale.baseName")}}
- [Spécification Unicode sur la vraisemblance entre composantes](https://www.unicode.org/reports/tr35/#Likely_Subtags)
