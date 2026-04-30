---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`Intl.RelativeTimeFormat`** permet de mettre en forme des données temporelles relatives en respectant le format des locales.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.RelativeTimeFormat")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("en", { style: "short" });

console.log(rtf1.format(3, "quarter"));
// Résultat attendu : "in 3 qtrs."

console.log(rtf1.format(-1, "day"));
// Résultat attendu : "1 day ago"

const rtf2 = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

console.log(rtf2.format(2, "day"));
// Résultat attendu : "pasado mañana"
```

## Constructeur

- {{JSxRef("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - : Crée un nouvel objet `Intl.RelativeTimeFormat`.

## Méthodes statiques

- {{JSxRef("Intl/RelativeTimeFormat/supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : Retourne un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Propriétés d'instance

Ces propriétés sont définies sur `Intl.RelativeTimeFormat.prototype` et partagées par toutes les instances de `Intl.RelativeTimeFormat`.

- {{JSxRef("Object/constructor", "Intl.RelativeTimeFormat.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Intl.RelativeTimeFormat`, la valeur initiale est le constructeur {{JSxRef("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}.
- `Intl.RelativeTimeFormat.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Intl.RelativeTimeFormat"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
  - : Formate une valeur (`value`) et une unité (`unit`) en fonction des options de locale et de formatage de l'objet `Intl.RelativeTimeFormat` donné.
- {{JSxRef("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
  - : Retourne un tableau ({{JSxRef("Array")}}) d'objets représentant le format de temps relatif en parties qui peuvent être utilisées pour un formatage personnalisé tenant compte de la locale.
- {{JSxRef("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}
  - : Retourne un nouvel objet dont les propriétés reflètent les options de locale et de formatage calculées à l'initialisation de l'objet.

## Exemples

### Utilisation simple de `format()`

L'exemple suivant montre comment utiliser un formateur de temps relatif pour la langue anglaise.

```js
// Crée un formateur de temps relatif dans votre locale
// avec les valeurs par défaut passées explicitement.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // autre valeur : "lookup"
  numeric: "always", // autre valeur : "auto"
  style: "long", // autres valeurs : "short" ou "narrow"
});

// On formate un temps relatif avec une valeur négative (-1).
rtf.format(-1, "day"); // "1 day ago"

// On formate un temps relatif avec une valeur positive (1).
rtf.format(1, "day"); // "in 1 day"
```

### Utiliser la méthode `formatToParts()`

L'exemple suivant montre comment créer un formateur de temps relatif qui retourne les différentes parties formatées.

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format de temps relatif utilisant l'unité de jour.
rtf.formatToParts(-1, "day");
// [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// [
//   { type: "literal", value: "in " },
//   { type: "integer", value: "100", unit: "day" },
//   { type: "literal", value: " days" }
// ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `Intl.RelativeTimeFormat` dans FormatJS <sup>(angl.)</sup>](https://formatjs.io/docs/polyfills/intl-relativetimeformat)
- L'objet {{JSxRef("Intl")}}
- [`Intl.RelativeTimeFormat` <sup>(angl.)</sup>](https://v8.dev/features/intl-relativetimeformat) sur v8.dev (2018)
