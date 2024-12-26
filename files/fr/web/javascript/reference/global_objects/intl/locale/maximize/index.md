---
title: Intl.Locale.prototype.maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
---

{{JSRef}}

La méthode **`Intl.Locale.prototype.maximize()`** permet d'obtenir les valeurs les plus vraisemblantes pour la langue, le script et la région de la locale en fonction des valeurs existantes.

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-maximize.html")}}

## Syntaxe

```js
locale.maximize();
```

### Valeur de retour

Une instance {{jsxref("Locale", "Locale")}} dont la propriété `baseName` renvoie le résultat de l'algorithme de [vraisemblance des composantes](https://www.unicode.org/reports/tr35/#Likely_Subtags) lancé sur {{jsxref("Locale/baseName", "locale.baseName")}}.

## Description

Il est parfois utile d'identifier les composantes les plus probables d'une locale en fonction d'un identifiant incomplet. Cette méthode utilise un algorithme qui permet de déduire les composantes restantes les plus probables. Par exemple, si on fournit la langue `"en"`, l'algorithme renverra `"en-Latn-US"`, car l'anglais ne s'écrit qu'avec l'alphabet latin et est le plus largement parlé aux États-Unis. La méthode `maximize()` n'opère que sur les composantes principales (langue, script, région) et pas sur les extensions éventuellement indiquées après `"-u"` (dont [`Locale.hourCycle`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle), [`Locale.calendar`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) et [`Locale.numeric`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric) entre autres).

## Exemples

```js
let maLocale = new Intl.Locale("fr", { hourCycle: "h24", calendar: "gregory" });
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
- {{jsxref("Locale/baseName", "Locale.baseName")}}
- [Spécification Unicode sur la vraisemblance entre composantes](https://www.unicode.org/reports/tr35/#Likely_Subtags)
