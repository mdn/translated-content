---
title: Constructeur Intl.ListFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
---

{{JSRef}}

Le constructeur **`Intl.ListFormat()`** permet de créer des objets [`Intl.ListFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) pour le formatage de listes adapté à la locale et aux options fournies.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"
```

## Syntaxe

```js
new Intl.ListFormat();
new Intl.ListFormat(locales);
new Intl.ListFormat(locales, options);
```

### Paramètres

- `locales` {{optional_inline}}
  - : Une chaîne de caractères représentant une balise de langue BCP 47 ou un tableau de telles balises. Pour la forme générale et l'interprétation de cet argument, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_choix_de_la_locale).
- `options` {{optional_inline}}

  - : Un objet avec une ou plusieurs des propriétés suivantes&nbsp;:

    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont "`lookup`" et "`best fit`"&nbsp;; la valeur par défaut est "`best fit`". Pour plus d'information, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#négociation_de_la_locale).
    - `type`
      - : Le format de sortie produit. Les valeurs possibles sont "`conjunction`" qui indique une liste additive (par exemple "`A, B, et C`"), c'est la valeur par défaut, ou "`disjunction`" qui indique une liste d'options distinctes (par exemple, "`A, B, ou C`"), ou "`unit`" qui indique une liste de valeurs avec des unités (par exemple, "`5 kg, 12 L`").
    - `style`
      - : La longueur du message formaté. Les valeurs possibles sont "`long`", la valeur par défaut (par exemple "`A, B, et C`")&nbsp;; "`short`" (par exemple "`A, B, C`"), ou "`narrow`" (par exemple, "`A B C`"). Lorsque la valeur de `style` est "`short`" ou "`narrow`", seule la valeur "`unit`" est autorisée pour l'option "type".

## Exemples

### Utilisation de format()

L'exemple suivant illustre comment créer un formateur de liste basé sur la langue française.

```js
const list = ["Moto", "Bus", "Car"];

console.log(
  new Intl.ListFormat("fr", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// > Moto, Bus et Car

console.log(
  new Intl.ListFormat("fr", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// > Moto, Bus ou Car

console.log(
  new Intl.ListFormat("fr", { style: "narrow", type: "unit" }).format(list),
);
// > Moto Bus Car
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.ListFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat)
- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
