---
title: "Intl.NumberFormat : méthode formatToParts()"
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`formatToParts()`** des instances de {{JSxRef("Intl.NumberFormat")}} retourne un tableau d'objets représentant chaque partie de la chaîne de caractères formatée qui serait retournée par {{JSxRef("Intl/NumberFormat/format", "format()")}}. Elle est utile pour construire des chaînes de caractères personnalisées à partir des jetons spécifiques à la locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.NumberFormat.prototype.formatToParts()")}}

```js interactive-example
const amount = 654321.987;
const options = { style: "currency", currency: "USD" };
const numberFormat = new Intl.NumberFormat("en-US", options);

const parts = numberFormat.formatToParts(amount);
const partValues = parts.map((p) => p.value);

console.log(partValues);
// Résultat attendu : "["$", "654", ",", "321", ".", "99"]"
```

## Syntaxe

```js-nolint
formatToParts(number)
```

### Paramètres

- `number`
  - : Un nombre ({{JSxRef("Number")}}), un grand entier ({{JSxRef("BigInt")}}), ou une chaîne de caractères, à formater. Les chaînes de caractères sont analysées de la même manière que dans [la conversion de nombres](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre), sauf que `formatToParts()` utilisera la valeur exacte que représente la chaîne de caractères, évitant ainsi toute perte de précision lors de la conversion implicite en nombre.

### Valeur de retour

Un tableau ({{JSxRef("Array")}}) d'objets contenant le nombre formaté en parties. Chaque objet possède deux propriétés, `type` et `value`, chacune contenant une chaîne de caractères. La concaténation des valeurs de `value`, dans l'ordre fourni, donnera la même chaîne de caractères que {{JSxRef("Intl/NumberFormat/format", "format()")}}. La propriété `type` peut être l'une des suivantes&nbsp;:

- `literal`
  - : Toute chaîne de caractères faisant partie du modèle de format&nbsp;; par exemple `" "`. Notez que les jetons courants comme le séparateur décimal ou les signes plus/moins ont leurs propres types de jetons.
- `integer`
  - : La partie entière du nombre, ou un segment de celle-ci si le regroupement est utilisé (contrôlé par `options.useGrouping`).
- `group`
  - : La chaîne de caractères du séparateur de groupe, telle que `","`. Présent uniquement lorsque le regroupement est utilisé (contrôlé par `options.useGrouping`).
- `decimal`
  - : La chaîne de caractères du séparateur décimal, telle que `"."`. Présent uniquement lorsque la partie fractionnaire est présente.
- `fraction`
  - : La partie fractionnaire du nombre.
- `compact`
  - : L'exposant compact, tel que `"M"` ou `"thousands"`. Présent uniquement lorsque `options.notation` est `"compact"`. La forme (`"short"` ou `"long"`) peut être contrôlée par `options.compactDisplay`.
- `exponentSeparator`
  - : Le séparateur d'exposant, tel que `"E"`. Présent uniquement lorsque `options.notation` est `"scientific"` ou `"engineering"`.
- `exponentMinusSign`
  - : Le signe moins de l'exposant, tel que `"-"`. Présent uniquement lorsque `options.notation` est `"scientific"` ou `"engineering"` et que l'exposant est négatif.
- `exponentInteger`
  - : La valeur entière de l'exposant. Présent uniquement lorsque `options.notation` est `"scientific"` ou `"engineering"`.
- `nan`
  - : Une chaîne de caractères représentant {{JSxRef("NaN")}}, telle que `"NaN"`. C'est le seul jeton représentant le nombre lui-même lorsque le nombre est `NaN`.
- `infinity`
  - : Une chaîne de caractères représentant {{JSxRef("Infinity")}} ou `-Infinity`, telle que `"∞"`. C'est le seul jeton représentant le nombre lui-même lorsque le nombre est `Infinity` ou `-Infinity`.
- `plusSign`
  - : Le signe plus, tel que `"+"`.
- `minusSign`
  - : Le signe moins, tel que `"-"`.
- `percentSign`
  - : Le signe pourcentage, tel que `"%"`. Présent uniquement lorsque `options.style` est `"percent"`.
- `unit`
  - : La chaîne de caractères représentant l'unité, telle que `"l"` ou `"litres"`. Présent uniquement lorsque `options.style` est `"unit"`. La forme (`"short"`, `"narrow"` ou `"long"`) peut être contrôlée par `options.unitDisplay`.
- `currency`
  - : La chaîne de caractères représentant la devise, telle que `"$"`, `"€"`, `"Dollar"` ou `"Euro"`. Présent uniquement lorsque `options.style` est `"currency"`. La forme (`"code"`, `"symbol"`, `"narrowSymbol"` ou `"name"`) peut être contrôlée par `options.currencyDisplay`.
- `unknown`
  - : Réservé pour tout jeton qui n'est pas reconnu comme l'un des précédents&nbsp;; devrait être rarement rencontré.

## Exemples

### Utiliser la méthode `formatToParts()`

La méthode `format()` retourne des chaînes de caractères localisées et opaques qui ne peuvent pas être manipulées directement&nbsp;:

```js
const nombre = 3500;

const formateur = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formateur.format(nombre);
// "3.500,00 €"
```

Cependant, dans de nombreuses interfaces utilisateur, vous pouvez vouloir personnaliser le formatage de cette chaîne de caractères, ou l'entrelacer avec d'autres textes. La méthode `formatToParts()` produit les mêmes informations en parties&nbsp;:

```js
formateur.formatToParts(nombre);

// Valeur de retour :
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
  { type: "decimal", value: "," },
  { type: "fraction", value: "00" },
  { type: "literal", value: " " },
  { type: "currency", value: "€" },
];
```

Maintenant, les informations sont disponibles séparément et elles peuvent être formatées et concaténées à nouveau de manière personnalisée. Par exemple, en utilisant {{JSxRef("Array.prototype.map()")}}, les [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions), une [instruction switch](/fr/docs/Web/JavaScript/Reference/Statements/switch), les [littéraux de gabarit](/fr/docs/Web/JavaScript/Reference/Template_literals) et {{JSxRef("Array.prototype.join()")}}, pour insérer un balisage supplémentaire pour certains composants.

```js
const chaineDeNombre = formateur
  .formatToParts(nombre)
  .map(({ type, value }) => {
    switch (type) {
      case "currency":
        return `<strong>${value}</strong>`;
      default:
        return value;
    }
  })
  .join("");

console.log(chaineDeNombre);
// "3.500,00 <strong>€</strong>"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.NumberFormat")}}
- La méthode {{JSxRef("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
