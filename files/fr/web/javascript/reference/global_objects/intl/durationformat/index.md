---
title: Intl.DurationFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat
l10n:
  sourceCommit: c43e46090257fbfd33c4dd5cac0cdbd1d5d1c274
---

L'objet **`Intl.DurationFormat`** permet la mise en forme des durées sensible à la langue.

## Constructeur

- {{JSxRef("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}}
  - : Crée un nouvel objet `Intl.DurationFormat`.

## Méthodes statiques

- {{JSxRef("Intl/DurationFormat/supportedLocalesOf", "Intl.DurationFormat.supportedLocalesOf()")}}
  - : Retourne un tableau contenant celles des locales fournies qui sont prises en charge sans avoir à revenir à la locale par défaut de l'environnement d'exécution.

## Propriétés d'instance

Ces propriétés sont définies sur `Intl.DurationFormat.prototype` et partagées par toutes les instances de `Intl.DurationFormat`.

- {{JSxRef("Object/constructor", "Intl.DurationFormat.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet d'instance. Pour les instances de `Intl.DurationFormat`, la valeur initiale est le constructeur {{JSxRef("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat")}}.
- `Intl.DurationFormat.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Intl.DurationFormat"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Intl/DurationFormat/format", "Intl.DurationFormat.prototype.format()")}}
  - : Fonction accesseur qui met en forme une durée selon la locale et les options de mise en forme de cet objet `DurationFormat`.
- {{JSxRef("Intl/DurationFormat/formatToParts", "Intl.DurationFormat.prototype.formatToParts()")}}
  - : Retourne un tableau ({{JSxRef("Array")}}) d'objets représentant la durée mise en forme en parties.
- {{JSxRef("Intl/DurationFormat/resolvedOptions", "Intl.DurationFormat.prototype.resolvedOptions()")}}
  - : Retourne un nouvel objet avec des propriétés reflétant la locale et les options de mise en forme calculées lors de l'initialisation de l'objet.

## Exemples

### Utiliser `Intl.DurationFormat`

Les exemples ci-dessous montrent comment utiliser l'objet `Intl.DurationFormat` pour mettre en forme un objet de durée avec différentes locales et styles.

```js
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

// Avec le style défini sur "long" et la locale "fr-FR"
new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// "1 heure, 46 minutes et 40 secondes"

// Avec le style défini sur "short" et la locale "en"
new Intl.DurationFormat("en", { style: "short" }).format(duration);
// "1 hr, 46 min and 40 sec"

// Avec le style défini sur "narrow" et la locale "pt"
new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// "1 h 46 min 40 s"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Intl.DurationFormat` dans FormatJS <sup>(angl.)</sup>](https://formatjs.github.io/docs/polyfills/intl-durationformat/)
- L'objet {{JSxRef("Intl")}}
- La méthode {{JSxRef("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
