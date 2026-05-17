---
title: "Intl.Locale : propriété collation"
short-title: collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

La propriété d'accesseur **`collation`** des instances de {{JSxRef("Intl.Locale")}} retourne le [type de collation <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) pour cette locale, qui est utilisé pour ordonner les chaînes de caractères selon les règles de la locale.

## Description

La collation est le processus de tri des chaînes de caractères. Elle est utilisée chaque fois que des chaînes de caractères doivent être triées et placées dans un certain ordre, des résultats de recherche à l'organisation des enregistrements dans une base de données. Bien que l'idée de placer des chaînes de caractères dans un ordre puisse sembler triviale, la notion d'ordre peut varier d'une région à l'autre et d'une langue à l'autre. Pour une liste des types de collation pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_collation_pris_en_charge).

La valeur de la propriété `collation` est définie au moment de la construction, soit avec la clé `co` de l'identifiant de la locale, soit avec l'option `collation` du constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Cette dernière prend le pas si les deux sont présentes&nbsp;; et si aucune n'est présente, la propriété a pour valeur `undefined`.

Le mutateur d'accesseur de `collation` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

Comme les autres sous-balises de locale, le type de classement peut être ajouté à l'objet {{JSxRef("Intl.Locale")}} par le biais de la chaîne de locale ou d'un argument d'objet de configuration passé au constructeur.

### Ajouter un type de collation par le biais de la chaîne de locale

Dans la [spécification Unicode des chaînes de caractères de locale <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/), `collation` est une «&nbsp;sous-balise d'extension&nbsp;». Ces sous-balises ajoutent des informations supplémentaires concernant la locale et sont ajoutées aux identifiants de locale à l'aide de la clé d'extension `-u`. Pour ajouter le type de collation à la chaîne de caractères d'identifiant de locale initiale passée au constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}, ajoutez d'abord la clé d'extension `-u` si elle n'existe pas. Ensuite, ajoutez l'extension `-co` pour indiquer que vous ajoutez un type de collation. Enfin, ajoutez le type de collation.

```js
const locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin"
```

### Ajouter un type de collation par le biais de l'objet de configuration

Le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} a un argument d'objet de configuration optionnel, qui peut contenir n'importe lequel de plusieurs types d'extensions, y compris les types de collation. Définissez la propriété `collation` de l'objet de configuration sur le type de collation souhaité, puis passez-le dans le constructeur.

```js
const locale = new Intl.Locale("zh-Hant", { collation: "zhuyin" });
console.log(locale.collation); // "zhuyin"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- La méthode {{JSxRef("Intl.Locale.prototype.getCollations()")}}
