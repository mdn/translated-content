---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

La propriété globale **`Infinity`** est une valeur numérique représentant l'infini.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Infinity", "shorter")}}

```js interactive-example
const maxNumber = 10 ** 1000; // Nombre positif maximum

if (maxNumber === Infinity) {
  console.log("Appelons-le Infinity !");
  // Résultat attendu : "Appelons-le Infinity !"
}

console.log(1 / maxNumber);
// Résultat attendu : 0
```

## Valeur

La même valeur numérique que {{JSxRef("Number.POSITIVE_INFINITY")}}.

{{js_property_attributes(0, 0, 0)}}

## Description

`Infinity` est une propriété de _l'objet global_, c'est-à-dire qu'il s'agit d'une variable dans la portée globale.

La valeur `Infinity` (infini positif) est supérieure à tout autre nombre.

Cette valeur se comporte légèrement différemment de l'infini mathématique&nbsp;; voir {{JSxRef("Number.POSITIVE_INFINITY")}} pour plus de détails.

## Exemples

### Utiliser la propriété `Infinity`

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(10 ** 1000); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Number.NEGATIVE_INFINITY")}}
- La propriété {{JSxRef("Number.POSITIVE_INFINITY")}}
- La méthode {{JSxRef("Number.isFinite()")}}
