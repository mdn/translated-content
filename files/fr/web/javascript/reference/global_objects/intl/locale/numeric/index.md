---
title: "Intl.Locale : propriété numeric"
short-title: numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

La propriété d'accesseur **`numeric`** des instances de {{JSxRef("Intl.Locale")}} indique si cette locale possède une gestion spéciale des caractères numériques lors de la collation.

## Description

À l'instar de {{JSxRef("Intl/Locale/caseFirst", "caseFirst")}}, `numeric` représente une modification des règles de collation utilisées par la locale. `numeric` est une valeur booléenne, ce qui signifie qu'elle peut être soit `true`, soit `false`. Si `numeric` est défini sur `false`, il n'y aura pas de gestion spéciale des valeurs numériques dans les chaînes de caractères. Si `numeric` est défini sur `true`, alors la locale prendra en compte les caractères numériques lors de la collation des chaînes de caractères. Cette gestion spéciale des nombres signifie que les séquences de chiffres décimaux seront comparées comme des nombres. Par exemple, la chaîne de caractères «&nbsp;A-21&nbsp;» sera considérée comme inférieure à «&nbsp;A-123&nbsp;».

La valeur de la propriété `numeric` est définie lors de la construction, soit par la clé `kn` de l'identifiant de locale, soit par l'option `numeric` du constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Cette dernière prend le pas si les deux sont présentes&nbsp;; et si aucune n'est présente, la propriété a pour valeur `undefined`.

Le mutateur d'accesseur de `numeric` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

Comme pour les autres sous-balises de locale, la valeur `numeric` peut être ajoutée à l'objet {{JSxRef("Intl.Locale")}} soit par la chaîne de caractères de la locale, soit par un objet de configuration passé au constructeur.

### Ajouter une valeur `numeric` par le biais de la chaîne de caractères de la locale

Dans la [spécification des chaînes de caractères de locale Unicode <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/), `numeric` est une «&nbsp;sous-balise d'extension&nbsp;». Ces sous-balises ajoutent des informations supplémentaires sur la locale et sont ajoutées aux identifiants de locale en utilisant la clé d'extension `-u`. Pour ajouter la valeur `numeric` à l'identifiant de locale initial passé au constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}, ajoutez d'abord la clé d'extension `-u` si elle n'existe pas. Ensuite, ajoutez l'extension `-kn` pour indiquer que vous ajoutez une valeur pour `numeric`. Enfin, ajoutez la valeur `numeric`. Si vous voulez définir `numeric` sur `true`, il suffit d'ajouter la clé `kn`. Pour définir la valeur sur `false`, vous devez définir `"false"` après la clé `kn`.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(locale.numeric); // "false"
```

### Ajouter une valeur `numeric` par le biais de l'objet de configuration

Le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} accepte un argument optionnel de type objet de configuration, qui peut contenir plusieurs types d'extensions, y compris `numeric`. Définissez la propriété `numeric` de l'objet de configuration sur la valeur `numeric` souhaitée, puis passez-le au constructeur.

```js
const locale = new Intl.Locale("en-Latn-US", { numeric: true });
console.log(locale.numeric); // "true"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
