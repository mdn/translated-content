---
title: "Intl.ListFormat : méthode format()"
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`format()`** des instances de {{JSxRef("Intl.ListFormat")}} retourne une chaîne de caractères avec une représentation de la liste adaptée à la langue.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.ListFormat.prototype.format()", "taller")}}

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
format(list)
```

### Paramètres

- `list`
  - : Un objet itérable, tel qu'un tableau, contenant des chaînes de caractères. Si vous l'omettez, cela formate un tableau vide, ce qui peut prêter à confusion, il est donc conseillé de toujours passer explicitement une liste.

### Valeur de retour

Une chaîne de caractères formatée selon la langue, représentant les éléments de la liste.

> [!NOTE]
> La plupart du temps, le formatage retourné par `format()` est cohérent. Cependant, le résultat peut varier selon les implémentations, même au sein d'une même locale — ces variations sont prévues et autorisées par la spécification. Le résultat peut aussi ne pas être celui attendu. Par exemple, la chaîne peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `format()` à des constantes codées en dur.

## Exemples

### Utiliser la méthode `format()`

L'exemple suivant montre comment créer un formateur de liste en utilisant la langue anglaise.

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.ListFormat")}}
