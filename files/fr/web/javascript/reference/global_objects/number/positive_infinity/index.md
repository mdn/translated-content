---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
tags:
  - JavaScript
  - Number
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/POSITIVE_INFINITY
---
{{JSRef}}

La propriéte **`Number.POSITIVE_INFINITY`** représente l'infini (positif).

{{EmbedInteractiveExample("pages/js/number-positive-infinity.html")}}

{{js_property_attributes(0,0,0)}}

## Description

La valeur de `Number.POSITIVE_INFINITY` est identique à la valeur de la propriété de l'objet global {{jsxref("Infinity")}}.

Cette valeur possède un comportement légèrement différent de l'infini au sens mathématique :

- Tout valeur positive, y compris `POSITIVE_INFINITY,` multipliée par  `POSITIVE_INFINITY` sera égale à `POSITIVE_INFINITY`.
- Toute valeur négative, y compris {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, multipliée par `POSITIVE_INFINITY` sera égale à `NEGATIVE_INFINITY`.
- Zéro multiplié par `POSITIVE_INFINITY` sera égal à {{jsxref("NaN")}}.
- NaN multiplié par `POSITIVE_INFINITY` sera égal à NaN.
- `POSITIVE_INFINITY`, divisé par n'importe quelle valeur négative, à l'exception de `NEGATIVE_INFINITY`, sera égal à `NEGATIVE_INFINITY`.
- `POSITIVE_INFINITY`, divisé par n'importe quelle valeur positive, à l'exception de `POSITIVE_INFINITY`, sera égal à `POSITIVE_INFINITY`.
- `POSITIVE_INFINITY`, divisé par `NEGATIVE_INFINITY` ou `POSITIVE_INFINITY`, sera égal NaN.
- Tout nombre positif divisé par `POSITIVE_INFINITY` sera égal au zéro positif.
- Tout nombre négatif divisé par `POSITIVE_INFINITY` sera égal au zéro négatif.

Il est possible d'utiliser la propriété `Number.POSITIVE_INFINITY` pour faire un test d'erreur sur une valeur qu'on attendait finie. Cependant, la méthode {{jsxref("isFinite")}} sera plus appropriée dans ce cas.

`Number.POSITIVE_INFINITY` est une propriété statique de {{jsxref("Number")}} et il n'est donc pas nécessaire de créer un objet {{jsxref("Number")}} afin d'utiliser cette propriété.

## Exemple

### Utiliser `POSITIVE_INFINITY`

Dans l'exemple qui suit, on affecte une valeur plus grande que la valeur maximale à la variable `grosNombre`. Lors de l'exécution de l'instruction `if`, `grosNombre` aura la valeur `Infinity`, pour continuer, on met à jour `grosNombre` avec une valeur plus acceptable.

```js
var grosNombre = Number.MAX_VALUE * 2
if (grosNombre == Number.POSITIVE_INFINITY) {
 grosNombre = renvoyerUnNombreFini();
}
```

## Spécifications

| Spécification                                                                                                    | Statut                       | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.3.6', 'Number.POSITIVE_INFINITY')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.positive_infinity', 'Number.POSITIVE_INFINITY')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.positive_infinity', 'Number.POSITIVE_INFINITY')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Number.POSITIVE_INFINITY")}}

## Voir aussi

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite")}}
