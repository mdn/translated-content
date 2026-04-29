---
title: "Intl.Locale : propriété numberingSystem"
short-title: numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

La propriété d'accesseur **`numberingSystem`** des instance de {{JSxRef("Intl.Locale")}} retourne le [système de numération <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Numeral_system) utilisé pour cette locale.

## Description

Un système de numération est un système pour exprimer les nombres. Pour une liste des types de systèmes de numération pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_systèmes_de_numération_pris_en_charge).

La valeur de la propriété `numberingSystem` est définie lors de la construction, soit par la clé `nu` de l'identifiant de locale, soit par l'option `numberingSystem` du constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Cette dernière prend le pas si les deux sont présentes&nbsp;; et si aucune n'est présente, la propriété a pour valeur `undefined`.

Le mutateur d'accesseur de `numberingSystem` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

Comme pour les autres sous-balises de locale, le type de système de numération peut être ajouté à l'objet {{JSxRef("Intl.Locale")}} soit par la chaîne de caractères décrivant la locale, soit par un objet de configuration passé au constructeur.

### Ajouter un système de numération par le biais de la chaîne de caractères de la locale

Dans la [spécification des chaînes de caractères de locale Unicode <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/), `numberingSystem` est une «&nbsp;sous-balise d'extension&nbsp;». Ces sous-balises ajoutent des informations supplémentaires sur la locale et sont ajoutées aux identifiants de locale en utilisant la clé d'extension `-u`. Pour ajouter le type de système de numération à l'identifiant de locale initial passé au constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}, ajoutez d'abord la clé d'extension `-u` si elle n'existe pas. Ensuite, ajoutez l'extension `-nu` pour indiquer que vous ajoutez un système de numération. Enfin, ajoutez le type de système de numération.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong"
```

### Ajouter un système de numération par le biais de l'objet de configuration

Le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} accepte un argument optionnel de type objet de configuration, qui peut contenir plusieurs types d'extensions, y compris les types de systèmes de numération. Définissez la propriété `numberingSystem` de l'objet de configuration sur le type de système de numération souhaité, puis passez-le au constructeur.

```js
const locale = new Intl.Locale("en-Latn-US", { numberingSystem: "latn" });
console.log(locale.numberingSystem); // "latn"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- La méthode {{JSxRef("Intl.Locale.prototype.getNumberingSystems()")}}
- [Détails sur les systèmes de numération dans le standard Unicode <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
