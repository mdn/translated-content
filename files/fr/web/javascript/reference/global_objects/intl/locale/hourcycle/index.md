---
title: "Intl.Locale : propriété hourCycle"
short-title: hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

La propriété d'accesseur **`hourCycle`** des instances de {{JSxRef("Intl.Locale")}} retourne le type de cycle horaire pour cette locale.

## Description

Il existe deux types principaux de conventions pour la représentation du temps (horloges) utilisées dans le monde : l'horloge sur 12 heures et l'horloge sur 24 heures. Pour une liste des types de cycles horaires pris en charge, voir [`Intl.Locale.prototype.getHourCycles()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#types_de_cycles_horaires_pris_en_charge).

La valeur de la propriété `hourCycle` est définie au moment de la construction, soit par la clé `hc` de l'identifiant de la locale, soit par l'option `hourCycle` du constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Cette dernière prend le pas si les deux sont présentes&nbsp;; et si aucune n'est présente, la propriété a pour valeur `undefined`.

Le mutateur d'accesseur de `hourCycle` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

Comme pour d'autres sous-balises de locale, le type de cycle horaire peut être ajouté à l'objet {{JSxRef("Intl.Locale")}} par la chaîne de caractères représentant la locale, ou avec un objet de configuration passé en argument au constructeur.

### Ajouter un cycle horaire par le biais de la chaîne de caractères représentant la locale

Dans le [spécification Unicode des chaînes de caractères de locale](https://www.unicode.org/reports/tr35/), `hourCycle` est un «&nbsp;sous-balise d'extension&nbsp;». Ces sous-balises ajoutent des données supplémentaires sur la locale et sont ajoutées aux identifiants de locale en utilisant la clé d'extension `-u`. Pour ajouter le type de cycle horaire à la chaîne de caractères d'identifiant de locale initiale passée au constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}, ajoutez d'abord la clé d'extension `-u` si elle n'existe pas. Ensuite, ajoutez l'extension `-hc` pour indiquer que vous ajoutez un cycle horaire. Enfin, ajoutez le type de cycle horaire.

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23"
```

### Ajouter un cycle horaire par le biais de l'objet de configuration

Le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} accepte un argument optionnel sous forme d'objet de configuration, qui peut contenir plusieurs types d'extensions, y compris les types de cycles horaires. Définissez la propriété `hourCycle` de l'objet de configuration sur le type de cycle horaire souhaité, puis passez-le au constructeur.

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- La méthode {{JSxRef("Intl.Locale.prototype.getHourCycles()")}}
- [Extension Unicode des cycles horaires <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) dans la spécification du langage de balisage des données de locale Unicode
