---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/RelativeTimeFormat
browser-compat: javascript.builtins.Intl.RelativeTimeFormat
---
{{JSRef}}

L'objet **`Intl.RelativeTimeFormat`** permet de mettre en forme des données temporelles relatives en respectant le format des locales.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat.html")}}

## Constructeur

- [`Intl.RelativeTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat)
  - : Crée un nouvel objet `Intl.RelativeTimeFormat`.

## Méthodes statiques

- [`Intl.RelativeTimeFormat.supportedLocalesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/supportedLocalesOf)
  - : Renvoie un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Méthodes des instances

- [`Intl.RelativeTimeFormat.prototype.format()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format)
  - : Formate une valeur et une unité en fonction des options de locale et de formatage fournies par l'objet `Intl.RelativeTimeFormat` courant.
- [`Intl.RelativeTimeFormat.prototype.formatToParts()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts)
  - : Renvoie un [tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) d'objets représentant le temps relatif sous forme de fragments qui peuvent être utilisés afin de réaliser un formatage tenant compte de la locale sur mesure.
- [`Intl.RelativeTimeFormat.prototype.resolvedOptions()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions)
  - : Renvoie un nouvel objet dont les propriétés reflètent les options de locale et de collation calculées à l'initialisation de l'objet.

## Exemples

### Utiliser `format()`

L'exemple suivant illustre comment créer un formateur de temps relatif en anglais&nbsp;:

```js
// On crée un formateur en anglais en utilisant explicitement
// les valeurs par défaut.
const rtf = new Intl.RelativeTimeFormat("en", {
    localeMatcher: "best fit", // autre valeur possible : "lookup"
    numeric: "always", // autre valeur possible : "auto"
    style: "long", // autre valeur possible : "short" ou "narrow"
});

// On formate un temps relatif avec une valeur négative (-1).
rtf.format(-1, "day");
// > "1 day ago"

// On formate un temps relatif avec une valeur positive (1).
rtf.format(1, "day");
// > "in 1 day"
```

### Utiliser `formatToParts()`

L'exemple suivant illustre comment créer un formateur de temps relatif qui renvoie les différents fragments pour exprimer le temps relatif internationalisé.

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// On crée un temps relatif exprimé en jour.
rtf.formatToParts(-1, "day");
// > [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// > [{ type: "literal", value: "in " },
// >  { type: "integer", value: "100", unit: "day" },
// >  { type: "literal", value: " days" }]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [La documentation Google / v8 de l'API `Intl.RelativeTimeFormat`](https://v8.dev/features/intl-relativetimeformat)
- [Une prothèse d'émulation pour `Intl.RelativeTimeFormat` avec la bibliothèque FormatJS](https://formatjs.io/docs/polyfills/intl-relativetimeformat)
