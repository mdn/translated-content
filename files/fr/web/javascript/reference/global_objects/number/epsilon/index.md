---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - Propriété
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/EPSILON
---
{{JSRef}}

La propriété **`Number.EPSILON`** représente la différence entre le chiffre 1 (un) et la plus petite valeur supérieure à 1 qui peut être représentée par un nombre en JavaScript.

Il n'est pas nécessaire de créer un objet {{jsxref("Number")}} pour accéder à cette propriété statique, elle est accessible avec `Number.EPSILON`.

{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}{{js_property_attributes(0,0,0)}}

## Description

La propriété `EPSILON` vaut environ `2.2204460492503130808472633361816E-16` (ce qui correspond à 2^-52).

## Exemple

### Tester une égalité mathématique avec un seuil de précision

```js
x = 0.2;
y = 0.3;
equal = (Math.abs(x - y) < Number.EPSILON);
```

## Prothèse d'émulation (_polyfill_)

```js
if (Number.EPSILON === undefined) {
  Number.EPSILON  =  Math.pow(2, -52);
}
```

## Spécifications

| Spécification                                                                        | État                         | Commentaires         |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-number.epsilon', 'Number.EPSILON')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-number.epsilon', 'Number.EPSILON')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Number.EPSILON")}}

## Voir aussi

- L'objet {{jsxref("Number")}} auquel appartient cette propriété.
