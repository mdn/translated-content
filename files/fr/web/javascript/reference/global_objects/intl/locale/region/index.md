---
title: "Intl.Locale : propriété region"
short-title: region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

La propriété d'accesseur **`region`** des instances de {{JSxRef("Intl.Locale")}} retourne la région du monde (généralement un pays) associée à cette locale.

## Description

La région est l'un des attributs principaux d'une locale. Elle permet de distinguer les différences entre une même langue dans différents pays. Par exemple, l'anglais est parlé au Royaume-Uni et aux États-Unis, mais il existe des différences d'orthographe et d'autres conventions linguistiques entre ces deux pays. Connaître la région d'une locale aide les développeur·euse·ss JavaScript à s'assurer que le contenu de leurs sites et applications est correctement affiché lorsqu'il est consulté depuis différentes régions du monde.

La valeur de la propriété `region` est définie lors de la construction, soit par la partie de l'identifiant de locale après `script`, soit par l'option `region` du constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Cette dernière prend le pas si les deux sont présentes&nbsp;; et si aucune n'est présente, la propriété a pour valeur `undefined`.

Le mutateur d'accesseur de `region` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

Comme pour les autres sous-balises de locale, la région peut être ajoutée à l'objet {{JSxRef("Intl.Locale")}} soit par la chaîne de caractères de la locale, soit par un objet de configuration passé au constructeur.

### Ajouter une région par le biais de la chaîne de caractères de la locale

La région, si elle est présente, est la troisième partie (si `script` est présent, deuxième partie sinon) d'une chaîne de caractères d'identifiant de langue Unicode valide, et peut être ajoutée à la chaîne de caractères d'identifiant de locale initiale qui est passée au constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Notez que la région n'est pas une partie obligatoire d'un identifiant de locale.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // "US"
```

### Ajouter une région par le biais de l'objet de configuration

Le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} accepte un argument optionnel de type objet de configuration. Définissez la propriété `region` de l'objet de configuration sur la région souhaitée, puis passez-le au constructeur.

```js
const locale = new Intl.Locale("fr-Latn", { region: "FR" });
console.log(locale.region); // "FR"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- [Tableau Unicode des régions <sup>(angl.)</sup>](https://www.unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html)
