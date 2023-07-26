---
title: Intl.Locale.prototype.hourCycles
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
---

{{JSRef}}

La propriété **`Intl.Locale.prototype.hourCycles`** est un accesseur qui renvoie une liste d'un ou plusieurs identifiants de cycles horaires utilisés pour la locale représentée par l'instance `Locale` courante.

## Description

Il existe deux conventions pour représenter une heure pendant une journée&nbsp;: sur une horloge à 12 heures et sur une horloge à 24 heures. La propriété `hourCycles` permet de connaître l'ensemble des cycles horaires disponibles pour la locale courante. Le type de cycle horaire correspond à [une sous-balise d'extension](https://www.unicode.org/reports/tr35/#u_Extension), qui étend les données portées par la chaîne de caractères représentant la locale. Les valeurs possibles pour représenter un cycle horaire sont indiquées dans le tableau qui suit.

### Types de cycles horaires valides

| Type de cycle horaire | Description                                                                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `h12`                 | Système horaire utilisant 1-12&nbsp;; ce qui correspond à 'h' dans les motifs. Horloge sur 12 heures, minuit commençant à 12:00 am. |
| `h23`                 | Système horaire utilisant 0-23&nbsp;; ce qui correspond à 'H' dans les motifs. Horloge sur 24 heures, minuit commençant à 0:00.     |
| `h11`                 | Système horaire utilisant 0-11&nbsp;; ce qui correspond à 'K' dans les motifs. Horloge sur 12 heures, minuit commençant à 0:00 am.  |
| `h24`                 | Système horaire utilisant 1-24&nbsp;; ce qui correspond à 'k' dans les motifs. Horloge sur 24 heures, minuit commençant à 24:00.    |

## Exemples

### Connaître les cycles horaires pris en charge

```js
let arEG = new Intl.Locale("ar-EG");
console.log(arEG.hourCycles); // logs ["h12"]
```

```js
let jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.hourCycles); // logs ["h23"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)
- [`Intl.Locale.hourCycle`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
- [Spécification Unicode pour la clé d'extension HourCycle](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)
