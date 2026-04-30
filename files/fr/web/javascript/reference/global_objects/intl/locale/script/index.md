---
title: "Intl.Locale : propriété script"
short-title: script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

La propriété d'accesseur **`script`** des instances de {{JSxRef("Intl.Locale")}} retourne le script utilisé pour écrire la langue particulière utilisée dans cette locale.

## Description

Le script, parfois appelé système d'écriture, est l'un des attributs principaux d'une locale. Il indique l'ensemble des symboles, ou glyphes, utilisés pour écrire une langue particulière. Par exemple, le script associé à l'anglais est l'alphabet latin, tandis que le script généralement associé au coréen est le Hangul. Dans de nombreux cas, indiquer un script n'est pas strictement nécessaire, car la langue (qui est nécessaire) n'est écrite que dans un seul script. Il existe toutefois des exceptions à cette règle, et il est important d'indiquer le script lorsque plusieurs scripts sont applicables.

La valeur de la propriété `script` est définie lors de la construction, soit par la partie de l'identifiant de locale après `language`, soit par l'option `script` du constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Cette dernière prend le pas si les deux sont présentes&nbsp;; et si aucune n'est présente, la propriété a pour valeur `undefined`.

Le mutateur d'accesseur de `script` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

Comme pour les autres sous-balises de locale, le script peut être ajouté à l'objet {{JSxRef("Intl.Locale")}} soit par la chaîne de caractères de la locale, soit par un objet de configuration passé au constructeur.

### Ajouter un script par le biais de la chaîne de caractères de la locale

Le script, si présent, est la deuxième partie d'une chaîne de caractères d'identifiant de langue Unicode valide, et peut être ajouté à la chaîne de caractères d'identifiant de locale initiale qui est passée au constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Notez que le script n'est pas une partie obligatoire d'un identifiant de locale.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.script); // "Latn"
```

### Ajouter un script par le biais de l'objet de configuration

Le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} accepte un argument optionnel de type objet de configuration. Définissez la propriété `script` de l'objet de configuration sur le script souhaité, puis passez-le au constructeur.

```js
const locale = new Intl.Locale("fr-FR", { script: "Latn" });
console.log(locale.script); // "Latn"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- [Sous-balise de script Unicode <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity) dans la spécification du langage de balisage des données de locale Unicode
