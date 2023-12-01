---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
---

{{JSRef}}

La méthode **`Intl.Numberformat.prototype.formatToParts()`** permet de produire des fragments de chaînes à partir d'un nombre pour le mettre en forme avec des formateurs `NumberTimeFormat`.

## Syntaxe

```js
Intl.NumberFormat.prototype.formatToParts(nombre);
```

### Paramètres

- `nombre` {{optional_inline}}
  - : Le nombre qu'on souhaite mettre en forme.

### Valeur de retour

Un tableau {{jsxref("Array")}} contenant des objets correspondants aux différents fragments du nombres.

## Description

La méthode `formatToParts()` est peut être utilisée lorsqu'on met en forme des chaînes de caractères représentant des valeurs numériques. Cette méthode renvoie un tableau ({{jsxref("Array")}}) d'objets qui sont les différents fragments spécifiques aux locales et qui permettent de construire des chaînes dans un format spécifiques tout en conservant les parties liées à la locale. `formatToParts()` renvoie une structure analogue à :

```js
[
  { type: "integer", value: "3" }
  { type: "group", value: "." }
  { type: "integer", value: "500" }
]
```

Les valeurs possibles pour l'attribut `type` sont :

- `currency`
  - : Le suffixe associé à la devise. Ce peut être le symbole "$", "€" ou bien le nom de la devise "Dollar", "Euro" selon la façon dont `currencyDisplay` est indiquée.
- `decimal`
  - : Le séparateur décimal utilisé (".").
- `fraction`
  - : La partie fractionnaire du nombre.
- `group`
  - : La chaîne de caractères utilisée pour indiquer un groupe (",").
- `infinity`
  - : La chaîne de caractères qui représente la valeur {{jsxref("Infinity")}} ("∞").
- `integer`
  - : La partie entière du nombre.
- `literal`
  - : Toute chaîne de caractères littérale ou blanc utilisée dans le nombre mis en forme.
- `minusSign`
  - : La chaîne de caractères utilisée pour le signe moins ("-").
- `nan`
  - : La chaîne de caractères utilisée pour représenter la valeur {{jsxref("NaN")}} ("NaN").
- `plusSign`
  - : La chaîne de caractères utilisée pour le signe plus ("+").
- `percentSign`
  - : La châine de caractères utilisée pour le symbole pourcent ("%").

## Exemples

`NumberFormat` produit une chaîne localisée opaque qui ne peut pas être manipulée directement :

```js
var number = 3500;

var formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

Toutefois, pour certaines applications, on souhaite adapter la mise en forme de cette chaîne de caractères. La méthode `formatToParts` permet d'obtenir cette flexibilité tout en conservant les différents fragments produits par `NumberFormat` :

```js
formatter.formatToParts(number);

// return value:
[
  { type: "integer",  value: "3"   }
  { type: "group",    value: "."   }
  { type: "integer",  value: "500" }
  { type: "decimal",  value: ","   }
  { type: "fraction", value: "00"  }
  { type: "literal",  value: " "   }
  { type: "currency", value: "€"   }
]
```

Maintenant que la chaîne est décomposée, on peut la réassembler d'une façon spécifique. On peut, par exemple utiliser {{jsxref("Array.prototype.map()")}}, [une fonction fléchée](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées), une [instruction `switch`](/fr/docs/Web/JavaScript/Reference/Instructions/switch), [des littéraux de gabarits](/fr/docs/Web/JavaScript/Reference/Littéraux_gabarits) et {{jsxref("Array.prototype.reduce()")}}.

```js
var numberString = formatter
  .formatToParts(number)
  .map(({ type, value }) => {
    switch (type) {
      case "currency":
        return `<strong>${value}</strong>`;
      default:
        return value;
    }
  })
  .reduce((string, part) => string + part);
```

Grâce à cette fonction, on pourra mettre en gras le suffixe associé à la devise :

```js
console.log(numberString);
// "3.500,00 <strong>€</strong>"
```

## Prothèse d'émulation (_polyfill_)

Une prothèse pour cette fonctionnalité est disponible [dans le dépôt associé à la proposition](https://github.com/zbraniecki/proposal-intl-formatToParts).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
- {{jsxref("NumberFormat.format", "Intl.NumberFormat.prototype.format")}}
- Formater des dates : {{jsxref("DateTimeFormat.formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
