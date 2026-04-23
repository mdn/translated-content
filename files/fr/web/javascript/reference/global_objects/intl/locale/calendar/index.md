---
title: "Intl.Locale : propriété calendar"
short-title: calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

La propriété d'accesseur **`calendar`** des instances de {{JSxRef("Intl.Locale")}} retourne le type de calendrier pour cette locale.

## Description

Bien que la plupart du monde utilise le calendrier grégorien, il existe plusieurs ères de calendriers régionaux utilisées dans le monde. Pour une liste des types de calendriers pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge).

La valeur de la propriété `calendar` est définie au moment de la construction, soit par la clé `ca` de l'identifiant de locale, soit par l'option `calendar` du constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Cette dernière prend le pas si les deux sont présentes&nbsp;; et si aucune n'est présente, la propriété a pour valeur `undefined`.

Le mutateur d'accesseur de `calendar` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

Comme pour les autres sous-balises de locale, le type de calendrier peut être ajouté à l'objet {{JSxRef("Intl.Locale")}} par la chaîne de caractères de locale, soit par un objet de configuration passé en argument au constructeur.

### Ajouter un type de calendrier à la chaîne de caractères de locale

Dans la [spécification des chaînes de caractères de locale Unicode <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/), `calendar` est un «&nbsp;sous-balise d'extension&nbsp;». Ces sous-balises ajoutent des informations supplémentaires sur la locale et sont ajoutés aux identifiants de locale en utilisant la clé d'extension `-u`. Pour ajouter le type de calendrier à la chaîne d'identifiant de locale initiale passée au constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}, ajoutez d'abord la clé d'extension `-u` si elle n'existe pas. Ensuite, ajoutez l'extension `-ca` pour indiquer que vous ajoutez un type de calendrier. Enfin, ajoutez le type d'ère du calendrier.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // "buddhist"
```

### Ajouter un type de calendrier à l'objet de configuration

Le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} accepte un argument optionnel de type objet de configuration, qui peut contenir plusieurs types d'extensions, y compris les calendriers. Définissez la propriété `calendar` de l'objet de configuration sur l'ère de calendrier souhaitée, puis passez-le au constructeur.

```js
const locale = new Intl.Locale("fr-FR", { calendar: "buddhist" });
console.log(locale.calendar); // "buddhist"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- La méthode {{JSxRef("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
- [Identifiants Unicode pour les calendriers <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) dans la spécification Unicode du langage de balisage des données de locale Unicode
