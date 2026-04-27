---
title: "Intl.Locale : propriété caseFirst"
short-title: caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La propriété d'accesseur **`caseFirst`** des instances de {{JSxRef("Intl.Locale")}} retourne la valeur indiquant si la casse est prise en compte pour les règles de collation de cette locale.

## Description

Les règles de collation d'une locale sont utilisées pour déterminer comment les chaînes de caractères sont ordonnées dans cette locale. Certaines locales utilisent la casse d'un caractère (MAJUSCULE ou minuscule) dans le processus de collation. Cette règle supplémentaire peut être exprimée dans la propriété `caseFirst` d'un objet {{JSxRef("Intl.Locale")}}. La propriété `caseFirst` peut avoir 3 valeurs, décrites dans le tableau ci-dessous.

| Valeur  | Description                                                          |
| ------- | -------------------------------------------------------------------- |
| `upper` | Les majuscules devraient être triées avant les minuscules.           |
| `lower` | Les minuscules devraient être triées avant les majuscules.           |
| `false` | La casse n'a pas d'importance pour le tri des chaînes de caractères. |

La valeur de la propriété `caseFirst` est définie au moment de la construction, soit avec la clé `kf` de l'identifiant de la locale, soit avec l'option `caseFirst` du constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Cette dernière prend le pas si les deux sont présentes&nbsp;; et si aucune n'est présente, la propriété a pour valeur `undefined`.

Le mutateur d'accesseur de `caseFirst` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

Comme pour d'autres sous-balises de locale, la valeur `caseFirst` peut être ajoutée à l'objet {{JSxRef("Intl.Locale")}} soit par la chaîne de caractères de description de la locale, soit par un objet de configuration passé en argument au constructeur.

### Ajouter une valeur `caseFirst` par le biais de la chaîne de caractères de la locale

Dans la [spécification Unicode des chaînes de caractères de locale <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/), `caseFirst` est une «&nbsp;sous-balise d'extension&nbsp;». Ces sous-balises ajoutent des informations supplémentaires concernant la locale et sont ajoutées aux identifiants de locale à l'aide de la clé d'extension `-u`. Pour ajouter la valeur `caseFirst` à la chaîne de caractères d'identifiant de la locale initiale passée au constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}, ajoutez d'abord la clé d'extension `-u` si elle n'existe pas. Ensuite, ajoutez l'extension `-kf` pour indiquer que vous ajoutez une valeur pour `caseFirst`. Enfin, ajoutez la valeur `caseFirst`.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // "upper"
```

### Ajouter une valeur `caseFirst` par l'objet de configuration passé en argument au constructeur

Le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} a un argument d'objet de configuration optionnel, qui peut contenir n'importe lequel de plusieurs types d'extensions, y compris `caseFirst`. Définissez la propriété `caseFirst` de l'objet de configuration sur votre valeur `caseFirst` désirée, puis passez-le dans le constructeur.

```js
const locale = new Intl.Locale("en-Latn-US", { caseFirst: "lower" });
console.log(locale.caseFirst); // "lower"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- [Spécification Unicode pour la collation selon la casse <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
