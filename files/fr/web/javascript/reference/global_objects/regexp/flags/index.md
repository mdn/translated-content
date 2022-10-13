---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - RegExp
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/flags
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/flags
---

{{JSRef}}

La propriété **`flags`** renvoie une chaîne de caractères contenant les [drapeaux (_flags_)](</fr/docs/Web/JavaScript/Guide/Expressions_régulières#Effectuer_des_recherches_avanc.C3.A9es_en_utilisant_les_drapeaux_(flags)>) de l'objet {{jsxref("RegExp")}} auquel elle appartient.

{{EmbedInteractiveExample("pages/js/regexp-prototype-flags.html")}}{{js_property_attributes(0, 0, 1)}}

## Description

Les drapeaux de la propriété `flags` sont rangés par ordre alphabétique de gauche à droite.

## Exemples

### Utiliser `flags`

```js
/toto/ig.flags;   // "gi"
/truc/myu.flags;  // "muy"
```

## Prothèse d'émulation (_polyfill_)

```js
if (RegExp.prototype.flags === undefined) {
  Object.defineProperty(RegExp.prototype, 'flags', {
    configurable: true,
    get: function() {
      return this.toString().match(/[gimuy]*$/)[0];
    }
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RegExp.prototype.source")}}
