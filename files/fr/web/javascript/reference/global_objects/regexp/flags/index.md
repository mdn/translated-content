---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
---

{{JSRef}}

La propriété **`flags`** renvoie une chaîne de caractères contenant les [drapeaux (_flags_)](</fr/docs/Web/JavaScript/Guide/Regular_expressions#Effectuer_des_recherches_avancées_en_utilisant_les_drapeaux_(flags)>) de l'objet {{jsxref("RegExp")}} auquel elle appartient.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.flags")}}

```js interactive-example
// Outputs RegExp flags in alphabetical order

console.log(/foo/gi.flags);
// Expected output: "gi"

console.log(/bar/muy.flags);
// Expected output: "muy"
```

{{js_property_attributes(0, 0, 1)}}

## Description

Les drapeaux de la propriété `flags` sont rangés par ordre alphabétique de gauche à droite.

## Exemples

### Utiliser `flags`

```js
/toto/gi.flags; // "gi"
/truc/muy.flags; // "muy"
```

## Prothèse d'émulation (_polyfill_)

```js
if (RegExp.prototype.flags === undefined) {
  Object.defineProperty(RegExp.prototype, "flags", {
    configurable: true,
    get: function () {
      return this.toString().match(/[gimuy]*$/)[0];
    },
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RegExp.prototype.source")}}
