---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`Intl.ListFormat`** permet le formatage de listes sensible à la langue.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.ListFormat", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// Résultat attendu : "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// Résultat attendu : "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// Résultat attendu : "Motorcycle Bus Car"
```

## Constructeur

- {{JSxRef("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}
  - : Crée un nouvel objet `Intl.ListFormat`.

## Méthodes statiques

- {{JSxRef("Intl/ListFormat/supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : Retourne un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Propriétés d'instance

Ces propriétés sont définies sur `Intl.ListFormat.prototype` et partagées par toutes les instances de `Intl.ListFormat`.

- {{JSxRef("Object/constructor", "Intl.ListFormat.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet d'instance. Pour les instances de `Intl.ListFormat`, la valeur initiale est le constructeur {{JSxRef("Intl/ListFormat/ListFormat", "Intl.ListFormat")}}.
- `Intl.ListFormat.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Intl.ListFormat"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
  - : Retourne une chaîne de caractères formatée selon la langue, représentant les éléments de la liste.
- {{JSxRef("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}}
  - : Retourne un tableau d'objets représentant les différents composants pouvant être utilisés pour formater une liste de valeurs en tenant compte de la locale.
- {{JSxRef("Intl/ListFormat/resolvedOptions", "Intl.ListFormat.prototype.resolvedOptions()")}}
  - : Retourne un nouvel objet avec des propriétés reflétant les options de locale et de mise en forme calculées lors de la construction de l'objet `Intl.ListFormat` courant.

## Exemples

### Utiliser `format()`

Dans l'exemple qui suit, on voit comment créer un formateur de liste pour l'anglais.

```js
const liste = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    liste,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    liste,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(liste),
);
// Motorcycle Bus Car
```

### Utiliser `formatToParts()`

L'exemple suivant montre comment créer un formateur de liste renvoyant les fragments formatés.

```js
const liste = ["Motorcycle", "Bus", "Car"];
console.log(
  new Intl.ListFormat("en-GB", {
    style: "long",
    type: "conjunction",
  }).formatToParts(liste),
);

// [ { "type": "element", "value": "Motorcycle" },
//   { "type": "literal", "value": ", " },
//   { "type": "element", "value": "Bus" },
//   { "type": "literal", "value": ", and " },
//   { "type": "element", "value": "Car" } ];
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Intl.ListFormat` dans FormatJS <sup>(angl.)</sup>](https://formatjs.github.io/docs/polyfills/intl-listformat/)
- L'objet {{JSxRef("Intl")}}
