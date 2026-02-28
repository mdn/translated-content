---
title: Constructeur Intl.ListFormat()
short-title: Intl.ListFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Le constructeur **`Intl.ListFormat()`** crée des objets {{JSxRef("Intl.ListFormat")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur Intl.ListFormat()", "taller")}}

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

## Syntaxe

```js-nolint
new Intl.ListFormat()
new Intl.ListFormat(locales)
new Intl.ListFormat(locales, options)
```

> [!NOTE]
> `Intl.ListFormat()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` lève une exception {{JSxRef("TypeError")}}.

### Paramètres

- `locales` {{Optional_Inline}}
  - : A string with a {{Glossary("BCP 47 language tag")}} or an {{JSxRef("Intl.Locale")}} instance, or an array of such locale identifiers. The runtime's default locale is used when `undefined` is passed or when none of the specified locale identifiers is supported. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{Optional_Inline}}
  - : Un objet contenant les propriétés suivantes, dans l'ordre dans lequel elles sont récupérées (toutes sont optionnelles)&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance de la locale à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir [Identification et négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale).
    - `type`
      - : Indique le type de regroupement. Les valeurs possibles sont&nbsp;:
        - `"conjunction"` (par défaut)
          - : Pour un regroupement des éléments de la liste basé sur «&nbsp;et&nbsp;»&nbsp;: «&nbsp;A, B et C&nbsp;»
        - `"disjunction"`
          - : Pour un regroupement des éléments de la liste basé sur «&nbsp;ou&nbsp;»&nbsp;: «&nbsp;A, B ou C&nbsp;»
        - `"unit"`
          - : Pour regrouper les éléments de la liste comme une unité composée (ni basé sur «&nbsp;et&nbsp;» ni sur «&nbsp;ou&nbsp;»)&nbsp;: «&nbsp;A, B, C&nbsp;»
    - `style`
      - : Le style de regroupement (par exemple, si les séparateurs de liste et les conjonctions sont inclus). Les valeurs possibles sont&nbsp;:
        - `"long"` (par défaut)
          - : Le format de liste typique. Par exemple&nbsp;: «&nbsp;A, B et C&nbsp;»
        - `"short"`
          - : L'espacement, la longueur ou la présence d'une conjonction, et les séparateurs peuvent changer. En général, il est aussi souhaitable que les éléments d'entrée soient abrégés. Par exemple&nbsp;: «&nbsp;A, B, & C&nbsp;»
        - `"narrow"`
          - : Lorsque c'est possible, le format de la liste est encore plus abrégé, de sorte que le résultat soit aussi court que possible. Par exemple&nbsp;: «&nbsp;A, B, C&nbsp;»

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `locales` ou `options` contiennent des valeurs non valides.

## Exemples

### Utiliser la méthode `format()`

L'exemple suivant illustre comment créer un formateur de liste basé sur la langue anglaise.

```js
const liste = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { type: "conjunction" }).format(liste),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { type: "disjunction" }).format(liste),
);
// Motorcycle, Bus or Car
```

### Virgule d'Oxford

La [virgule d'Oxford](https://fr.wikipedia.org/wiki/Virgule_de_s%C3%A9rie) est une virgule placée juste avant la conjonction de coordination (généralement «&nbsp;et&nbsp;» ou «&nbsp;ou&nbsp;») dans une liste de trois termes ou plus. De façon controversée, la locale `en-US` utilise la virgule d'Oxford, tandis que la locale `en-GB` ne l'utilise pas.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-US", { type: "conjunction" }).format(list));
// Motorcycle, Bus, and Car
```

### Formatage d'unités

Utilisez `style: "unit"` pour formater les éléments de la liste comme une unité composée. En fait, {{JSxRef("Intl.DurationFormat")}} utilise le formatage de liste de type unité en interne pour formater les durées.

```js
const marathon = [
  [42, "kilometer"],
  [195, "meter"],
];

console.log(
  new Intl.ListFormat("en-US", { type: "unit" }).format(
    marathon.map((component) =>
      component[0].toLocaleString("en-US", {
        style: "unit",
        unit: component[1],
        unitDisplay: "long",
      }),
    ),
  ),
);
// 42 kilometers, 195 meters
```

### Style court et style étroit

Les styles `"short"` et `"narrow"` sont utiles pour des représentations compactes des listes.

```js
const list = ["Motorcycle", "Bus", "Car"];
console.log(new Intl.ListFormat("en-US", { style: "short" }).format(list));
// Motorcycle, Bus, & Car

console.log(new Intl.ListFormat("en-US", { style: "narrow" }).format(list));
// Motorcycle, Bus, Car

console.log(new Intl.ListFormat("en-GB", { style: "short" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { style: "narrow" }).format(list));
// Motorcycle, Bus, Car
```

Les éléments d'entrée ne sont pas transformés, mais il est souvent souhaitable de les abréger également.

```js
const marathon = [
  [42, "kilometer"],
  [195, "meter"],
];

function formatDistance(locale, distance, style) {
  return new Intl.ListFormat(locale, { type: "unit", style }).format(
    marathon.map((component) =>
      component[0].toLocaleString(locale, {
        style: "unit",
        unit: component[1],
        unitDisplay: style,
      }),
    ),
  );
}

console.log(formatDistance("en-US", marathon, "long"));
// 42 kilometers, 195 meters
console.log(formatDistance("en-US", marathon, "short"));
// 42 km, 195 m
console.log(formatDistance("en-US", marathon, "narrow"));
// 42km 195m
```

### Sélection de la conjonction

Le mot de conjonction utilisé peut dépendre des valeurs de chaîne de caractères des éléments de la liste. Par exemple, en espagnol, la conjonction est `"y"` pour la plupart des mots, mais `"e"` pour les mots commençant par la voyelle `"i"`.

```js
const words = ["fuerte", "indomable"];
const formatter = new Intl.ListFormat("es-ES", { type: "conjunction" });

console.log(formatter.format(words));
// fuerte e indomable
console.log(formatter.format(words.toReversed()));
// indomable y fuerte
```

L'algorithme utilisé pour déterminer la conjonction n'est pas parfait (par exemple, il ne peut pas toujours déterminer la prononciation d'un mot à partir de son orthographe), mais il devrait fonctionner dans la plupart des cas.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.ListFormat")}}
- L'objet {{JSxRef("Intl")}}
