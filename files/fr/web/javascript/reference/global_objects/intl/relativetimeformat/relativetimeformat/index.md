---
title: Constructeur Intl.RelativeTimeFormat()
short-title: Intl.RelativeTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Le constructeur **`Intl.RelativeTimeFormat()`** permet de créer des objets {{JSxRef("Intl.RelativeTimeFormat")}}.

## Syntaxe

```js-nolint
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

> [!NOTE]
> `Intl.RelativeTimeFormat()` ne peut être construit qu'avec {{JSxRef("new")}}. Tenter de l'appeler sans `new` génère une {{JSxRef("TypeError")}}.

### Paramètres

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} ou une instance de {{JSxRef("Intl.Locale")}}, ou un tableau de tels identifiants de locale. La locale par défaut du runtime est utilisée lorsque `undefined` est passé ou lorsqu'aucun des identifiants de locale définis n'est pris en charge. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).

    La clé d'extension Unicode suivante est autorisée&nbsp;:
    - `nu`
      - : Voir [`numberingSystem`](#numberingsystem).

    Cette clé peut également être définie avec `options` (comme indiqué ci-dessous). Lorsque les deux sont définis, la propriété `options` prend le pas.

- `options` {{Optional_Inline}}
  - : Un objet contenant les propriétés suivantes, dans l'ordre dans lequel elles sont récupérées (toutes sont optionnelles)&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance de locale à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir [Identification et négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale).
    - `numberingSystem`
      - : Le système de numération à utiliser pour le formatage des nombres, tel que `"arab"`, `"hans"`, `"mathsans"`, etc. Pour une liste des types de systèmes de numération pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_systèmes_de_numération_pris_en_charge)&nbsp;; la valeur par défaut dépend de la locale. Cette option peut également être définie via la clé d'extension Unicode `nu`&nbsp;; si les deux sont fournis, la propriété `options` prend le pas.
    - `style`
      - : Le style du temps relatif formaté. Les valeurs possibles sont&nbsp;:
        - `"long"` (par défaut)
          - : Par exemple, «&nbsp;dans 1 mois&nbsp;»
        - `"short"`
          - : Par exemple, «&nbsp;dans 1 mois&nbsp;»
        - `"narrow"`
          - : Par exemple, «&nbsp;dans 1 mois&nbsp;». Le style narrow peut être similaire au style short pour certaines locales.
    - `numeric`
      - : Indique si les valeurs numériques doivent être utilisées dans la sortie. Les valeurs possibles sont `"always"` et `"auto"`&nbsp;; la valeur par défaut est `"always"`. Lorsque l'option est définie sur `"auto"`, la sortie peut utiliser des expressions plus idiomatiques telles que `"hier"` au lieu de `"il y a 1 jour"`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `locales` ou `options` contiennent des valeurs invalides.

## Exemples

### Usage simple de `format()`

Le exemple suivant montre comment créer un formateur de temps relatif en utilisant la langue française.

```js
// Créez un formateur de temps relatif dans votre locale
// avec les valeurs par défaut passées explicitement.
const rtf = new Intl.RelativeTimeFormat("fr", {
  numeric: "always", // autre valeur : "auto"
  style: "long", // autres valeurs : "short" ou "narrow"
});

// Formatez un temps relatif en utilisant une valeur négative (-1).
rtf.format(-1, "day"); // "il y a 1 jour"

// Formatez un temps relatif en utilisant une valeur positive (1).
rtf.format(1, "day"); // "dans 1 jour"
```

### En utilisant l'option `auto`

Si l'option `numeric: "auto"` est passée, le résultat sera la chaîne de caractères `hier` ou `demain` plutôt que `il y a 1 jour` ou `dans 1 jour`. Cela permet de ne pas toujours avoir de valeurs numériques dans la valeur produite.

```js
// Créez un formateur de temps relatif dans votre locale
// avec l'option numeric: "auto" passée.
const rtf = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });

// Formatez un temps relatif en utilisant une valeur négative (-1).
rtf.format(-1, "day"); // "hier"

// Formatez un temps relatif en utilisant une valeur positive (1).
rtf.format(1, "day"); // "demain"
```

Lorsque la valeur est `0`, la sortie peut dépendre de l'unité. "0 secondes" est représenté par la version localisée de "maintenant".

```js
rtf.format(0, "second"); // "maintenant"
rtf.format(0, "day"); // "aujourd'hui"
rtf.format(0, "minute"); // "cette minute"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet natif {{JSxRef("Intl.RelativeTimeFormat")}}
- L'objet natif {{JSxRef("Intl")}}
- [`Intl.RelativeTimeFormat` <sup>(angl.)</sup>](https://v8.dev/features/intl-relativetimeformat) sur v8.dev (2018)
